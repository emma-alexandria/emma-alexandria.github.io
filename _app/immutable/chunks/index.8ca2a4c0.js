import{O as r}from"./index.b5fc1844.js";function g(t){return t*t*t}function b(t){const n=t-1;return n*n*n+1}function O(t,{delay:n=0,duration:a=400,easing:e=b,x:i=0,y:u=0,opacity:f=0}={}){const o=getComputedStyle(t),s=+o.opacity,y=o.transform==="none"?"":o.transform,l=s*(1-f),[m,p]=r(i),[$,x]=r(u);return{delay:n,duration:a,easing:e,css:(c,_)=>`
			transform: ${y} translate(${(1-c)*m}${p}, ${(1-c)*$}${x});
			opacity: ${s-l*_}`}}export{g as a,b as c,O as f};
