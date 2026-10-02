// Pure functions: life.json -> HTML strings. No DOM access, so node can test them.

const ENT = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ENT[c]);

const DATE = /^\d{4}(-\d{2})?$/;
const year = (d) => (d ? d.slice(0, 4) : "");
const filled = (s) => typeof s === "string" && s.trim() !== "";
const a = (label, url) => (filled(url) ? `<a href="${esc(url)}">${esc(label)}</a>` : esc(label));

export function validate(data) {
  const errs = [];
  const entries = data.entries ?? [];
  const ids = new Set();
  for (const e of entries) {
    if (ids.has(e.id)) errs.push(`duplicate id: ${e.id}`);
    ids.add(e.id);
    if (e.kind !== "dream" && e.kind !== "shipped") errs.push(`${e.id}: bad kind ${e.kind}`);
    if (e.date && !DATE.test(e.date)) errs.push(`${e.id}: bad date ${e.date}`);
    if (e.kind === "shipped" && !e.date) errs.push(`${e.id}: shipped needs a date`);
  }
  const dreams = new Set(entries.filter((e) => e.kind === "dream").map((e) => e.id));
  for (const e of entries) {
    if (e.fulfills && !dreams.has(e.fulfills)) errs.push(`${e.id}: fulfills unknown dream ${e.fulfills}`);
  }
  return errs;
}

export function renderHeader(d) {
  const links = (d.links ?? []).filter((l) => filled(l.url)).map((l) => a(l.label, l.url)).join(" · ");
  return `<header>
  ${filled(d.photo) ? `<img src="${esc(d.photo)}" alt="${esc(d.name)}" width="96" height="96">` : ""}
  <h1>${esc(d.name)}</h1>
  ${filled(d.about) ? `<p>${esc(d.about)}</p>` : ""}
  ${filled(d.place) ? `<p class="muted">${esc(d.place)}</p>` : ""}
  ${links ? `<p>${links}</p>` : ""}
</header>`;
}

export function renderNow(now = []) {
  const items = now.filter(filled);
  if (!items.length) return "";
  return `<section><h2>Now</h2><ul>${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></section>`;
}

function row(e, date, kindNote) {
  const body = [a(e.title, e.url), filled(e.text) ? ` — ${esc(e.text)}` : "", kindNote ? ` <span class="note">${esc(kindNote)}</span>` : ""].join("");
  const img = filled(e.image) ? `<img src="${esc(e.image)}" alt="${esc(e.title)}" loading="lazy">` : "";
  return `<li id="${esc(e.id)}" class="${e.kind}"><time>${esc(date)}</time><span class="kind">${e.kind}</span><span class="body">${body}${img}</span></li>`;
}

export function renderLog(entries = []) {
  const byId = new Map(entries.map((e) => [e.id, e]));
  const fulfilledBy = new Map(entries.filter((e) => e.fulfills).map((e) => [e.fulfills, e]));
  const dreams = entries.filter((e) => e.kind === "dream");
  const shipped = entries.filter((e) => e.kind === "shipped").sort((x, y) => (x.date < y.date ? 1 : x.date > y.date ? -1 : 0));

  const dreamRows = dreams.map((e) => {
    const done = fulfilledBy.get(e.id);
    return row(e, e.date ? year(e.date) : "—", done ? `done ${year(done.date)}` : "");
  });
  const shippedRows = shipped.map((e) => {
    let note = "";
    if (e.fulfills) {
      const d = byId.get(e.fulfills);
      if (d?.kind === "dream") note = d.date ? `← dreamed ${year(d.date)}` : "← was a dream";
      else console.warn(`life.json: ${e.id} fulfills unknown dream ${e.fulfills}`);
    }
    return row(e, e.date, note);
  });
  return `<section><h2>Log</h2><ol class="log">${dreamRows.join("")}${shippedRows.join("")}</ol></section>`;
}

export function renderFooter(d) {
  return `<footer>${filled(d.cv) ? `${a("CV (PDF)", d.cv)} · ` : ""}updated ${esc(d.updated)}</footer>`;
}

export const renderPage = (d) => renderHeader(d) + renderNow(d.now) + renderLog(d.entries) + renderFooter(d);
