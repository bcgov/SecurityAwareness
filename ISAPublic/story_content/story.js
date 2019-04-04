/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
!function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(t,n):e[t]=n()}(this,"bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}function N(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return undefined}}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),a=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),c=/sailfish/i.test(t),h=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),d=/windows phone/i.test(t),v=/SamsungBrowser/i.test(t),m=!d&&/windows/i.test(t),g=!i&&!l&&/macintosh/i.test(t),y=!o&&!c&&!h&&!p&&/linux/i.test(t),b=r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(t)&&!/tablet pc/i.test(t),S=!E&&/[^-]mobi/i.test(t),x=/xbox/i.test(t),T;/opera/i.test(t)?T={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?T={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?T={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?T={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?T={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?T={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?T={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?T={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?T={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?T={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?T={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:d?(T={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},b?(T.msedge=e,T.version=b):(T.msie=e,T.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?T={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?T={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?T={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?T={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:c?T={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?T={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(T={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(T.firefoxos=e,T.osname="Firefox OS")):l?T={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?T={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?T={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?T={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(T={name:"WebOS",osname:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(T.touchpad=e)):/bada/i.test(t)?T={name:"Bada",osname:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:h?T={name:"Tizen",osname:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?T={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?T={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?T={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?T={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(T={name:"Safari",safari:e},w&&(T.version=w)):i?(T={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},w&&(T.version=w)):/googlebot/i.test(t)?T={name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:T={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!T.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(T.name=T.name||"Blink",T.blink=e):(T.name=T.name||"Webkit",T.webkit=e),!T.version&&w&&(T.version=w)):!T.opera&&/gecko\//i.test(t)&&(T.name=T.name||"Gecko",T.gecko=e,T.version=T.version||n(/gecko\/(\d+(\.\d+)?)/i)),!T.windowsphone&&(o||T.silk)?(T.android=e,T.osname="Android"):!T.windowsphone&&i?(T[i]=e,T.ios=e,T.osname="iOS"):g?(T.mac=e,T.osname="macOS"):x?(T.xbox=e,T.osname="Xbox"):m?(T.windows=e,T.osname="Windows"):y&&(T.linux=e,T.osname="Linux");var C="";T.windows?C=N(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):T.windowsphone?C=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):T.mac?(C=n(/Mac OS X (\d+([_\.\s]\d+)*)/i),C=C.replace(/[_\s]/g,".")):i?(C=n(/os (\d+([_\s]\d+)*) like mac os x/i),C=C.replace(/[_\s]/g,".")):o?C=n(/android[ \/-](\d+(\.\d+)*)/i):T.webos?C=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):T.blackberry?C=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):T.bada?C=n(/bada\/(\d+(\.\d+)*)/i):T.tizen&&(C=n(/tizen[\/\s](\d+(\.\d+)*)/i)),C&&(T.osversion=C);var k=!T.windows&&C.split(".")[0];if(E||a||i=="ipad"||o&&(k==3||k>=4&&!S)||T.silk)T.tablet=e;else if(S||i=="iphone"||i=="ipod"||o||u||T.blackberry||T.webos||T.bada)T.mobile=e;return T.msedge||T.msie&&T.version>=10||T.yandexbrowser&&T.version>=15||T.vivaldi&&T.version>=1||T.chrome&&T.version>=20||T.samsungBrowser&&T.version>=4||T.firefox&&T.version>=20||T.safari&&T.version>=6||T.opera&&T.version>=10||T.ios&&T.osversion&&T.osversion.split(".")[0]>=6||T.blackberry&&T.version>=10.1||T.chromium&&T.version>=20?T.a=e:T.msie&&T.version<10||T.chrome&&T.version<20||T.firefox&&T.version<20||T.safari&&T.version<6||T.opera&&T.version<10||T.ios&&T.osversion&&T.osversion.split(".")[0]<6||T.chromium&&T.version<20?T.c=e:T.x=e,T}function r(e){return e.split(".").length}function i(e,t){var n=[],r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)n.push(t(e[r]));return n}function s(e){var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return e+=(new Array(n+1)).join(".0"),i(e.split("."),function(e){return(new Array(20-e.length)).join("0")+e}).reverse()});while(--t>=0){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(t===0)return 0}}function o(e,r,i){var o=n;typeof r=="string"&&(i=r,r=void 0),r===void 0&&(r=!1),i&&(o=t(i));var u=""+o.version;for(var a in e)if(e.hasOwnProperty(a)&&o[a]){if(typeof e[a]!="string")throw new Error("Browser version in the minVersion map should be a string: "+a+": "+String(e));return s([u,e[a]])<0}return r}function u(e,t,n){return!o(e,t,n)}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent||"":"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n.isUnsupportedBrowser=o,n.compareVersions=s,n.check=u,n._detect=t,n.detect=t,n})

var isChrome = bowser.chrome;
var IE =  bowser.msie;
var IE6 = bowser.msie && parseInt(bowser.version, 10) === 6;
var gtIEWin7 = bowser.msie && parseInt(bowser.version, 10) > 7;
var FF = bowser.firefox;
var Safari3 =  bowser.safari && parseInt(bowser.version, 10) === 3;

// Message Delimitors
var g_strDelim = "|~|";
var g_strInteractionDelim = "|#|";

var g_oContentResults = new ContentResults();
var g_listQuizzes = new Object();
var g_oPrintOptions = new Object();

// LMS Support
var g_bLMSPresent = false;
var g_oInterfaceObject;

if (g_bLMS)
{
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='lms/lms.js' TYPE='text/javascript'><\/SCR" + "IPT>");
}

if (g_bAOSupport)
{
	document.write("<SCR" + "IPT LANGUAGE='JavaScript1.2' SRC='" + g_strContentFolder + "/AOComm.js' TYPE='text/javascript'><\/SCR" + "IPT>");
}

var g_strQuery = document.location.search.substr(1);
var g_bElement = false;
var g_bFillWindow = false;

