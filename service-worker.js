const staticPwaADS = "cache_web_app_ads_upf"
const assets = [
    "index.html",
    "contact.html",
    "./artigo_destaque/artigo_destaque.html",
    "./artigo1/artigo1.html",
    "./artigo2/artigo2.html",
    "./artigo3/artigo3.html",
    "./artigo4/artigo4.html",
    "./artigo5/artigo5.html",
    "./artigo6/artigo6.html",
    "manifest.json",
    "https://cdn.midjourney.com/98f5289c-5ab7-467b-bd6c-c38f79199ab2/0_0.png",
    "./artigo1/assets/4df630ec463a4cdfbb72879aef96c968.webp",
    "./artigo2/assets/6eb4533441284e89a522442652e24b6b.webp",
    "./artigo3/assets/0ee36438-3d15-45a5-b10b-9ff88d4d1c27.webp",
    "https://cdn.midjourney.com/957f45e6-050e-4d39-a042-2c016ca4c923/0_0.png",
    "https://cdn.midjourney.com/8551d143-4a98-4f79-8c1b-b8bb4b78bf10/0_3.png",
    "https://cdn.midjourney.com/5e013f83-75f4-440d-b67f-80ebe677e816/0_1.png",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
    "icons/icon-512x512.png",
    "icons/icon-384x384.png",
    "icons/icon-256x256.png",
    "icons/icon-192x192.png",
    "icons/icon-152x152.png",
    "icons/icon-144x144.png",
    "icons/icon-96x96.png",
    "icons/icon-72x72.png",
    "icons/icon-48x48.png",
]
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticPwaADS).then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})