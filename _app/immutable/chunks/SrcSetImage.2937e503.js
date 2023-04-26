import{S as c,i as S,s as I,k as v,l as O,n as a,T as r,p as u,b as W,E as _,h as b}from"./index.6afb8bef.js";function q(s){let e,f,n,h,m;return{c(){e=v("img"),this.h()},l(t){e=O(t,"IMG",{alt:!0,src:!0,width:!0,height:!0,srcset:!0,style:!0,class:!0}),this.h()},h(){a(e,"alt",s[1]),r(e.src,f=s[0])||a(e,"src",f),a(e,"width",n=s[2][0]),a(e,"height",h=s[2][1]),a(e,"srcset",m=`
    
    `+s[5](1)+" "+s[2][0]*.25+`w
    `+s[5](3)+" "+s[2][0]*.75+`w,
    `+s[5](2)+" "+s[2][0]*.5+`w,
    `+s[5](4)+" "+s[2][0]+`w,
`),u(e,"max-width",s[4]),u(e,"float",s[3]),a(e,"class","svelte-13cpigy")},m(t,i){W(t,e,i)},p(t,[i]){i&2&&a(e,"alt",t[1]),i&1&&!r(e.src,f=t[0])&&a(e,"src",f),i&4&&n!==(n=t[2][0])&&a(e,"width",n),i&4&&h!==(h=t[2][1])&&a(e,"height",h),i&4&&m!==(m=`
    
    `+t[5](1)+" "+t[2][0]*.25+`w
    `+t[5](3)+" "+t[2][0]*.75+`w,
    `+t[5](2)+" "+t[2][0]*.5+`w,
    `+t[5](4)+" "+t[2][0]+`w,
`)&&a(e,"srcset",m),i&16&&u(e,"max-width",t[4]),i&8&&u(e,"float",t[3])},i:_,o:_,d(t){t&&b(e)}}}function k(s,e,f){let{src:n}=e,{alt:h}=e,{dimensions:m}=e,{float:t="none"}=e,{maxWidth:i="auto"}=e;function o(l){const g=n.substring(n.lastIndexOf("/")+1,n.lastIndexOf(".")),w=n.substring(0,n.lastIndexOf("/")),d=n.split(".").pop();return`${w}/processed/${g}_${l}x.${d}`}return s.$$set=l=>{"src"in l&&f(0,n=l.src),"alt"in l&&f(1,h=l.alt),"dimensions"in l&&f(2,m=l.dimensions),"float"in l&&f(3,t=l.float),"maxWidth"in l&&f(4,i=l.maxWidth)},[n,h,m,t,i,o]}class E extends c{constructor(e){super(),S(this,e,k,q,I,{src:0,alt:1,dimensions:2,float:3,maxWidth:4})}}export{E as S};
