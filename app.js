import { renderPage } from "./lib.js";

fetch("data/life.json")
  .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
  .then((data) => {
    document.getElementById("app").innerHTML = renderPage(data);
    document.getElementById("fallback").hidden = true;
  })
  .catch((err) => console.error("life.json failed to load:", err));
