(()=>{"use strict";var e,t,i,o,r,p,s={465:(e,t)=>{t.__esModule=!0,t.default={products:[{id:"1",title:"Arroz",precio:1500},{id:"2",title:"Leche",precio:8500},{id:"3",title:"Cafe",precio:6e3},{id:"4",title:"Chocolate",precio:5400},{id:"5",title:"Mantequilla",precio:6500},{id:"6",title:"Jamon",precio:1200},{id:"7",title:"Queso",precio:3500},{id:"8",title:"Pan",precio:2300},{id:"9",title:"Cereal",precio:1500},{id:"10",title:"Avena",precio:1200}]}},582:e=>{e.exports=require("cors")},860:e=>{e.exports=require("express")}},n={};function c(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return s[e](i,i.exports,c),i.exports}e=c(860),t=c(582),i=c(465),o=e(),r=process.env.PORT||3006,p={allowedHeaders:["Origin","X-Requested-With","Content-Type","Accept","X-Access-Token"],credentials:!0,methods:"GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",origin:"https://listacompras-ts.herokuapp.com/api/v1",preflightContinue:!1},e.Router().use(t(p)),o.get("/",(function(e,t){t.send("Hello TypeScript v2")})),o.get("/api/v1",(function(e,t){t.json(i.default)})),o.listen(r,(function(){console.log("App Listinging on port: "+r)}))})();