(window.wpJsonpFlightsWidget=window.wpJsonpFlightsWidget||[]).push([[4],{gOVs:function(t,e,i){"use strict";i.d(e,"a",(function(){return T}));var n=i("9JXS"),s={nbsp:" "},o=/^#[xX]([A-Fa-f0-9]+)$/,a=/^#([0-9]+)$/,r=/^([A-Za-z0-9]+)$/,h=function(){function t(t){this.named=t}return t.prototype.parse=function(t){if(t){var e=t.match(o);return e?"&#x"+e[1]+";":(e=t.match(a))?"&#"+e[1]+";":(e=t.match(r))?this.named[e[1]]||"&"+e[1]+";":void 0}},t}(),u=/[\t\n\f ]/,c=/[A-Za-z]/,p=/\r\n?/g;function d(t){return u.test(t)}function f(t){return c.test(t)}var l=function(){function t(t,e,i){void 0===i&&(i="precompile"),this.delegate=t,this.entityParser=e,this.mode=i,this.state="beforeData",this.line=-1,this.column=-1,this.input="",this.index=-1,this.tagNameBuffer="",this.states={beforeData:function(){var t=this.peek();if("<"!==t||this.isIgnoredEndTag()){if("precompile"===this.mode&&"\n"===t){var e=this.tagNameBuffer.toLowerCase();"pre"!==e&&"textarea"!==e||this.consume()}this.transitionTo("data"),this.delegate.beginData()}else this.transitionTo("tagOpen"),this.markTagStart(),this.consume()},data:function(){var t=this.peek(),e=this.tagNameBuffer;"<"!==t||this.isIgnoredEndTag()?"&"===t&&"script"!==e&&"style"!==e?(this.consume(),this.delegate.appendToData(this.consumeCharRef()||"&")):(this.consume(),this.delegate.appendToData(t)):(this.delegate.finishData(),this.transitionTo("tagOpen"),this.markTagStart(),this.consume())},tagOpen:function(){var t=this.consume();"!"===t?this.transitionTo("markupDeclarationOpen"):"/"===t?this.transitionTo("endTagOpen"):("@"===t||":"===t||f(t))&&(this.transitionTo("tagName"),this.tagNameBuffer="",this.delegate.beginStartTag(),this.appendToTagName(t))},markupDeclarationOpen:function(){var t=this.consume();"-"===t&&"-"===this.peek()?(this.consume(),this.transitionTo("commentStart"),this.delegate.beginComment()):"DOCTYPE"===t.toUpperCase()+this.input.substring(this.index,this.index+6).toUpperCase()&&(this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.transitionTo("doctype"),this.delegate.beginDoctype&&this.delegate.beginDoctype())},doctype:function(){d(this.consume())&&this.transitionTo("beforeDoctypeName")},beforeDoctypeName:function(){var t=this.consume();d(t)||(this.transitionTo("doctypeName"),this.delegate.appendToDoctypeName&&this.delegate.appendToDoctypeName(t.toLowerCase()))},doctypeName:function(){var t=this.consume();d(t)?this.transitionTo("afterDoctypeName"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeName&&this.delegate.appendToDoctypeName(t.toLowerCase())},afterDoctypeName:function(){var t=this.consume();if(!d(t))if(">"===t)this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData");else{var e=t.toUpperCase()+this.input.substring(this.index,this.index+5).toUpperCase(),i="PUBLIC"===e.toUpperCase(),n="SYSTEM"===e.toUpperCase();(i||n)&&(this.consume(),this.consume(),this.consume(),this.consume(),this.consume(),this.consume()),i?this.transitionTo("afterDoctypePublicKeyword"):n&&this.transitionTo("afterDoctypeSystemKeyword")}},afterDoctypePublicKeyword:function(){var t=this.peek();d(t)?(this.transitionTo("beforeDoctypePublicIdentifier"),this.consume()):'"'===t?(this.transitionTo("doctypePublicIdentifierDoubleQuoted"),this.consume()):"'"===t?(this.transitionTo("doctypePublicIdentifierSingleQuoted"),this.consume()):">"===t&&(this.consume(),this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData"))},doctypePublicIdentifierDoubleQuoted:function(){var t=this.consume();'"'===t?this.transitionTo("afterDoctypePublicIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypePublicIdentifier&&this.delegate.appendToDoctypePublicIdentifier(t)},doctypePublicIdentifierSingleQuoted:function(){var t=this.consume();"'"===t?this.transitionTo("afterDoctypePublicIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypePublicIdentifier&&this.delegate.appendToDoctypePublicIdentifier(t)},afterDoctypePublicIdentifier:function(){var t=this.consume();d(t)?this.transitionTo("betweenDoctypePublicAndSystemIdentifiers"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):'"'===t?this.transitionTo("doctypeSystemIdentifierDoubleQuoted"):"'"===t&&this.transitionTo("doctypeSystemIdentifierSingleQuoted")},betweenDoctypePublicAndSystemIdentifiers:function(){var t=this.consume();d(t)||(">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):'"'===t?this.transitionTo("doctypeSystemIdentifierDoubleQuoted"):"'"===t&&this.transitionTo("doctypeSystemIdentifierSingleQuoted"))},doctypeSystemIdentifierDoubleQuoted:function(){var t=this.consume();'"'===t?this.transitionTo("afterDoctypeSystemIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeSystemIdentifier&&this.delegate.appendToDoctypeSystemIdentifier(t)},doctypeSystemIdentifierSingleQuoted:function(){var t=this.consume();"'"===t?this.transitionTo("afterDoctypeSystemIdentifier"):">"===t?(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData")):this.delegate.appendToDoctypeSystemIdentifier&&this.delegate.appendToDoctypeSystemIdentifier(t)},afterDoctypeSystemIdentifier:function(){var t=this.consume();d(t)||">"===t&&(this.delegate.endDoctype&&this.delegate.endDoctype(),this.transitionTo("beforeData"))},commentStart:function(){var t=this.consume();"-"===t?this.transitionTo("commentStartDash"):">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData(t),this.transitionTo("comment"))},commentStartDash:function(){var t=this.consume();"-"===t?this.transitionTo("commentEnd"):">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData("-"),this.transitionTo("comment"))},comment:function(){var t=this.consume();"-"===t?this.transitionTo("commentEndDash"):this.delegate.appendToCommentData(t)},commentEndDash:function(){var t=this.consume();"-"===t?this.transitionTo("commentEnd"):(this.delegate.appendToCommentData("-"+t),this.transitionTo("comment"))},commentEnd:function(){var t=this.consume();">"===t?(this.delegate.finishComment(),this.transitionTo("beforeData")):(this.delegate.appendToCommentData("--"+t),this.transitionTo("comment"))},tagName:function(){var t=this.consume();d(t)?this.transitionTo("beforeAttributeName"):"/"===t?this.transitionTo("selfClosingStartTag"):">"===t?(this.delegate.finishTag(),this.transitionTo("beforeData")):this.appendToTagName(t)},endTagName:function(){var t=this.consume();d(t)?(this.transitionTo("beforeAttributeName"),this.tagNameBuffer=""):"/"===t?(this.transitionTo("selfClosingStartTag"),this.tagNameBuffer=""):">"===t?(this.delegate.finishTag(),this.transitionTo("beforeData"),this.tagNameBuffer=""):this.appendToTagName(t)},beforeAttributeName:function(){var t=this.peek();d(t)?this.consume():"/"===t?(this.transitionTo("selfClosingStartTag"),this.consume()):">"===t?(this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):"="===t?(this.delegate.reportSyntaxError("attribute name cannot start with equals sign"),this.transitionTo("attributeName"),this.delegate.beginAttribute(),this.consume(),this.delegate.appendToAttributeName(t)):(this.transitionTo("attributeName"),this.delegate.beginAttribute())},attributeName:function(){var t=this.peek();d(t)?(this.transitionTo("afterAttributeName"),this.consume()):"/"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"="===t?(this.transitionTo("beforeAttributeValue"),this.consume()):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):'"'===t||"'"===t||"<"===t?(this.delegate.reportSyntaxError(t+" is not a valid character within attribute names"),this.consume(),this.delegate.appendToAttributeName(t)):(this.consume(),this.delegate.appendToAttributeName(t))},afterAttributeName:function(){var t=this.peek();d(t)?this.consume():"/"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"="===t?(this.consume(),this.transitionTo("beforeAttributeValue")):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.transitionTo("attributeName"),this.delegate.beginAttribute(),this.consume(),this.delegate.appendToAttributeName(t))},beforeAttributeValue:function(){var t=this.peek();d(t)?this.consume():'"'===t?(this.transitionTo("attributeValueDoubleQuoted"),this.delegate.beginAttributeValue(!0),this.consume()):"'"===t?(this.transitionTo("attributeValueSingleQuoted"),this.delegate.beginAttributeValue(!0),this.consume()):">"===t?(this.delegate.beginAttributeValue(!1),this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.transitionTo("attributeValueUnquoted"),this.delegate.beginAttributeValue(!1),this.consume(),this.delegate.appendToAttributeValue(t))},attributeValueDoubleQuoted:function(){var t=this.consume();'"'===t?(this.delegate.finishAttributeValue(),this.transitionTo("afterAttributeValueQuoted")):"&"===t?this.delegate.appendToAttributeValue(this.consumeCharRef()||"&"):this.delegate.appendToAttributeValue(t)},attributeValueSingleQuoted:function(){var t=this.consume();"'"===t?(this.delegate.finishAttributeValue(),this.transitionTo("afterAttributeValueQuoted")):"&"===t?this.delegate.appendToAttributeValue(this.consumeCharRef()||"&"):this.delegate.appendToAttributeValue(t)},attributeValueUnquoted:function(){var t=this.peek();d(t)?(this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("beforeAttributeName")):"/"===t?(this.delegate.finishAttributeValue(),this.consume(),this.transitionTo("selfClosingStartTag")):"&"===t?(this.consume(),this.delegate.appendToAttributeValue(this.consumeCharRef()||"&")):">"===t?(this.delegate.finishAttributeValue(),this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):(this.consume(),this.delegate.appendToAttributeValue(t))},afterAttributeValueQuoted:function(){var t=this.peek();d(t)?(this.consume(),this.transitionTo("beforeAttributeName")):"/"===t?(this.consume(),this.transitionTo("selfClosingStartTag")):">"===t?(this.consume(),this.delegate.finishTag(),this.transitionTo("beforeData")):this.transitionTo("beforeAttributeName")},selfClosingStartTag:function(){">"===this.peek()?(this.consume(),this.delegate.markTagAsSelfClosing(),this.delegate.finishTag(),this.transitionTo("beforeData")):this.transitionTo("beforeAttributeName")},endTagOpen:function(){var t=this.consume();("@"===t||":"===t||f(t))&&(this.transitionTo("endTagName"),this.tagNameBuffer="",this.delegate.beginEndTag(),this.appendToTagName(t))}},this.reset()}return t.prototype.reset=function(){this.transitionTo("beforeData"),this.input="",this.tagNameBuffer="",this.index=0,this.line=1,this.column=0,this.delegate.reset()},t.prototype.transitionTo=function(t){this.state=t},t.prototype.tokenize=function(t){this.reset(),this.tokenizePart(t),this.tokenizeEOF()},t.prototype.tokenizePart=function(t){for(this.input+=function(t){return t.replace(p,"\n")}(t);this.index<this.input.length;){var e=this.states[this.state];if(void 0===e)throw new Error("unhandled state "+this.state);e.call(this)}},t.prototype.tokenizeEOF=function(){this.flushData()},t.prototype.flushData=function(){"data"===this.state&&(this.delegate.finishData(),this.transitionTo("beforeData"))},t.prototype.peek=function(){return this.input.charAt(this.index)},t.prototype.consume=function(){var t=this.peek();return this.index++,"\n"===t?(this.line++,this.column=0):this.column++,t},t.prototype.consumeCharRef=function(){var t=this.input.indexOf(";",this.index);if(-1!==t){var e=this.input.slice(this.index,t),i=this.entityParser.parse(e);if(i){for(var n=e.length;n;)this.consume(),n--;return this.consume(),i}}},t.prototype.markTagStart=function(){this.delegate.tagOpen()},t.prototype.appendToTagName=function(t){this.tagNameBuffer+=t,this.delegate.appendToTagName(t)},t.prototype.isIgnoredEndTag=function(){var t=this.tagNameBuffer;return"title"===t&&"</title>"!==this.input.substring(this.index,this.index+8)||"style"===t&&"</style>"!==this.input.substring(this.index,this.index+8)||"script"===t&&"<\/script>"!==this.input.substring(this.index,this.index+9)},t}(),g=function(){function t(t,e){void 0===e&&(e={}),this.options=e,this.token=null,this.startLine=1,this.startColumn=0,this.tokens=[],this.tokenizer=new l(this,t,e.mode),this._currentAttribute=void 0}return t.prototype.tokenize=function(t){return this.tokens=[],this.tokenizer.tokenize(t),this.tokens},t.prototype.tokenizePart=function(t){return this.tokens=[],this.tokenizer.tokenizePart(t),this.tokens},t.prototype.tokenizeEOF=function(){return this.tokens=[],this.tokenizer.tokenizeEOF(),this.tokens[0]},t.prototype.reset=function(){this.token=null,this.startLine=1,this.startColumn=0},t.prototype.current=function(){var t=this.token;if(null===t)throw new Error("token was unexpectedly null");if(0===arguments.length)return t;for(var e=0;e<arguments.length;e++)if(t.type===arguments[e])return t;throw new Error("token type was unexpectedly "+t.type)},t.prototype.push=function(t){this.token=t,this.tokens.push(t)},t.prototype.currentAttribute=function(){return this._currentAttribute},t.prototype.addLocInfo=function(){this.options.loc&&(this.current().loc={start:{line:this.startLine,column:this.startColumn},end:{line:this.tokenizer.line,column:this.tokenizer.column}}),this.startLine=this.tokenizer.line,this.startColumn=this.tokenizer.column},t.prototype.beginDoctype=function(){this.push({type:"Doctype",name:""})},t.prototype.appendToDoctypeName=function(t){this.current("Doctype").name+=t},t.prototype.appendToDoctypePublicIdentifier=function(t){var e=this.current("Doctype");void 0===e.publicIdentifier?e.publicIdentifier=t:e.publicIdentifier+=t},t.prototype.appendToDoctypeSystemIdentifier=function(t){var e=this.current("Doctype");void 0===e.systemIdentifier?e.systemIdentifier=t:e.systemIdentifier+=t},t.prototype.endDoctype=function(){this.addLocInfo()},t.prototype.beginData=function(){this.push({type:"Chars",chars:""})},t.prototype.appendToData=function(t){this.current("Chars").chars+=t},t.prototype.finishData=function(){this.addLocInfo()},t.prototype.beginComment=function(){this.push({type:"Comment",chars:""})},t.prototype.appendToCommentData=function(t){this.current("Comment").chars+=t},t.prototype.finishComment=function(){this.addLocInfo()},t.prototype.tagOpen=function(){},t.prototype.beginStartTag=function(){this.push({type:"StartTag",tagName:"",attributes:[],selfClosing:!1})},t.prototype.beginEndTag=function(){this.push({type:"EndTag",tagName:""})},t.prototype.finishTag=function(){this.addLocInfo()},t.prototype.markTagAsSelfClosing=function(){this.current("StartTag").selfClosing=!0},t.prototype.appendToTagName=function(t){this.current("StartTag","EndTag").tagName+=t},t.prototype.beginAttribute=function(){this._currentAttribute=["","",!1]},t.prototype.appendToAttributeName=function(t){this.currentAttribute()[0]+=t},t.prototype.beginAttributeValue=function(t){this.currentAttribute()[2]=t},t.prototype.appendToAttributeValue=function(t){this.currentAttribute()[1]+=t},t.prototype.finishAttributeValue=function(){this.current("StartTag").attributes.push(this._currentAttribute)},t.prototype.reportSyntaxError=function(t){this.current().syntaxError=t},t}();function m(t,e){return new g(new h(s),e).tokenize(t)}var b=n.a;function T(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=m(t),n=[],s=[];e=new b(e);for(var o=0;o<i.length;o++){var a=i[o];if("StartTag"!==a.type)if("Chars"===a.type){var r=y(a.chars,e);n.push.apply(n,r)}else n.push(a);else{n.push(a);var h=a.tagName.toUpperCase(),u="A"===h||e.ignoreTags.indexOf(h)>=0;if(!u)continue;var c=n.length;D(h,i,++o,n),o+=n.length-c-1}}for(var p=0;p<n.length;p++){var d=n[p];switch(d.type){case"StartTag":var f="<"+d.tagName;if(d.attributes.length>0){var l=v(d.attributes);f+=" "+l.join(" ")}f+=">",s.push(f);break;case"EndTag":s.push("</".concat(d.tagName,">"));break;case"Chars":s.push(d.chars);break;case"Comment":s.push("\x3c!--".concat(d.chars,"--\x3e"));break;case"Doctype":var g="<!DOCTYPE ".concat(d.name);d.publicIdentifier&&(g+=' PUBLIC "'.concat(d.publicIdentifier,'"')),d.systemIdentifier&&(g+=' "'.concat(d.systemIdentifier,'"')),g+=">",s.push(g)}}return s.join("")}function y(t,e){for(var i=n.b(t),s=[],o=0;o<i.length;o++){var a=i[o];if("nl"===a.t&&e.nl2br)s.push({type:"StartTag",tagName:"br",attributes:[],selfClosing:!0});else if(a.isLink&&e.check(a)){var r=e.resolve(a),h=r.formatted,u=r.formattedHref,c=r.tagName,p=r.className,d=r.target,f=r.rel,l=r.attributes,g=r.truncate,m=[["href",u]];for(var b in p&&m.push(["class",p]),d&&m.push(["target",d]),f&&m.push(["rel",f]),g&&h.length>g&&(h=h.substring(0,g)+"…"),l)m.push([b,l[b]]);s.push({type:"StartTag",tagName:c,attributes:m,selfClosing:!1}),s.push({type:"Chars",chars:h}),s.push({type:"EndTag",tagName:c})}else s.push({type:"Chars",chars:a.toString()})}return s}function D(t,e,i,n){for(var s=1;i<e.length&&s>0;){var o=e[i];"StartTag"===o.type&&o.tagName.toUpperCase()===t?s++:"EndTag"===o.type&&o.tagName.toUpperCase()===t&&s--,n.push(o),i++}return n}function v(t){for(var e=[],i=0;i<t.length;i++){var n=t[i][0],s=t[i][1];e.push("".concat(n,'="').concat(s.replace(/"/g,"&quot;"),'"'))}return e}},j9ot:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("9JXS");function s(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o(t){return t.replace(/"/g,"&quot;")}function a(t){if(!t)return"";var e=[];for(var i in t){var n=t[i]+"";e.push("".concat(i,'="').concat(o(n),'"'))}return e.join(" ")}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=new n.a(e);for(var i=Object(n.b)(t),r=[],h=0;h<i.length;h++){var u=i[h];if("nl"===u.t&&e.nl2br)r.push("<br>\n");else if(u.isLink&&e.check(u)){var c=e.resolve(u),p=c.formatted,d=c.formattedHref,f=c.tagName,l=c.className,g=c.target,m=c.rel,b=c.attributes,T=["<".concat(f,' href="').concat(o(d),'"')];l&&T.push(' class="'.concat(o(l),'"')),g&&T.push(' target="'.concat(o(g),'"')),m&&T.push(' rel="'.concat(o(m),'"')),b&&T.push(" ".concat(a(b))),T.push(">".concat(s(p),"</").concat(f,">")),r.push(T.join(""))}else r.push(s(u.toString()))}return r.join("")}String.prototype.linkify||Object.defineProperty(String.prototype,"linkify",{writable:!1,value:function(t){return r(this,t)}})}}]);