import{S as z,i as C,s as O,k as v,q as y,a as x,l as E,m as $,r as P,h,c as I,n as B,b as k,D as m,u as M,E as S,O as U,g as L,f as V,d as A,T as F,y as G,z as J,A as K,B as N,v as Q}from"../chunks/index.34755bbf.js";function R(f){let t,o,a,i=f[0].meta.title+"",r,c,d,u,s,b=f[0].meta.date+"",e,n,l,g;return{c(){t=v("div"),o=v("h2"),a=v("a"),r=y(i),d=x(),u=v("p"),s=y("Published "),e=y(b),n=x(),l=v("p"),g=y("Excerpt will go here"),this.h()},l(_){t=E(_,"DIV",{class:!0});var p=$(t);o=E(p,"H2",{});var q=$(o);a=E(q,"A",{href:!0,class:!0});var D=$(a);r=P(D,i),D.forEach(h),q.forEach(h),d=I(p),u=E(p,"P",{});var w=$(u);s=P(w,"Published "),e=P(w,b),w.forEach(h),n=I(p),l=E(p,"P",{});var H=$(l);g=P(H,"Excerpt will go here"),H.forEach(h),p.forEach(h),this.h()},h(){B(a,"href",c=f[0].path),B(a,"class","svelte-1a0g85k"),B(t,"class","svelte-1a0g85k")},m(_,p){k(_,t,p),m(t,o),m(o,a),m(a,r),m(t,d),m(t,u),m(u,s),m(u,e),m(t,n),m(t,l),m(l,g)},p(_,[p]){p&1&&i!==(i=_[0].meta.title+"")&&M(r,i),p&1&&c!==(c=_[0].path)&&B(a,"href",c),p&1&&b!==(b=_[0].meta.date+"")&&M(e,b)},i:S,o:S,d(_){_&&h(t)}}}function W(f,t,o){let{post:a}=t;return f.$$set=i=>{"post"in i&&o(0,a=i.post)},[a]}class X extends z{constructor(t){super(),C(this,t,W,R,O,{post:0})}}function T(f,t,o){const a=f.slice();return a[1]=t[o],a}function j(f){let t,o,a,i;return o=new X({props:{post:f[1]}}),{c(){t=v("li"),G(o.$$.fragment),a=x()},l(r){t=E(r,"LI",{});var c=$(t);J(o.$$.fragment,c),a=I(c),c.forEach(h)},m(r,c){k(r,t,c),K(o,t,null),m(t,a),i=!0},p(r,c){const d={};c&1&&(d.post=r[1]),o.$set(d)},i(r){i||(L(o.$$.fragment,r),i=!0)},o(r){A(o.$$.fragment,r),i=!1},d(r){r&&h(t),N(o)}}}function Y(f){let t,o,a,i,r,c,d,u=f[0].posts,s=[];for(let e=0;e<u.length;e+=1)s[e]=j(T(f,u,e));const b=e=>A(s[e],1,1,()=>{s[e]=null});return{c(){t=v("meta"),o=x(),a=v("h1"),i=y("Blog"),r=x(),c=v("ul");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){const n=U("svelte-jci3p9",document.head);t=E(n,"META",{name:!0,content:!0}),n.forEach(h),o=I(e),a=E(e,"H1",{});var l=$(a);i=P(l,"Blog"),l.forEach(h),r=I(e),c=E(e,"UL",{});var g=$(c);for(let _=0;_<s.length;_+=1)s[_].l(g);g.forEach(h),this.h()},h(){document.title="Blog",B(t,"name","description"),B(t,"content","My personal blog")},m(e,n){m(document.head,t),k(e,o,n),k(e,a,n),m(a,i),k(e,r,n),k(e,c,n);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(c,null);d=!0},p(e,[n]){if(n&1){u=e[0].posts;let l;for(l=0;l<u.length;l+=1){const g=T(e,u,l);s[l]?(s[l].p(g,n),L(s[l],1)):(s[l]=j(g),s[l].c(),L(s[l],1),s[l].m(c,null))}for(Q(),l=u.length;l<s.length;l+=1)b(l);V()}},i(e){if(!d){for(let n=0;n<u.length;n+=1)L(s[n]);d=!0}},o(e){s=s.filter(Boolean);for(let n=0;n<s.length;n+=1)A(s[n]);d=!1},d(e){h(t),e&&h(o),e&&h(a),e&&h(r),e&&h(c),F(s,e)}}}function Z(f,t,o){let{data:a}=t;return f.$$set=i=>{"data"in i&&o(0,a=i.data)},[a]}class te extends z{constructor(t){super(),C(this,t,Z,Y,O,{data:0})}}export{te as default};
