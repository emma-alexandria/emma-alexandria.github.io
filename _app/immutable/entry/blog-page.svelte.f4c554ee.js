import{S as q,i as D,s as S,k as g,a as v,q as M,y,M as z,l as b,h as i,c as B,m as k,r as P,z as E,n as d,D as p,b as w,A as j,g as x,d as A,B as H}from"../chunks/index.d81dce28.js";import{B as C}from"../chunks/BlogList.3946b19e.js";import{B as I}from"../chunks/BackArrow.605266a6.js";function L(m){let a;return{c(){a=M("Home")},l(s){a=P(s,"Home")},m(s,e){w(s,a,e)},d(s){s&&i(a)}}}function T(m){let a,s,e,n,u,$,l,h,c,_;return l=new I({props:{href:"/",$$slots:{default:[L]},$$scope:{ctx:m}}}),c=new C({props:{posts:m[0].posts}}),{c(){a=g("meta"),s=v(),e=g("div"),n=g("h1"),u=M("Personal blog"),$=v(),y(l.$$.fragment),h=v(),y(c.$$.fragment),this.h()},l(t){const o=z("svelte-jci3p9",document.head);a=b(o,"META",{name:!0,content:!0}),o.forEach(i),s=B(t),e=b(t,"DIV",{class:!0});var r=k(e);n=b(r,"H1",{class:!0});var f=k(n);u=P(f,"Personal blog"),f.forEach(i),$=B(r),E(l.$$.fragment,r),h=B(r),E(c.$$.fragment,r),r.forEach(i),this.h()},h(){document.title="Blog",d(a,"name","description"),d(a,"content","My personal blog"),d(n,"class","svelte-16jfllp"),d(e,"class","svelte-16jfllp")},m(t,o){p(document.head,a),w(t,s,o),w(t,e,o),p(e,n),p(n,u),p(e,$),j(l,e,null),p(e,h),j(c,e,null),_=!0},p(t,[o]){const r={};o&2&&(r.$$scope={dirty:o,ctx:t}),l.$set(r);const f={};o&1&&(f.posts=t[0].posts),c.$set(f)},i(t){_||(x(l.$$.fragment,t),x(c.$$.fragment,t),_=!0)},o(t){A(l.$$.fragment,t),A(c.$$.fragment,t),_=!1},d(t){i(a),t&&i(s),t&&i(e),H(l),H(c)}}}function V(m,a,s){let{data:e}=a;return m.$$set=n=>{"data"in n&&s(0,e=n.data)},[e]}class K extends q{constructor(a){super(),D(this,a,V,T,S,{data:0})}}export{K as default};
