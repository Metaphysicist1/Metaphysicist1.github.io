import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { esc, validate, renderNow, renderLog, renderHeader } from "../lib.js";

const dream = { id: "d1", kind: "dream", date: "2023", title: "Win a hackathon" };
const done = { id: "s1", kind: "shipped", date: "2024-11", title: "Won it", text: "First place.", url: "https://x.test", fulfills: "d1" };
const older = { id: "s0", kind: "shipped", date: "2021", title: "Old thing" };

test("esc escapes html", () => {
  assert.equal(esc(`<a href="x">&'`), "&lt;a href=&quot;x&quot;&gt;&amp;&#39;");
  assert.equal(esc(undefined), "");
});

test("validate catches bad kind, date, duplicate id, dangling fulfills", () => {
  const errs = validate({ entries: [
    { id: "a", kind: "maybe", title: "t" },
    { id: "a", kind: "shipped", date: "24", title: "t", fulfills: "nope" },
  ]});
  assert.equal(errs.length, 4);
  assert.deepEqual(validate({ entries: [dream, done, older] }), []);
});

test("renderNow drops empty lines and renders nothing when empty", () => {
  assert.equal(renderNow(["", " "]), "");
  const html = renderNow(["Building X", ""]);
  assert.match(html, /<li>Building X<\/li>/);
  assert.equal((html.match(/<li>/g) || []).length, 1);
});

test("renderLog: dreams first, shipped newest first, dreamed note, link", () => {
  const html = renderLog([older, dream, done]);
  const order = ["Win a hackathon", "Won it", "Old thing"].map((t) => html.indexOf(t));
  assert.deepEqual([...order].sort((a, b) => a - b), order);
  assert.match(html, /← dreamed 2023/);
  assert.match(html, /<a href="https:\/\/x.test">Won it<\/a>/);
  assert.match(html, /done 2024/);
});

test("renderLog skips a dangling fulfills note", () => {
  const html = renderLog([{ ...done, fulfills: "missing" }]);
  assert.doesNotMatch(html, /dreamed/);
});

test("renderHeader hides links without url", () => {
  const html = renderHeader({ name: "E", links: [{ label: "GitHub", url: "https://g.test" }, { label: "Strava", url: "" }] });
  assert.match(html, /GitHub/);
  assert.doesNotMatch(html, /Strava/);
});

test("real data/life.json is valid", () => {
  const data = JSON.parse(readFileSync(new URL("../data/life.json", import.meta.url)));
  assert.deepEqual(validate(data), []);
});
