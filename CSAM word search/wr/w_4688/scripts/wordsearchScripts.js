var btnClicked = "-1";
var finalScaleW;
var finalScaleH;

var scale = 0;
var setTop = false;
var showAnsWidthHolder;
var finalScaler
var isPresenter = false;
var fontscale;
var reviewwingAnswers = false;
function getWidgetIFrame(){
	if(isPresenter){
		return window.parent.document.getElementById(window.name);
	}else{
		var cpWidget = window.parent.document.getElementsByClassName("cp-widget");
		for(i=0;i<cpWidget.length;i++){
			for(j=0;j<cpWidget[i].children.length;j++){
				if(cpWidget[i].children[j].children[0] != undefined){
					if(cpWidget[i].children[j].children[0].contentDocument.getElementById("wordsearchwdgt") != null){
						myFrameName = window.name;
						return window.parent.document.getElementById(window.name);
					}
				}
			}
		}
	}
}



function resizeInteractionPresenter(thewidth,theheight) {
	scale = 0;
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
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	
	
	//Resize fonts
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
	setupStyle(".clues", contentStyles)
	
	$(".answerBoxHeader").css('font-size', contentStyles.size+"px")
	
	finalScaler = scale;
	finalScaleW = scaleW;
	finalScaleH = scaleH;
	
	myWidgetiFrame.style.width = parseInt(parseInt(750*scaleW))+"px"
	myWidgetiFrame.style.height = parseInt(parseInt(550*scaleH))+"px"
	
	var iframewidth = String(myWidgetiFrame.style.width).replace("px","");
	var iframeheight = String(myWidgetiFrame.style.height).replace("px","");
	
	var ifrscaleW = thewidth / (700);
	var ifrscaleH = theheight/ (498);
	
	$($(myWidgetiFrame).parent().parent()).css("top",(-19*ifrscaleH))
	$($(myWidgetiFrame).parent().parent()).css("left",(-25*ifrscaleW))
	
	/*********************/
	
	var marginsW
	
	var headerActiveSize;
	var instPadding=30
	if (generalStyles.headerActive == 2) {
		headerActiveSize = 30
		instPadding = 75;
	}else{
		headerActiveSize = $('#headerColor').height();
		instPadding =  30;
	}
	var neutVal = 0;
	if(iframewidth>=1024){
		marginsW = Math.round((27+scaleW) * scaleW);
		neutVal = -2;
	}else if(iframewidth>= 768){
		marginsW = Math.round((25+scaleW) * scaleW);
		neutVal = 0
	}else{
		marginsW = Math.round((19+scaleW) * scaleW);
		neutVal = 4
	}
	marginsW = Math.round(35 * scaleW);
	var marginsH = Math.round(30 * scaleH);
	
	$('#reveal').css('width',(680*scaleW));
	$('#reveal').css('height',(460*scaleH));
	$('#reveal').css('margin-left', marginsW+"px");
	$('#reveal').css('margin-top', marginsH+"px");
	
	var revealHeight = parseInt(String($('#reveal').css('height').replace("px","")));
	var revealWidth = parseInt(String($('#reveal').css('width').replace("px","")));
	
	var contentBg = document.getElementById("content_bg");
	contentBg.style.height = ((revealHeight-headerActiveSize)-60)+"px"
	
	var contentBgHeight = parseInt(String($('#content_bg').css('height').replace("px","")));
	var contentBgWidth = parseInt(String($('#content_bg').css('width').replace("px","")));
	
	//display matrix
	setTop = false;

	$(".wordGridHolder").css('width',(canWidth*scale));
	$(".wordGridHolder").css('height',(308*scale));
	
	$("#wordgridcanvas").css('width',((canWidth-10)*scale));
	$("#wordgridcanvas").css('height',(298*scale));
	
	$("#wordgridcanvas").css('margin-left',((5*scale)+"px"));
	$("#wordgridcanvas").css('margin-top',((5*scale)+"px"));
	
	var wordGridHolderHeight = parseInt(String($('.wordGridHolder').css('height').replace("px","")));
	if (generalStyles.headerActive == 2) {
		hActiveSize = 18
	}else{
		hActiveSize = $('#headerColor').height();
	}
	var wordGridHolderTop = hActiveSize+(contentBgHeight/2)-(wordGridHolderHeight/2);
	
	var wordGridHolderWidth = parseInt(String($('.wordGridHolder').css('width').replace("px","")));
	var wordGridHolderLeft = (revealWidth-wordGridHolderWidth)+(15*scaleW)
	
	showAnsWidthHolder = wordGridHolderLeft;
	
	$(".wordGridHolder").css('left',(wordGridHolderLeft)-(40*finalScaleW));
	$(".wordGridHolder").css('top',(wordGridHolderTop-50)*scaleH);
	if(isDevice){
		$(".wordGridHolder").css('top',(wordGridHolderTop+20)*scaleH);
	}
	
	
	$(".answerBox").css('width',wordGridHolderLeft-(80*scaleW));
	$(".answerBox").css('height',(312*scaleH));
	
	$(".answerBox").css('left',(70-(10*scaleW)));
	$(".answerBox").css('top',(headerActiveSize*scaleH)+(70-(10*finalScaleW)));
	
	$(".answerBoxHeader").css('width',wordGridHolderLeft-(88*scaleW));
	$(".answerBoxHeader").css('height',(27*scaleH));
	
	$(".answerBoxHeader").css('padding-left',((10*scale)+"px"));
	$(".answerBoxHeader").css('padding-top',((10*scale)+"px"));
	
	$(".scroll-pane").css('width',wordGridHolderLeft-(80*scaleW));
	$(".scroll-pane").css('height',(233*scaleH));
	
	$("#answerBoxFooter").css('width',wordGridHolderLeft-(90*scaleW));
	$("#answerBoxFooter").css('height',(35*scaleH));
	
	$("#answerBoxFooter").css('padding-left',((10*scaleW)+"px"));
	$("#answerBoxFooter").css('padding-top',((10*scaleH)+"px"));
	
	//$("#endGameScreen").show();
	$("#endGameScreen").css('width',400*scaleW)
	$("#endGameScreen").css('height',300*scaleH)
	
	$("#endGameScreen").css('left',120*scaleW)
	$("#endGameScreen").css('top',80*scaleH)
	
	updateFooter(ID_ShowAnswers);
	//$("#endGameScreen").show();
	
	//clue images
	for(i=0;i<textArray.length;i++){
		$("#img"+i).children(0).css('width',(parseInt(contentStyles.size*2))+"px")
		$("#txt"+i).css('left',(parseInt(contentStyles.size)+(parseInt(contentStyles.size)/2))+"px")
		$("#txt"+i).css('width',(300*scaleW)+"px")
	}
	
	
	$("#instructions").css('padding-top',instPadding+"px");
	
	$(myWidgetiFrame).show();
	if(isDevice && deviceType!="iPad"){
		addPinchFunction();
	}
}

