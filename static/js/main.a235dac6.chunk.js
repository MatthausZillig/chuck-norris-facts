(this["webpackJsonpchuck-norris-facts"]=this["webpackJsonpchuck-norris-facts"]||[]).push([[0],{20:function(t,e,n){"use strict";var c=n(0),a=n.n(c);n(49);e.a=function(){return a.a.createElement("div",{className:"spinner"},a.a.createElement("div",{className:"spinner__loading"}))}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var c=n(36),a=n(13),r=n(14),o=n(16),s=n(15),u=n(17),i=n(0),m=n.n(i),l=n(23),h=n.n(l),O=Object(i.createContext)(),V=function(t){function e(){var t;return Object(a.a)(this,e),(t=Object(o.a)(this,Object(s.a)(e).call(this))).state={data:[]},t}return Object(u.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.chucknorris.io/jokes/categories").then((function(e){t.setState({data:e.data},console.log(t.state.data))})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return m.a.createElement(O.Provider,{value:Object(c.a)({},this.state)},this.props.children)}}]),e}(i.Component);e.b=V},33:function(t,e){t.exports="data:image/png;base64,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"},37:function(t,e,n){t.exports=n(68)},42:function(t,e,n){},43:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(32),o=n.n(r),s=n(8),u=(n(42),n(6)),i=n(33),m=n.n(i),l=(n(43),function(){return a.a.createElement("div",{className:"header"},a.a.createElement(s.b,{className:"header__logo",to:"/"},a.a.createElement("img",{className:"header__src",src:m.a,alt:"Chuck Norris icon"})),a.a.createElement("div",{className:"header__content"},a.a.createElement("h1",{className:"header__content__text"},"CHUCK NORRIS FACTS!")))}),h=n(20),O=(n(50),n(21)),V=a.a.lazy((function(){return n.e(3).then(n.bind(null,76))})),d=a.a.lazy((function(){return n.e(4).then(n.bind(null,75))}));var k=function(){return a.a.createElement(O.b,null,a.a.createElement("main",null,a.a.createElement(c.Suspense,{fallback:a.a.createElement(h.a,null)},a.a.createElement(l,null),a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:V}),a.a.createElement(u.a,{exact:!0,path:"/*",component:d})))))};o.a.render(a.a.createElement(s.a,null,a.a.createElement(k,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a235dac6.chunk.js.map