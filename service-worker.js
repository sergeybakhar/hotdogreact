"use strict";var precacheConfig=[["/hotdogreact/index.html","6492b5730cb7be7fe892d506583373f7"],["/hotdogreact/static/css/main.686e904f.css","5933a962d54d3b23eebef74a1fd1bd3e"],["/hotdogreact/static/js/main.6811994b.js","6a2cb3b1b92106a683021a3383402db5"],["/hotdogreact/static/media/photo1.e9b1049a.png","e9b1049a439350c8af8ba1926a88f2ec"],["/hotdogreact/static/media/photo10.6ae919d4.png","6ae919d4eac3ba2c5371ca06b42b05fb"],["/hotdogreact/static/media/photo11.38b808cf.png","38b808cfe571eb4b694dccecadc49252"],["/hotdogreact/static/media/photo12.c255a209.png","c255a20979a61775abf01fe7644ca617"],["/hotdogreact/static/media/photo2.901af907.png","901af907c1356e01b80314926529c04a"],["/hotdogreact/static/media/photo3.571ef63b.png","571ef63be6fe004986ada0d2aa4dcc51"],["/hotdogreact/static/media/photo4.dc1e4041.png","dc1e40416ef647fba6e4de946cccc318"],["/hotdogreact/static/media/photo5.c472fcfb.png","c472fcfbccbb7cebf53f97aad547c831"],["/hotdogreact/static/media/photo6.2831092d.png","2831092d18209e44f79198ae5b28be37"],["/hotdogreact/static/media/photo7.38c10696.png","38c10696be3278dac4f81a24c660882e"],["/hotdogreact/static/media/photo8.2e719f74.png","2e719f74e57083b561922843a2bc3913"],["/hotdogreact/static/media/photo9.1ec71a2d.png","1ec71a2dc0e20d5e36fb9015e192faa4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/hotdogreact/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});