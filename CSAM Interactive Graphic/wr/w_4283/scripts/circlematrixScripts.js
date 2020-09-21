var btnClicked = "-1";
var finalScale;
var finalScaleW;
var finalScaleH;
 
var isPresenter = false;
function getWidgetIFrame(){
	if(isPresenter){
		return window.parent.document.getElementById(window.name);
	}else{
		var cpWidget = window.parent.document.getElementsByClassName("cp-widget");
		for(i=0;i<cpWidget.length;i++){
			for(j=0;j<cpWidget[i].children.length;j++){
				if(cpWidget[i].children[j].children[0] != undefined){
					if(cpWidget[i].children[j].children[0].contentDocument.getElementById("circlematrixwdgt") != null){
						myFrameName = window.name;
						return window.parent.document.getElementById(window.name);
					}
				}
			}
		}
	}
}

function resizeInteractionPresenter(thewidth,theheight) {
	var scale = 0;
	thewidth = String(thewidth).replace("px","");
	theheight = String(theheight).replace("px","");
	
	/**********************/
	//Modification made for Presenter same logic holds good for Captivate
	//iframe width and Height
	var scaleW = thewidth / (700);
	var scaleH = theheight/ (498);
	
	myWidgetiFrame.style.width = parseInt(parseInt(750*scaleW))+"px"
	myWidgetiFrame.style.height = parseInt(parseInt(550*scaleH))+"px"
	
	var iframewidth = String(myWidgetiFrame.style.width).replace("px","");
	var iframeheight = String(myWidgetiFrame.style.height).replace("px","");
	
	//scaleW = iframewidth / (750);
	//scaleH = iframeheight/ (550);
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	
	finalScale = scale;
	
	finalScaleW = scaleW;
	finalScaleH = scaleH;
	/*********************/
	
	//Resize interaction
	
	//Resize fonts
	//scalefont = true;
		
	var fontscaleW = thewidth / (800);
	var fontscaleH = theheight/ (600);
	if(fontscaleW<fontscaleH){
		fontscale = fontscaleW
	}else{
		fontscale = fontscaleH
	}

	contentStyles.size = contentStylessize*fontscale;
	buttonStyles.size = buttonStylessize*fontscale;
	headerStyles.size = headerStylessize*fontscale;
	instStyles.size = instStylessize*fontscale;
	
	setupStyle("#intTitle", headerStyles)
	setupStyle("#intInstructions", instStyles)
	setupStyle(".tab_content p", contentStyles)
	setupStyle(".title", contentStyles);
	
	
	
	var headerActiveSize;
	if (generalStyles.headerActive == 2) {
		headerActiveSize = 60
	}else{
		headerActiveSize = $('#headerColor').height();
	}
	
	var marginsW = Math.round(30 * scaleW);
	var marginsH = Math.round(25 * scaleH);
	
	$('#reveal').css('width',(680*scaleW));
	$('#reveal').css('height',(470*scaleH));
	$('#reveal').css('margin-left', marginsW+"px");
	$('#reveal').css('margin-top', marginsH+"px");
	
	var revealHeight = parseInt(String($('#reveal').css('height').replace("px","")));
	var revealWidth = parseInt(String($('#reveal').css('width').replace("px","")));
	
	var contentBg = document.getElementById("content_bg");
	//contentBg.style.width = ((revealHeight-headerActiveSize)-40)+"px"
	contentBg.style.height = ((revealHeight-headerActiveSize)-40)+"px"
	//$("#content_bg").hide();
	
	var contentBgHeight = parseInt(String($('#content_bg').css('height').replace("px","")));
	var contentBgWidth = parseInt(String($('#content_bg').css('width').replace("px","")));
	//display matri
	
	var fscaleW = thewidth / (750);
	var fscaleH = theheight/ (650);
	
	var tfscale = fscaleW
		
	if(fscaleW<fscaleH){
		tfscale = fscaleW
	}else{
		tfscale = fscaleH
	}
		
	layer.setScale(scale);
	stage.add(layer);
	//Adjust width and height positions
	$("#pyramidHolder").css("width",450*tfscale)
	$("#pyramidHolder").css("height",450*tfscale)
	
	var pyramidHolderW = parseInt(String($('#pyramidHolder').css('width').replace("px","")));
	var pyramidHolderH = parseInt(String($('#pyramidHolder').css('height').replace("px","")));
	
	//Adjust top and left positions
	var pyramidTop = ((contentBgHeight/2)-(pyramidHolderH/2)-(headerActiveSize))+(80+(70*scaleH));
	var pyramidLeft = ((30*scaleW));
	$("#pyramidHolder").css("margin-top",pyramidTop);
	$("#pyramidHolder").css("margin-left",pyramidLeft);
	
	if (generalStyles.headerActive == 2) {
		//Resize and display content
		$(".scroll-pane").css('height',(revealHeight)-(60*scaleH));
		$(".scroll-pane").css('width',((revealWidth-pyramidHolderW))-(50*scaleW));
		$(".scroll-pane").css('top',(40*scaleH));
		$(".scroll-pane").css('left',(pyramidHolderW+(15+(35*scaleW))))
	}else{
		//Resize and display content
		$(".scroll-pane").css('height',(revealHeight-headerActiveSize)-(80*scaleH));
		$(".scroll-pane").css('width',((revealWidth-pyramidHolderW))-(40*scaleW));
		$(".scroll-pane").css('top',(headerActiveSize+(60*scaleH)));
		$(".scroll-pane").css('left',(pyramidHolderW+(20+(25*scaleW))))
	}
	
	$($(myWidgetiFrame).parent().parent()).css("top",(myWidgetiFrameTop+(-19*scaleH)))
	$($(myWidgetiFrame).parent().parent()).css("left",(myWidgetiFrameLeft+(-25*scaleW)))
	
	$(myWidgetiFrame).show();
}

