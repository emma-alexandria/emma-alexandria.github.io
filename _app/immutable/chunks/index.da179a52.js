import{$ as g,a0 as u}from"./index.89dfac8c.js";function C(t){return t*t*t}function x(t){const n=t-1;return n*n*n+1}function S(t,{delay:n=0,duration:o=400,easing:s=g}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:a=>`opacity: ${a*c}`}}function U(t,{delay:n=0,duration:o=400,easing:s=x,x:c=0,y:a=0,opacity:f=0}={}){const r=getComputedStyle(t),e=+r.opacity,y=r.transform==="none"?"":r.transform,p=e*(1-f),[l,m]=u(c),[$,d]=u(a);return{delay:n,duration:o,easing:s,css:(i,b)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${e-p*b}`}}export{C as a,S as b,x as c,U as f};
