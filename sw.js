//asignar nombre y version de la cache
const CACHE_NAME = 'V1_CACHE_Rodrigo Zamora Solis';
var urlsToCache = [ 
    './',
      '/index.html',
  '/styles.css',
  '/script.js',
    './css/styles.css',
    './img/favicon.ico',
'./img/1.png',
'./img/2.png',
'./img/3.png',
'./img/4.png',
'./img/5.png',
'./img/6.png',
'./img/16.png',
'./img/32.png',
'./img/64.png',
'./img/96.png',
'./img/128.png',
'./img/192.png',
'./img/1024.png',
'./img/512.png',
'./img/256.png',
'./img/384.png',
'./img/facebook.png',
'./img/instagram.png',
'./img/twitter.png',
'./img/fondo3d.png',
];

//Evento install
//Instalacion del service worker y guarda en cahe los recursos
self.addEventListener('install',e =>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache=>{
            return cache.addAll(urlsToCache)
            .then(()=>{
                self.skipWaiting();
            });
        })
            .catch(err => console.log('no se ha registrado cache.',err))
        );
});
//evento activate
//Que la app funcione sin conexion
self.addEventListener('activate',e=>{
    const cachewhitelist=[CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName =>{
                    if (cachewhitelist.indexOf(cacheName)=== -1){
                        //borrar elementos que no se necesitan
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    .then(()=>{
        //activate cache
        self.clients.claim();
    })
        );
});

//Evento fetch
self.addEventListener('fetch', e => {

    e.respondWith(
        caches.match(e.request)
        .then(res =>{
    
                    if(res){
                        return res;
                    }
                    return fetch (e.request)
                })
            );
        });