// Write the swf object
function WriteSwfObject(strSwfFile, nWidth, nHeight, strScale, strAlign, strQuality, strBgColor, bCaptureRC, strWMode, strFlashVars, targetElement, bFillWindow)
{
	var strHtml = "";
	var strWidth = nWidth + "px";
	var strHeight = nHeight + "px";
	var strPublishSize = "&vPublishWidth=" + nWidth + "&vPublishHeight=" + nHeight;
	g_oInterfaceObject = getInterfaceObject(strFlashVars);
	
	if (g_strResizeType === "fit")
	{
		strWidth = "100%";
		strHeight = "100%";
	}

	// If there are flashvars defined append a delimitor
	if (strFlashVars != "")
	{
		strFlashVars += "&";
	}
	
	strFlashVars += "vHtmlContainer=true";
	strFlashVars += "&TinCan=" + (g_bTinCan ? "true" : "false");
	strFlashVars += "&vRise=" + (g_oInterfaceObject.isRise ? "true" : "false");
	
	if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0 && strWMode != "transparent")
	{
		strWMode = "opaque";
	}
	if (bCaptureRC && strWMode == "window")
	{
		strFlashVars += "&vCaptureRC=true";
		if(strWMode != "transparent")
		{
			strWMode = "opaque";
		}
	}
	
	if (g_strQuery.indexOf("artcommid") >= 0 && strWMode == "window")
	{
		strWMode = "opaque";
	}
	
	// Whether or not we are loaded by an LMS
	strFlashVars += "&vLMSPresent=" + g_bLMSPresent;
	
	// Whether or not we are loaded by AO
	strFlashVars += "&vAOSupport=" + g_bAOSupport;
	
	// Set the publish width and height
	strFlashVars += strPublishSize;
	
	// Set the theme info
	strFlashVars += "&vThemeName=" + g_strThemeName;
	strFlashVars += "&vPreloaderColor=" + g_strPreloaderColor;
	
	// Set the LMS Resume data
	if (g_bLMSPresent)
	{
		RetrieveStateData();

		strFlashVars += "&vResumeData=" + encodeURI(g_strResumeData);
	}
	
	strFlashVars += GetHostVars();
	
	var strLocProtocol = location.protocol;
	
	if (strLocProtocol.indexOf("file") >= 0)
	{
		strLocProtocol = "http:";
	}
	
	var strRole = "";

	if (gtIEWin7)
	{
		strRole = " role='application'";
	}
	
	// create the swf div
	var divSwf = document.createElement("div");
	divSwf.setAttribute("role", "application");
	divSwf.setAttribute("id", "divSwf");
	divSwf.style.width = strWidth;
	divSwf.style.height = strHeight;
	
	if (!targetElement)
	{
		document.body.appendChild(divSwf);
		g_bFillWindow = true;
	}
	else
	{
		g_bFillWindow = bFillWindow
		g_bElement = true;
		g_oContainer = targetElement;
		targetElement.appendChild(divSwf);
	}	

	// Get the swf dims
	if (isChrome && bFillWindow && g_strResizeType === "fit" && strScale === "noscale") {
		strWidth = divSwf.clientWidth + "px";
		strHeight = divSwf.clientHeight + "px";
		InitResizeListeners();
	}

	strHtml += "<object type='application/x-shockwave-flash' data='" + strSwfFile +"' width='" + strWidth + "' height='" + strHeight + "' align='" + strAlign + "' id='player'>";
	strHtml += "<param name='scale' value='" + strScale + "' />";
	strHtml += "<param name='movie' value='" + strSwfFile + "' />";
	strHtml += "<param name='quality' value='" + strQuality + "' />";
	strHtml += "<param name='name' value='player' />";
	strHtml += "<param name='allowFullScreen' value='true' />";
	strHtml += "<param name='bgcolor' value='" + strBgColor + "' />";
	strHtml += "<param name='flashvars' value='" + strFlashVars + "' />";
	strHtml += "<param name='wmode' value='" + strWMode + "'/>";
	strHtml += "<param name='allowScriptAccess' value='always'>";
	strHtml += "</object>";
	
	divSwf.innerHTML = strHtml;	

	if (bCaptureRC)
	{
		AddRightClickListener();
	}
	
	setTimeout(SetPlayerFocus, 500);
	
	document.addEventListener("visibilitychange", UpdateVisibility);
}

function getInterfaceObject(strFlashVars) {
	var settings = parseFlashVars(strFlashVars);
	return window[settings.vInterfaceObject] || window.vInterfaceObject || {};
}

function parseFlashVars(strFlashVars) {
	var settings = {};
	var valuePairs = strFlashVars.split("&");
	var length = valuePairs.length;
	var i;
	var valueSet;
	
	for (i = 0; i < length; i++) {
		valueSet = valuePairs[i].split("=");
		settings[valueSet[0]] = valueSet[1];
	}
	
	return settings;
}

function UpdateVisibility(e) {
	var player = GetPlayer();
	if (player != null) {
		if (document.hidden) {
			player.TriggerPause();
		} else {
			player.TriggerPlay();
		}
	}
}

// Prevent Chrome from stretching the swf when resizing the browser
var g_bExactFit = true;

function InitJSResize() {
	if (isChrome && g_bFillWindow) {
		g_bExactFit = false;
		return true;
	}
	return false;
}

function InitResizeListeners() 
{
	var divSwf = document.getElementById("divSwf");
	var lastWidth = 0, lastHeight = 0, maxWidth = 0, maxHeight = 0;
	
	divSwf.className = [divSwf.className, "no-scroll"].join(" ");
	
	var handleResize = function() {
		var width = divSwf.clientWidth;
		var height = divSwf.clientHeight;
			
		if (width != lastWidth || height != lastHeight) {
			try {
				var player = GetPlayer();
				player.UpdateSize(width, height);
			} catch (e) {}
			
			if (width > maxWidth || height > maxHeight || g_bExactFit) {				
				player.style.width = width + 'px';
				player.style.height = height + 'px';
				maxWidth = width;
				maxHeight = height;
			}
			
			lastWidth = width;
			lastHeight = height;
		}
	};
	
	window.addEventListener('resize', handleResize);
}

////////////////////////////////////////////////////////////////////////////////
// Flash Comm
////////////////////////////////////////////////////////////////////////////////

function onBWEvent(command, args)
{
	args = unescape(args);
	command = String(command);

	var arrArgs = args.split(g_strDelim);
	
	switch(command)
	{
		case "BW_UpdateViewStatus":
			g_oContentResults.strStatus = arrArgs[0];
			g_oContentResults.strType = arrArgs[1];
			break;
			
		case "BW_UpdateStatus":
			g_oContentResults.strStatus = arrArgs[0];
			g_oContentResults.nScore = arrArgs[1];
			// Min Score - arrArgs[2]
			// Max Score - arrArgs[3]
			g_oContentResults.nPassingScore = arrArgs[4];
			g_oContentResults.strType = arrArgs[5];
			g_oContentResults.dtmFinished = JSON.stringify(new Date());
			break;
			
		case "BW_StoreQuestionResult":
			var strQuizId = arrArgs[0];
			var strId = arrArgs[1];
			var strLMSId = arrArgs[2];
			var strType = arrArgs[3];
			var strCorrectResponse = arrArgs[4];
			var strUserResponse = arrArgs[5];
			var nLatency = arrArgs[6];
			var strStatus = arrArgs[7];
			var nPoints = arrArgs[8];
			var strCompletedTime = arrArgs[9];
			var nWeight = arrArgs[10];
			var nQuestionNumber = arrArgs[11];
			var strDescription = arrArgs[12];
			var strQuizName = arrArgs[13];
			var bTracked = (arrArgs[14] == "true");

			if (g_listQuizzes[strQuizId] == null)
			{
				g_listQuizzes[strQuizId] = new QuizData(strQuizId, strQuizName);
			}
			
			var oResult = new QuestionResults(strId, strLMSId, strType, strCorrectResponse, strUserResponse, nLatency, strStatus, nPoints, strCompletedTime, nWeight, nQuestionNumber, strDescription, bTracked);
			
			g_listQuizzes[strQuizId].AddQuestionResult(oResult);
			break;
		
		case "BW_UpdateQuizResults":
			var strQuizId = arrArgs[0];
			var strQuizName = arrArgs[1];
			var nPassScore = arrArgs[2];
			var nPassPercent = arrArgs[3];
			var nScore = arrArgs[4];
			var nPercentScore = arrArgs[5];
			if (g_listQuizzes[strQuizId] == null)
			{
				g_listQuizzes[strQuizId] = new QuizData(strQuizId, strQuizName);
			}
			g_listQuizzes[strQuizId].nPassingScore = nPassPercent;
			g_listQuizzes[strQuizId].nPtScore = nPercentScore;
			g_listQuizzes[strQuizId].dtmFinished = new Date();
			break;
		case "BW_PrintResults":
			g_oPrintOptions.bShowUserScore = (arrArgs[0] == "true");
			g_oPrintOptions.bShowPassingScore = (arrArgs[1] == "true");
			g_oPrintOptions.bShowShowPassFail = (arrArgs[2] == "true");
			g_oPrintOptions.bShowQuizReview = (arrArgs[3] == "true");
			g_oPrintOptions.strName = arrArgs[4];
			g_oPrintOptions.strMainQuizId = arrArgs[5];
			g_oPrintOptions.arrQuizzes = arrArgs[6].split(",");
			g_oPrintOptions.bSurvey = (arrArgs[7] == "true");
			
			PrintResults();
			break;
			
		case "BW_EmailResults":
			EmailResults(arrArgs[0] == "true", arrArgs[1] == "true", arrArgs[2] == "true", arrArgs[3] == "true", arrArgs[4], arrArgs[5], arrArgs[6].split(","));
			break;
			
		case "BW_UpdateWebObjects":
			UpdateWebObjects(parseInt(arrArgs[0]), parseInt(arrArgs[1]));
			break;
			
		case "BW_UpdateWebObjectPosition":
			UpdateWebObjectPosition(arrArgs[0], parseInt(arrArgs[1]), parseInt(arrArgs[2]), parseInt(arrArgs[3]), parseInt(arrArgs[4]));
			break;
			
		case "BW_OpenWebObject":
			OpenWebObject(arrArgs[0], arrArgs[1], parseInt(arrArgs[2]), parseInt(arrArgs[3]), parseInt(arrArgs[4]), parseInt(arrArgs[5]), parseInt(arrArgs[6]), parseInt(arrArgs[7]))
			break;
		
		case "BW_CloseWebObject":
			CloseWebObject(arrArgs[0]);
			break;
			
		case "BW_MailTo":
			MailTo(arrArgs[0]);
			break;
			
		case "BW_OpenUrl":
			OpenUrl(arrArgs[0], arrArgs[1], arrArgs[2], arrArgs[3], arrArgs[4], arrArgs[5], arrArgs[6], arrArgs[7], arrArgs[8], arrArgs[9], arrArgs[10], arrArgs[11]);
			break;
		
		case "BW_CloseAllWebObjects":
			CloseAllWebObjects(arrArgs[0]);
			break;
			
		case "BW_RestoreWebObjects":
			RestoreWebObjects();
			break;
			
		case "BW_ExecuteJavascript":
			ExecuteScript(arrArgs[0]);
			break;
			
		case "BW_OpenSwf":
			OpenSwfWindow(arrArgs[0], arrArgs[1], arrArgs[2], arrArgs[3], arrArgs[4], arrArgs[5], arrArgs[6], arrArgs[7], arrArgs[8]);
			break;
			
		case "BW_ResizeSwf":
			ResizeSwf(arrArgs[0], arrArgs[1]);
			break;
			
		case "BW_ClosePlayer":
			if (!g_bLMS)
			{
				if (FF)
				{
					setTimeout(CloseWindow, 100);
				}
				else
				{
					CloseWindow();
				}
			}
			break;
		
		case "BW_OpenVideo":
			OpenVideo(arrArgs[0], arrArgs[1], arrArgs[2], arrArgs[3], arrArgs[4], arrArgs[5], arrArgs[6], arrArgs[7], arrArgs[8], arrArgs[9], arrArgs[10], arrArgs[11], arrArgs[12], arrArgs[13], arrArgs[14], arrArgs[15], arrArgs[16])
			break;
			
		case "BW_RestoreFocus":
			SetPlayerFocus();
			break;

		case "BW_TincanConfigError":
			TinCanConfigError();
			break;
			
		case "BW_SetWebObjectZIndex":
			SetWebObjectZIndex(arrArgs[0], arrArgs[1]);
			break;
		
	}
	
	if (g_bLMS)
	{
		lms_DoFSCommand(command, args);
	}
	
	if (g_bAOSupport)
	{
		AO_DoFSCommand(command, args);
	}
}

