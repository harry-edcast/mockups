(window.wpJsonpFlightsWidget=window.wpJsonpFlightsWidget||[]).push([[57],{"472R":function(t,n,e){"use strict";e.d(n,"a",(function(){return l})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return P}));var i=e("/bcO");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}var s=/^\d+$/,l=function(){function t(n){r(this,t),function(t){if(!t)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!m(t)||!m(t.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(m(t)?"an object of shape: { "+Object.keys(t).join(", ")+" }":"a "+v(t)+": "+t,"."))}(n),this.metadata=n,p.call(this,n)}return u(t,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter((function(t){return"001"!==t}))}},{key:"getCountryMetadata",value:function(t){return this.metadata.countries[t]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(t){return void 0!==this.getCountryMetadata(t)}},{key:"hasCallingCode",value:function(t){if(this.getCountryCodesForCallingCode(t))return!0;if(this.nonGeographic()){if(this.nonGeographic()[t])return!0}else{var n=this.countryCallingCodes()[t];if(n&&1===n.length&&"001"===n[0])return!0}}},{key:"isNonGeographicCallingCode",value:function(t){return this.nonGeographic()?!!this.nonGeographic()[t]:!this.getCountryCodesForCallingCode(t)}},{key:"country",value:function(t){return this.selectNumberingPlan(t)}},{key:"selectNumberingPlan",value:function(t,n){if(t&&s.test(t)&&(n=t,t=null),t&&"001"!==t){if(!this.hasCountry(t))throw new Error("Unknown country: ".concat(t));this.numberingPlan=new h(this.getCountryMetadata(t),this)}else if(n){if(!this.hasCallingCode(n))throw new Error("Unknown calling code: ".concat(n));this.numberingPlan=new h(this.getNumberingPlanMetadata(n),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(t){var n=this.countryCallingCodes()[t];if(n){if(1===n.length&&3===n[0].length)return;return n}}},{key:"getCountryCodeForCallingCode",value:function(t){var n=this.getCountryCodesForCallingCode(t);if(n)return n[0]}},{key:"getNumberingPlanMetadata",value:function(t){var n=this.getCountryCodeForCallingCode(t);if(n)return this.getCountryMetadata(n);if(this.nonGeographic()){var e=this.nonGeographic()[t];if(e)return e}else{var i=this.countryCallingCodes()[t];if(i&&1===i.length&&"001"===i[0])return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(t){return this.numberingPlan.type(t)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(t){return this.selectNumberingPlan(t)}},{key:"hasSelectedNumberingPlan",value:function(){return void 0!==this.numberingPlan}}]),t}(),h=function(){function t(n,e){r(this,t),this.globalMetadataObject=e,this.metadata=n,p.call(this,e.metadata)}return u(t,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"IDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!this.v1&&!this.v2)return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(t){return t[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var t=this,n=this._getFormats(this.metadata)||this._getFormats(this.getDefaultCountryMetadataForRegion())||[];return n.map((function(n){return new f(n,t)}))}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(t){return t[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return(!this.types()||0!==this.types().length)&&!!this.types()}},{key:"type",value:function(t){if(this.hasTypes()&&y(this.types(),t))return new g(y(this.types(),t),this)}},{key:"ext",value:function(){return this.v1||this.v2?" ext. ":this.metadata[13]||" ext. "}}]),t}(),f=function(){function t(n,e){r(this,t),this._format=n,this.metadata=e}return u(t,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!(!this.nationalPrefixFormattingRule()||c.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}]),t}(),c=/^\(?\$1\)?$/,g=function(){function t(n,e){r(this,t),this.type=n,this.metadata=e}return u(t,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}]),t}();function y(t,n){switch(n){case"FIXED_LINE":return t[0];case"MOBILE":return t[1];case"TOLL_FREE":return t[2];case"PREMIUM_RATE":return t[3];case"PERSONAL_NUMBER":return t[4];case"VOICEMAIL":return t[5];case"UAN":return t[6];case"PAGER":return t[7];case"VOIP":return t[8];case"SHARED_COST":return t[9]}}var m=function(t){return"object"===a(t)},v=function(t){return a(t)};function d(t,n){if((n=new l(n)).hasCountry(t))return n.country(t).countryCallingCode();throw new Error("Unknown country: ".concat(t))}function P(t,n){return void 0!==n.countries[t]}function p(t){var n=t.version;"number"==typeof n?(this.v1=1===n,this.v2=2===n,this.v3=3===n,this.v4=4===n):n?-1===Object(i.a)(n,"1.2.0")?this.v2=!0:-1===Object(i.a)(n,"1.7.35")?this.v3=!0:this.v4=!0:this.v1=!0}}}]);