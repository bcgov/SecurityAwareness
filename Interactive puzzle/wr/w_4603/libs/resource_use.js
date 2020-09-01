var movieWidth;
var movieHeight;
var canvas;
var scalePercentagew;
var scalePercentageh;
var lcap;
var no_of_attempts = 0;
var no_of_tries = 0;
var handle;
var finishedarray
var entertime;
var gameMode;
var update = true;
var myscore = 0;
var scoreForPresenter = false;
var ContainerSize
var ID_Time;
var ID_Score;
var ID_Reset;

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

var myWidgetiFrame
var isPresenter = false;
var inQuizScope = false;

resourceUse1 = {
	onLoad: function() {
		if (!this.captivate) return;
		lcap = this.captivate;
		handle = this.captivate.CPMovieHandle;
		//if (handle.isWidgetVisible() == true) {
			var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
			if (lInteractiveWidgetHandle) {
				if (lInteractiveWidgetHandle.shouldDisable()) this.disable();
				var btnElement = document.getElementById('puzzleCreate');
				if (btnElement) {
					// btnElement.onmouseover = function(e)
					// {
					// lInteractiveWidgetHandle.setShowHint();
					// }
					// btnElement.onmouseout = function(e)
					// {
					// lInteractiveWidgetHandle.setHideHint();
					// }
					btnElement.onclick = function(e) {
						//Handle Click inside Widget
						//lInteractiveWidgetHandle.setSuccess(true);
					}
				}

			}
			if(typeof this.captivate.CPMovieHandle.isPresenter == 'function')
				isPresenter = this.captivate.CPMovieHandle.isPresenter();
						
			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if (!this.movieProps) return;
			this.varHandle = this.movieProps.variablesHandle;
			m_VariableHandle = this.varHandle;
			//this.eventDisp = this.movieProps.eventDispatcher;
			evtHandle = this.movieProps.eventDispatcher;
			mainCPNamespace = this.movieProps.getCpHandle();
			isResponsiveProject = mainCPNamespace.responsive;
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();

			this.externalImage = '';
			this.description = '';
			this.myVar = '';
			this.myVar1 = '';
			
			ContainerSize = this.OpenAjax.getSize();

			movieWidth = this.movieProps.contentWidth //parseInt(size.width.split("px")[0]);
			movieHeight = this.movieProps.contentHeight //parseInt(size.height.split("px")[0]);
			
			
			//Captivate Event listener
			if(!isPresenter){
				evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
				evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			}

			this.updateData();
			this.doUpdate();
			inQuizScope = parent.cpInQuizScope
			if (inQuizScope == true) {
				no_of_attempts = this.captivate.CPMovieHandle.getCPQuestionData().maxAttempts

				if (no_of_attempts == -1) {
					no_of_attempts = 1
				}
				no_of_tries = this.captivate.CPMovieHandle.getCPQuestionData().numTries
				id = setInterval(checkval, 100)
				//checkval();
				window.quizscope = 1
			} else {
				// if (window.quizscope == 0)
				//return;
				id = setInterval(checkval, 100)
				//checkval();
			}
		//}

	},

	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	enable: function() {
		var btnElement = document.getElementById('canvas');
		btnElement.disabled = false;
	},
	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	disable: function() {
		var btnElement = document.getElementById('canvas');
		btnElement.disabled = 'disabled';
	},
	//Captivate App will not recognize a Question Widget unless this function is implemented and returns true
	getInteractionQuestionState: function() {
		var lResult_Str = finished + ":quiz";

		//Append with mins
		lResult_Str = lResult_Str + ":" + exportRoot.ge_mc.entertimemin.text;

		//Append with seconds
		lResult_Str = lResult_Str + ":" + exportRoot.ge_mc.entertimesec.text;

		//Append with score
		lResult_Str = lResult_Str + ":" + exportRoot.ge_mc.enterscore.text;

		return lResult_Str;
	},

	setInteractionQuestionState: function(aVal) {
		//Implements this to set Widget State from input String(aVal)
		var lArray = [];
		lArray = aVal.split(",");

		if (lArray[0] != "") {
			finished = lArray[0];
		} else {
			finished = "notdone"
		}

		if (lArray.length < 2) return;
	},

	getCorrectAnswerAsArray: function() {
		//Return correct answer as string
		return ["1"];
	},

	getCurrentAnswerAsString: function() {
		//Return current answer as string
	},

	//Handle Click, if Clicked Outside Widget ( will be called from captivate internally)
	onClickExternal: function(e) {
		var lMsg = 'On Click Received in Widget';
		if (e) {
			lMsg += "x=" + e.pageX + "y=" + e.pageY;
		}

		if (!this.captivate) return;

		var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
	},
	updateData: function() {
		var that = this;

		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		myWidgetiFrame = window.parent.document.getElementById(window.name);

		var id = 0;
		var result = jQuery.parseXML(this.xmlStr);
		var resultDoc = jQuery(result);
		var strProp = resultDoc.find('string').text();

		var res = resultDoc.find('#resultVariable');

		if (res) {
			if (res.find('string')) {
				resultVariable = res.find('string').text();

			}
		}
		////console.log(that.grabAssetId(jQuery(this).children('image'))); //grab image id
		//soundIDArray.push(that.grabAssetId(jQuery( this ).children('sound')));	//grab sound id	

		var internalImageProp = resultDoc.find('#internalImageId');
		if (internalImageProp) {
			if (internalImageProp.find('number')) {
				id = parseInt(internalImageProp.find('number').text());
				if (id != 0) {
					internalImage = this.movieProps.ExternalResourceLoader.getResourcePath(id);
				} else {
					if(isPresenter){
						var filenameforpresenter = resultDoc.find('#filenameforpresenter');
						if (filenameforpresenter) {
							if (filenameforpresenter.find('string')) {
								id = filenameforpresenter.find('string').text();
								internalImage = this.movieProps.ExternalResourceLoader.getResourcePath(id);
								movieWidth = parseInt(ContainerSize.width.split("px")[0]);
								movieHeight = parseInt(ContainerSize.height.split("px")[0]);
							}
						}
					}
				}
			}
		}



		var rswidthprop = resultDoc.find('#rswidth');
		if (rswidthprop) {
			if (rswidthprop.find('number')) {
				rswidth = parseInt(rswidthprop.find('number').text());

			}
		}

		var titlename = resultDoc.find('#titlename');
		if (titlename) {
			if (titlename.find('string')) {
				title = titlename.find('string').text();

			}
		}
		var Irowsprop = resultDoc.find('#Irows');
		if (Irowsprop) {
			if (Irowsprop.find('number')) {
				Irows = parseInt(Irowsprop.find('number').text());
			}
		}
		var entertimepropmin = resultDoc.find('#entertimemin');

		if (entertimepropmin) {
			if (entertimepropmin.find('string')) {
				entertimemin = entertimepropmin.find('string').text();

			}
		}
		var entertimepropsec = resultDoc.find('#entertimesec');

		if (entertimepropsec) {
			if (entertimepropsec.find('string')) {
				entertimesec = entertimepropsec.find('string').text();
			}
		}
		var presetprop = resultDoc.find('#preset');

		if (presetprop) {
			if (presetprop.find('number')) {
				preset = parseInt(presetprop.find('number').text());
			}
		}
		var clicimageprop = resultDoc.find('#clickedimageflag');

		if (clicimageprop) {
			if (clicimageprop.find('number')) {
				clickedimageflag = parseInt(clicimageprop.find('number').text());
				primg = this.movieProps.ExternalResourceLoader.getResourcePath(clickedimageflag);
			}
		}
		var clicbckimageprop = resultDoc.find('#clickedbckimageflag');

		if (clicbckimageprop) {
			if (clicbckimageprop.find('number')) {
				clickedbckimageflag = parseInt(clicbckimageprop.find('number').text());

			}
		}
		var typeprop = resultDoc.find('#type');

		if (typeprop) {
			if (typeprop.find('number')) {
				type = typeprop.find('string').text();

			}
		}


		//Adding the following code to cater to Presenter
		var enterscorePresenter = resultDoc.find('#enterscore');
		if (enterscorePresenter) {
			if (enterscorePresenter.find('string')) {
				enterscoreForPresenter = parseInt(enterscorePresenter.find('string').text());
			}
		}
		
		var enteredsuccesstext = resultDoc.find('#enteredsuccesstext');
		if (enteredsuccesstext) {
			if (enteredsuccesstext.find('string')) {
				enteredsuccesstextForPresenter = enteredsuccesstext.find('string').text();
			}
		}
		
		var enteredfailuretext = resultDoc.find('#enteredfailuretext');
		if (enteredfailuretext) {
			if (enteredfailuretext.find('string')) {
				enteredfailuretextForPresenter = enteredfailuretext.find('string').text();
			}
		}

		var ID_Timetemp = resultDoc.find('#ID_Time');
		if (ID_Timetemp) {
			if (ID_Timetemp.find('string')) {
				ID_Time = ID_Timetemp.find('string').text();
			}
		}
		
		var ID_Scoretemp = resultDoc.find('#ID_Score');
		if (ID_Scoretemp) {
			if (ID_Scoretemp.find('string')) {
				ID_Score = ID_Scoretemp.find('string').text();
			}
		}
		
		var ID_Resettemp = resultDoc.find('#ID_Reset');
		if (ID_Resettemp) {
			if (ID_Resettemp.find('string')) {
				ID_Reset = ID_Resettemp.find('string').text();
			}
		}
		
		
		if (myWidgetiFrame) {
			//myWidgetiFrame.style.width = movieWidth + "px";
			//myWidgetiFrame.style.height = movieHeight + "px";

		}
	},
	grabAssetId: function(jqueryXMLNode) {
		var id = jqueryXMLNode.attr("id");
		if (id == -1) return -1;
		var nodeValue = jqueryXMLNode.text();
		if (nodeValue == "") return parseInt(id); //For captivate
		return nodeValue; //For presenter
	},

	doUpdate: function() {
		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		
		myWidgetiFrame = window.parent.document.getElementById(window.name);
		if(!isPresenter){
			if (myWidgetiFrame) {
				if(isResponsiveProject){
					myWidgetiFrame.parentElement.parentElement.parentElement.style.top = "0px";
					myWidgetiFrame.parentElement.parentElement.parentElement.style.left = "0px";
				}else{
					myWidgetiFrame.parentElement.parentElement.style.top = "0px";
					myWidgetiFrame.parentElement.parentElement.style.left = "0px";
				}
			}
		}
		myWidgetiFrame.style.width = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth + "px";
		myWidgetiFrame.style.height = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight + "px";
		
		myWidgetiFrame.parentElement.parentElement.style.width = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth +"px";
		myWidgetiFrame.parentElement.parentElement.style.height = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight+"px";
		
		var elem = document.getElementById('textarea_display');
		if (elem) {
			elem.innerHTML = this.myVar;
			//$(elem).width(document.width - 15);
			//$(elem).height(document.height - 15);
		}

		if (internalImage && internalImage.length > 1) {
			var internal_image_elem = document.getElementById("internal_image");
			if (internal_image_elem) {
				var img1 = new Image();
				img1.src = internalImage;
				img1.width = 25;
				img1.height = 16;
				internal_image_elem.appendChild(img1);
			}
		}
		elem = null;
		if(!isPresenter){
			resizeInteraction(movieWidth,movieHeight);
		}
	}
};