function GetHostVars()
{
	var strResult = "";
	var arrArgs = g_strQuery.split("&");
	
	for (var i = 0; i < arrArgs.length; i++)
	{
		var arrPair = arrArgs[i].split("=");
		
		switch(arrPair[0])
		{
			case "artcommid":
				strResult += "&vCommId=" + encodeURI(arrPair[1]);
				break;
			case "arthostresume":
				strResult += "&vResumeOverride=" + encodeURI(arrPair[1]);
				break;
			case "artvolume":
				strResult += "&InitVolume=" + encodeURI(arrPair[1]);
				break;
		}
	}
	
	return strResult;
}

////////////////////////////////////////////////////////////////////////////////
// Retrieve the player object
////////////////////////////////////////////////////////////////////////////////
function GetPlayer()
{
	return document.getElementById("player");;
}

////////////////////////////////////////////////////////////////////////////////
// Close the player
////////////////////////////////////////////////////////////////////////////////
function CloseWindow()
{
	top.window.close();
}


function PrintResults()
{
	var printData = {
		g_oContentResults: g_oContentResults,
		g_oPrintOptions: g_oPrintOptions,
		g_listQuizzes: g_listQuizzes
	};

	var reportHtml = window.open(GetBasePath() + g_strContentFolder + "/report.html", "Reports");
	if (reportHtml.postMessage != null)
	{
		window.addEventListener('message', function(event) {
			if (event.data === 'getQuizData')
			{
				reportHtml.postMessage(JSON.stringify(printData), '*');
			}
		}, false);
	}
}

////////////////////////////////////////////////////////////////////////////////
// Browser Resize
////////////////////////////////////////////////////////////////////////////////
var g_nWindowWidth = 0;
var g_nWindowHeight = 0;
var g_nSizeInterval = null;
var g_nIntervalCount = 0;

function ResizeBrowser(strBrowserSize)
{
	switch (strBrowserSize)
	{
		case "fullscreen":
			ResizeFullScreen();
			break;
		case "optimal":
			ResizeOptimal();
			break;
	}
}

function ResizeFullScreen()
{
	top.moveTo(0, 0);
	top.window.resizeTo(screen.availWidth, screen.availHeight);
}


function ResizeOptimal()
{
	var nFrameWidth = 0;
	var nFrameHeight = 0;
	var nXPos = GetXPos();
	var nYPos = GetYPos();
	var bMove = false;
	
	g_nWindowWidth = g_nWidth + 30;
	g_nWindowHeight = g_nHeight + 30;
	
	if (screen.availWidth > g_nWindowWidth && screen.availHeight > g_nWindowHeight)
	{
		if (GetContentWidth() != g_nWidth || GetContentHeight() != g_nHeight)
		{
			// First we need to reposition the browser so that it can actually grow to the appropiate size.
			// When positioning, we will overestimate the browser height by 160 if possible to accomadate the toolbar and statusbar
			if (nXPos + g_nWindowWidth > screen.availWidth)
			{
				bMove = true;
				nXPos = screen.availWidth - g_nWindowWidth - 5;
			}
			
			if (nYPos + g_nWindowHeight + 160 > screen.availHeight)
			{
				bMove = true;
				nYPos = screen.availHeight - g_nWindowHeight - 165;
			}
			
			if (nXPos < 0)
			{
				nXPos = 0;
			}
			if (nYPos < 0)
			{
				nYPos = 0;
			}
			
			if (bMove)
			{
				top.window.moveTo(nXPos, nYPos);
			}
			
			// Resize the window so we know what the actual size is
			top.window.resizeTo(g_nWindowWidth, g_nWindowHeight);
			
			setTimeout( function()
			{
				// Since we know the actual browser size, and we can query the client dim, lets get the frame dim
				nFrameWidth = (g_nWindowWidth) - GetContentWidth();
				nFrameHeight = (g_nWindowHeight) - GetContentHeight();
				
				// lets resize it to the correct size
				g_nWindowWidth = g_nWidth + nFrameWidth;
				g_nWindowHeight = g_nHeight + nFrameHeight;
				
				top.window.resizeTo(g_nWindowWidth, g_nWindowHeight);

				// sometimes there is a third party toolbar that doesn't load until after we have finish resizing everything, so we will do a check for this
				g_nSizeInterval = setInterval(CheckSize, 500);
			}, 0);
		}
	}
	else
	{
		// If the screen isn't big enough, we are bailing and defaulting to Full Screen
		ResizeFullScreen();
	}
}

function CheckSize()
{
	var nContentWidth = GetContentWidth();
	var nContentHeight = GetContentHeight();
	var nFrameWidth = 0;
	var nFrameHeight = 0;
	
	g_nIntervalCount++;
	
	if (nContentWidth != g_nWidth || nContentHeight != g_nHeight)
	{
		nFrameWidth = g_nWindowWidth - nContentWidth;
		nFrameHeight = g_nWindowHeight - nContentHeight;

		g_nWindowWidth = g_nWidth + nFrameWidth;
		g_nWindowHeight = g_nHeight + nFrameHeight;
		
		top.window.resizeTo(g_nWindowWidth, g_nWindowHeight);
		clearInterval(g_nSizeInterval);
	}
	
	if (g_nIntervalCount > 4)
	{
		clearInterval(g_nSizeInterval);
	}
}

