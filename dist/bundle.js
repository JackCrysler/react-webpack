webpackJsonp([0],{184:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(){console.log("close")}function a(){console.log("想放什么都可以")}function u(){console.log("不猜")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(185),p=o(f),b=n(14),d=o(b),h=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.showDialog=n.showDialog.bind(n),n}return l(t,e),s(t,[{key:"componentDidMount",value:function(){}},{key:"showDialog",value:function(){this.refs.tips.show()}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("header",null,"头部"),d.default.createElement("section",null,"主体 ",d.default.createElement("button",{onClick:this.showDialog},"对话框")),d.default.createElement("footer",null,"页脚"),d.default.createElement(p.default,{ref:"tips",title:"测试Dialog组件的使用",onclose:c,oncertain:a,oncancel:u},"你猜我会放什么进来"))}}]),t}(b.Component);t.default=h},185:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(186),u=o(a),s=n(188),f=n(14),p=o(f),b=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isVisible:!1},n.show=n.show.bind(n),n.hide=n.hide.bind(n),n}return l(t,e),c(t,[{key:"show",value:function(){this.setState(function(e){e.isVisible=!0})}},{key:"hide",value:function(){this.setState(function(e){this.props.onclose(),e.isVisible=!1})}},{key:"componentWillMount",value:function(){this.callbacks={certain:this.props.oncertain,cancel:this.props.oncancel}}},{key:"render",value:function(){return this.state.isVisible?p.default.createElement(s.Masker,null,p.default.createElement(u.default,{title:this.props.title,close:this.hide,callbacks:this.callbacks},this.props.children)):p.default.createElement("div",null)}}]),t}(f.Component);t.default=b},186:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(187),u=o(a),s=n(14),f=o(s),p={position:"absolute",left:"50%",top:"50%",transform:"translate3d(-50%,-50%,0)",background:"#fff",color:"#000",padding:"10px 0",maxWidth:"80%",minWidth:"30%",wordWrap:"break-word"},b={height:"38px",lineHeight:"38px",padding:"0 10px"},d={padding:"10px 15px 15px",lineHeight:"24px",textAlign:"center"},h={display:"flex",justifyContent:"center",alignItems:"center"},y=function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.callbacks}},{key:"render",value:function(){return f.default.createElement("div",{style:p},f.default.createElement("div",{className:"title",style:b},this.props.title),f.default.createElement("div",{className:"content",style:d},this.props.children),f.default.createElement("div",{className:"btns",style:h},f.default.createElement(u.default,{type:"certain",close:this.props.close,callback:this.props.callbacks.certain}),f.default.createElement(u.default,{type:"cancel",close:this.props.close,callback:this.props.callbacks.cancel})))}}]),t}(s.Component);t.default=y},187:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return Object.assign({},t,e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(14),u=function(e){return e&&e.__esModule?e:{default:e}}(a),s={outline:"none",padding:"8px 25px",border:"5px solid #ccc",margin:"0 5px"},f=l(s,{background:"lightblue",color:"#fff"}),p=l(s,{background:"pink",color:"#fff"}),b=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.close=n.close.bind(n),n}return i(t,e),c(t,[{key:"close",value:function(){this.props.callback(),this.props.close()}},{key:"render",value:function(){switch(this.props.type){case"certain":return u.default.createElement("button",{className:"btn",style:f,onClick:this.close},"确定");case"cancel":return u.default.createElement("button",{className:"btn",style:p,onClick:this.close},"取消");case"close":return u.default.createElement("button",{className:"btn"},"关闭");default:return u.default.createElement("button",{className:"btn"},"确定")}}}]),t}(a.Component);t.default=b},188:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Masker=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(14),a=function(e){return e&&e.__esModule?e:{default:e}}(c),u={position:"fixed",left:0,top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.7)",zIndex:98},s=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),l(t,[{key:"render",value:function(){return a.default.createElement("div",{className:"mask",style:u},this.props.children)}}]),t}(c.Component);t.Masker=s},83:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(14),i=o(r),l=n(57),c=o(l),a=n(184),u=o(a);c.default.render(i.default.createElement(u.default,null),document.getElementById("root"))}},[83]);