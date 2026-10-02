# metaphysicist1.github.io

Personal page of Edgar Abasov: a log of things dreamed and things shipped.

To update the site, edit `data/life.json` only:

- add an entry with `"kind": "shipped"` (date `YYYY` or `YYYY-MM`), or `"kind": "dream"`;
- when a dream comes true, add the shipped entry with `"fulfills": "<dream id>"` — the page shows "← dreamed <year>";
- empty fields (e.g. a link with `"url": ""`) are simply not shown.

Check before pushing: `node --test`. No build step; GitHub Pages serves the repo root.