function GetContentWidth()
{
	var nResult = 0;
	
	if (IE || Safari3)
	{
		nResult = document.body.clientWidth;
	}
	else
	{
		nResult = window.innerWidth;
	}
	
	return nResult;
}

function GetContentHeight()
{
	var nResult = 0;

	if (IE || Safari3)
	{
		nResult = nContentHeight = document.body.clientHeight;
	}
	else
	{
		nResult = nContentHeight = window.innerHeight;
	}
	
	return nResult
}

function GetXPos()
{
	var nResult = 0;
	
	if (IE)
	{
		nResult = window.screenLeft;
	}
	else
	{
		nResult = window.screenX;
	}
	
	return nResult;
}

function GetYPos()
{
	var nResult = 0;
	
	if (IE)
	{
		nResult = window.screenTop;
	}
	else
	{
		nResult = window.screenY;
	}
	
	return nResult;
}

function ResizeSwf(nWidth, nHeight)
{
	var oPlayer = GetPlayer();
	oPlayer.width = nWidth;
	oPlayer.height = nHeight;
	
	var divPlayer = document.getElementById("divSwf");
	divPlayer.style.width = nWidth;
	divPlayer.style.height = nHeight
}

////////////////////////////////////////////////////////////////////////////////
// On Close Handling
////////////////////////////////////////////////////////////////////////////////

var g_bCloseExecuted = false;
function DoOnClose(evt)
{
	if (!g_bCloseExecuted)
	{
		g_bCloseExecuted = true;

		if (g_bLMS)
		{
			LMSUnload();
		}
		
		if (g_bAOSupport)
		{
			DoAOOnUnload();
		}
		
		if (g_bTinCan)
		{
			CheckTinCanComplete();
		}
	}
}

////////////////////////////////////////////////////////////////////////////////
// WebObject support
////////////////////////////////////////////////////////////////////////////////
var g_oWebObjects = new Object();
var g_arrStoredWebObjects = new Array();

function UpdateWebObjects(nSlideXOffset, nSlideYOffset)
{
	for (var items in g_oWebObjects)
	{
		var oWebObject = g_oWebObjects[items];
		oWebObject.Position.SlideXOffset = nSlideXOffset;
		oWebObject.Position.SlideYOffset = nSlideYOffset;
	}
	
	RepositionDivs();
}

function UpdateWebObjectPosition(strId, nXPos, nYPos, nWidth, nHeight)
{
	var oWebObject = g_oWebObjects[strId];
	
	var oPosition = new Object();
	oPosition.XPos = nXPos;
	oPosition.YPos = nYPos;
	oPosition.Width = nWidth;
	oPosition.Height = nHeight;
	oPosition.SlideXOffset = oWebObject.Position.SlideXOffset;
	oPosition.SlideYOffset = oWebObject.Position.SlideYOffset;
	oWebObject.Position = oPosition;
	
	var oRect = GetDivRect(oPosition);
	
	oWebObject.Div.style.left = oRect.left + "px";
	oWebObject.Div.style.top = oRect.top + "px";
	oWebObject.Div.style.width = oRect.width + "px";
	oWebObject.Div.style.height = oRect.height + "px";
	
	oWebObject.contentWindow.scrollTop = nScrollPosition;
}

function OpenWebObject(strId, strUrl, nXPos, nYPos, nWidth, nHeight, nSlideXOffset, nSlideYOffset)
{
	var oWebObject = g_oWebObjects[strId];
	
	if (!oWebObject)
	{
		oWebObject = new Object();
		oWebObject.strId = strId;
		oWebObject.strInitUrl = strUrl;
		
		// Create the DIV
		oWebObject.Div = document.createElement('div');
		oWebObject.Div.style.position = "absolute";
		
		// Create the iframe
		var oIFrame = document.createElement('iframe');
		oIFrame.frameBorder = "0";
		oIFrame.id = "div" + strId;
		oIFrame.style.border = "0";
		oIFrame.style.width = "100%";
		oIFrame.style.height = "100%";
		oIFrame.allowtransparency = "true";
		oIFrame.setAttribute('allowFullScreen', '');
		oIFrame.setAttribute('webkitallowFullScreen', '');
		oIFrame.setAttribute('mozallowFullScreen', '');
		
		oWebObject.Div.appendChild(oIFrame);
		oWebObject.IFrame = oIFrame;

		// Append Child
		var oTarget = document.getElementById('divWebObjects');
		oTarget.appendChild(oWebObject.Div);
		
		g_oWebObjects[strId] = oWebObject;
		oIFrame.src = strUrl;
		
		setTimeout(RepositionDivs, 100);
	}
	else
	{
		var oTarget = document.getElementById('divWebObjects');
		oTarget.removeChild(oWebObject.Div);
		oTarget.appendChild(oWebObject.Div);
	}
	
	oWebObject.Open = true;
	
	if (oWebObject.strUrl != strUrl || oWebObject.Div.style.visibility != "visible")
	{
		oWebObject.IFrame.src = strUrl;
		
		oWebObject.strUrl = strUrl;
		
		var oPosition = new Object();
		oPosition.XPos = nXPos;
		oPosition.YPos = nYPos;
		oPosition.Width = nWidth;
		oPosition.Height = nHeight;
		oPosition.SlideXOffset = nSlideXOffset;
		oPosition.SlideYOffset = nSlideYOffset;
		oWebObject.Position = oPosition;
		
		var oRect = GetDivRect(oPosition);
		
		oWebObject.Div.style.left = oRect.left + "px";
		oWebObject.Div.style.top = oRect.top + "px";
		oWebObject.Div.style.width = oRect.width + "px";
		oWebObject.Div.style.height = oRect.height + "px";
		
		oWebObject.Div.style.visibility = "visible";
		oWebObject.Div.style.zIndex = "-1";
	}
	else
	{
		var oPosition = new Object();
		oPosition.XPos = nXPos;
		oPosition.YPos = nYPos;
		oPosition.Width = nWidth;
		oPosition.Height = nHeight;
		oPosition.SlideXOffset = nSlideXOffset;
		oPosition.SlideYOffset = nSlideYOffset;
		oWebObject.Position = oPosition;
		
		var oRect = GetDivRect(oPosition);
		
		oWebObject.Div.style.left = oRect.left + "px";
		oWebObject.Div.style.top = oRect.top + "px";
		oWebObject.Div.style.width = oRect.width + "px";
		oWebObject.Div.style.height = oRect.height + "px";
	}
}

function RestoreWebObjects()
{
	var oWebObject = null;

	for (var i = 0; i < g_arrStoredWebObjects.length; i++)
	{
		oWebObject = g_oWebObjects[g_arrStoredWebObjects[i]];
		
		OpenWebObject(oWebObject.strId, oWebObject.strInitUrl, oWebObject.Position.XPos, oWebObject.Position.YPos, oWebObject.Position.Width, oWebObject.Position.Height, oWebObject.Position.SlideXOffset, oWebObject.Position.SlideYOffset)
	}
	
	g_arrStoredWebObjects = new Array();
}

function CloseAllWebObjects(strStore)
{
	var bStore = (strStore == "true");
	
	for (var items in g_oWebObjects)
	{
		var oWebObject = g_oWebObjects[items];
		
		if (bStore && oWebObject.Open)
		{
			g_arrStoredWebObjects.push(items);
		}
		
		CloseWebObject(items);
	}
}

function CloseWebObject(strId)
{
	var oWebObject = g_oWebObjects[strId];
	
	oWebObject.Div.style.visibility = "hidden";
	oWebObject.IFrame.src = g_strContentFolder + "/blank.html";
	oWebObject.strUrl = "";
	oWebObject.Open = false;
}

function SetWebObjectZIndex(strId, zId)
{
	var oWebObject = g_oWebObjects[strId];
	oWebObject.Div.style.zIndex =  zId;
}