function resizeInteraction(thewidth,theheight) {
	if(isPresenter)
		return resizeInteractionPresenter(thewidth, theheight);
	scale = 0;
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
	
	if(scaleW<scaleH){
		scale = scaleW
	}else{
		scale = scaleH
	}
	
	//var scalefont = false;
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
			}else if(thewidth>= 320){
				contentStyles.size = 12
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
			}else if(thewidth>= 320){
				buttonStyles.size = 12
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
			}else if(thewidth>= 320){
				headerStyles.size = 16
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
			}else if(thewidth>= 320){
				instStyles.size = 12
			}
			
			var tempinstStylessize = instStyles.size*scaleW;
			if(tempinstStylessize>=12 && tempinstStylessize<=instStylessize){
				instStyles.size = tempinstStylessize;
			}
		}

		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".clues", contentStyles)
	}else{
		
		contentStyles.size = contentStylessize;
		buttonStyles.size = buttonStylessize;
		headerStyles.size = headerStylessize;
		instStyles.size = instStylessize;
		
		if(theheight == 350 || thewidth == 320){
			contentStyles.size = 12;
			buttonStyles.size = 12;
			headerStyles.size = 16;
			instStyles.size = 12;
		}
		
		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".clues", contentStyles)
	}
	
	finalScaler = scale;
	finalScaleW = scaleW;
	finalScaleH = scaleH;
	
	myWidgetiFrame.style.width = parseInt(parseInt(750*scaleW))+"px"
	myWidgetiFrame.style.height = parseInt(parseInt(550*scaleH))+"px"
	
	var iframewidth = String(myWidgetiFrame.style.width).replace("px","");
	var iframeheight = String(myWidgetiFrame.style.height).replace("px","");
	
	var ifrscaleW = thewidth / (700);
	var ifrscaleH = theheight/ (498);
	
	
	/*********************/
	
	var marginsW
	
	var headerActiveSize;
	var instPadding=30
	if (generalStyles.headerActive == 2) {
		headerActiveSize = 30
		instPadding = 75;
	}else{
		headerActiveSize = $('#headerColor').height();
		instPadding =  30;
	}
	var neutVal = 0;
	if(iframewidth>=1024){
		marginsW = Math.round((27+scaleW) * scaleW);
		neutVal = -2;
	}else if(iframewidth>= 768){
		marginsW = Math.round((25+scaleW) * scaleW);
		neutVal = 0
	}else{
		marginsW = Math.round((19+scaleW) * scaleW);
		neutVal = 4
	}
	marginsW = Math.round(35 * scaleW);
	var marginsH = Math.round(30 * scaleH);
	
	$('#reveal').css('width',(680*scaleW));
	$('#reveal').css('height',(460*scaleH));
	$('#reveal').css('margin-left', marginsW+"px");
	$('#reveal').css('margin-top', marginsH+"px");
	
	var revealHeight = parseInt(String($('#reveal').css('height').replace("px","")));
	var revealWidth = parseInt(String($('#reveal').css('width').replace("px","")));
	
	var contentBg = document.getElementById("content_bg");
	contentBg.style.height = ((revealHeight-headerActiveSize)-60)+"px"
	
	var contentBgHeight = parseInt(String($('#content_bg').css('height').replace("px","")));
	var contentBgWidth = parseInt(String($('#content_bg').css('width').replace("px","")));
	
	//display matrix
	if(theheight>(parseInt(thewidth)+50)){
		setTop = true;
		
		var tscaleW = thewidth / (550);
		var tscaleH = theheight/ (200);
		
		if(tscaleW<tscaleH){
			scale = tscaleW
		}else{
			scale = tscaleH
		}
		
		var diffval =0;
		var diffvalHei =0;
		var diffvalHei2 =0;
		var diffvalHei3 =60;
		var diffvalWidt1 =100;
		if(thewidth<=360){
			diffval =20
			diffvalHei = 37
			diffvalHei2 = 65
			diffvalHei3 = 80
			diffvalWidt1 = 80;
		}
		var canSize = 0;
		if(canWidth==360){
			canSize = 20;
		}
	
		$(".wordGridHolder").css('width',(canWidth*scale));
		$(".wordGridHolder").css('height',(308*scale));
		
		$("#wordgridcanvas").css('width',((canWidth-10)*scale));
		$("#wordgridcanvas").css('height',(298*scale));
		
		$("#wordgridcanvas").css('margin-left',((5*scale)+"px"));
		$("#wordgridcanvas").css('margin-top',((5*scale)+"px"));
		
		var wordGridHolderHeight = parseInt(String($('.wordGridHolder').css('height').replace("px","")));
		var wordGridHolderTop = (contentBgHeight/2)-(wordGridHolderHeight/2);
		
		var wordGridHolderWidth = parseInt(String($('.wordGridHolder').css('width').replace("px","")));
		var wordGridHolderLeft = (revealWidth/2)+((wordGridHolderWidth/2)-100)
		
		showAnsWidthHolder = wordGridHolderLeft;
		
		$(".wordGridHolder").css('left',canSize+(75*scaleW));
		$(".wordGridHolder").css('top',(headerActiveSize+50)-diffval);
		
		$(".answerBox").css('width',(603*scaleW));
		$(".answerBox").css('height',((revealHeight-wordGridHolderHeight)-130)+diffvalHei);
		
		$(".answerBox").css('left',26+(45*scaleW));
		$(".answerBox").css('top',((headerActiveSize+wordGridHolderHeight)+(diffvalHei3*scaleH))-diffval);
		
		$(".answerBoxHeader").css('width',(594*scaleW));
		$(".answerBoxHeader").css('height',(7*tscaleH));
		
		$(".answerBoxHeader").css('padding-left',((10*scaleW)+"px"));
		$(".answerBoxHeader").css('padding-top',((10*scaleH)+"px"));
		
		$(".scroll-pane").css('width',(603*scaleW));
		$(".scroll-pane").css('height',((revealHeight-wordGridHolderHeight)-205)+(diffvalHei2));
		
		$("#answerBoxFooter").css('width',(594*scaleW));
		$("#answerBoxFooter").css('height',(8*tscaleH));
		
		$("#answerBoxFooter").css('padding-left',((10*scaleW)+"px"));
		$("#answerBoxFooter").css('padding-top',((5*scaleH)+"px"));
		
		//$("#endGameScreen").show();
		$("#endGameScreen").css('width',400*scaleW)
		$("#endGameScreen").css('height',300*scaleH)
		
		$("#endGameScreen").css('left',diffvalWidt1*scaleW)
		$("#endGameScreen").css('top',80*scaleH)
		
		updateFooter(ID_ShowAnswers);
		//$("#showAnswers").show();
		
	}else{
		setTop = false;
	
		$(".wordGridHolder").css('width',(canWidth*scale));
		$(".wordGridHolder").css('height',(308*scale));
		
		$("#wordgridcanvas").css('width',((canWidth-10)*scale));
		$("#wordgridcanvas").css('height',(298*scale));
		
		$("#wordgridcanvas").css('margin-left',((5*scale)+"px"));
		$("#wordgridcanvas").css('margin-top',((5*scale)+"px"));
		
		var wordGridHolderHeight = parseInt(String($('.wordGridHolder').css('height').replace("px","")));
		if (generalStyles.headerActive == 2) {
			hActiveSize = 18
		}else{
			hActiveSize = $('#headerColor').height();
		}
		var wordGridHolderTop = hActiveSize+(contentBgHeight/2)-(wordGridHolderHeight/2);
		
		var wordGridHolderWidth = parseInt(String($('.wordGridHolder').css('width').replace("px","")));
		var wordGridHolderLeft = (revealWidth-wordGridHolderWidth)+(15*scaleW)
		
		showAnsWidthHolder = wordGridHolderLeft;
		
		$(".wordGridHolder").css('left',(wordGridHolderLeft)-(40*finalScaleW));
		$(".wordGridHolder").css('top',(wordGridHolderTop*scaleH));
		
		$(".answerBox").css('width',wordGridHolderLeft-(80*scaleW));
		$(".answerBox").css('height',(312*scaleH));
		
		$(".answerBox").css('left',(70-(10*scaleW)));
		$(".answerBox").css('top',(headerActiveSize*scaleH)+(70-(10*finalScaleW)));
		
		$(".answerBoxHeader").css('width',wordGridHolderLeft-(88*scaleW));
		$(".answerBoxHeader").css('height',(27*scaleH));
		
		$(".answerBoxHeader").css('padding-left',((10*scale)+"px"));
		$(".answerBoxHeader").css('padding-top',((10*scale)+"px"));
		
		$(".scroll-pane").css('width',wordGridHolderLeft-(80*scaleW));
		$(".scroll-pane").css('height',(233*scaleH));
		
		$("#answerBoxFooter").css('width',wordGridHolderLeft-(90*scaleW));
		$("#answerBoxFooter").css('height',(35*scaleH));
		
		$("#answerBoxFooter").css('padding-left',((10*scaleW)+"px"));
		$("#answerBoxFooter").css('padding-top',((10*scaleH)+"px"));
		
		//$("#endGameScreen").show();
		$("#endGameScreen").css('width',400*scaleW)
		$("#endGameScreen").css('height',300*scaleH)
		
		$("#endGameScreen").css('left',120*scaleW)
		$("#endGameScreen").css('top',80*scaleH)
		
		updateFooter(ID_ShowAnswers);
		//$("#endGameScreen").show();
	}
	
	//clue images
	for(i=0;i<textArray.length;i++){
		$("#img"+i).children(0).css('width',(parseInt(contentStyles.size*2))+"px")
		$("#txt"+i).css('left',(parseInt(contentStyles.size)+(parseInt(contentStyles.size)/2))+"px")
	}
	
	
	$("#instructions").css('padding-top',instPadding+"px");
	
	if(isResponsiveProject){
		$($(myWidgetiFrame).parent().parent()).css("top",(myWidgetiFrameTop+(-19*scaleH)))
		$($(myWidgetiFrame).parent().parent()).css("left",(myWidgetiFrameLeft+(-25*scaleW)))
	}else{
		if(firstLoad){
			$($(myWidgetiFrame).parent().parent()).css("top",(myWidgetiFrameTop+(-19*scaleH)))
			$($(myWidgetiFrame).parent().parent()).css("left",(myWidgetiFrameLeft+(-25*scaleW)))
		}
	}
	if(isDevice && deviceType!="iPad"){
		addPinchFunction();
	}
	//console.log("reached")
}

