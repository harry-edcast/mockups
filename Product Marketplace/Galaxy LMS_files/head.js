function detectIframe(navigateOnError) {
    try {
        var canAccessIframe = !(typeof window.top === 'undefined') && window.top.document != null;
    }
    catch (ex) {
        window.top.location = navigateOnError;
    }
}

function registerNamespace(namespacePath)
{
    var rootObject = window;
    var namespaceParts = namespacePath.split('.');
	for (var i = 0; i < namespaceParts.length; i++)
	{
        var currentPart = namespaceParts[i];
        var ns = rootObject[currentPart];
		if (ns && !ns.__namespace)
		{
            throw 'Namespace ' + namespaceParts.splice(0, i + 1).join('.') + ' already exists and is not a namespace.';
        }
		if (!ns)
		{
            ns = rootObject[currentPart] = {
                __namespace: true,
                __typeName: namespaceParts.slice(0, i + 1).join('.')
            };
            var parsedName;
			try
			{
                parsedName = eval(ns.__typeName);
            }
			catch (e)
			{
                parsedName = null;
            }
			if (parsedName !== ns)
			{
                delete rootObject[currentPart];
                throw 'Invalid namespace.';
            }
            ns.getName = function ns$getName() { return this.__typeName; }
        }
        rootObject = ns;
    }
}


window._isIE6 = null;
window._isIE = null;

function isIE6() {
    if(window._isIE6 == null)
    {
        var arVersion = navigator.appVersion.split("MSIE");
        var version = parseFloat(arVersion[1]);
        if ((version >= 5.5 && version < 7) && (document.body.filters)) {
            window._isIE6 = true;
        }
        else {
            window._isIE6 = false;
        }
    }
    return window._isIE6;
}

function isIE() {
    if (window._isIE == null) {
        if (navigator.appVersion && navigator.appVersion.toString().indexOf("MSIE") >= 0)
            window._isIE = true;
        else
            window._isIE = false;
    }
    return window._isIE;
}

//Checks to see if the page was launched as a popup or an iframe and returns the corresponding window.
function getWindow()
{
    if (window.opener == null)
        return window.parent;
    else
        return window.opener;
}

function RegisterHandler(object, element, eventName, newDelegate)
{
    if (object._easyHandlers == null) {
        object._easyHandlers = new Array();
    }
    var x = new Object();
    x.object = object;
    x.element = element;
    x.eventName = eventName;
    x.delegate = newDelegate;
    object._easyHandlers.push(x);
    $addHandler(element, eventName, newDelegate);
    if (typeof (Cornerstone$Core$Web$Disposer$IsActive) == "boolean" && Cornerstone$Core$Web$Disposer$IsActive) {
        Cornerstone.Core.Web.Disposer.pushElement(element);
    }
    return newDelegate;
}

function CreateXmlDocument()
{
	if (document.implementation && document.implementation.createDocument)
	{
        xmlDoc = document.implementation.createDocument("", "", null);
    }
	else if (window.ActiveXObject)
	{
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    }
	else
	{
        alert('Your browser can\'t handle this script');
        return;
    }
    return xmlDoc;
}

function CreateXmlDocumentFromString(xmlString) {

    if (typeof ActiveXObject != 'undefined' && typeof GetObject != 'undefined') {
        var doc = new ActiveXObject('Microsoft.XMLDOM');
        doc.async = "false";
        doc.loadXML(xmlString);
        return doc;
    }

    if (typeof DOMParser != 'undefined') {
        return (new DOMParser()).parseFromString(xmlString, 'text/xml');
    }

    //return createElement('div', null); //not sure if adding this would help anything.
}

function GetAttribute(element, attributeName)
{
    if (element.attributes == null)
        return null;
    return element.getAttributeNode(attributeName);
}

testtest = 0;
function DoesElementHaveAttribute(element, attributeName, attributeValue)
{	
	if(GetAttribute(element, attributeName) != null)
	{
        if (attributeValue == null || attributeValue == GetAttribute(element, attributeName).value)
            return true;
        else
            return false;
    }
	else
	{
        return false;
    }
}

function GetParentByFunction(element, delegateFunction)
{
	while(element.parentNode != null)
	{
        if (delegateFunction(element)) {
            return element;
        }
        element = element.parentNode;
    }
    return null;
}

function ForEachChildElements(element, delegateFunction)
{
    delegateFunction(element);
    for(var i = 0; i < element.childNodes.length; i++)
    {
        ForEachChildElements(element.childNodes[i], delegateFunction);
    }
}

