//***************************************************
//		START WELCOME PAGE BUILDER
//***************************************************

var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
document.getElementsByTagName('head')[0].appendChild(meta);

var strWeb = window.location.href;



// ****************************************
// START CODE FOR RESPONSIVE EDITOR
// J. Kaylen 3/15/2019
//Add action whenever widget options are selected. Wait 2 seconds as it takes the page some time to render.
if (typeof intCurrentHTML != 'undefined') {
	console.log('Detected - Welcome Page Builder');
}
if ((strWeb.indexOf("/Admin/CustomPages/PageBuilder.aspx") > 1) && (typeof intCurrentHTML == 'undefined')) {
	console.log('Loading Welcome Page Buidler v1.60');
	var addObserver;
	var editorObserver;
	var strRadEditorSelector = ".RadEditor.Metro";

	var myObj = {};
	var currentWidget = 0;
	var currentLanguage = 0;
	var arrLangSelected = [];

	//Constants needed for translating widget numbers <-> widgets names
	var arrLanguage = [];
	var widgetNameToNumber = {};
	widgetNameToNumber["Browse for Training"] = 6;
	widgetNameToNumber["Certifications"] = 20;
	widgetNameToNumber["Events Calendar"] = 29;
	widgetNameToNumber["Featured"] = 30;
	widgetNameToNumber["Formatted Message Box"] = 15;
	widgetNameToNumber["HTML"] = 21;
	widgetNameToNumber["Image"] = 1;
	widgetNameToNumber["Internal Job Search"] = 35;
	widgetNameToNumber["My Certifications"] = 11;
	widgetNameToNumber["My Training"] = 13;
	widgetNameToNumber["Online Training Progress"] = 8;
	widgetNameToNumber["Order Forms"] = 19;
	widgetNameToNumber["Pending Evaluations"] = 10;
	widgetNameToNumber["Referrals"] = 34;
	widgetNameToNumber["Required Training"] = 12;
	widgetNameToNumber["Search"] = 28;
	widgetNameToNumber["Social Feed"] = 36;
	widgetNameToNumber["Suggested"] = 9;
	widgetNameToNumber["ToDos"] = 14;
	widgetNameToNumber["Trainingi In Progress"] = 3;
	widgetNameToNumber["Training Status Summary"] = 17;
	widgetNameToNumber["Actions"] = 33;
	widgetNameToNumber["Your Assigned Training"] = 5;
	widgetNameToNumber["Inbox"] = 2;
	widgetNameToNumber["Your Interests"] = 18;
	widgetNameToNumber["Your Tasks"] = 7;
	widgetNameToNumber["Transcript"] = 31;
	widgetNameToNumber["Your Upcoming Sessions"] = 4;
	widgetNameToNumber["YouTube"] = 26;

	var widgetNumberToName = {};
	widgetNumberToName["6"] = "Browse for Training";
	widgetNumberToName["20"] = "Certifications";
	widgetNumberToName["29"] = "Events Calendar";
	widgetNumberToName["30"] = "Featured";
	widgetNumberToName["15"] = "Formatted Message Box";
	widgetNumberToName["21"] = "HTML";
	widgetNumberToName["1"] = "Image";
	widgetNumberToName["35"] = "Internal Job Search";
	widgetNumberToName["11"] = "My Certifications";
	widgetNumberToName["13"] = "My Training";
	widgetNumberToName["8"] = "Online Training Progress";
	widgetNumberToName["19"] = "Order Forms";
	widgetNumberToName["10"] = "Pending Evaluations";
	widgetNumberToName["34"] = "Referrals";
	widgetNumberToName["12"] = "Required Training";
	widgetNumberToName["28"] = "Search";
	widgetNumberToName["36"] = "Social Feed";
	widgetNumberToName["9"] = "Suggested";
	widgetNumberToName["14"] = "ToDos";
	widgetNumberToName["3"] = "Training In Progress";
	widgetNumberToName["17"] = "Training Status Summary";
	widgetNumberToName["33"] = "Actions";
	widgetNumberToName["5"] = "Your Assigned Training";
	widgetNumberToName["2"] = "Inbox";
	widgetNumberToName["18"] = "Your Interests";
	widgetNumberToName["7"] = "Your Tasks";
	widgetNumberToName["31"] = "Transcript";
	widgetNumberToName["4"] = "Your Upcoming Sessions";
	widgetNumberToName["26"] = "YouTube";

	//var intRadEditorCounter = 0;

	setTimeout(function () { addResponsiveWelcomePageSetup(); }, 2500);
	strPortal = window.location.host;
	strPortal = strPortal.substring(0, strPortal.indexOf("."));
	var jsonDesign = { portal: strPortal, widgets: [] };	//Used by SaveDesign() to store widgets. Needs to be declared outside of function b/c of mutation observers
	var arrHTMLWidgets = [];	//Used by SaveDesign() to store HTML widgets that needs to grab stuff from
	var intCurrentHTML = 0;		//Needed by getHTMLWidgets and outside function because of mutation observers
	var winChild;		//Stores openner of scfiles.csod.com

	addCss('https://scfiles.csod.com/app/includes/responsiveWelcomePageHelper.css');
}

function addCss(fileName) {
	var head = document.head;
	var link = document.createElement("link");
	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = fileName;
	head.appendChild(link);
}

function saveDesign() {
	document.getElementById('responsiveWelcomePageModalBlock').style.display = 'block';
	arrWidgets = [];
	arrHTMLWidgets = [];
	jsonDesign['widgets'] = [];
	var arrElms = document.getElementsByClassName("widgetDropped");
	for (var x = 0; x < arrElms.length; x++) {
		var tmpWidgetTypeID = arrElms[x].getAttribute("widgetid");
		if (tmpWidgetTypeID == 33) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Actions', title: tmpTitle });
		} else if (tmpWidgetTypeID == 31) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Transcript', title: tmpTitle });
		} else if (tmpWidgetTypeID == 2) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Inbox', title: tmpTitle });
		} else if (tmpWidgetTypeID == 21) {
			arrHTMLWidgets.push(arrWidgets.length); //Save arrWidgets length so we can come back to process the HTML boxes
			arrWidgets.push({ widgetType: 'HTML', elmID: x });
		} else if (tmpWidgetTypeID == 6) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Browse for Training', title: tmpTitle });
		} else if (tmpWidgetTypeID == 26) {
			var elmYouTubeLink = arrElms[x].querySelector("a[id*=ancYoutubeLink']");
			var tmpYouTube = elmYouTubeLink.href;
			arrWidgets.push({ widgetType: 'YouTube', youTubeLink: tmpYouTube });
		} else if (tmpWidgetTypeID == 9) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Suggested', title: tmpTitle });
		} else if (tmpWidgetTypeID == 30) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Featured', title: tmpTitle });
		} else if (tmpWidgetTypeID == 36) {
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Social Feed', title: tmpTitle });
		} else if (tmpWidgetTypeID == 15) {
			arrHTMLWidgets.push(arrWidgets.length);
			var tmpTitle = arrElms[x].querySelector("td[id*='_titleMiddle'] h2").innerHTML;
			arrWidgets.push({ widgetType: 'Formatted Message Box', title: tmpTitle, elmID: x });
		} else {
			arrWidgets.push({ widgetType: widgetNumberToName[tmpWidgetTypeID] });
		}
	}
	jsonDesign['widgets'].push(arrWidgets);
	intCurrentHTML = 0;
	getHTMLWidgets();
}