function addClickHandlers() {
	$("#reveal").fadeIn();					  
}
var global = {};
global.scaleFactor = 1;
global.previousScaleFactor = 1;

function addPinchFunction(){
	var container = document.getElementById('wordsearchwdgtHolder');
	var element = document.getElementById('wordsearchwdgt');
	//var reveal = document.getElementById('reveal');
	element.scaleFactor = 1;
    var thiswidget = new Hammer(element,{
        //transform_always_block: true,
        no_mouseevents: true,
        transform_min_scale: 1,
        //drag_block_horizontal: true,
        //drag_block_vertical: true,
        drag_min_distance: 0
    });

    element.scaleFactor = 1;
    
    var displayWidth = container.clientWidth;
    var displayHeight = container.clientHeight;

    //These two constants specify the minimum and maximum zoom
    var MIN_ZOOM = 1;
    var MAX_ZOOM = 3;

    global.scaleFactor = 1;
    global.previousScaleFactor = 1;
	
	global.elementLeft = 0 ;
	global.elementTop = 0;

    //These two variables keep track of the X and Y coordinate of the finger when it first
    //touches the screen
    var startX = 0;
    var startY = 0;

    //These two variables keep track of the amount we need to translate the canvas along the X
    //and the Y coordinate
    var translateX = 0;
    var translateY = 0;

    //These two variables keep track of the amount we translated the X and Y coordinates, the last time we
    //panned.
    var previousTranslateX = 0;
    var previousTranslateY = 0;

    //Translate Origin variables

    var tch1 = 0, 
        tch2 = 0, 
        tcX = 0, 
        tcY = 0,
        toX = 0,
        toY = 0,
        cssOrigin = "";

    var self = global;
    thiswidget.on("transformstart",function(event){
        event.gesture.stopPropagation();
        event.gesture.preventDefault();
                                                            
        //We save the initial midpoint of the first two touches to say where our transform origin is.
        e = event.gesture;

        tch1 = [e.touches[0].pageX, e.touches[0].pageY],
        tch2 = [e.touches[1].pageX, e.touches[1].pageY];

        tcX = (tch1[0]+tch2[0])/2,
        tcY = (tch1[1]+tch2[1])/2;

        toX = tcX;
        toY = tcY;

        var lSlideBoundingClientRect = element.getBoundingClientRect();
        var left = lSlideBoundingClientRect.left;
        var top = lSlideBoundingClientRect.top;

        cssOrigin = (-(left) + toX)/self.scaleFactor +"px "+ (-(top) + toY)/self.scaleFactor +"px";
		global.cssOrigin = cssOrigin;
    });
    
    thiswidget.on("transform", function(event) {
        event.gesture.stopPropagation();
        event.gesture.preventDefault();
        self.scaleFactor = self.previousScaleFactor * event.gesture.scale;
		
        self.scaleFactor = Math.max(MIN_ZOOM, Math.min(self.scaleFactor, MAX_ZOOM));
        element.scaleFactor = self.scaleFactor;
        transformWdgt(element,self.scaleFactor,cssOrigin);
    });

    thiswidget.on("transformend", function(event) {
        event.gesture.stopPropagation();
        event.gesture.preventDefault();
        element.scaleFactor = self.scaleFactor;
        self.previousScaleFactor = self.scaleFactor;

        if(event.gesture.stopDetect)
            event.gesture.stopDetect();
		
    });

    var startPos,elemLeft,elemTop;
    thiswidget.on('dragstart',function(event) {
        if(element.scaleFactor == 1){
            //self.fitMovie(event);
            element.scrollDeltaX = 0;
            element.scrollDeltaY = 0;
            return;
        }	
        event.gesture.stopPropagation();
        event.gesture.preventDefault();
		var touches = event.gesture.touches || [event.gesture];
		
		startPos = {pageX:touches[0].pageX,pageY:touches[0].pageY};
		elemLeft = parseFloat(element.style.left);
		elemTop = parseFloat(element.style.top);
		
	});

	thiswidget.on('drag',function(event) {
        if(element.scaleFactor == 1){
            if(((event.gesture.direction == "up") || (event.gesture.direction == "down"))){
                //self.scrollV(event.gesture.deltaY-element.scrollDeltaY);
                element.scrollDeltaY = event.gesture.deltaY;
                self.isScrolling = true;
            }else if(((event.gesture.direction == "left") || (event.gesture.direction == "right"))){
                //self.scrollH(event.gesture.deltaX-element.scrollDeltaX);
                element.scrollDeltaX = event.gesture.deltaX;
                self.isScrolling = true;
            }
            return;
        }    
        event.gesture.stopPropagation();
        event.gesture.preventDefault();
		//var lProjBoundingClientRect = container.getBoundingClientRect();
		//var left = lProjBoundingClientRect.left;
		//var top = lProjBoundingClientRect.top;

        var touches = event.gesture.touches || [event.gesture];
        
        element.style.left = elemLeft + touches[0].pageX - startPos.pageX + "px";
        element.style.top = elemTop + touches[0].pageY - startPos.pageY + "px";
		
		global.elementLeft = (element.style.left);
		global.elementTop = (element.style.top);
	});

    thiswidget.on('dragstop',function(event){
        if(event.gesture.stopDetect)
            event.gesture.stopDetect();
        self.isScrolling = false;
       // self.fitMovie(event);
    })

    function customPreventDefault(ev){
        ev.preventDefault();
    };
	
	//thiswidget.on("touchstart",setGameInteractions);
    //thiswidget.on("touchmove",customPreventDefault);
    //thiswidget.on("touchend",customPreventDefault);
    //thiswidget.on("touchcancel",customPreventDefault);  
	
	//thiswidget.on('dragstart', OnDragStart);
	//thiswidget.on('drag', OnDrag);
	//thiswidget.on('dragstop', OnDragEnd);
}
function transformWdgt(iElem,iScaleFactor,iCssOrigin){
	
    iElem.scaleFactor = iScaleFactor;
    //We're going to scale the X and Y coordinates by the same amount
    var cssScale = "scaleX("+ iScaleFactor +") scaleY("+ iScaleFactor +")";

    iElem.style["webkitTransform"] = cssScale;
    if(iCssOrigin)
        iElem.style["webkitTransformOrigin"] = iCssOrigin;

    iElem.style["transform"] = cssScale;
    if(iCssOrigin)
        iElem.style["transformOrigin"] = iCssOrigin;

    if(iScaleFactor == 1){
        iElem.style.left = "0px";
        iElem.style.top = "0px";

        //if(this.previousScaleFactor > iScaleFactor)
           // cp.adjustResponsiveItems(cp.ReasonForDrawing.kOrientationChangeOrResize);

        this.scaleFactor = 1;
        this.previousScaleFactor = 1;
    }   
}