resource_use = function() {
	return resourceUse1;
}

function checkval() {
	clearInterval(id);
	jiginit();
}

function jiginit() {
	canvas = document.getElementById("canvas");
	createjs.Ticker.setFPS(30);
	exportRoot = new lib.changedforHTML();
	exportRoot.ge_mc.enterscore.visible = false;
	exportRoot.ge_mc.theme.score_txt.visible = false;
	var acW = 640;
	var acH = 480;

	canvas.width = movieWidth;
	canvas.height = movieHeight;
	stage = new createjs.Stage(canvas);
	stage.scaleX = movieWidth / acW;
	stage.scaleY = movieHeight / acH;
	scalePercentagew = movieWidth / acW;
	scalePercentageh = movieHeight / acH;

	//if(createjs.Touch.isSupported()){
	//createjs.Touch.enable(stage);
	//}
	stage.enableMouseOver();
	//stage.mouseMoveOutside = true;
	
	console.log(inQuizScope,"inQuizScope")
	if(!isPresenter){
		if (inQuizScope == true) {
			//console.log("Inside Quiz scope");
			myscore = lcap.CPMovieHandle.getCPQuestionData().weightage.toString();
			exportRoot.ge_mc.enterscore.visible = true;
			exportRoot.ge_mc.enterscore.text = "0";
			exportRoot.ge_mc.theme.score_txt.visible = true;
		} else {
			exportRoot.ge_mc.enterscore.visible = false;
			exportRoot.ge_mc.enterscore.text = "";
		}
	}else{
		if (enterscoreForPresenter) {
			//console.log("Running from Presenter");
			myscore = enterscoreForPresenter;
			exportRoot.ge_mc.enterscore.visible = true;
			exportRoot.ge_mc.enterscore.text = "0";
			exportRoot.ge_mc.theme.score_txt.visible = true;
		} else {
			myscore = "0";
		}
	}
	
	$('#hintimage').css({
		position: "relative",
		top: (300 * scalePercentageh + 35 * scalePercentageh) + "px",
		left: (456 * scalePercentagew + 50 * scalePercentagew) + "px",
		//left: "900px",
		width: 90 * scalePercentagew + "px",
		height: 90 * scalePercentageh + "px",
		zIndex: 5
	}).show();

	finishedarray = finished.split(":");
	exportRoot.ge_mc.nm.titletext.text = title;
	if (inQuizScope == true) {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
			if (finishedarray[0] == "success") {
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setfailuremode();
			}
		} else if (no_of_tries < no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode();
			} else if (finishedarray[0] == "success") {
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				//Learner should be able to try the question again if they fail
				setnotdonemode();
			}
		} else if (no_of_tries >= no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				//Learner should be marked as failed as they have finished all attempts
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setfailuremode();
			} else if (finishedarray[0] == "success") {
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				gameMode = "Review"
				exportRoot.ge_mc.enterscore.visible = true;
				exportRoot.ge_mc.theme.score_txt.visible = true;
				setfailuremode();
			}
		}
	} else {
		if (lcap.CPMovieHandle.getQuizController() && lcap.CPMovieHandle.getQuizController().m_QuizzingData != null) {
			if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
				if (finishedarray[0] == "notdone") {
					if (finishedarray[1] == "quiz") {
						gameMode = "Review"
						exportRoot.ge_mc.enterscore.visible = true;
						exportRoot.ge_mc.theme.score_txt.visible = true;
						setfailuremode();
					} else {
						setnotdonemode();
					}
				} else if (finishedarray[0] == "success") {
					gameMode = "Review"
					exportRoot.ge_mc.enterscore.visible = true;
					exportRoot.ge_mc.theme.score_txt.visible = true;
					setsuccessmode();
				} else if (finishedarray[0] == "failuretimeout") {
					gameMode = "Review"
					exportRoot.ge_mc.enterscore.visible = true;
					exportRoot.ge_mc.theme.score_txt.visible = true;
					setfailuremode();
				}
			} else if (no_of_tries < no_of_attempts) {
				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					gameMode = "Review"
					exportRoot.ge_mc.enterscore.visible = true;
					exportRoot.ge_mc.theme.score_txt.visible = true;
					setsuccessmode();
				}
			} else if (no_of_tries >= no_of_attempts) {
				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "success") {
					gameMode = "Review"
					exportRoot.ge_mc.enterscore.visible = true;
					exportRoot.ge_mc.theme.score_txt.visible = true;
					setsuccessmode();
				} else if (finishedarray[0] == "failuretimeout") {
					gameMode = "Review"
					exportRoot.ge_mc.enterscore.visible = true;
					exportRoot.ge_mc.theme.score_txt.visible = true;
					setfailuremode();
				}
			}
		} else {
			if (finishedarray[0] == "notdone") {
				if (finishedarray[1] == "quiz") {
					gameMode = "Review"
					setfailuremode();
				} else {
					setnotdonemode();
				}
			} else if (finishedarray[0] == "success") {
				gameMode = "Review"
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				gameMode = "Review"
				setfailuremode();
			}
		}
	}
	stage.addChild(exportRoot);
	stage.update();
	createjs.Ticker.setFPS(24);
	createjs.Ticker.addEventListener("tick", stage);
}

