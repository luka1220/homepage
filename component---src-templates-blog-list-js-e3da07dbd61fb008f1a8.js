"use strict";(self.webpackChunkluka1220_github_io=self.webpackChunkluka1220_github_io||[]).push([[544],{8845:function(t,e,a){var n=a(977),l=a(5444),s=a(2359);e.Z=({data:t})=>(0,n.tZ)("article",{className:"post-card",sx:{bg:"cardBg"}},t.frontmatter.featuredImage?(0,n.tZ)(l.Link,{to:t.frontmatter.slug},(0,n.tZ)(s.G,{image:t.frontmatter.featuredImage.childImageSharp.gatsbyImageData,alt:t.frontmatter.title+" - Featured image",className:"featured-image"})):"",(0,n.tZ)("div",{className:"post-content"},(0,n.tZ)("h2",{className:"title"},(0,n.tZ)(l.Link,{to:t.frontmatter.slug,sx:{variant:"links.postLink"}},t.frontmatter.title)),(0,n.tZ)("p",{className:"meta",sx:{color:"muted"}},(0,n.tZ)("time",null,t.frontmatter.date))))},5166:function(t,e,a){a.r(e);var n=a(977),l=a(7294),s=a(5444),r=a(2309),o=a(4832),i=a(8845),g=a(3751);const m={pagination:{a:{color:"muted","&.is-active":{color:"text"},"&:hover":{color:"text"}}}},u=t=>(0,n.tZ)("div",{className:"pagination",sx:m.pagination},(0,n.tZ)("ul",null,!t.isFirst&&(0,n.tZ)("li",null,(0,n.tZ)(s.Link,{to:t.prevPage,rel:"prev"},(0,n.tZ)("span",{className:"icon -left"},(0,n.tZ)(r.YG0,null))," ","Previous")),Array.from({length:t.numPages},((e,a)=>(0,n.tZ)("li",{key:`pagination-number${a+1}`},(0,n.tZ)(s.Link,{to:`${t.blogSlug}${0===a?"":a+1}`,className:t.currentPage===a+1?"is-active num":"num"},a+1)))),!t.isLast&&(0,n.tZ)("li",null,(0,n.tZ)(s.Link,{to:t.nextPage,rel:"next"},"Next"," ",(0,n.tZ)("span",{className:"icon -right"},(0,n.tZ)(r.nzV,null))))));class c extends l.Component{render(){const{data:t}=this.props,{currentPage:e,numPages:a}=this.props.pageContext,l="/blog/",s=1===e,r=e===a,m=e-1==1?l:l+(e-1).toString(),c=l+(e+1).toString(),Z=t.allMarkdownRemark.edges.filter((t=>!!t.node.frontmatter.date)).map((t=>(0,n.tZ)(i.Z,{key:t.node.id,data:t.node})));let d={isFirst:s,prevPage:m,numPages:a,blogSlug:l,currentPage:e,isLast:r,nextPage:c};return(0,n.tZ)(o.Z,{className:"blog-page"},(0,n.tZ)(g.Z,{title:"Blog — Page "+e+" of "+a,description:"Stackrole base blog page "+e+" of "+a}),(0,n.tZ)("h1",null,"Blog"),(0,n.tZ)("div",{className:"grids col-1 sm-2 lg-3"},Z),(0,n.tZ)(u,d))}}e.default=c}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-e3da07dbd61fb008f1a8.js.map