function resettransformWdgt(){
	var iElem = document.getElementById('wordsearchwdgt');
	var iScaleFactor =  1;
	var iCssOrigin = global.cssOrigin
	
    iElem.scaleFactor = iScaleFactor;
    //We're going to scale the X and Y coordinates by the same amount
    var cssScale = "scaleX("+ iScaleFactor +") scaleY("+ iScaleFactor +")";

    iElem.style["webkitTransform"] = cssScale;
    if(iCssOrigin)
        iElem.style["webkitTransformOrigin"] = iCssOrigin;

    iElem.style["transform"] = cssScale;
    if(iCssOrigin)
        iElem.style["transformOrigin"] = iCssOrigin;

    if(iScaleFactor == 1){
        iElem.style.left = "0px";
        iElem.style.top = "0px";

        //if(this.previousScaleFactor > iScaleFactor)
           // cp.adjustResponsiveItems(cp.ReasonForDrawing.kOrientationChangeOrResize);

        global.scaleFactor = 1;
        global.previousScaleFactor = 1;
    }   
}


//sound values
var theSnd = null;
function pauseSound() {
	if(theSnd != null) // && theSnd.src != wavePath)
	{ theSnd.pause();}
}

function play_sound(url){
	theSnd = new Audio(url);
	theSnd.load();
	theSnd.play();	
}
////////////////////////////////////////////////////////


