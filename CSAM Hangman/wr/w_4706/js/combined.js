var canvas, stage, exportRoot, images;
var cageAtPosition = 0;
var correctString = '';
var timeInSecs;
var maxAttempts;
var resultVariable;
var completeCategories;
var completeWords;
var listOfWords;
var alphabetArray = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
var alphabetMappingArray = new Array('a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', 'i1', 'j1', 'k1', 'l1', 'm1', 'n1', 'o1', 'p1', 'q1', 'r1', 's1', 't1', 'u1', 'v1', 'w1', 'x1', 'y1', 'z1');
var usedWords;
var usedCategory;
var wrongAttempts;
var variableNameSet = false;
var timerEnabled = false;
var wrongLimit = 7;
var currentWord;
var wordsRemaining;
var maxAttempts;
var shown;
var enteredAlphabets;
var totalCorrectAnswers = 0;;
var sadFrame = 0;
var numberOfAttempts;
var remainingTime;
var m_VariableHandle;
var idOfAlphabets;
var countDownTimer;
var movieWidth;
var movieHeight;
var cageFrames = new Array(1, 3, 5, 7, 9, 11, 13);
var sel;
var lInteractiveWidgetHandle
var no_of_attempts;
var no_of_tries;
var finishedarray
var handle;
var bgColor;
var isDevice = false;
var isPresenter = false;
var evtHandle,mainCPNamespace
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 isDevice = true;
}

combined1 = {
	onLoad: function() {
		if (!this.captivate) return;
		lcap = this.captivate;

		handle = this.captivate.CPMovieHandle;
		if (handle.isWidgetVisible() == true) {
			lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
			if(typeof this.captivate.CPMovieHandle.isPresenter == 'function')
				isPresenter = this.captivate.CPMovieHandle.isPresenter();		
			
			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if (!this.movieProps) return;
			this.varHandle = this.movieProps.variablesHandle;
			this.eventDisp = this.movieProps.eventDispatcher;
			evtHandle = this.movieProps.eventDispatcher;
			mainCPNamespace = this.movieProps.getCpHandle();
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
			var size = this.OpenAjax.getSize()
			this.myVarName;
			this.direction = '';
			movieWidth = parseInt(size.width.split("px")[0]);
        	movieHeight = parseInt(size.height.split("px")[0]);
		
			//Captivate Event listener
			evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			
			////console.log("evtHandle")
			if(!isPresenter){
				m_VariableHandle = this.varHandle;
			}
			this.updateData();
			this.doUpdate();
		}
	},
	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	enable: function() {
		var btnElement = document.getElementById('canvasGame');
		btnElement.disabled = false;
	},
	//To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
	disable: function() {
		var btnElement = document.getElementById('canvasGame');
		btnElement.disabled = 'disabled';
	},
	//Captivate App will not recognize a Question Widget unless this function is implemented and returns true

	getInteractionQuestionState: function() {
		var lResult_Str = finished + ":quiz";
		//Implements this to return Widget State as String
		//alert("get has" + finished);
		////////console.log("get finishedvalue is ",finished)
		return lResult_Str;
	},
	setInteractionQuestionState: function(aVal) {
		//console.log("setInteractionQuestionState")
		//Implements this to set Widget State from input String(aVal)
		var lArray = [];
		lArray = aVal.split(",");

		if (lArray[0] != "") {
			finished = lArray[0];
		} else {
			finished = "notdone"
		}
		//alert("set has" + finished);
		////////console.log("set finishedvalue is ",finished)
		valueset = 1
		////////console.log(valueset,"valueset")
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
		//alert(lMsg);
		if (!this.captivate) return;
		//Call set Failure
		//lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
		//if (lInteractiveWidgetHandle) lInteractiveWidgetHandle.setSuccess(false, this.getCorrectAnswerAsArray(), "0");
	},
	updateData: function() {
		var result = jQuery.parseXML(this.xmlStr);
		var resultDoc = jQuery(result);

		timeInSecs = resultDoc.find('#timeInSecs').text();
		resultVariable = resultDoc.find('#resultVariable').text();
		maxAttempts = resultDoc.find('#maxAttempts').text();
		if (resultVariable != "") variableNameSet = true;
		if (timeInSecs == "0") {
			timerEnabled = false;
		} else {
			timerEnabled = true;
			remainingTime = timeInSecs;
			//create the timer with the specified value here
		}
		var forXml = resultDoc.find('#listOfCategories').text();
		sel = resultDoc.find('#loadme').text();
		//sel = "parrot.swf"
		var inputXML = jQuery.parseXML(forXml);
		inputXML = jQuery(inputXML);
		completeCategories = new Array();
		completeWords = new Array();
		var inputList = inputXML.find("category");
		var that = this;
		inputList.find("categoryName").each(function() {
			completeCategories.push($(this).text());
			completeWords.push($(this).parent().find("categoryWords").text());
		});
		//choose a category here, and assume 1st one was selected
		shownCategory = completeCategories[0];
		listOfWords = completeWords[0].split(',');
		totalCorrectAnswers = 0;

		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		
		if (sel == "mango.swf") {
			var headID = document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = 'libs/Hangman_Monkey.js';
			headID.appendChild(newScript);
			bgColor = '#C1C1C0';
			initMonkey();
		} else {
			var headID = document.getElementsByTagName("head")[0];
			var newScript = document.createElement('script');
			newScript.type = 'text/javascript';
			newScript.src = 'libs/Hangman_Parrot.js';
			headID.appendChild(newScript);
			bgColor = '#996600';
			initParrot();
		}

	},

	doUpdate: function() {
		var elem = document.getElementById('hangmanContent');
		elem = null;
	}
};

