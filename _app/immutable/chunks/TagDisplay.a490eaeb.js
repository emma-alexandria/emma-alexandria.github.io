import{S as k,i as x,s as E,q as d,r as m,b,E as u,h,k as v,l as p,m as y,n as f,X as z,a as L,c as S,D as _,u as T}from"./index.d81dce28.js";import"./paths.a32541d7.js";function w(r){let a=r[0]()+"",s;return{c(){s=d(a)},l(e){s=m(e,a)},m(e,t){b(e,s,t)},p:u,i:u,o:u,d(e){e&&h(s)}}}function F(r,a,s){let{date:e}=a;function t(){const n=new Date(e),l={weekday:"long",year:"numeric",month:"long",day:"numeric"};return n.toLocaleString("en-gb",l)}return r.$$set=n=>{"date"in n&&s(1,e=n.date)},[t,e]}class U extends k{constructor(a){super(),x(this,a,F,w,E,{date:1})}}function D(r,a,s){const e=r.slice();return e[1]=a[s],e}function q(r){let a,s,e,t=r[1]+"",n,l,o;return{c(){a=v("li"),s=v("a"),e=d("#"),n=d(t),o=L(),this.h()},l(c){a=p(c,"LI",{class:!0});var i=y(a);s=p(i,"A",{href:!0,class:!0});var g=y(s);e=m(g,"#"),n=m(g,t),g.forEach(h),o=S(i),i.forEach(h),this.h()},h(){f(s,"href",l="/blog/tags/"+r[1]),f(s,"class","svelte-zqyv3b"),f(a,"class","tag svelte-zqyv3b")},m(c,i){b(c,a,i),_(a,s),_(s,e),_(s,n),_(a,o)},p(c,i){i&1&&t!==(t=c[1]+"")&&T(n,t),i&1&&l!==(l="/blog/tags/"+c[1])&&f(s,"href",l)},d(c){c&&h(a)}}}function $(r){let a,s=r[0],e=[];for(let t=0;t<s.length;t+=1)e[t]=q(D(r,s,t));return{c(){a=v("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){a=p(t,"UL",{class:!0});var n=y(a);for(let l=0;l<e.length;l+=1)e[l].l(n);n.forEach(h),this.h()},h(){f(a,"class","svelte-zqyv3b")},m(t,n){b(t,a,n);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(a,null)},p(t,[n]){if(n&1){s=t[0];let l;for(l=0;l<s.length;l+=1){const o=D(t,s,l);e[l]?e[l].p(o,n):(e[l]=q(o),e[l].c(),e[l].m(a,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}},i:u,o:u,d(t){t&&h(a),z(e,t)}}}function A(r,a,s){let{tags:e=[]}=a;return r.$$set=t=>{"tags"in t&&s(0,e=t.tags)},[e]}class X extends k{constructor(a){super(),x(this,a,A,$,E,{tags:0})}}export{U as F,X as T};
