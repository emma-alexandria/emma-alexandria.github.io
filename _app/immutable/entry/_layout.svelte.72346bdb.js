import{S,i as G,s as j,k as h,q as M,l as g,m as p,r as V,h as d,n as _,C as Y,b as P,D as m,u as K,E as k,F as J,a as C,y as q,c as A,z as N,G as O,A as D,g as I,d as w,B as L,f as U,H as Q,I as R,J as X,K as Z,L as ee,M as te,N as se,v as ae}from"../chunks/index.34755bbf.js";import{p as ne,n as re}from"../chunks/stores.e3be905a.js";import{c as le,f as z,a as oe}from"../chunks/index.0634227d.js";function ie(o){let e,t,n;return{c(){e=h("li"),t=h("a"),n=M(o[0]),this.h()},l(s){e=g(s,"LI",{class:!0});var r=p(e);t=g(r,"A",{href:!0,class:!0});var a=p(t);n=V(a,o[0]),a.forEach(d),r.forEach(d),this.h()},h(){_(t,"href",o[1]),_(t,"class","svelte-1yxjyxj"),Y(t,"active",o[2].url.pathname===o[1]),_(e,"class","svelte-1yxjyxj")},m(s,r){P(s,e,r),m(e,t),m(t,n)},p(s,[r]){r&1&&K(n,s[0]),r&2&&_(t,"href",s[1]),r&6&&Y(t,"active",s[2].url.pathname===s[1])},i:k,o:k,d(s){s&&d(e)}}}function ce(o,e,t){let n;J(o,ne,a=>t(2,n=a));let{name:s}=e,{href:r="/"+s.toLowerCase()}=e;return o.$$set=a=>{"name"in a&&t(0,s=a.name),"href"in a&&t(1,r=a.href)},[s,r,n]}class F extends S{constructor(e){super(),G(this,e,ce,ie,j,{name:0,href:1})}}function fe(o){let e,t,n,s,r,a,i,l,y,f,c,u,b,$,B;return l=new F({props:{name:"Blog"}}),f=new F({props:{name:"Projects"}}),u=new F({props:{name:"About"}}),$=new F({props:{name:"Contact"}}),{c(){e=h("nav"),t=h("ul"),n=h("li"),s=h("a"),r=h("img"),i=C(),q(l.$$.fragment),y=C(),q(f.$$.fragment),c=C(),q(u.$$.fragment),b=C(),q($.$$.fragment),this.h()},l(v){e=g(v,"NAV",{class:!0});var x=p(e);t=g(x,"UL",{class:!0});var E=p(t);n=g(E,"LI",{class:!0});var T=p(n);s=g(T,"A",{href:!0});var W=p(s);r=g(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(d),T.forEach(d),i=A(E),N(l.$$.fragment,E),y=A(E),N(f.$$.fragment,E),c=A(E),N(u.$$.fragment,E),b=A(E),N($.$$.fragment,E),E.forEach(d),x.forEach(d),this.h()},h(){O(r.src,a="/logo.svg")||_(r,"src",a),_(r,"alt","Personal logo of Emma Alexandria"),_(r,"class","svelte-1n46dtg"),_(s,"href","/"),_(n,"class","svelte-1n46dtg"),_(t,"class","svelte-1n46dtg"),_(e,"class","svelte-1n46dtg")},m(v,x){P(v,e,x),m(e,t),m(t,n),m(n,s),m(s,r),m(t,i),D(l,t,null),m(t,y),D(f,t,null),m(t,c),D(u,t,null),m(t,b),D($,t,null),B=!0},p:k,i(v){B||(I(l.$$.fragment,v),I(f.$$.fragment,v),I(u.$$.fragment,v),I($.$$.fragment,v),B=!0)},o(v){w(l.$$.fragment,v),w(f.$$.fragment,v),w(u.$$.fragment,v),w($.$$.fragment,v),B=!1},d(v){v&&d(e),L(l),L(f),L(u),L($)}}}class ue extends S{constructor(e){super(),G(this,e,null,fe,j,{})}}function me(o){let e,t,n,s,r,a,i,l,y;return{c(){e=h("div"),t=h("p"),n=M("Made with "),s=h("span"),r=M("♥"),a=M(" by Emma Alexandria"),i=C(),l=h("p"),y=M(`Writing and assets on this page are CC BY | Code on this page is under the
    MIT license unless stated otherwise`),this.h()},l(f){e=g(f,"DIV",{class:!0});var c=p(e);t=g(c,"P",{class:!0});var u=p(t);n=V(u,"Made with "),s=g(u,"SPAN",{class:!0});var b=p(s);r=V(b,"♥"),b.forEach(d),a=V(u," by Emma Alexandria"),u.forEach(d),i=A(c),l=g(c,"P",{class:!0});var $=p(l);y=V($,`Writing and assets on this page are CC BY | Code on this page is under the
    MIT license unless stated otherwise`),$.forEach(d),c.forEach(d),this.h()},h(){_(s,"class","svelte-4cfqm4"),_(t,"class","me svelte-4cfqm4"),_(l,"class","license svelte-4cfqm4"),_(e,"class","svelte-4cfqm4")},m(f,c){P(f,e,c),m(e,t),m(t,n),m(t,s),m(s,r),m(t,a),m(e,i),m(e,l),m(l,y)},p:k,i:k,o:k,d(f){f&&d(e)}}}class _e extends S{constructor(e){super(),G(this,e,null,me,j,{})}}function H(o){let e,t,n,s;const r=o[2].default,a=Q(r,o,o[1],null);return{c(){e=h("div"),a&&a.c(),this.h()},l(i){e=g(i,"DIV",{class:!0});var l=p(e);a&&a.l(l),l.forEach(d),this.h()},h(){_(e,"class","content svelte-gmy06")},m(i,l){P(i,e,l),a&&a.m(e,null),s=!0},p(i,l){o=i,a&&a.p&&(!s||l&2)&&R(a,r,o,o[1],s?Z(r,o[1],l,null):X(o[1]),null)},i(i){s||(I(a,i),ee(()=>{s&&(n&&n.end(1),t=te(e,z,{easing:le,y:10,duration:150,delay:200}),t.start())}),s=!0)},o(i){w(a,i),t&&t.invalidate(),n=se(e,z,{easing:oe,y:-10,duration:150}),s=!1},d(i){i&&d(e),a&&a.d(i),i&&n&&n.end()}}}function de(o){let e,t,n,s,r=o[0],a,i,l,y;n=new ue({});let f=H(o);return l=new _e({}),{c(){e=h("div"),t=h("div"),q(n.$$.fragment),s=C(),f.c(),a=C(),i=h("div"),q(l.$$.fragment),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=p(e);t=g(u,"DIV",{class:!0});var b=p(t);N(n.$$.fragment,b),b.forEach(d),s=A(u),f.l(u),a=A(u),i=g(u,"DIV",{class:!0});var $=p(i);N(l.$$.fragment,$),$.forEach(d),u.forEach(d),this.h()},h(){_(t,"class","header svelte-gmy06"),_(i,"class","footer svelte-gmy06"),_(e,"class","grid-container svelte-gmy06")},m(c,u){P(c,e,u),m(e,t),D(n,t,null),m(e,s),f.m(e,null),m(e,a),m(e,i),D(l,i,null),y=!0},p(c,[u]){u&1&&j(r,r=c[0])?(ae(),w(f,1,1,k),U(),f=H(c),f.c(),I(f,1),f.m(e,a)):f.p(c,u)},i(c){y||(I(n.$$.fragment,c),I(f),I(l.$$.fragment,c),y=!0)},o(c){w(n.$$.fragment,c),w(f),w(l.$$.fragment,c),y=!1},d(c){c&&d(e),L(n),f.d(c),L(l)}}}function ve(o,e,t){let n;J(o,re,a=>t(0,n=a));let{$$slots:s={},$$scope:r}=e;return o.$$set=a=>{"$$scope"in a&&t(1,r=a.$$scope)},[n,r,s]}class $e extends S{constructor(e){super(),G(this,e,ve,de,j,{})}}export{$e as default};