getHexColor = function(myColor) {
	var col = myColor.split('x');
	var retString = "#";
	if (col[1].length < 6) for (var i = col[1].length; i < 6; i++) retString = retString + "0";
	return retString + col[1];
}

combined = function() {
	return combined1;
}

function initMonkey() {

	canvas = document.getElementById("canvasGame");
	images = {};

	var manifest = [{src: "images/Bitmap1.png", id: "Bitmap1"},
	{src: "sounds/praise1.mp3", id: "praise1"},
	{src: "sounds/praise2.mp3", id: "praise2"},
	{src: "sounds/praise3.mp3", id: "praise3"},
	{src: "sounds/praise4.mp3", id: "praise4"},
	{src: "sounds/praise5.mp3", id: "praise5"},
	{src: "sounds/praise6.mp3", id: "praise6"},
	{src: "sounds/praise7.mp3", id: "praise7"},
	{src: "sounds/putdown1.mp3", id: "putdown1"},
	{src: "sounds/putdown10.mp3", id: "putdown10"},
	{src: "sounds/putdown11.mp3", id: "putdown11"},
	{src: "sounds/putdown12.mp3", id: "putdown12"},
	{src: "sounds/putdown13.mp3", id: "putdown13"},
	{src: "sounds/putdown14.mp3", id: "putdown14"},
	{src: "sounds/putdown2.mp3", id: "putdown2"},
	{src: "sounds/putdown3.mp3", id: "putdown3"},
	{src: "sounds/putdown4.mp3", id: "putdown4"},
	{src: "sounds/putdown5.mp3", id: "putdown5"},
	{src: "sounds/putdown6.mp3", id: "putdown6"},
	{src: "sounds/putdown7.mp3", id: "putdown7"},
	{src: "sounds/putdown8.mp3", id: "putdown8"},

	{src: "sounds/putdown9.mp3", id: "putdown9"},
	{src: "sounds/soundA.mp3", id: "soundA"},
	{src: "sounds/soundB.mp3", id: "soundB"},
	{src: "sounds/soundC.mp3", id: "soundC"},
	{src: "sounds/soundD.mp3", id: "soundD"},
	{src: "sounds/soundE.mp3", id: "soundE"},
	{src: "sounds/soundF.mp3", id: "soundF"},
	{src: "sounds/soundG.mp3", id: "soundG"},
	{src: "sounds/soundH.mp3", id: "soundH"},
	{src: "sounds/soundI.mp3", id: "soundI"},
	{src: "sounds/soundJ.mp3", id: "soundJ"},
	{src: "sounds/soundK.mp3", id: "soundK"},
	{src: "sounds/soundL.mp3", id: "soundL"},
	{src: "sounds/soundLose.mp3", id: "soundLose"},
	{src: "sounds/soundM.mp3", id: "soundM"},
	{src: "sounds/soundN.mp3", id: "soundN"},
	{src: "sounds/soundO.mp3", id: "soundO"},
	{src: "sounds/soundP.mp3", id: "soundP"},
	{src: "sounds/soundQ.mp3", id: "soundQ"},
	{src: "sounds/soundR.mp3", id: "soundR"},
	{src: "sounds/soundS.mp3", id: "soundS"},
	{src: "sounds/soundT.mp3", id: "soundT"},
	{src: "sounds/soundU.mp3", id: "soundU"},
	{src: "sounds/soundV.mp3", id: "soundV"},
	{src: "sounds/soundW.mp3", id: "soundW"},
	{src: "sounds/soundX.mp3", id: "soundX"},
	{src: "sounds/soundY.mp3", id: "soundY"},
	{src: "sounds/soundZ.mp3", id: "soundZ"},
	{src: "sounds/wingame.mp3", id: "wingame"},
	{src: "sounds/zipaway.mp3", id: "zipaway"}];

	var loader = new PreloadJS(false);
	loader.installPlugin(SoundJS);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
}

