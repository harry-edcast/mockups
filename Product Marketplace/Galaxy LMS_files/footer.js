// This file will be used for override .NET framework webresource.axd script files

function WebForm_FireDefaultButton(event, target) {
	if (event.keyCode == 13) {
		var targetTag = event.srcElement ? event.srcElement : event.target;
		if (targetTag.tagName.toLowerCase() != "textarea" && targetTag.className.search('mceIcon') < 0) {
			var defaultButton;
			if (__nonMSDOMBrowser) {
				defaultButton = document.getElementById(target);
			}
			else {
			    defaultButton = document.all[target];
			    //in IE focus will get stuck on input control so we will have to blur it manually
			    if (targetTag.blur)
			        targetTag.blur();
			}
			if (defaultButton && typeof (defaultButton.click) != "undefined") {
				defaultButton.click();
				event.cancelBubble = true;
				if (event.stopPropagation) event.stopPropagation();
				return false;
			}

			if (typeof (defaultButton.href) != "undefined") {
				eval(decodeURI(defaultButton.href).substr(11));
				event.cancelBubble = true;

				if (event.stopPropagation) event.stopPropagation();
				return false;
			}
		}
	}
	return true;
}

function ValidatorOnChange(event) {
	if (!event) {
		event = window.event;
	}
	Page_InvalidControlToBeFocused = null;
	var targetedControl;
	if ((typeof (event.srcElement) != "undefined") && (event.srcElement != null)) {
		targetedControl = event.srcElement;
	}
	else {
		targetedControl = event.target;
	}
	var vals = [];
	if (typeof (targetedControl.Validators) != "undefined") {
		vals = targetedControl.Validators;
	}
	else {
		if (targetedControl.tagName.toLowerCase() == "label") {
			targetedControl = document.getElementById(targetedControl.htmlFor);
			vals = targetedControl.Validators;
		}
	}
	var i;
	for (i = 0; i < vals.length; i++) {
		ValidatorValidate(vals[i], null, event);
	}
	ValidatorUpdateIsValid();
}


if (typeof (Sys) != 'undefined' && typeof (Sys.Net) != 'undefined' && typeof (Sys.Net.XMLHttpExecutor) != 'undefined') {
	Sys.Net.XMLHttpExecutor.prototype.get_statusCode = function () {
		if (arguments.length !== 0) throw Error.parameterCount();
		if (!this._responseAvailable) throw Error.invalidOperation(String.format(Sys.Res.cannotCallBeforeResponse, 'get_statusCode'));
		if (!this._xmlHttpRequest) throw Error.invalidOperation(String.format(Sys.Res.cannotCallOutsideHandler, 'get_statusCode'));

		try {
			var result = this._xmlHttpRequest.status;
			return result;
		}

		catch (err) { return 200; }
	}
}