function getHTMLWidgets() {
	if (intCurrentHTML >= arrHTMLWidgets.length) {
		console.log(jsonDesign);
		strHostName = window.location.hostname.substring(0, window.location.hostname.indexOf('.'));
		winChild = window.open('https://scfiles.csod.com/app/responsive/welcomePageSave.php?referer=' + strHostName, '_blank');
		window.addEventListener('message', receiveMessageHTML);
		document.getElementById('responsiveWelcomePageModalBlock').style.display = 'none';
	} else {
		tmpID = arrHTMLWidgets[intCurrentHTML];
		var intElmID = jsonDesign.widgets[0][tmpID].elmID;
		var elmParent = document.getElementsByClassName("widgetDropped")[intElmID];
		//add observer
		var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings');
		var config = { attributes: true };
		var callback = function (mutationsList, tmpobserver) { tmpobserver.disconnect(); recordHTMLforWP(); };
		observerGet = new MutationObserver(callback);
		// Start observing the target node for configured mutations
		observerGet.observe(targetNode, config);
		//click to open editor
		elmParent.getElementsByClassName('widgetButtonOptions')[0].click();
	}
}

function recordHTMLforWP() {
	setTimeout(recordHTMLforWPAfterPause, 1500);
}

function recordHTMLforWPAfterPause() {
	if (jQuery(strRadEditorSelector).length > 0) {
		var editor = jQuery(strRadEditorSelector);
		if (editor) {
			//$find(editor.attr("id")).set_mode(2);
			console.log($find(editor.attr("id")).get_html(true));
			jsonDesign.widgets[0][arrHTMLWidgets[intCurrentHTML]].WidgetHTML = $find(editor.attr("id")).get_html(true);
			//$find(editor.attr("id")).set_mode(1);
		}
	}
	//Close window
	document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_btnCancel').click();
	intCurrentHTML++;
	var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings');
	var config = { attributes: true };
	var callback = function (mutationsList, tmpobserver) { tmpobserver.disconnect(); getHTMLWidgets(); };
	// Create an observer instance linked to the callback function
	var observerClose = new MutationObserver(callback);
	// Start observing the target node for configured mutations
	observerClose.observe(targetNode, config);
}

function saveDesignPrompt() {
	document.getElementById('wprModalContent').innerHTML = '<h2>Save Design</h2><p>Clicking Begin below will start the save process, uploading your design to the Responsive Welcome Page site.</p><p><ul><li>Your browser window may refresh several times, with each HTML &amp; Formatted Textbox Widget opening as part of the save process</li><li>After your configuration has been scanned, the Responsive Welcome Page site will open in a new window/tab, asking you to create an account or login with an existing account</li><li>You will be prompted to provide a title and other meta data for your design, including a screenshot from an end user perspective</li><li style="font-color: red; font-weight: 600">If you are not redirected to the Responsive website within 1 minute, refresh this page and try again</li></ul></p><p style="text-align: center;"><a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\'; saveDesign();" id="SaveDesign" class="CsImageButton" onmouseup="blur();"><span><b>Begin</b></span></a> <a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\';" id="CancelSave" class="CsImageButton" onmouseup="blur();"><span><b>Cancel</b></span></a></p>';
	document.getElementById('responsiveWelcomePageModal').style.display = "block";
}

function downloadDesignPrompt() {
	if (document.querySelectorAll('.dropContainer').length > 1) {
		document.getElementById('wprModalContent').innerHTML = '<h2>Download Design</h2><p>Your Page Layout must be <b>1 Column, No Header, No Footer</b> (a single cell).</p></p>Clicking Change Layout will update your layout, <b>deleteing any existing widgets</b> and refreshing this page. You will then need to click on Get Design again.</p><p style="text-align: center;"><a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\'; changePageLayout();" id="changePageLayout" class="CsImageButton" onmouseup="blur();"><span><b>Change Layout</b></span></a> <a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\';" id="CancelSave" class="CsImageButton" onmouseup="blur();"><span><b>Cancel</b></span></a></p>';
		document.getElementById('responsiveWelcomePageModal').style.display = "block";
	} else if (document.querySelectorAll('.widgetDropped').length > 0) {
		document.getElementById('wprModalContent').innerHTML = '<h2>Download Design</h2><p>You must have <b>no existing widgets</b> on this page to download a design. Please select Clear Design to delete existing widgets. You will then need to click on Get Design again.</p><p style="text-align: center;"><a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\'; changePageLayout();" id="changePageLayout" class="CsImageButton" onmouseup="blur();"><span><b>Clear Design</b></span></a> <a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\';" id="CancelSave" class="CsImageButton" onmouseup="blur();"><span><b>Cancel</b></span></a></p>';
		document.getElementById('responsiveWelcomePageModal').style.display = "block";
	} else {
		//document.getElementById('wprModalContent').innerHTML = '<h2>Download Design</h2><p>Clicking Browse will open a new window/tab. You can download your own designs or browse the gallery and find another design.</p><p style="text-align: center;"><a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\'; browseWelcomePage();" id="BrowseWP" class="CsImageButton" onmouseup="blur();"><span><b>Browse</b></span></a> <a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\';" id="CancelSave" class="CsImageButton" onmouseup="blur();"><span><b>Cancel</b></span></a></p>';
		//document.getElementById('responsiveWelcomePageModal').style.display = "block";
		document.getElementById('responsiveWelcomePageModal').style.display = 'none';
		browseWelcomePage();
	}
}

function changePageLayout() {
	//from downloadDesignPrompt->If user doesn't have correct layout
	document.querySelector('.configureLayoutBtn').click();
	setTimeout(function () {
		document.getElementById('ctl00_ContentPlaceHolder1_dlgConfigureLayout_ddlColumns').value = 1;
		document.getElementById('ctl00_ContentPlaceHolder1_dlgConfigureLayout_chkHeader').checked = false;
		document.getElementById('ctl00_ContentPlaceHolder1_dlgConfigureLayout_chkFooter').checked = false;
		document.getElementById('ctl00_ContentPlaceHolder1_dlgConfigureLayout_btnApplyLayout').click();
	}, 200);
	//var tmp = setTimeout(function(){
	//document.getElementById('ctl00_ContentPlaceHolder1_dlgConfirm_btnYes').click();
	//}, 1000);
}