function initParrot() {
	canvas = document.getElementById("canvasGame");
	images = {};
	
	var manifest = [{src: "images/Bitmap2.png", id: "Bitmap2"},
	{src: "sounds/praise1.mp3", id: "praise1"},
	{src: "sounds/praise2.mp3", id: "praise2"},
	{src: "sounds/praise3.mp3", id: "praise3"},
	{src: "sounds/praise4.mp3", id: "praise4"},
	{src: "sounds/praise5.mp3", id: "praise5"},
	{src: "sounds/praise6.mp3", id: "praise6"},
	{src: "sounds/praise7.mp3", id: "praise7"},
	{src: "sounds/putdown1.mp3", id: "putdown1"},
	{src: "sounds/putdown10.mp3", id: "putdown10"},
	{src: "sounds/putdown11.mp3", id: "putdown11"},
	{src: "sounds/putdown12.mp3", id: "putdown12"},
	{src: "sounds/putdown13.mp3", id: "putdown13"},
	{src: "sounds/putdown14.mp3", id: "putdown14"},
	{src: "sounds/putdown2.mp3", id: "putdown2"},
	{src: "sounds/putdown3.mp3", id: "putdown3"},
	{src: "sounds/putdown4.mp3", id: "putdown4"},
	{src: "sounds/putdown5.mp3", id: "putdown5"},
	{src: "sounds/putdown6.mp3", id: "putdown6"},
	{src: "sounds/putdown7.mp3", id: "putdown7"},
	{src: "sounds/putdown8.mp3", id: "putdown8"},
	{src: "sounds/putdown9.mp3", id: "putdown9"},
	{src: "sounds/soundA.mp3", id: "soundA"},
	{src: "sounds/soundB.mp3", id: "soundB"},
	{src: "sounds/soundC.mp3", id: "soundC"},
	{src: "sounds/soundD.mp3", id: "soundD"},
	{src: "sounds/soundE.mp3", id: "soundE"},
	{src: "sounds/soundF.mp3", id: "soundF"},
	{src: "sounds/soundG.mp3", id: "soundG"},
	{src: "sounds/soundH.mp3", id: "soundH"},
	{src: "sounds/soundI.mp3", id: "soundI"},
	{src: "sounds/soundJ.mp3", id: "soundJ"},
	{src: "sounds/soundK.mp3", id: "soundK"},
	{src: "sounds/soundL.mp3", id: "soundL"},
	{src: "sounds/soundLose.mp3", id: "soundLose"},
	{src: "sounds/soundM.mp3", id: "soundM"},
	{src: "sounds/soundN.mp3", id: "soundN"},
	{src: "sounds/soundO.mp3", id: "soundO"},
	{src: "sounds/soundP.mp3", id: "soundP"},
	{src: "sounds/soundQ.mp3", id: "soundQ"},
	{src: "sounds/soundR.mp3", id: "soundR"},
	{src: "sounds/soundS.mp3", id: "soundS"},
	{src: "sounds/soundT.mp3", id: "soundT"},
	{src: "sounds/soundU.mp3", id: "soundU"},
	{src: "sounds/soundV.mp3", id: "soundV"},
	{src: "sounds/soundW.mp3", id: "soundW"},
	{src: "sounds/soundX.mp3", id: "soundX"},
	{src: "sounds/soundY.mp3", id: "soundY"},
	{src: "sounds/soundZ.mp3", id: "soundZ"},
	{src: "sounds/wingame.mp3", id: "wingame"},
	{src: "sounds/zipaway.mp3", id: "zipaway"}];

	var loader = new PreloadJS(false);
	loader.installPlugin(SoundJS);
	loader.onFileLoad = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);
}

var loadergif;

function handleFileLoad(o) {
	loadergif = document.getElementById("loadergif");
	loadergif.style.visibility = "visible"
	$('#loadergif').css({
		top: ((movieWidth/2)-96) + "px",
		left: ((movieHeight/2)+80) + "px",
	})
	
	if (o.type == "image") {
		images[o.id] = o.result;
	}
}