function GetAllChildElementsByAttribute(element, attributeName, attributeValue)
{
    var outputElementsArray = new Array();
    GetAllChildElementsByAttributeRecursive(outputElementsArray, element, attributeName, attributeValue);
    return outputElementsArray;
}

function GetAllChildElementsByAttributeRecursive(outputElementsArray, element, attributeName, attributeValue)
{
    if (DoesElementHaveAttribute(element, attributeName, attributeValue))
        outputElementsArray.push(element);
	if(element.childNodes != null)
	{
	    for(var i = 0; i < element.childNodes.length; i++)
	    {
            GetAllChildElementsByAttributeRecursive(outputElementsArray, element.childNodes[i], attributeName, attributeValue);
        }
    }
}

var parentAttribute = null;
var parentAttributeValue = null;
function GetParentElementByAttribute(element, attribute, attributeValue)
{
    parentAttribute = attribute;
    parentAttributeValue = attributeValue;
    return GetParentByFunction(element, GetParentElementByAttributeDelegate);
}

//This should really be a prototype \ class
function GetParentElementByAttributeDelegate(element)
{
    return DoesElementHaveAttribute(element, parentAttribute, parentAttributeValue);
}

function GetElementByAttribute(elements, attributeName, attributeValue, lastElementFound)
{
    //window.console.log('GetElementByAttribute');    
    var foundLastElement = false;
    if (lastElementFound == null)
        foundLastElement = true;
	for(var i = 0; i < elements.length; i++)
	{
		if(foundLastElement)
		{
			if(DoesElementHaveAttribute(elements[i], attributeName, attributeValue))
			{
                return elements[i];
            }
        }
		else if(lastElementFound = elements[i])
		{
            foundLastElement = true;
        }
    }
    return null;
}

//NOTE: Ignoring tagName. Ids shouldn't techinically conflict anyways.
function GetChildElementById(parentElement, id, tagName)
{    
    //var children = parentElement.getElementsByTagName(tagName);
    var children = parentElement.childNodes;
	for(var i = 0; i < children.length; i++)
	{
        var child = children[i];
        if (id == '' && child.tagName != null && child.tagName.toUpperCase() == tagName.toUpperCase())
            return child
        else if (id != '' && child.id == id)
            return child;
        var elementFound = GetChildElementById(child, id, tagName);
        if (elementFound != null)
            return elementFound;
    }
    return null;
}

function KeyLen(textbox, label)
{
    window.status = GetInnerText(textbox);
    SetInnerText(label, "Characters Left: " + (3500 - GetInnerText(textbox).length));
}

function StreamPrint(url, iframeElement)
{ 
    window.open(url, iframeElement);
    return false;
}

function StreamPrintReview(url) {
    var open = window.open(url);
    if (open == null || open == undefined)
        alert("WARNING!\r\n\r\nA pop-up window blocker has been detected on your system.  Please disable/uninstall any pop-up blocking software.");
    return false;
}

function SetInnerText(element, textValue) {
    if (element.tagName == 'IFRAME') {
        element.contentWindow.document.body.innerHTML = textValue;
    }
    else if (element.tagName == 'INPUT' || element.tagName == 'TEXTAREA') {
        element.value = textValue;
    }
    else {
        element.innerHTML = textValue;
    }
}

function GetInnerText(element) {
    if (element.tagName == 'IFRAME') {
        return element.contentWindow.document.body.innerHTML;
    }
    else {
        if (element.tagName == 'INPUT' || element.tagName == 'TEXTAREA')
            return element.value;
        else
            return element.innerHTML;
    }
}

function DisposeHandler(object)
{
    var i;
    if (object._events == null) {
        return;
    }
    if (object._easyHandlers != null) {
        while (object._easyHandlers.length > 0) {
            var x = object._easyHandlers.pop();
            if (x.object == object && typeof (x.element._events) === 'object' && x.element._events != null && x.element._events[x.eventName] instanceof Array) {
                $removeHandler(x.element, x.eventName, x.delegate);
            }
        }
    }
}

lastElement = null;
tableLastElement = null;
function onMouseOverColor(element)
{
    if (document.readyState && document.readyState != "complete")
        return;

	if(__AllowRollOver == 'True')
	{
        element.oldClassName = element.className;
        if (window.IsTabsNewUI && window.IsTabsNewUI == true)
            element.className = "tablerolloverNewUI";
        else
            element.className = "tablerollover";

    }
}