/*function tick(event) {
 // this set makes it so the stage only re-renders when an event handler indicates a change has happened.
 if (update) {
 //console.log("Stage Updated")
 update = false; // only update once
 stage.update(event);
 }
 }*/

function setfailuremode() {
	exportRoot.ge_mc.enterscore.text = "0";
	var canv = self.document.getElementById('puzzleCanvas');
	canv.style.zIndex = 4;
	var fi = self.document.getElementById('finalimage');

	if (preset == 0) {
		fi.src = internalImage;
	} else {
		fi.src = primg;
	}
	$('#finalimage').css({
		position: "absolute",
		top: (exportRoot.ge_mc.y * scalePercentageh / 2 ) + "px",
		left: (exportRoot.ge_mc.x * scalePercentagew / 2 - 100) + "px",
		width: 330 * scalePercentagew + "px",
		height: 330 * scalePercentageh + "px",
		zIndex: -1
	}).show();
	
	$('#feedbackText').css({
		position: "absolute",
		top: (((exportRoot.ge_mc.y * scalePercentageh) / 2) +($('#finalimage').height())) + "px",
		left: (exportRoot.ge_mc.x * scalePercentagew / 2 - 100) + "px",
		width: 330 * scalePercentagew + "px",
		height: 50 * scalePercentageh + "px",
		zIndex: -1
	}).show();
	
	if(isPresenter){
		if(enteredfailuretextForPresenter){
			$('#feedbackText').html(enteredfailuretextForPresenter)
		}
	}

	exportRoot.ge_mc.reset.visible = false;
	var hi = self.document.getElementById('hintimage');
	hi.style.visibility = "hidden";

	if (gameMode != "Review") {
		if (resultVariable != "") {
			m_VariableHandle[resultVariable] = exportRoot.ge_mc.enterscore.text;
		}
		setFailure();
	} else {
		if (finishedarray[2] != undefined) {
			exportRoot.ge_mc.entertimemin.text = finishedarray[2]
			exportRoot.ge_mc.entertimesec.text = finishedarray[3]
			exportRoot.ge_mc.enterscore.text = finishedarray[4];
		} else {
			exportRoot.ge_mc.entertimemin.text = "00"
			exportRoot.ge_mc.entertimesec.text = "00"
			exportRoot.ge_mc.enterscore.text = "0"
		}
	}
}