function handleComplete() {
	loadergif.style.visibility = "hidden";
	var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
	var myFrameName = window.name;
	var myWidgetiFrame = window.parent.document.getElementById(window.name);
	if (myWidgetiFrame) {
		if(isPresenter){
			myWidgetiFrame.parentElement.parentElement.style.top = parseInt(myWidgetiFrame.parentElement.parentElement.style.top.split("px"))-18 + "px";
			myWidgetiFrame.parentElement.parentElement.style.left = parseInt(myWidgetiFrame.parentElement.parentElement.style.left.split("px")) + "px";
		}else{
			myWidgetiFrame.parentElement.parentElement.style.top = parseInt(myWidgetiFrame.parentElement.parentElement.style.top.split("px"))-5 + "px";
			myWidgetiFrame.parentElement.parentElement.style.left = parseInt(myWidgetiFrame.parentElement.parentElement.style.left.split("px"))-5 + "px";
		}
		myWidgetiFrame.style.height = movieWidth + "px";
		myWidgetiFrame.style.width = movieWidth + "px";
	}

	//console.log(finishedarray,"finishedarray")
	finishedarray = finished.split(":")
	if (finishedarray[0] == "notdone") {
		setnotdonemode()
	} else if (finishedarray[0] == "success") {
		setsuccessmode()
	} else if (finishedarray[0] == "failuretimeout") {
		setfailuremode()
	}

	/*if (parent.cpInQuizScope == true) {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
			if (finishedarray[0] == "success") {
				setsuccessmode()
			} else if (finishedarray[0] == "failuretimeout") {
				setfailuremode()
			}
		} else if (no_of_tries < no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode()
			} else if (finishedarray[0] == "success") {
				setsuccessmode()
			} else if (finishedarray[0] == "failuretimeout") {
				setfailuremode()
			}
		}
		else if (no_of_tries >= no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode()
			} else if (finishedarray[0] == "success") {
				setsuccessmode()
			} else if (finishedarray[0] == "failuretimeout") {
				setfailuremode()
			}
		}
	} else {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData != null) {
			if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
				if (finishedarray[0] == "notdone") {
					if (finishedarray[1] == "quiz"){
						setfailuremode()
					} else {
						setnotdonemode()
					}
				} else if (finishedarray[0] == "success") {
					setsuccessmode()
				} else if (finishedarray[0] == "failuretimeout") {
					setfailuremode()
				}
			} else if (no_of_tries < no_of_attempts) {

				if (finishedarray[0] == "notdone") {
					setnotdonemode()
				} else if (finishedarray[0] == "complete") {
					setsuccessmode()
				}

			} else if (no_of_tries >= no_of_attempts) {
				if (finishedarray[0] == "notdone") {
					setnotdonemode()
				} else if (finishedarray[0] == "success") {
					setsuccessmode()
				} else if (finishedarray[0] == "failuretimeout") {
					setfailuremode()
				}
			}
		} else {
			if (finishedarray[0]=="notdone") {
				if (finishedarray[1]=="quiz") {
					setfailuremode();
				} else {
					setnotdonemode();
				}
			} else if (finishedarray[0] == "success") {
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				setfailuremode();
			}
		}
	}*/
	stage.update();
	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}


function setfailuremode() {
	finished = "success"
	//lInteractiveWidgetHandle.setSuccess(false);

	if (sel == "parrot.swf") {
		exportRoot = new lib.Hangman_Parrot();
		exportRoot.caged.happyP.visible = false;
		exportRoot.caged.sadP.visible = true;

		exportRoot.caged.sadP.gotoAndStop(2);
		exportRoot.caged.cageB.visible = true;
		exportRoot.caged.visible = true;
		exportRoot.caged.gotoAndStop(13);
		exportRoot.revealStage.visible = false;
	} else {
		exportRoot = new lib.Hangman_Monkey();
		exportRoot.successMonkey.visible = false;
		exportRoot.failedMonkey.visible = true;
		exportRoot.happyMonkey.visible = false;
		exportRoot.sadMonkey.visible = false;
		exportRoot.mainBackground.mgo.visible = true;
	}

	exportRoot.questionNum.visible = false;
	exportRoot.retryButton.visible = false;
	exportRoot.replayButton.visible = false;
	exportRoot.initialC.visible = false;
	exportRoot.showtime.text = "GAMEOVER"
	exportRoot.mainText.answerText.text = "GAME OVER!!";


	canvas.width = movieWidth;
	canvas.height = movieHeight;
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	var scalePercentagew = movieWidth / 800;
	var scalePercentageh = movieHeight / 600;
	stage.scaleX = scalePercentagew;
	stage.scaleY = scalePercentageh;

	stage.mouseEventsEnabled = true;
}