function setupCustomStyles() {
	generalStyles.headerColor = formatColor(generalStyles.headerColor); //generalStyles.headerColor.substring(2);
	//generalStyles.letterBarColor = formatColor(generalStyles.letterBarColor); //"#" + generalStyles.contentBodyColor.substring(2);
	//generalStyles.contentHeaderColor = formatColor(generalStyles.contentHeaderColor); //"#" + generalStyles.contentBodyColor.substring(2);
	
	_wordGridColor = formatColor(generalStyles.contentBodyColor); //"#" + generalStyles.contentBodyColor.substring(2);
	generalStyles.bodyColor = formatColor(generalStyles.bodyColor); //"#" + generalStyles.bodyColor.substring(2);
	//generalStyles.arrowColor = formatColor(generalStyles.arrowColor);
	
	_canvasColor = formatColor(generalStyles.btnColorUp);
	generalStyles.btnColorUp = formatColor(generalStyles.btnColorUp);
	generalStyles.btnColorOver = formatColor(generalStyles.btnColorOver);
	generalStyles.btnColorDown = formatColor(generalStyles.btnColorDown);
	generalStyles.clueColor = formatColor(generalStyles.clueColor);
	
	generalStylescontentBodyColor = formatColor(generalStyles.contentBodyColor);
	
	letterStyles.textColor = formatColor(letterStyles.textColor);
	letterStyles.textColorOver = formatColor(letterStyles.textColorOver);
	letterStyles.textColorDown = formatColor(letterStyles.textColorDown);
		


	//alert(generalStyles.lineColor);
		if (currentTheme != 3 && currentTheme != 11 && currentTheme != 16) {
			$('#headerColor').css('background-color', generalStyles.headerColor)//generalStyles.headerColor);
		} else {
			$('#headerColor').css('background-color', generalStyles.bodyColor)//generalStyles.headerColor);
			
		}$('.answerBoxHeader').css('background-color', generalStyles.clueColor)//generalStyles.headerColor);
		$('.answerBoxHeader').text(ID_AnswerClues);
	$('#answerBoxFooter').css('background-color', generalStyles.clueColor)//generalStyles.headerColor);
	$('.wordGridHolder').css('background-color', formatColor(generalStyles.contentBodyColor))//generalStyles.headerColor);
	//$('.wordGridHolder').css('border-color', formatColor(generalStyles.contentBodyColor))//generalStyles.headerColor);

	
	
	
	//$('#headerColor').css('background-image', 'none');
	//$('#Navigation_Container').css('background-color', generalStyles.letterBarColor);
	//$('#Search_Result_Header').css('background-color', generalStyles.contentHeaderColor);
	//$('#Search_Input_Container').css('background-color', generalStyles.contentHeaderColor);
	
	
	//$('#Search_Result_Container').css('background-color', generalStyles.contentBodyColor);
	$('#content_bg').css('background-color', generalStyles.bodyColor);
	$('#reveal').css('background-color', generalStyles.bodyColor);
	
	$('#reveal').css('left', '0px');
	$('#reveal').css('top', '0px');
	$('#reveal').css('position', 'absolute');
	$('#reveal').css('display', 'block');


	if (generalStyles.headerActive == 2) {
		$('#headerColor').css('display', 'none');
	}
}


	/*-----------------------------------------------------------------------------------variables */

/*array of all letters for word grid*/
var lettersArray=[];
var answersArray=[];
var wordsArray=[];
var questionsArray=[];
var highlightedWord = [];
/*empty array to hold all word tile objects*/
var wordTilesArray=[];
var puzzleWords=[];
//Answer Key
var answerKey=[];

/*the canvas element*/
var $canvas;
/*the word grid element that holds all of the word tiles*/
var $wordGrid;
//The word list
var $canvasWordList;
var $canvasWordList2;

/*sizes for the word grid and word tiles*/
var _wordTileWidth = 25; //
var _wordTileHeight = 25; //20.25 x 20.25
var _wordGridRows = 12;
var _wordGridColumns = 14;
var _totalTiles = _wordGridRows * _wordGridColumns;
var _wordTileSpacing = 0;
var _wordGridWidth = 350;
var _wordGridHeight = 300;
var wordX = 10;
var wordY = 10;
var letterStart = null;
var letterLast = null;
var wordsFound = 0;
var gameOver = false;
var attempt = 0;
var maxAttempts = 5;
var wordsLeft = 0;
var lastSuccess = 0;
var finished = false;
var listComplete = false;
var attemptsButtonShown = false;
var enableShow = false;
var answersShown = false;
/*colors for the canvas background and word grid stroke and text*/
var _canvasColor='#111111';
var _wordGridColor='#111111';
var alreadyFound = new Array();
//wordGridHolder

/*---------------------------------------------------------------------------------------setup */
function setup() {
	/*get canvas and word grid element*/
	$canvas = $('#wordgridcanvas');
	$canvas.css('background-color',_canvasColor);
	$('#instructions').html("<i>"+ID_Clickthefirstandlast+"</i>");
	
	$('.wordGridHolder').css('background-color',_wordGridColor);
	$canvas.css('margin-left','5px');
	$canvas.css('margin-top','5px');
	$wordGrid  = $canvas[0].getContext('2d');
	//$wordGrid.clearRect ( 0 , 0 , $canvas.width, $canvas.height );
	/*local variables*/
	var wordTile;
	var count = 0;
	var xPosition = 0;
    var yPosition = 0;
	var row = 0;
	var curPos=0;
	/*loop through total number of word tiles and add them to wordTilesArray*/
	//alert(lettersArray.length)
	//alert(14*12);  168 for small
	//alert(17*12);//  206 for large
	$gridHolder = $('.wordGridHolder');
	if(lettersArray.length>180){
		var canv = document.getElementById("wordgridcanvas");
		canv.width = 425;
		canWidth = 425
		_wordGridRows = 12;
		_wordGridColumns = 17;
		_totalTiles = _wordGridRows*_wordGridColumns;  
		

		_wordTileWidth=25;
		_wordTileHeight=25;
		
		//$('.wordGridHolder').css('height','85px');
		//$canvas.css('margin-left','0px');
		//$('.wordGridHolder').css('width',canv.width+'px');
		//$('.answerBox').css('margin-left','-25px');

		//$('#content_bg').css('padding-right','10px');
	}else{
		canWidth = 360
		_wordGridRows = 12;
		_wordGridColumns = 14;
		_totalTiles = _wordGridRows*_wordGridColumns;
		tileWidthDiff = 0;
		_wordTileWidth=25;
		_wordTileHeight=25;
		
	}
	
	for(var i =0;i<answersArray.length;i++){
		if(answersArray[i]!='*'){
			answerKey[curPos] = i;
			curPos++;
			alreadyFound[i] = false;
		}
	}
	
    for(var i = 0;i <_totalTiles;i++){
        wordTile = {};
        wordTile.letter = lettersArray[i];
        wordTile.key = i;
		wordTile.size = _wordTileWidth //Assuming that tiles are always square.
        wordTile.left = xPosition;
        wordTile.top = yPosition;
		wordTile.bottom = yPosition + _wordTileHeight + 2;
		wordTile.right = xPosition + _wordTileWidth + 2;
		wordTile.column = count;
		wordTile.row = row;
		wordTile.incorrect = false;
		wordTile.selected = false;
		wordTile.clicked = false;
        wordTilesArray.push(wordTile);
        xPosition += (_wordTileWidth + _wordTileSpacing);
		count++;
        if(count == _wordGridColumns){
           xPosition = 0;
           yPosition += (_wordTileHeight + _wordTileSpacing);
		   count = 0;
		   row++;
         }
    }
	for(i = 0; i < wordsArray.length; i++)
	{
		wordTile = {}; 
		wordTile.word = wordsArray[i];
		wordTile.found = false;
		puzzleWords.push(wordTile);
	}
    //draw word grid after loop is finished
	drawWordGrid();
	drawWordList();
	//document.onmousedown = setLetterStart;
	//document.ontouchstart = setLetterStartTOUCH
	
	//display2 = $canvas[0].getContext("2d");
	//alert(display2);
		//Listen to the OnClick
	$('#wordgridcanvas').css("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	$('#wordgridcanvas').bind("mousedown", function(e) {
		if(!reviewwingAnswers){
			getLetterTouched(e).clicked = true;
			setLetterStart(e);
			dragHighlight(e);
		}
			
	});
	if(!isDevice){
		mouseMovement();
	}
	

	//setLetterStart);
	//$canvas.bind("mouseup", onMouseUp);
		
		//Draw it