function resizeInteraction(thewidth,theheight) {
	if(isPresenter)
		return resizeInteractionPresenter(thewidth, theheight);
	var scale = 0;
	thewidth = String(thewidth).replace("px","");
	theheight = String(theheight).replace("px","");

	if(thewidth<320){
		thewidth = 320
	}
	if(theheight<360){
		theheight = 360
	}
	
	/**********************/
	//Modification made for Presenter same logic holds good for Captivate
	//iframe width and Height
	var scaleW = thewidth / (700);
	var scaleH = theheight/ (498);
	
	myWidgetiFrame.style.width = parseInt(parseInt(750*scaleW))+"px"
	myWidgetiFrame.style.height = parseInt(parseInt(550*scaleH))+"px"
	
	var iframewidth = String(myWidgetiFrame.style.width).replace("px","");
	var iframeheight = String(myWidgetiFrame.style.height).replace("px","");
	
	//scaleW = iframewidth / (750);
	//scaleH = iframeheight/ (550);
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	
	finalScale = scale;
	
	finalScaleW = scaleW;
	finalScaleH = scaleH;
	/*********************/
	
	//Resize interaction
	
	//Resize fonts
	//scalefont = true;
	if(scalefont=="true"){
		//Content font size
		if(contentStylessize>=12){
			if(thewidth>=1024){
				contentStyles.size = contentStylessize;
			}else if(thewidth>= 768){
				var tempNum = Math.round(contentStylessize-2);
				if(tempNum>=12){
					contentStyles.size = tempNum
				}else{
					contentStyles.size = 12
				}
			}else if(thewidth>= 360){
				contentStyles.size = 12
			}else{
				contentStyles.size = 10
			}
			
			var tempcontentStylessize = contentStyles.size*scaleW;
			if(tempcontentStylessize>=12 && tempcontentStylessize<=contentStylessize){
				contentStyles.size = tempcontentStylessize;
			}
			
		}
		
		
		//Button font size
		if(buttonStylessize>=12){
			if(thewidth>=1024){
				buttonStyles.size = buttonStylessize;
			}else if(thewidth>= 768){
				var tempNum = Math.round(buttonStylessize-2);
				if(tempNum>=12){
					buttonStyles.size = tempNum
				}else{
					buttonStyles.size = 12
				}
			}else if(thewidth>= 360){
				buttonStyles.size = 12
			}else{
				buttonStyles.size = 10
			}
			
			var tempbuttonStylessize = buttonStyles.size*scaleW;
			if(tempbuttonStylessize>=12 && tempbuttonStylessize<=buttonStylessize){
				buttonStyles.size = tempbuttonStylessize;
			}
			
		}
		
		
		//Header font size
		if(headerStylessize>=16){
			if(thewidth>=1024){
				headerStyles.size = headerStylessize;
			}else if(thewidth>= 768){
				var tempNum = Math.round(headerStylessize-2);
				if(tempNum>=16){
					headerStyles.size = tempNum
				}else{
					headerStyles.size = 16
				}
			}else if(thewidth>= 360){
				headerStyles.size = 16
			}else{
				headerStyles.size = 14
			}
			
			var tempheaderStylessize = headerStyles.size*scaleW;
			if(tempheaderStylessize>=16 && tempheaderStylessize<=headerStylessize){
				headerStyles.size = tempheaderStylessize;
			}
			
		}
		
		//Instructions font size
		if(instStylessize>=12){
			if(thewidth>=1024){
				instStyles.size = instStylessize;

			}else if(thewidth>= 768){
				var tempNum = Math.round(instStylessize-2);
				if(tempNum>=12){
					instStyles.size = tempNum
				}else{
					instStyles.size = 12
				}
			}else if(thewidth>= 360){
				instStyles.size = 12
			}else{
				instStyles.size = 10
			}
			
			var tempinstStylessize = instStyles.size*scaleW;
			if(tempinstStylessize>=12 && tempinstStylessize<=instStylessize){
				instStyles.size = tempinstStylessize;
			}

		}

		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".tab_content p", contentStyles)
		setupStyle(".title", contentStyles);
	}else{
		
		contentStyles.size = contentStylessize;
		buttonStyles.size = buttonStylessize;
		headerStyles.size = headerStylessize;
		instStyles.size = instStylessize;
		
		if(theheight <= 360 || thewidth <= 360){
			contentStyles.size = 10;
			buttonStyles.size = 10;
			headerStyles.size = 14;
			instStyles.size = 10;
		}
		
		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".tab_content p", contentStyles)
		setupStyle(".title", contentStyles);
	}
	
	var marginsW
	
	var headerActiveSize;
	if (generalStyles.headerActive == 2) {
		headerActiveSize = 60
	}else{
		headerActiveSize = $('#headerColor').height();
	}
	
	if(iframewidth>=1024){
		marginsW = Math.round((27+scaleW) * scaleW);
	}else if(iframewidth>= 768){
		marginsW = Math.round((25+scaleW) * scaleW);
	}else if(iframewidth>= 360){
		marginsW = Math.round((19+scaleW) * scaleW);
	}else{
		marginsW = Math.round((12+scaleW) * scaleW);
	}
	
	var marginsH = Math.round(30 * scaleH);
	
	$('#reveal').css('width',(680*scaleW));
	$('#reveal').css('height',(470*scaleH));
	$('#reveal').css('margin-left', marginsW+"px");
	$('#reveal').css('margin-top', marginsH+"px");
	
	var revealHeight = parseInt(String($('#reveal').css('height').replace("px","")));
	var revealWidth = parseInt(String($('#reveal').css('width').replace("px","")));
	
	var contentBg = document.getElementById("content_bg");
	//contentBg.style.width = ((revealHeight-headerActiveSize)-40)+"px"
	contentBg.style.height = ((revealHeight-headerActiveSize)-40)+"px"
	//$("#content_bg").hide();
	
	var contentBgHeight = parseInt(String($('#content_bg').css('height').replace("px","")));
	var contentBgWidth = parseInt(String($('#content_bg').css('width').replace("px","")));
	//display matri
	
	layer.setScale(scale);
	stage.add(layer);
	//Adjust width and height positions
	$("#pyramidHolder").css("width",350*scale)
	$("#pyramidHolder").css("height",350*scale)
	
	var pyramidHolderW = parseInt(String($('#pyramidHolder').css('width').replace("px","")));
	var pyramidHolderH = parseInt(String($('#pyramidHolder').css('height').replace("px","")));
	
	//Adjust top and left positions
	var pyramidTop = ((contentBgHeight/2)-(pyramidHolderH/2)-(headerActiveSize))+(80+(70*scaleH));
	var pyramidLeft = ((30*scaleW));
	$("#pyramidHolder").css("margin-top",pyramidTop);
	$("#pyramidHolder").css("margin-left",pyramidLeft);
	
	if (generalStyles.headerActive == 2) {
		//Resize and display content
		$(".scroll-pane").css('height',(revealHeight)-(60*scaleH));
		$(".scroll-pane").css('width',((revealWidth-pyramidHolderW))-(50*scaleW));
		$(".scroll-pane").css('top',(40*scaleH));
		$(".scroll-pane").css('left',(pyramidHolderW+(15+(35*scaleW))))
	}else{
		//Resize and display content
		$(".scroll-pane").css('height',(revealHeight-headerActiveSize)-(80*scaleH));
		$(".scroll-pane").css('width',((revealWidth-pyramidHolderW))-(40*scaleW));
		$(".scroll-pane").css('top',(headerActiveSize+(60*scaleH)));
		$(".scroll-pane").css('left',(pyramidHolderW+(20+(25*scaleW))))
	}
	
	if(parseInt(thewidth)<parseInt(theheight)){
		
		var fscaleW = thewidth / (550);
		var fscaleH = theheight/ (398);
			
		if (generalStyles.headerActive == 2) {
			fscaleW = thewidth / (510);
			fscaleH = theheight/ (398);
			
			var tfscale = fscaleW
		
			if(fscaleW<fscaleH){
				tfscale = fscaleW
			}else{
				tfscale = fscaleH
			}
			
			var fscale = "scale(" + tfscale + ")";
			
			//if(tfscale>0.8){
				layer.setScale(tfscale);
				stage.add(layer);
			//}
			//Adjust width and height positions
			$("#pyramidHolder").css("width",350*scale)
			$("#pyramidHolder").css("height",350*scale)
			
			var pyramidHolderW = parseInt(String($('#pyramidHolder').css('width').replace("px","")));
			var pyramidHolderH = parseInt(String($('#pyramidHolder').css('height').replace("px","")));
			
			//Adjust top and left positions
			var pyramidTop = 25+(15*scaleH);
			var pyramidLeft = ((contentBgWidth/2)-(pyramidHolderW/2)-(20*scaleW));
			var tempHeight = 100
			var tempWidth = 55
			if(thewidth<=360){
				$("#pyramidHolder").css("margin-top",pyramidTop-(10*fscaleH));
				tempHeight = 55
				tempWidth = 70
			}else{
				$("#pyramidHolder").css("margin-top",pyramidTop);
			}
			$("#pyramidHolder").css("margin-left",pyramidLeft);
			
			//Resize and display content
			$(".scroll-pane").css('width',revealWidth-(tempWidth*scaleW));
			$(".scroll-pane").css('height',(revealHeight-pyramidHolderH)-(80*fscaleH));
			$(".scroll-pane").css('left',(12+(25*scaleW)));
			$(".scroll-pane").css('top',(pyramidHolderH+(tempHeight+(10*scaleH))));
		
		}else{
			
			var tfscale = fscaleW
		
			if(fscaleW<fscaleH){
				tfscale = fscaleW
			}else{
				tfscale = fscaleH
			}
			
			var fscale = "scale(" + tfscale + ")";
			
			//if(tfscale>0.8){
				layer.setScale(tfscale);
				stage.add(layer);
			//}
			//Adjust width and height positions
			$("#pyramidHolder").css("width",350*scale)
			$("#pyramidHolder").css("height",350*scale)
			
			var pyramidHolderW = parseInt(String($('#pyramidHolder').css('width').replace("px","")));
			var pyramidHolderH = parseInt(String($('#pyramidHolder').css('height').replace("px","")));
			
			//Adjust top and left positions
			var pyramidTop = headerActiveSize+(40*fscaleH);
			var pyramidLeft = ((contentBgWidth/2)-(pyramidHolderW/2)-(10*scaleW));
			var tempHeight = 100
			var tempWidth = 55
			if(thewidth<=360){
				$("#pyramidHolder").css("margin-top",pyramidTop-(10*fscaleH));
				tempHeight = 60
				tempWidth =  70
			}else{
				$("#pyramidHolder").css("margin-top",pyramidTop);
			}
			$("#pyramidHolder").css("margin-left",pyramidLeft);
			
			//Resize and display content
			$(".scroll-pane").css('width',revealWidth-(tempWidth*scaleW));
			$(".scroll-pane").css('height',(revealHeight-pyramidHolderH)-(120*fscaleH));
			$(".scroll-pane").css('left',(12+(25*scaleW)));
			$(".scroll-pane").css('top',(pyramidHolderH+(tempHeight+(50*scaleH))));
		
		}
	}
	if(isResponsiveProject){
		$($(myWidgetiFrame).parent().parent()).css("top",(myWidgetiFrameTop+(-19*scaleH)))
		$($(myWidgetiFrame).parent().parent()).css("left",(myWidgetiFrameLeft+(-25*scaleW)))
	}else{
		if(firstLoad){
			$($(myWidgetiFrame).parent().parent()).css("top",(myWidgetiFrameTop+(-19*scaleH)))
			$($(myWidgetiFrame).parent().parent()).css("left",(myWidgetiFrameLeft+(-25*scaleW)))
		}
	}
}