function setsuccessmode() {
	finished = "failuretimeout"
	//lInteractiveWidgetHandle.setSuccess(true);

	if (sel == "parrot.swf") {

		exportRoot = new lib.Hangman_Parrot();
		exportRoot.revealStage.visible = false;
		exportRoot.caged.cageB.visible = false;
		exportRoot.caged.visible = false;
		exportRoot.initialC.visible = false;
		exportRoot.caged.happyP.visible = true;
		exportRoot.caged.happyP.gotoAndPlay(0);
		exportRoot.caged.sadP.visible = false;

	} else {
		exportRoot = new lib.Hangman_Monkey();
		exportRoot.initialC.visible = false;
		exportRoot.happyMonkey.visible = false;
		exportRoot.sadMonkey.visible = false;
		exportRoot.successMonkey.visible = true;
		exportRoot.successMonkey.play();
		setTimeout(exportRoot.mainBackground.mgo.visible = false,1000)
		exportRoot.mainText.visible = true;
		exportRoot.mainText.play();
		exportRoot.failedMonkey.visible = false;
		exportRoot.happyMonkey.visible = false;
		exportRoot.sadMonkey.visible = false;

	}
	exportRoot.questionNum.visible = false;
	exportRoot.retryButton.visible = false;
	exportRoot.replayButton.visible = false;
	exportRoot.showtime.text = "GAMEOVER"
	exportRoot.mainText.alphabets.visible = true;
	exportRoot.mainText.answerText.text = "GAME OVER!!";

	canvas.width = movieWidth;
	canvas.height = movieHeight;
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	var scalePercentagew = movieWidth / 800;
	var scalePercentageh = movieHeight / 600;
	stage.scaleX = scalePercentagew;
	stage.scaleY = scalePercentageh;

	stage.mouseEventsEnabled = true;
}

function setnotdonemode() {
	if (sel == "parrot.swf") {
		exportRoot = new lib.Hangman_Parrot();
		exportRoot.timebg.visible = false;
	} else {
		exportRoot = new lib.Hangman_Monkey();
	}

	canvas.width = movieWidth;
	canvas.height = movieHeight;
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	var scalePercentagew = movieWidth / 800;
	var scalePercentageh = movieHeight / 600;
	stage.scaleX = scalePercentagew;
	stage.scaleY = scalePercentageh;

	stage.mouseEventsEnabled = true;

	var categoryCombo = generateCombobox();
	$(canvas).parent().append(categoryCombo);
	var pos = $('#chooseCategory').position();
	var height = 30;
	//if(!isDevice){
		$('#chooseCategory').css({
			position: "absolute",
			width:(350*scalePercentagew)+"px",
			height:(30*scalePercentageh)+"px",
			'font-size': (20*scalePercentagew),
			'background-color':bgColor,
			top: (240*scalePercentageh)+"px",
			left: (230*scalePercentagew)+"px",
			zIndex: 5000
		}).show();
/*	}else{
		$('#chooseCategory').css({
			position: "absolute",
			width:(250 * scalePercentagew) + "px",
			height:(20 * scalePercentageh) + "px",
			top: (exportRoot.initialC.y * scalePercentageh-60) + "px",
			left: (exportRoot.initialC.x * scalePercentagew-100) + "px",
			zIndex: 5000
		}).show();
	} */
	exportRoot.initialC.startPlaying.addEventListener("click", startedToPlay);
	exportRoot.mainText.visible = false;
	if (sel == "parrot.swf") {
		exportRoot.caged.happyP.visible = false;
		exportRoot.caged.sadP.visible = false;
		exportRoot.caged.cageB.visible = false;
		exportRoot.caged.visible = false;
		exportRoot.timebg.visible = false;
	} else {
		exportRoot.successMonkey.visible = false;
		exportRoot.failedMonkey.visible = false;
		exportRoot.happyMonkey.visible = false;
		exportRoot.sadMonkey.visible = false;
		exportRoot.mainBackground.mgo.visible = false;
	}
	exportRoot.timeDisplay.visible = false;
	exportRoot.questionNum.visible = false;
	exportRoot.retryButton.visible = false;
	exportRoot.replayButton.visible = false;
}


function playSound(name, loop) {
	SoundJS.play(name, SoundJS.INTERRUPT_EARLY, 0, 0, loop);
}

function generateCombobox() {
	var comboString = "";
	comboString += '<select id="chooseCategory" onchange="chooseCategory(event);">'
	for (var i = 0; i < completeCategories.length; i++) {
		comboString += ' <option value="' + i + '">' + completeCategories[i] + '</option>';
	};
	comboString += '</select>'
	return comboString;
}

function chooseCategory(event) {
	//do all the category choosing here, and return the chosen category
	var index = event.currentTarget.selectedIndex;
	shownCategory = completeCategories[index];
	listOfWords = completeWords[index].split(',');
}

function startedToPlay(event) {
	//completeWords = xmlInputWords.split(';')[0].split(',');
	//completeCategories = xmlInputCategories.split(',');
	//exportRoot.mainText.visible = true;
	if (sel == "parrot.swf") {
		exportRoot.caged.visible = false;
		exportRoot.revealStage.play();
		exportRoot.timebg.visible = true;
	} else {
		exportRoot.mainText.play();
	}
	exportRoot.questionNum.visible = true;
	exportRoot.initialC.visible = false;

	exportRoot.mainText.category.categoryText.text = shownCategory;
	$('#chooseCategory').hide();
	usedWords = new Array(listOfWords.length);
	for (var i = 0; i < listOfWords.length; i++) {
		usedWords[i] = 0;
	}
	//initialC.visible = false;
	//revealStage.play();
	numberOfAttempts = maxAttempts > listOfWords.length ? listOfWords.length : maxAttempts;
	wordsRemaining = numberOfAttempts;
	exportRoot.questionNum.visible = true;
	enteredAlphabets = new Array(26);
	
	exportRoot.timeDisplay.visible = true;
	exportRoot.timeDisplay.text = String(timeInSecs);
	
	if (sel == "parrot.swf") {
		setTimeout(showStageAndStartgame,1500);
	}else{
		startHanging();
	}
	
}

