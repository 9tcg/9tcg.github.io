"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return s}});var a=l(7294),n=(l(4854),l(2345)),o=l(9357),r=l(2416);t.default=e=>{var t;let{data:l,location:o}=e;const s=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=l.allMarkdownRemark.nodes,[i,d]=a.useState(""),[u,h]=a.useState(""),f={width:"400px",height:"560px"};return console.log(c),console.log("随机一卡"),a.useEffect((()=>{const e=(t=0,l=c.length-1,t=Math.ceil(t),l=Math.floor(l),Math.floor(Math.random()*(l-t+1))+t);var t,l;console.log(e),d("/cards/"+c[e].frontmatter.id+".png"),h("/"+c[e].frontmatter.id)}),[]),a.createElement(n.Z,{location:o,title:s},a.createElement("div",null,a.createElement("h2",null,"随机一卡"),i,a.createElement("a",{key:u,href:u},a.createElement(r.C,{key:i,style:f,scale:1,shadowEnable:!0,lineGlareEnable:!1,spotGlarePosition:"all",borderRadius:"18px"},a.createElement("img",{key:i,src:i,style:f})))))};const s=()=>a.createElement(o.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-dfb1fde1fa87bf154ff5.js.map