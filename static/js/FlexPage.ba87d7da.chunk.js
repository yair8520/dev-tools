"use strict";(self.webpackChunkdev_tools=self.webpackChunkdev_tools||[]).push([[683],{3826:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var i=n(1413),s=n(29439),l=n(28381),r="FlexDemo_container__saIXF",a="FlexDemo_selected__0t95s",o=n(29343),c=function(e){var t=e.items,n=e.setSelectedIndex,i=e.selectedIndex,s=(0,l.useCallback)((function(e){n(e)}),[n]);return(0,o.jsx)(o.Fragment,{children:t.map((function(e,t){return(0,o.jsx)("div",{style:e,onClick:function(){return s(t)},className:"".concat(r," ").concat(t===i?a:""),children:(0,o.jsx)("p",{children:t+1})},"".concat(e).concat(t))}))})},d="FlexOptions_container__ZxvRW",h="FlexOptions_flexContainer__e8MW7",x="FlexOptions_flexChildrens__4gFm9",u=n(4942),f="FlexContainer_header__jigMn",p=n(37924),m=n(72132),v=n(78509),j=n(96149),_=n(7023),C="DropDown_header__9xLfT",Z=n(67333),g=(0,Z.Z)(l.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline"),y=n(50570),S={flexDirection:"The 'flex-direction' property specifies the direction of the main axis of a flex container.",flexWrap:"The 'flex-wrap' property specifies whether the flex items should wrap or not.",justifyContent:"The 'justify-content' property aligns flex items along the main axis of a flex container.",alignItems:"The 'align-items' property aligns flex items along the cross axis of a flex container.",alignContent:"The 'align-content' property aligns a flex container's lines within the flex container when there is extra space on the cross axis.",alignSelf:"The 'align-self' property allows an individual flex item to be aligned along the cross axis instead of according to the container's 'align-items' value.",flexBasis:"The 'flex-basis' property specifies the initial size of a flex item before any available space is distributed according to the 'flex-grow' and 'flex-shrink' values.",order:"The 'order' property specifies the order in which a flex item appears within its container.",flexGrow:"The 'flex-grow' property specifies how much a flex item will grow relative to the rest of the flex items in the container.",flexShrink:"The 'flex-shrink' property specifies how much a flex item will shrink relative to the rest of the flex items in the container."},k=function(e){var t,n=e.value,i=e.handleChange,s=e.options,l=e.title;return(0,o.jsxs)(m.Z,{fullWidth:!0,children:[(0,o.jsxs)("div",{className:C,children:[(0,o.jsx)(_.x,{bold:!0,children:l}),(0,o.jsx)(y.d,{title:null!==(t=S[l])&&void 0!==t?t:"",children:(0,o.jsx)(g,{})})]}),(0,o.jsx)(v.Z,{value:n,onChange:function(e){i(e.target.value)},children:s.map((function(e){return(0,o.jsx)(j.Z,{value:e,children:e},e)}))})]})},w=(0,Z.Z)(l.createElement("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutline"),b={flexDirection:"column",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",alignContent:"center"},N={alignSelf:"auto",flexBasis:"auto",flexGrow:0,flexShrink:0,order:0},F=[(0,i.Z)({},N),(0,i.Z)({},N),(0,i.Z)({},N),(0,i.Z)({},N)],I=n(53071),z=function(e){var t=e.setContainerStyle,n=e.containerStyle,s=(0,l.useCallback)((function(e,n){t((function(t){return(0,i.Z)((0,i.Z)({},t),{},(0,u.Z)({},e,n))}))}),[t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsx)(_.x,{variant:"h5",children:" Container options"}),(0,o.jsx)(I.E,{title:"Reset All",onClick:function(){return t((function(e){return(0,i.Z)({},b)}))},children:(0,o.jsx)(w,{})})]}),p.VV.map((function(e,t){var i;return(0,o.jsx)(k,{handleChange:function(t){return s(e.type,t)},value:null!==(i=null===n||void 0===n?void 0:n[e.type])&&void 0!==i?i:0,options:e.options,title:e.type},e.type)}))]})},T=n(93433),L="FlexChildrens_input__qihfY",D="FlexChildrens_header__5-NZ3",M="FlexChildrens_item__Flgbt",A=n(93242),B=(0,Z.Z)(l.createElement("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline"),E=function(e){var t=e.child,n=e.setItems,s=e.selectedIndex,r=(0,l.useCallback)((function(e,t){n((function(n){var l=(0,T.Z)(n);return l[s]=(0,i.Z)((0,i.Z)({},l[s]),{},(0,u.Z)({},e,t)),l}))}),[n,s]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:D,children:[(0,o.jsxs)(_.x,{variant:"h5",children:[" ","Childrens options "," "]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(I.E,{title:"Reset All",onClick:function(){n((function(){return(0,T.Z)(F)}))},children:(0,o.jsx)(w,{})}),(0,o.jsx)(I.E,{title:"Add One",onClick:function(){n((function(e){return[].concat((0,T.Z)(e),[(0,i.Z)({},N)])}))},children:(0,o.jsx)(B,{})})]})]}),(0,o.jsx)(_.x,{bold:!0,variant:"h6",children:"Selected Item { ".concat(s+1," }")}),t&&p.f9.map((function(e){return e.range?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)(_.x,{bold:!0,children:e.type}),(0,o.jsx)(y.d,{title:S[e.type],children:(0,o.jsx)(g,{})})]}),(0,o.jsx)(A.B,{onChange:function(t){return r(e.type,t)},value:t[e.type],className:L,multiline:!1,type:"number",inputProps:{min:-10,max:10,step:1}})]},"".concat(e.type,"-input ")):(0,o.jsx)(k,{handleChange:function(t){return r(e.type,t)},options:e.options,title:e.type,value:t[e.type]},"".concat(e.type,"-drop"))}))]})},O="SplitButton_container__T1L-e",V="SplitButton_button__MM6ah",W="SplitButton_selected__LTRmY",H=function(e){var t=e.side,n=e.setSide;return(0,o.jsxs)("div",{className:O,children:[(0,o.jsx)("button",{className:"".concat(V," ").concat(t?W:""),disabled:t,onClick:function(){return n(!0)},children:"Container"}),(0,o.jsx)("button",{className:"".concat(V," ").concat(t?"":W),disabled:!t,onClick:function(){return n(!1)},children:"Children"})]})},R=function(e){var t=e.containerStyle,n=e.setContainerStyle,i=e.setItems,r=e.selectedIndex,a=e.items,c=(0,l.useState)(!0),u=(0,s.Z)(c,2),f=u[0],p=u[1];return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)(H,{side:f,setSide:p}),f?(0,o.jsx)("div",{className:h,children:(0,o.jsx)(z,{setContainerStyle:n,containerStyle:t})}):(0,o.jsx)("div",{className:x,children:(0,o.jsx)(E,{setItems:i,child:a[r],selectedIndex:r})})]})},P="FlexPage_container__6xkTW",G="FlexPage_options__aB2kU",Y="FlexPage_demo__JVk0f",q=n(40666),J={container:"Axis_container__rwzFj",text:"Axis_text__2Qhk-"},Q=n(409),U=n(97948),X=n(10645),K=n(1431),$={row:U.Z,"row-reverse":K.Z,column:Q.Z,"column-reverse":X.Z},ee=function(e){var t=e.dir,n=$[t];return(0,o.jsxs)("div",{className:J.container,children:[(0,o.jsx)("div",{className:J.rightLine}),(0,o.jsx)(_.x,{className:J.text,children:"Main Axis"}),n&&(0,o.jsx)(n,{})]})},te=function(){var e=(0,l.useContext)(q.I).isDark,t=(0,l.useState)(F),n=(0,s.Z)(t,2),r=n[0],a=n[1],d=(0,l.useState)(0),h=(0,s.Z)(d,2),x=h[0],u=h[1],f=(0,l.useState)(b),p=(0,s.Z)(f,2),m=p[0],v=p[1];return(0,o.jsxs)("div",{className:P,children:[(0,o.jsx)("div",{className:G,children:(0,o.jsx)(R,{items:r,setItems:a,selectedIndex:x,containerStyle:m,setContainerStyle:v})}),(0,o.jsxs)("div",{style:(0,i.Z)((0,i.Z)({},m),{},{backgroundColor:e?"#333":"#f3f4f6"}),className:Y,children:[(0,o.jsx)(ee,{dir:m.flexDirection}),(0,o.jsx)(c,{items:r,selectedIndex:x,setSelectedIndex:u})]})]})}},97948:function(e,t,n){var i=n(64836);t.Z=void 0;var s=i(n(81608)),l=n(29343),r=(0,s.default)((0,l.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"}),"East");t.Z=r},10645:function(e,t,n){var i=n(64836);t.Z=void 0;var s=i(n(81608)),l=n(29343),r=(0,s.default)((0,l.jsx)("path",{d:"m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"}),"North");t.Z=r},409:function(e,t,n){var i=n(64836);t.Z=void 0;var s=i(n(81608)),l=n(29343),r=(0,s.default)((0,l.jsx)("path",{d:"m19 15-1.41-1.41L13 18.17V2h-2v16.17l-4.59-4.59L5 15l7 7 7-7z"}),"South");t.Z=r},1431:function(e,t,n){var i=n(64836);t.Z=void 0;var s=i(n(81608)),l=n(29343),r=(0,s.default)((0,l.jsx)("path",{d:"m9 19 1.41-1.41L5.83 13H22v-2H5.83l4.59-4.59L9 5l-7 7 7 7z"}),"West");t.Z=r}}]);
//# sourceMappingURL=FlexPage.ba87d7da.chunk.js.map