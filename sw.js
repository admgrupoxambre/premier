/* PREMIER · notificações no aparelho (Web Push). Publicado junto com o site (sw.js). Não guarda dados nem páginas. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = {body: e.data ? e.data.text() : ""}; }
  const base = self.registration.scope;
  e.waitUntil(self.registration.showNotification(d.title || "PREMIER", {
    body: d.body || "Há novidades na sua premiação.", tag: d.tag || "premier", renotify: true,
    icon: base + "icon-192.png", badge: base + "icon-192.png", data: {url: d.url || base}
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = (e.notification.data || {}).url || self.registration.scope;
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(ws => {
    for (const w of ws) if (w.url.startsWith(self.registration.scope) && "focus" in w) return w.focus();
    return self.clients.openWindow(url);
  }));
});