function GetDivRect(oPosition)
{
	var oRect = new Object();
	var nClientWidth = GetContentWidth();
	var nClientHeight = GetContentHeight();
	var nLeftMargin = 0;
	var nTopMargin = 0;
	var nSwfWidth = parseInt(g_nWidth);
	var nSwfHeight = parseInt(g_nHeight);
	
	if (g_strScale == "noscale")
	{
		if (g_strResizeType != "fit")
		{
			nLeftMargin = (nClientWidth - nSwfWidth) / 2;
			nTopMargin = (nClientHeight - nSwfHeight) / 2;
		
			if (nLeftMargin < 0)
			{
				nLeftMargin = 0;
			}
			if (nTopMargin < 0)
			{
				nTopMargin = 0;
			}
		}
		
		oRect.left = nLeftMargin + oPosition.XPos;
		oRect.top = nTopMargin + oPosition.YPos;
		oRect.width = oPosition.Width;
		oRect.height = oPosition.Height;
	}
	else
	{
		var nXScale = nClientWidth / nSwfWidth;
		var nYScale = nClientHeight / nSwfHeight;
		var nScale = nXScale;
		var bXScale = true;
		var nTopMargin = 0;
		var nLeftMargin = 0;
		
		if (nYScale < nScale)
		{
			nScale = nYScale;
		}
		
		nTopMargin = (nClientHeight - nSwfHeight * nScale) / 2;
		nLeftMargin = (nClientWidth - nSwfWidth * nScale) / 2;
		
		oRect.left = nLeftMargin + oPosition.XPos * nScale;
		oRect.top = nTopMargin + oPosition.YPos * nScale;
		oRect.width = Math.floor(oPosition.Width * nScale);
		oRect.height = Math.floor(oPosition.Height * nScale);
		
	}
	
	return oRect;
}

function RepositionDivs()
{
	for (items in g_oWebObjects)
	{
		var oWebObject = g_oWebObjects[items];
		
		var oRect = GetDivRect(oWebObject.Position);
		
		oWebObject.Div.style.left = oRect.left + "px";
		oWebObject.Div.style.top = oRect.top + "px";
		oWebObject.Div.style.width = oRect.width + "px";
		oWebObject.Div.style.height = oRect.height + "px";
	}
}

window.onresize = RepositionDivs;

////////////////////////////////////////////////////////////////////////////////
// Open Url
////////////////////////////////////////////////////////////////////////////////
function OpenUrl(strUrl, strWindow, strWindowSize, strWidth, strHeight, strUseDefaultControls, strStatus, strToolbar, strLocation, strMenubar, strScrollbars, strResizable)
{
	var bChrome = (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0);
	var nWndWidth = parseInt(strWidth);
	var nWndHeight = parseInt(strHeight);
	var bUseDefaultSize = (strWindowSize.toLowerCase() == "default");
	var bUseDefaultControls = (strUseDefaultControls.toLowerCase() == "true");
	var bFullScreen = (strWindowSize.toLowerCase() == "fullscreen");

	strUrl = ReplaceAll(strUrl, "%25", "?");
	
	var strOptions = "";
	
	if (!bUseDefaultControls && !bUseDefaultSize)
	{
		if (bFullScreen)
		{
			nWndWidth = screen.availWidth;
			nWndHeight = screen.availHeight;
			
			strOptions="left=0, top=0,";
		}
		else
		{
			if (nWndWidth > screen.availWidth)
			{
				nWndWidth = screen.availWidth;
			}

			if (nWndHeight > screen.availHeight)
			{
				nWndHeight = screen.availHeight;
			}
		}
		
		if (!bUseDefaultSize)
		{
			strOptions += "width=" + nWndWidth + ", ";
			strOptions += "height=" + nWndHeight + ", ";
		}
		
		if (bUseDefaultControls)
		{
			strToolbar = "true";
			strScrollbars = "true";
			strResizable = "true";
			strMenubar = "true";
		}
		
		if (bChrome)
		{
			if (bFullScreen || !bUseDefaultSize)
			{
				strMenubar = "false";
			}
			else
			{
				strOptions += "status=1, ";
			}
		}
	
		strOptions += "toolbar=" + ((strToolbar.toLowerCase() == "true") ? 1 : 0);
		strOptions += ", scrollbars=" + ((strScrollbars.toLowerCase() == "true") ? 1 : 0);
		strOptions += ", resizable=" + ((strResizable.toLowerCase() == "true") ? 1 : 0);
		strOptions += ", menubar=" + ((strMenubar.toLowerCase() == "true") ? 1 : 0);
		strOptions += ", location=" + ((strLocation.toLowerCase() == "true") ? 1 : 0);
	}
		
	g_wndLast = window.open(strUrl, strWindow, strOptions);
	
}

function ReplaceAll(strTarget, strChar, strNew)
{
	var arrRemoved = strTarget.split(strChar);
	
	return arrRemoved.join(strNew);
}

////////////////////////////////////////////////////////////////////////////////
// Open Swf Window
////////////////////////////////////////////////////////////////////////////////

var g_oSwfInfo = new Object();
var g_wndSwf;
var g_wndLast;

function OpenSwfWindow(strFileName, nWidth, nHeight, strStatus, strToolbar, strLocation, strMenubar, strScrollbars, strResizable)
{
	var strScroll = "0";
	g_oSwfInfo.strContentFolder = g_strContentFolder;
	g_oSwfInfo.strFileName = strFileName;
	g_oSwfInfo.nWidth = parseInt(nWidth);
	g_oSwfInfo.nHeight = parseInt(nHeight);

	if (g_oSwfInfo.nWidth > screen.availWidth)
	{
		g_oSwfInfo.nWidth = screen.availWidth;
		strScroll = "1";
	}

	if (g_oSwfInfo.nHeight > screen.availHeight)
	{
		g_oSwfInfo.nHeight = screen.availHeight;
		strScroll = "1";
	}
	
	var strSearch = "";
	strSearch += "path=" + g_strContentFolder + "&";
	strSearch += "file=" + strFileName + "&";
	strSearch += "w=" + nWidth + "&";
	strSearch += "h=" + nHeight;

	var strOptions = "";
	strOptions += "width=" + g_oSwfInfo.nWidth;
	strOptions += ", height=" + g_oSwfInfo.nHeight;
	strOptions += ", status=" + ((strStatus.toLowerCase() == "true") || true ? 1 : 0);
	strOptions += ", toolbar=" + ((strToolbar.toLowerCase() == "true") || true ? 1 : 0);
	strOptions += ", location=" + ((strLocation.toLowerCase() == "true") || true ? 1 : 0);
	strOptions += ", menubar=" + ((strMenubar.toLowerCase() == "true") || true ? 1 : 0);
	strOptions += ", scrollbars=" + ((strScrollbars.toLowerCase() == "true") || true ? 1 : 0);
	strOptions += ", resizable=" + ((strResizable.toLowerCase() == "true") || true ? 1 : 0);

	if (g_wndSwf)
	{
		try
		{
			g_wndSwf.close()
		}
		catch (e)
		{
		}
	}

	g_wndSwf = window.open(GetBasePath() + g_strContentFolder + "/swf.html?" + strSearch, "SwfWnd", strOptions);
	g_wndLast = g_wndSwf;
}

function GetBasePath()
{
	var strFullPath = document.location.href;
	
	var nPosHash = strFullPath.indexOf("#");
	
	if (nPosHash > 0)
	{
		strFullPath = strFullPath.substring(0, nPosHash);
	}
	
	var nPos1 = -1;
	var nPos2 = -1;

	nPos1 = strFullPath.lastIndexOf("\\");
	nPos2 = strFullPath.lastIndexOf("/");

	if (nPos2 > nPos1)
	{
		nPos1 = nPos2;
	}

	if (nPos1 >= 0)
	{
		strFullPath = strFullPath.substring(0, nPos1 + 1);
	}

	return(strFullPath);
}