function onMouseOutColor(elm)
{
	if(elm.oldClassName != null)
	{
        elm.className = elm.oldClassName;
        elm.oldClassName = null;
    }
}

function onMouseOverNavInactive(element)
{
    if (document.readyState && document.readyState != "complete")
        return;
    lastElement = element;
    oldColorNav = new Object();
    oldColorNav.className = element.className;
	if(__AllowNavRollOver == 'True')
	{
        element.className = "inactiverollover";
    }
	else
	{
        element.className = oldColorNav.className;
    }
}

function onMouseOutNavInactive(elm)
{
    if (lastElement == null || oldColorNav == null)
        return;
    lastElement = null;
    elm.className = oldColorNav.className;
}

function EOnStop()
{
    if (lastElement != null)
        onMouseOutNavInactive(lastElement);
    if (tableLastElement != null)
        onMouseOutColor(tableLastElement);
}

document.onstop = EOnStop;

var warningTimer;
var cornerstoneSpecialTimeOut = 1;

function extendSession(handler) {
    if (typeof handler !== 'undefined')
        handler();
    else {
        var getImg = new Image();
        var src = __TempImageSource;
        if (src.indexOf('?') > -1)
            src += '&';
        else
            src += '?';
        src += 't=' + (new Date()).getTime().toString();
        getImg.src = src;
    }

    clearTimeout(warningTimer);
    startInitialTimer();
}

function overlayConfirmAutoLogout(expireTimer) {
    var obj = new OverlayConfirm({
        title: location.host,
        description: [__TimeOutMessage, __AutoLogoutMessage.replace('[TIME]', expireTimer.toLocaleTimeString())],
        okText: __AutoLogoutOKButton,
        cancelText: __AutoLogoutCancelButton,
        cancelTimeout: expireTimer,
        okCallback: function () {
            if (expireTimer > new Date()) {
                expire = false;
                var getImg = new Image();
                getImg.src = __TempImageSource;
                clearTimeout(warningTimer);
                startInitialTimer();
                if (__impKeepAlive != null && __impKeepAlive && __impKeepAlive != "false") {
                    //var now = new Date();
                    //var nowUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    //var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
                    //pageLoadTimeStamp = nowUtc.format(__impexpectedFormats);
                    getTimeStampInfo(__impexpectedFormats, "");
                    //setTimeout("CheckTime();", 2000);
                    setTimeout("checkTimeout(__impStrUrl, __impKeepAliveDebug)", __impKeepAliveTimeoutDelay);
                }
                console.log(this);
                this.close();
            } else {
                location.replace(__TimeOutUrl);
            }
        },
        cancelCallback: function () {
            if (expireTimer < new Date())
                location.replace(__TimeOutUrl);
            else {
                clearTimeout(warningTimer);
                startInitialTimer();
                this.close();
            }
        }
    });
    obj.open();
}

function useOverlayConfirm() {
    var result = false;
    if (typeof OverlayConfirm !== 'undefined') {
        if (location.href.toUpperCase().indexOf("COMPENSATION/") === -1) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
}

function restartTimer() {
    expireTimer = new Date();
    expireTimer.setMinutes(expireTimer.getMinutes() + 5); //new Date(Date.parse(Date()) + (5 * 60000)); this was not working properly on pages with date.js
    var message = __TimeOutMessage + '\n\n' + __AutoLogoutMessage.replace('[TIME]', expireTimer.toLocaleTimeString());
    var expire = true;
    var timeout = false;

    self.focus();

    if (useOverlayConfirm()) {
        overlayConfirmAutoLogout(expireTimer);
    } else {
        if (confirm(message)) {
            if (expireTimer > new Date()) {
                expire = false;
                var getImg = new Image();
                getImg.src = __TempImageSource;
                clearTimeout(warningTimer);
                startInitialTimer();
                if (__impKeepAlive != null && __impKeepAlive && __impKeepAlive != "false") {
                    //var now = new Date();
                    //var nowUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
                    //var nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
                    //pageLoadTimeStamp = nowUtc.format(__impexpectedFormats);
                    getTimeStampInfo(__impexpectedFormats, "");
                    //setTimeout("CheckTime();", 2000);
                    setTimeout("checkTimeout(__impStrUrl, __impKeepAliveDebug)", __impKeepAliveTimeoutDelay);
                }
            }
        }

        if (expireTimer < Date.parse(Date()))
            timeout = true;

        if (expire) {
            if (timeout)
                location.replace(__TimeOutUrl);
            else
                location.replace(__LogOutUrl);
        }
    }
}

function restartTimerConfirmedFromCoursePopup() {
    clearTimeout(warningTimer);
    startInitialTimer();
}

function getTimeStampInfo(format, url) {
    req = false;
    // branch for native XMLHttpRequest object
    if (window.XMLHttpRequest && !(window.ActiveXObject)) {
        try {
            req = new XMLHttpRequest();
        } catch (e) {
            req = false;
        }
        // branch for IE/Windows ActiveX version
    } else if (window.ActiveXObject) {
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                req = false;
            }
        }
    }

    if (req != null) {

        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                // only if ok
                pageLoadTimeStamp = req.responseText;
            }

        }
        req.open("GET", "../../timestamp.aspx", true);
        req.send("");
    }
}
function CheckTime() {
    checkTimeout(__impStrUrl, __impKeepAliveDebug);
}

