(this["webpackJsonpnear-marketplace-dapp"]=this["webpackJsonpnear-marketplace-dapp"]||[]).push([[0],{145:function(e,t){},155:function(e,t){},204:function(e,t,c){},209:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(30),r=c.n(s),o=c(3),l=c.n(o),i=c(11),j=c(4),d=c(222),b=c(218),u=c(224),p=Object({NODE_ENV:"production",PUBLIC_URL:"/NearAgro",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"mycontracty.samsonamos.testnet";var x=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:p,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:p,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},m=c(22),O=c(49),h=x("testnet");function f(){return(f=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.connect)(Object.assign({deps:{keyStore:new m.keyStores.BrowserLocalStorageKeyStore}},h));case 2:t=e.sent,window.walletConnection=new m.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),window.contract=new m.Contract(window.walletConnection.account(),h.contractName,{viewMethods:["getSeed","getSeeds","getPurchasedSeeds"],changeMethods:["buySeed","setSeed","deleteSeed","updateSeed"]});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O.formatNearAmount,e.next=3,window.walletConnection.account().getAccountBalance();case 3:return e.t1=e.sent.total,e.abrupt("return",(0,e.t0)(e.t1,2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){window.walletConnection.requestSignIn(h.contractName)}function w(){window.walletConnection.signOut(),window.location.reload()}var N=c(220),k=c(216),S=c(227),C=c(1),I=function(e){var t=e.address,c=e.amount,n=e.symbol,a=e.destroy;return t?Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(N.a,{children:[Object(C.jsx)(N.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:c?Object(C.jsxs)(C.Fragment,{children:[c," ",Object(C.jsxs)("span",{className:"ms-1",children:[" ",n]})]}):Object(C.jsx)(k.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(C.jsxs)(N.a.Menu,{className:"shadow-lg border-0",children:[Object(C.jsx)(N.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(C.jsxs)(S.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(C.jsx)("span",{className:"font-monospace",children:t})]})}),Object(C.jsx)(N.a.Divider,{}),Object(C.jsxs)(N.a.Item,{as:"button",className:"d-flex align-items-center",onClick:function(){a()},children:[Object(C.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},P=c(17),F=(c(203),function(){return Object(C.jsx)(P.a,{position:"top-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})}),_=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-check-circle-fill text-success mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},A=function(e){var t=e.text;return Object(C.jsxs)("div",{children:[Object(C.jsx)("i",{className:"bi bi-x-circle-fill text-danger mx-2"}),Object(C.jsx)("span",{className:"text-secondary mx-1",children:t})]})},z={text:""};_.defaultProps=z,A.defaultProps=z;var E=c(2),L=c(129),R=c(223),U=c(221),B=c(132),D=function(e){var t=e.save,c=Object(n.useState)(""),a=Object(j.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),i=l[0],d=l[1],b=Object(n.useState)(""),u=Object(j.a)(b,2),p=u[0],x=u[1],m=Object(n.useState)(""),O=Object(j.a)(m,2),h=O[0],f=O[1],y=Object(n.useState)(0),g=Object(j.a)(y,2),v=g[0],w=g[1],N=Object(n.useState)(!1),k=Object(j.a)(N,2),S=k[0],I=k[1],P=function(){return I(!1)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(L.a,{onClick:function(){return I(!0)},variant:"dark",className:"rounded-pill px-0 my-3",style:{width:"38px"},children:Object(C.jsx)("i",{class:"bi bi-plus"})}),Object(C.jsxs)(R.a,{show:S,onHide:P,centered:!0,children:[Object(C.jsx)(R.a.Header,{closeButton:!0,children:Object(C.jsx)(R.a.Title,{children:"New Product"})}),Object(C.jsx)(U.a,{children:Object(C.jsxs)(R.a.Body,{children:[Object(C.jsx)(B.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",onChange:function(e){r(e.target.value)},placeholder:"Enter name of product"})}),Object(C.jsx)(B.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Image URL",onChange:function(e){d(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(U.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:function(e){x(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Location",onChange:function(e){f(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Price",onChange:function(e){w(e.target.value)}})})]})}),Object(C.jsxs)(R.a.Footer,{children:[Object(C.jsx)(L.a,{variant:"outline-secondary",onClick:P,children:"Close"}),Object(C.jsx)(L.a,{variant:"dark",disabled:!(s&&i&&p&&h&&v),onClick:function(){t({name:s,image:i,description:p,location:h,price:v}),P()},children:"Save product"})]})]})]})},T=c(131),H=c(226),M=c(217),W=c(9),K=function(e){var t=e.product,c=(e.buy,t.id),n=t.price,a=t.name,s=t.sold,r=t.image,o=t.owner,l=Object(W.m)();return Object(C.jsx)(T.a,{children:Object(C.jsxs)(H.a,{className:" h-100",children:[Object(C.jsx)(H.a.Header,{children:Object(C.jsxs)(S.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:o}),Object(C.jsxs)(M.a,{bg:"secondary",className:"ms-auto",children:[s," Sold"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:r,alt:a,style:{objectFit:"cover"}})}),Object(C.jsxs)(H.a.Body,{className:"d-flex  flex-column ",children:[Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Name "}),Object(C.jsx)("span",{children:a})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Price "}),Object(C.jsxs)("span",{children:[m.utils.format.formatNearAmount(n)," NEAR"]})]}),Object(C.jsx)(L.a,{variant:"outline-dark",onClick:function(){return l("/view_product_by_id/".concat(c))},className:"w-100 py-3",children:"View More Details"})]})]})},c)},q=function(){return Object(C.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(C.jsx)(k.a,{animation:"border",role:"status",className:"opacity-10",children:Object(C.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},J=c(219),V=c(225),G=1e14;function Q(){return window.contract.getSeeds()}function X(e){return window.contract.getSeed({id:e})}function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(i.a)(l.a.mark((function e(t){var c,n,a,s,r,o,i,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.id,n=t.price,a=t.name,s=t.description,r=t.location,o=t.from,i=t.image,j=Object(V.a)(),e.next=4,window.contract.buySeed({seedId:c,name:a,description:s,location:r,from:o,image:i,pId:j},G,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.contract.deleteSeed({id:t});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t,c,n,a,s){return ce.apply(this,arguments)}function ce(){return(ce=Object(i.a)(l.a.mark((function e(t,c,n,a,s,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(O.parseNearAmount)(r+""),e.next=3,window.contract.updateSeed({id:t,_name:c,_description:n,_image:a,_location:s,_price:r});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),o=r[0],d=r[1],u=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=a,e.next=5,Q();case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))),p=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{d(!0),(c=t,c.id=Object(V.a)(),c.price=Object(O.parseNearAmount)(c.price+""),window.contract.setSeed({seed:c})).then((function(e){u()})),Object(P.b)(Object(C.jsx)(_,{text:"Product added successfully."}))}catch(n){console.log({error:n}),Object(P.b)(Object(C.jsx)(A,{text:"Failed to create a product."}))}finally{d(!1)}case 1:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(i.a)(l.a.mark((function e(t,c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y({id:t,price:c}).then((function(e){return Q()}));case 3:Object(P.b)(Object(C.jsx)(_,{text:"Product bought successfully"})),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(P.b)(Object(C.jsx)(A,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(b.a,{children:o?Object(C.jsx)(q,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(C.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Seeds"}),Object(C.jsx)(D,{save:p})]}),Object(C.jsx)(J.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:c.map((function(e){return Object(C.jsx)(K,{product:Object(E.a)({},e),buy:x})}))})]})})})},ae=function(){var e=Object(W.o)(),t=Object(n.useState)({}),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),d=(o[0],o[1]),b=e.id,u=Object(W.m)(),p=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.t0=s,e.next=5,X(b);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(0),console.log({error:e.t2});case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])}))),[b]),x=function(){var e=Object(i.a)(l.a.mark((function e(t,c,n,a,s,r,o){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(P.b)(Object(C.jsx)(_,{text:"Processing your request..."})),e.prev=1,e.next=4,Y({id:t,price:c,name:n,description:a,location:s,from:r,image:o}).then((function(e){X(t),Object(P.b)(Object(C.jsx)(_,{text:"Product bought successfully"}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Object(P.b)(Object(C.jsx)(A,{text:"Failed to purchase product."}));case 9:return e.prev=9,d(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})));return function(t,c,n,a,s,r,o){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[p]),console.log(b),console.log(a),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(J.a,{className:"mt-3",children:[Object(C.jsx)(T.a,{md:4,children:Object(C.jsx)(M.a,{bg:"success",style:{float:"right",cursor:"pointer"},onClick:function(){return u("/")},children:"Back"})}),Object(C.jsx)(T.a,{md:4,children:Object(C.jsxs)(H.a,{className:" h-100",children:[Object(C.jsx)(H.a.Header,{children:Object(C.jsxs)(S.a,{direction:"horizontal",gap:2,children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:a.owner}),Object(C.jsxs)(M.a,{bg:"secondary",className:"ms-auto",children:[a.sold," Sold"]})]})}),Object(C.jsx)("div",{className:" ratio ratio-4x3",children:Object(C.jsx)("img",{src:a.image,alt:a.name,style:{objectFit:"cover"}})}),Object(C.jsxs)(H.a.Body,{className:"d-flex  flex-column text-left",children:[Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Name: "}),Object(C.jsx)("span",{children:a.name})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Description: "}),Object(C.jsx)("span",{children:a.description})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Price: "}),Object(C.jsxs)("span",{children:[m.utils.format.formatNearAmount(a.price)," NEAR"]})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Location: "}),Object(C.jsx)("span",{children:a.location})]}),Object(C.jsxs)(L.a,{variant:"outline-dark",onClick:function(){return x(a.id,a.price,a.name,a.description,a.location,a.owner,a.image)},className:"w-100 py-3",children:["Buy for ",m.utils.format.formatNearAmount(a.price)," NEAR"]})]})]})},b),Object(C.jsx)(T.a,{md:4})]})})},se=function(e){var t=e.accountId,c=Object(W.m)(),a=Object(n.useState)(!1),s=Object(j.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)([]),u=Object(j.a)(d,2),p=u[0],x=u[1],O=Object(n.useState)(!1),h=Object(j.a)(O,2),f=h[0],y=h[1],g=Object(n.useState)(""),v=Object(j.a)(g,2),w=v[0],N=v[1],k=Object(n.useState)(""),S=Object(j.a)(k,2),I=S[0],F=S[1],z=Object(n.useState)(""),E=Object(j.a)(z,2),D=E[0],K=E[1],V=Object(n.useState)(""),G=Object(j.a)(V,2),Y=G[0],Z=G[1],ee=Object(n.useState)(0),ce=Object(j.a)(ee,2),ne=ce[0],ae=ce[1],se=function(){return o(!1)},re=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.prev=1,y(!0),e.next=5,Q();case 5:c=e.sent,x(c.filter((function(e){return e.owner===t}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log({error:e.t0});case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),[t]),oe=Object(n.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X(t);case 3:c=e.sent,N(c.name),F(c.image),K(c.description),Z(c.location),ae(m.utils.format.formatNearAmount(c.price)),o(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log({error:e.t0});case 15:return e.prev=15,e.finish(15);case 17:case"end":return e.stop()}}),e,null,[[0,12,15,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),le=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(P.b)(Object(C.jsx)(_,{text:"deleting product please wait."})),$(t).then((function(e){re(),Object(P.b)(Object(C.jsx)(_,{text:"product deleted successfully."}))}))}catch(c){Object(P.b)(Object(C.jsx)(A,{text:"Failed to delete product."}))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{Object(P.b)(Object(C.jsx)(_,{text:"updating product please wait."})),te(t,w,D,I,Y,ne).then((function(e){re(),se()})),Object(P.b)(Object(C.jsx)(_,{text:"Product updated successfully."}))}catch(c){console.log({error:c}),Object(P.b)(Object(C.jsx)(A,{text:"Failed to update  product."}))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){re()}),[re]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(L.a,{className:"my-4 btn-secondary",size:"sm",onClick:function(){return c("/")},children:"Back"}),f||0!==p.length?!f&&p?Object(C.jsx)(J.a,{children:p&&p.map((function(e,t){return Object(C.jsxs)(T.a,{md:12,className:"my-2",children:[Object(C.jsxs)(R.a,{show:r,onHide:se,centered:!0,children:[Object(C.jsx)(R.a.Header,{closeButton:!0,children:Object(C.jsx)(R.a.Title,{children:"Update Product"})}),Object(C.jsx)(U.a,{children:Object(C.jsxs)(R.a.Body,{children:[Object(C.jsx)(B.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",value:w,onChange:function(e){N(e.target.value)},placeholder:"Enter name of product"})}),Object(C.jsx)(B.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Image URL",value:I,onChange:function(e){F(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(C.jsx)(U.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},value:D,onChange:function(e){K(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputLocation",label:"Location",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Location",value:Y,onChange:function(e){Z(e.target.value)}})}),Object(C.jsx)(B.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(C.jsx)(U.a.Control,{type:"text",placeholder:"Price",value:ne,onChange:function(e){ae(e.target.value)}})})]})}),Object(C.jsxs)(R.a.Footer,{children:[Object(C.jsx)(L.a,{size:"sm",variant:"outline-secondary",onClick:se,children:"Close"}),Object(C.jsx)(L.a,{size:"sm",variant:"dark",disabled:!(w&&I&&D&&Y&&ne),onClick:function(){return ie(e.id)},children:"Update"})]})]}),Object(C.jsxs)(H.a,{className:" h-100",children:[Object(C.jsx)(H.a.Header,{children:Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:e.owner}),Object(C.jsxs)("div",{children:[Object(C.jsx)(M.a,{bg:"success mx-2",style:{cursor:"pointer"},onClick:function(){return oe(e.id)},className:"ms-auto",children:"Update"}),Object(C.jsx)(M.a,{bg:"danger mx-2",style:{cursor:"pointer"},onClick:function(){return le(e.id)},className:"ms-auto",children:"Delete"})]})]})}),Object(C.jsxs)(H.a.Body,{className:"d-flex gap-3 text-left",children:[Object(C.jsx)("div",{className:"shadow",children:Object(C.jsx)("img",{src:e.image,alt:e.name,style:{width:"200px",height:"100%",objectFit:"cover",borderRadius:"2px"}})}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Name: "}),Object(C.jsx)("span",{children:e.name})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Description: "}),Object(C.jsx)("span",{children:e.description})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Price: "}),Object(C.jsxs)("span",{children:[m.utils.format.formatNearAmount(e.price)," NEAR"]})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Location: "}),Object(C.jsx)("span",{children:e.location})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Sold: "}),Object(C.jsx)("span",{children:e.sold})]})]})]})]})]},t)}))}):Object(C.jsx)(q,{}):Object(C.jsx)("p",{className:"text-center font-monospace",style:{margin:"auto"},children:"No product created yet."})]})})},re=function(e){var t=e.accountId,c=Object(W.m)(),a=Object(n.useState)([]),s=Object(j.a)(a,2),r=s[0],o=s[1],d=Object(n.useState)(!1),u=Object(j.a)(d,2),p=u[0],x=u[1],O=Object(n.useCallback)(Object(i.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.prev=1,x(!0),e.next=5,window.contract.getPurchasedSeeds();case 5:c=e.sent,o(c.filter((function(e){return e.to===t}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log({error:e.t0});case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])}))),[t]);return Object(n.useEffect)((function(){O()}),[O]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(L.a,{className:"my-4 btn-secondary",size:"sm",onClick:function(){return c("/")},children:"Back"}),p||0!==r.length?!p&&r?Object(C.jsx)(J.a,{children:r&&r.map((function(e,t){return Object(C.jsx)(T.a,{md:12,className:"my-2",children:Object(C.jsxs)(H.a,{className:" h-100",children:[Object(C.jsx)(H.a.Header,{children:Object(C.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(C.jsx)("span",{className:"font-monospace text-secondary",children:e.to}),Object(C.jsx)("span",{className:"font-monospace text-secondary",children:new Date(e.datePurchased/1e6).toDateString()})]})}),Object(C.jsxs)(H.a.Body,{className:"d-flex gap-3 text-left",children:[Object(C.jsx)("div",{className:"shadow",children:Object(C.jsx)("img",{src:e.image,alt:e.name,style:{width:"200px",height:"100%",objectFit:"cover",borderRadius:"2px"}})}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Name: "}),Object(C.jsx)("span",{children:e.name})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Description: "}),Object(C.jsx)("span",{children:e.description})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Price: "}),Object(C.jsxs)("span",{children:[m.utils.format.formatNearAmount(e.price)," NEAR"]})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"Location: "}),Object(C.jsx)("span",{children:e.location})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"From: "}),Object(C.jsx)("span",{children:e.from})]}),Object(C.jsxs)("p",{className:"font-monospace",style:{fontSize:"12px"},children:[Object(C.jsx)("span",{style:{display:"block"},className:"text-uppercase fw-bold",children:"To: "}),Object(C.jsx)("span",{children:e.to})]})]})]})]})},t)}))}):Object(C.jsx)(q,{}):Object(C.jsx)("p",{className:"text-center font-monospace",style:{margin:"auto"},children:"No product purchased yet."})]})})},oe=function(e){var t=e.name,c=e.login,n=e.coverImg;return n?Object(C.jsx)("div",{className:"d-flex justify-content-center flex-column ",style:{background:"#000",minHeight:"100vh"},children:Object(C.jsxs)(b.a,{children:[Object(C.jsxs)("div",{className:"d-flex justify-content-between mt-auto text-light mb-5",children:[Object(C.jsx)("h4",{children:t}),Object(C.jsx)(L.a,{onClick:c,variant:"outline-light",className:"rounded-pill px-3 mt-1",children:"Connect Wallet"})]}),Object(C.jsxs)("div",{className:" row text-light mt-5",children:[Object(C.jsxs)("div",{className:"col-md-5  m-4",children:[Object(C.jsx)("h4",{className:"text-left mt-4",children:"Welcome to NearAgro"}),Object(C.jsx)("div",{style:{fontSize:"20px",opacity:.8,lineHeight:"5vh"},className:"mt-4 text-left",children:"A decentralized farmer marketplace built on the NEAR protocol, where a farmer can both buy and sell plant seed on  the NEAR blockchain."})]}),Object(C.jsx)("div",{className:"col-md-1"}),Object(C.jsx)("div",{className:"col-md-5 mt-4",children:Object(C.jsx)("img",{src:n,alt:"",style:{marginTop:"5vh",width:"80vh",height:"40vh",borderRadius:"2px",cover:"objectFit"}})})]}),Object(C.jsx)("p",{className:"mt-4 text-secondary text-center",children:"Powered by NEAR"})]})}):null};oe.defaultProps={name:""};var le=oe,ie=c.p+"static/media/images.18674b3b.jpeg",je=(c(204),function(){var e=window.walletConnection.account(),t=Object(n.useState)("0"),c=Object(j.a)(t,2),a=c[0],s=c[1],r=Object(W.m)(),o=Object(n.useCallback)(Object(i.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.accountId){t.next=6;break}return t.t0=s,t.next=4,y();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))));return console.log("account",e.accountId),Object(n.useEffect)((function(){o()}),[o]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(F,{}),e.accountId?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(d.a.Brand,{onClick:function(){return r("/")},children:"NearAgro"}),Object(C.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(C.jsxs)(d.a.Collapse,{id:"responsive-navbar-nav",children:[Object(C.jsxs)(u.a,{className:"me-auto",children:[Object(C.jsx)(u.a.Link,{onClick:function(){return r("/view_my_products")},children:" MyProducts"}),Object(C.jsx)(u.a.Link,{onClick:function(){return r("/view_my_cart")},children:" MyCart"})]}),Object(C.jsx)(u.a,{children:Object(C.jsx)(u.a.Link,{eventKey:2,children:Object(C.jsx)(I,{address:e.accountId,amount:a,symbol:"NEAR",destroy:w})})})]})]})}),Object(C.jsxs)(W.c,{children:[Object(C.jsx)(W.a,{path:"/",element:Object(C.jsx)(ne,{})}),Object(C.jsx)(W.a,{path:"/view_product_by_id/:id",element:Object(C.jsx)(ae,{})}),Object(C.jsx)(W.a,{path:"/view_my_products",element:Object(C.jsx)(se,{accountId:e.accountId})}),Object(C.jsx)(W.a,{path:"/view_my_cart",element:Object(C.jsx)(re,{accountId:e.accountId})})]})]}):Object(C.jsx)(le,{name:"NearAgro",login:v,coverImg:ie})]})}),de=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,228)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))},be=c(48);c(207),c(208);window.nearInitPromise=function(){return f.apply(this,arguments)}().then((function(){r.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(be.a,{children:Object(C.jsx)(je,{})})}),document.getElementById("root"))})).catch(console.error),de()}},[[209,1,2]]]);
//# sourceMappingURL=main.a0c8c909.chunk.js.map