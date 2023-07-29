"use strict";(self.webpackChunkdev_tools=self.webpackChunkdev_tools||[]).push([[683],{37924:function(e,t,n){n.d(t,{f9:function(){return a},VV:function(){return i},kk:function(){return r},xB:function(){return o}});var i=[{options:["row","column","row-reverse","column-reverse"],type:"flexDirection"},{options:["flex-start","flex-end","center","space-between","space-around"],type:"justifyContent"},{options:["flex-start","flex-end","center","baseline","stretch"],type:"alignItems"},{options:["flex-start","flex-end","center","space-between","space-around","stretch"],type:"alignContent"},{options:["nowrap","wrap","wrap-reverse"],type:"flexWrap"}],a=[{type:"order",range:!0},{type:"flexGrow",range:!0},{type:"flexShrink",range:!0},{type:"flexBasis",options:["auto","content","fit-content","max-content","min-content","none","initial","inherit"]},{type:"alignSelf",options:["flex-start","flex-end","center","space-between","space-around","stretch","auto"]}],r={store:{book:[{category:"reference",author:"Nigel Rees",title:"Sayings of the Century",price:8.95},{category:"fiction",author:"Evelyn Waugh",title:"Sword of Honour",price:12.99},{category:"fiction",author:"J. R. R. Tolkien",title:"The Lord of the Rings",isbn:"0-395-19395-8",price:22.99}],bicycle:{color:"red",price:19.95}}},o=["GET","POST","PUT","DELETE"]},93074:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var i=n(1413),a=n(29439),r=n(28381),o="FlexDemo_container__saIXF",s="FlexDemo_selected__0t95s",c=n(29343),l=function(e){var t=e.items,n=e.setSelectedIndex,i=e.selectedIndex,a=(0,r.useCallback)((function(e){n(e)}),[n]);return(0,c.jsx)(c.Fragment,{children:t.map((function(e,t){return(0,c.jsx)("div",{style:e,onClick:function(){return a(t)},className:"".concat(o," ").concat(t===i?s:""),children:(0,c.jsx)("p",{children:t+1})},"".concat(e).concat(t))}))})},d="FlexOptions_container__ZxvRW",u="FlexOptions_flexContainer__e8MW7",p="FlexOptions_flexChildrens__4gFm9",f=n(4942),h="FlexContainer_header__jigMn",x=n(37924),m=n(72132),v=n(78509),g=n(96149),y=n(7023),Z="DropDown_header__9xLfT",b=n(57089),j=n(50570),C={flexDirection:"The 'flex-direction' property specifies the direction of the main axis of a flex container.",flexWrap:"The 'flex-wrap' property specifies whether the flex items should wrap or not.",justifyContent:"The 'justify-content' property aligns flex items along the main axis of a flex container.",alignItems:"The 'align-items' property aligns flex items along the cross axis of a flex container.",alignContent:"The 'align-content' property aligns a flex container's lines within the flex container when there is extra space on the cross axis.",alignSelf:"The 'align-self' property allows an individual flex item to be aligned along the cross axis instead of according to the container's 'align-items' value.",flexBasis:"The 'flex-basis' property specifies the initial size of a flex item before any available space is distributed according to the 'flex-grow' and 'flex-shrink' values.",order:"The 'order' property specifies the order in which a flex item appears within its container.",flexGrow:"The 'flex-grow' property specifies how much a flex item will grow relative to the rest of the flex items in the container.",flexShrink:"The 'flex-shrink' property specifies how much a flex item will shrink relative to the rest of the flex items in the container."},_=function(e){var t,n=e.value,i=e.handleChange,a=e.options,r=e.title;return(0,c.jsxs)(m.Z,{fullWidth:!0,children:[(0,c.jsxs)("div",{className:Z,children:[(0,c.jsx)(y.x,{bold:!0,children:r}),(0,c.jsx)(j.d,{title:null!==(t=C[r])&&void 0!==t?t:"",children:(0,c.jsx)(b.Z,{})})]}),(0,c.jsx)(v.Z,{value:n,onChange:function(e){i(e.target.value)},children:a.map((function(e){return(0,c.jsx)(g.Z,{value:e,children:e},e)}))})]})},w=n(67333),S=(0,w.Z)(r.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutline"),k={flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",alignContent:"center"},I={alignSelf:"auto",flexBasis:"auto",flexGrow:0,flexShrink:0,order:0},F=[(0,i.Z)({},I),(0,i.Z)({},I),(0,i.Z)({},I),(0,i.Z)({},I)],N=n(53071),T=function(e){var t=e.setContainerStyle,n=e.containerStyle,a=(0,r.useCallback)((function(e,n){t((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,f.Z)({},e,n))}))}),[t]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:h,children:[(0,c.jsx)(y.x,{variant:"h5",children:" Container options"}),(0,c.jsx)(N.E,{title:"Reset All",onClick:function(){return t((function(e){return(0,i.Z)({},k)}))},children:(0,c.jsx)(S,{})})]}),x.VV.map((function(e,t){var i;return(0,c.jsx)(_,{handleChange:function(t){return a(e.type,t)},value:null!==(i=null===n||void 0===n?void 0:n[e.type])&&void 0!==i?i:0,options:e.options,title:e.type},e.type)}))]})},L=n(93433),M="FlexChildrens_input__qihfY",O="FlexChildrens_header__5-NZ3",z="FlexChildrens_item__Flgbt",V=n(93242),R=(0,w.Z)(r.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline"),B=function(e){var t=e.child,n=e.setItems,a=e.selectedIndex,o=(0,r.useCallback)((function(e,t){n((function(n){var r=(0,L.Z)(n);return r[a]=(0,i.Z)((0,i.Z)({},r[a]),{},(0,f.Z)({},e,t)),r}))}),[n,a]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:O,children:[(0,c.jsxs)(y.x,{variant:"h5",children:[" ","Childrens options "," "]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(N.E,{title:"Reset All",onClick:function(){n((function(){return(0,L.Z)(F)}))},children:(0,c.jsx)(S,{})}),(0,c.jsx)(N.E,{title:"Add One",onClick:function(){n((function(e){return[].concat((0,L.Z)(e),[(0,i.Z)({},I)])}))},children:(0,c.jsx)(R,{})})]})]}),(0,c.jsx)(y.x,{bold:!0,variant:"h6",children:"Selected Item { ".concat(a+1," }")}),t&&x.f9.map((function(e){return e.range?(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{className:z,children:[(0,c.jsx)(y.x,{bold:!0,children:e.type}),(0,c.jsx)(j.d,{title:C[e.type],children:(0,c.jsx)(b.Z,{})})]}),(0,c.jsx)(V.B,{onChange:function(t){return o(e.type,t)},value:t[e.type],className:M,multiline:!1,type:"number",inputProps:{min:-10,max:10,step:1}})]},"".concat(e.type,"-input ")):(0,c.jsx)(_,{handleChange:function(t){return o(e.type,t)},options:e.options,title:e.type,value:t[e.type]},"".concat(e.type,"-drop"))}))]})},D="SplitButton_container__T1L-e",E="SplitButton_button__MM6ah",G="SplitButton_selected__LTRmY",W=function(e){var t=e.side,n=e.setSide;return(0,c.jsxs)("div",{className:D,children:[(0,c.jsx)("button",{className:"".concat(E," ").concat(t?G:""),disabled:t,onClick:function(){return n(!0)},children:"Container"}),(0,c.jsx)("button",{className:"".concat(E," ").concat(t?"":G),disabled:!t,onClick:function(){return n(!1)},children:"Children"})]})},H=function(e){var t=e.containerStyle,n=e.setContainerStyle,i=e.setItems,o=e.selectedIndex,s=e.items,l=(0,r.useState)(!0),f=(0,a.Z)(l,2),h=f[0],x=f[1];return(0,c.jsxs)("div",{className:d,children:[(0,c.jsx)(W,{side:h,setSide:x}),h?(0,c.jsx)("div",{className:u,children:(0,c.jsx)(T,{setContainerStyle:n,containerStyle:t})}):(0,c.jsx)("div",{className:p,children:(0,c.jsx)(B,{setItems:i,child:s[o],selectedIndex:o})})]})},A="FlexPage_container__6xkTW",P="FlexPage_options__aB2kU",q="FlexPage_demo__JVk0f",J=n(40666),U={container:"Axis_container__rwzFj",text:"Axis_text__2Qhk-"},Y=n(409),Q=n(97948),X=n(10645),K=n(1431),$={row:Q.Z,"row-reverse":K.Z,column:Y.Z,"column-reverse":X.Z},ee=function(e){var t=e.dir,n=$[t];return(0,c.jsxs)("div",{className:U.container,children:[(0,c.jsx)("div",{className:U.rightLine}),(0,c.jsx)(y.x,{className:U.text,children:"Main Axis"}),n&&(0,c.jsx)(n,{})]})},te=function(){var e=(0,r.useContext)(J.I).isDark,t=(0,r.useState)(F),n=(0,a.Z)(t,2),o=n[0],s=n[1],d=(0,r.useState)(0),u=(0,a.Z)(d,2),p=u[0],f=u[1],h=(0,r.useState)(k),x=(0,a.Z)(h,2),m=x[0],v=x[1];return(0,c.jsxs)("div",{className:A,children:[(0,c.jsx)("div",{className:P,children:(0,c.jsx)(H,{items:o,setItems:s,selectedIndex:p,containerStyle:m,setContainerStyle:v})}),(0,c.jsxs)("div",{style:(0,i.Z)((0,i.Z)({},m),{},{backgroundColor:e?"#333":"#f3f4f6"}),className:q,children:[(0,c.jsx)(ee,{dir:m.flexDirection}),(0,c.jsx)(l,{items:o,selectedIndex:p,setSelectedIndex:f})]})]})}},57089:function(e,t,n){var i=n(28381),a=n(67333);t.Z=(0,a.Z)(i.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline")},97948:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(81608)),r=n(29343),o=(0,a.default)((0,r.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East");t.Z=o},10645:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(81608)),r=n(29343),o=(0,a.default)((0,r.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"}),"North");t.Z=o},409:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(81608)),r=n(29343),o=(0,a.default)((0,r.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"}),"South");t.Z=o},1431:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(81608)),r=n(29343),o=(0,a.default)((0,r.jsx)("path",{d:"m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"}),"West");t.Z=o},70877:function(e,t,n){n.d(t,{f:function(){return r}});var i=n(1069),a=n(71910);function r(e){return(0,a.Z)("MuiListItemIcon",e)}var o=(0,i.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=o},76320:function(e,t,n){n.d(t,{L:function(){return r}});var i=n(1069),a=n(71910);function r(e){return(0,a.Z)("MuiListItemText",e)}var o=(0,i.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=o},96149:function(e,t,n){n.d(t,{Z:function(){return S}});var i=n(4942),a=n(63366),r=n(87462),o=n(28381),s=n(85863),c=n(7095),l=n(23566),d=n(68132),u=n(8041),p=n(12463),f=n(27917),h=n(20496),x=n(41825),m=n(1069);var v=(0,m.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),g=n(70877),y=n(76320),Z=n(71910);function b(e){return(0,Z.Z)("MuiMenuItem",e)}var j=(0,m.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=n(29343),_=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],w=(0,d.ZP)(f.Z,{shouldForwardProp:function(e){return(0,d.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,r.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,i.Z)(t,"&.".concat(j.selected),(0,i.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(j.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,i.Z)(t,"&.".concat(j.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,i.Z)(t,"&.".concat(j.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,i.Z)(t,"&.".concat(j.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,i.Z)(t,"& + .".concat(v.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,i.Z)(t,"& + .".concat(v.inset),{marginLeft:52}),(0,i.Z)(t,"& .".concat(y.Z.root),{marginTop:0,marginBottom:0}),(0,i.Z)(t,"& .".concat(y.Z.inset),{paddingLeft:36}),(0,i.Z)(t,"& .".concat(g.Z.root),{minWidth:36}),t),!a.dense&&(0,i.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,i.Z)({},"& .".concat(g.Z.root," svg"),{fontSize:"1.25rem"})))})),S=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),i=n.autoFocus,l=void 0!==i&&i,d=n.component,f=void 0===d?"li":d,m=n.dense,v=void 0!==m&&m,g=n.divider,y=void 0!==g&&g,Z=n.disableGutters,j=void 0!==Z&&Z,S=n.focusVisibleClassName,k=n.role,I=void 0===k?"menuitem":k,F=n.tabIndex,N=n.className,T=(0,a.Z)(n,_),L=o.useContext(p.Z),M=o.useMemo((function(){return{dense:v||L.dense||!1,disableGutters:j}}),[L.dense,v,j]),O=o.useRef(null);(0,h.Z)((function(){l&&O.current&&O.current.focus()}),[l]);var z,V=(0,r.Z)({},n,{dense:M.dense,divider:y,disableGutters:j}),R=function(e){var t=e.disabled,n=e.dense,i=e.divider,a=e.disableGutters,o=e.selected,s=e.classes,l={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",i&&"divider",o&&"selected"]},d=(0,c.Z)(l,b,s);return(0,r.Z)({},s,d)}(n),B=(0,x.Z)(O,t);return n.disabled||(z=void 0!==F?F:-1),(0,C.jsx)(p.Z.Provider,{value:M,children:(0,C.jsx)(w,(0,r.Z)({ref:B,role:I,tabIndex:z,component:f,focusVisibleClassName:(0,s.Z)(R.focusVisible,S),className:(0,s.Z)(R.root,N)},T,{ownerState:V,classes:R}))})}))}}]);
//# sourceMappingURL=FlexPage.da6a5f98.chunk.js.map