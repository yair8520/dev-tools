"use strict";(self.webpackChunkdev_tools=self.webpackChunkdev_tools||[]).push([[31],{14777:function(e,t,n){n.d(t,{s:function(){return l}});n(28381);var r="ConfirmModal_container__gM2W5",o="ConfirmModal_buttons__gvsF7",i=n(7023),a=n(73360),c=n(29343),l=function(e){var t=e.title,n=e.handleModal,l=e.onNext,s=function(e){null===e||void 0===e||e(),n()};return(0,c.jsxs)("div",{className:r,children:[(0,c.jsxs)(i.x,{variant:"h6",children:[" ",t]}),(0,c.jsxs)("div",{className:o,children:[(0,c.jsx)(a.Z,{onClick:function(){return s()},children:"Cancel"}),(0,c.jsx)(a.Z,{onClick:function(){return s(l)},children:"Yes!"})]})]})}},37924:function(e,t,n){n.d(t,{f9:function(){return o},VV:function(){return r},kk:function(){return i},xB:function(){return a}});var r=[{options:["row","column","row-reverse","column-reverse"],type:"flexDirection"},{options:["flex-start","flex-end","center","space-between","space-around"],type:"justifyContent"},{options:["flex-start","flex-end","center","baseline","stretch"],type:"alignItems"},{options:["flex-start","flex-end","center","space-between","space-around","stretch"],type:"alignContent"},{options:["nowrap","wrap","wrap-reverse"],type:"flexWrap"}],o=[{type:"order",range:!0},{type:"flexGrow",range:!0},{type:"flexShrink",range:!0},{type:"flexBasis",options:["auto","content","fit-content","max-content","min-content","none","initial","inherit"]},{type:"alignSelf",options:["flex-start","flex-end","center","space-between","space-around","stretch","auto"]}],i={store:{book:[{category:"reference",author:"Nigel Rees",title:"Sayings of the Century",price:8.95},{category:"fiction",author:"Evelyn Waugh",title:"Sword of Honour",price:12.99},{category:"fiction",author:"J. R. R. Tolkien",title:"The Lord of the Rings",isbn:"0-395-19395-8",price:22.99}],bicycle:{color:"red",price:19.95}}},a=["GET","POST","PUT","DELETE"]},54996:function(e,t,n){n.d(t,{a9:function(){return r},pl:function(){return i},r0:function(){return o}});var r=function(e){navigator.clipboard.readText().then((function(){e(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}))},o=function(e){navigator.clipboard.writeText(e).then((function(){console.log("Text copied to clipboard")})).catch((function(e){console.error("Error copying text to clipboard:",e)}))},i=function(e,t){var n,r=null===(n=e.target.files)||void 0===n?void 0:n[0];if("application/json"===r.type||"text/plain"===r.type){var o=new FileReader;o.onload=function(e){var n,r=null===(n=e.target)||void 0===n?void 0:n.result;t(r)},o.readAsText(r)}else alert("Invalid file type. Only JSON and TXT files are supported.")}},83579:function(e,t,n){n.d(t,{EK:function(){return v},jN:function(){return p},M8:function(){return m},_D:function(){return f},a2:function(){return x}});var r=n(1413),o=n(34108),i=n(4942),a=n(29439),c=n(15861),l=(n(31319),n(16811)),s=n(62257),u=n(45011),d={addTab:"Tab added successfully",removeTab:"Tab removed successfully",deleteCollection:"Collection deleted successfully"},f=function(e){return e.res.response=null,e.res.error=null,e.res.errorMessage=null,e.res.size=null,e.res.time=null,e},h=function(e,t){s.I8.currentUser?t(s.db.collection("users").doc(s.I8.currentUser.email)).then((function(){return u.Am.success(d[e])})).catch((function(){return u.Am.error("Operation failed")})):u.Am.error("Please logged in order to save your work.")},v=function(e){h("deleteCollection",function(){var t=(0,c.Z)((0,o.Z)().mark((function t(n){var r,c,s,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.get();case 2:if(!(r=t.sent).exists){t.next=8;break}return s=(null===(c=r.data())||void 0===c?void 0:c.api)||{},u=[],Object.entries(s).forEach((function(t){var r=(0,a.Z)(t,2),o=r[0];r[1].collection===e&&u.push(n.update((0,i.Z)({},"api.".concat(o),l.Z.firestore.FieldValue.delete())))})),t.abrupt("return",Promise.all(u));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},x=function(e,t){h("addTab",(function(n){var o=(0,i.Z)({},"api",(0,i.Z)({},"".concat(e),(0,r.Z)({},f(t))));return n.set(o,{merge:!0})}))},p=function(e){h("removeTab",(function(t){var n=(0,i.Z)({},"api.".concat(e),l.Z.firestore.FieldValue.delete());return t.update(n)}))},m=function(e){return new Promise((function(t,n){var r=s.db.collection("users").doc(e);r.get().then((function(e){var n,o;e.exists?t(null!==(n=null===(o=e.data())||void 0===o?void 0:o.api)&&void 0!==n?n:{}):r.set({sections:{}}).then((function(){return t({})}))})).catch(n)}))}},52903:function(e,t,n){n.d(t,{$9:function(){return a},Ap:function(){return c},Y5:function(){return u},ZO:function(){return i},rZ:function(){return l},ts:function(){return s}});var r=n(29439),o=n(83579);function i(e){if(!e||"string"!==typeof e)return"Invalid JSON";for(var t="",n=0,r=!1,o=0;o<e.length;o++){var i=e[o];if(r)t+=i,'"'===i&&"\\"!==e[o-1]&&(r=!1);else switch(i){case"{":case"[":t+=i+"\n"+" ".repeat(2*(n+1)),n++;break;case"}":case"]":n=Math.max(0,n-1),t+="\n"+" ".repeat(2*n)+i;break;case":":t+=i+" ";break;case",":t+=i+"\n"+" ".repeat(2*n);break;case'"':t+=i,r=!0;break;default:t+=i}}return t}var a=function(e){return e.map((function(e,t){return e.title}))},c=function(e){return Object.fromEntries(Object.entries(e).filter((function(e){var t=(0,r.Z)(e,2),n=(t[0],t[1]);return""!==n.value&&(void 0===n.checked||n.checked)})).map((function(e){var t=(0,r.Z)(e,2),n=(t[0],t[1]);return[n.key,n.value]})))};function l(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&e[n].checked&&t++;return t}function s(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].collection===t)return e[n].id}var u=function(e,t){var n=JSON.parse(JSON.stringify(e)),r=JSON.parse(JSON.stringify(t));return JSON.stringify((0,o._D)(n))!==JSON.stringify((0,o._D)(r))}},77374:function(e,t,n){n.d(t,{d:function(){return o},h:function(){return r}});var r=function(){var e=Date.now(),t=new Date(e),n=t.toLocaleDateString("he-IL",{day:"2-digit",month:"2-digit",year:"2-digit"}),r=t.toLocaleTimeString("he-IL",{hour:"2-digit",minute:"2-digit"});return"".concat(r," ").concat(n," ")},o=function(){return Date.now()}},79516:function(e,t,n){n.d(t,{p:function(){return o},q:function(){return i}});var r=n(29439),o=function(e){try{return new URL(e),!0}catch(t){return!1}};function i(e,t){var n=e.split("?"),o=(0,r.Z)(n,1)[0],i=Object.keys(t).filter((function(e){return""!==e&&""!==t[e].key&&t[e].checked})).map((function(e){return"".concat(encodeURIComponent(t[e].key),"=").concat(encodeURIComponent(t[e].value))})).join("&");return i?"".concat(o,"?").concat(i):o}},60093:function(e,t,n){n.r(t),n.d(t,{default:function(){return st}});var r=n(28381),o=n(1955),i=n(88927),a=n(5086),c=n(50133),l=n(29439),s=n(45987),u="TabItem_container__gvT1Y",d="TabItem_sectionDetailed__Wc9l+",f=n(10412),h={container:"ReqContainer_container__geW+z",inputContainer:"ReqContainer_inputContainer__5+HY3",paramsContainer:"ReqContainer_paramsContainer__QHKLQ",input:"ReqContainer_input__S36V5",GET:"ReqContainer_GET__u236v",POST:"ReqContainer_POST__ifDN0",DELETE:"ReqContainer_DELETE__UhKgi",PUT:"ReqContainer_PUT__kOYt0",proxyInput:"ReqContainer_proxyInput__Ltzjg"},v=n(93242),x=n(78509),p=n(96149),m=n(48842),b=n(37924),_="ParamsList_container__xJIYZ",y="ParamsList_input__WWq7F",j=n(53071),C=n(12217),Z=n(71060),g=n(4942),T=n(1413),k=function(e,t){return{id:e,collection:t,title:"New Tab",value:e,url:"https://jsonplaceholder.typicode.com/todos/",method:"GET",data:{queryParams:{0:{key:"",value:"",checked:!1}},headers:{0:{key:"Content-Type",value:"application/json",checked:!0},1:{key:"Accept",value:"*/*",checked:!0},2:{key:"Cache-Control",value:"no-cache",checked:!0}},body:""},res:{time:null,size:null,response:null,error:null,errorMessage:null}}},I=n(68836),N=n(10222),w={ERR_NETWORK:"A network error occurred.",ERR_NAME_NOT_RESOLVED:"The requested hostname could not be resolved. Please verify the server address.",ERR_ABORTED:"The request was aborted.",ERR_CONNECTION_TIMED_OUT:"The connection timed out.",ERR_CONNECTION_REFUSED:"The connection was refused.",ERR_INVALID_URL:"The URL is invalid.",ERR_SSL_PROTOCOL_ERROR:"An SSL/TLS protocol error occurred.",ENOTFOUND:"The requested resource was not found."},E={1:"Informational Response",200:"OK - The request has succeeded.",201:"Created - The request has been fulfilled and a new resource has been created.",204:"No Content - The server has successfully fulfilled the request, but there is no content to send back.",400:"Bad Request - The server could not understand the request due to invalid syntax or other client-side errors.",401:"Unauthorized - The client must authenticate itself to get the requested response.",403:"Forbidden - The server understood the request, but refuses to authorize it.",404:"Not Found - The server could not find the requested resource.",405:"Method Not Allowed - The method specified in the request is not allowed for the resource.",500:"Internal Server Error - The server encountered an Error",501:"Not Implemented - The server does not support the functionality required to fulfill the request.",502:"Bad Gateway - The server, while acting as a gateway or proxy, received an invalid response from an upstream server.",503:"Service Unavailable - The server is currently unable to handle the request due to temporary overloading or maintenance.",504:"Gateway Timeout - The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server.",301:"Moved Permanently - The requested resource has been assigned a new permanent URI and any future references to this resource should use the given URI.",302:"Found - The requested resource temporarily resides under a different URI.",303:"See Other - The response to the request can be found under a different URI and should be retrieved using a GET method on that resource."},S=n(52903),R=n(79516),P=n(37038),M={useProxy:!1,tabs:{},selectedCollection:{collection:"",id:""},collections:[],loading:!1,tabIndex:"",setUseProxy:function(){},setCollections:function(){},editCollection:function(){},createCollection:function(){},removeCollection:function(){},setSelectedCollection:function(){},setTabs:function(){},editTabTitle:function(){},addTab:function(){},removeTab:function(){},addData:function(){},toggleQuary:function(){},addSubTab:function(){},sendReq:function(){},removeSubTab:function(){},updateBody:function(){},addTabData:function(){},setTabIndex:function(){}},O=n(83579),q=n(29343),A=r.createContext(M),D=function(e){var t=e.children,n=r.useState(""),o=(0,l.Z)(n,2),i=o[0],a=o[1],c=r.useState(!1),s=(0,l.Z)(c,2),u=s[0],d=s[1],f=(0,r.useState)({}),h=(0,l.Z)(f,2),v=h[0],x=h[1],p=(0,r.useState)([]),m=(0,l.Z)(p,2),b=m[0],_=m[1],y=(0,r.useContext)(P.S).user;(0,r.useEffect)((function(){null!==y&&void 0!==y&&y.email?(0,O.M8)(y.email).then((function(e){x(e);var t=e[Object.keys(e)[0]];E({collection:t.collection,id:t.id})})).catch((function(e){return console.log({s:e})})):x({})}),[y]);var j=(0,r.useState)({collection:"collection1",id:"-1"}),C=(0,l.Z)(j,2),Z=C[0],E=C[1];(0,r.useEffect)((function(){a(Z.id)}),[Z]),(0,r.useEffect)((function(){var e=[],t=function(){var t=v[n];e.find((function(e){return e.collection===t.collection}))||e.push({collection:t.collection,id:t.id})};for(var n in v)t();_(e)}),[v]);var M=function(){var e=(0,r.useState)(!1),t=(0,l.Z)(e,2),n=t[0],o=t[1],i=function(e){var t=Math.floor(e/1e3),n=Math.floor(e%1e3);return"".concat(t,".").concat(n,"ms")},a=function(e){var t=new TextEncoder,n=JSON.stringify(e),r=t.encode(n);return parseFloat((r.length/1024).toFixed(4))};return{loading:n,fetchData:function(e){var t=performance.now();return o(!0),N.Z.defaults.headers.common["Access-Control-Request-Headers"]=null,N.Z.defaults.headers.common["Access-Control-Request-Method"]=null,new Promise((function(n,r){N.Z.request((0,T.Z)((0,T.Z)({},e),{},{withCredentials:!1})).then((function(e){n({response:e,size:a(e.data),time:i(performance.now()-t)})})).catch((function(e){var n=w[e.code]||e.message||"An error occurred";r((0,T.Z)((0,T.Z)({},e),{},{size:a(e.response),time:i(performance.now()-t),errorMessage:n}))})).finally((function(){o(!1)}))}))}}}(),D=M.fetchData,L=M.loading;return(0,q.jsx)(A.Provider,{value:{useProxy:u,setUseProxy:d,setTabIndex:a,tabIndex:i,editCollection:function(e,t){E({collection:e,id:v[Object.keys(v)[0]].id}),x((function(n){var r=(0,T.Z)({},n);for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i.collection===t&&(r[o]=(0,T.Z)((0,T.Z)({},i),{},{collection:e}))}return r}))},editTabTitle:function(e){var t=e.id,n=e.newTitle;x((function(e){var r=(0,T.Z)({},e);return r[t].title=n,r}))},createCollection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Example",t=(0,I.Z)(),n=k(t,e);x((function(e){var t=(0,T.Z)({},e);return t[n.id]=n,t})),E({collection:e,id:t})},selectedCollection:Z,tabs:v,setTabs:x,addTab:function(e){a(e);var t=k(e,Z.collection);x((function(e){var n=(0,T.Z)({},e);return n[t.id]=t,n}))},removeTab:function(e){var t=e.id;(0,O.jN)(t),x((function(e){var n=(0,T.Z)({},e);delete n[t];var r=(0,S.ts)(n,Z.collection);return a(r),n}))},addData:function(e){var t=e.itemId,n=e.key,r=e.value,o=e.tabId,i=e.type;x((function(e){var a=(0,T.Z)({},e),c=a[o],l=c.data[i][t].checked,s=(0,T.Z)((0,T.Z)({},c),{},{url:"queryParams"===i?(0,R.q)(c.url,c.data.queryParams):c.url,data:(0,T.Z)((0,T.Z)({},c.data),{},(0,g.Z)({},i,(0,T.Z)((0,T.Z)({},c.data[i]),{},(0,g.Z)({},t,{key:n,value:r,checked:l}))))});return a[o]=s,a}))},removeSubTab:function(e){var t=e.tabId,n=e.type,r=e.itemId;x((function(e){var o=(0,T.Z)({},e);return delete o[t].data[n][r],o[t].url=(0,R.q)(o[t].url,o[t].data.queryParams),o}))},addSubTab:function(e){var t=e.tabId,n=e.type;x((function(e){var r=(0,T.Z)({},e),o=r[t],i=(0,T.Z)((0,T.Z)({},o),{},{data:(0,T.Z)((0,T.Z)({},o.data),{},(0,g.Z)({},n,(0,T.Z)((0,T.Z)({},o.data[n]),{},(0,g.Z)({},(0,I.Z)(),{key:"",value:""}))))});return r[t]=i,r}))},sendReq:function(e){var t=e.tabId,n=v[t],r={url:n.url,method:n.method,params:(0,S.Ap)(n.data.queryParams),headers:(0,S.Ap)(n.data.headers),data:n.data.body||void 0};u&&(r.url="https://ec2-16-171-200-227.eu-north-1.compute.amazonaws.com/api/"+r.url),D(r).then((function(e){return function(e){var t=e.time,n=e.response,r=e.size,o=e.tabId;x((function(e){var i=(0,T.Z)({},e),a=i[o],c=(0,T.Z)((0,T.Z)({},a),{},{res:{time:t,response:n,size:r}});return i[o]=c,i}))}({time:e.time,response:e.response,size:e.size,tabId:t})})).catch((function(e){var n=e.error,r=e.time,o=e.errorMessage,i=e.response,a=e.size;return function(e){var t=e.time,n=e.error,r=e.tabId,o=e.errorMessage,i=e.response,a=e.size;x((function(e){var c=(0,T.Z)({},e),l=c[r],s=(0,T.Z)((0,T.Z)({},l),{},{res:{time:t,response:void 0===i?null:i,error:n,errorMessage:o,size:a}});return c[r]=s,c}))}({time:r,error:n,tabId:t,errorMessage:o,response:i,size:a})}))},toggleQuary:function(e){var t=e.itemId,n=(e.key,e.value,e.tabId),r=e.type;x((function(e){var o=(0,T.Z)({},e),i=o[n],a=i.data[r][t],c=(0,T.Z)((0,T.Z)({},i),{},{data:(0,T.Z)((0,T.Z)({},i.data),{},(0,g.Z)({},r,(0,T.Z)((0,T.Z)({},i.data[r]),{},(0,g.Z)({},t,(0,T.Z)((0,T.Z)({},a),{},{checked:!a.checked})))))});return o[n]=c,o[n].url=(0,R.q)(c.url,c.data.queryParams),o}))},loading:L,addTabData:function(e){var t=e.tabId,n=e.type,r=e.value;x((function(e){var o=(0,T.Z)({},e),i=o[t],a=(0,T.Z)((0,T.Z)({},i),{},(0,g.Z)({},n,r));return o[t]=a,o}))},updateBody:function(e){var t=e.tabId,n=e.type,r=e.value;x((function(e){var o=(0,T.Z)({},e),i=o[t],a=(0,T.Z)((0,T.Z)({},i),{},{data:(0,T.Z)((0,T.Z)({},i.data),{},(0,g.Z)({},n,r))});return o[t]=a,o}))},collections:b,setCollections:_,setSelectedCollection:E,removeCollection:function(e){var t;(0,O.EK)(e),x((function(n){var r,o,i={};for(var a in n)if(n.hasOwnProperty(a)){var c=n[a];c.collection!==e&&(i[a]=c,t||(t=c))}return _((function(t){return t.filter((function(t){return t.collection!==e}))})),E({collection:(null===(r=t)||void 0===r?void 0:r.collection)||"",id:(null===(o=t)||void 0===o?void 0:o.id)||""}),i}))}},children:t})},L=n(42364),U=n(75633),B=n(74627),z=n(41942),F=function(e){var t=e.list,n=e.tabId,o=e.type,i=(0,r.useContext)(A),a=i.addData,c=i.addSubTab,s=i.removeSubTab,u=i.toggleQuary,d=function(e){var t=e.itemId,n=e.key,r=e.value,o=e.tabId,i=e.type;a({itemId:t,key:n,value:r,tabId:o,type:i})};return(0,q.jsxs)(q.Fragment,{children:[Object.entries(t).map((function(e){var t,r=(0,l.Z)(e,2),i=r[0],a=r[1];return(0,q.jsxs)("div",{className:_,children:[(0,q.jsx)(L.Z,{control:(0,q.jsx)(U.Z,{checked:null!==(t=a.checked)&&void 0!==t&&t,checkedIcon:(0,q.jsx)(B.Z,{}),icon:(0,q.jsx)(z.Z,{}),onChange:function(){u({itemId:i,key:"checked",value:!a.checked,tabId:n,type:o})}}),label:a.checked?"active":"inactive",labelPlacement:"start"}),(0,q.jsx)(v.B,{disabled:!a.checked,className:y,value:a.key,label:"key",onChange:function(e){d({itemId:i,key:e,value:a.value,tabId:n,type:o})}}),(0,q.jsx)(v.B,{disabled:!a.checked,className:y,value:a.value,label:"value",onChange:function(e){return d({itemId:i,key:a.key,value:e,tabId:n,type:o})}}),(0,q.jsx)(j.E,{onClick:function(){return s({tabId:n,type:o,itemId:i})},title:"Remove",placement:"right",children:(0,q.jsx)(Z.Z,{})})]},i)})),(0,q.jsx)(j.E,{onClick:function(){c({tabId:n,type:o})},title:"Add",children:(0,q.jsx)(C.Z,{})})]})},J="ParamsContainer_customBox__kUr90",W="ParamsContainer_customTabList__V6mO4",V="JsonPanel_container__C92c4",G="JsonPanel_icons__lsmCa",H="JsonPanel_textarea__fxEph",K=n(40666),Q=n(49862),Y=n(45200),X=n(54996),$=n(7023),ee=n(23670),te=n(77374),ne=String.fromCharCode(13,10),re=function(e){var t=e.value,n=e.onChange,o=e.editable,i=void 0===o||o,a=e.rows,c=void 0===a?8:a,l=(0,r.useContext)(K.I).isDark,s=i?"Request":"Response";return(0,q.jsxs)("div",{className:V,children:[(0,q.jsxs)("div",{className:G,children:[(0,q.jsx)(j.E,{onClick:function(){return(0,X.r0)(t)},title:"Copy",children:(0,q.jsx)(Q.Z,{})}),!t||0!==(null===t||void 0===t?void 0:t.length)&&(0,q.jsx)(j.E,{onClick:function(){return function(e){var t=e.nameOfFile,n=e.data,r=new Blob([n],{type:"text/plain"}),o=URL.createObjectURL(r),i=document.createElement("a");i.href=o,i.download="dev-tools "+t+".txt",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}({data:t,nameOfFile:s+(0,te.h)()})},title:"save as file",children:(0,q.jsx)(ee.Z,{})}),i&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(j.E,{onClick:function(){return(0,X.a9)(n)},title:"Paste",children:(0,q.jsx)(Y.Z,{})}),(0,q.jsx)(j.E,{onClick:function(){return n((0,S.ZO)(t))},children:(0,q.jsx)($.x,{children:"Beautify"})})]})]}),(0,q.jsx)("textarea",{cols:50,rows:c,disabled:!i,onChange:function(e){return n(e.target.value)},className:H,style:l?{color:"white"}:{},value:null===t||void 0===t?void 0:t.replaceAll("\\n",ne)})]})},oe={container:"TabLabel_container__fz-5C",tag:"TabLabel_tag__bvyej",dot:"TabLabel_dot__nudm0"},ie=function(e){var t=e.title,n=e.active,r=e.numberOfItems;return(0,q.jsxs)("div",{className:oe.container,children:[(0,q.jsx)($.x,{variant:"inherit",className:oe.title,children:t}),n?(0,q.jsx)("span",{className:oe.dot}):r?(0,q.jsx)($.x,{variant:"inherit",className:oe.tag,children:"(".concat(r,")")}):null]})},ae=function(e){var t=e.data,n=e.id,s=r.useState("1"),u=(0,l.Z)(s,2),d=u[0],h=u[1],v=(0,r.useContext)(A).updateBody;return(0,q.jsx)(o.Z,{className:J,sx:{border:1,borderColor:"divider"},children:(0,q.jsx)(a.ZP,{value:d,children:(0,q.jsxs)(o.Z,{children:[(0,q.jsxs)(c.Z,{className:W,allowScrollButtonsMobile:!0,onChange:function(e,t){h(t)},children:[(0,q.jsx)(i.Z,{label:(0,q.jsx)(ie,{title:"Query Params",numberOfItems:(0,S.rZ)(t.queryParams)}),value:"1"}),(0,q.jsx)(i.Z,{label:(0,q.jsx)(ie,{title:"Headers",numberOfItems:(0,S.rZ)(t.headers)}),value:"2"}),(0,q.jsx)(i.Z,{label:(0,q.jsx)(ie,{title:"Body",active:Boolean(t.body)}),value:"3"})]}),(0,q.jsx)(f.Z,{value:"1",children:(0,q.jsx)(F,{type:"queryParams",tabId:n,list:t.queryParams})}),(0,q.jsx)(f.Z,{value:"2",children:(0,q.jsx)(F,{type:"headers",tabId:n,list:t.headers})}),(0,q.jsx)(f.Z,{sx:{paddingTop:0},value:"3",children:(0,q.jsx)(re,{onChange:function(e){v({tabId:n,type:"body",value:e})},value:t.body})})]})})})},ce=n(73555),le=n(14777),se=n(99804),ue=function(e){var t=e.item,n=(0,r.useContext)(A),o=n.sendReq,i=n.addTabData,a=n.loading,c=n.removeTab,l=n.useProxy,s=(0,r.useContext)(se.t).handleModal;return(0,q.jsxs)("div",{className:h.container,children:[(0,q.jsxs)("div",{className:h.inputContainer,children:[(0,q.jsx)(x.Z,{value:t.method,onChange:function(e){i({tabId:t.id,type:"method",value:e.target.value})},children:b.xB.map((function(e){return(0,q.jsx)(p.Z,{value:e,children:(0,q.jsxs)($.x,{className:"".concat(h[e]),children:[" ",e]})},e)}))}),(0,q.jsx)(v.B,{className:h.input,value:t.url,label:"url",onChange:function(e){return i({tabId:t.id,type:"url",value:e})},InputProps:{startAdornment:l?(0,q.jsx)($.x,{className:h.proxyInput,children:"{{Proxy}}/"}):null}}),(0,q.jsx)(m.Z,{loading:a,disabled:!t.url,onClick:function(){return o({tabId:t.id})},children:"Send"}),(0,q.jsx)(j.E,{title:"Delete this Tab",onClick:function(){s((0,q.jsx)(le.s,{title:"This action will delete this current tab",onNext:function(){return c({id:t.id})}}))},children:(0,q.jsx)(ce.Z,{htmlColor:"red"})})]}),(0,q.jsx)(ae,{id:t.id,data:t.data})]})},de="ResContainer_container__kW-JL",fe="ResContainer_resContainer__ua3C6",he="ResContainer_properties__zQKAC",ve="ResContainer_gridContainer__-za6D",xe="ResContainer_gridItem__cj5kM",pe="ResContainer_key__QvHss",me=n(50570),be=n(40334),_e=function(e){var t,n,s,u,d,h,v,x,p,m=e.item,b=r.useState("1"),_=(0,l.Z)(b,2),y=_[0],j=_[1];return(0,q.jsxs)("div",{className:de,children:[(0,q.jsx)("h1",{children:"Response"}),m.res.errorMessage?(0,q.jsx)($.x,{sx:{color:"red"},children:m.res.errorMessage}):null,(0,q.jsxs)("div",{className:he,children:[(0,q.jsxs)($.x,{children:["Status: ",null!==(t=null===(n=m.res.response)||void 0===n?void 0:n.status)&&void 0!==t?t:"   ",(null===(s=m.res.response)||void 0===s?void 0:s.status)&&(0,q.jsx)(me.d,{title:E[null!==(u=null===(d=m.res.response)||void 0===d?void 0:d.status)&&void 0!==u?u:1],children:(0,q.jsx)(be.Z,{})})]}),(0,q.jsxs)($.x,{children:["Time: ",m.res.time]}),(0,q.jsxs)($.x,{children:["Size: ",m.res.size,"kb"]})]}),(0,q.jsx)("div",{className:fe,children:(0,q.jsx)(o.Z,{sx:{width:"100%",typography:"body1",border:1,borderColor:"divider",borderRadius:2},children:(0,q.jsxs)(a.ZP,{value:y,children:[(0,q.jsx)(o.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,q.jsxs)(c.Z,{onChange:function(e,t){j(t)},"aria-label":"lab API tabs example",children:[(0,q.jsx)(i.Z,{label:"Body",value:"1"}),(0,q.jsx)(i.Z,{label:"Header",value:"2"})]})}),(0,q.jsx)(f.Z,{sx:{paddingTop:0},value:"1",children:(0,q.jsx)(re,{rows:30,editable:!1,value:null!==(h=m.res.response)&&void 0!==h&&h.data?JSON.stringify(null===(v=m.res.response)||void 0===v?void 0:v.data,null,3):""})}),(0,q.jsx)(f.Z,{value:"2",children:(0,q.jsx)("div",{className:ve,children:null!==(x=m.res.response)&&void 0!==x&&x.headers?Object.entries(null===(p=m.res.response)||void 0===p?void 0:p.headers).map((function(e){var t=(0,l.Z)(e,2),n=t[0],r=t[1];return(0,q.jsxs)("div",{className:xe,children:[(0,q.jsxs)($.x,{className:pe,children:[n,":"]}),(0,q.jsx)($.x,{className:"header-value",children:r})]},n)})):null})})]})})})]})},ye=n(33960),je=n(51110),Ce=n(73360),Ze=n(24196),ge=n(26021),Te=n(36201),ke=["item"],Ie=function(e){var t=e.item,n=((0,s.Z)(e,ke),(0,r.useState)(!1)),o=(0,l.Z)(n,2),i=o[0],a=o[1],c=(0,r.useRef)(t),h=(0,r.useState)(!1),v=(0,l.Z)(h,2),x=v[0],p=v[1],m=(0,r.useState)(t.title),b=(0,l.Z)(m,2),_=b[0],y=b[1],C=(0,je.Z)(),Z=(0,r.useContext)(A).editTabTitle;return(0,r.useEffect)((function(){c.current=t}),[]),(0,r.useEffect)((function(){(0,S.Y5)(c.current,t)?a(!0):i&&a(!1)}),[t]),(0,q.jsxs)(f.Z,{className:u,value:t.value,children:[(0,q.jsx)(Ce.Z,{disabled:!i,endIcon:(0,q.jsx)(Te.Z,{}),variant:"outlined",onClick:function(){a(!1),c.current=t,(0,O.a2)(t.id,t)},children:"save"}),(0,q.jsxs)("div",{className:d,children:[(0,q.jsx)(ge.Z,{htmlColor:"#1976d2"}),(0,q.jsx)($.x,{variant:"subtitle2",children:"".concat(t.collection," / ")}),(0,q.jsx)("div",{children:(0,q.jsx)(Ze.Z,{variant:"standard",value:_,sx:{"& .MuiInputBase-input.Mui-disabled":{opacity:1,WebkitTextFillColor:"dark"===C.palette.mode?"white":"rgba(0, 0, 0, 1)",border:"none"},"& .MuiInputBase-root.Mui-disabled":{border:"none",outline:"none"},width:_.length>0?"calc(".concat(9*_.length,"px )"):"100%",maxWidth:"50vw"},InputProps:{disableUnderline:!x,style:{textAlign:"center"}},disabled:!x,onBlur:function(e){Z({id:t.id,newTitle:e.target.value}),p(!x)},onChange:function(e){return y(e.target.value)}})}),(0,q.jsx)(j.E,{onClick:function(){return p(!x)},children:(0,q.jsx)(ye.Z,{})})]}),(0,q.jsx)(ue,{item:t}),(0,q.jsx)(_e,{item:t})]})},Ne={container:"ApiTabs_container__68M-Q",enter:"ApiTabs_enter__EyMeu",icon:"ApiTabs_icon__FEuEk",GET:"ApiTabs_GET__1sbzs",POST:"ApiTabs_POST__dZnzW",DELETE:"ApiTabs_DELETE__8qK+6",PUT:"ApiTabs_PUT__2F89e",addIcon:"ApiTabs_addIcon__6OgDH",removeButton:"ApiTabs_removeButton__9DH8+",title:"ApiTabs_title__xMSuV"},we=n(23878),Ee="Collection_container__lGRLa",Se="Collection_row__067Fw",Re="Collection_options__cPnRL",Pe="CollectionItem_container__w761I",Me="CollectionItem_button__1qkGH",Oe="CollectionItem_selected__U18MP",qe="CollectionItem_options__MrylV",Ae="CollectionItem_icon__uoVE8",De=n(15712),Le=n(22897),Ue=function(e){var t=e.item,n=e.deleteCollection,o=e.editCollectionTitle,i=(0,r.useContext)(A),a=i.setSelectedCollection,c=i.selectedCollection,l=t.collection===c.collection;return(0,q.jsx)(q.Fragment,{children:(0,q.jsxs)("div",{className:Pe,children:[(0,q.jsx)("div",{className:"".concat(Me).concat(l?" "+Oe:""),onClick:function(){return a(t)},children:(0,q.jsx)($.x,{variant:l?"h6":"body1",children:t.collection})}),(0,q.jsxs)("div",{className:qe,children:[(0,q.jsx)(j.E,{className:Ae,onClick:function(){return o(t.collection)},children:(0,q.jsx)(Le.Z,{sx:{height:"20px",width:"20px"}})}),(0,q.jsx)(j.E,{className:Ae,onClick:function(){return n(t.collection)},children:(0,q.jsx)(De.Z,{sx:{height:"20px",width:"20px"},color:"error"})})]})]})})},Be=n(5707),ze=n(37762),Fe="ModifyModal_container__bcAQf",Je="ModifyModal_input__c4Xlo",We="ModifyModal_title__2V3a-",Ve="ModifyModal_buttonContainer__Kn3aP",Ge="ModifyModal_button__uea16",He=function(e){var t=e.handleModal,n=e.value,o=void 0===n?"":n,i=e.onNext,a=e.collections,c=e.title,s=(0,r.useState)(o),u=(0,l.Z)(s,2),d=u[0],f=u[1],h=(0,r.useState)(""),x=(0,l.Z)(h,2),p=x[0],m=x[1];return(0,q.jsxs)("div",{className:Fe,children:[(0,q.jsx)($.x,{className:We,variant:"h5",children:c}),(0,q.jsx)(v.B,{className:Je,value:d,error:!!p,helperText:p,label:"Title",onChange:f}),(0,q.jsx)("div",{className:Ve,children:(0,q.jsx)(Ce.Z,{onClick:function(){if(d){if(!o){var e,n=(0,ze.Z)(a);try{for(n.s();!(e=n.n()).done;){if(e.value.collection===d)return void m("Already exists")}}catch(r){n.e(r)}finally{n.f()}}i(d),t()}else m("Required Field")},variant:"contained",className:Ge,children:"save"})})]})},Ke=function(e){var t=e.list,n=(0,r.useContext)(se.t).handleModal,o=(0,r.useContext)(A),i=o.removeCollection,a=o.createCollection,c=o.collections,l=o.editCollection,s=function(e){n((0,q.jsx)(le.s,{title:'This Action Will delete All Tabs in "'.concat(e,'" Collection'),onNext:function(){return i(e)}}))},u=function(e){n((0,q.jsx)(He,{collections:c,value:e,title:"Edit Collection name",onNext:function(t){return l(t,e)}}))};return(0,q.jsxs)("div",{className:Ee,children:[(0,q.jsxs)("div",{className:Re,children:[(0,q.jsx)($.x,{variant:"h6",children:"Collections"}),(0,q.jsx)(j.E,{onClick:function(){n((0,q.jsx)(He,{collections:c,title:"Enter Collection name",onNext:function(e){return a(e)}}))},children:(0,q.jsx)(Be.Z,{})})]}),(0,q.jsx)("div",{className:Se,children:t.map((function(e){return(0,q.jsx)(Ue,{editCollectionTitle:u,deleteCollection:s,item:e},e.collection)}))})]})},Qe="EmptyCollections_container__amoad",Ye="EmptyCollections_link__va4pz",Xe=function(e){var t=e.createCollection;return(0,q.jsxs)("div",{className:Qe,children:[(0,q.jsx)($.x,{children:"No collection yet... click the plus Icon above to start"}),(0,q.jsx)($.x,{className:Ye,onClick:function(){return t()},children:"Try example"})]})},$e="ProxySection_container__p0FEm",et="ProxySection_icon__4IxvL",tt="ProxySection_link__+l8KH",nt=n(64513),rt=(0,n(68132).ZP)((function(e){return(0,q.jsx)(nt.Z,(0,T.Z)({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))}))((function(e){var t=e.theme;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"dark"===t.palette.mode?"#2ECA45":"#65C466",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===t.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===t.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}})),ot=n(57089),it=n(54094),at=n(47174),ct=function(){var e=(0,r.useContext)(A),t=e.useProxy,n=e.setUseProxy;return(0,q.jsxs)("div",{className:$e,children:[(0,q.jsx)(L.Z,{control:(0,q.jsx)(rt,{sx:{m:1},value:!t,onChange:function(){return n(!t)}}),label:"".concat(t?"Disable":"Activate"," Proxy Server")}),(0,q.jsx)(j.E,{title:'The ProxySection component is a crucial feature in Postman Clone application. It allows users to enable or disable the NoCORS Proxy Server. When activated, the Proxy Server acts as an intermediary between our front-end and external APIs with CORS restrictions, enabling seamless data access. Toggle the "Activate" or "Disable" button to control the Proxy Server and facilitate smooth API interactions in our application.',onClick:function(){},children:(0,q.jsx)(ot.Z,{})}),(0,q.jsx)(j.E,{title:"See Source Code",onClick:function(){},children:(0,q.jsx)(at.rU,{className:tt,target:"_blank",to:"https://ec2-16-171-200-227.eu-north-1.compute.amazonaws.com",children:(0,q.jsx)(it.Z,{className:et})})})]})},lt=function(){var e=(0,r.useContext)(A),t=e.tabs,n=e.addTab,l=e.collections,s=e.selectedCollection,u=e.createCollection,d=e.tabIndex,f=e.setTabIndex,h=(0,r.useMemo)((function(){var e={};return Object.keys(t).forEach((function(n){t[n].collection===s.collection&&(e[n]=t[n])})),Object.entries(e)}),[s,t]);return(0,q.jsxs)("div",{className:Ne.container,children:[(0,q.jsx)(Ke,{list:l}),0!==(null===l||void 0===l?void 0:l.length)&&"-1"!==s.id?(0,q.jsxs)("div",{className:Ne.enter,children:[(0,q.jsx)(ct,{}),(0,q.jsx)(a.ZP,{value:d,children:(0,q.jsxs)(o.Z,{sx:{marginTop:"25px",border:2,borderColor:"divider",width:"90vw"},children:[(0,q.jsxs)(c.Z,{sx:{borderBottom:1,borderColor:"divider",width:"100%"},onChange:function(e,t){f(t)},scrollButtons:!0,variant:"scrollable",allowScrollButtonsMobile:!0,children:[h.map((function(e){return(0,q.jsx)(i.Z,{wrapped:!0,sx:{maxWidth:"150px"},label:(0,q.jsxs)("div",{className:Ne.title,children:[(0,q.jsx)($.x,{className:"".concat(Ne[e[1].method]," ").concat(Ne.icon),children:e[1].method}),(0,q.jsx)($.x,{style:{overflowWrap:"anywhere"},children:e[1].title})]}),value:e[1].value},e[0])})),(0,q.jsx)("div",{className:Ne.addIcon,onClick:function(){var e=(0,I.Z)();n(e)},children:(0,q.jsx)(we.Z,{})})]}),h.map((function(e){return(0,q.jsx)(Ie,{item:e[1]},e[0])}))]})})]}):(0,q.jsx)(Xe,{createCollection:u})]})},st=function(){return(0,q.jsx)(D,{children:(0,q.jsx)(lt,{})})}}}]);
//# sourceMappingURL=Api.13421d99.chunk.js.map