import{j as t,i as Z,G as z,u as U}from"./index-L-M2IrwW.js";import{i as W}from"./pexels-fauxels-3183150-qnwdpJUM.js";import{M as V,a as F,i as q}from"./index-6_H2oM4F.js";import{e as K,c as $,m as f,a as _,b as L,d as ee,S as Y,A as J,f as O,C as ae}from"./Carousel-FbUUXlbO.js";import"./person-htdLa4D3.js";function T(n,e,y,d){return n.params.createElements&&Object.keys(d).forEach(g=>{if(!y[g]&&y.auto===!0){let c=K(n.el,`.${d[g]}`)[0];c||(c=$("div",d[g]),c.className=d[g],n.el.append(c)),y[g]=c,e[g]=c}}),y}function S(n){let{swiper:e,extendParams:y,on:d,emit:g}=n;y({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function c(l){let A;return l&&typeof l=="string"&&e.isElement&&(A=e.el.querySelector(l),A)?A:(l&&(typeof l=="string"&&(A=[...document.querySelectorAll(l)]),e.params.uniqueNavElements&&typeof l=="string"&&A.length>1&&e.el.querySelectorAll(l).length===1&&(A=e.el.querySelector(l))),l&&!A?l:A)}function b(l,A){const o=e.params.navigation;l=f(l),l.forEach(a=>{a&&(a.classList[A?"add":"remove"](...o.disabledClass.split(" ")),a.tagName==="BUTTON"&&(a.disabled=A),e.params.watchOverflow&&e.enabled&&a.classList[e.isLocked?"add":"remove"](o.lockClass))})}function v(){const{nextEl:l,prevEl:A}=e.navigation;if(e.params.loop){b(A,!1),b(l,!1);return}b(A,e.isBeginning&&!e.params.rewind),b(l,e.isEnd&&!e.params.rewind)}function k(l){l.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),g("navigationPrev"))}function B(l){l.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),g("navigationNext"))}function N(){const l=e.params.navigation;if(e.params.navigation=T(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;let A=c(l.nextEl),o=c(l.prevEl);Object.assign(e.navigation,{nextEl:A,prevEl:o}),A=f(A),o=f(o);const a=(i,s)=>{i&&i.addEventListener("click",s==="next"?B:k),!e.enabled&&i&&i.classList.add(...l.lockClass.split(" "))};A.forEach(i=>a(i,"next")),o.forEach(i=>a(i,"prev"))}function I(){let{nextEl:l,prevEl:A}=e.navigation;l=f(l),A=f(A);const o=(a,i)=>{a.removeEventListener("click",i==="next"?B:k),a.classList.remove(...e.params.navigation.disabledClass.split(" "))};l.forEach(a=>o(a,"next")),A.forEach(a=>o(a,"prev"))}d("init",()=>{e.params.navigation.enabled===!1?E():(N(),v())}),d("toEdge fromEdge lock unlock",()=>{v()}),d("destroy",()=>{I()}),d("enable disable",()=>{let{nextEl:l,prevEl:A}=e.navigation;if(l=f(l),A=f(A),e.enabled){v();return}[...l,...A].filter(o=>!!o).forEach(o=>o.classList.add(e.params.navigation.lockClass))}),d("click",(l,A)=>{let{nextEl:o,prevEl:a}=e.navigation;o=f(o),a=f(a);const i=A.target;if(e.params.navigation.hideOnClick&&!a.includes(i)&&!o.includes(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let s;o.length?s=o[0].classList.contains(e.params.navigation.hiddenClass):a.length&&(s=a[0].classList.contains(e.params.navigation.hiddenClass)),g(s===!0?"navigationShow":"navigationHide"),[...o,...a].filter(r=>!!r).forEach(r=>r.classList.toggle(e.params.navigation.hiddenClass))}});const G=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),N(),v()},E=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),I()};Object.assign(e.navigation,{enable:G,disable:E,update:v,init:N,destroy:I})}function M(n){return n===void 0&&(n=""),`.${n.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function H(n){let{swiper:e,extendParams:y,on:d,emit:g}=n;const c="swiper-pagination";y({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${c}-bullet`,bulletActiveClass:`${c}-bullet-active`,modifierClass:`${c}-`,currentClass:`${c}-current`,totalClass:`${c}-total`,hiddenClass:`${c}-hidden`,progressbarFillClass:`${c}-progressbar-fill`,progressbarOppositeClass:`${c}-progressbar-opposite`,clickableClass:`${c}-clickable`,lockClass:`${c}-lock`,horizontalClass:`${c}-horizontal`,verticalClass:`${c}-vertical`,paginationDisabledClass:`${c}-disabled`}}),e.pagination={el:null,bullets:[]};let b,v=0;function k(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function B(a,i){const{bulletActiveClass:s}=e.params.pagination;a&&(a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${s}-${i}`),a=a[`${i==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${s}-${i}-${i}`)))}function N(a){const i=a.target.closest(M(e.params.pagination.bulletClass));if(!i)return;a.preventDefault();const s=L(i)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===s)return;e.slideToLoop(s)}else e.slideTo(s)}function I(){const a=e.rtl,i=e.params.pagination;if(k())return;let s=e.pagination.el;s=f(s);let r,h;const j=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,Q=e.params.loop?Math.ceil(j/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(h=e.previousRealIndex||0,r=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(r=e.snapIndex,h=e.previousSnapIndex):(h=e.previousIndex||0,r=e.activeIndex||0),i.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const m=e.pagination.bullets;let w,C,P;if(i.dynamicBullets&&(b=_(m[0],e.isHorizontal()?"width":"height",!0),s.forEach(p=>{p.style[e.isHorizontal()?"width":"height"]=`${b*(i.dynamicMainBullets+4)}px`}),i.dynamicMainBullets>1&&h!==void 0&&(v+=r-(h||0),v>i.dynamicMainBullets-1?v=i.dynamicMainBullets-1:v<0&&(v=0)),w=Math.max(r-v,0),C=w+(Math.min(m.length,i.dynamicMainBullets)-1),P=(C+w)/2),m.forEach(p=>{const x=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(u=>`${i.bulletActiveClass}${u}`)].map(u=>typeof u=="string"&&u.includes(" ")?u.split(" "):u).flat();p.classList.remove(...x)}),s.length>1)m.forEach(p=>{const x=L(p);x===r?p.classList.add(...i.bulletActiveClass.split(" ")):e.isElement&&p.setAttribute("part","bullet"),i.dynamicBullets&&(x>=w&&x<=C&&p.classList.add(...`${i.bulletActiveClass}-main`.split(" ")),x===w&&B(p,"prev"),x===C&&B(p,"next"))});else{const p=m[r];if(p&&p.classList.add(...i.bulletActiveClass.split(" ")),e.isElement&&m.forEach((x,u)=>{x.setAttribute("part",u===r?"bullet-active":"bullet")}),i.dynamicBullets){const x=m[w],u=m[C];for(let R=w;R<=C;R+=1)m[R]&&m[R].classList.add(...`${i.bulletActiveClass}-main`.split(" "));B(x,"prev"),B(u,"next")}}if(i.dynamicBullets){const p=Math.min(m.length,i.dynamicMainBullets+4),x=(b*p-b)/2-P*b,u=a?"right":"left";m.forEach(R=>{R.style[e.isHorizontal()?u:"top"]=`${x}px`})}}s.forEach((m,w)=>{if(i.type==="fraction"&&(m.querySelectorAll(M(i.currentClass)).forEach(C=>{C.textContent=i.formatFractionCurrent(r+1)}),m.querySelectorAll(M(i.totalClass)).forEach(C=>{C.textContent=i.formatFractionTotal(Q)})),i.type==="progressbar"){let C;i.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";const P=(r+1)/Q;let p=1,x=1;C==="horizontal"?p=P:x=P,m.querySelectorAll(M(i.progressbarFillClass)).forEach(u=>{u.style.transform=`translate3d(0,0,0) scaleX(${p}) scaleY(${x})`,u.style.transitionDuration=`${e.params.speed}ms`})}i.type==="custom"&&i.renderCustom?(m.innerHTML=i.renderCustom(e,r+1,Q),w===0&&g("paginationRender",m)):(w===0&&g("paginationRender",m),g("paginationUpdate",m)),e.params.watchOverflow&&e.enabled&&m.classList[e.isLocked?"add":"remove"](i.lockClass)})}function G(){const a=e.params.pagination;if(k())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let s=e.pagination.el;s=f(s);let r="";if(a.type==="bullets"){let h=e.params.loop?Math.ceil(i/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&h>i&&(h=i);for(let j=0;j<h;j+=1)a.renderBullet?r+=a.renderBullet.call(e,j,a.bulletClass):r+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?r=a.renderFraction.call(e,a.currentClass,a.totalClass):r=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?r=a.renderProgressbar.call(e,a.progressbarFillClass):r=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach(h=>{a.type!=="custom"&&(h.innerHTML=r||""),a.type==="bullets"&&e.pagination.bullets.push(...h.querySelectorAll(M(a.bulletClass)))}),a.type!=="custom"&&g("paginationRender",s[0])}function E(){e.params.pagination=T(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let i;typeof a.el=="string"&&e.isElement&&(i=e.el.querySelector(a.el)),!i&&typeof a.el=="string"&&(i=[...document.querySelectorAll(a.el)]),i||(i=a.el),!(!i||i.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(i)&&i.length>1&&(i=[...e.el.querySelectorAll(a.el)],i.length>1&&(i=i.filter(s=>ee(s,".swiper")[0]===e.el)[0])),Array.isArray(i)&&i.length===1&&(i=i[0]),Object.assign(e.pagination,{el:i}),i=f(i),i.forEach(s=>{a.type==="bullets"&&a.clickable&&s.classList.add(...(a.clickableClass||"").split(" ")),s.classList.add(a.modifierClass+a.type),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(s.classList.add(`${a.modifierClass}${a.type}-dynamic`),v=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&s.classList.add(a.progressbarOppositeClass),a.clickable&&s.addEventListener("click",N),e.enabled||s.classList.add(a.lockClass)}))}function l(){const a=e.params.pagination;if(k())return;let i=e.pagination.el;i&&(i=f(i),i.forEach(s=>{s.classList.remove(a.hiddenClass),s.classList.remove(a.modifierClass+a.type),s.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(s.classList.remove(...(a.clickableClass||"").split(" ")),s.removeEventListener("click",N))})),e.pagination.bullets&&e.pagination.bullets.forEach(s=>s.classList.remove(...a.bulletActiveClass.split(" ")))}d("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:i}=e.pagination;i=f(i),i.forEach(s=>{s.classList.remove(a.horizontalClass,a.verticalClass),s.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),d("init",()=>{e.params.pagination.enabled===!1?o():(E(),G(),I())}),d("activeIndexChange",()=>{typeof e.snapIndex>"u"&&I()}),d("snapIndexChange",()=>{I()}),d("snapGridLengthChange",()=>{G(),I()}),d("destroy",()=>{l()}),d("enable disable",()=>{let{el:a}=e.pagination;a&&(a=f(a),a.forEach(i=>i.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),d("lock unlock",()=>{I()}),d("click",(a,i)=>{const s=i.target,r=f(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const h=r[0].classList.contains(e.params.pagination.hiddenClass);g(h===!0?"paginationShow":"paginationHide"),r.forEach(j=>j.classList.toggle(e.params.pagination.hiddenClass))}});const A=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=f(a),a.forEach(i=>i.classList.remove(e.params.pagination.paginationDisabledClass))),E(),G(),I()},o=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=f(a),a.forEach(i=>i.classList.add(e.params.pagination.paginationDisabledClass))),l()};Object.assign(e.pagination,{enable:A,disable:o,render:G,update:I,init:E,destroy:l})}const D=[{id:1,reviews:"Working with Social Swirl was a great experience. Their front-end development team is highly skilled and delivered exceptional results. They transformed our design concepts into beautifully crafted and responsive websites."},{id:2,reviews:"Social Swirl's back-end team excels, creating a robust infrastructure with expertise in Python and Django. Their commitment to quality and timely delivery makes them a reliable choice for any back-end development needs."},{id:3,reviews:"Social Swirl's graphic design team exceeded expectations, bringing our brand to life with innovative and impactful designs. From logos to marketing collateral, they perfectly captured our values and audience. Thrilled with their work!"},{id:4,reviews:"Social Swirl's top-tier SEO services elevated our online presence. With precise keyword strategies, they boosted website visibility and organic traffic. Their expertise is evident in detailed analytics and progress reports. Highly satisfied with their outstanding services!"},{id:5,reviews:"Social Swirl's social media team built a strong online presence with strategic approaches and engaging content. Efficient account management, follower interaction, and successful ad campaigns have significantly boosted our brand awareness and conversions. Impressed with their impactful efforts!"},{id:6,reviews:"Working with Social Swirl was a great experience. Their front-end development team is highly skilled and delivered exceptional results. They transformed our design concepts into beautifully crafted and responsive websites."}],ie=()=>t.jsxs("div",{className:"w-10/12 max-sm:w-full m-auto",children:[t.jsx("div",{className:"my-10 max-sm:hidden",children:t.jsx(Y,{slidesPerView:3,spaceBetween:30,loop:!0,centeredSlides:!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},modules:[J,S,H],className:"mySwiper",children:D.map(n=>t.jsx(t.Fragment,{children:t.jsx(O,{children:t.jsxs("div",{className:"text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2",children:[t.jsx("p",{className:"text-base max-sm:text-xs",children:n.reviews}),t.jsxs("div",{className:"flex items-center flex-col justify-center",children:[t.jsx("img",{className:"w-10 h-10 rounded-full mt-2",src:Z,alt:""}),t.jsx("h5",{className:"pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold",children:"Bundu Khan"})]})]},n.id)})}))})}),t.jsx("div",{className:"mt-0 hidden max-sm:block",children:t.jsx(Y,{slidesPerView:1,spaceBetween:30,loop:!0,centeredSlides:!0,navigation:!0,pagination:{clickable:!0},autoplay:{delay:2500,disableOnInteraction:!1},modules:[J,S,H],className:"mySwiper",children:D.map(n=>t.jsx(t.Fragment,{children:t.jsx(O,{children:t.jsxs("div",{className:"text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2",children:[t.jsx("p",{className:"text-base max-sm:text-xs",children:n.reviews}),t.jsxs("div",{className:"flex items-center flex-col justify-center",children:[t.jsx("img",{className:"w-10 h-10 rounded-full mt-2",src:Z,alt:""}),t.jsx("h5",{className:"pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold",children:"Bundu Khan"})]})]},n.id)})}))})})]});function te(n){return z({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{strokeWidth:"2",d:"M15 19H2V1h16v4m0 0a5 5 0 110 10 5 5 0 010-10zm-3 9v8l3-2 3 2v-8M5 8h6m-6 3h5m-5 3h2M5 5h2"},child:[]}]})(n)}function se(n){return z({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,64H147.31l34.35-34.34a8,8,0,1,0-11.32-11.32L128,60.69,85.66,18.34A8,8,0,0,0,74.34,29.66L108.69,64H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64Zm0,136H40V80H216V200Z"},child:[]}]})(n)}const le=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-10/12 m-auto py-40",children:[t.jsxs("div",{className:"grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:text-center",children:[t.jsx("h1",{className:"text-4xl font-extrabold",children:"We ARE OPEN 7 DAYS A WEEK"}),t.jsx("h2",{className:"text-lg mx-3 max-sm:m-0",children:"Take Classes From industry experts in purpose built campuses. Ideoversity is a leading Training Institute in Pakistan"}),t.jsx("button",{className:"bg-gradient-to-r from-social_left to-social_right w-40 rounded-lg py-4 m-auto text-white",children:"Book Now"})]}),t.jsxs("div",{className:"grid grid-cols-4 mt-10 max-sm:grid-cols-1",children:[t.jsxs("div",{className:"text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:mt-10 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl",children:[t.jsx(te,{className:"m-auto text-social_right",size:"30px"}),t.jsx("h1",{className:"font-bold pt-3",children:"Certification"}),t.jsx("h2",{className:"text-sm pt-3",children:"State of the Art Learning Experience with certificate from renown organization"})]}),t.jsxs("div",{className:"text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:mt-10 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl",children:[t.jsx(se,{className:"m-auto text-social_right",size:"30px"}),t.jsx("h1",{className:"font-bold pt-3",children:"Classes"}),t.jsx("h2",{className:"text-sm pt-3",children:"World class Instructors guiding everyone with practical implementation"})]}),t.jsxs("div",{className:"text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:mt-10 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl",children:[t.jsx(V,{className:"m-auto text-social_right",size:"30px"}),t.jsx("h1",{className:"font-bold pt-3",children:"Private Groups"}),t.jsx("h2",{className:"text-sm pt-3",children:"Lifetime access to groups that helps you find the right career & opportunity"})]}),t.jsxs("div",{className:"text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:mt-10 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl",children:[t.jsx(F,{className:"m-auto text-social_right",size:"30px"}),t.jsx("h1",{className:"font-bold pt-3",children:"Internship"}),t.jsx("h2",{className:"text-sm pt-3",children:"This is designed to enhance interns skills that they need to succeed in their careers."})]})]})]})}),Ae="data:image/jpeg;base64,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JwogICAgICAgIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgICAgICAgPGRjOnRpdGxlPgogICAgICAgIDxyZGY6QWx0PgogICAgICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+bG9nbyAtIEZyb250PC9yZGY6bGk+CiAgICAgICAgPC9yZGY6QWx0PgogICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICA8cmRmOlNlcT4KICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0wNy0yNjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD4zZmU1Mjg3Ni1jNGYyLTQyOTktYTY0Ni0xN2QwYzgwM2FlZDU8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5SaWNoYXJkIHN0aW5nZXI8L3BkZjpBdXRob3I+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgICAgPC9yZGY6UkRGPgogICAgICAgIDwveDp4bXBtZXRhPgA=",ne="data:image/jpeg;base64,UklGRi4EAABXRUJQVlA4WAoAAAAIAAAAYwAAYwAAVlA4IE4DAAAwFACdASpkAGQAPm00mEgkIyKhJpM5cIANiUAa3DLfyX8gPAUtF2/8quY74BiYPXea+cB4o/SA8wH7PesX6IP9J6OnUAegB0ruAI9iv+YkQOwIMCVBDT/JKoy/KhZeAUvsl2UPOyX6EUtpzeqaZVDy17MPB2F2ZS6y0EIWi92g1mEyO01BGgcXVVQNpsKZmZo4bzBOvswdQ4iWGDaby+L49aQ4agY2p0VgwAD+5QqJHzHv8KpifCa+E116lLwAGFMj49h+8Gaap5MTSLR4SKoENbcFTr6LO6MzIUanmbwgqOJbdqhYeH4rzXuODZ+f+TWzeTBqh6J1H7XP2lCdla/zHRlyHUOExfX88nss4TAZg8P77Ocj8F7/wYaJAwpj47fdFDu2U1nLJENIccHXdyWf179w7Ed4WE4wDEAhq0E9CdqqTILZxm7a+YfbCsKH/1Ef/9C/wZlVxuoXNjzUZs6eHMFVfq0LW/CI5bI0+8cP+1NkCx8V51wGe9LWOTK0F4yt4kEgPLuv+UCfWYwEu2oLk/cf3DOUvJsBonlti5Uq2fNqn5Hs2v406QLWLj5Uj9eZwM5ST+4dZ4/6ZTAY4kUfd02T8pW/+Ck8/D48TPHCoPkExYAULdBjZ4c5JYncBHSwW7OOBpQJKROYbdiOlr9AEIyUT+OYsHYBdbA2Z8nogppbEudrpKRX1f0WhB7PeX1OWLEhxbvnihGK9UMf6SZzELtd60C1o3v5U8gE1mUKfWkgw7IK5whqwxLTXLJo2JJXM6wQAgyPR3q016gl6stHBXUGgm9H7jLaCuNgV29Cyc7z+ofNBvLfZThNrNAuVFPwzjws4J79pVAWNzQFGvMUtrx+Aq/eain0CR6LXhymDyYx0U3XhvXqkOkcKj4fj12VX4Hn9E3RvE653SUN1x6vTDAPNXAFs29L+fz6CVIBZ8Yd9rNAjEGlGR3pijucmHJom+WrfDbSoJsQrTPIw8UZ2nONq9WpUVYC1FdvWN9kXvA8u9Y8eH+EZZamOVT9b+OAlD+kOPRaUe6KgcAVEMz+icZMNmo26SI++IuiaqrtyWtjksf2OL8am2Y7UUiMsXCHhQJ3syyprrI99Cx0EyDHnEA6cQcoAaqIAAAAAABFWElGugAAAEV4aWYAAElJKgAIAAAABgASAQMAAQAAAAEAAAAaAQUAAQAAAFYAAAAbAQUAAQAAAF4AAAAoAQMAAQAAAAIAAAATAgMAAQAAAAEAAABphwQAAQAAAGYAAAAAAAAAOGMAAOgDAAA4YwAA6AMAAAYAAJAHAAQAAAAwMjEwAZEHAAQAAAABAgMAAKAHAAQAAAAwMTAwAaADAAEAAAD//wAAAqAEAAEAAABkAAAAA6AEAAEAAABkAAAAAAAAAA==",re="data:image/jpeg;base64,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",oe="data:image/jpeg;base64,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ICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMy0xMS0yOTwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD4zMDU2NDk1ZC1jYjZmLTQwNzktYWVlNi1hZmE2MGI1ZmFhMDY8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5Tb2NpYWwgU3dpcmw8L3BkZjpBdXRob3I+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6eG1wPSdodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvJz4KICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkNhbnZhPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgICAgCiAgICAgICAgPC9yZGY6UkRGPgogICAgICAgIDwveDp4bXBtZXRhPgA=",ce="data:image/jpeg;base64,UklGRn4EAABXRUJQVlA4WAoAAAAIAAAAYwAAYwAAVlA4IJ4DAACQFwCdASpkAGQAPm0yk0akIyGhLbeYkIANiWQIcAGW2hn2MniPC8dhwn4N5lGa/Oo5u/4HSR8wD9KulD5gPPm9Dn+y9QD+mdQVz6vsufuN6MDlS9kKrLwU/5K2o+qmpwgYQKbWXzX1qGXUNj00FLWM29arIrb+C0X3SI2wMMl8S/4b0Mcsy7k0xX8VvUsNqHgNtTZLmBzEGZgB6TGuaU8SAFzivk56Cep94GXvHx87rM9lVk6WW2y4+IXcOplznsH0x6YvAAD+1ZAACz8nOhU9ikmfGkWxHaOOo+bkk/5V490XPB9gTOvU19hErQqw+kc3nhV058/8Bonznru/1Xc2zP/fIL550f/6lvNdDaV1jLUfN2f9Pd1wegAda0L2xlUQ61kOTsqT9WiAqKV7K8rQDq7wgCJCi1dWf7Jh17dS6ZbVP8GQPsuw4jfh9P327Vt+JW4Z6EL2Lz6O+uVEn/lXjeP5ywyarPOoM37gFgJfzCiFablCjPpwVXE5ODYPogB4dwzW/Bii2qw8hZ8Gg4+ftQC7mv+mL/KFYumCHbdtBidUy8wBK1fGdm9ZzUUHVdZZw/h86cy/1l1ZLaLpCicTsjZoSvHCGmlFB1Udl5Z30DWAtvbFrdI2fPxf4rm08G09UPZcdS6dJqzwDVUK1/d1WkYWjQns14M/sf4rs86vEAf4n/8/5/1ZDshj0z1uHYwH3P8pafEH2R+N+OEh0NJ2UzjG9j4e/U4HJWC83a+F6YQHXRYzY4a2gOL7BzzAIuMnvNOZc0yzeHMXJf9CCg4a4Dj6GN75+1thY3BKKCVRZA84POxbc/fx2Zl1dPRofitCk/A4zT5t5Vn60HWPV93dT3BV3fx81PpBwMcCGtFlEePlgidTthAXpAvwrzTVMYYaQaLWuUI9xiGQd0JkQPcViUkkJyHtxEi11oDF94V1qWgyRm4xIPP4glDvXPE+YC52rhkdaEbf/1W9ZnQMT/KjXpTaK/gdRfKJ7An8gMyMPZZ55O02gBPCFFe4WbvABX/y0tVqQxeyJfSVodTH4wmasKe8ZCUfj7XK0s4bUqHCtaWuOj80izNOszn45Kx6lEDT1fOzxueDUkNSBiaq1QkEqiOGBUnP5gnPxdrGX7izmoyBc648vPFr9VnK9dLi1YB1NyfBAydgGNwX3dQulG1wcH8ZvFnohGi6op5tQP9qp9dj5xCGQtrAkbgcAbOHJDl9nkIumB2IGsAAAAAAAEVYSUa6AAAARXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAAA4YwAA6AMAADhjAADoAwAABgAAkAcABAAAADAyMTABkQcABAAAAAECAwAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAAGQAAAADoAQAAQAAAGQAAAAAAAAA",X=[{id:1,img:Ae},{id:2,img:ne},{id:3,img:re},{id:4,img:oe},{id:5,img:ce}],me=()=>t.jsx("div",{children:t.jsx("main",{class:"",children:t.jsx("div",{class:"w-full mx-auto px-4 md:px-6 py-24",children:t.jsx("div",{class:"text-center",children:t.jsxs("div",{"x-data":"{}","x-init":`$nextTick(() => {\r
                        let ul = $refs.logos;\r
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);\r
                        ul.nextSibling.setAttribute('aria-hidden', 'true');\r
                    })`,class:"w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]",children:[t.jsx("ul",{"x-ref":"logos",class:"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll",children:X.map(n=>t.jsx("li",{children:t.jsx("img",{className:"w-40",src:n.img,alt:"Facebook"})}))}),t.jsx("ul",{"x-ref":"logos",class:"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll",children:X.map(n=>t.jsx("li",{children:t.jsx("img",{className:"w-40",src:n.img,alt:"Facebook"})}))})]})})})})}),ue=()=>{const n=U();return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex justify-between pt-56 max-sm:pt-28 lg:w-10/12 max-[450px]:w-full m-auto ps-2 pe-2 max-sm:flex-col",children:[t.jsxs("div",{className:"leading-6 max-sm:text-center",children:[t.jsx("h1",{className:"lg:text-7xl max-[650px]:text-4xl font-bold bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent",children:"SOCIAL SWIRL"}),t.jsx("h4",{className:"pt-4",children:"Explore the world of web development with Social Swirl. Join our user-friendly courses led by industry experts, offering hands-on experiences and a clear path to mastering coding. Join us to unlock your coding skills and confidently shape your future success"}),t.jsxs("div",{className:"text-white mt-10 flex max-sm:justify-center gap-5",children:[t.jsx("button",{onClick:()=>n("/remote"),className:"bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-5 pe-5 max-sm:ps-2 max-sm:pe-2 rounded-lg",children:"Feasible Timing"}),t.jsx("button",{onClick:()=>n("/e-learning"),className:"ms-7 max-sm:ms-0 bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-5 pe-5 max-sm:ps-2 max-sm:pe-2 rounded-lg",children:"Project Based Learning"})]})]}),t.jsx("img",{src:Z,className:"w-full m-auto relative bottom-40 max-sm:bottom-0",alt:""})]}),t.jsxs("div",{className:"gap-10 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border",children:[t.jsx("img",{src:W,className:"w-6/12 h-96 max-sm:w-full",alt:""}),t.jsxs("div",{className:"max-sm:text-center w-6/12 max-sm:w-full",children:[t.jsx("h1",{className:"text-4xl font-medium",children:"Welcome To Social Swirl"}),t.jsx("h4",{className:"mt-5 text-2xl font-bold text-social_right",children:"Best Software House Of Pakistan"}),t.jsx("h4",{className:"mt-5 leading-6",children:"The company's mission is to provide high-quality software solutions and media that helpe buisness and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to exvellence. Social Swirl is dedicated to providing personalised reliable, and affordable services to its clients, AIMS Our missiom is to provide high-quality software solutions and media services that help buisness and individuals optimise their online presence and achive their goals "}),t.jsx("button",{onClick:()=>n("/e-learning"),className:"mt-5 text-white bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-8 pe-8 rounded-lg",children:"Courses"})]})]}),t.jsxs("div",{className:"gap-10 mt-20 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border",children:[t.jsxs("div",{className:"max-sm:text-center w-6/12 max-sm:w-full pt-20 max-sm:pt-10",children:[t.jsx("h1",{className:"text-4xl font-medium",children:"Events And Updates"}),t.jsx("h4",{className:"mt-5 leading-6",children:"The company's mission is to provide high-quality software solutions and media that helpe buisness and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to exvellence. Social Swirl is dedicated to providing personalised reliable, and affordable services to its clients, AIMS Our missiom is to provide high-quality software solutions and media services that help buisness and individuals optimise their online presence and achive their goals "})]}),t.jsx("img",{src:q,className:"w-6/12 h-96 max-sm:w-full",alt:""})]}),t.jsx(le,{}),t.jsx("h1",{className:"text-5xl text-center my-40 max-sm:my-20 max-sm:text-3xl font-semibold",children:"Curent Employees"}),t.jsx(ae,{}),t.jsx("h1",{className:"text-5xl text-center my-40 max-sm:mt-56 max-sm:mb-5 mb-20 max-sm:text-3xl font-semibold",children:"What Companies Say About Us"}),t.jsx(ie,{}),t.jsx("h1",{className:"text-5xl text-center mt-40 max-sm:mt-56 max-sm:mb-5 max-sm:text-3xl font-semibold",children:"Our Clients"}),t.jsx(me,{}),t.jsxs("div",{className:"mt-40 bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 max-sm:mt-20",children:[t.jsxs("div",{className:"text-white max-sm:text-center",children:[t.jsx("h1",{className:"text-3xl",children:"Start a Project with us Today"}),t.jsx("h2",{className:"text-lg",children:"Call us now to schedule as online appointment and get your project successfully completed"})]}),t.jsx("button",{className:"bg-gradient-to-r from-social_left to-social_right text-white py-3 px-7 rounded-lg",children:"Get Started"})]})]})};export{ue as default};