function showStageAndStartgame(){
	exportRoot.revealStage.gotoAndStop(159)
	startHanging();
}

var timeFlag = 0;

function startHanging() {
	exportRoot.mainText.visible = true;
	if (sel == "parrot.swf") {
		sadFrame = 0;
		cageAtPosition = 0;
	} else {
		exportRoot.failedMonkey.visible = false;
		exportRoot.successMonkey.visible = false;
		exportRoot.sadMonkey.visible = false;
	}
	timeFlag = 0;

	if (wordsRemaining >= 1) {
		if (sel == "mango.swf") exportRoot.mainBackground.mgo.visible = true;
		var selectedAWord = false;
		while (!selectedAWord) {
			var curIndex = Math.floor(Math.random() * listOfWords.length);
			if (usedWords[curIndex] == 0) {
				usedWords[curIndex] = 1;
				selectedAWord = true;
			}
		}
		currentWord = listOfWords[curIndex];
		wordsRemaining--;
		exportRoot.questionNum.progressT.text = (numberOfAttempts - wordsRemaining) + "/" + numberOfAttempts;
		shown = currentWord.replace(/[A-Za-z]/g, "_");
		numWrong = 0;
		timeinSecsRemaining = timeInSecs;
		try {
			exportRoot.mainText.answerText.text = shown.split("").join(" ");
			for (var i = 0; i < alphabetMappingArray.length; i++) {
				exportRoot.mainText.alphabets[alphabetMappingArray[i].toLowerCase()].visible = true;
			}
		}
		catch (e) {

		}

		exportRoot.timeDisplay.text = String(timeinSecsRemaining);

		if (sel == "parrot.swf") {
			exportRoot.caged.gotoAndStop(0);
			exportRoot.caged.cageB.visible = false;
			exportRoot.caged.sadP.visible = false;
			exportRoot.caged.happyP.visible = false;
		}
		else {
			exportRoot.happyMonkey.visible = true;
			exportRoot.happyMonkey.gotoAndStop(0);
		}
		for (i = 0; i < alphabetArray.length; i++) {
			enteredAlphabets[alphabetArray[i].toLowerCase()] = 0;
		}
		addAllEventListeners();
	} else {
		if (sel == "mango.swf") {
			if (state == "s") exportRoot.successMonkey.visible = true;
			else exportRoot.failedMonkey.visible = true;
		}
		gameOverHandler();
	}
}

function addAllEventListeners() {
	window.document.onkeypress = pressKey;
	$('body').onkeypress = pressKey;
	exportRoot.mainText.alphabets.onkeypress = pressKey;
	idOfAlphabets = new Array();
	for (var i = 0; i < alphabetArray.length; i++) {
		try {
			exportRoot.mainText.alphabets.getChildAt(i).addEventListener("click",letterClicked);
			idOfAlphabets.push(exportRoot.mainText.alphabets.getChildAt(i).id);
		} catch (e) {}
	}
}

function removeAllEventListeners() {
	window.document.onkeypress = null;
	for (var i = 0; i < alphabetArray.length; i++) {
		try {
			exportRoot.mainText.alphabets.getChildAt(i).removeAllEventListeners("click");
		} catch (e) {}
		//enteredAlphabets[alphabetArray[i]]=0;
	}
}

function gameOverHandler() {
	if (totalCorrectAnswers == numberOfAttempts) {
		finished = "success";
		lInteractiveWidgetHandle.setSuccess(true);
	} else {
		finished = "failuretimeout";
		lInteractiveWidgetHandle.setSuccess(false);
	}
	removeAllEventListeners();
	exportRoot.mainText.answerText.text = "GAME OVER!!";
	if (timerEnabled) {
		timeFlag = 0;
		clearInterval(countDownTimer);
	}
	//m_VariableHandle["cpCmndResume"] = 1;
	//if(!isPresenter){
		if (variableNameSet){
			 m_VariableHandle[resultVariable] = totalCorrectAnswers;
			 //console.log(m_VariableHandle[resultVariable]+"m_VariableHandle[resultVariable]")
		}
	//}
}

function letterClicked(event) {
	//find the character of the button clicked
	event.target.parent.visible = false;
	hangmanProcessing(alphabetArray[event.target.parent.id]);

}

