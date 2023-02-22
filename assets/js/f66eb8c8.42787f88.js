"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[8112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Containers",s={unversionedId:"guides/components/containers",id:"guides/components/containers",title:"Containers",description:"The Container class provides a simple display object that does what its name implies - collect a set of child objects together.  But beyond grouping objects, containers have a few uses that you should be aware of.",source:"@site/docs/guides/components/containers.md",sourceDirName:"guides/components",slug:"/guides/components/containers",permalink:"/guides/components/containers",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/containers.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Assets",permalink:"/guides/components/assets"},next:{title:"Display Objects",permalink:"/guides/components/display-object"}},l={},p=[{value:"Containers as Groups",id:"containers-as-groups",level:2},{value:"Masking",id:"masking",level:2},{value:"Filtering",id:"filtering",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"containers"},"Containers"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Container.pixi_display"},"Container")," class provides a simple display object that does what its name implies - collect a set of child objects together.  But beyond grouping objects, containers have a few uses that you should be aware of."),(0,r.kt)("h2",{id:"containers-as-groups"},"Containers as Groups"),(0,r.kt)("p",null,"Almost every type of display object is also derived from Container - even Sprites!  This means that in many cases you can create a parent-child hierarchy with the objects you want to render.  "),(0,r.kt)("p",null,"However, it's a good idea ",(0,r.kt)("em",{parentName:"p"},"not")," to do this.  Standalone Container objects are ",(0,r.kt)("strong",{parentName:"p"},"very")," cheap to render, and having a proper hierarchy of Container objects, each containing one or more renderable objects, provides flexibility in rendering order.  It also future-proofs your code, as when you need to add an additional object to a branch of the tree, your animation logic doesn't need to change - just drop the new object into the proper Container, and your logic moves the Container with no changes to your code."),(0,r.kt)("p",null,"So that's the primary use for Containers - as groups of renderable objects in a hierarchy."),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/examples/basic/container"},"container example code"),"."),(0,r.kt)("h2",{id:"masking"},"Masking"),(0,r.kt)("p",null,'Another common use for Container objects is as hosts for masked content.  "Masking" is a technique where parts of your scene graph are only visible within a given area.'),(0,r.kt)("p",null,"Think of a pop-up window.  It has a frame made of one or more Sprites, then has a scrollable content area that hides content outside the frame.  A Container plus a mask makes that scrollable area easy to implement.  Add the Container, set its ",(0,r.kt)("inlineCode",{parentName:"p"},"mask")," property to a Graphics object with a rect, and add the text, image, etc. content you want to display as children of that masked Container.  Any content that extends beyond the rectangular mask will simply not be drawn.  Move the contents of the Container to scroll as desired."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create the application helper and add its render target to the page\nlet app = new PIXI.Application({ width: 640, height: 360 });\ndocument.body.appendChild(app.view);\n\n// Create window frame\nlet frame = new PIXI.Graphics();\nframe.beginFill(0x666666);\nframe.lineStyle({ color: 0xffffff, width: 4, alignment: 0 });\nframe.drawRect(0, 0, 208, 208);\nframe.position.set(320 - 104, 180 - 104);\napp.stage.addChild(frame);\n\n// Create a graphics object to define our mask\nlet mask = new PIXI.Graphics();\n// Add the rectangular area to show\nmask.beginFill(0xffffff);\nmask.drawRect(0,0,200,200);\nmask.endFill();\n\n// Add container that will hold our masked content\nlet maskContainer = new PIXI.Container();\n// Set the mask to use our graphics object from above\nmaskContainer.mask = mask;\n// Add the mask as a child, so that the mask is positioned relative to its parent\nmaskContainer.addChild(mask);\n// Offset by the window's frame width\nmaskContainer.position.set(4,4);\n// And add the container to the window!\nframe.addChild(maskContainer);\n\n// Create contents for the masked container\nlet text = new PIXI.Text(\n  'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\\n\\n' +\n  'You can put anything in the container and it will be masked!',\n  {\n    fontSize: 24,\n    fill: 0x1010ff,\n    wordWrap: true,\n    wordWrapWidth: 180\n  }\n);\ntext.x = 10;\nmaskContainer.addChild(text);\n\n// Add a ticker callback to scroll the text up and down\nlet elapsed = 0.0;\napp.ticker.add((delta) => {\n  // Update the text's y coordinate to scroll it\n  elapsed += delta;\n  text.y = 10 + -100.0 + Math.cos(elapsed/50.0) * 100.0;\n});\n")),(0,r.kt)("p",null,"There are two types of masks supported by PixiJS:"),(0,r.kt)("p",null,"Use a ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Graphics.pixi_graphics"},"Graphics")," object to create a mask with an arbitrary shape - powerful, but doesn't support anti-aliasing"),(0,r.kt)("p",null,"Sprite: Use the alpha channel from a ",(0,r.kt)("a",{parentName:"p",href:"/api/classes/PIXI.Sprite.pixi_sprite"},"Sprite")," as your mask, providing anti-aliased edging - ",(0,r.kt)("em",{parentName:"p"},"not")," supported on the Canvas renderer"),(0,r.kt)("h2",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Another common use for Container objects is as hosts for filtered content.  Filters are an advanced, WebGL-only feature that allows PixiJS to perform per-pixel effects like blurring and displacements.  By setting a filter on a Container, the area of the screen the Container encompasses will be processed by the filter after the Container's contents have been rendered."),(0,r.kt)("p",null,"Below are list of filters available by default in PixiJS. There is, however, a community repository with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pixijs/filters"},"many more filters"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AlphaFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-alpha")),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to setting ",(0,r.kt)("inlineCode",{parentName:"td"},"alpha")," property, but flattens the Container instead of applying to children individually.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlurFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-blur")),(0,r.kt)("td",{parentName:"tr",align:null},"Apply a blur effect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorMatrixFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-color-matrix")),(0,r.kt)("td",{parentName:"tr",align:null},"A color matrix is a flexible way to apply more complex tints or color transforms (e.g., sepia tone).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DisplacementFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-displacement")),(0,r.kt)("td",{parentName:"tr",align:null},"Displacement maps create visual offset pixels, for instance creating a wavy water effect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FXAAFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-fxaa")),(0,r.kt)("td",{parentName:"tr",align:null},"Basic FXAA (Fast Approximate Anti-Aliasing) to create smoothing effect.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NoiseFilter: ",(0,r.kt)("inlineCode",{parentName:"td"},"@pixi/filter-noise")),(0,r.kt)("td",{parentName:"tr",align:null},"Create random noise (e.g., grain effect).")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Important:")," Filters should be use somewhat sparingly. They can slow performance and increase memory if used too often in a scene.")))}d.isMDXComponent=!0}}]);