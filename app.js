(function () {
  var r = window.RESUME, app = document.getElementById("app");
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function section(id, title, body) { return body ? '<section id="' + id + '"><h2>' + title + '</h2>' + body + '</section>' : ""; }
  function bullets(pts) { return '<ul>' + pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>'; }
  var c = r.contact, links = [];
  if (c.email) links.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.phone) links.push('<a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + '</a>');
  if (c.linkedin) links.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (c.github) links.push('<a href="' + esc(c.github) + '" target="_blank" rel="noopener">GitHub</a>');

  var stats = '<div class="stats">' + r.stats.map(function (s) {
    return '<div class="stat"><b>' + esc(s.value) + '</b><span>' + esc(s.label) + '</span></div>'; }).join("") + '</div>';

  var sc = r.schematic;
  var schematic = '<p class="muted">' + esc(sc.note) + '</p><ol class="flow">' + sc.steps.map(function (s, i) {
    return '<li><span class="num">' + (i + 1) + '</span><strong>' + esc(s.name) + '</strong><small>' + esc(s.detail) + '</small></li>'; }).join("") + '</ol>';

  var exp = r.experience.map(function (e) {
    var body = (e.groups || []).map(function (g) { return '<h4>' + esc(g.heading) + '</h4>' + bullets(g.points); }).join("") +
      (e.points ? bullets(e.points) : "") + (e.stack ? '<p class="stack">Stack: ' + esc(e.stack) + '</p>' : "");
    return '<article class="card"><div class="row"><h3>' + esc(e.role) + '<span class="co"> · ' + esc(e.company) + '</span></h3><span class="muted">' +
      esc(e.period) + ' · ' + esc(e.location) + '</span></div>' + body + '</article>';
  }).join("");
  var skills = '<div class="skills">' + r.skills.map(function (x) {
    return '<div class="card"><h3>' + esc(x.label) + '</h3><ul class="chips">' + x.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul></div>'; }).join("") + '</div>';
  var edu = r.education.map(function (e) {
    return '<article class="card"><div class="row"><h3>' + esc(e.degree) + '<span class="co"> · ' + esc(e.school) + '</span></h3><span class="muted">' + esc(e.period) + '</span></div></article>';
  }).join("") + r.extras.map(function (x) { return '<p><strong>' + esc(x.label) + ':</strong> ' + esc(x.items) + '</p>'; }).join("");

  var mail = c.email ? '<a class="btn" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent("Opportunity for " + r.name) + '">Contact me</a>' : "";
  app.innerHTML =
    '<header class="hero"><div class="wrap"><h1>' + esc(r.name) + '</h1><p class="title">' + esc(r.title) + '</p><p class="tag">' + esc(r.tagline) + '</p>' +
    '<p class="loc">' + esc(r.location) + '</p><p class="links">' + links.join(" · ") + '</p>' +
    '<div class="actions">' + mail + '<button class="btn alt" id="print">Download PDF</button><button class="btn alt" id="install" hidden>Install app</button></div></div></header>' +
    '<nav class="nav"><div class="wrap"><a href="#summary">Summary</a><a href="#schematic">Schematic</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a></div></nav>' +
    '<main class="wrap">' + stats +
    section("summary", "Summary", r.summary.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("")) +
    section("schematic", esc(sc.title), schematic) +
    section("experience", "Experience", exp) + section("skills", "Skills", skills) + section("education", "Education & Certifications", edu) + '</main>' +
    '<footer class="wrap muted">© ' + new Date().getFullYear() + ' ' + esc(r.name) + '</footer>';
  document.title = r.name + " – Resume";
  document.getElementById("print").onclick = function () { window.print(); };

  var deferred; var btn = document.getElementById("install");
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); deferred = e; btn.hidden = false; });
  btn.onclick = function () { if (deferred) { deferred.prompt(); deferred = null; btn.hidden = true; } };
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(function () {});
})();