function pressKey(event) {
	// get letter pressed
	var charPressed = (String.fromCharCode(event.keyCode));
	exportRoot.mainText.alphabets[alphabetMappingArray[alphabetArray.indexOf(charPressed.toLowerCase())]].visible = false;
	hangmanProcessing(charPressed.toLowerCase());
	// loop through nd find matching letters

}

function hangmanProcessing(charPressed) {
	if (timerEnabled && timeFlag == 0) {
		exportRoot.timeDisplay.visible = true;
		if (sel == "parrot.swf") exportRoot.timebg.visible = true;
		timeFlag = 1;
		countDownTimer = setInterval(countDownTimerHandler, 1000);
	}
	//change as necessary from here!!
	var letterIndex = charPressed.charCodeAt(0);
	letterIndex = letterIndex - 97;
	if (currentWord.toLowerCase().indexOf(charPressed) != -1) {
		if (enteredAlphabets[charPressed.toLowerCase()] == 0) {
			if (sel == "parrot.swf") {
				sadFrame = 0;
				exportRoot.caged.sadP.visible = false;
				exportRoot.caged.happyP.visible = true;
				exportRoot.caged.happyP.gotoAndPlay(0);
			} else {
				exportRoot.happyMonkey.visible = true;
				exportRoot.sadMonkey.visible = false;
				exportRoot.happyMonkey.play();
			}
			for (var i = 0; i < currentWord.length; i++) {
				if (currentWord.charAt(i).toLowerCase() == charPressed || currentWord.charAt(i).toLowerCase() == " ") {
					// match found, change shown phrase
					shown = shown.substr(0, i) + currentWord.substr(i, 1) + shown.substr(i + 1);
				}
			}
			playSoundFunc(charPressed, 1);
			exportRoot.mainText.answerText.text = shown.split("").join(" ");
			exportRoot.mainText.alphabets[alphabetMappingArray[letterIndex]].visible = false;
			enteredAlphabets[charPressed.toLowerCase()] = 1;
			//animate correct word

			if (shown == currentWord) {
				//exportRoot.caged.gotoAndStop(0);

				if (timerEnabled) {
					clearInterval(countDownTimer);
				}
				if (sel == "parrot.swf") {
					exportRoot.caged.cageB.visible = false;
					exportRoot.caged.visible = false;
					exportRoot.mainText.answerText.text = currentWord;
					exportRoot.replayButton.visible = true;
					totalCorrectAnswers++;
					exportRoot.caged.happyP.visible = true;
					exportRoot.caged.happyP.gotoAndPlay(0);
				} else {
					exportRoot.happyMonkey.visible = false;
					exportRoot.sadMonkey.visible = false;
					exportRoot.successMonkey.visible = true;
					exportRoot.successMonkey.play();
					setTimeout(hideMango,1000)
					exportRoot.mainText.answerText.text = currentWord;
					exportRoot.replayButton.visible = true;
					totalCorrectAnswers++;
				}

				//playVoice(2,charPressed);

				exportRoot.mainText.statusText.text = "Success!!";
				if (timerEnabled) {
					timeflag = 0;
					clearInterval(countDownTimer);
				}

				exportRoot.replayButton.addEventListener("click",successAttempt);
				removeAllEventListeners();
			}
		} else {
			//do nothing

		}
	} else {
		if (enteredAlphabets[charPressed.toLowerCase()] == 0) {
			numWrong++;
			enteredAlphabets[charPressed.toLowerCase()] = 1;
			exportRoot.mainText.alphabets[alphabetMappingArray[letterIndex]].visible = false;
			if (sel == "parrot.swf") {
				exportRoot.caged.happyP.visible = false;
				exportRoot.caged.sadP.visible = true;
				exportRoot.caged.sadP.gotoAndStop(sadFrame++);
				if (sadFrame == 3) sadFrame = 0;
				if (!exportRoot.caged.cageB.visible) {
					exportRoot.caged.visible = true;
					exportRoot.caged.cageB.visible = true;
				}
				playSoundFunc(charPressed, 0);
				exportRoot.caged.gotoAndStop(cageFrames[cageAtPosition++]);
			} else {
				playSoundFunc(charPressed, 0);

				exportRoot.happyMonkey.visible = false;
				exportRoot.sadMonkey.visible = true;
				exportRoot.sadMonkey.play();
			}

			if (numWrong >= wrongLimit) {
				if (timerEnabled) {
					clearInterval(countDownTimer);
				}

				exportRoot.mainText.statusText.text = "Failed!!"
				exportRoot.mainText.answerText.text = currentWord;
				if (sel == "parrot.swf") {
					exportRoot.caged.happyP.visible = false;
					exportRoot.caged.sadP.visible = true;
					exportRoot.caged.sadP.gotoAndStop(2);
					exportRoot.retryButton.visible = true;
					playSound("soundLose");
				}
				else {
					exportRoot.happyMonkey.visible = false;
					exportRoot.sadMonkey.visible = false;
					exportRoot.failedMonkey.visible = true;
					exportRoot.retryButton.visible = true;
				}

				exportRoot.retryButton.addEventListener("click",failedAttempt);
				if (timerEnabled) {
					timeflag = 0;
					clearInterval(countDownTimer);
				}
				removeAllEventListeners();
			}
		}
	}
}

