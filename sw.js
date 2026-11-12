/* PREMIER · notificações no aparelho (Web Push). Publicado junto com o site (sw.js). Não guarda dados nem páginas.
   Aviso do dia (Gerar): chega com o texto, criptografado. Aviso instantâneo (mensagem, chat, contestação): chega vazio
   e o aparelho busca o texto no serviço (?s= no endereço deste arquivo), só pela própria inscrição. */
const SERVICO = new URL(self.location.href).searchParams.get("s") || "";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
async function pendentes(){
  try{
    const sub = await self.registration.pushManager.getSubscription();
    if(!SERVICO || !sub) return [];
    const r = await fetch(SERVICO, {method: "POST", headers: {"Content-Type": "text/plain;charset=utf-8"}, body: JSON.stringify({acao: "push_pendentes", endpoint: sub.endpoint})});
    const j = await r.json(); return (j && j.avisos) || [];
  }catch(_){ return []; }
}
function mostrar(d){
  const base = self.registration.scope;
  return self.registration.showNotification(d.title || "PREMIER", {
    body: d.body || "Há novidades na plataforma.", tag: d.tag || "premier", renotify: true,
    icon: base + "icon-192.png", badge: base + "icon-192.png", data: {url: d.url || base}
  });
}
self.addEventListener("push", e => {
  let d = null;
  try { d = e.data ? e.data.json() : null; } catch (_) { d = e.data ? {body: e.data.text()} : null; }
  e.waitUntil((async () => {
    if(d) return mostrar(d);
    const av = await pendentes();
    if(!av.length) return mostrar({title: "PREMIER", body: "Há novidades na plataforma. Toque para ver."});
    for(const a of av.slice(-3)) await mostrar(a);
  })());
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = (e.notification.data || {}).url || self.registration.scope;
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(ws => {
    for (const w of ws) if (w.url.startsWith(self.registration.scope) && "focus" in w) return w.focus();
    return self.clients.openWindow(url);
  }));
});
