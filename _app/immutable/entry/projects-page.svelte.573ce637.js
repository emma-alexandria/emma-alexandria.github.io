import{S as O,i as H,s as L,G as A,H as te,I as se,m as E,h,J as z,b as w,K as ae,E as R,L as N,k as g,a as y,q as V,y as F,l as k,c as I,r as B,z as Q,n as m,T as W,D as d,A as X,u as J,g as S,d as G,B as ee,M as re,f as le,Y as ne,e as U,v as ie}from"../chunks/index.6afb8bef.js";function ce(u){let e,r='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',s=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},u[0]],l={};for(let a=0;a<s.length;a+=1)l=A(l,s[a]);return{c(){e=te("svg"),this.h()},l(a){e=se(a,"svg",{viewBox:!0,width:!0,height:!0});var n=E(e);n.forEach(h),this.h()},h(){z(e,l)},m(a,n){w(a,e,n),e.innerHTML=r},p(a,[n]){z(e,l=ae(s,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n&1&&a[0]]))},i:R,o:R,d(a){a&&h(e)}}}function oe(u,e,r){return u.$$set=s=>{r(0,e=A(A({},e),N(s)))},e=N(e),[e]}class ue extends O{constructor(e){super(),H(this,e,oe,ce,L,{})}}function he(u){let e,r,s,l,a,n,_,v=u[0].name+"",i,C,t,o,c,$,j,D=u[0].description+"",M,b;return o=new ue({props:{"font-size":"1.5rem"}}),{c(){e=g("div"),r=g("img"),l=y(),a=g("div"),n=g("div"),_=g("h2"),i=V(v),C=y(),t=g("a"),F(o.$$.fragment),$=y(),j=g("p"),M=V(D),this.h()},l(f){e=k(f,"DIV",{class:!0});var p=E(e);r=k(p,"IMG",{alt:!0,src:!0,class:!0}),l=I(p),a=k(p,"DIV",{class:!0});var P=E(a);n=k(P,"DIV",{class:!0});var x=E(n);_=k(x,"H2",{class:!0});var T=E(_);i=B(T,v),T.forEach(h),C=I(x),t=k(x,"A",{href:!0,class:!0});var q=E(t);Q(o.$$.fragment,q),q.forEach(h),x.forEach(h),$=I(P),j=k(P,"P",{class:!0});var K=E(j);M=B(K,D),K.forEach(h),P.forEach(h),p.forEach(h),this.h()},h(){m(r,"alt","Project preview/promotional material, unimportant"),W(r.src,s=u[0].img)||m(r,"src",s),m(r,"class","image svelte-9v2k7v"),m(_,"class","header svelte-9v2k7v"),m(t,"href",c=u[0].link),m(t,"class","icon svelte-9v2k7v"),m(n,"class","headerDiv svelte-9v2k7v"),m(j,"class","description svelte-9v2k7v"),m(a,"class","content svelte-9v2k7v"),m(e,"class","container svelte-9v2k7v")},m(f,p){w(f,e,p),d(e,r),d(e,l),d(e,a),d(a,n),d(n,_),d(_,i),d(n,C),d(n,t),X(o,t,null),d(a,$),d(a,j),d(j,M),b=!0},p(f,[p]){(!b||p&1&&!W(r.src,s=f[0].img))&&m(r,"src",s),(!b||p&1)&&v!==(v=f[0].name+"")&&J(i,v),(!b||p&1&&c!==(c=f[0].link))&&m(t,"href",c),(!b||p&1)&&D!==(D=f[0].description+"")&&J(M,D)},i(f){b||(S(o.$$.fragment,f),b=!0)},o(f){G(o.$$.fragment,f),b=!1},d(f){f&&h(e),ee(o)}}}function me(u,e,r){let{project:s}=e;return u.$$set=l=>{"project"in l&&r(0,s=l.project)},[s]}class fe extends O{constructor(e){super(),H(this,e,me,he,L,{project:0})}}function Y(u,e,r){const s=u.slice();return s[1]=e[r],s[3]=r,s}function de(u){let e,r,s,l;return r=new fe({props:{project:u[1]}}),{c(){e=g("div"),F(r.$$.fragment),s=y(),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=E(e);Q(r.$$.fragment,n),s=I(n),n.forEach(h),this.h()},h(){m(e,"class","project svelte-atisd1")},m(a,n){w(a,e,n),X(r,e,null),d(e,s),l=!0},p:R,i(a){l||(S(r.$$.fragment,a),l=!0)},o(a){G(r.$$.fragment,a),l=!1},d(a){a&&h(e),ee(r)}}}function Z(u){let e,r,s=u[3]<1&&de(u);return{c(){s&&s.c(),e=U()},l(l){s&&s.l(l),e=U()},m(l,a){s&&s.m(l,a),w(l,e,a),r=!0},p(l,a){l[3]<1&&s.p(l,a)},i(l){r||(S(s),r=!0)},o(l){G(s),r=!1},d(l){s&&s.d(l),l&&h(e)}}}function ve(u){let e,r,s,l,a,n,_,v=u[0],i=[];for(let t=0;t<v.length;t+=1)i[t]=Z(Y(u,v,t));const C=t=>G(i[t],1,1,()=>{i[t]=null});return{c(){e=g("meta"),r=y(),s=g("h1"),l=V("WORK IN PROGRESS"),a=y(),n=g("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){const o=re("svelte-nu44el",document.head);e=k(o,"META",{name:!0,content:!0}),o.forEach(h),r=I(t),s=k(t,"H1",{});var c=E(s);l=B(c,"WORK IN PROGRESS"),c.forEach(h),a=I(t),n=k(t,"DIV",{class:!0});var $=E(n);for(let j=0;j<i.length;j+=1)i[j].l($);$.forEach(h),this.h()},h(){document.title="My projects",m(e,"name","description"),m(e,"content","Programming projects I'm working on"),m(n,"class","container svelte-atisd1")},m(t,o){d(document.head,e),w(t,r,o),w(t,s,o),d(s,l),w(t,a,o),w(t,n,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(n,null);_=!0},p(t,[o]){if(o&1){v=t[0];let c;for(c=0;c<v.length;c+=1){const $=Y(t,v,c);i[c]?(i[c].p($,o),S(i[c],1)):(i[c]=Z($),i[c].c(),S(i[c],1),i[c].m(n,null))}for(ie(),c=v.length;c<i.length;c+=1)C(c);le()}},i(t){if(!_){for(let o=0;o<v.length;o+=1)S(i[o]);_=!0}},o(t){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)G(i[o]);_=!1},d(t){h(e),t&&h(r),t&&h(s),t&&h(a),t&&h(n),ne(i,t)}}}function _e(u){return[[{name:"Shred",description:"A simple Golang utility to manage trash files, and securely erase files through an overwrite pass. Currently in polish phase.",img:"/projects/shred/shred-screenshot.png",link:"https://github.com/emma-alexandria/shred"},{name:"Untitled Minecraft Clone",description:"The most generic project imagineable. C++/SDL2/OpenGL. Minimal external libraries, custom ECS implementation",img:"/img/dinosaur.jpg",link:"https://github.com/emma-alexandria/shred"},{name:"Shred",description:"A simple Golang utility to manage trash files, and securely erase files through an overwrite pass",img:"/img/dinosaur.jpg",link:"https://github.com/emma-alexandria/shred"}]]}class ge extends O{constructor(e){super(),H(this,e,_e,ve,L,{})}}export{ge as default};
