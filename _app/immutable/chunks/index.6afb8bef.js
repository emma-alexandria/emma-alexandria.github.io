function x(){}const J=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function W(){return Object.create(null)}function E(t){t.forEach(K)}function O(t){return typeof t=="function"}function Lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function zt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function dt(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Ft(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?_t(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)c[l]=e.dirty[l]|r[l];return c}return e.dirty|r}return e.dirty}function Wt(t,e,n,i,r,c){if(r){const s=Q(e,n,i,c);t.p(s,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Jt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const U=typeof window<"u";let V=U?()=>window.performance.now():()=>Date.now(),B=U?t=>requestAnimationFrame(t):x;const w=new Set;function X(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&B(X)}function Y(t){let e;return w.size===0&&B(X),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let P=!1;function mt(){P=!0}function pt(){P=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,_=>e[n[_]].claim_order,u))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const c=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);c.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<c.length&&s[o].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(s[o],f)}}function xt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return xt(t.head||t,e),e.sheet}function wt(t,e){if(P){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Kt(t,e,n){P&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function Qt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Ut(){return F(" ")}function Vt(){return F("")}function Xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Yt(t,e){for(const n in e)Et(t,n,e[n])}function kt(t){return Array.from(t.childNodes)}function Nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){Nt(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||c.push(l.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Zt(t,e,n){return it(t,e,n,et)}function te(t,e,n){return it(t,e,n,vt)}function At(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function ee(t){return At(t," ")}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function ie(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function re(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function se(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function oe(t,e){return new t(e)}const T=new Map;let D=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:$t(e),rules:{}};return T.set(t,n),n}function rt(t,e,n,i,r,c,s,l=0){const o=16.666/i;let u=`{
`;for(let m=0;m<=1;m+=o){const p=e+(n-e)*c(m);u+=m*100+`%{${s(p,1-p)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${jt(f)}_${l}`,_=Z(t),{stylesheet:d,rules:h}=T.get(_)||Ct(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,D+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),D-=r,D||Tt())}function Tt(){B(()=>{D||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),T.clear())})}let A;function N(t){A=t}function st(){if(!A)throw new Error("Function called outside component initialization");return A}function ce(t){st().$$.on_mount.push(t)}function le(t){st().$$.after_update.push(t)}const b=[],G=[];let v=[];const I=[],ot=Promise.resolve();let z=!1;function ct(){z||(z=!0,ot.then(lt))}function ue(){return ct(),ot}function S(t){v.push(t)}const q=new Set;let $=0;function lt(){if($!==0)return;const t=A;do{try{for(;$<b.length;){const e=b[$];$++,N(e),Dt(e.$$)}}catch(e){throw b.length=0,$=0,e}for(N(null),b.length=0,$=0;G.length;)G.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];q.has(n)||(q.add(n),n())}v.length=0}while(b.length);for(;I.length;)I.pop()();z=!1,q.clear(),N(t)}function Dt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Mt(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let k;function ut(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function M(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const C=new Set;let g;function ae(){g={r:0,c:[],p:g}}function fe(){g.r||E(g.c),g=g.p}function Ot(t,e){t&&t.i&&(C.delete(t),t.i(e))}function _e(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),g.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function de(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,s,l,o=0;function u(){s&&L(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=J,tick:y=x,css:m}=r||at;m&&(s=rt(t,0,1,d,_,h,m,o++)),y(0,1);const p=V()+_,ft=p+d;l&&l.abort(),c=!0,S(()=>M(t,!0,"start")),l=Y(R=>{if(c){if(R>=ft)return y(1,0),M(t,!0,"end"),u(),c=!1;if(R>=p){const H=h((R-p)/d);y(H,1-H)}}return c})}let a=!1;return{start(){a||(a=!0,L(t),O(r)?(r=r(i),ut().then(f)):f())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function he(t,e,n){const i={direction:"out"};let r=e(t,n,i),c=!0,s;const l=g;l.r+=1;function o(){const{delay:u=0,duration:f=300,easing:a=J,tick:_=x,css:d}=r||at;d&&(s=rt(t,1,0,f,u,a,d));const h=V()+u,y=h+f;S(()=>M(t,!1,"start")),Y(m=>{if(c){if(m>=y)return _(0,1),M(t,!1,"end"),--l.r||E(l.c),!1;if(m>=h){const p=a((m-h)/f);_(1-p,p)}}return c})}return O(r)?ut().then(()=>{r=r(i),o()}):o(),{end(u){u&&r.tick&&r.tick(1,0),c&&(s&&L(t,s),c=!1)}}}const me=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function pe(t,e){const n={},i={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],l=e[c];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[c]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ye(t){return typeof t=="object"&&t!==null?t:{}}function ge(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function Pt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||S(()=>{const s=t.$$.on_mount.map(K).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),c.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Mt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,r,c,s,l=[-1]){const o=A;N(t);const u=t.$$={fragment:null,ctx:[],props:c,update:x,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:W(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return u.ctx&&r(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&qt(t,a)),_}):[],u.update(),f=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);u.fragment&&u.fragment.l(a),a.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&Ot(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),pt(),lt()}N(o)}class be{$destroy(){Rt(this,1),this.$destroy=x}$on(e,n){if(!O(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{O as $,Pt as A,Rt as B,re as C,wt as D,x as E,Bt as F,_t as G,vt as H,te as I,Yt as J,pe as K,It as L,se as M,Xt as N,me as O,S as P,de as Q,he as R,be as S,zt as T,Ft as U,Wt as V,Gt as W,Ht as X,Qt as Y,ht as Z,E as _,Ut as a,J as a0,Jt as a1,ye as a2,Kt as b,ee as c,_e as d,Vt as e,fe as f,Ot as g,tt as h,$e as i,le as j,et as k,Zt as l,kt as m,Et as n,ce as o,ie as p,F as q,At as r,Lt as s,ue as t,ne as u,ae as v,G as w,oe as x,ge as y,xe as z};
