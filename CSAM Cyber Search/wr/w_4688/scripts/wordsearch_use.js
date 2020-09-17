

//holder arrays
var nodeLeftProperty;
var textArray = [];
var buttonArray = [];
var imageIDArray = [];
var soundIDArray = [];
var imageArray = [];
var soundArray = [];
var buttonXArray= [];
var picAlignArray=[];
keys = new Array();
description = new Array();

	
var canWidth = 360
var color;
var face;
var style;
var size;
var align;
var contentStyles = new Object();
var buttonStyles = new Object();
var letterStyles = new Object();
var headerStyles = new Object();
var instStyles = new Object();
var generalStyles = new Object();
var cluesStyles = new Object();
var lettersArray = new Array();
var answersArray = new Array();
var width
var height
var ID_AnswerClues,ID_Attempts,ID_Remainingwords,ID_Clickthefirstandlast,ID_ShowAnswers, ID_HideAnswers

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;
var scalefont = "false";

var contentStylessize;
var buttonStylessize;
var headerStylessize;
var instStylessize;
var myWidgetiFrameParent;
var isDevice = false
var deviceType = "";

var generalStylescontentBodyColor

var scalefont;

wordsearchUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		var handle
				handle = this.captivate.CPMovieHandle;
				
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 // some code..
		 	deviceType = navigator.platform
			isDevice = true;
			//var viewport = window.parent.document.querySelector("meta[name=viewport]");
			//viewport.setAttribute('content', 'initial-scale=1, minimum-scale = 1, maximum-scale=5, user-scalable=yes');
		}
		//if(handle.isWidgetVisible() == true)
		//{
		if(typeof this.captivate.CPMovieHandle.isPresenter == 'function')
			isPresenter = this.captivate.CPMovieHandle.isPresenter();		

		this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
		if ( ! this.movieProps )
			return;
		this.varHandle = this.movieProps.variablesHandle;
		//this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		mainCPNamespace = this.movieProps.getCpHandle();
		isResponsiveProject = mainCPNamespace.responsive;
		this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
		var size = this.OpenAjax.getSize();
		width = size.width;
		height = size.height;
		this.internalImage = '';
		this.externalImage = '';
		this.instructions = '';
		this.buttonLabel = '';
		this.buttonContent = '';
		this.soundName = '';
		this.title = '';
		this.directions = '';
		this.currentTheme
		this.updateData();
		this.doUpdate();                               
		/*if (this.captivate.CPMovieHandle.pauseMovie ) {
			setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);
		}*/
		//Captivate Event listener
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		//}
	},

	updateData: function()
	{
		var id = 0;
		var initresult = jQuery.parseXML( this.xmlStr );
		var initresultDoc = jQuery( initresult );
		var thexml = initresultDoc.find( 'string' ).text(); 
		
		var getscalefont = initresultDoc.find('#scaleFonts');
        if (getscalefont){
            if (getscalefont.find('string')){
                scalefont = getscalefont.find('string').text();
            }
        } 
		
		var ID_AnswerClues_txt = initresultDoc.find('#ID_AnswerClues');
        if (ID_AnswerClues_txt){
            if (ID_AnswerClues_txt.find('string')){
                ID_AnswerClues = ID_AnswerClues_txt.find('string').text();
            }
        }
		
		var ID_Attempts_txt = initresultDoc.find('#ID_Attempts');
        if (ID_Attempts_txt){
            if (ID_Attempts_txt.find('string')){
                ID_Attempts = ID_Attempts_txt.find('string').text();
            }
        }
		
		var ID_Remainingwords_txt = initresultDoc.find('#ID_Remainingwords');
        if (ID_Remainingwords_txt){
            if (ID_Remainingwords_txt.find('string')){
                ID_Remainingwords = ID_Remainingwords_txt.find('string').text();
            }
        }
		
		var ID_Clickthefirstandlast_txt = initresultDoc.find('#ID_Clickthefirstandlast');
        if (ID_Clickthefirstandlast_txt){
            if (ID_Clickthefirstandlast_txt.find('string')){
                ID_Clickthefirstandlast = ID_Clickthefirstandlast_txt.find('string').text();
            }
        }
		
		var ID_ShowAnswers_txt = initresultDoc.find('#ID_ShowAnswers');
        if (ID_ShowAnswers_txt){
            if (ID_ShowAnswers_txt.find('string')){
                ID_ShowAnswers = ID_ShowAnswers_txt.find('string').text();
            }
        }
		
		var ID_HideAnswers_txt = initresultDoc.find('#ID_HideAnswers');
        if (ID_HideAnswers_txt){
            if (ID_HideAnswers_txt.find('string')){
                ID_HideAnswers = ID_HideAnswers_txt.find('string').text();
            }
        }
		
		//Few lines of code added to cater to additions made fro theme colors and to retain the old XML structure 
		var tempStringStartLoc = thexml.indexOf("<");
		var tempStringEndLoc = thexml.lastIndexOf(">")+1;
		thexml = thexml.substring(tempStringStartLoc, tempStringEndLoc)
		
		var result = jQuery.parseXML( thexml );
		var resultDoc = jQuery( result );
		//alert(jQuery.isXMLDoc(resultDoc));
		var theButtons = resultDoc.find( 'buttons' ); 
		var theTextProps = resultDoc.find( 'textProperties' );
		var theContentProps = resultDoc.find( 'buttonContent' );
		var theButtonProps = resultDoc.find( 'labelText' );
		var theLettersProps = resultDoc.find( 'buttonLabel' );
		var theHeaderProps = resultDoc.find( 'headerTitle' );
		var theInstProps = resultDoc.find( 'headerInst' );
		var theCluesProps = resultDoc.find( 'answerClues' );
		currentTheme = parseInt(theTextProps.children('general').attr("themeNum"));
		
		var getscalefont = initresultDoc.find('#scaleFonts');
        if (getscalefont){
            if (getscalefont.find('string')){
                scalefont = getscalefont.find('string').text();
            }
        }
		
		//setup styles
		contentStyles.color = theContentProps.children('color').attr("textColor");
		contentStyles.face = theContentProps.children('font').attr("face");
		contentStyles.style = theContentProps.children('font').attr("style");
		contentStyles.size = theContentProps.children('font').attr("size");
		contentStyles.align = theContentProps.children('font').attr("align");
		
		var tempString = theContentProps.children('letters').text();
		lettersArray = tempString.split(",");
		tempString = theContentProps.children('answers').text();
		answersArray = tempString.split(",");
		
		buttonStyles.color = theButtonProps.children('color').attr("textColor");
		buttonStyles.textColorOver = theButtonProps.children('color').attr("textOver");
		buttonStyles.textColorDown = theButtonProps.children('color').attr("textDown");
		buttonStyles.face = theButtonProps.children('font').attr("face");
		buttonStyles.style = theButtonProps.children('font').attr("style");
		buttonStyles.size = theButtonProps.children('font').attr("size");
		buttonStyles.align = theButtonProps.children('font').attr("align");	
		//console.log(buttonStyles.color,buttonStyles.textColorOver,buttonStyles.textColorDown)	
		
		letterStyles.textColor = theLettersProps.children('color').attr("textColor");
		letterStyles.textColorOver = theLettersProps.children('color').attr("textOver");
		letterStyles.textColorDown = theLettersProps.children('color').attr("textDown");
		letterStyles.face = theLettersProps.children('font').attr("face");
		letterStyles.style = theLettersProps.children('font').attr("style");
		letterStyles.size = theLettersProps.children('font').attr("size");
		letterStyles.align = theLettersProps.children('font').attr("align");
		//console.log(letterStyles.textColor,letterStyles.textColorOver,letterStyles.textColorDown)	
		
		cluesStyles.titletxt = theCluesProps.children('txt').attr("titletxt");
		cluesStyles.bodytxt = theCluesProps.children('txt').attr("bodytxt");		
		
		headerStyles.color = theHeaderProps.children('color').attr("textColor");
		headerStyles.face = theHeaderProps.children('font').attr("face");
		headerStyles.style = theHeaderProps.children('font').attr("style");
		headerStyles.size = theHeaderProps.children('font').attr("size");

		headerStyles.align = theHeaderProps.children('font').attr("align");		
		
		instStyles.color = theInstProps.children('color').attr("textColor");
		instStyles.face = theInstProps.children('font').attr("face");
		instStyles.style = theInstProps.children('font').attr("style");
		instStyles.size = theInstProps.children('font').attr("size");
		instStyles.align = theInstProps.children('font').attr("align");			

		generalStyles.headerActive = theTextProps.children('general').attr("headerActive");
		generalStyles.headerColor = theTextProps.children('general').attr("headerColor");
		generalStyles.clueColor = theTextProps.children('general').attr("clueColor");
		generalStyles.contentHeaderColor = theTextProps.children('general').attr("contentHeaderColor");
		generalStyles.contentBodyColor = theTextProps.children('general').attr("contentBodyColor");
		generalStyles.bodyColor = theTextProps.children('general').attr("bodyColor");
		generalStyles.btnColorUp = theTextProps.children('general').attr("btnColorUp");
		generalStyles.btnColorOver = theTextProps.children('general').attr("btnColorOver");
		generalStyles.btnColorDown = theTextProps.children('general').attr("btnColorDown");
		maxAttempts = theTextProps.children('general').attr("attempts");
		
		//console.log(letterStyles.textColor,letterStyles.textColorOver,letterStyles.textColorDown)
		
		contentStylessize = contentStyles.size;
		buttonStylessize = buttonStyles.size;
		headerStylessize = headerStyles.size;
		instStylessize = instStyles.size;
		
		
		var that = this;
		//headerActive, arrowColor, headerColor, contentBodyColor, bodyColor, btnColorUp, btnColorDown, btnColorOver, 
		//loop through each button node
		theButtons.children('button').each(function(index) {
			if (jQuery( this ).children('text').text() != "") {
				textArray.push( cleanIt(jQuery( this ).children('text').text().toUpperCase()));	
				buttonArray.push(cleanIt(jQuery( this ).children('buttonContent').text()))//.toUpperCase());	
				imageIDArray.push(that.grabAssetId(jQuery( this ).children('image')));	//grab image id
				soundIDArray.push(that.grabAssetId(jQuery( this ).children('sound')));	//grab sound id		
				buttonXArray.push(jQuery( this ).children('buttonLocX').text());	
				picAlignArray.push(jQuery( this ).children('image').attr("picAlign"));	
			}
		});
		
		wordsArray=textArray//["FIRST", "WORD"];
		questionsArray=buttonArray//["Before second", "Letters go together to form a..."];


		//access other items on the stage
		this.title = resultDoc.find( 'general' ).attr("titleText");
		this.instructions = resultDoc.find( 'general' ).attr("instructionsText");
		
		
		///access audio and images
		
		for (num=0; num < imageIDArray.length; num++) {
			//first check images
			id = imageIDArray[num];	
			if (id != -1) { 
				imageArray[num] = this.movieProps.ExternalResourceLoader.getResourcePath( id )
				imageArray[num] = imageArray[num].replace("index.html", "");
			} else {
				imageArray[num] = -1;
			}
			//then check sound
			id = soundIDArray[num];	
			if (id != -1) { 
				soundArray[num] = this.movieProps.ExternalResourceLoader.getResourcePath( id )
		   		soundArray[num] = soundArray[num].replace("index.html", "");
			} else {
				soundArray[num] = -1;
			}
			
		}
	},
	
	grabAssetId: function(jqueryXMLNode)
	{
		var id = jqueryXMLNode.attr("id");
		if(id == -1)
			return -1;
		var nodeValue = jqueryXMLNode.text();	
		if(nodeValue == "")
			return parseInt(id);				//For captivate
		return nodeValue;						//For presenter
	},	
	
	doUpdate: function() 
	{
		//init the default html values
		//var divHtmlHeader = "<div class='header'><a>aaaa this button to see the response in the drop down box.</a></div>";
		//var divHtmlContent = "<div class='content'>aaaa job! That was easy, wasn't it?</div>";
		
		myWidgetiFrame = getWidgetIFrame();	
		myWidgetiFrameLeft = parseInt(String($($(myWidgetiFrame).parent().parent()).css("left")).replace("px",""));
		myWidgetiFrameTop = parseInt(String($($(myWidgetiFrame).parent().parent()).css("top")).replace("px",""));
		//$(myWidgetiFrame).hide();
		
		var tabHtmlHeader = "<li style='width: percent;'><a href='#placeholder'>Button Label JQuery</a></li>";

		var tabHtmlContent = "<div id='placeholder' class='tab_content' style='display: block;'><p>Testing JQuery</p></div>";
		


		//init the other elements on the page		
		var elem = document.getElementById('intTitle');
		elem.innerHTML = this.title;
		elem = document.getElementById('intInstructions');
		elem.innerHTML = this.instructions;
				
				
				
		var button_elem;
		var body;
		var tabCount = textArray.length;
		var header
		//600, 14, 4
		var tabWidthPercentage
		if (tabCount == 2) {
			tabWidthPercentage = 560 / tabCount;
		} else if (tabCount == 3) {
			tabWidthPercentage = 530 / tabCount;
		} else if (tabCount == 4) {
			tabWidthPercentage = 510 / tabCount;
		}
		if (currentTheme == 3) { tabWidthPercentage = 100 } 
		//(1 / tabCount * 100) - 2;
		if (currentTheme == 2) { tabWidthPercentage -= 5 } 
		
		//	for (var i = 0; i < nodeCount; i++) {
		//$("#Timeline_Container").append("<div id='" + i + "' class='timelineNode' style='left: " + nodeLeftProperty[i] + "'>" + timelineLabel[i] + "</div>");
	
	//tabs_container
	//--> .timlineNode or id 1
	//--> id=tab1, .tab_content
	
	var leftPos;
		//alert(tabWidthPercentage);
		jQuery.each(textArray, function(index, value) {
			button_elem = document.getElementById('canvasWordList');
		  	button_elem.innerHTML += "<div class='clues' id='" + index + "'>"+'<div id=img'+index+' style="left:-15px; top:-5px; position:relative; float:left; visibility:hidden;">'+'<img src="images/crct.png" style="width:'+(parseInt(contentStyles.size*2))+'px; position:absolute;"/></div>' + '<div id=txt'+index+' style="left:'+(parseInt(contentStyles.size)+(parseInt(contentStyles.size)/2))+'px; position:relative; width:150px;">'+buttonArray[index]+ "</div>" + "</div>";			
		});	
		
		button_elem = document.getElementById('endGameScreen');
		button_elem.innerHTML = "<p style='font-family:Arial'>" + cluesStyles.titletxt + "</p>"
		button_elem.innerHTML += "<p style='font-family:Arial'>" + cluesStyles.bodytxt + "</p>"
		
		
		
		changeTheme("themes/wordsearchTheme" + currentTheme + ".css", "themes/headerTheme" + currentTheme + ".css" );
		setupCustomStyles();
		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".clues", contentStyles)
		//setupStyle("#Search_Result_Container", contentStyles)
		//setupStyle("#Search_Result_Container", letterStyles)
		
		//setupStyle(".tab_content", contentStyles)
		
		//getKeys();
    	//populateGlossary();
		firstLoad = true;
		resizeInteraction(width,height);
		addClickHandlers(); //setup the click handlers
		setup();
		updateSizeNPositionOnResizeComplete()
	}
};

var firstLoad = false;

wordsearch_use = function (){
	return wordsearchUse1;
}
	
function updateSizeNPositionOnResizeComplete(){
	firstLoad = false;
	resizeInteraction(width,height);
}