//		draw2();
	/*
	$('#foo').bind('click', function() {
  		alert('User clicked on "foo."');
	});
*/	
	resizeInteraction(width,height)
};
/*-------------------------------------------------------------------------------draw word grid */
function drawWordGrid(){
    /*set up word grid*/
//	alert(_wordGridWidth);
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.strokeStyle = _wordGridColor; //changes the spaces betwee letters
	$wordGrid.lineWidth   = 2;
	$wordGrid.font = letterStyles.size + "px " + letterStyles.face; //Arial";
	
	/*
		letterStyles.face = theLettersProps.children('font').attr("face");
		letterStyles.style = theLettersProps.children('font').attr("style");
		letterStyles.size = theLettersProps.children('font').attr("size");
		letterStyles.align = theLettersProps.children('font').attr("align");	
		*/
		
		
    $wordGrid.textAlign = "center";
    $wordGrid.textBaseline = "middle";
	$wordGrid.clearRect(0,0,_wordGridWidth,_wordGridHeight);
	
	/*loop through wordTilesArray and stroke tiles on grid, then add coresponding letter to each tile*/
    var wordTile;
    for(var i = 0;i < wordTilesArray.length;i++){
        wordTile = wordTilesArray[i];
       	$wordGrid.strokeRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
		$wordGrid.fillStyle = generalStyles.btnColorUp;
		$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
		if(wordTile.selected)
		{
			//change correct answer colors
			$wordGrid.fillStyle = generalStyles.btnColorDown;  //
			//bg color swap
			$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
			$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
		}
		else if(wordTile.incorrect)
		{
			$wordGrid.fillStyle = generalStylescontentBodyColor;
			$wordGrid.globalAlpha = .1;
			$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
			$wordGrid.fillStyle = letterStyles.textColor//'#FF0000';  // text color
			$wordGrid.globalAlpha = 1;
		}else
		{	//default
			$wordGrid.fillStyle = letterStyles.textColor
		}
        $wordGrid.fillText(lettersArray[i], wordTile.left + (_wordTileWidth / 2), wordTile.top + (_wordTileHeight / 2));
    }
}

//----------------------------------------------------------------fire after word grid is drawn
function drawWordList(){
	var thisWord;
	wordsLeft = 0;

	for(var i = 0; i < puzzleWords.length; i++){
		thisWord = puzzleWords[i];
		yPosition = wordY + (i * 25);
		if(!thisWord.found){
			wordsLeft++;
		}else{
			$('#img'+i).css({
				visibility:"visible"
			})
		}
	}  
	
	if(wordsLeft <= 0 && !listComplete){
		listComplete = true;
		updateFooter(ID_ShowAnswers);
	} else {
		updateFooter(ID_ShowAnswers);
	}
}

//----------------------------------------------------------------Fire after mousedown.
//update the footer and data
function updateFooter(msg) {
	//alert(msg);
	if(setTop){
		var button_elem = document.getElementById('answerBoxFooter');
		button_elem.innerHTML = "<div id='remainingwordsdiv' style='position:absolute'>"+ID_Remainingwords+" " + wordsLeft + "</div>"
		button_elem.innerHTML += "<div id='attemptsdiv' style='margin-right:5px; float:right'>"+ID_Attempts+" " + attempt + "/" + maxAttempts+"</div>";
		button_elem.innerHTML += "<div id='showAnswers'>" + msg + "</div>";
		
		$("#showAnswers").css('width',showAnsWidthHolder-(140*finalScaleW))
		$("#showAnswers").css('height',20*finalScaleH)
		
		$("#showAnswers").css('margin-left',145*finalScaleW)
		$("#showAnswers").css('margin-top',20*finalScaleH)
	}else{
		var button_elem = document.getElementById('answerBoxFooter');
		button_elem.innerHTML = "<div id='remainingwordsdiv'>"+ID_Remainingwords+" " + wordsLeft + "</div>"
		button_elem.innerHTML += "<div id='attemptsdiv'>"+ID_Attempts+" " + attempt + "/" + maxAttempts+"</div>";
		button_elem.innerHTML += "<div id='showAnswers'>" + msg + "</div>";
		
		$("#showAnswers").css('width',showAnsWidthHolder-(140*finalScaleW))
		$("#showAnswers").css('height',20*finalScaleH)
		
		$("#showAnswers").css('margin-left',15*finalScaleW)
		$("#showAnswers").css('margin-top',20*finalScaleH)
	}
	
	if (!enableShow) {
		$('#showAnswers').hide();
		$('#instructions').show();
	}else{
		$('#instructions').hide();
	}
	
	$('#showAnswers').bind("mousedown", function(e) {
		showAnswers();
	});
	
	footerFontScale();
}

function footerFontScale(){
	$("#remainingwordsdiv").css('font-size', contentStyles.size+"px")
	$("#attemptsdiv").css('font-size', contentStyles.size+"px")
	$("#showAnswers").css('font-size', contentStyles.size+"px")
}


function setLetterStart(e){
	letterStart = getLetterTouched(e);
	$('#wordgridcanvas').unbind();
	$('#wordgridcanvas').bind("mousedown", function(e) { 
		if(!reviewwingAnswers){
			getLetterTouched(e).clicked = true;
			dragHighlight(e);
			t=setTimeout("checkWord()",100);
		}
	})
	if(!isDevice){
		mouseMovement();
	}
}

