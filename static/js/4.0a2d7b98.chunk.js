(this["webpackJsonpchuck-norris-facts"]=this["webpackJsonpchuck-norris-facts"]||[]).push([[4],{72:function(t,e,n){},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(13),r=n(14),s=n(16),i=n(15),l=n(22),u=n(17),h=n(6);function m(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n(72);var f=function(t){var e=t.children,n=t.isMoreJokes,a=m(t,["children","isMoreJokes"]);return o.a.createElement("button",Object.assign({className:"".concat(n?"more-jokes":""," custom-button")},a),e)},g=n(20),k=n(23),p=n.n(k),y=(n(73),function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(i.a)(e).call(this))).state={category:"animal",joke:[],isLoading:!1},t.getJokeByCategory=t.getJokeByCategory.bind(Object(l.a)(t)),t}return Object(u.a)(e,t),Object(r.a)(e,[{key:"getJokeByCategory",value:function(){var t=this;this.setState({isLoading:!1}),p.a.get("https://api.chucknorris.io/jokes/random?category=".concat(this.props.match.params[0])).then((function(e){t.setState({isLoading:!0,joke:e.data})})).catch((function(t){console.log(t)}))}},{key:"componentDidMount",value:function(){var t=this;p.a.get("https://api.chucknorris.io/jokes/random?category=".concat(this.props.match.params[0])).then((function(e){console.log(e.data),t.setState({isLoading:!0,joke:e.data})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){if(!this.state.isLoading)return o.a.createElement(g.a,null);console.log(this.props.match.params[0]);var t=this.state.joke.value;return o.a.createElement("div",{className:"joke-directory"},o.a.createElement("p",{className:"joke-directory__text"},'"'.concat(t,'"')),o.a.createElement("div",null,o.a.createElement(f,{isMoreJokes:!0,onClick:this.getJokeByCategory},"One more Fact...")))}}]),e}(a.Component)),d=Object(h.f)(y);n(74),e.default=function(){return o.a.createElement("main",{className:"category"},o.a.createElement(d,null))}}}]);
//# sourceMappingURL=4.0a2d7b98.chunk.js.map