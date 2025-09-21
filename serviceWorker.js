const staticMohammadData = "site-cache-v1";
const assets = [
  //   "/",
  "./index.html",
  "./assets/css/styles.css",
  "./assets/css/swiper-bundle.min.css",
  "./assets/js/main.js",
  "./assets/js/swiper-bundle.min.js",

  "./assets/img/blob.svg",
  "./assets/img/smrh.jpg",
  "./assets/img/cozy_gaming_small.png",
  "./assets/img/contact_me_small_sharp.png",

  "./assets/img/skills/python.svg",
  "./assets/img/skills/django-bright.svg",
  "./assets/img/skills/djangorest.svg",
  "./assets/img/skills/fastapi.svg",
  "./assets/img/skills/redis.svg",
  "./assets/img/skills/postgresql.svg",
  "./assets/img/skills/mongodb.svg",
  "./assets/img/skills/docker.svg",
  "./assets/img/skills/nginx.svg",

  "./assets/img/portfolio/uama.jpg",
  "./assets/img/portfolio/Private_Chat.jpg",
  "./assets/img/portfolio/Telegram_Channel_Output.jpg",
  "./assets/img/portfolio/Telegram_Adder.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticMohammadData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
