(this["webpackJsonpcrypto-tracker"]=this["webpackJsonpcrypto-tracker"]||[]).push([[0],{21:function(e,c,t){},40:function(e,c,t){},41:function(e,c,t){},43:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),s=t(15),r=t.n(s),i=(t(21),t(6)),o=t(16),l=t.n(o),j=(t(40),t(41),t(0));function p(e){var c=e.name,t=e.image,n=e.symbol,a=e.price,s=e.volume,r=e.priceChange,i=e.marketcap;return Object(j.jsx)("div",{className:"coin-container",children:Object(j.jsxs)("div",{className:"coin-row",children:[Object(j.jsxs)("div",{className:"coin",children:[Object(j.jsx)("img",{src:t,alt:"crypto"}),Object(j.jsx)("h1",{children:c}),Object(j.jsx)("p",{className:"coin-symbol",children:n})]}),Object(j.jsxs)("div",{className:"coin-data",children:[Object(j.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(j.jsxs)("p",{className:"coin-volume",children:["$",s.toLocaleString()]}),r<0?Object(j.jsxs)("p",{className:"coin-percentage red",children:[r.toFixed(2),"%"]}):Object(j.jsxs)("p",{className:"coin-percentage green",children:[r.toFixed(2),"%"]}),Object(j.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap:$",i.toLocaleString()]})]})]})})}var m=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),o=r[0],m=r[1];Object(n.useEffect)((function(){l.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(j.jsxs)("div",{className:"coin-app",children:[Object(j.jsxs)("div",{className:"coin-search",children:[Object(j.jsx)("h1",{className:"coin-text",children:"Search Currency"}),Object(j.jsx)("form",{action:"",children:Object(j.jsx)("input",{type:"text",placeholder:"search",className:"coin-input",onChange:function(e){m(e.target.value)}})})]}),d.map((function(e){return Object(j.jsx)(p,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})},d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),d()}},[[43,1,2]]]);
//# sourceMappingURL=main.85371d94.chunk.js.map