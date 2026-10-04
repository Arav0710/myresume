(function () {
  var r = window.RESUME, app = document.getElementById("app");
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function section(title, body) { return body ? '<section><h2>' + title + '</h2>' + body + '</section>' : ""; }
  var c = r.contact, links = [];
  if (c.email) links.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.phone) links.push('<a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + '</a>');
  if (c.linkedin) links.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (c.github) links.push('<a href="' + esc(c.github) + '" target="_blank" rel="noopener">GitHub</a>');

  function bullets(pts) { return '<ul>' + pts.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul>'; }
  var exp = r.experience.map(function (e) {
    var body = (e.groups || []).map(function (g) { return '<h4>' + esc(g.heading) + '</h4>' + bullets(g.points); }).join("") +
      (e.points ? bullets(e.points) : "") + (e.stack ? '<p class="muted stack">Stack: ' + esc(e.stack) + '</p>' : "");
    return '<article><div class="row"><h3>' + esc(e.role) + ' <span class="muted">| ' + esc(e.company) + '</span></h3><span class="muted">' +
      esc(e.period) + ' · ' + esc(e.location) + '</span></div>' + body + '</article>';
  }).join("");
  var edu = r.education.map(function (e) {
    return '<article><div class="row"><h3>' + esc(e.degree) + ' — ' + esc(e.school) + '</h3><span class="muted">' + esc(e.period) + '</span></div></article>';
  }).join("") + r.extras.map(function (x) { return '<p><strong>' + esc(x.label) + ':</strong> ' + esc(x.items) + '</p>'; }).join("");
  var skills = r.skills.map(function (x) { return '<p><strong>' + esc(x.label) + ':</strong> ' + esc(x.items) + '</p>'; }).join("");
  var mail = c.email ? '<a class="btn" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent("Opportunity for " + r.name) + '">Contact me</a>' : "";
  app.innerHTML =
    '<header><h1>' + esc(r.name) + '</h1><p class="title">' + esc(r.title) + '</p><p class="muted">' + esc(r.tagline) + '</p><p class="muted">' + esc(r.location) + '</p>' +
    '<p class="links">' + links.join(" · ") + '</p><div class="actions">' + mail +
    '<button class="btn alt" onclick="window.print()">Download PDF</button></div></header>' +
    section("Professional Summary", r.summary.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("")) +
    section("Experience", exp) + section("Skills", skills) + section("Education & Certifications", edu);
  document.title = r.name + " – Resume";
})();
