var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){t.parentNode.removeChild(t)}let c;function l(t){c=t}const i=[],u=[],f=[],d=[],p=Promise.resolve();let h=!1;function m(t){f.push(t)}let g=!1;const w=new Set;function b(){if(!g){g=!0;do{for(let t=0;t<i.length;t+=1){const e=i[t];l(e),v(e.$$)}for(l(null),i.length=0;u.length;)u.pop()();for(let t=0;t<f.length;t+=1){const e=f[t];w.has(e)||(w.add(e),e())}f.length=0}while(i.length);for(;d.length;)d.pop()();h=!1,g=!1,w.clear()}}function v(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(m)}}const $=new Set;function y(t,e){-1===t.$$.dirty[0]&&(i.push(t),h||(h=!0,p.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _(s,i,u,f,d,p,h=[-1]){const g=c;l(s);const w=i.props||{},v=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:h,skip_bound:!1};let _=!1;if(v.ctx=u?u(s,w,((t,e,...n)=>{const r=n.length?n[0]:e;return v.ctx&&d(v.ctx[t],v.ctx[t]=r)&&(!v.skip_bound&&v.bound[t]&&v.bound[t](r),_&&y(s,t)),e})):[],v.update(),_=!0,r(v.before_update),v.fragment=!!f&&f(v.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);v.fragment&&v.fragment.l(t),t.forEach(a)}else v.fragment&&v.fragment.c();i.intro&&((z=s.$$.fragment)&&z.i&&($.delete(z),z.i(k))),function(t,n,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(n,s),m((()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(m)}(s,i.target,i.anchor),b()}var z,k;l(g)}function z(e){let n;return{c(){var t;t="main",n=document.createElement(t),n.innerHTML='<div class="header svelte-rtwz89"><h1 class="svelte-rtwz89">Surume&#39;s Home</h1> \n        <p class="svelte-rtwz89">MotionGraphics / 3DCG</p></div> \n    <div class="about svelte-rtwz89"><h1 class="svelte-rtwz89">About</h1> \n        <hr width="30px"/> \n        <p style="margin-top: 3em;" class="svelte-rtwz89">MotionGraphicsや3DCGを用いた映像制作を行っています。<br/>\n            するめはおいしいですね。</p> \n        <p style="margin-bottom: 2em;" class="svelte-rtwz89">使用ソフトウェアはAfterEffectsとBlenderです。<br/>\n            現在依頼募集中です。</p> \n        <a href="https://twitter.com/ssuurruummee_" target="_blank" class="svelte-rtwz89">Twitter</a></div> \n    <div class="works svelte-rtwz89"><h1 class="svelte-rtwz89">Works</h1> \n        <hr width="30px"/> \n        <div style="margin-top: 3em; margin-bottom: 2em;"><a href="https://www.youtube.com/watch?v=V1R3gxuAQbc" target="_blank" class="svelte-rtwz89"><img src="https://i.gyazo.com/02aec64c723ac4018cc49059710b2fc4.jpg" alt=""/></a> \n            <a href="https://www.youtube.com/watch?v=MnBeNOC-l6o" target="_blank" class="svelte-rtwz89"><img src="https://i.gyazo.com/603c1e97da77418edd5b05de860de02a.jpg" alt=""/></a> \n            <a href="https://www.youtube.com/watch?v=lvE_vcUfc1g" target="_blank" class="svelte-rtwz89"><img src="https://i.gyazo.com/85aac511c6bf0ed89599a813d0495d9a.jpg" alt=""/></a></div> \n        <a href="https://www.youtube.com/channel/UCu2woK-ifovek0Yps5aGQHA?view_as=subscriber" target="_blank" class="svelte-rtwz89">More works</a></div> \n    <div class="footer svelte-rtwz89"><p>© surume 2020 / Design by Minato minami</p></div>'},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),_(this,t,null,z,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