function startInitialTimer()
{
    warningTimer = setTimeout("restartTimer();", __InitialTimeOut);
}

function startTimer() 
{
    warningTimer = setTimeout("restartTimer();", __RegularTimeOut);
}

function callTimer() {
    //If window.opener is SSO page or client own web page, cornerstoneSpecialTimeOut will be NULL
    if (!window.opener || window.opener.closed) {
        clearTimeout(warningTimer);
        startTimer();
    } else {
        var windowOpenerCornerstoneSpecialTimeOut = null;
        try {
            windowOpenerCornerstoneSpecialTimeOut = window.opener.cornerstoneSpecialTimeOut;
        } catch (ex) {
        }

        //window.opener sometimes equals window, when this happens, we go in an infinite loop, this solves if statement solves the problem.
        if (window.opener == window) {
            clearTimeout(warningTimer);
            startTimer();
        }
        else if (windowOpenerCornerstoneSpecialTimeOut == null) {
            clearTimeout(warningTimer);
            startTimer();
        } else {
            window.opener.callTimer();
        }
    }
}

function onMouseOverColorCustomClass(element, rollOverClass)
{
    oldColor = new Object();
    oldColor.className = element.className;
    element.className = rollOverClass;
}

function onMouseOutColorCustomClass(elm)
{
    elm.className = oldColor.className;
}

function fixTabs() {
    var tabs = document.getElementById('_header1bg');
	if(tabs) 
	{
        //set the tabstrip to a very high value so that no tabs overlap
        tabs.style.width = '2000px';
        var totalLength = 0;
        for (var i = 0; i < tabs.childNodes.length; i++) {
            if (tabs.childNodes[i].clientWidth)
                totalLength += tabs.childNodes[i].clientWidth + 1;
        }
        tabs.style.width = totalLength + 'px';
        var subTab = document.getElementById('_navsub');
        subTab.style.minWidth = totalLength + 'px';
    }
}

function jsDelegate(f1, f2) 
{
	return function() 
	{
        if (f1)
            f1();
        if (f2)
            f2();
    }
}

/*function SubNavChanged(tabListExtender, inactiveTab)
{
    if(tabListExtender._CurrentTab != null && tabListExtender._ActiveTabContainer != tabListExtender._CurrentTab)
    {
        ChangeCssOfTab($get(tabListExtender._CurrentTab.TargetControlId), "_RollOver");
         $get(tabListExtender._CurrentTab.TargetControlId).style.zIndex = 101;
    }
    
    if(inactiveTab != null && inactiveTab != tabListExtender._ActiveTabContainer && inactiveTab != tabListExtender._CurrentTab){
        ChangeCssOfTab($get(inactiveTab.TargetControlId), "");
        //$get(inactiveTab.TargetControlId).style.zIndex = $get(inactiveTab.TargetControlId).attributes["zIndex2"].value; //To fix timer error, zindex2 remembers the og z-index
    }
    //ChangeCssOfTab(inactiveTab, "");
}

function ChangeCssOfTab(tab, cssName)
{
    for(i = 0; i < tab.childNodes.length; i++)
    {
        if(tab.childNodes[i].nodeName == "DIV")
        {
            var tabpart = tab.childNodes[i].attributes["tabpart"];
            if(tabpart != null)
            {
                tab.childNodes[i].attributes["class"].value = "mmNav" + tabpart.value + cssName;
            }
        }
    }
}*/


