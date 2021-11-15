"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7787],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},130:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"counter",title:"Counter"},u=void 0,c={unversionedId:"datatypes/metrics/counter",id:"datatypes/metrics/counter",isDocsHomePage:!1,title:"Counter",description:"A Counter is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received.",source:"@site/docs/datatypes/metrics/counter.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/counter",permalink:"/next/datatypes/metrics/counter",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/counter.md",tags:[],version:"current",frontMatter:{id:"counter",title:"Counter"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/metrics/index"},next:{title:"Gauge",permalink:"/next/datatypes/metrics/gauge"}},s=[{value:"API",id:"api",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," is a metric representing a single numerical value that may be incremented over time. A typical use of this metric would be to track the number of a certain type of request received."),(0,o.kt)("p",null,"With a counter, the quantity of interest is the cumulative value over time, as opposed to a ",(0,o.kt)("a",{parentName:"p",href:"/next/datatypes/metrics/gauge"},"gauge")," where the quantity of interest is the value as of a specific point in time."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"count"))," \u2014 Create a counter which is incremented by 1 every time it is executed successfully. This can be applied to any effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def count(name: String, tags: MetricLabel*): Counter[Any]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"countErrors"))," \u2014 A counter which counts the number of failed executions of the effect it is applied to. This can be applied to any effect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def countErrors(name: String, tags: MetricLabel*): Counter[Any]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"countValue"))," \u2014 This counter can be applied to effects having an output type of Double. The counter will be increased by the value the effect produces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def countValue(name: String, tags: MetricLabel*): Counter[Double]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"countValueWith"))," \u2014 A counter that can be applied to effects having the result type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),". Given the effect produces ",(0,o.kt)("inlineCode",{parentName:"p"},"v: A"),", the counter will be increased by ",(0,o.kt)("inlineCode",{parentName:"p"},"f(v)"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def countValueWith[A](name: String, tags: MetricLabel*)(f: A => Double): Counter[A]\n")),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"We use the counter metric type for any value that increases, such as request counts. Note that we should never use the counter for a value that can decrease."),(0,o.kt)("p",null,"So when we should use counters?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When we want to track a value over time, that only goes up"),(0,o.kt)("li",{parentName:"ul"},"When we want to measure the increasing rate of something, how fast something is growing, such as request rates.")),(0,o.kt)("p",null,"Here are some of the use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Counts"),(0,o.kt)("li",{parentName:"ul"},"Completed Tasks"),(0,o.kt)("li",{parentName:"ul"},"Error Counts")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Create a counter named ",(0,o.kt)("inlineCode",{parentName:"p"},"countAll")," which is incremented by ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," every time it is invoked:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nval countAll = ZIOMetric.count("countAll")\n')),(0,o.kt)("p",null,"Now the counter can be applied to any effect. Note, that the same aspect can be applied to more than one effect. In the example we would count the sum of executions of both effects in the for comprehension:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val myApp = for {\n  _ <- ZIO.unit @@ countAll\n  _ <- ZIO.unit @@ countAll\n} yield ()\n")),(0,o.kt)("p",null,"Or we can apply them in recurrence situations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'(zio.Random.nextIntBounded(10) @@ ZIOMetric.count("request_counts")).repeatUntil(_ == 7)\n')),(0,o.kt)("p",null,"Create a counter named ",(0,o.kt)("inlineCode",{parentName:"p"},"countBytes")," that can be applied to effects having the output type ",(0,o.kt)("inlineCode",{parentName:"p"},"Double"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val countBytes = ZIOMetric.countValue("countBytes")\n')),(0,o.kt)("p",null,"Now we can apply it to effects producing ",(0,o.kt)("inlineCode",{parentName:"p"},"Double")," (in a real application the value might be the number of bytes read from a stream or something similar):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val myApp = Random.nextDoubleBetween(0.0d, 100.0d) @@ countBytes\n")))}m.isMDXComponent=!0}}]);