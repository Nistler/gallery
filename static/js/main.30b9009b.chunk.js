(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),l=(a(15),a(1)),i=a.n(l),s=a(2),m=a(3),u=a(4),d=a(6),g=a(5),p=(a(17),a(9)),h=(a(18),function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;Object(m.a)(this,a),(n=t.call(this,e)).handleKeyUp=function(e){var t=n.props.toggleModal,a={27:function(){t(null)(e),window.removeEventListener("keyup",n.handleKeyUp,!1)}};a[e.keyCode]&&a[e.keyCode]()},n.getImageDetails=Object(s.a)(i.a.mark((function e(){var t,a,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.id,e.next=3,fetch("https://boiling-refuge-66454.herokuapp.com/images/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:o=e.sent,n.setState({imageUrl:o.url,comments:o.comments,isLoading:!1});case 8:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){var t=e.target,a=t.name,o=t.value;"name"!==a?n.setState({comment:o}):n.setState({name:o})},n.handleSubmit=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,o,c,r,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,o=a.name,c=a.comment,r=a.id,l=a.comments,e.prev=2,e.next=5,fetch("https://boiling-refuge-66454.herokuapp.com/images/".concat(r,"/comments"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({name:o,comment:c})});case 5:if(e.sent.ok){e.next=8;break}throw new Error("response not 'OK'");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("Fetch request error:",e.t0.message);case 13:s=[].concat(Object(p.a)(l),[{id:99,text:c,date:new Date}]),n.setState({name:"",comment:"",comments:s});case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();var o=n.props.id;return n.state={id:o,imageUrl:null,comments:[],name:"",comment:"",isLoading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keyup",this.handleKeyUp,!1),document.body.style.overflow="hidden",this.getImageDetails()}},{key:"componentWillUnmount",value:function(){document.body.style.overflow="initial",window.removeEventListener("keyup",this.handleKeyUp,!1)}},{key:"render",value:function(){var e=this.props.toggleModal,t=this.state,a=t.imageUrl,n=t.comments,c=t.name,r=t.comment,l=t.isLoading;return o.a.createElement("article",{className:"modal-window"},o.a.createElement("div",{className:"modal-container"},o.a.createElement("section",{className:"modal-content"},o.a.createElement("div",{className:"img-container"},l?o.a.createElement("div",{className:"donut"}):o.a.createElement("img",{className:"modal-img",src:a,alt:""}))),o.a.createElement("section",{className:"modal-comments"},n.length<1?o.a.createElement("div",{className:"comment comment-placeholder"},"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0435\u0442"):n.map((function(e){var t=e.id,a=e.text,n=e.date;return o.a.createElement("article",{className:"comment",id:t,key:t},o.a.createElement("time",{className:"modal-date"},function(e){var t=new Date(e),a=t.getDate(),n=t.getMonth()+1,o=t.getFullYear();return"".concat(a<10?"0".concat(a):a,".").concat(n<10?"0".concat(n):n,".").concat(o)}(n)),o.a.createElement("div",{className:"modal-comment"},a))}))),o.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},o.a.createElement("input",{className:"form-input",type:"text",name:"name",required:!0,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:c,onChange:this.handleChange}),o.a.createElement("input",{className:"form-input",type:"text",name:"comment",required:!0,value:r,placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",onChange:this.handleChange}),o.a.createElement("input",{className:"send-comment-button",type:"submit",value:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}))),o.a.createElement("div",{className:"close",onClick:e(null)}))}}]),a}(n.Component)),v=function(e){Object(d.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).getGallery=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://boiling-refuge-66454.herokuapp.com/images");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("failed to load gallery");case 6:return e.next=8,t.json();case 8:a=e.sent,n.setState({gallery:a,isLoading:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error: ",e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])}))),n.toggleModal=function(e){return function(t){t.preventDefault();var a=n.state.isModalActive;n.setState({isModalActive:!a,imageModalId:e})}},n.state={gallery:[],isModalActive:!1,imageModalId:null,isLoading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getGallery()}},{key:"render",value:function(){var e=this,t=this.state,a=t.gallery,n=t.imageModalId,c=t.isModalActive,r=t.isLoading,l=c?"gallery-container modal-opened":"gallery-container";return o.a.createElement("section",{className:"main-container"},o.a.createElement("h1",{className:"main-header"},"Gallery"),r?o.a.createElement("div",{className:"donut"}):o.a.createElement("article",{className:l},a.map((function(t){return o.a.createElement("img",{className:"main-img",key:t.id,src:t.url,alt:"",onClick:e.toggleModal(t.id)})}))),c&&o.a.createElement(h,{id:n,toggleModal:this.toggleModal}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.30b9009b.chunk.js.map