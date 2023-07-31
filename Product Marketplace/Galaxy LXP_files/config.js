if (GmCXt === undefined) {
	var GmCXt = {};
}

GmCXt.conf = {};
GmCXt.conf.version = "2023.7.0";
GmCXt.conf.env = "Prod";

GmCXt.conf.creatorApp = 'mgExt';
GmCXt.conf.playerApp = 'mgPlayer';
GmCXt.conf.creatorJS = 'mgCreator';
GmCXt.conf.appName = "mgPlayer";

GmCXt.conf.allowedDomains = [];
GmCXt.conf.autologin = { type:'window_sec_key' };
GmCXt.conf.appTypeExt = 'Extension';
GmCXt.conf.appTypeScript = 'JScript';
GmCXt.conf.appTypeElectron = 'electron';
GmCXt.conf.Premise = 'Premise';
GmCXt.conf.runEnv = "browser";
GmCXt.conf.msgPrefix = "mgPlayerJSProd_";

GmCXt.conf.showWidget = false;

GmCXt.conf.playerExtension = GmCXt.conf.playerApp + GmCXt.conf.appTypeExt;
GmCXt.conf.playerJS = GmCXt.conf.playerApp + GmCXt.conf.appTypeScript;

GmCXt.conf.websiteUrl = "https://myguide.org";
GmCXt.conf.privacyPolicyUrl = "https://www.edcast.com/corp/privacy-policy/";
GmCXt.conf.termsURL = "https://www.edcast.com/corp/terms-of-service/";
GmCXt.conf.feedbackDetails = "mailto:support@csod.com?Subject=MyGuide Feedback";
GmCXt.conf.adminEmail = "<a href='mailto:admin@edcast.com' target='_top'>admin@edcast.com</a>";

try {
	chrome.runtime.onMessage.addListener(function() {
		return true;
	});
	GmCXt.conf.appType = GmCXt.conf.appTypeExt;
} catch (e) {
	try {
		var uri = safari.extension.baseURI;
		if (uri !== null) {
			GmCXt.conf.appType = GmCXt.conf.appTypeExt;
		}
	} catch (e2) {
		GmCXt.conf.appType = GmCXt.conf.appTypeScript;
	}
}

// Default true, guideme icon will be visible on all urls. 
// If false, guideme icon will only be visible on urls where user have created tours. 

GmCXt.conf.allUrls = true;

GmCXt.conf.provider = "Cdn";

GmCXt.conf.storageUrl = "";

GmCXt.setOnPremise = function() {

	function apply(p) {
		if (p.apiSecrret) GmCXt.conf.apiSecrret = p.apiSecrret;
		if (p.apiUrl) GmCXt.conf.webServiceUrl = p.apiUrl;
		if (p.analyticsUrl) GmCXt.conf.analyticsPath = p.analyticsUrl;
		if (p.cdnUrl) GmCXt.conf.staticContentPath = p.cdnUrl;
		if (p.webPortal) GmCXt.conf.webPortalUrl = p.webPortal;
		if (p.analyticsPortal) GmCXt.conf.analyticsPortalUrl = p.analyticsPortal;
		if (p.assetPath) GmCXt.conf.staticContentPath = p.assetPath;
	}

	if (GmCXt.conf.appName === GmCXt.conf.creatorApp) {

		if (GmCXt.onPremise) {
			apply(GmCXt.onPremise);
		} else {
			chrome.storage.sync.get({
				onPrem_appKey: '',
				onPrem_apiUrl: '',
				onPrem_insightsUrl: '',
				onPrem_cdnUrl: '',
				onPrem_adminPortal: '',
				onPrem_insightsPortal: '',
				onPrem_assetPath: ''
			}, function(items) {
				var prem = {
					appKey: items.onPrem_appKey,
					apiUrl: items.onPrem_apiUrl,
					analyticsUrl: items.onPrem_insightsUrl,
					cdnUrl: items.onPrem_cdnUrl,
					webPortal: items.onPrem_adminPortal,
					analyticsPortal: items.onPrem_insightsPortal,
					assetPath: items.onPrem_assetPath
				};
				apply(prem);
			});
		}
	}
};

GmCXt.setConfig = function() {
	GmCXt.conf.apiSecrret = "4fb49382-2867-41c0-9ece-fdcaf03b46b8";
	GmCXt.conf.orgSecrret = "";
	GmCXt.conf.clientJsBaseUrl = "https://cdn.guideme.io/guideme-player/v3/";

	GmCXt.conf.webServiceUrl = "https://api-v3.guideme.io/v3/";
	GmCXt.conf.staticContentPath = "https://cdn.guideme.io/guideme-assests/";
	GmCXt.conf.webPortalUrl = "https://admin.myguide.org/";
	GmCXt.conf.analyticsPath = "https://v3-analytics.guideme.io/";
	GmCXt.conf.analyticsPortalUrl = "https://analytics.myguide.org/";
	GmCXt.conf.errorService = "";

	GmCXt.conf.cdnStorage = "https://cdn.guideme.io/";

	GmCXt.conf.ssoRedirectionUrl = "";
	GmCXt.conf.ssoApiUrl = "";
	GmCXt.conf.ssoConfigUrl = "";

	GmCXt.conf.paymentEndPoint = "";

	GmCXt.setOnPremise();
};

GmCXt.setConfig();

(function() {
	if (GmCXt.conf.appType === GmCXt.conf.appTypeExt) {

		var root = '';

		if (GmCXt.browserApp === 'Safari') {
			root = safari.extension.baseURI;
		} else if (GmCXt.browserApp === 'firefox' ) {

			root = chrome.extension.getURL('');

		} else {
			root = chrome.runtime.getURL('');
		}
	}

})();

GmCXt.conf.appConfig = {
	login: { guideme: 1, ed: 1, edToken : 1, signUp: 0, forgotPass: 1 },
	requireLogin: true,
	tourViewOptions: { showMe:1, testme:1, audio:1 },
	defaultIcon: 'myguide.png',
	isLXP: true,
	customer: 'lxp',
	desktopCommunication: false,
	iframeInjection: true
};