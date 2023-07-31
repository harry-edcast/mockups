var configPath = null;
if (typeof guideMe === 'undefined') {
	guideMe = {};
}
if (!guideMe.baseUrl) {
	guideMe.baseUrl = "//cdn.guideme.io/guideme-player/galaxy/";
}
configPath = guideMe.baseUrl + 'config.js';
var playerExtImgUrl = "chrome-extension://fbekoknghlfgpbmielpmcjmkkkikdfdp/common/img/widget_icon.png";

function getScript(source, callback) {
	if (source) {
		var el = document.createElement('script');
		el.onload = callback;
		el.src = source;

		document.head.appendChild(el);
	} else {
		console.log("Invalid config path");
	}
}

function getScriptCB() {

	GmCXt.conf.baseUrl = guideMe.baseUrl;
	var a = document.createElement('script');

	if (GmCXt.conf.allowedDomains && GmCXt.conf.allowedDomains.length && window.location.hostname.length > 0) {
		var foundDomain = false;
		for (var i = 0; i < GmCXt.conf.allowedDomains.length; i++) {
			if (window.location.hostname.indexOf(GmCXt.conf.allowedDomains[i]) >= 0) {
				foundDomain = true;
				break;
			}
		}

		if (foundDomain) {
			loadGuideMeClientFiles();
		}
	} else {
		loadGuideMeClientFiles();
	}

	function loadGuideMeClientFiles() {
		if (window.self === window.top) {
			a.src = GmCXt.conf.baseUrl + 'gm_client_1690442660998.js';
		} else {
			a.src = GmCXt.conf.baseUrl + 'gm_client_iframe_1690442660998.js';
		}
		document.head.appendChild(a);
	}
};

function detectExtension() {
    var img;
    img = new Image();
    img.src = playerExtImgUrl;
    img.onload = function() {
        console.log("MyGuide player Extension installed, Skiping client JS load.");
    };
    img.onerror = function() {
        getScript(configPath, getScriptCB );
    };
}


detectExtension();