function hideMango(){
	exportRoot.mainBackground.mgo.visible = false;
}



function countDownTimerHandler(event) {
	timeinSecsRemaining--;
	exportRoot.timeDisplay.text = String(timeinSecsRemaining);
	if (timeinSecsRemaining <= 0) {
		finished = "failuretimeout";
		////console.log("pavan3")
		//lInteractiveWidgetHandle.setSuccess(false);
		exportRoot.mainText.statusText.text = "Time Out!!"
		exportRoot.mainText.answerText.text = currentWord;
		exportRoot.retryButton.visible = true;
		if (sel == "parrot.swf") {
			exportRoot.caged.happyP.visible = false;
			exportRoot.caged.sadP.visible = true;
			exportRoot.caged.sadP.gotoAndStop(2);
			exportRoot.caged.cageB.visible = true;
			exportRoot.caged.visible = true;
			exportRoot.caged.gotoAndStop(39);
		}
		else {
			exportRoot.successMonkey.visible = false;
			exportRoot.failedMonkey.visible = true;
			exportRoot.happyMonkey.visible = false;
			exportRoot.sadMonkey.visible = false;
			//show failed monkey
		}

		exportRoot.retryButton.addEventListener("click",failedAttempt);
		if (timerEnabled) {
			timeFlag = 0;
			clearInterval(countDownTimer);
		}
		removeAllEventListeners();
	}
}
var state;

function successAttempt(event) {
	exportRoot.replayButton.visible = false;
	exportRoot.replayButton.removeAllEventListeners("click");
	exportRoot.mainText.statusText.text = "";
	state = "s";
	startHanging();
}

function failedAttempt(event) {
	exportRoot.retryButton.visible = false;
	exportRoot.retryButton.removeAllEventListeners("click");
	exportRoot.mainText.statusText.text = "";
	state = "f";
	startHanging();
}

function playSoundFunc(answer, key) {
	var curSound;
	var curAudio;
	if (key == 0) {
		curSound = Math.floor(Math.random() * 9);
		curAudio = "putdown" + curSound;
	}
	if (key == 1) {
		curSound = Math.floor(Math.random() * 9);
		curAudio = "praise" + curSound;
	}
	playSound(curAudio);

}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}

function resizeInteraction(thewidth, theheight) {
	var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    } else{
        scale = theheight / (movieHeight);
    }
	var holdScale = scale
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
    $('#hangmanContent').css('-webkit-transform', scale);
    $('#hangmanContent').css('-moz-transform', scale);
    $('#hangmanContent').css('-o-transform', scale);
    $('#hangmanContent').css('-ms-transform', scale);
    $('#hangmanContent').css('-webkit-transform-origin', '0 0');
	$('#hangmanContent').css('-moz-transform-origin', '0 0');
    $('#hangmanContent').css('-o-transform-origin', '0 0');
    $('#hangmanContent').css('-ms-transform-origin', '0 0');
	$('#hangmanContent').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#chooseCategory').css({
		position: "absolute",
		width:(350*scale)+"px",
		height:(40*scale)+"px",
		'font-size': (25*scale),
		top: (210*scale)+"px",
		left: (220*scale)+"px",
		zIndex: 5000
	});
	
	/*$('#chooseCategory').css('-webkit-transform', scale);
    $('#chooseCategory').css('-moz-transform', scale);
    $('#chooseCategory').css('-o-transform', scale);
    $('#chooseCategory').css('-ms-transform', scale);
    $('#chooseCategory').css('-webkit-transform-origin', '0 0');
	$('#chooseCategory').css('-moz-transform-origin', '0 0');
    $('#chooseCategory').css('-o-transform-origin', '0 0');
    $('#chooseCategory').css('-ms-transform-origin', '0 0');
	$('#chooseCategory').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');*/
	
	/*if (myWidgetiFrame) {
		myWidgetiFrame.parentElement.parentElement.style.top = parseInt(myWidgetiFrame.parentElement.parentElement.style.top.split("px")) - 5 + "px";
		myWidgetiFrame.parentElement.parentElement.style.left = parseInt(myWidgetiFrame.parentElement.parentElement.style.left.split("px")) - 5 + "px";
		//myWidgetiFrame.style.height = movieWidth + "px";
		//myWidgetiFrame.style.width = movieWidth + "px";
	}*/
}