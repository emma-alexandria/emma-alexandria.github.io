import{S,i as b,s as q,U as c,y as f,z as u,A as p,Y as H,a0 as h,g as $,d as i,B as d,Z as w,a as I,c as j,b as _,h as r,q as g,k as E,r as v,l as B,m as M,D as N,E as P}from"./index.34755bbf.js";import{B as k,M as T}from"./blogLayout.36953d04.js";function z(l){let t,a,s;return{c(){t=g("Hello, I am "),a=E("em"),s=g("Post Two.")},l(n){t=v(n,"Hello, I am "),a=B(n,"EM",{});var e=M(a);s=v(e,"Post Two."),e.forEach(r)},m(n,e){_(n,t,e),_(n,a,e),N(a,s)},p:P,d(n){n&&r(t),n&&r(a)}}}function A(l){let t,a;return{c(){t=E("strong"),a=g("Nice to meet you!")},l(s){t=B(s,"STRONG",{});var n=M(t);a=v(n,"Nice to meet you!"),n.forEach(r)},m(s,n){_(s,t,n),N(t,a)},p:P,d(s){s&&r(t)}}}function C(l){let t,a,s,n;return t=new T({props:{$$slots:{default:[z]},$$scope:{ctx:l}}}),s=new T({props:{$$slots:{default:[A]},$$scope:{ctx:l}}}),{c(){f(t.$$.fragment),a=I(),f(s.$$.fragment)},l(e){u(t.$$.fragment,e),a=j(e),u(s.$$.fragment,e)},m(e,o){p(t,e,o),_(e,a,o),p(s,e,o),n=!0},p(e,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:e}),t.$set(m);const x={};o&2&&(x.$$scope={dirty:o,ctx:e}),s.$set(x)},i(e){n||($(t.$$.fragment,e),$(s.$$.fragment,e),n=!0)},o(e){i(t.$$.fragment,e),i(s.$$.fragment,e),n=!1},d(e){d(t,e),e&&r(a),d(s,e)}}}function D(l){let t,a;const s=[l[0],y];let n={$$slots:{default:[C]},$$scope:{ctx:l}};for(let e=0;e<s.length;e+=1)n=c(n,s[e]);return t=new k({props:n}),{c(){f(t.$$.fragment)},l(e){u(t.$$.fragment,e)},m(e,o){p(t,e,o),a=!0},p(e,[o]){const m=o&1?H(s,[o&1&&h(e[0]),o&0&&h(y)]):{};o&2&&(m.$$scope={dirty:o,ctx:e}),t.$set(m)},i(e){a||($(t.$$.fragment,e),a=!0)},o(e){i(t.$$.fragment,e),a=!1},d(e){d(t,e)}}}const y={title:"Post Two",date:"2021-12-14",categories:["Test","2"]};function G(l,t,a){return l.$$set=s=>{a(0,t=c(c({},t),w(s)))},t=w(t),[t]}class R extends S{constructor(t){super(),b(this,t,G,D,q,{})}}export{R as default,y as metadata};
