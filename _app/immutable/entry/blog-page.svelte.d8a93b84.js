import{S as D,i as S,s as j,k as g,a as v,q as P,y,M as z,l as b,h as i,c as k,m as B,r as q,z as E,n as p,D as _,b as w,A as x,g as A,d as H,B as M}from"../chunks/index.6afb8bef.js";import{B as C,a as I}from"../chunks/BackArrow.9ad297d6.js";function L(m){let a;return{c(){a=P("Home")},l(s){a=q(s,"Home")},m(s,t){w(s,a,t)},d(s){s&&i(a)}}}function T(m){let a,s,t,n,u,$,l,h,c,d;return l=new C({props:{href:"/",$$slots:{default:[L]},$$scope:{ctx:m}}}),c=new I({props:{posts:m[0].posts}}),{c(){a=g("meta"),s=v(),t=g("div"),n=g("h1"),u=P("Personal blog"),$=v(),y(l.$$.fragment),h=v(),y(c.$$.fragment),this.h()},l(e){const o=z("svelte-jci3p9",document.head);a=b(o,"META",{name:!0,content:!0}),o.forEach(i),s=k(e),t=b(e,"DIV",{class:!0});var r=B(t);n=b(r,"H1",{class:!0});var f=B(n);u=q(f,"Personal blog"),f.forEach(i),$=k(r),E(l.$$.fragment,r),h=k(r),E(c.$$.fragment,r),r.forEach(i),this.h()},h(){document.title="Blog",p(a,"name","description"),p(a,"content","My personal blog"),p(n,"class","svelte-fi47k3"),p(t,"class","svelte-fi47k3")},m(e,o){_(document.head,a),w(e,s,o),w(e,t,o),_(t,n),_(n,u),_(t,$),x(l,t,null),_(t,h),x(c,t,null),d=!0},p(e,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:e}),l.$set(r);const f={};o&1&&(f.posts=e[0].posts),c.$set(f)},i(e){d||(A(l.$$.fragment,e),A(c.$$.fragment,e),d=!0)},o(e){H(l.$$.fragment,e),H(c.$$.fragment,e),d=!1},d(e){i(a),e&&i(s),e&&i(t),M(l),M(c)}}}function V(m,a,s){let{data:t}=a;return m.$$set=n=>{"data"in n&&s(0,t=n.data)},[t]}class J extends D{constructor(a){super(),S(this,a,V,T,j,{data:0})}}export{J as default};