(function () {
  var r = window.RESUME, app = document.getElementById("app");
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function section(title, body) { return body ? '<section><h2>' + title + '</h2>' + body + '</section>' : ""; }
  var c = r.contact, links = [];
  if (c.email) links.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + '</a>');
  if (c.phone) links.push('<a href="tel:' + esc(c.phone) + '">' + esc(c.phone) + '</a>');
  if (c.linkedin) links.push('<a href="' + esc(c.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a>');
  if (c.github) links.push('<a href="' + esc(c.github) + '" target="_blank" rel="noopener">GitHub</a>');

  var exp = r.experience.map(function (e) {
    return '<article><div class="row"><h3>' + esc(e.role) + ' · ' + esc(e.company) + '</h3><span class="muted">' + esc(e.period) + '</span></div><ul>' +
      e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("") + '</ul></article>';
  }).join("");
  var edu = r.education.map(function (e) {
    return '<article><div class="row"><h3>' + esc(e.degree) + '</h3><span class="muted">' + esc(e.period) + '</span></div><p>' + esc(e.school) + '</p></article>';
  }).join("");
  var skills = '<ul class="chips">' + r.skills.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ul>';
  var projects = r.projects.map(function (p) {
    var n = p.link ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.name) + '</a>' : esc(p.name);
    return '<article><h3>' + n + '</h3><p>' + esc(p.description) + '</p></article>';
  }).join("");

  var mail = c.email ? '<a class="btn" href="mailto:' + esc(c.email) + '?subject=' + encodeURIComponent("Opportunity for " + r.name) + '">Contact me</a>' : "";
  app.innerHTML =
    '<header><h1>' + esc(r.name) + '</h1><p class="title">' + esc(r.title) + '</p><p class="muted">' + esc(r.location) + '</p>' +
    '<p class="links">' + links.join(" · ") + '</p><div class="actions">' + mail +
    '<button class="btn alt" onclick="window.print()">Download PDF</button></div></header>' +
    section("Summary", '<p>' + esc(r.summary) + '</p>') +
    section("Experience", exp) + section("Education", edu) +
    section("Skills", skills) + section("Projects", projects);
  document.title = r.name + " – Resume";
})();