function setsuccessmode() {
	var fi = self.document.getElementById('finalimage');

	if (preset == 0) {
		fi.src = internalImage;
	} else {
		fi.src = primg;
	}

	var canv = self.document.getElementById('puzzleCanvas');
	canv.style.zIndex = 4;
	exportRoot.ge_mc.reset.visible = false;
	var hi = self.document.getElementById('hintimage');
	hi.style.visibility = "hidden";

	$('#finalimage').css({
		position: "absolute",
		top: (exportRoot.ge_mc.y * scalePercentageh / 2 ) + "px",
		left: (exportRoot.ge_mc.x * scalePercentagew / 2 - 100) + "px",
		width: 330 * scalePercentagew + "px",
		height: 330 * scalePercentageh + "px",
		zIndex: -1
	}).show();
	
	$('#feedbackText').css({
		position: "absolute",
		top: (((exportRoot.ge_mc.y * scalePercentageh) / 2) +($('#finalimage').height())) + "px",
		left: (exportRoot.ge_mc.x * scalePercentagew / 2 - 100) + "px",
		width: 330 * scalePercentagew + "px",
		height: 50 * scalePercentageh + "px",
		zIndex: -1
	}).show();
	
	if(isPresenter){
		if(enteredsuccesstextForPresenter){
			$('#feedbackText').html(enteredsuccesstextForPresenter)
		}
	}
	

	exportRoot.ge_mc.enterscore.text = myscore
	if (gameMode != "Review") {
		if (resultVariable != "") {
			m_VariableHandle[resultVariable] = exportRoot.ge_mc.enterscore.text;
		}
		setSuccess();
	} else {
		if (finishedarray[2] != undefined) {
			exportRoot.ge_mc.entertimemin.text = finishedarray[2]
			exportRoot.ge_mc.entertimesec.text = finishedarray[3]
			exportRoot.ge_mc.enterscore.text = finishedarray[4];
		} else {
			exportRoot.ge_mc.entertimemin.text = "00"
			exportRoot.ge_mc.entertimesec.text = "00"
		}
	}
}