function mouseMovement(){
	var wordTileOver = null;
	var wordTileOut = null;
	$('#wordgridcanvas').bind("mouseout", function(e) {
		if(!reviewwingAnswers){
			drawWordGrid();
			var thisWord;
			wordsLeft = 0;
		
			for(var i = 0; i < puzzleWords.length; i++){
				thisWord = puzzleWords[i];
				yPosition = wordY + (i * 25);
				if(!thisWord.found){
					wordsLeft++;
				}else{
					$('#img'+i).css({
						visibility:"visible"
					})
				}
			} 
		}
	})
	$('#wordgridcanvas').bind("mousemove", function(e) {
		//setLetterStart(e);
		//for(var i = 0;i < wordTilesArray.length;i++){
		wordTileOut = wordTileOver
		if(!reviewwingAnswers){
			if(wordTileOut != getLetterTouched(e)){
				if(wordTileOut!=null){
					if(wordTileOut.selected || wordTileOut.clicked){
						//change correct answer colors
						$wordGrid.fillStyle = generalStyles.btnColorDown;  //
						//bg color swap
						$wordGrid.fillRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
					} else if(wordTileOut.incorrect){
						$wordGrid.strokeRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = generalStyles.btnColorUp;
						$wordGrid.fillRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = letterStyles.textColor
						$wordGrid.globalAlpha = 1;
						$wordGrid.fillStyle = generalStylescontentBodyColor;
						$wordGrid.globalAlpha = .1;
						$wordGrid.fillRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = letterStyles.textColor//'#FF0000';  // text color
						$wordGrid.globalAlpha = 1;
					} else {	//default
						$wordGrid.strokeRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = generalStyles.btnColorUp;
						$wordGrid.fillRect(wordTileOut.left, wordTileOut.top,_wordTileWidth,_wordTileHeight);
						$wordGrid.fillStyle = letterStyles.textColor
					}
					$wordGrid.fillText(wordTileOut.letter, wordTileOut.left + (_wordTileWidth / 2), wordTileOut.top + (_wordTileHeight / 2));
				}
				wordTileOver = getLetterTouched(e);
				if(wordTileOver.selected || wordTileOver.clicked){
					//change correct answer colors
					$wordGrid.fillStyle = generalStyles.btnColorDown;  //
					//bg color swap
					$wordGrid.fillRect(wordTileOver.left, wordTileOver.top,_wordTileWidth,_wordTileHeight);
					$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
				} else if(wordTileOver.incorrect){
					$wordGrid.fillStyle = generalStyles.btnColorOver;  //
					//bg color swap
					$wordGrid.fillRect(wordTileOver.left, wordTileOver.top,_wordTileWidth,_wordTileHeight);
					$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
					$wordGrid.globalAlpha = 1;
					$wordGrid.fillStyle = generalStyles.btnColorOver;
					$wordGrid.globalAlpha = .1;
					$wordGrid.fillRect(wordTileOver.left, wordTileOver.top,_wordTileWidth,_wordTileHeight);
					$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color
					$wordGrid.globalAlpha = 1;
				} else {	//default
					$wordGrid.fillStyle = generalStyles.btnColorOver;  //
					//bg color swap
					$wordGrid.fillRect(wordTileOver.left, wordTileOver.top,_wordTileWidth,_wordTileHeight);
					$wordGrid.fillStyle = letterStyles.textColorDown//'#FF0000';  // text color	
				}
				$wordGrid.fillText(wordTileOver.letter, wordTileOver.left + (_wordTileWidth / 2), wordTileOver.top + (_wordTileHeight / 2));
			}
			if(letterStart!=null){
				dragHighlight(e)
			}
		}
	});
}

function setLetterStartTOUCH(e){
	document.onmousedown = null;
	//alert("touch");
	//alert(e);
	letterStart = getLetterTouched(e);
	//alert(getLetterTouched(e));
	//var tester = getLetterTouched(e);
	//var obj = tester.getElementByID(tester);
	
	
	//$canvas.bind("mousemove", dragHighlight);
	//$canvas.bind("mouseup", onMouseUp);
	
	
	//document.onmousedown = null;
	//document.ontouchmove = dragHighlight;
	document.onmouseup = checkWord;
}

function dragHighlight(e)
{
	if (!enableShow) {
		letterLast = getLetterTouched(e);
		//alert(letterLast);
		highlightWord();
	}
}

function getMousePos(canvas, evt){
	var off = canvas.offset();
	//alert(evt.originalEvent.targetTouches[0].left);
	//alert(evt.originalEvent.targetTouches[0].pageX);
   //alert(evt.pageX);
	//alert(off.left);
	
	 var scaleArray = new Array();
	 var containerScale = $('#project_container', window.parent.document).css('-ms-transform');
	 scaleArray[0]="";
	 if(containerScale!=null){
	   containerScale = containerScale.substring(7);
	   scaleArray = containerScale.split(',');
	 }
	
	// if(Number(scaleArray[0])==""){
		//alert(global.scaleFactor)
	var r1 = 8;
	var r2= 8;
	//alert(r)
	if(canWidth==360){
		r1=0;
		r2=0;
	}
	  var mouseX = ((evt.pageX - off.left) / (scale*global.scaleFactor))+(r1*scale)
	  var mouseY = ((evt.pageY - off.top) / (scale*global.scaleFactor))+(r2*scale);
	// }else{ 
	 	//var mouseX = (evt.pageX - off.left)/ Number(scaleArray[0]) / finalScaleW;
	 	//var mouseY = (evt.pageY - off.top)/ Number(scaleArray[0]) / finalScaleH;
	// }

    return {
        x: mouseX,
        y: mouseY
    };
}

function getLetterTouched(e){
	var mousePos;
	//var offset = $("#wordgridcanvas").offset();
	//var x_pos = Math.floor(e.pageX - offset.left);
	//var y_pos = Math.floor(e.pageY - offset.top);
		
		
	//if(e.layerX || e.layerX == 0 || e.offsetX || e.offsetX == 0){
		mousePos = getMousePos($canvas, e);
	//}
	var obj = null;
	for(var i = 0; i < wordTilesArray.length; i++){
		obj = wordTilesArray[i];
		if(mousePos.y > obj.bottom || mousePos.y < obj.top || mousePos.x < obj.left || mousePos.x > obj.right){
			continue;
		}else{
			return obj;
			break;
		}
	}
	return obj;
}

//----------------------------------------------------------------fire when stuff is being selected
function highlightWord()
{
	highlightedWord = [];
	drawWordGrid();
	drawWordList();
	var start = {x:letterStart.left, y:letterStart.top};
	var end = {x:letterLast.left, y:letterLast.top};
	//alert(letterStart.left);
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	$wordGrid.restore();
	if(start.y == end.y)
	{

		highlightRow();
	}
	else if (start.x == end.x)
	{
		highlightColumn();
	}
	else if (start.y < end.y)
	{
		highlightDDown();
	}
	else if (start.y > end.y)
	{
		highlightDUp();
	}
}

function placeInArray(i, slot)
{
	slot = wordTilesArray[i];
	 //alert(letterStyles.textColorOver);
	 $wordGrid.fillStyle = generalStyles.btnColorOver;
	 //#6a737b
	 $wordGrid.fillRect(slot.left, slot.top, _wordTileWidth, _wordTileHeight);
	 $wordGrid.fillStyle = letterStyles.textColorOver//'#FF0000';  // text color
	 $wordGrid.fillText(lettersArray[i], slot.left + (_wordTileWidth / 2), slot.top + (_wordTileHeight / 2));
	 highlightedWord.push(slot);
 
}

