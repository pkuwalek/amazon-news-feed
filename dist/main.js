!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);t(1);const a={getArticles:()=>fetch("http://localhost").then(n=>n.json())};!function(){const n=({urlToImage:n,title:e,description:t,content:a,url:r})=>`\n        <div class="article-card">\n            <img src="${n}" class="image">\n            <h1 class="title">${e}</h1>\n            <h3 class="description">${(n=>{let e=n.match(/(.*)(Read more\.\.\.)/);return e?e[1]:n})(t)}</h3>\n            <p class="content">${(n=>{console.log(n);let e=n.match(/(.*)(\[\+\d+ chars\])$/s);return console.log(e),e?e[1]:n})(a)}</p>\n            <button type="button" class="read-more-btn" onclick="window.open('${r}')">\n                Read more\n            </button>\n        </div>\n    `;a.getArticles().catch(n=>{throw document.getElementById("main").innerHTML=`\n        <h1 style="color: red">${n}</h1>\n        <h2>${n.message}</h2>\n        `,n}).then(e=>{const t=`\n        <header>\n            \n        <nav class="navbar navbar-expand-lg navbar-light bg-light">\n            <a class="navbar-brand" href="#"><img class="logo" src="./../src/amazonlogocut.png" alt="">NEWSFEED</a>\n            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n                <span class="navbar-toggler-icon"></span>\n            </button>\n            <div class="collapse navbar-collapse" id="navbarSupportedContent">\n            <ul class="navbar-nav mr-auto">\n                <li class="nav-item">\n                    <a class="nav-link" href="#">Jeff Bezos</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">Alexa</a>\n                </li>\n                <li class="nav-item">\n                    <a class="nav-link" href="#">Grand Tour</a>\n                </li>\n            </ul>\n            <form class="form-inline my-2 my-lg-0">\n                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">\n                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\n            </form>\n            </div>\n        </nav>\n    \n        </header>\n        <div class="page-content">\n            <div id="articles">\n                ${e.map(e=>n(e)).join("")}\n            </div>\n            <div id="top-articles">\n                <h3>most popular articles</h3>\n            </div>\n        </div>\n        `;document.getElementById("main").innerHTML=t})}()},function(n,e,t){}]);