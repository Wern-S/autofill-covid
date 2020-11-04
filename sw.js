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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-192x192.4ad985c0.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.47463c43.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.5fbfa6af.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.ad0fe6f0.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.887585e1.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.aaba99a7.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.1e3570bc.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "certificate.9e278a37.pdf",
    "revision": "623cac53a40c141642b22bf50fe14628"
  },
  {
    "url": "confidentialite.197b1c47.css",
    "revision": "3c777c4f1c7a8612badaf8f5e83dc449"
  },
  {
    "url": "confidentialite.3d731a5c.css",
    "revision": "b200a9bba5ea3eb28301401c7cd08077"
  },
  {
    "url": "confidentialite.48f58217.js",
    "revision": "5d8378b9168c2c4af2e09421b3817128"
  },
  {
    "url": "confidentialite.9b3344f0.js",
    "revision": "52d6faee56951af7665c96cd261a39f7"
  },
  {
    "url": "confidentialite.faa79232.css",
    "revision": "e03bcdc6e717fa83434c21009ae607ab"
  },
  {
    "url": "confidentialite.faa79232.js",
    "revision": "485152ddbdbf77a21afd1f6765f069af"
  },
  {
    "url": "confidentialite.html",
    "revision": "c3ae231204085e9ad49d843a67d75601"
  },
  {
    "url": "favicon-16x16.a0a61c08.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "favicon-32x32.bd6b9d71.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "244565f1acd697ecf46b45f795475732"
  },
  {
    "url": "index.js",
    "revision": "c616f7a01cf82a553fd690a9132cf2ba"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum_dark.e9bb3588.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "logo_dnum.411ea756.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.197b1c47.css",
    "revision": "c6c622b107548924271f894ef72a3c0a"
  },
  {
    "url": "main.285cf8f6.js",
    "revision": "30faf0e18c4e908bdecc1812855e51b8"
  },
  {
    "url": "main.3d731a5c.css",
    "revision": "0865caeb5c2a428a429c2677dafe2322"
  },
  {
    "url": "main.ee44b301.js",
    "revision": "b9490eb712d1c07fdd5d11802be2a93b"
  },
  {
    "url": "main.fb6bbcaf.css",
    "revision": "5b7d4e32a41abc276e0c592be8091fb1"
  },
  {
    "url": "main.fb6bbcaf.js",
    "revision": "ca3cb351222a386c793c48c56f871b81"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.db730b38.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-bold-webfont.f8428997.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-regular-webfont.0529dd78.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.78905f1b.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB_dark.375fe714.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "MIN_Interieur_RVB.6e85e781.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.a198a050.svg",
    "revision": "f91dc8a582afe85e08c30e60c9231d1a"
  },
  {
    "url": "safari-pinned-tab.f0dd29aa.svg",
    "revision": "f91dc8a582afe85e08c30e60c9231d1a"
  },
  {
    "url": "./",
    "revision": "15df237fa2852209b6d81b08ec941c4a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