function pngOnLoad()
{
    var arVersion = navigator.appVersion.split("MSIE");
    var version = parseFloat(arVersion[1]);
	if ((version >= 5.5 && version < 7) && (document.body.filters))
	{
        // Does img tags
		for (var i = 0; i < document.images.length; i++)
		{
            var img = document.images[i];
            var imgName = img.src.toUpperCase();
            var w = img.clientWidth, h = img.clientHeight;
			if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
			{
                img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + img.src + "')";
                if (w > 0)
                    img.style.width = w + 'px';
                if (h > 0)
                    img.style.height = h + 'px';
                img.src = _APP_PATH + 'images/blank.gif';
            }
        }

        // image inputs (ImageButton)
        var inputs = document.getElementsByTagName('input');
		for (var i = 0; i < inputs.length; i++)
		{
            var ctrl = inputs[i];
            if (ctrl.type.toLowerCase() != 'image')
                continue;

            var imgName = ctrl.src.toUpperCase();
            var w = ctrl.clientWidth, h = ctrl.clientHeight;
			if (imgName.substring(imgName.length - 3, imgName.length) == "PNG")
			{
                ctrl.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + ctrl.src + "')";
                if (w > 0)
                    ctrl.style.width = w + 'px';
                if (h > 0)
                    ctrl.style.height = h + 'px';
                ctrl.src = _APP_PATH + 'images/blank.gif';
            }
        }
    }
}

function ltrimChar(str, character) {
    if (str.length > 0)
        if (str.substring(0, 1) == character)
            return str.substring(1);
    return str;
}

/* Collapsible and Expand for CsPanel*/
function DisplayHideDetails(sender, detailsDivId)
{
if($(detailsDivId).style.display != 'none')
{
        new Effect.Fade(detailsDivId, { duration: 0.3 });
        new Effect.BlindUp(detailsDivId, { duration: 0.2 });
        sender.firstChild.src = ResolveUrl('/images/panel_arrow_down.png');
        sender.parentNode.getElementsByTagName('input')[0].value = '0';

    }
else
{
        new Effect.BlindDown(detailsDivId, { duration: 0.2 });
        new Effect.Appear(detailsDivId, { duration: 0.3 });
        sender.firstChild.src = ResolveUrl('/images/panel_arrow_up.png');
        sender.parentNode.getElementsByTagName('input')[0].value = '1';
    }
}

function InitControll(titleDivID, detailsDivId)
{
    var titleDiv = $(titleDivID);
    var detailsDiv = $(detailsDivId);

    var state = titleDiv.getElementsByTagName('input')[0];
    detailsDiv.style.display = state.value == '0' ? 'none' : '';

    var expandLink = titleDiv.getElementsByTagName('a')[0];
    expandLink.firstChild.src = state.value == '0' ? ResolveUrl('/images/panel_arrow_down.png') : ResolveUrl('/images/panel_arrow_up.png');
}

function addCss(cssCode) 
{
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    if (styleElement.styleSheet)
        styleElement.styleSheet.cssText = cssCode;
    else
        styleElement.appendChild(document.createTextNode(cssCode));
    document.getElementsByTagName('head')[0].appendChild(styleElement);

    if (typeof (Cornerstone$Core$Web$Disposer$IsActive) == "boolean" && Cornerstone$Core$Web$Disposer$IsActive) {
        Cornerstone.Core.Web.Disposer.pushElement(styleElement);
    }
}

function printControl(elementId) {
    if (document.nonPrintableStyleRegistered == null || document.nonPrintableStyleRegistered == false) {
        addCss('@media print{ .hideOnPrint { display:none; }}');
        document.nonPrintableStyleRegistered = true;
    }

    var ctrlPrint = document.getElementById(elementId);
    if (ctrlPrint != null) {
        while (ctrlPrint.tagName != 'BODY') {
            var childNodes = ctrlPrint.parentNode.childNodes;
            var nodesCount = childNodes.length;

            for (var i = 0; i < nodesCount; i++) {
                if (childNodes[i].nodeType == 1 && childNodes[i] != ctrlPrint && !childNodes[i].className.match(/hideOnPrint/gi))
                    childNodes[i].className += " hideOnPrint";
            }
            ctrlPrint = ctrlPrint.parentNode;
        }
    }
    window.print();
}

/*End*/

function IsTableOldStyle(element)
{
	if(element.tagName == 'TABLE')
	{
        if (element.attributes['cellspacing'] != null) {
            if (element.attributes['cellspacing'].value == '1' || element.attributes['cellspacing'].value == '2') {
                return element;
            }
        }
        return true;
    }
    else
        return false;
}


