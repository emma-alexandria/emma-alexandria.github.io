import{S as O,i as H,s as L,G as A,H as te,I as se,m as E,h as u,J as z,b as w,K as ae,E as R,L as N,k as g,a as y,q as V,y as F,l as k,c as I,r as B,z as Q,n as f,T as W,D as v,A as X,u as J,g as S,d as G,B as ee,M as le,f as re,Y as ne,e as U,v as ie}from"../chunks/index.6afb8bef.js";function ce(h){let e,l='<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>',t=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},h[0]],r={};for(let a=0;a<t.length;a+=1)r=A(r,t[a]);return{c(){e=te("svg"),this.h()},l(a){e=se(a,"svg",{viewBox:!0,width:!0,height:!0});var n=E(e);n.forEach(u),this.h()},h(){z(e,r)},m(a,n){w(a,e,n),e.innerHTML=l},p(a,[n]){z(e,r=ae(t,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},n&1&&a[0]]))},i:R,o:R,d(a){a&&u(e)}}}function oe(h,e,l){return h.$$set=t=>{l(0,e=A(A({},e),N(t)))},e=N(e),[e]}class he extends O{constructor(e){super(),H(this,e,oe,ce,L,{})}}function ue(h){let e,l,t,r,a,n,_,d=h[0].name+"",i,C,s,o,c,$,j,D=h[0].description+"",M,b;return o=new he({props:{"font-size":"1.5rem"}}),{c(){e=g("div"),l=g("img"),r=y(),a=g("div"),n=g("div"),_=g("h2"),i=V(d),C=y(),s=g("a"),F(o.$$.fragment),$=y(),j=g("p"),M=V(D),this.h()},l(m){e=k(m,"DIV",{class:!0});var p=E(e);l=k(p,"IMG",{alt:!0,src:!0,class:!0}),r=I(p),a=k(p,"DIV",{class:!0});var P=E(a);n=k(P,"DIV",{class:!0});var x=E(n);_=k(x,"H2",{class:!0});var T=E(_);i=B(T,d),T.forEach(u),C=I(x),s=k(x,"A",{href:!0,class:!0});var q=E(s);Q(o.$$.fragment,q),q.forEach(u),x.forEach(u),$=I(P),j=k(P,"P",{class:!0});var K=E(j);M=B(K,D),K.forEach(u),P.forEach(u),p.forEach(u),this.h()},h(){f(l,"alt","Project preview/promotional material, unimportant"),W(l.src,t=h[0].img)||f(l,"src",t),f(l,"class","image svelte-9v2k7v"),f(_,"class","header svelte-9v2k7v"),f(s,"href",c=h[0].link),f(s,"class","icon svelte-9v2k7v"),f(n,"class","headerDiv svelte-9v2k7v"),f(j,"class","description svelte-9v2k7v"),f(a,"class","content svelte-9v2k7v"),f(e,"class","container svelte-9v2k7v")},m(m,p){w(m,e,p),v(e,l),v(e,r),v(e,a),v(a,n),v(n,_),v(_,i),v(n,C),v(n,s),X(o,s,null),v(a,$),v(a,j),v(j,M),b=!0},p(m,[p]){(!b||p&1&&!W(l.src,t=m[0].img))&&f(l,"src",t),(!b||p&1)&&d!==(d=m[0].name+"")&&J(i,d),(!b||p&1&&c!==(c=m[0].link))&&f(s,"href",c),(!b||p&1)&&D!==(D=m[0].description+"")&&J(M,D)},i(m){b||(S(o.$$.fragment,m),b=!0)},o(m){G(o.$$.fragment,m),b=!1},d(m){m&&u(e),ee(o)}}}function fe(h,e,l){let{project:t}=e;return h.$$set=r=>{"project"in r&&l(0,t=r.project)},[t]}class me extends O{constructor(e){super(),H(this,e,fe,ue,L,{project:0})}}function Y(h,e,l){const t=h.slice();return t[1]=e[l],t[3]=l,t}function ve(h){let e,l,t,r;return l=new me({props:{project:h[1]}}),{c(){e=g("div"),F(l.$$.fragment),t=y(),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=E(e);Q(l.$$.fragment,n),t=I(n),n.forEach(u),this.h()},h(){f(e,"class","project svelte-1gvk4h1")},m(a,n){w(a,e,n),X(l,e,null),v(e,t),r=!0},p:R,i(a){r||(S(l.$$.fragment,a),r=!0)},o(a){G(l.$$.fragment,a),r=!1},d(a){a&&u(e),ee(l)}}}function Z(h){let e,l,t=h[3]<2&&ve(h);return{c(){t&&t.c(),e=U()},l(r){t&&t.l(r),e=U()},m(r,a){t&&t.m(r,a),w(r,e,a),l=!0},p(r,a){r[3]<2&&t.p(r,a)},i(r){l||(S(t),l=!0)},o(r){G(t),l=!1},d(r){t&&t.d(r),r&&u(e)}}}function de(h){let e,l,t,r,a,n,_,d=h[0],i=[];for(let s=0;s<d.length;s+=1)i[s]=Z(Y(h,d,s));const C=s=>G(i[s],1,1,()=>{i[s]=null});return{c(){e=g("meta"),l=y(),t=g("h1"),r=V("WORK IN PROGRESS"),a=y(),n=g("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){const o=le("svelte-nu44el",document.head);e=k(o,"META",{name:!0,content:!0}),o.forEach(u),l=I(s),t=k(s,"H1",{class:!0});var c=E(t);r=B(c,"WORK IN PROGRESS"),c.forEach(u),a=I(s),n=k(s,"DIV",{class:!0});var $=E(n);for(let j=0;j<i.length;j+=1)i[j].l($);$.forEach(u),this.h()},h(){document.title="My projects",f(e,"name","description"),f(e,"content","Programming projects I'm working on"),f(t,"class","svelte-1gvk4h1"),f(n,"class","container svelte-1gvk4h1")},m(s,o){v(document.head,e),w(s,l,o),w(s,t,o),v(t,r),w(s,a,o),w(s,n,o);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(n,null);_=!0},p(s,[o]){if(o&1){d=s[0];let c;for(c=0;c<d.length;c+=1){const $=Y(s,d,c);i[c]?(i[c].p($,o),S(i[c],1)):(i[c]=Z($),i[c].c(),S(i[c],1),i[c].m(n,null))}for(ie(),c=d.length;c<i.length;c+=1)C(c);re()}},i(s){if(!_){for(let o=0;o<d.length;o+=1)S(i[o]);_=!0}},o(s){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)G(i[o]);_=!1},d(s){u(e),s&&u(l),s&&u(t),s&&u(a),s&&u(n),ne(i,s)}}}function _e(h){return[[{name:"Shred",description:"A simple Golang utility to manage trash files, and securely erase files through an overwrite pass. Currently in polish phase.",img:"/projects/shred/shred-screenshot.png",link:"https://github.com/emma-alexandria/shred"},{name:"Untitled Minecraft Clone",description:"The most generic project imagineable. C++/SDL2/OpenGL. Minimal external libraries, custom ECS implementation",img:"https://placehold.co/400",link:"https://github.com/emma-alexandria/shred"},{name:"Shred",description:"A simple Golang utility to manage trash files, and securely erase files through an overwrite pass",img:"https://placehold.co/400",link:"https://github.com/emma-alexandria/shred"}]]}class ge extends O{constructor(e){super(),H(this,e,_e,de,L,{})}}export{ge as default};
