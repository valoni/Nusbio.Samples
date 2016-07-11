﻿String.prototype.decapitalize=function(){for(var t=this,n=t.replace(/([A-Z]+)/g," $1").replace(/([A-Z][a-z])/g," $1").replace(/_/g," ").replace(/-/g," ");n.indexOf("  ")!==-1;)n=n.replace(/  /g," ");return n=n.trim(),n.replace(/(\S)(\S*)/g,function(n,t,i){return t.toUpperCase()+i})};String.prototype.remove=function(n,t){return typeof t=="undefined"&&(t=this.length),this.slice(0,n)+this.slice(n+t)};String.prototype.insert=function(n,t){return this.slice(0,n)+t+this.slice(n)};String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()};String.prototype.leftPad=function(n,t){for(var i=this;i.length<t;)i=n+i;return i};String.prototype.rightPad=function(n,t){for(var i=this;i.length<t;)i=i+n;return i};String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")};String.prototype.leftTrim=function(){return this.replace(/^\s+/,"")};String.prototype.rightTrim=function(){return this.replace(/\s+$/,"")};String.prototype.contains=function(n){var t=this.indexOf(n);return t!==-1};String.prototype.replaceAll=function(n,t){for(var i=this;i.contains(n);)i=i.replace(n,t);return i};String.prototype.startsWith=function(n){return this.indexOf(n)===0};String.prototype.endsWith=function(n){var t=this.lastIndexOf(n);return t!=-1&&t+n.length==this.length};String.prototype.format=function(){var t=this,r,u,n,i;if(arguments.length!==1||typeof arguments[0]!="object"||Array.isArray(arguments[0])){if(t.indexOf("{")==-1)throw new Error("format string '"+t+"' should contains at least one parameters");for(n=0;n<arguments.length;n++)i=arguments[n],Array.isArray(i)&&i.format&&(i=i.format()),t=t.replace(new RegExp("\\{"+n+"\\}","gm"),i)}else for(n=0;n<arguments.length;n++){r=arguments[n];for(u in r)t=t.replace(new RegExp("{"+u+"}","g"),r[u])}return t};String.format=function(){for(var n=1;n<arguments.length;n++)arguments[0]=arguments[0].replace(new RegExp("\\{"+(n-1)+"\\}","gm"),arguments[n]);return arguments[0]};
/*
//# sourceMappingURL=String.min.js.map
*/