function GetImageHtml(src, width, height, alt)
{
    var imageHtml;
    window.status = src;
    var altHtml = '';
    if(alt != null)
    {
        altHtml = " alt=\"" + alt.replace('\"', '\\\"') + "\" ";
        altHtml += " title=\"" + alt.replace('\"', '\\\"') + "\" "
    }
    if (window.isIE6())
        imageHtml = "<img " + altHtml + " border=\"0\" width=\"" + width + "\" height=\"" + height + "\" style=\"filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethid='crop');\" src=\"" + ResolveUrl("images/blank.gif") + "\">";
    else
        imageHtml = "<img " + altHtml + " src ='" + src + "' border=\"0\">";
    return imageHtml;
}

function AddOnLoad(obj)
{
    if(window.Sys)
    {
	    if (typeof(window.Sys) !== 'undefined')
	    {
            Sys.Application.add_load(obj);
        }
	    else
	    {
            window.onload = jsDelegate(window.onload, obj);
        }
    }
	else
    {
        window.onload = jsDelegate(window.onload, obj);
    }
}


function urlencode(str) {
    if (typeof (str) == "undefined" || str == null || str == "") {
        return "";
    }
    str = escape(str);
    str = str.replace('+', '%2B');
    str = str.replace('%20', '+');
    str = str.replace('*', '%2A');
    str = str.replace('/', '%2F');
    str = str.replace('@', '%40');
    return str;
}

function urldecode(str) {
    if (typeof (str) == "undefined" || str == null || str == "") {
        return "";
    }
    str = str.replace('+', ' ');
    str = unescape(str);
    return str;
}

var encodingUtils = {
    // Use this method of decoding as opposed to the one below because this will catch all tags and will decode javascript encodings as well
    // WARNING: Depends on jQuery
    decodeHtmlJS: function (value) {
        // Uses an in memory div, populates it with your value then extracts just the text which will decode HTML and Javascript escape sequences
        if (typeof jQuery === "undefined") {
            return htmldecode(value);
        }
        else {
            return jQuery("<div/>").html(value).text();
        }
    }
};

