import{S,i as E,s as I,e as z,b as k,g as p,v as C,d as g,f as V,h as _,o as D,H as F,I as H,J as K,K as W,k as h,q as b,a as B,l as $,m as v,r as w,c as L,n as y,D as u,L as j,M as G,E as Q,y as A,z as J,A as N,B as P}from"../chunks/index.b5fc1844.js";import{d as R,w as T}from"../chunks/index.80c150fb.js";import{c as U,f as X}from"../chunks/index.8ca2a4c0.js";const Y=T(900),Z=T(900);R([Y,Z],([r,t])=>r<t);const ee=(r,t)=>{const s=typeof globalThis.window<"u";let e=t;const{set:o,...a}=T(t,()=>{if(s){d();const n=l=>{l.key===r&&d()};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}else return()=>{}}),c=n=>{e=n,o(n);try{localStorage.setItem(r,JSON.stringify(n))}catch(l){console.error(`the \`${r}\` store's new value \`${n}\` could not be persisted to localStorage because of ${l}`)}},d=()=>{let n=null;try{n=localStorage.getItem(r)}catch(l){console.error(`the \`${r}\` store's value could not be restored from localStorage because of ${l}`)}if(n===null)c(t);else try{const l=JSON.parse(n);o(l),e=l}catch(l){console.error(`localStorage's value for \`${r}\` (\`${n}\`) could not be parsed as JSON because of ${l}`)}};return{...a,set:c,update:n=>{c(n(e))}}};function O(r){let t;const s=r[2].default,e=F(s,r,r[1],null);return{c(){e&&e.c()},l(o){e&&e.l(o)},m(o,a){e&&e.m(o,a),t=!0},p(o,a){e&&e.p&&(!t||a&2)&&H(e,s,o,o[1],t?W(s,o[1],a,null):K(o[1]),null)},i(o){t||(p(e,o),t=!0)},o(o){g(e,o),t=!1},d(o){e&&e.d(o)}}}function te(r){let t,s,e=r[0]&&O(r);return{c(){e&&e.c(),t=z()},l(o){e&&e.l(o),t=z()},m(o,a){e&&e.m(o,a),k(o,t,a),s=!0},p(o,[a]){o[0]?e?(e.p(o,a),a&1&&p(e,1)):(e=O(o),e.c(),p(e,1),e.m(t.parentNode,t)):e&&(C(),g(e,1,1,()=>{e=null}),V())},i(o){s||(p(e),s=!0)},o(o){g(e),s=!1},d(o){e&&e.d(o),o&&_(t)}}}function oe(r,t,s){let{$$slots:e={},$$scope:o}=t,a=!1;return D(()=>{s(0,a=!0)}),r.$$set=c=>{"$$scope"in c&&s(1,o=c.$$scope)},[a,o,e]}class se extends S{constructor(t){super(),E(this,t,oe,te,I,{})}}const ae=typeof window<"u"&&globalThis.localStorage&&"theme"in localStorage?localStorage.getItem("theme"):"dark";ee("theme",ae);function re(r){let t,s,e,o,a,c,d,f,n,l;return{c(){t=h("div"),s=h("p"),e=b("My name is"),o=B(),a=h("h1"),c=b("Emma Alexandria"),d=B(),f=h("p"),n=b(`I'm a young amateur software developer from Cape Town. I mess around with
    all areas of programming, but my true interest is in engineering and space
    exploration`),this.h()},l(m){t=$(m,"DIV",{class:!0});var i=v(t);s=$(i,"P",{class:!0});var q=v(s);e=w(q,"My name is"),q.forEach(_),o=L(i),a=$(i,"H1",{class:!0});var x=v(a);c=w(x,"Emma Alexandria"),x.forEach(_),d=L(i),f=$(i,"P",{class:!0});var M=v(f);n=w(M,`I'm a young amateur software developer from Cape Town. I mess around with
    all areas of programming, but my true interest is in engineering and space
    exploration`),M.forEach(_),i.forEach(_),this.h()},h(){y(s,"class","superheader svelte-q4o8nz"),y(a,"class","svelte-q4o8nz"),y(f,"class","text svelte-q4o8nz"),y(t,"class","content svelte-q4o8nz")},m(m,i){k(m,t,i),u(t,s),u(s,e),u(t,o),u(t,a),u(a,c),u(t,d),u(t,f),u(f,n)},p(m,[i]){},i(m){l||j(()=>{l=G(t,X,{easing:U,y:-10,duration:300,delay:0}),l.start()})},o:Q,d(m){m&&_(t)}}}class ne extends S{constructor(t){super(),E(this,t,null,re,I,{})}}function le(r){let t,s;return t=new ne({}),{c(){A(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,o){N(t,e,o),s=!0},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}function ce(r){let t,s;return t=new se({props:{$$slots:{default:[le]},$$scope:{ctx:r}}}),{c(){A(t.$$.fragment)},l(e){J(t.$$.fragment,e)},m(e,o){N(t,e,o),s=!0},p(e,[o]){const a={};o&1&&(a.$$scope={dirty:o,ctx:e}),t.$set(a)},i(e){s||(p(t.$$.fragment,e),s=!0)},o(e){g(t.$$.fragment,e),s=!1},d(e){P(t,e)}}}class me extends S{constructor(t){super(),E(this,t,null,ce,I,{})}}export{me as default};
