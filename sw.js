importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.preaching.precacheAndRoute([

    '/index.htm',
    '/js/index.js',

]);

//Route directives for htm
workbox.routing.registerRoute(
    /\.htm(l?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'html-cache',
    })
);

//Route directives for css

workbox.routing.registerRoute(
    /\.css(?)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache',
    })
);
//Route directives for javascript
workbox.routing.registerRoute(
    /\.js()$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'javascript-cache',
    })
);