function browseWelcomePage() {
	//from downloadDesignPrompt->If user ready to downlaod designs
	strHostName = window.location.hostname.substring(0, window.location.hostname.indexOf('.'));
	winChild = window.open('https://scfiles.csod.com/app/responsive/welcomePageGallery.php?referer=' + strHostName, '_blank');
	window.addEventListener('message', receiveMessageHTML);
}
function addResponsiveWelcomePageSetup() {
	//Sets up links and fixes some sizing issues. Uses mutation observer as page elements are dynamic
	document.getElementById('mainContainer').style.overflow = "hidden";
	document.getElementsByClassName('dropContainer')[0].style.overflowY = "visible";

	var trNewElement = document.createElement("tr");
	trNewElement.id = 'ctl00_ContentPlaceHolder1_holderSaveWelcome';
	trNewElement.className = "LayoutRow";
	trNewElement.innerHTML = '<td valign="top" width="28"><img src="https://scfiles.csod.com/app/responsive/images/uploadCloud.png" alt="Save Design" height="23" width="23" style="margin-left: 2px;"></td><td class="cellVerticalDivider"></td><td class="cellOptionsColumn"><div class="colorLink" onclick="saveDesignPrompt();">Save Design</div></td>';
	document.querySelector(".layoutMenu tbody").appendChild(trNewElement);

	trNewElement = document.createElement("tr");
	trNewElement.id = 'ctl00_ContentPlaceHolder1_holderDownloadWelcome';
	trNewElement.className = "LayoutRow";
	trNewElement.innerHTML = '<td valign="top" width="28"><img src="https://scfiles.csod.com/app/responsive/images/downloadCloud.png" alt="Download Design" height="23" width="23" style="margin-left: 2px;"></td><td class="cellVerticalDivider"></td><td class="cellOptionsColumn"><div class="colorLink" onclick="downloadDesignPrompt();">Get Design</div></td>';
	document.querySelector(".layoutMenu tbody").appendChild(trNewElement);

	//Add "Open Responsive Widgets Link, via mutation observer call to addOpenResponsiveWidgetsLink
	var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings');
	var config = { attributes: true };
	var callback = function (mutationsList, observer) { addOpenResponsiveWidgetsLink(); };
	var observer = new MutationObserver(callback);
	observer.observe(targetNode, config);

	//Get Portal Languages
	var elmSelect = document.getElementById('ctl00_ContentPlaceHolder1_txtDescriptionTranslate_dlgTranslatorPopup_ddlLanguageList');
	for (var x = 0; x < elmSelect.children.length; x++) {
		arrLanguage.push({ value: elmSelect.children[x].value, language: elmSelect.children[x].innerHTML, selected: elmSelect.children[x].selected });
	}
	//Setup Modals for Prompts and "Processing" screen
	elmModal = document.createElement("div");
	elmModal.id = "responsiveWelcomePageModal";
	elmModal.className = "wprmodal";
	elmModal.innerHTML = '<div class="wprmodal-content"><span class="wprclose">&times;</span><div id="wprModalContent"><p>Some text in the Modal..</p></div></div>';
	document.getElementById('ctl00_ContentPlaceHolder1_pnlModificationHistory').appendChild(elmModal);

	elmModal = document.createElement("div");
	elmModal.id = "responsiveWelcomePageModalBlock";
	elmModal.className = "wprmodalblock";
	elmModal.innerHTML = '<div class="wprmodal-content"><div id="wprModalContent"><p>Processing..</p></div></div>';
	document.getElementById('ctl00_ContentPlaceHolder1_pnlModificationHistory').appendChild(elmModal);


	var modal = document.getElementById('responsiveWelcomePageModal');
	var span = document.getElementsByClassName("wprclose")[0];
	span.onclick = function () {
		modal.style.display = "none";
	}
}


function addOpenResponsiveWidgetsLinkPause() {
	setTimeout(function () { addOpenResponsiveWidgetsLink(); }, 1800);
}

function addOpenResponsiveWidgetsLink() {
	if (jQuery(strRadEditorSelector).length > 0) {
		//var editor = jQuery(".RadEditor.Windows7");	//Took out on Jan 30, 2023
		var editor = jQuery(strRadEditorSelector);
		if (editor) {
			//var elmParentDiv = document.querySelector("div[id*='_settingsDialog_dialogWidgetSettings_settingsHolder']");
			//var elmHelpText = elmParentDiv.getElementsByTagName('span')[0];
			//var strHelpText = elmHelpText.innerHTML;
			var elmParent = document.querySelector("#ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_settingsHolder > div:nth-child(5)");
			//console.log(elmParent);
			if (elmParent) {
				if (elmParent.innerHTML.indexOf('Open Responsive Widgets') < 1) {
					var elmTmpA = document.createElement("a");
					elmTmpA.id = 'btnOpenResponsiveWidget';
					elmTmpA.className = "CsImageButton";
					elmTmpA.style.margin = '5px';
					elmTmpA.title = "Open Responsive Widgets";
					elmTmpA.onclick = function () { launchResponsiveWidgets(); };
					elmTmpA.innerHTML = '<span><b>Open Responsive Widgets</b></span>';
					elmParent.insertBefore(elmTmpA, elmParent.childNodes[1]);
					document.getElementsByName('ctl00$ContentPlaceHolder1$settingsDialog$dialogWidgetSettings$ctl17$ddlLanguage$langSelect')[0].addEventListener('change', addOpenResponsiveWidgetsLinkPause);
				}
			} else {
				elmParent = document.getElementById("ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_settingsHolder");
				if (elmParent) {
					if (elmParent.innerHTML.indexOf('Open Responsive Widgets') < 1) {
						var elmTmpA = document.createElement("a");
						elmTmpA.id = 'btnOpenResponsiveWidget';
						elmTmpA.className = "CsImageButton";
						elmTmpA.style.margin = '5px';
						elmTmpA.title = "Open Responsive Widgets";
						elmTmpA.onclick = function () { launchResponsiveWidgets(); };
						elmTmpA.innerHTML = '<span><b>Open Responsive Widgets</b></span>';
						var elmTmpParent = document.querySelector("#ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_settingsHolder > div:nth-child(6)");
						elmTmpParent.insertBefore(elmTmpA, elmTmpParent.childNodes[1]);
						document.getElementsByName('ctl00$ContentPlaceHolder1$settingsDialog$dialogWidgetSettings$ctl17$ucHTMLAdmin$ddlLanguage$langSelect')[0].addEventListener('change', addOpenResponsiveWidgetsLinkPause);
					}
				}
			}
		}
	}
}