////////////////////////////////////////////////////////////////////////////////
// Video
////////////////////////////////////////////////////////////////////////////////
function OpenVideo(strUrl, strWndWidth, strWndHeight, strVidWidth, strVidHeight, strDuration, strPlaybar, strVolume, strAutoPlay,
						   strStatus, strToolbar, strLocation, strMenubar, strScrollbars, strResizable, strType, strASVersion)
{
	var nWndWidth = parseInt(strWndWidth);
	var nWndHeight = parseInt(strWndHeight);
	
	var strSearch = "exUrl=" + strUrl +
					"&exWndWidth=" + strWndWidth +
					"&exWndHeight=" + strWndHeight +
					"&exWidth=" + strVidWidth +
					"&exHeight=" + strVidHeight +
					"&exDuration=" + strDuration +
					"&exPlaybar=" + strPlaybar +
					"&exVolume=" + strVolume +
					"&exAutoPlay=" + strAutoPlay +
					"&exType=" + strType +
					"&exASVersion=" + strASVersion;
					
	if (nWndWidth > screen.availWidth)
	{
		nWndWidth = screen.availWidth;
	}

	if (nWndHeight > screen.availHeight)
	{
		nWndHeight = screen.availHeight;
	}
	// Force chrome to open in a new window
	if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0)
	{
		strMenubar = "false";
	}


	var strOptions = "";
	strOptions += "width=" + nWndWidth;
	strOptions += ", height=" + nWndHeight;
	strOptions += ", status=" + ((strStatus.toLowerCase() == "true") ? 1 : 0);
	strOptions += ", toolbar=" + ((strToolbar.toLowerCase() == "true") ? 1 : 0);
	strOptions += ", menubar=" + ((strMenubar.toLowerCase() == "true") ? 1 : 0);
	strOptions += ", scrollbars=" + ((strScrollbars.toLowerCase() == "true") ? 1 : 0);
	strOptions += ", resizable=" + ((strResizable.toLowerCase() == "true") ? 1 : 0);

	if (g_wndSwf)
	{
		try
		{
			g_wndSwf.close()
		}
		catch (e)
		{
		}
	}

	var nXPos = 0;
	var nYPos = 0;
	var nWidth = screen.availWidth;
	var nHeight = screen.availHeight;
	
	if (window.screenX != undefined)
	{
		nXPos = window.screenX;
		nYPos = window.screenY;
		nWidth = window.innerWidth;
		nHeight = window.innerHeight;
	}
	else if (window.screenLeft != undefined)
	{
		nXPos = window.screenLeft;
		nYPos = window.screenTop;
		nWidth = document.body.offsetWidth;
		nHeight = document.body.offsetHeight;
	}
	
	strOptions += ", left=" + (nXPos + (nWidth - nWndWidth)/2);
	strOptions += ", screenX=" + (nXPos + (nWidth - nWndWidth)/2);
	strOptions += ", top=" + (nYPos + (nHeight - nWndHeight)/2);
	strOptions += ", screenY=" + (nYPos + (nHeight - nWndHeight)/2);
	
	g_wndSwf = window.open(GetBasePath() + g_strContentFolder + "/VideoPlayer.html?" + strSearch, "Video", strOptions);
	g_wndLast = g_wndSwf;
}

////////////////////////////////////////////////////////////////////////////////
// Right click support
////////////////////////////////////////////////////////////////////////////////

var g_bSetCapture = false;

function AddRightClickListener()
{
	if (IE)
	{
		divSwf.onmousedown = IEMouseDown;
		divSwf.onmouseup = IEMouseUp
		divSwf.oncontextmenu = DivContextMenu;
	}
	else
	{
		window.addEventListener('mousedown', NSMouseDown(), true);
		window.addEventListener('mouseup', NSMouseUp(), true);
	}
}

function IEMouseDown(evt)
{
	if (event.button == 2)
	{
		if (NotifyRightDown("player"))
		{
			divSwf.setCapture();
			g_bSetCapture = true;
		}
	}
}

function IEMouseUp()
{
	if (event.button == 2)
	{
		NotifyRightUp("player");
	}
	
	if (g_bSetCapture)
	{
		g_bSetCapture = false;
		divSwf.releaseCapture();
	}
}

function DivContextMenu()
{
	return false;
}


function NSMouseDown()
{
	return function(evt)
	{
		if (evt.button == 2)
		{
			if (NotifyRightDown(evt.target.id))
			{
				evt.stopPropagation();
				evt.preventDefault();
			}
		}
	}
}

function NSMouseUp()
{
	return function(evt)
	{
		if (evt.button == 2)
		{
			if (NotifyRightUp(evt.target.id))
			{
				evt.stopPropagation();
				evt.preventDefault();
			}
		}
	}
}

function NotifyRightDown(strId)
{
	var bResult = false;
	
	if (strId == "player" || strId == "eplayer")
	{
		var oPlayer = GetPlayer();
		
		bResult = oPlayer.NotifyRightMouseDown();
	}
	
	return bResult;
}

function NotifyRightUp(strId)
{
	var bResult = false;
	
	if (strId == "player" || strId == "eplayer")
	{
		var oPlayer = GetPlayer();
		bResult = oPlayer.NotifyRightMouseUp();
	}
	
	return bResult;
}

function SetPlayerFocus()
{
	var oPlayer = GetPlayer();

	try
	{
		oPlayer.tabIndex = 1;
		oPlayer.focus();
	}
	catch (e)
	{
	}
}

function MailTo(strAddress)
{
	var mailto_link = "mailto:" + strAddress;
	var win = window.open(mailto_link, 'emailWindow');
	setTimeout(function()
	{
		if (win && !win.closed)
		{
			win.close();
		}
	}, 1000);
}

function EmailResults(bShowUserScore, bShowPassingScore, bShowPassFail, bShowQuizReview, strAddress, strMainQuizId, arrQuizzes)
{
	var strNewLine = "\n";
	if (IE)
	{
		strNewLine = "%0D%0A";
	}
	var strTitle = g_listQuizzes[strMainQuizId].strQuizName;
	var g_strSubject = "Quiz Results: " + strTitle;
	var strQuizResults = "";
	var strMainHeader = " " + strTitle + strNewLine + "Status, Score, Passing Score, Max Score, Min Score, Time" + strNewLine;
	var strLineHeader = strNewLine + strNewLine + "Date, Time, Score, Quiz Name, Interaction ID, Interaction Type, Student Response, Result, Weight, Latency" + strNewLine;
	var strMainData = strNewLine;
	var strLineData = strNewLine;
			
	var oQuizResult = g_listQuizzes[strMainQuizId];
	// Status
	var nPtScore = Number(oQuizResult.nPtScore);
	var nPassScore = Number(oQuizResult.nPassingScore);
	var strStatus = (nPtScore >= nPassScore) ? "Pass" : "Fail";
	strMainData += strStatus
	strMainData += ",";
		
	// Score
	strMainData += nPtScore + ",";
	
	// Passing Score
	strMainData += nPassScore + ",";
	
	// Max Score
	strMainData += 100 + ",";
	
	// Min Score
	strMainData += 0 + ",";
	
	// Time
	strMainData += GetTime(oQuizResult.dtmFinished);
	
	// for (strQuizId in g_listQuizzes)
	for (var j = 0; j < arrQuizzes.length; j++)
	{
		strQuizId = arrQuizzes[j];
		oQuizData = g_listQuizzes[strQuizId];
		
		var arrQuestions = oQuizData.arrQuestions;
		
		for (var i = 0; i < arrQuestions.length; i++)
		{
			//Date
			strLineData += GetDate(new Date()) + ",";
			
			// Time
			strLineData += arrQuestions[i].strCompletedTime + ",";
		
			// Score
			strLineData += arrQuestions[i].nPoints + ",";
			
			// Quiz Name
			strLineData += oQuizData.strQuizName + ",";
			
			// Objective Id
			strLineData += arrQuestions[i].strLMSId + ",";

			// Interaction Type
			strLineData += arrQuestions[i].strType + ",";

			// Student Response
			var strResponse = arrQuestions[i].strUserResponse;
			strResponse = ReplaceAll(strResponse, "'", "%27");
			strLineData += strResponse + ",";
			
			// Result
			strLineData += arrQuestions[i].strStatus + ",";
			
			// Weight
			strLineData += arrQuestions[i].nWeight + ",";
			
			// Latency
			strLineData += arrQuestions[i].nLatency;
			
			strLineData += strNewLine;
		}
	}
	
	strQuizResults = strMainHeader + strMainData + strLineHeader + strLineData;

	var sHTML = "";
	if (IE)
	{
		sHTML += '<FORM id="formQuiz" method="POST" action="mailto:' + strAddress + '?subject=' + g_strSubject + '&amp;body=' + strQuizResults + '" enctype="text/plain">';
	}
	else
	{
		sHTML += '<FORM id="formQuiz" method="POST" action="mailto:' + strAddress + '?subject=' + g_strSubject + '" enctype="text/plain">';
		sHTML += '<INPUT TYPE="hidden" NAME="Quiz Results" VALUE=\'' + strQuizResults + '\'>';
	}
	sHTML += '<br><input type="submit"><br>';
	sHTML += '</FORM>';
	document.getElementById("divEmail").innerHTML = sHTML;
	document.getElementById("formQuiz").submit();
}