function highlightRow()
{
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1// 0.3;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(min < max){
		for(var i = min; i < max + 1; i++){
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i > max - 1; i--)
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightColumn()
{
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(min < max){
		for(var i = min; i < max + 1; i+=_wordGridColumns){
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i > max - 1; i-=_wordGridColumns)
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightDDown()
{
	var rowDiff = letterStart.row - letterLast.row;
	var columnDiff = letterStart.column - letterLast.column;
	if (rowDiff < 0)
	{
		rowDiff = rowDiff * -1;	
	}
	if (columnDiff < 0)
	{
		columnDiff = columnDiff * -1;	
	}
	if(rowDiff != columnDiff)
	{
		return;	
	}
	$wordGrid.save();
	//color on over
	$wordGrid.fillStyle = _wordGridColor; 
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(letterStart.left < letterLast.left){
		for(var i = min; i < max + 1; i+=(_wordGridColumns + 1))
		{
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i < max + 1; i+=(_wordGridColumns - 1))
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

function highlightDUp()
{
	var rowDiff = letterStart.row - letterLast.row;
	var columnDiff = letterStart.column - letterLast.column;
	if (rowDiff < 0)
	{
		rowDiff = rowDiff * -1;	
	}
	if (columnDiff < 0)
	{
		columnDiff = columnDiff * -1;	
	}
	if(rowDiff != columnDiff)
	{
		return;	
	}
	$wordGrid.save();
	$wordGrid.fillStyle = _wordGridColor;
	$wordGrid.globalAlpha = 1;
	var min;
	var max;
	var slot;
	min = letterStart.key;
	max = letterLast.key;
	if(letterStart.left < letterLast.left){
		for(var i = min; i >= max; i-=(_wordGridColumns - 1))
		{
			placeInArray(i, slot);
		}
	}
	else
	{
		for(var i = min; i >= max; i-=(_wordGridColumns + 1))
		{
			placeInArray(i, slot);
		}
	}
	$wordGrid.restore();
}

//----------------------------------------------------------------fire after word is selected
function checkWord()
{
	//document.onmousemove = null;
	//document.removeEventListener(MouseEvent.mousemove,dragHighlight);
	var word;
	var highlight;
	//word.found = false;
	for(var i = 0; i < puzzleWords.length; i++)
	{
		word = puzzleWords[i];
		var matched = word.word;
		highlight = '';
		//alert(highlightedWord.length);
		for(var j = 0; j < highlightedWord.length; j++)
		{
			highlight += highlightedWord[j].letter;	
		}
		if(highlight == matched)
		{
			if (!alreadyFound[i]) {
				word.found = true;
				lastSuccess = 2;
				updateFoundLetters();
				alreadyFound[i] = true;
				break;
			}
		}
		var reversed = highlightedWord.reverse();
		highlight = '';
		for(j = 0; j < reversed.length; j++)
		{
			highlight += reversed[j].letter;	
		}
		if(highlight == matched)
		{
			if (!alreadyFound[i]) {
				word.found = true;
				lastSuccess = 2;
				updateFoundLetters();
				alreadyFound[i] = true;
				break;
			}
		}
		else
		{
			updateSelectedLetters();
			lastSuccess = 1;
		}

	}
	//alert(lastSuccess);
	if (lastSuccess == 1) { //then they missed the word
		attempt++;
		if(attempt >= maxAttempts && !attemptsButtonShown)
		{
			allAttempts();
			attemptsButtonShown = true;
		}
		if (attempt > maxAttempts) {	attempt = maxAttempts;	 }
	}
	//$canvasWordList2.fillText("Attempt " + attempt + " out of " + maxAttempts, 100, 250);
	
	
	drawWordGrid();
	drawWordList();
	
	enableNormalGameInteractions();
	resettransformWdgt();
}

function enableNormalGameInteractions(){
	if(!gameOver){
		letterStart = null;
		uncheckClicked();
		$('#wordgridcanvas').unbind();
		$('#wordgridcanvas').bind("mousedown", function(e) {
			getLetterTouched(e).clicked = true;e
			setLetterStart(e);
			dragHighlight(e);
		});
		if(!isDevice){
			mouseMovement();
		}
	}else{
		document.onmousemove = null;
		document.removeEventListener(MouseEvent.mousemove,dragHighlight);
		$('#wordgridcanvas').unbind();
	}
}

function uncheckClicked(){
	var wordTile;
	 for(var i = 0;i < wordTilesArray.length;i++){
        wordTile = wordTilesArray[i];
		wordTile.clicked = false;
	 }
}

function allAttempts()
{
	reviewwingAnswers = true;
	$("#showAnswers").fadeIn();
	enableShow = true;	
	gameover = true;
	document.onmousemove = null;
	document.removeEventListener(MouseEvent.mousemove,dragHighlight);
		$('#wordgridcanvas').unbind();
		
			document.onmousedown = null;
			document.onmousemove = null;
			document.onmouseup = null;
			//alert("in");
			
}

function showAnswerLoc(e){
	wordTile = wordTilesArray[e];			
	$wordGrid.fillStyle = generalStyles.btnColorOver; //'#FFFF00';  //yellow
	$wordGrid.fillRect(wordTile.left, wordTile.top,_wordTileWidth,_wordTileHeight);
	$wordGrid.fillStyle = letterStyles.textColorOver//'#FF0000';  // text color
   
	$wordGrid.fillText(lettersArray[e], wordTile.left + (_wordTileWidth / 2), wordTile.top + (_wordTileHeight / 2));
}

function showAnswers(e)
{
	//This is where it should highlight tag1
	if (!answersShown) { 
		updateFooter(ID_HideAnswers);
		answersShown = true;
		var ans;
		for(i = 0;i<answerKey.length;i++){
			ans = answerKey[i];
			showAnswerLoc(ans);
		}
		finished = true;
		drawWordList();
	} else { 
		answersShown = false;
		drawWordGrid();
		drawWordList();
	}
	
}

function updateSelectedLetters(){
	var i;
	var word;
	for(i = 0; i < highlightedWord.length; i++)
	{
		word = highlightedWord[i];
		word.incorrect = true;
	}
}

function updateFoundLetters()
{
	wordsFound++;
	var i;
	var word;
	for(i = 0; i < highlightedWord.length; i++)
	{
		word = highlightedWord[i];
		word.selected = true;
	}
	if(wordsFound == puzzleWords.length)
	{
		document.onmousemove = null;
		document.removeEventListener(MouseEvent.mousemove,dragHighlight);
		gameOver = true;	
		$("#endGameScreen").fadeIn();
			$('#endGameScreen').click(function(e){				  
				$("#endGameScreen").hide();
			});
			//eliminate mouse clicks
			document.onmousedown = null;
			document.onmousemove = null;
			document.onmouseup = null;
	
					
			
	}
}