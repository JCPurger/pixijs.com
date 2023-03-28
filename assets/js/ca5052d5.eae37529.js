"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[3513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={hide_table_of_contents:!0},o="Animated Sprite Jet",p={unversionedId:"examples/sprite/animated-sprite-jet",id:"examples/sprite/animated-sprite-jet",title:"Animated Sprite Jet",description:"",source:"@site/docs/examples/sprite/animated-sprite-jet.md",sourceDirName:"examples/sprite",slug:"/examples/sprite/animated-sprite-jet",permalink:"/examples/sprite/animated-sprite-jet",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/examples/sprite/animated-sprite-jet.md",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"examplesSidebar",previous:{title:"Animated Sprite Explosion",permalink:"/examples/sprite/animated-sprite-explosion"},next:{title:"Basic",permalink:"/examples/sprite/basic"}},s={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"animated-sprite-jet"},"Animated Sprite Jet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"playground",playground:!0},"import * as PIXI from 'pixi.js';\n\nconst app = new PIXI.Application({ background: '#1099bb', resizeTo: window });\n\ndocument.body.appendChild(app.view);\n\nPIXI.Assets.load('https://beta.pixijs.com/assets/spritesheet/fighter.json').then(() =>\n{\n    // create an array of textures from an image path\n    const frames = [];\n\n    for (let i = 0; i < 30; i++)\n    {\n        const val = i < 10 ? `0${i}` : i;\n\n        // magically works since the spritesheet was loaded with the pixi loader\n        frames.push(PIXI.Texture.from(`rollSequence00${val}.png`));\n    }\n\n    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)\n    const anim = new PIXI.AnimatedSprite(frames);\n\n    /*\n     * An AnimatedSprite inherits all the properties of a PIXI sprite\n     * so you can change its position, its anchor, mask it, etc\n     */\n    anim.x = app.screen.width / 2;\n    anim.y = app.screen.height / 2;\n    anim.anchor.set(0.5);\n    anim.animationSpeed = 0.5;\n    anim.play();\n\n    app.stage.addChild(anim);\n\n    // Animate the rotation\n    app.ticker.add(() =>\n    {\n        anim.rotation += 0.01;\n    });\n});\n")))}m.isMDXComponent=!0}}]);