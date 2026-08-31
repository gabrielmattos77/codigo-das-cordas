const CACHE_NAME = "gerador-de-escalas-v2";

const ARQUIVOS = [
    "./gerador/",
    "./gerador/index.html",
    "./manifest.json",
    "./gerador/css/style.css",
    "./gerador/js/script.js"
];

self.addEventListener("install", function (event) {

    event.waitUntil(

        caches.open(CACHE_NAME).then(function (cache) {

            return cache.addAll(ARQUIVOS);

        })

    );

    self.skipWaiting();

});


self.addEventListener("activate", function (event) {

    event.waitUntil(

        caches.keys().then(function (nomesCaches) {

            return Promise.all(

                nomesCaches
                    .filter(function (nomeCache) {

                        return nomeCache !== CACHE_NAME;

                    })
                    .map(function (nomeCache) {

                        return caches.delete(nomeCache);

                    })

            );

        })

    );

    self.clients.claim();

});


self.addEventListener("fetch", function (event) {

    event.respondWith(

        caches.match(event.request).then(function (respostaCache) {

            return respostaCache || fetch(event.request);

        })

    );

});
