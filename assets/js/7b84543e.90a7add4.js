"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[5114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const r={},a="Interaction",s={unversionedId:"guides/components/interaction",id:"guides/components/interaction",title:"Interaction",description:"PixiJS is primarily a rendering system, but it also includes support for interactivity.  Adding support for mouse and touch events to your project is simple and consistent.",source:"@site/docs/guides/components/interaction.md",sourceDirName:"guides/components",slug:"/guides/components/interaction",permalink:"/guides/components/interaction",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/components/interaction.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Graphics",permalink:"/guides/components/graphics"},next:{title:"Sprites",permalink:"/guides/components/sprites"}},c={},l=[{value:"Enabling Interaction",id:"enabling-interaction",level:2},{value:"Interaction is Events",id:"interaction-is-events",level:2},{value:"Use Pointer Events",id:"use-pointer-events",level:2},{value:"Hit Testing",id:"hit-testing",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Caveats",id:"caveats",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interaction"},"Interaction"),(0,o.kt)("p",null,"PixiJS is primarily a rendering system, but it also includes support for interactivity.  Adding support for mouse and touch events to your project is simple and consistent."),(0,o.kt)("h2",{id:"enabling-interaction"},"Enabling Interaction"),(0,o.kt)("p",null,"Any DisplayObject-derived object (Sprite, Container, etc.) can become interactive simply by setting its ",(0,o.kt)("inlineCode",{parentName:"p"},"interactive")," property to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".  Doing so will cause the object to emit interaction events that can be responded to in order to drive your project's behavior."),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/examples/events/click"},"interaction example code"),"."),(0,o.kt)("h2",{id:"interaction-is-events"},"Interaction is Events"),(0,o.kt)("p",null,"To respond to clicks and taps, bind to the events fired on the object, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let sprite = PIXI.Sprite.from('/some/texture.png');\nsprite.on('pointerdown', (event) => { alert('clicked!'); });\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/api/classes/PIXI.DisplayObject.pixi_display"},"DisplayObject")," for the list of interaction events supported."),(0,o.kt)("h2",{id:"use-pointer-events"},"Use Pointer Events"),(0,o.kt)("p",null,"PixiJS supports three types of interaction events - mouse, touch and pointer.  Mouse events are fired by mouse movement, clicks etc.  Touch events are fired for touch-capable devices.  And pointer events are fired for ",(0,o.kt)("em",{parentName:"p"},"both"),"."),(0,o.kt)("p",null,"What this means is that, in many cases, you can write your project to use pointer events and it will just work when used with ",(0,o.kt)("em",{parentName:"p"},"either")," mouse or touch input.  Given that, the only reason to use non-pointer events is to support different modes of operation based on input type or to support multi-touch interaction.  In all other cases, prefer pointer events."),(0,o.kt)("h2",{id:"hit-testing"},"Hit Testing"),(0,o.kt)("p",null,'By default, PixiJS uses the bounding rectangle of an interactive object to determine if a mouse or touch event "hits" that object.  In many cases, that\'s fine.  But what if you have a circular button or a complex character shape, and you want to only register clicks that are within that shape?  What if you want only a small part of an object to be clickable?  '),(0,o.kt)("p",null,"The solution is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"hitArea")," property of your DisplayObject.  Setting a hitArea allows you to customize what counts as a hit on your object.  You can set the hitArea property to be a PIXI.Circle, PIXI.Rectangle, PIXI.RoundedRectangle, or PIXI.Polygon.  Using a Polygon in particular allows you to make complex outlines of player characters or other complex visual geometry."),(0,o.kt)("p",null,"Once you've set up your interaction objects, it can be useful to test what object is under a given point.  You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"InteractionManager"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"hitTest()")," method to find the interactive object at a (global) point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Find out what interactive object lies at [100, 50]\nlet globalPt = new PIXI.Point(100,50);\nlet obj = app.renderer.plugins.interaction.hitTest(globalPt);\n")),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/examples/events/custom-hitarea"},"hit testing example code"),"."),(0,o.kt)("h2",{id:"optimization"},"Optimization"),(0,o.kt)("p",null,"Hit testing requires walking the full object tree, which in complex projects can become an optimization bottleneck.  To mitigate this issue, PixiJS Container-derived objects have a property named ",(0,o.kt)("inlineCode",{parentName:"p"},"interactiveChildren"),".  If you have Containers or other objects with complex child trees that you know will never be interactive, you can set this property to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," and the hit testing algorithm will skip those children when checking for hover and click events.  As an example, if you were building a side-scrolling game, you would probably want to set ",(0,o.kt)("inlineCode",{parentName:"p"},"background.interactiveChildren = false")," for your background layer with rocks, clouds, flowers, etc.  Doing so would speed up hit testing substantially due to the number of unclickable child objects the background layer would contain."),(0,o.kt)("h2",{id:"caveats"},"Caveats"),(0,o.kt)("p",null,"PixiJS's interaction system has been designed to look similar to the interaction events supported by the DOM in web development, but there are some important differences that can trip up users new to PixiJS."),(0,o.kt)("p",null,"First, events in PixiJS do not \"bubble\", meaning you cannot set an event trigger on a parent object and have it fire when a child object is clicked.  If you want to support bubbling, you'll need to explicitly re-trigger the parent object's event in your child object's event handling code."),(0,o.kt)("p",null,"Second, there is no event capture support - you can't have a single object capture all interaction events while dragging, for example."))}u.isMDXComponent=!0}}]);