function htmldecode(str) {
    if (typeof (str) == "undefined" || str == null || str == "") {
        return "";
    }
    var arr1 = new Array('&quot;', '&amp;', '&apos;', '&lt;', '&gt;', '&nbsp;', '&iexcl;', '&cent;', '&pound;', '&curren;', '&yen;', '&brvbar;', '&sect;', '&uml;', '&copy;', '&ordf;', '&laquo;', '&not;', '&shy;', '&reg;', '&macr;', '&deg;', '&plusmn;', '&sup2;', '&sup3;', '&acute;', '&micro;', '&para;', '&middot;', '&cedil;', '&sup1;', '&ordm;', '&raquo;', '&frac14;', '&frac12;', '&frac34;', '&iquest;', '&agrave;', '&aacute;', '&acirc;', '&atilde;', '&Auml;', '&aring;', '&aelig;', '&ccedil;', '&egrave;', '&eacute;', '&ecirc;', '&euml;', '&igrave;', '&iacute;', '&icirc;', '&iuml;', '&eth;', '&ntilde;', '&ograve;', '&oacute;', '&ocirc;', '&otilde;', '&Ouml;', '&times;', '&oslash;', '&ugrave;', '&uacute;', '&ucirc;', '&Uuml;', '&yacute;', '&thorn;', '&szlig;', '&agrave;', '&aacute;', '&acirc;', '&atilde;', '&auml;', '&aring;', '&aelig;', '&ccedil;', '&egrave;', '&eacute;', '&ecirc;', '&euml;', '&igrave;', '&iacute;', '&icirc;', '&iuml;', '&eth;', '&ntilde;', '&ograve;', '&oacute;', '&ocirc;', '&otilde;', '&ouml;', '&divide;', '&oslash;', '&ugrave;', '&uacute;', '&ucirc;', '&uuml;', '&yacute;', '&thorn;', '&yuml;', '&quot;', '&amp;', '&lt;', '&gt;', '&oelig;', '&oelig;', '&scaron;', '&scaron;', '&yuml;', '&circ;', '&tilde;', '&ensp;', '&emsp;', '&thinsp;', '&zwnj;', '&zwj;', '&lrm;', '&rlm;', '&ndash;', '&mdash;', '&lsquo;', '&rsquo;', '&sbquo;', '&ldquo;', '&rdquo;', '&bdquo;', '&dagger;', '&dagger;', '&permil;', '&lsaquo;', '&rsaquo;', '&euro;', '&fnof;', '&alpha;', '&beta;', '&gamma;', '&delta;', '&epsilon;', '&zeta;', '&eta;', '&theta;', '&iota;', '&kappa;', '&lambda;', '&mu;', '&nu;', '&xi;', '&omicron;', '&pi;', '&rho;', '&sigma;', '&tau;', '&upsilon;', '&phi;', '&chi;', '&psi;', '&omega;', '&alpha;', '&beta;', '&gamma;', '&delta;', '&epsilon;', '&zeta;', '&eta;', '&theta;', '&iota;', '&kappa;', '&lambda;', '&mu;', '&nu;', '&xi;', '&omicron;', '&pi;', '&rho;', '&sigmaf;', '&sigma;', '&tau;', '&upsilon;', '&phi;', '&chi;', '&psi;', '&omega;', '&thetasym;', '&upsih;', '&piv;', '&bull;', '&hellip;', '&prime;', '&prime;', '&oline;', '&frasl;', '&weierp;', '&image;', '&real;', '&trade;', '&alefsym;', '&larr;', '&uarr;', '&rarr;', '&darr;', '&harr;', '&crarr;', '&larr;', '&uarr;', '&rarr;', '&darr;', '&harr;', '&forall;', '&part;', '&exist;', '&empty;', '&nabla;', '&isin;', '&notin;', '&ni;', '&prod;', '&sum;', '&minus;', '&lowast;', '&radic;', '&prop;', '&infin;', '&ang;', '&and;', '&or;', '&cap;', '&cup;', '&int;', '&there4;', '&sim;', '&cong;', '&asymp;', '&ne;', '&equiv;', '&le;', '&ge;', '&sub;', '&sup;', '&nsub;', '&sube;', '&supe;', '&oplus;', '&otimes;', '&perp;', '&sdot;', '&lceil;', '&rceil;', '&lfloor;', '&rfloor;', '&lang;', '&rang;', '&loz;', '&spades;', '&clubs;', '&hearts;', '&diams;');
    var arr2 = new Array('&#34;', '&#38;', '&#39;', '&#60;', '&#62;', '&#160;', '&#161;', '&#162;', '&#163;', '&#164;', '&#165;', '&#166;', '&#167;', '&#168;', '&#169;', '&#170;', '&#171;', '&#172;', '&#173;', '&#174;', '&#175;', '&#176;', '&#177;', '&#178;', '&#179;', '&#180;', '&#181;', '&#182;', '&#183;', '&#184;', '&#185;', '&#186;', '&#187;', '&#188;', '&#189;', '&#190;', '&#191;', '&#192;', '&#193;', '&#194;', '&#195;', '&#196;', '&#197;', '&#198;', '&#199;', '&#200;', '&#201;', '&#202;', '&#203;', '&#204;', '&#205;', '&#206;', '&#207;', '&#208;', '&#209;', '&#210;', '&#211;', '&#212;', '&#213;', '&#214;', '&#215;', '&#216;', '&#217;', '&#218;', '&#219;', '&#220;', '&#221;', '&#222;', '&#223;', '&#224;', '&#225;', '&#226;', '&#227;', '&#228;', '&#229;', '&#230;', '&#231;', '&#232;', '&#233;', '&#234;', '&#235;', '&#236;', '&#237;', '&#238;', '&#239;', '&#240;', '&#241;', '&#242;', '&#243;', '&#244;', '&#245;', '&#246;', '&#247;', '&#248;', '&#249;', '&#250;', '&#251;', '&#252;', '&#253;', '&#254;', '&#255;', '&#34;', '&#38;', '&#60;', '&#62;', '&#338;', '&#339;', '&#352;', '&#353;', '&#376;', '&#710;', '&#732;', '&#8194;', '&#8195;', '&#8201;', '&#8204;', '&#8205;', '&#8206;', '&#8207;', '&#8211;', '&#8212;', '&#8216;', '&#8217;', '&#8218;', '&#8220;', '&#8221;', '&#8222;', '&#8224;', '&#8225;', '&#8240;', '&#8249;', '&#8250;', '&#8364;', '&#402;', '&#913;', '&#914;', '&#915;', '&#916;', '&#917;', '&#918;', '&#919;', '&#920;', '&#921;', '&#922;', '&#923;', '&#924;', '&#925;', '&#926;', '&#927;', '&#928;', '&#929;', '&#931;', '&#932;', '&#933;', '&#934;', '&#935;', '&#936;', '&#937;', '&#945;', '&#946;', '&#947;', '&#948;', '&#949;', '&#950;', '&#951;', '&#952;', '&#953;', '&#954;', '&#955;', '&#956;', '&#957;', '&#958;', '&#959;', '&#960;', '&#961;', '&#962;', '&#963;', '&#964;', '&#965;', '&#966;', '&#967;', '&#968;', '&#969;', '&#977;', '&#978;', '&#982;', '&#8226;', '&#8230;', '&#8242;', '&#8243;', '&#8254;', '&#8260;', '&#8472;', '&#8465;', '&#8476;', '&#8482;', '&#8501;', '&#8592;', '&#8593;', '&#8594;', '&#8595;', '&#8596;', '&#8629;', '&#8656;', '&#8657;', '&#8658;', '&#8659;', '&#8660;', '&#8704;', '&#8706;', '&#8707;', '&#8709;', '&#8711;', '&#8712;', '&#8713;', '&#8715;', '&#8719;', '&#8721;', '&#8722;', '&#8727;', '&#8730;', '&#8733;', '&#8734;', '&#8736;', '&#8743;', '&#8744;', '&#8745;', '&#8746;', '&#8747;', '&#8756;', '&#8764;', '&#8773;', '&#8776;', '&#8800;', '&#8801;', '&#8804;', '&#8805;', '&#8834;', '&#8835;', '&#8836;', '&#8838;', '&#8839;', '&#8853;', '&#8855;', '&#8869;', '&#8901;', '&#8968;', '&#8969;', '&#8970;', '&#8971;', '&#9001;', '&#9002;', '&#9674;', '&#9824;', '&#9827;', '&#9829;', '&#9830;');
    var len = arr1.length;
    for (var i = 0; i < len; i++) {
        re = new RegExp(arr1[i], 'g');
        str = str.replace(re, arr2[i]);
    }

    var matches = str.match(/&#[0-9]{1,5};/g);
    if (matches != null) {
        len = matches.length;
        for (var i = 0; i < len; i++) {
            var m = matches[i];
            var c = parseInt(m.substring(2, m.length - 1));
            if (c >= 1 && c <= 65535) {
                str = str.replace(m, String.fromCharCode(c));
            } else {
                str = str.replace(m, "");
            }
        }
    }

    return str;
}

function csRedirect(url)
{
	if (isIE())
	{
        // Normal browsers always send a HTTP_REFERER header when redirecting. IE does so with links,
        // but not when setting window.location.href, so we create a dummy link and simulate a click.

        var a = document.createElement('a');
        a.href = url;
        document.body.appendChild(a);
        a.click();
    }
    else
        window.location.href = url;
}

function AutoShowModal(mpeClientID) {
    if ($find(mpeClientID + "_MPE") != null) {
        if ($find(mpeClientID + "_MPE")._backgroundElement.style.display == 'none') {
            $find(mpeClientID + "_MPE").show();
        }
    }
    else {
        setTimeout('AutoShowModal(\'' + mpeClientID + '\');', 100);
    }
}


function Ie6HackIframe(ctrl, appendToParent, topOffset) {
    if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 7) 
    {
        var f = $get(ctrl.id + '_ie6_hack_frame');
        if (f == null) {
            f = document.createElement("iframe");
            f.id = ctrl.id + '_ie6_hack_frame';
            f.src = "javascript:false";
            f.style.position = 'absolute';
            f.style.zIndex = 0;
            f.style.top = '0px';
            f.style.left = '0px';
            f.style.height = ctrl.offsetHeight + 'px';
            f.style.width = ctrl.clientWidth + 'px';
            f.style.filter = 'alpha(opacity=0)';
            if (appendToParent) {
                ctrl.parentNode.appendChild(f);
            } else {
                ctrl.appendChild(f);
            }
        }
        if (appendToParent) {
            f.style.visibility = 'visible';
        }
        return f;
    }
    return null;
}

function reloadPage() {
    // currently 
    // * on Chrome (not on Android) - just setTimeout
    // * on Safari or Android - setTimeout of 1s
    if (navigator.userAgent.indexOf(' Chrome') > -1 && navigator.userAgent.indexOf(' Android') === -1) {
        // http://stackoverflow.com/questions/25668801/close-pop-up-and-refresh-parent-window-not-working
        setTimeout(function () {
            location.reload(true);
        }, 0);
    } else if (navigator.userAgent.indexOf(' Safari') > -1 || navigator.userAgent.indexOf(' Android') > -1) {
        // as we saw delay in sending the sendBeacon on ipad safari - we'll give it a moment
        setTimeout(function () {
            location.reload(true);
        }, 1000);
    } else {
        location.reload(true);
    }
}