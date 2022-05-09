(()=>{"use strict";var e,t,r,i={89:(e,t,r)=>{r(90);var i=r(493),o=r.n(i),s=r(279),n=r.n(s);const l=class{constructor(e,t){this.thresholdPercent=t,this.itemsToReveal=e,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=o()(this.calcCaller,200).bind(this),this.events()}events(){window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",n()((()=>{console.log("Resize just ran"),this.browserHeight=window.innerHeight}),333))}calcCaller(){console.log("Scroll function ran"),this.itemsToReveal.forEach((e=>{0==e.isRevealed&&this.calculateIfScrolledTo(e)}))}calculateIfScrolledTo(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element was calculated"),e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}hideInitially(){this.itemsToReveal.forEach((e=>{e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}};let c;new class{constructor(){this.siteHeader=document.querySelector(".site-header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}events(){window.addEventListener("scroll",o()((()=>this.runOnScroll()),200)),window.addEventListener("resize",n()((()=>{this.browserHeight=window.innerHeight}),333))}runOnScroll(){this.determineScrollDirection(),window.scrollY>60?this.siteHeader.classList.add("site-header--dark"):this.siteHeader.classList.remove("site-header--dark"),this.pageSections.forEach((e=>this.calcSection(e)))}determineScrollDirection(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}calcSection(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){let t=e.getBoundingClientRect().top/this.browserHeight*100;if(t<18&&t>-.1&&"down"==this.scrollDirection||t<33&&"up"==this.scrollDirection){let t=e.getAttribute("data-matching-link");document.querySelectorAll(`.primary-nav a:not(${t})`).forEach((e=>e.classList.remove("is-current-link"))),document.querySelector(t).classList.add("is-current-link")}}}},new l(document.querySelectorAll(".feature-item"),75),new l(document.querySelectorAll(".testimonial"),60),new class{constructor(){this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}events(){this.menuIcon.addEventListener("click",(()=>this.toggleTheMenu()))}toggleTheMenu(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}},document.querySelectorAll(".open-modal").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),void 0===c?r.e(582).then(r.bind(r,377)).then((e=>{c=new e.default,setTimeout((()=>c.openTheModal()),20)})).catch((()=>console.log("There was a problem."))):c.openTheModal()}))}))}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return i[e](r,r.exports,s),r.exports}s.m=i,e=[],s.O=(t,r,i,o)=>{if(!r){var n=1/0;for(d=0;d<e.length;d++){for(var[r,i,o]=e[d],l=!0,c=0;c<r.length;c++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](r[c])))?r.splice(c--,1):(l=!1,o<n&&(n=o));if(l){e.splice(d--,1);var a=i();void 0!==a&&(t=a)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,i,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"modal.43769401a5b3b757abff.js",s.miniCssF=e=>"styles.c02fefa45c52c24d5a9b.css",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="travel-site:",s.l=(e,i,o,n)=>{if(t[e])t[e].push(i);else{var l,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var h=a[d];if(h.getAttribute("src")==e||h.getAttribute("data-webpack")==r+o){l=h;break}}l||(c=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.setAttribute("data-webpack",r+o),l.src=e),t[e]=[i];var u=(r,i)=>{l.onerror=l.onload=null,clearTimeout(v);var o=t[e];if(delete t[e],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((e=>e(i))),r)return r(i)},v=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),c&&document.head.appendChild(l)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.f.j=(t,r)=>{var i=s.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise(((r,o)=>i=e[t]=[r,o]));r.push(i[2]=o);var n=s.p+s.u(t),l=new Error;s.l(n,(r=>{if(s.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,i[1](l)}}),"chunk-"+t,t)}},s.O.j=t=>0===e[t];var t=(t,r)=>{var i,o,[n,l,c]=r,a=0;if(n.some((t=>0!==e[t]))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(c)var d=c(s)}for(t&&t(r);a<n.length;a++)o=n[a],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},r=self.webpackChunktravel_site=self.webpackChunktravel_site||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=s.O(void 0,[636],(()=>s(89)));n=s.O(n)})();