/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-dba6f37089a0e842c225.js"
  },
  {
    "url": "app-a9a3371c9ab27634bfe3.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7e3fe4cd0eea93ee6331.js"
  },
  {
    "url": "index.html",
    "revision": "dc7928e18541672a8fd63beb32f81631"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6b515e73002344bfd6b4807fca2027d8"
  },
  {
    "url": "1.dc13c1dc205d089bdc79.css"
  },
  {
    "url": "component---src-pages-index-js.4a18de22e86a81124ba5.css"
  },
  {
    "url": "component---src-pages-index-js-c7da58f7bd7cdcb08c19.js"
  },
  {
    "url": "1-a7fe3c5638d7195b45f5.js"
  },
  {
    "url": "0-e54c65e71080b3a46c3f.js"
  },
  {
    "url": "static/d/820/path---index-6a9-evlnGXVzsEpTK6VsoOxwutz5SY.json",
    "revision": "d658864b47970575f67442928229cd79"
  },
  {
    "url": "component---src-pages-404-js-aba14b2f51cb1b221c03.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});