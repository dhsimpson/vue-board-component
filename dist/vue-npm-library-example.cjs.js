"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var e=require("vue");var m=(r,o)=>{const a=r.__vccOpts||r;for(const[t,n]of o)a[t]=n;return a};const u=e.defineComponent({name:"boardComponent",props:{boardList:Array,columnList:Array,boardHead:String,boardRow:String,headerCol:String,rowCol:String},methods:{selectParam(r,o){const a=o.param;let t="";return Object.keys(r).find(n=>{a==n&&(t=r[n])}),t}}});function p(r,o,a,t,n,v){return e.openBlock(),e.createElementBlock("section",null,[e.createElementVNode("header",{class:e.normalizeClass([r.boardHead])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.columnList,(l,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["col",r.headerCol]),style:e.normalizeStyle({"max-width":l.maxWidth}),key:s},e.toDisplayString(l.name),7))),128))],2),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.boardList,(l,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["row",r.boardRow]),key:s},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(r.columnList,(c,d)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["col",r.rowCol]),style:e.normalizeStyle({"max-width":c.maxWidth}),key:d},e.toDisplayString(r.selectParam(l,c)),7))),128))],2))),128))])}var i=m(u,[["render",p],["__scopeId","data-v-25cc41ca"]]),k={install:(r,o={name:""})=>{r.component(o.name||"board",i)}};exports.Board=i;exports.default=k;
