import{S as c,i as M,s as S,k as I,l as v,n as l,T as o,p as f,b as O,E as m,h as W}from"./index.6afb8bef.js";function b(n){let e,h,s,u,r;return{c(){e=I("img"),this.h()},l(t){e=v(t,"IMG",{alt:!0,src:!0,width:!0,height:!0,srcset:!0,style:!0,class:!0}),this.h()},h(){l(e,"alt",n[1]),o(e.src,h=n[0])||l(e,"src",h),l(e,"width",s=n[2][0]),l(e,"height",u=n[2][1]),l(e,"srcset",r=`
    
    `+n[5](1)+" "+Math.round(n[2][0]*.25)+`w,
    `+n[5](2)+" "+Math.round(n[2][0]*.5)+`w,
    `+n[5](3)+" "+Math.round(n[2][0]*.75)+`w,
    `+n[5](4)+" "+Math.round(n[2][0])+`w
`),f(e,"max-width",n[4]),f(e,"float",n[3]),l(e,"class","svelte-13cpigy")},m(t,a){O(t,e,a)},p(t,[a]){a&2&&l(e,"alt",t[1]),a&1&&!o(e.src,h=t[0])&&l(e,"src",h),a&4&&s!==(s=t[2][0])&&l(e,"width",s),a&4&&u!==(u=t[2][1])&&l(e,"height",u),a&4&&r!==(r=`
    
    `+t[5](1)+" "+Math.round(t[2][0]*.25)+`w,
    `+t[5](2)+" "+Math.round(t[2][0]*.5)+`w,
    `+t[5](3)+" "+Math.round(t[2][0]*.75)+`w,
    `+t[5](4)+" "+Math.round(t[2][0])+`w
`)&&l(e,"srcset",r),a&16&&f(e,"max-width",t[4]),a&8&&f(e,"float",t[3])},i:m,o:m,d(t){t&&W(e)}}}function q(n,e,h){let{src:s}=e,{alt:u}=e,{dimensions:r}=e,{float:t="none"}=e,{maxWidth:a="auto"}=e;function _(i){const d=s.substring(s.lastIndexOf("/")+1,s.lastIndexOf(".")),g=s.substring(0,s.lastIndexOf("/")),w=s.split(".").pop();return`${g}/processed/${d}_${i}x.${w}`}return n.$$set=i=>{"src"in i&&h(0,s=i.src),"alt"in i&&h(1,u=i.alt),"dimensions"in i&&h(2,r=i.dimensions),"float"in i&&h(3,t=i.float),"maxWidth"in i&&h(4,a=i.maxWidth)},[s,u,r,t,a,_]}class C extends c{constructor(e){super(),M(this,e,q,b,S,{src:0,alt:1,dimensions:2,float:3,maxWidth:4})}}export{C as S};