function setSuccess() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	if(lInteractiveWidgetHandle){
		lInteractiveWidgetHandle.setSuccess(true);
	}
}

function setFailure() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	if(lInteractiveWidgetHandle){
		lInteractiveWidgetHandle.setSuccess(false);
	}
}

function setnotdonemode() {
	var hi = self.document.getElementById('finalimage');
	hi.style.visibility = "hidden";
	exportRoot.ge_mc.reset.addEventListener("mouseover", showmousehand);
	exportRoot.ge_mc.reset.addEventListener("mouseout", hidemousehand);
	exportRoot.ge_mc.reset.addEventListener("click", clearandthenshuffleAll);
	$('#finalimage').css({
		position: "absolute",
		top: (exportRoot.ge_mc.y * scalePercentageh / 2 ) + "px",
		left: (exportRoot.ge_mc.x * scalePercentagew / 2 - 100) + "px",
		width: 330 * scalePercentagew + "px",
		height: 330 * scalePercentageh + "px",
		zIndex: 1
	})

	if (entertimemin != "") {
		var timecheck = parseInt(entertimemin);
		if (entertimemin.toString().length > 1) {
			exportRoot.ge_mc.entertimemin.text = timecheck.toString();
		} else {
			exportRoot.ge_mc.entertimemin.text = "0" + entertimemin.toString();
		}
		if (entertimesec != 0) {
			if (entertimesec.toString().length > 1) {
				exportRoot.ge_mc.entertimesec.text = entertimesec.toString();
			} else {
				if (entertimemin != "") {
					exportRoot.ge_mc.entertimesec.text = "0" + entertimesec.toString();
				} else {
					entertimesec = 0;
					exportRoot.ge_mc.entertimesec.text = "00";
				}
			}
		} else {
			entertimesec = 0;
			exportRoot.ge_mc.entertimesec.text = "00";
		}

	} else {
		timecheck = 0;
		entertimemin = 0;
		exportRoot.ge_mc.entertimemin.text = "00";
		if (entertimesec != 0) {
			if (entertimesec.toString().length > 1) {
				exportRoot.ge_mc.entertimesec.text = entertimesec.toString();
			} else {
				exportRoot.ge_mc.entertimesec.text = "0" + entertimesec.toString();
			}
		} else {
			exportRoot.ge_mc.entertimesec.text = 00;
		}
	}
	entertime = (parseInt(entertimemin) * 60) + parseInt(entertimesec);
	if (resultVariable != "") {
		m_VariableHandle[resultVariable] = exportRoot.ge_mc.enterscore.text;
	}
	initAll();
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}