////////////////////////////////////////////////////////////////////////////////
// Get Time
////////////////////////////////////////////////////////////////////////////////
function GetTime(dtmDate)
{
	var strResult = "";
	var nHours = dtmDate.getHours();
	var strAM = "am";
	var nMinutes = dtmDate.getMinutes();
	var strMinutes = "" + nMinutes;
	var nSeconds = dtmDate.getSeconds();
	var strSeconds = "" + nSeconds;

	if (nMinutes < 10)
	{
		strMinutes = "0" + nMinutes;
	}
	
	if (nSeconds < 10)
	{
		strSeconds = "0" + nSeconds;
	}

	strResult = nHours + ":" + strMinutes + ":" + strSeconds;

	return strResult;
}

function GetDate(dtmDate)
{
	var strResult = "";

	strResult = (dtmDate.getMonth() + 1) + "/" + dtmDate.getDate() + "/" + dtmDate.getFullYear();

	return strResult;
}

////////////////////////////////////////////////////////////////////////////////
// Results data
////////////////////////////////////////////////////////////////////////////////

function QuizData(strQuizId, strQuizName)
{
	this.strQuizId = strQuizId;
	this.strQuizName = strQuizName;
	this.arrQuestions = new Array();
	
	this.dtmFinished = new Date();
	this.strStatus = "";
	this.nScore = 0;
	this.nPassingScore = 80;
	this.nMinScore = 0;
	this.nMaxScore = 100;
	this.nPtScore = 0;
	this.nPtMax = 100;
	
	this.AddQuestionResult = function(oQuestionResult)
	{
		var bFound = false;
		
		for (var i = 0; i < this.arrQuestions.length; i++)
		{
			if (this.arrQuestions[i].nQuestionNumber == oQuestionResult.nQuestionNumber)
			{
				this.arrQuestions[i] = oQuestionResult;
				bFound = true;
			}
		}
		
		if (!bFound)
		{
			this.arrQuestions.push(oQuestionResult);
		}
	}
	
}

function ContentResults()
{
	this.dtmFinished = JSON.stringify(new Date());
	this.nPassingScore = 80;
	this.nScore = 0;
	this.strStatus = "incomplete";
	this.strType = "view";
}

function QuestionResults(strId, strLMSId, strType, strCorrectResponse, strUserResponse, nLatency, strStatus, nPoints, strCompletedTime, nWeight, nQuestionNumber, strDescription, bTracked)
{
	this.strId = strId;
	this.strLMSId = strLMSId;
	this.strType = strType;
	this.strCorrectResponse = strCorrectResponse;
	this.strUserResponse = strUserResponse;
	this.nLatency = nLatency;
	this.strStatus = strStatus;
	this.nPoints = nPoints;
	this.strCompletedTime = strCompletedTime;
	this.nWeight = nWeight;
	this.nQuestionNumber = nQuestionNumber;
	this.strDescription = strDescription;
	this.bTracked = bTracked;
}

/****************************************************/
// Tin Can
/****************************************************/
var TYPE_RESUME_SAVE = 1;
var TYPE_RESUME_RESTORE = 2;
var TYPE_TRACKING = 3;

var g_bWaitingTinCanResponse = false;
var g_arrTinCanMsgQueue = new Array();
var g_oCurrentRequest = null;
var g_bStopPosting = false;
var g_bFatalError = false;

function GetTinCanData()
{
	return decodeURIComponent(g_strQuery);
}

function SendRiseStatement(statement)
{
	if (g_oInterfaceObject.isRise && g_oInterfaceObject.LmsUpdate != null)
	{
		g_oInterfaceObject.LmsUpdate(JSON.parse(statement));
	}
}
	
function SendTinCanStatement(nMessageType, strMethod, strData, strUrl, arrHeaders)
{
	var oTinCanRequest = new Object();
	oTinCanRequest.MessageType = nMessageType;
	oTinCanRequest.Method = strMethod;
	oTinCanRequest.Data = unescape(strData);
	oTinCanRequest.Url = strUrl;
	oTinCanRequest.Headers = arrHeaders;
	
	SendRequest(oTinCanRequest)
}

function SendRequest(oTinCanRequest)
{
	if (g_bWaitingTinCanResponse || g_bStopPosting)
	{
		g_arrTinCanMsgQueue.push(oTinCanRequest);
	}
	else
	{
		g_oCurrentRequest = oTinCanRequest;
		PostAsyncRequest(oTinCanRequest.MessageType, oTinCanRequest.Method, oTinCanRequest.Data, oTinCanRequest.Url, oTinCanRequest.Headers)
	}
}

