(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{42:function(e,t,a){"use strict";var n=a(0),c=a.n(n);a(49);t.a=function(e){return c.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},49:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(47),c=a.n(n),r=a(48),l=a(10),o=a(0),s=a.n(o),i=a(1),u=a(42),m=a(44),d=a(58),p=(a(65),function(e){var t=Object(o.useRef)(),a=e.center,n=e.zoom;return Object(o.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([a.lng,a.lat]),zoom:n})})}),[a,n]),s.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),E=a(50),f=a(15),h=a(11),v=a(51),w=(a(66),function(e){var t=Object(o.useContext)(h.a),a=Object(v.a)(),n=a.isLoading,i=a.error,w=a.sendRequest,b=a.clearError,O=Object(o.useState)(!1),j=Object(l.a)(O,2),k=j[0],y=j[1],C=Object(o.useState)(!1),N=Object(l.a)(C,2),g=N[0],_=N[1],D=function(){return y(!1)},L=function(){_(!1)},I=function(){var a=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return _(!1),a.prev=1,a.next=4,w("https://hyfclass26.herokuapp.com/api"+"/places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:e.onDelete(e.id),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(1);case 9:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(){return a.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:i,onClear:b}),s.a.createElement(d.a,{show:k,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(m.a,{onClick:D}," CLOSE ")},s.a.createElement("div",{className:"map-container"},s.a.createElement(p,{center:e.coordinates,zoom:16}))),s.a.createElement(d.a,{show:g,onCancel:L,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{inverse:!0,onClick:L},"CANCEL"),s.a.createElement(m.a,{danger:!0,onClick:I},"DELETE"))},s.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),s.a.createElement("li",{className:"place-item"},s.a.createElement(u.a,{className:"place-item__content"},n&&s.a.createElement(f.a,{asOverlay:!0}),s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://hyfclass26.herokuapp.com","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(m.a,{inverse:!0,onClick:function(){return y(!0)}},"VIEW ON MAP"),t.userId===e.creatorId&&s.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),t.userId===e.creatorId&&s.a.createElement(m.a,{danger:!0,onClick:function(){_(!0)}},"DELETE")))))}),b=(a(67),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(u.a,null,s.a.createElement("h2",null," No places found. Maybe create one?"),s.a.createElement(m.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(w,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(v.a)(),m=u.isLoading,d=u.error,p=u.sendRequest,h=u.clearError,w=Object(i.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("".concat("https://hyfclass26.herokuapp.com/api","/places/user/").concat(w));case 3:t=e.sent,n(t.places),console.lod(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[p,w]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{error:d,onClear:h}),m&&s.a.createElement("div",{className:"center"},s.a.createElement(f.a,null)),!m&&a&&s.a.createElement(b,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}))}}}]);
//# sourceMappingURL=7.e464e540.chunk.js.map