//sound values
/*var theSnd = null;

function pauseSound() {
	if(theSnd != null) // && theSnd.src != wavePath)
	{ theSnd.pause();}
}

function play_sound(url){
	theSnd = new Audio(url);
	theSnd.load();
	theSnd.play();	
}*/

//Modifying the sound function - Audio load and play is now handled by captivate: IF it does not handle the audio revert to old code.
//This fix was mainly  implemented for IPAD.
var isDevice = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	isDevice = true
}
//var isDevice = navigator.userAgent.match(/iPad/i) != null;
var theSnd = null;
var theSndURL = null;

function pauseSound() {
	if(isDevice){
		if(!this.handle)
		return;
		
		if(!this.handle.stopWidgetAudio(theSndURL)){
			if(theSnd != null){ 
				theSnd.pause();
			}
		}else{
			this.handle.stopWidgetAudio(theSndURL)
		}
	} else {
		if(theSnd != null) // && theSnd.src != wavePath)
		{ theSnd.pause();}
	}
}

function play_sound(url){
	if(isDevice){
		if(!this.handle)
		return;
		
		theSndURL = url;
		if(!this.handle.playWidgetAudio(url)){	
			theSnd = new Audio(url);
			theSnd.load();
			theSnd.play();
		}else{
			this.handle.playWidgetAudio(url)
		}
	}else{
		theSnd = new Audio(url);
		theSnd.load();
		theSnd.play();	
	}
}
////////////////////////////////////////////////////////


