import{S as Y,i as q,s as M,k as b,q as D,l as y,m as S,r as F,h as d,n as v,C as H,b as N,D as g,u as X,E as J,F as Z,a as R,y as O,c as C,z as k,G as x,A,g as I,d as T,B as U,H as K,f as ee,I as te,J as ae,K as se,L as re,M as ne,N as le,O as oe,v as ce}from"../chunks/index.fab9c985.js";import{p as ie}from"../chunks/stores.2044d84d.js";import{j as fe,w as B}from"../chunks/singletons.a6e99cba.js";function ue(a){let e,l,s;return{c(){e=b("li"),l=b("a"),s=D(a[0]),this.h()},l(n){e=y(n,"LI",{class:!0});var c=S(e);l=y(c,"A",{href:!0,class:!0});var t=S(l);s=F(t,a[0]),t.forEach(d),c.forEach(d),this.h()},h(){v(l,"href",a[1]),v(l,"class","svelte-1bgrnk3"),H(l,"active",a[2].url.pathname===a[1]),v(e,"class","svelte-1bgrnk3")},m(n,c){N(n,e,c),g(e,l),g(l,s)},p(n,[c]){c&1&&X(s,n[0]),c&2&&v(l,"href",n[1]),c&6&&H(l,"active",n[2].url.pathname===n[1])},i:J,o:J,d(n){n&&d(e)}}}function me(a,e,l){let s;Z(a,ie,t=>l(2,s=t));let{name:n}=e,{href:c="/"+n.toLowerCase()}=e;return a.$$set=t=>{"name"in t&&l(0,n=t.name),"href"in t&&l(1,c=t.href)},[n,c,s]}class V extends Y{constructor(e){super(),q(this,e,me,ue,M,{name:0,href:1})}}function _e(a){let e,l,s,n,c,t,o,f,i,u,$,w,p,h,r,m;return i=new V({props:{name:"Blog"}}),$=new V({props:{name:"Projects"}}),p=new V({props:{name:"About"}}),r=new V({props:{name:"Contact"}}),{c(){e=b("header"),l=b("nav"),s=b("ul"),n=b("li"),c=b("a"),t=b("img"),f=R(),O(i.$$.fragment),u=R(),O($.$$.fragment),w=R(),O(p.$$.fragment),h=R(),O(r.$$.fragment),this.h()},l(_){e=y(_,"HEADER",{});var L=S(e);l=y(L,"NAV",{});var P=S(l);s=y(P,"UL",{class:!0});var E=S(s);n=y(E,"LI",{class:!0});var j=S(n);c=y(j,"A",{href:!0});var G=S(c);t=y(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(d),j.forEach(d),f=C(E),k(i.$$.fragment,E),u=C(E),k($.$$.fragment,E),w=C(E),k(p.$$.fragment,E),h=C(E),k(r.$$.fragment,E),E.forEach(d),P.forEach(d),L.forEach(d),this.h()},h(){x(t.src,o="/logo.svg")||v(t,"src",o),v(t,"alt","Personal logo of Emma Alexandria"),v(t,"class","svelte-8d55w"),v(c,"href","/"),v(n,"class","svelte-8d55w"),v(s,"class","svelte-8d55w")},m(_,L){N(_,e,L),g(e,l),g(l,s),g(s,n),g(n,c),g(c,t),g(s,f),A(i,s,null),g(s,u),A($,s,null),g(s,w),A(p,s,null),g(s,h),A(r,s,null),m=!0},p:J,i(_){m||(I(i.$$.fragment,_),I($.$$.fragment,_),I(p.$$.fragment,_),I(r.$$.fragment,_),m=!0)},o(_){T(i.$$.fragment,_),T($.$$.fragment,_),T(p.$$.fragment,_),T(r.$$.fragment,_),m=!1},d(_){_&&d(e),U(i),U($),U(p),U(r)}}}class de extends Y{constructor(e){super(),q(this,e,null,_e,M,{})}}const he=B(900),ge=B(900);fe([he,ge],([a,e])=>a<e);const pe=(a,e)=>{const l=typeof globalThis.window<"u";let s=e;const{set:n,...c}=B(e,()=>{if(l){o();const i=u=>{u.key===a&&o()};return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)}else return()=>{}}),t=i=>{s=i,n(i);try{localStorage.setItem(a,JSON.stringify(i))}catch(u){console.error(`the \`${a}\` store's new value \`${i}\` could not be persisted to localStorage because of ${u}`)}},o=()=>{let i=null;try{i=localStorage.getItem(a)}catch(u){console.error(`the \`${a}\` store's value could not be restored from localStorage because of ${u}`)}if(i===null)t(e);else try{const u=JSON.parse(i);n(u),s=u}catch(u){console.error(`localStorage's value for \`${a}\` (\`${i}\`) could not be parsed as JSON because of ${u}`)}};return{...c,set:t,update:i=>{t(i(s))}}};function ve(a){return a*a*a}function Q(a){const e=a-1;return e*e*e+1}function z(a,{delay:e=0,duration:l=400,easing:s=Q,x:n=0,y:c=0,opacity:t=0}={}){const o=getComputedStyle(a),f=+o.opacity,i=o.transform==="none"?"":o.transform,u=f*(1-t),[$,w]=K(n),[p,h]=K(c);return{delay:e,duration:l,easing:s,css:(r,m)=>`
			transform: ${i} translate(${(1-r)*$}${w}, ${(1-r)*p}${h});
			opacity: ${f-u*m}`}}const $e=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";pe("theme",$e);function W(a){let e,l,s,n;const c=a[3].default,t=te(c,a,a[2],null);return{c(){e=b("main"),t&&t.c(),this.h()},l(o){e=y(o,"MAIN",{class:!0});var f=S(e);t&&t.l(f),f.forEach(d),this.h()},h(){v(e,"class","svelte-orb45f")},m(o,f){N(o,e,f),t&&t.m(e,null),n=!0},p(o,f){a=o,t&&t.p&&(!n||f&4)&&ae(t,c,a,a[2],n?re(c,a[2],f,null):se(a[2]),null)},i(o){n||(I(t,o),ne(()=>{n&&(s&&s.end(1),l=le(e,z,{easing:Q,y:-10,duration:250,delay:300}),l.start())}),n=!0)},o(o){T(t,o),l&&l.invalidate(),s=oe(e,z,{easing:ve,y:10,duration:250}),n=!1},d(o){o&&d(e),t&&t.d(o),o&&s&&s.end()}}}function be(a){let e,l,s,n,c=a[0],t,o,f,i,u,$,w,p;s=new de({});let h=W(a);return{c(){e=b("link"),l=R(),O(s.$$.fragment),n=R(),h.c(),t=R(),o=b("footer"),f=b("p"),i=D("SITE IS CURRENTLY "),u=b("b"),$=D("VERY"),w=D(" UNDER CONSTRUCTION (logo is a placeholder)"),this.h()},l(r){e=y(r,"LINK",{href:!0,rel:!0}),l=C(r),k(s.$$.fragment,r),n=C(r),h.l(r),t=C(r),o=y(r,"FOOTER",{class:!0});var m=S(o);f=y(m,"P",{});var _=S(f);i=F(_,"SITE IS CURRENTLY "),u=y(_,"B",{});var L=S(u);$=F(L,"VERY"),L.forEach(d),w=F(_," UNDER CONSTRUCTION (logo is a placeholder)"),_.forEach(d),m.forEach(d),this.h()},h(){v(e,"href","/themes/syntax.css"),v(e,"rel","stylesheet"),v(o,"class","svelte-orb45f")},m(r,m){N(r,e,m),N(r,l,m),A(s,r,m),N(r,n,m),h.m(r,m),N(r,t,m),N(r,o,m),g(o,f),g(f,i),g(f,u),g(u,$),g(f,w),p=!0},p(r,[m]){m&1&&M(c,c=r[0])?(ce(),T(h,1,1,J),ee(),h=W(r),h.c(),I(h,1),h.m(t.parentNode,t)):h.p(r,m)},i(r){p||(I(s.$$.fragment,r),I(h),p=!0)},o(r){T(s.$$.fragment,r),T(h),p=!1},d(r){r&&d(e),r&&d(l),U(s,r),r&&d(n),h.d(r),r&&d(t),r&&d(o)}}}function ye(a,e,l){let s,{$$slots:n={},$$scope:c}=e,{data:t}=e;return a.$$set=o=>{"data"in o&&l(1,t=o.data),"$$scope"in o&&l(2,c=o.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&l(0,s=t.pathname)},[s,t,c,n]}class Ne extends Y{constructor(e){super(),q(this,e,ye,be,M,{data:1})}}export{Ne as default};