function resizeInteraction(thewidth, theheight){
	//console.log(myWidgetiFrame+"sdf")
    var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    //if (myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth > myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight){
        scale = (myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth / movieWidth);
		console.log(myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth,movieWidth,"sada")
   // } else {
        //scale = (myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight / movieHeight);
   // }
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
	
	$(myWidgetiFrame).css('-webkit-transform', scale);
    $(myWidgetiFrame).css('-moz-transform', scale);

    $(myWidgetiFrame).css('-o-transform', scale);
    $(myWidgetiFrame).css('-ms-transform', scale);
    $(myWidgetiFrame).css('-moz-transform-origin', '0 0');
    $(myWidgetiFrame).css('-webkit-transform-origin', '0 0');
    $(myWidgetiFrame).css('-moz-transform-origin', '0 0');
    $(myWidgetiFrame).css('-o-transform-origin', '0 0');
    $(myWidgetiFrame).css('-ms-transform-origin', '0 0');

	
	if (myWidgetiFrame) {
		if(isResponsiveProject){
			myWidgetiFrame.parentElement.parentElement.parentElement.style.top = "0px";
			myWidgetiFrame.parentElement.parentElement.parentElement.style.left = "0px";
		}else{
			myWidgetiFrame.parentElement.parentElement.style.top = "0px";
			myWidgetiFrame.parentElement.parentElement.style.left = "0px";
		}
		myWidgetiFrame.style.width = "1024px";
		myWidgetiFrame.style.height = "768px";
		
		myWidgetiFrame.parentElement.parentElement.style.width = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth +"px";
		myWidgetiFrame.parentElement.parentElement.style.height = myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight+"px";
	}
	
	//$('#Widget_4474_resource_use').width(myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth+"px");
}
	