function setupCustomStyles() {
	
	_pyramidColor = formatColor(generalStyles.btnColorUp);
	_pyramidOverColor = formatColor(generalStyles.btnColorOver);
	_pyramidDownColor = formatColor(generalStyles.btnColorDown);
	generalStyles.contentBodyColor = formatColor(generalStyles.contentBodyColor); //"#" + generalStyles.contentBodyColor.substring(2);
	generalStyles.bodyColor = formatColor(generalStyles.bodyColor); //"#" + generalStyles.bodyColor.substring(2);
	generalStyles.headerColor = formatColor(generalStyles.headerColor); //"#" + generalStyles.bodyColor.substring(2);
	
	if (currentTheme != 3 && currentTheme != 11 && currentTheme != 16) {
		$('#headerColor').css('background-color', generalStyles.headerColor)//generalStyles.headerColor);
	} else {
		$('#headerColor').css('background-color', generalStyles.bodyColor)//generalStyles.headerColor);
		
	}
	//generalStyles.arrowColor = formatColor(generalStyles.arrowColor);
	//	$('#headerColor').css('background-image', 'none');
	$('#textBox').css('background-color', generalStyles.contentBodyColor);
	$('#content_bg').css('background-color', generalStyles.bodyColor);
	$('#reveal').css('background-color', generalStyles.bodyColor);


	if (generalStyles.headerActive == 2) {
		$('#headerColor').css('display', 'none');
	}
}