function PostAsyncRequest(nMessageType, strMethod, strData, strUrl, arrHeaders)
{
	try
	{
		if (UseXDomainRequest(strUrl))
		{
			PostXDomainRequest(nMessageType, strMethod, strData, strUrl, arrHeaders, false);
		}
		else
		{
			PostXmlHttp(nMessageType, strMethod, strData, strUrl, arrHeaders);
		}
	}
	catch (error)
	{
		if (confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry?"))
		{
			g_bWaitingTinCanResponse = false;
			SendRequest(g_oCurrentRequest);
			return;
		}
		else
		{
			g_bStopPosting = true;
			g_bFatalError = true;
			GetPlayer().FatalTinCanError(0);
		}
	}
}

function PostXDomainRequest(nMessageType, strMethod, strData, strUrl, arrHeaders, bSync)
{
	var xDomain = new XDomainRequest();
	xDomain.open(strMethod, strUrl);
	
	xDomain.MessageType = nMessageType;
	xDomain.status = 0;

	xDomain.onload = function()
	{
		xDomain.status = 200;
		
		if (!bSync)
		{
			OnSendComplete(xDomain);
		}
	}
	
    xDomain.onerror = function()
	{
		xDomain.status = -1;
		
		if (!bSync)
		{
			OnSendError(xDomain);
		}
	}
	
	xDomain.send(strData);
	
	if (bSync)
	{
		var nStartTime = (new Date).getTime();
		
		while ((new Date).getTime() - nStartTime < 5000 && xDomain.status == 0)
		{
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.open("GET", window.location + "?" + (new Date).getTime(), false);
			xmlHttp.send(null);
		}
	}
	
	return xDomain.status;
}

function PostXmlHttp(nMessageType, strMethod, strData, strUrl, arrHeaders)
{
	var xmlHttp = CreateXmlHttp();

	if (xmlHttp != null)
	{
		g_bWaitingTinCanResponse = true;
		
		xmlHttp.MessageType = nMessageType;
		xmlHttp.onreadystatechange = function()
		{
			if (xmlHttp.readyState == 4)
			{
				if (xmlHttp.status >= 400 && !(IE && xmlHttp.status == 1223))
				{
					OnSendError(xmlHttp);
				}
				else
				{
					OnSendComplete(xmlHttp);
				}
			}
		}
	
		xmlHttp.open(strMethod, strUrl, true);
		
		if (arrHeaders != null && arrHeaders.length > 0)
		{
			for (var i = 0; i < arrHeaders.length; i++)
			{
				xmlHttp.setRequestHeader(arrHeaders[i].name, arrHeaders[i].value);
			}
		}
		
		xmlHttp.send(strData);

	}
}

function OnSendComplete(commObj)
{
	if (commObj.MessageType == TYPE_RESUME_RESTORE)
	{
		GetPlayer().SetTinCanResume(commObj.responseText);
	}
	
	g_bWaitingTinCanResponse = false;
	g_oCurrentRequest = null;

	if (g_arrTinCanMsgQueue.length > 0 && !g_bStopPosting)
	{
		SendRequest(g_arrTinCanMsgQueue.shift());
	}
}

function OnSendError(commObj)
{
	if (commObj.MessageType == TYPE_RESUME_RESTORE)
	{
		GetPlayer().SetTinCanResume("");
		
		g_bWaitingTinCanResponse = false;
		g_oCurrentRequest = null;

		if (g_arrTinCanMsgQueue.length > 0 && !g_bStopPosting)
		{
			SendRequest(g_arrTinCanMsgQueue.shift());
		}
	}
	else
	{
		if (confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry? "))
		{
			g_bWaitingTinCanResponse = false;
			SendRequest(g_oCurrentRequest);
		}
		else
		{
			g_bStopPosting = true;
			g_bFatalError = true;
			if (commObj.status)
			{
				GetPlayer().FatalTinCanError(commObj.status);
			}
		}
	}
}

function CheckTinCanComplete()
{
	g_bStopPosting = true;
	
	while (g_arrTinCanMsgQueue.length > 0)
	{
		var oRequest = g_arrTinCanMsgQueue.shift();
		
		PostSyncRequest(oRequest.Method, oRequest.Data, oRequest.Url, oRequest.Headers)
	}
}

function CreateXmlHttp()
{
	var xmlHttp = null;
	var arrCtrlName = new Array("MSXML2.XMLHttp.5.0", "MSXML2.XMLHttp.4.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp", "Microsoft.XMLHttp");
	var nIndex = 0;
	
	if (window.XMLHttpRequest)
	{
		try
		{
			xmlHttp = new XMLHttpRequest();
		}
		catch (e)
		{
			xmlHttp = null;
		}
	}
	
	if (xmlHttp == null && window.ActiveXObject)
	{
		// Use the ActiveX Control
		while (xmlHttp == null && nIndex < arrCtrlName.length)
		{
			try
			{
				xmlHttp = new ActiveXObject(arrCtrlName[nIndex]);
			}
			catch (e)
			{
				xmlHttp = null;
			}
			
			nIndex++;
		}

	}

	return xmlHttp;
}

function PostSyncRequest(strMethod, strData, strUrl, arrHeaders)
{
	try
	{
		var nStatus = 0;
		
		if (UseXDomainRequest(strUrl))
		{
			nStatus = PostXDomainRequest(0, strMethod, strData, strUrl, arrHeaders, true);
		}
		else
		{
			nStatus = PostSyncXmlHttp(strMethod, strData, strUrl, arrHeaders);
		}
		
		if (nStatus != 200)
		{
			if(confirm("Could not save the result data. You may need to login again. Retry?"))
			{
				PostSyncRequest(strMethod, strData, strUrl, arrHeaders);
				return;
			}
			else
			{
				g_bFatalError = true;
			}
		}
	}
	catch (error)
	{
		if (confirm("Unable to connect to server.  Please verify that you are connected to the internet. Retry?"))
		{
			PostSyncRequest(strMethod, strData, strUrl, arrHeaders);
			return;
		}
		else
		{
			g_bFatalError = true;
		}
	}
}

function PostSyncXmlHttp(strMethod, strData, strUrl, arrHeaders)
{
	var xmlHttp = CreateXmlHttp();
	var nStatus = 200;
	
	if (xmlHttp != null)
	{
		xmlHttp.open(strMethod, strUrl, false);

		for (var i = 0; i < arrHeaders.length; i++)
		{
			xmlHttp.setRequestHeader(arrHeaders[i].name, arrHeaders[i].value);
		}
		
		xmlHttp.send(strData);
		
		if(xmlHttp.status >= 400 && !(IE && xmlHttp.status == 1223))
		{
			nStatus = -1;
		}
	}
	
	return nStatus;
}

function UseXDomainRequest(strUrl)
{
    var bResult = false;
	
	if (window.XDomainRequest)
	{
		var xmlHttp = CreateXmlHttp();
		var anchorDest = (document.createElement("a"));
		var anchorSource = (document.createElement("a"));
		anchorDest.href = strUrl;
		anchorSource.href = window.location;

		bResult = (anchorDest.hostname != anchorSource.hostname || anchorDest.protocol != anchorSource.protocol || anchorDest.port != anchorSource.port);
	}
	
	return bResult;
}


// tracking for OS and browser

// https://gist.github.com/982883
var uuid = function (a){
	return a           // if the placeholder was passed, return
	? (              // a random number from 0 to 15
	  a ^            // unless b is 8,
	  Math.random()  // in which case
	  * 16           // a random number from
	  >> a/4         // 8 to 11
	  ).toString(16) // in hexadecimal
	: (              // or otherwise a concatenated string:
	  [1e7] +        // 10000000 +
	  -1e3 +         // -1000 +
	  -4e3 +         // -4000 +
	  -8e3 +         // -80000000 +
	  -1e11          // -100000000000,
	  ).replace(     // replacing
	    /[018]/g,    // zeroes, ones, and eights with
	    uuid         // random hex digits
	  );
};


function DoOnLoad() {
	if (!g_bSuppressAnalytics) {
		var xhr = CreateXmlHttp();
		var now = new Date();
		var protocol = window.location.protocol;
		// Stringify here since older IEs do not implement `JSON.stringify`
		var data = '{"messageId":"' + uuid() + '",' +
		  '"sentAt":"' + now.toISOString() + '",' +
		  '"batch":[{' +
			'"event":"player_course_load",' +
			'"properties":{' +
			  '"os":"' + [ bowser.osname, bowser.osversion ].join(' ') + '",' +
			  '"browser":"' + [ bowser.name, bowser.version ].join(' ') + '",' +
			  '"playerVersion":"' + window.g_strPlayerVersion + '",' +
			  '"playerType":"Flash",' +
			  '"lmsPresent":"' + window.g_bLMS + '",' +
			  '"tinCanPresent":"' + window.g_bTinCan + '",' +
			  '"aoSupport":"' + window.g_bAOSupport + '",' +
			  '"publishSource":"' + window.g_strPublishSource + '",' +
			  '"protocol":"' + protocol.substr(0, protocol.length - 1) + '",' + // remove the colon
			  '"productChannel":"' + window.g_strProductChannel + '",' + 
			  '"aid":"' + window.g_strAID + '",' + 
			  '"cid":"' + window.g_strCID + '",' + 
			'},' +
			'"type":"track",' +
			'"messageId":"' + uuid() + '",' +
			'"timestamp":"' + now.toISOString() + '",' +
			'"context":{' +
			  '"ip":"0.0.0.0",' +
			  '"page":{' +
			'"path":"/",' +
			'"referrer":"",' +
			'"search":"",' +
			'"title":"",' +
			'"url":"http://"' +
			  '}' +
			'},' +
			'"integrations":{},' +
			'"anonymousId":"' + uuid() + '"' +
		  '}]}';

		xhr.open('POST', 'https://metrics.articulate.com/v1/import');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(data);
	}
};