function launchResponsiveWidgets() {
	if (document.querySelectorAll('#divDirections').length > 0) {
		intWidgetZero = 1;
	} else {
		intWidgetZero = 0;
	}
	strHostName = window.location.hostname.substring(0, window.location.hostname.indexOf('.'));
	winChild = window.open('https://scfiles.csod.com/app/responsive/welcomePageHelper.php?referer=' + strHostName + '&widgetzero=' + intWidgetZero, '_blank');
	window.addEventListener('message', receiveMessageHTML);
}


//All of our listeners for messages use this same function
function receiveMessageHTML(e) {
	console.log(e);
	if (e.origin !== "https://scfiles.csod.com") { return; }
	//console.log(e.data);
	var editor = jQuery(strRadEditorSelector);
	if (e.data == "READY") {
		myObj = {};
		var strPortalColor = window.getComputedStyle(document.querySelector('.c-page-header'), null).getPropertyValue("background-color");
		strPortalColor = rgb2hex(strPortalColor);
		myObj.PortalColor = strPortalColor;
		myObj.widget = $find(editor.attr("id")).get_html(true);
		if (document.getElementById('widget0Colors')) {
			//New way to send current widget HTML that includes colors
			var strColors = document.getElementById('widget0Colors').innerHTML;
			var myRegexp = /(primary-color\: )(#?[a-zA-Z0-9]{3,6});/g;
			var match = myRegexp.exec(strColors);
			if (match != null) {
				myObj.PrimaryColor = match[2];
			}
			var strColors = document.getElementById('widget0Colors').innerHTML;
			var myRegexp = /(secondary-color\: )(#?[a-zA-Z0-9]{3,6});/g;
			var match = myRegexp.exec(strColors);
			if (match != null) {
				myObj.SecondaryColor = match[2];
			}
			var myRegexp = /(neutral-color\: )(#?[a-zA-Z0-9\(\) ,\.]*);/g;
			var match = myRegexp.exec(strColors);
			if (match != null) {
				myObj.NeutralColor = match[2];
			}
			var myRegexp = /(primary-font\: )([\s\S]*?);/g;
			var match = myRegexp.exec(strColors);
			if (match != null) {
				myObj.PrimaryFont = match[2];
			}
			var myRegexp = /(secondary-font\: )([\s\S]*?);/g;
			var match = myRegexp.exec(strColors);
			if (match != null) {
				myObj.SecondaryFont = match[2];
			}
			if (document.getElementById('widget0background')) {
				var strWidgetBackground = document.getElementById('widget0background').innerHTML;
				var myRegexp = /(background-image\: url\(\')([\s\S]*?)\'\);/g;
				var match = myRegexp.exec(strWidgetBackground);
				if (match.length > 1) {
					myObj.Background = match[2];
				}
			}
			if (document.getElementById('widget0backgroundGradient')) {
				var strWidgetBackgroundGradient = document.getElementById('widget0backgroundGradient').innerHTML;
				var myRegexp = /(\.FullPageBannerGradient {[\s\S]*?background-image: )(linear[\s\S]*?);/gm;
				var match = myRegexp.exec(strWidgetBackgroundGradient);
				myObj.BackgroundGradient = match[2];
			}
		}
		var strJSON = JSON.stringify(myObj);
		console.log(strJSON);
		winChild.postMessage(strJSON, "https://scfiles.csod.com");
	} else if (e.data == "READYWP") {
		//Send welcome page design to scfiles.csod.com
		winChild.postMessage(JSON.stringify(jsonDesign), "https://scfiles.csod.com");
		jsonDesign = {};
	} else if (e.data == "SENDLANG") {
		winChild.postMessage(JSON.stringify(arrLanguage), "https://scfiles.csod.com");
	} else {
		myObj = {};
		currentWidget = 0;
		myObj = JSON.parse(e.data);
		if (myObj.action == 'importWidget') {
			if (jQuery(strRadEditorSelector).length > 0) {
				$find(editor.attr("id")).set_html(myObj.WidgetHTML);
				winChild.postMessage('success', "https://scfiles.csod.com");
			} else {
				winChild.postMessage('editorClosed', "https://scfiles.csod.com");
			}
		} else if (myObj.action == 'welcomePageImport') {
			if (myObj.languages.length > 0) {
				arrLangSelected = myObj.languages.slice(0);
				console.log(arrLangSelected);
			}
			welcomePageImport();
		}
	}
}

//For automation, function to import a welcome page without openning the builder
function autoImportWelcomePage(intWelcomePageID, strPrimaryColor) {
	var xhrWP = new XMLHttpRequest();
	xhrWP.onreadystatechange = function () {
		if (xhrWP.readyState == 4 && xhrWP.status == 200) {
			strWP = xhrWP.responseText;
			myObj = {};
			currentWidget = 0;
			myObj = JSON.parse(strWP);
			welcomePageImport();
		}
	};
	xhrWP.open("GET", "https://scfiles.csod.com/app/responsive/welcomePageExport.php?WelcomePageID=" + intWelcomePageID + "&PrimaryColor=" + strPrimaryColor, true);
	//xhrWP.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	xhrWP.send();
}

//Needed to convert RGB from getcomputedstyle to hex
function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

//Based off of receiving a message tagged with welcomePageImport, triggered from user selecting design in other website
//Loops through a object filled with specs on Widgets and builds out the widgets. myObj declared outside of function
//as using Mutation Observers to populate widgets (due to processing time for placing and populating widgets)
function welcomePageImportRandomPause() {
	var intPause = Math.floor((Math.random() * 500) + 500);
	setTimeout(function () { welcomePageImport(); }, intPause);
}


function welcomePageImport() {
	document.getElementById('responsiveWelcomePageModalBlock').style.display = 'block';
	if (currentWidget < myObj.widgets.length) {
		var intWidgetNumber = widgetNameToNumber[myObj.widgets[currentWidget].WidgetType];
		console.log('Running Widget ' + currentWidget + ' type: ' + widgetNameToNumber[myObj.widgets[currentWidget].WidgetType]);
		if (currentLanguage == 0) {
			if (currentWidget == 0) {
				triggerDragAndDrop('div[widgetid="' + intWidgetNumber + '"]', '.dropContainer', 0);
			} else {
				document.getElementById('mainContainer').style.overflow = 'auto';
				document.querySelector('#mainContainer > div').style.height = (parseInt(document.querySelector('#mainContainer > div').style.height) + 300) + 'px';
				triggerDragAndDrop('div[widgetid="' + intWidgetNumber + '"]', '.ui-draggable.widgetDropped:nth-last-child(1)', 300);
			}
		}
		if ((intWidgetNumber == 21) || (intWidgetNumber == 15)) {
			if (currentLanguage == 0) {
				var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings');
				var config = { attributes: true };
				var callback = function (mutationsList, tmpobserver) { tmpobserver.disconnect(); populateHTMLBox(); };
				// Create an observer instance linked to the callback function
				var addObserver = new MutationObserver(callback);
				addObserver.observe(targetNode, config);
			} else {
				setTimeout(function () { populateHTMLBox(); }, 2000);
			}
		} else if (intWidgetNumber == 26) {
			//mutation observer that calls something to populate URL in YouTube widget
		} else {
			var targetNode = document.querySelector('#mainContainer > div > div.dropContainer.ui-sortable.ui-droppable');
			var config = { childList: true };
			var callback = function (mutationsList, observer) {
				//for(var mutation of mutationsList) { console.log(mutation);
				mutationsList.forEach(function (mutation) {
					console.log(mutation);

					if ((mutation.removedNodes[0]) && (mutation.removedNodes[0].className == 'ui-sortable-placeholder widget divSelectorContainer ui-draggable ui-draggable-handle ui-draggable-dragging ui-draggable-disabled')) {
						//if((mutation.removedNodes[0]) && (mutation.removedNodes[0].className=='widget divSelectorContainer ui-draggable ui-sortable-placeholder')) {
						//if((mutation.previousSibling) && (mutation.previousSibling.className=='ui-draggable widgetDropped')) {
						if ((mutation.previousSibling) && (mutation.previousSibling.className == 'ui-draggable ui-draggable-handle ui-draggable-disabled widgetDropped')) {
							//if((mutation.addedNodes[0]) && (mutation.addedNodes[0].className=='ui-draggable widgetDropped')) {
							//	if((mutation.nextSibling) && (mutation.nextSibling.className=='widget divSelectorContainer ui-draggable ui-sortable-placeholder')) {
							addObserver.disconnect();
							currentWidget++;
							console.log('Set timeout for ' + currentWidget);
							setTimeout(function () { welcomePageImport(); }, 2000);
						}
					}
				})
			};
			addObserver = new MutationObserver(callback);
			addObserver.observe(targetNode, config);
		}


	} else {
		document.getElementById('responsiveWelcomePageModalBlock').style.display = 'none';
		document.getElementById('wprModalContent').innerHTML = '<h2>Import Complete!</h2><p>The Welcome Page Import process has completed. You may now save and/or further edit your Welcome Page. The window/tab from the Welcome Page Gallery is still open and may contain resources to assist in modifying the design. Note that standard widgets work best if you set Options->Design to Color/Flat (depending on what side of the pond you are on).</p><p style="text-align: center;"><a onclick="document.getElementById(\'responsiveWelcomePageModal\').style.display = \'none\';" id="CloseModal" class="CsImageButton" onmouseup="blur();"><span><b>Close</b></span></a></p>';
		document.getElementById('responsiveWelcomePageModal').style.display = "block";
	}
}

function populateHTMLBox() {
	var editor = jQuery(strRadEditorSelector);
	$find(editor.attr("id")).set_html(myObj.widgets[currentWidget].WidgetHTML);
	if (widgetNameToNumber[myObj.widgets[currentWidget].WidgetType] == 15) {
		console.log('Populating: ' + currentWidget);
		var elmTitle = document.querySelector("input[id*='txtWidgetTitleEdit']");
		elmTitle.value = myObj.widgets[currentWidget].Title;
	}
	if ((arrLangSelected.length == 0) || (currentLanguage >= arrLangSelected.length)) {
		console.log('languages done!');
		currentLanguage = 0;
		document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_btnSave').click();
		currentWidget++;
		//Observer to make sure this closes before calling this function (welcomePageImport()) to move to next widget
		var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings');
		var config = { attributes: true };
		var callback = function (mutationsList, tmpobserver) { tmpobserver.disconnect(); welcomePageImportRandomPause(); };
		// Create an observer instance linked to the callback function
		var observerClose = new MutationObserver(callback);
		// Start observing the target node for configured mutations
		observerClose.observe(targetNode, config);
	} else {
		//Change language and increment, then add observer to re-call this
		console.log('Setting language to ' + arrLangSelected[currentLanguage] + ' which is number ' + currentLanguage);
		$("#ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_ctl17_ddlLanguage_langSelect").val(arrLangSelected[currentLanguage]).change();
		currentLanguage++;
		var targetNode = document.getElementById('ctl00_ContentPlaceHolder1_settingsDialog_dialogWidgetSettings_ctl17_CsodRadEditor1Center');
		var config = { attributes: true, subtree: true, childList: true };
		var callback = function (mutationsList, tmpobserver) { tmpobserver.disconnect(); welcomePageImportRandomPause(); };
		// Create an observer instance linked to the callback function
		var observerClose = new MutationObserver(callback);
		// Start observing the target node for configured mutations
		observerClose.observe(targetNode, config);
	}
}

//From welcomePageImport function, triggered by user clicking on Get Design
//This set of functions is used to drag and drop widgets. The offset is needed to make sure the widgets, as added, are placed not at the center of the widget before, but just below center
var triggerDragAndDrop = function (selectorDrag, selectorDrop, jkoffset) {

	// function for triggering mouse events
	var fireMouseEvent = function (type, elem, centerX, centerY) {
		var evt = document.createEvent('MouseEvents');
		evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, false, false, false, false, 0, elem);
		elem.dispatchEvent(evt);
	};

	// fetch target elements
	var elemDrag = document.querySelector(selectorDrag);
	var elemDrop = document.querySelector(selectorDrop);
	console.log(elemDrop);
	if (!elemDrag || !elemDrop) return false;

	// calculate positions
	var pos = elemDrag.getBoundingClientRect();
	var center1X = Math.floor((pos.left + pos.right) / 2);
	var center1Y = Math.floor((pos.top + pos.bottom) / 2);
	pos = elemDrop.getBoundingClientRect();
	var center2X = Math.floor((pos.left + pos.right) / 2);
	var center2Y = Math.floor((pos.top + pos.bottom) / 2) + jkoffset;
	console.log("going to: Y" + center2Y + " and X" + center2X);
	//var center2Y = Math.floor((10 + pos.bottom));

	// mouse over dragged element and mousedown
	fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
	fireMouseEvent('mouseenter', elemDrag, center1X, center1Y);
	fireMouseEvent('mouseover', elemDrag, center1X, center1Y);
	fireMouseEvent('mousedown', elemDrag, center1X, center1Y);

	// start dragging process over to drop target
	fireMouseEvent('dragstart', elemDrag, center1X, center1Y);
	fireMouseEvent('drag', elemDrag, center1X, center1Y);
	fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
	fireMouseEvent('drag', elemDrag, center2X, center2Y);
	fireMouseEvent('mousemove', elemDrop, center2X, center2Y);

	// trigger dragging process on top of drop target
	fireMouseEvent('mouseenter', elemDrop, center2X, center2Y);
	fireMouseEvent('dragenter', elemDrop, center2X, center2Y);
	fireMouseEvent('mouseover', elemDrop, center2X, center2Y);
	fireMouseEvent('dragover', elemDrop, center2X, center2Y);

	// release dragged element on top of drop target
	fireMouseEvent('drop', elemDrop, center2X, center2Y);
	fireMouseEvent('dragend', elemDrag, center2X, center2Y);
	fireMouseEvent('mouseup', elemDrag, center2X, center2Y);
	console.log("released at: " + center2Y + " and X" + center2X);
	return true;
};

// ****************************************
// End Responsive Editor Code



// ****************************************
// End tag stuff

//Add in footer
if (document.getElementsByClassName("df-footer").length == 0) {
	var newdiv = document.createElement('div');
	newdiv.setAttribute('class', "df-footer");
	newdiv.setAttribute('style', "background-color: transparent !important;");
	newdiv.setAttribute('role', "contentinfo");
	strHTMLFooter = "<img class=df-logo-footer alt=Cornerstone OnDemand Logo src=/images/csod_logo_navy.png><div class=df-footer__legal><span class=df-footer__version>Version: 16.1.4.11</span><br />Powered by Cornerstone OnDemand, Inc. &#169; 2022<br />All Rights Reserved. <a href='/phnx/driver.aspx?routename=Home/TermsOfService'>Terms</a> - <a href='/phnx/driver.aspx?routename=Home/Privacy'>Privacy</a> - <a href='/phnx/driver.aspx?routename=Home/Privacy#cookiesprivacy'>Cookies</a> </div>";
	newdiv.innerHTML = strHTMLFooter;
	if (document.getElementById("ctl00_footer_pnlCustomFooter")) {
		var ni = document.getElementById('ctl00_footer_pnlCustomFooter');
	} else if (document.getElementById("ctl00_ctl00_footer_pnlCustomFooter")) {
		var ni = document.getElementById('ctl00_ctl00_footer_pnlCustomFooter');
	} else if (document.getElementById("ces_footer_pnlCustomFooter")) {
		var ni = document.getElementById('ces_footer_pnlCustomFooter');
	} else if (document.getElementById("ces_footer1_pnlCustomFooter")) {
		var ni = document.getElementById('ces_footer1_pnlCustomFooter');
	} else if (document.getElementById("ctl00_ctl00_ctl00_footer_pnlCustomFooter")) {
		var ni = document.getElementById('ctl00_ctl00_ctl00_footer_pnlCustomFooter');
	} else if (document.getElementById("footer_pnlCustomFooter")) {
		var ni = document.getElementById('footer_pnlCustomFooter');
	}
	ni.appendChild(newdiv);
}




//***************************************************
//		END WELCOME PAGE BUILDER
//***************************************************


console.log('Loading Responsive Pack v18.01');

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		34: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"add-external~all-teams~communities~community~community-members~community-search-results~community-wi~655afbb4","1":"cohort-training-view~curriculum-read-only~curriculum-trainings-view~edit-transcript-details~event-tr~3e08e17f","2":"live-feed~team-overview~user-test-review","3":"community","4":"dashboard~search","5":"add-external","6":"all-teams","7":"badges","8":"bio","9":"career","10":"change-of-personal-details","11":"checkout-new","12":"cohort-training-view","13":"communities","14":"community-members","15":"community-search-results","16":"community-with-feed","17":"completion-gratification","18":"create-discussion-posting","19":"curriculum-player","20":"curriculum-read-only","21":"curriculum-training-details","22":"curriculum-trainings-view","23":"dashboard","24":"discussion-posting-details","25":"edit-transcript-details","26":"eval-launch","27":"event-training-details","28":"events-calendar","29":"external-details","30":"feedback","31":"file-posting-details","32":"ilt-cancel-registration","33":"ilt-session-view","35":"instructor","36":"interest-tracking","37":"launch-video","38":"leaderboard","39":"live-feed","40":"lo-actions-assign","41":"lo-details","42":"manage-checklist","43":"matrial-training-details","44":"my-interests-and-waiting-lists","45":"myCourseReviews","46":"mygateways","47":"ojtobservers","48":"online-class-view","49":"orderhistory","50":"password-change","51":"prefs-paymentmethods","52":"qa-posting-details","53":"remove-training","54":"resume","55":"review-overview","56":"search","57":"select-org-units","58":"select-session","59":"select-training","60":"snapshot","61":"snapshot-actions","62":"social-learning-player","63":"suggestion-posting-details","64":"team-feed","65":"team-members","66":"team-overview","67":"team-tasks","68":"test-disclaimer","69":"test-training-details","70":"topic-details","71":"topics","72":"track-emp-request","73":"training-mark-complete","74":"user-test-review","75":"video-details","76":"сourse-reviews-detail"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://scfiles.csod.com/labs/responsivecode/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/app/importChunk.js
function importRelatedChunk() {
	var href = window.location.href.toLowerCase();
	if(href.indexOf("sociallearningplayer")>-1) {
		Promise.all(/* import() | social-learning-player */[__webpack_require__.e(0), __webpack_require__.e(62)]).then(__webpack_require__.bind(null, 245));
		return;
	}
	if(href.indexOf("cohortcommunity/instructor")>-1) {
		Promise.all(/* import() | instructor */[__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, 246));
		return;
	}
    if (href.indexOf("mycourseratings") > -1) {
        Promise.all(/* import() | myCourseReviews */[__webpack_require__.e(0), __webpack_require__.e(45)]).then(__webpack_require__.bind(null, 247));
        return;
    }
    if (href.indexOf("orderhistory") > -1) {
        Promise.all(/* import() | orderhistory */[__webpack_require__.e(0), __webpack_require__.e(49)]).then(__webpack_require__.bind(null, 248));
        return;
    }
    if (href.indexOf("prefs") > -1 ||
        href.indexOf("paymentmethods") > -1) {
        Promise.all(/* import() | prefs-paymentmethods */[__webpack_require__.e(0), __webpack_require__.e(51)]).then(__webpack_require__.bind(null, 249));
        return;
    }
    if (href.indexOf("mygateways") > -1) {
        Promise.all(/* import() | mygateways */[__webpack_require__.e(0), __webpack_require__.e(46)]).then(__webpack_require__.bind(null, 250));
        return;
    }
//    if (href.indexOf("dashboard") > -1) {
//        Promise.all(/* import() | dashboard */[__webpack_require__.e(4), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, 242));
//        return;
//    }
    if(href.indexOf("universalprofile/bio")>-1) {
        __webpack_require__.e(/* import() | bio */ 8).then(__webpack_require__.bind(null, 251));
        return;
    }
    if(href.indexOf("universalprofile/feedback")>-1) {
        __webpack_require__.e(/* import() | feedback */ 30).then(__webpack_require__.bind(null, 252));
        return;
    }
	if(href.indexOf("universalprofile/resume")>-1) {
        __webpack_require__.e(/* import() | resume */ 54).then(__webpack_require__.bind(null, 253));
        return;
	}
	if(href.indexOf("career")>-1) {
		__webpack_require__.e(/* import() | career */ 9).then(__webpack_require__.bind(null, 254));
		return;
    }

//	if(href.indexOf("livefeed")>-1) {
//		Promise.all(/* import() | live-feed */[__webpack_require__.e(2), __webpack_require__.e(39)]).then(__webpack_require__.bind(null, 256));
//		return;
//    }
//	if(href.indexOf("curriculum/curriculumplayer")>-1) {
//		Promise.all(/* import() | curriculum-player */[__webpack_require__.e(0), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, 240));
//		return;
  //  }
    //if(href.indexOf("topics")>-1) {
//		Promise.all(/* import() | topics */[__webpack_require__.e(0), __webpack_require__.e(71)]).then(__webpack_require__.bind(null, 257));
//		return;
//	}
  //  if(href.indexOf("communitywithfeed")>-1) {
	//	Promise.all(/* import() | community-with-feed */[__webpack_require__.e(0), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 258));
	//	return;
//    }
//    if(href.indexOf("community/search")>-1) {
//        Promise.all(/* import() | community-search-results */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, 259));
//        return;
//    }
//    if(href.indexOf("communitymembers")>-1) {
//		Promise.all(/* import() | community-members */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, 260));
//		return;
//	}
    //if(href.indexOf("communities/community")>-1) {
	//	Promise.all(/* import() | community */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 261));
	//	return;
	//}
	if(href.indexOf("communities/cohortcommunity")>-1) {
		Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 261));
		return;
	}
	//if(href.indexOf("communities")>-1) {
	//	Promise.all(/* import() | communities */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, 262));
	//	return;
	//}

//	if(href.indexOf("externaltraining")>-1) {
//        Promise.all(/* import() | add-external */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 263));
//    }
//	if(href.indexOf("create")>-1) {
//		Promise.all(/* import() | create-discussion-posting */[__webpack_require__.e(0), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, 243));
//		return;
//	}
//    if(href.indexOf("evallaunch")>-1) {
//		__webpack_require__.e(/* import() | eval-launch */ 26).then(__webpack_require__.bind(null, 264));
//		return;
//	}
//	if(href.indexOf("usertranscript/externaltrainingview")>-1) {
//		Promise.all(/* import() | external-details */[__webpack_require__.e(1), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, 265));
//		return;
//	}
//  if(href.indexOf("externaltraining")>-1) {
//        Promise.all(/* import() | add-external */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 263));
//        return;
//	}
//  if(href.indexOf("loactions/assign")>-1) {
//        Promise.all(/* import() | lo-actions-assign */[__webpack_require__.e(0), __webpack_require__.e(40)]).then(__webpack_require__.bind(null, 266));
//    }
//  if(href.indexOf("completiongratification")>-1) {
//		Promise.all(/* import() | completion-gratification */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 267));
//		return;
//    }
//  if(href.indexOf("suggestionpostingdetails")>-1) {
//		Promise.all(/* import() | suggestion-posting-details */[__webpack_require__.e(0), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, 268));
//		return;
//    }
//  if(href.indexOf("mywaitlistsandinterests")>-1) {
//		__webpack_require__.e(/* import() | my-interests-and-waiting-lists */ 44).then(__webpack_require__.bind(null, 269));
//		return;
//	}
  if(href.indexOf("trackemployee/trackemprequest")>-1){
		__webpack_require__.e(/* import() | track-emp-request */ 72).then(__webpack_require__.bind(null, 270));
		return;
  }
  if(href.indexOf("lms/loactions/lo_detail")>-1){
	__webpack_require__.e(/* import() | track-emp-request */ 72).then(__webpack_require__.bind(null, 270));
		return;
  }
  if(href.indexOf("onlineclassview")>-1) {
		Promise.all(/* import() | online-class-view */[__webpack_require__.e(1), __webpack_require__.e(48)]).then(__webpack_require__.bind(null, 271));
		return;
  }
  if(href.indexOf("lodetailevent")>-1) {
	__webpack_require__.e(/* import() | select-session */ 58).then(__webpack_require__.bind(null, 272));
	return;
}
if(href.indexOf("tests/testdisclaimer")>-1) {
	__webpack_require__.e(/* import() | test-disclaimer */ 68).then(__webpack_require__.bind(null, 273));
	return;
}
  if(href.indexOf("social/universalprofile/transcript")>-1) {
		__webpack_require__.e(/* import() | curriculum-training-details */ 21).then(__webpack_require__.bind(null, 274));
		return;
  }
  if(href.indexOf("lms/lodetails/detailslo")>-1) {
	  Promise.all(/* import() | lo-details */[__webpack_require__.e(0), __webpack_require__.e(41)]).then(__webpack_require__.bind(null, 275));
	  return;
  }
//  if(href.indexOf("eventscalendar")>-1) {
//		__webpack_require__.e(/* import() | events-calendar */ 28).then(__webpack_require__.bind(null, 244));
//		return;
//  }
  if(href.indexOf("managechecklist")>-1) {
		__webpack_require__.e(/* import() | manage-checklist */ 42).then(__webpack_require__.bind(null, 276));
		return;
  }
//  if(href.indexOf("search")>-1) {
//		Promise.all(/* import() | search */[__webpack_require__.e(4), __webpack_require__.e(56)]).then(__webpack_require__.bind(null, 277));
//		return;
//  }
  if(href.indexOf("topicdetails")>-1) {
		Promise.all(/* import() | topic-details */[__webpack_require__.e(0), __webpack_require__.e(70)]).then(__webpack_require__.bind(null, 278));
		return;
  }
  if(href.indexOf("readonly/curriculumviewreadonly")>-1) {
	Promise.all(/* import() | curriculum-read-only */[__webpack_require__.e(1), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, 279));
	return;
	}
//  if(href.indexOf("curriculumview")>-1) {
//		Promise.all(/* import() | curriculum-trainings-view */[__webpack_require__.e(1), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, 280));
//		return;
//  }
  if(href.indexOf("universalprofile/snapshot/leaderboard")>-1) {
		__webpack_require__.e(/* import() | leaderboard */ 38).then(__webpack_require__.bind(null, 281));
		return;
	}
	if(href.indexOf("badges")>-1) {
		__webpack_require__.e(/* import() | badges */ 7).then(__webpack_require__.bind(null, 282));
		return;
	}
	if(href.indexOf("universalprofile/snapshot")>-1) {
		__webpack_require__.e(/* import() | snapshot */ 60).then(__webpack_require__.bind(null, 283));
		return;
  }
  if(href.indexOf("reviewoverview")>-1) {
		Promise.all(/* import() | review-overview */[__webpack_require__.e(0), __webpack_require__.e(55)]).then(__webpack_require__.bind(null, 284));
		return;
  }
  if(href.indexOf("cohortview")>-1) {
		Promise.all(/* import() | cohort-training-view */[__webpack_require__.e(1), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, 285));
		return;
  }
  if(href.indexOf("allteams")>-1) {
		Promise.all(/* import() | all-teams */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 286));
		return;
	}
	if(href.indexOf("selecttraining")>-1) {
		__webpack_require__.e(/* import() | select-training */ 59).then(__webpack_require__.bind(null, 287));
		return;
	}
	if(href.indexOf("team/teamoverview")>-1) {
		Promise.all(/* import() | team-overview */[__webpack_require__.e(2), __webpack_require__.e(66)]).then(__webpack_require__.bind(null, 288));
		return;
	}
	if(href.indexOf("teamtasks")>-1) {
		Promise.all(/* import() | team-tasks */[__webpack_require__.e(0), __webpack_require__.e(67)]).then(__webpack_require__.bind(null, 289));
		return;
	}
	if(href.indexOf("teamfeed")>-1) {
		Promise.all(/* import() | team-feed */[__webpack_require__.e(0), __webpack_require__.e(64)]).then(__webpack_require__.bind(null, 290));
		return;
	}
	if(href.indexOf("teammembers")>-1) {
		Promise.all(/* import() | team-members */[__webpack_require__.e(0), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, 291));
		return;
	}
	if(href.indexOf("videoview")>-1) {
		Promise.all(/* import() | video-details */[__webpack_require__.e(1), __webpack_require__.e(75)]).then(__webpack_require__.bind(null, 292));
		return;
	}
	if(href.indexOf("testview")>-1) {
		Promise.all(/* import() | test-training-details */[__webpack_require__.e(1), __webpack_require__.e(69)]).then(__webpack_require__.bind(null, 293));
		return;
	}
	if(href.indexOf("eventview")>-1) {
		Promise.all(/* import() | event-training-details */[__webpack_require__.e(1), __webpack_require__.e(27)]).then(__webpack_require__.bind(null, 294));
		return;
	}
	if(href.indexOf("materialview")>-1) {
		Promise.all(/* import() | matrial-training-details */[__webpack_require__.e(1), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, 295));
		return;
	}

	//if(href.indexOf("iltsessionview")>-1) {
	//	Promise.all(/* import() | ilt-session-view */[__webpack_require__.e(1), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, 296));
	//	return;
	//}
	if(href.indexOf("universalprofile/actions")>-1) {
		__webpack_require__.e(/* import() | snapshot-actions */ 61).then(__webpack_require__.bind(null, 297));
		return;
	}
	//if(href.indexOf("usertranscript/certview")>-1) {
	//	__webpack_require__.e(/* import() | snapshot-actions */ 61).then(__webpack_require__.bind(null, 298));
	//	return;
	//}
	if(href.indexOf("customform")>-1) {
		__webpack_require__.e(/* import() | change-of-personal-details */ 10).then(__webpack_require__.bind(null, 299));
		return;
	}
//	if(href.indexOf("launchvideo")>-1) {
//		__webpack_require__.e(/* import() | launch-video */ 37).then(__webpack_require__.bind(null, 300));
//	}
//	if(href.indexOf("posting/discussionpostingdetails")>-1) {
//		Promise.all(/* import() | discussion-posting-details */[__webpack_require__.e(0), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, 301));
//		return;
//	}
//	if(href.indexOf("posting/qapostingdetails")>-1) {
//		Promise.all(/* import() | qa-posting-details */[__webpack_require__.e(0), __webpack_require__.e(52)]).then(__webpack_require__.bind(null, 302));
//		return;
//	}
//	if(href.indexOf("posting/filepostingdetails")>-1) {
//		Promise.all(/* import() | file-posting-details */[__webpack_require__.e(0), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 303));
//		return;
//	}
//	if(href.indexOf("posting/suggestionpostingdetails")>-1) {
//		Promise.all(/* import() | suggestion-posting-details */[__webpack_require__.e(0), __webpack_require__.e(63)]).then(__webpack_require__.bind(null, 268));
//		return;
//	}
	if(href.indexOf("courserating/coursereviewsdetail")>-1) {
		Promise.all(/* import() | сourse-reviews-detail */[__webpack_require__.e(1), __webpack_require__.e(76)]).then(__webpack_require__.bind(null, 304));
		return;
	}
	if(href.indexOf("passwordchange")>-1) {
		Promise.all(/* import() | password-change */[__webpack_require__.e(0), __webpack_require__.e(50)]).then(__webpack_require__.bind(null, 305));
		return;
	}
	if(href.indexOf("usertestreview")>-1) {
		Promise.all(/* import() | user-test-review */[__webpack_require__.e(2), __webpack_require__.e(74)]).then(__webpack_require__.bind(null, 306));
	}
	if(href.indexOf("interesttracking")>-1) {
		Promise.all(/* import() | interest-tracking */[__webpack_require__.e(0), __webpack_require__.e(36)]).then(__webpack_require__.bind(null, 307));
		return;
	}
	if(href.indexOf("ilt/cancel_registration")>-1) {
		Promise.all(/* import() | ilt-cancel-registration */[__webpack_require__.e(1), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 308));
		return;
	}
	if(href.indexOf("removetraining")>-1) {
		__webpack_require__.e(/* import() | remove-training */ 53).then(__webpack_require__.bind(null, 309));
		return;
	}
	if(href.indexOf("checkoutnew")>-1) {
		__webpack_require__.e(/* import() | checkout-new */ 11).then(__webpack_require__.bind(null, 310));
		return;
	}

	if(href.indexOf("trainingmarkcomplete")>-1) {
		__webpack_require__.e(/* import() | training-mark-complete */ 73).then(__webpack_require__.bind(null, 311));
		return;
	}
	if(href.indexOf("edittranscriptdetails")>-1) {
		Promise.all(/* import() | edit-transcript-details */[__webpack_require__.e(1), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, 312));
		return;
	}
	if(href.indexOf("selectorgunits")>-1) {
		__webpack_require__.e(/* import() | select-org-units */ 57).then(__webpack_require__.bind(null, 313));
		return;
	}
}
// CONCATENATED MODULE: ./src/index.js

let $ = jQuery;
var isjQueryLoaded = setInterval(function() {
    window.jQuery &&
    (clearInterval(isjQueryLoaded), start());
}, 50);

function start() {
    $(document).ready && $(document).ready(importRelatedChunk()) || jQuery(document).ready && jQuery(document).ready(importRelatedChunk());
}

/***/ })
/******/ ]);
