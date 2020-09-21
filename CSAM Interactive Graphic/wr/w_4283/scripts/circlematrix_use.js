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
var buttonRowArray = []; 
var buttonColumnArray = [];
var color;
var face;
var style;
var size;
var align;
var myWidgetiFrame, myFrameName;
var contentStyles = new Object();
var buttonStyles = new Object();
var headerStyles = new Object();
var instStyles = new Object();
var generalStyles = new Object();
var width
var height
var handle

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;
var scalefont;

var contentStylessize;
var buttonStylessize;
var headerStylessize;
var instStylessize;

var firstLoad = false;
var myWidgetiFrameLeft,myWidgetiFrameTop

circlematrixUse1 = {
	onLoad: function()
	{
		if ( ! this.captivate )
			return;
		
				handle = this.captivate.CPMovieHandle;
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
		var theButtonProps = resultDoc.find( 'buttonLabel' );
		var theHeaderProps = resultDoc.find( 'headerTitle' );
		var theInstProps = resultDoc.find( 'headerInst' );
		currentTheme = theTextProps.children('general').attr("themeNum");
		
		var getscalefont = initresultDoc.find('#scaleFonts');
        if (getscalefont){
            if (getscalefont.find('string')){
                scalefont = getscalefont.find('string').text();
            }
        }
		
		//setup styles
		contentStyles.color = theContentProps.children('color').attr("textColor");
		contentStyles.face = theContentProps.children('font').attr("face");
		
		contentStyles.italic = theContentProps.children('textDecoration').attr("italic");
		contentStyles.bold = theContentProps.children('textDecoration').attr("bold");
		//contentStyles.style = theContentProps.children('font').attr("style");
		
		contentStyles.size = theContentProps.children('font').attr("size");
		contentStyles.align = theContentProps.children('font').attr("align");
		
		buttonStyles.color = theButtonProps.children('color').attr("textColor");
		buttonStyles.textOver = theButtonProps.children('color').attr("textOver");
		buttonStyles.textDown = theButtonProps.children('color').attr("textDown");
		buttonStyles.face = theButtonProps.children('font').attr("face");
		buttonStyles.italic = theButtonProps.children('textDecoration').attr("italic");
		buttonStyles.bold = theButtonProps.children('textDecoration').attr("bold");
		//buttonStyles.style = theButtonProps.children('font').attr("style");
		buttonStyles.size = theButtonProps.children('font').attr("size");
		buttonStyles.align = theButtonProps.children('font').attr("align");		
		
		headerStyles.color = theHeaderProps.children('color').attr("textColor");
		headerStyles.face = theHeaderProps.children('font').attr("face");
		headerStyles.italic = theHeaderProps.children('textDecoration').attr("italic");
		headerStyles.bold = theHeaderProps.children('textDecoration').attr("bold");
		//headerStyles.style = theHeaderProps.children('font').attr("style");
		headerStyles.size = theHeaderProps.children('font').attr("size");
		headerStyles.align = theHeaderProps.children('font').attr("align");		
		
		instStyles.color = theInstProps.children('color').attr("textColor");
		instStyles.face = theInstProps.children('font').attr("face");
		instStyles.italic = theInstProps.children('textDecoration').attr("italic");
		//instStyles.style = theInstProps.children('font').attr("style");
		instStyles.size = theInstProps.children('font').attr("size");
		instStyles.align = theInstProps.children('font').attr("align");				

		generalStyles.headerActive = theTextProps.children('general').attr("headerActive");
		//generalStyles.arrowColor = theTextProps.children('general').attr("arrowColor");
		generalStyles.headerColor = theTextProps.children('general').attr("headerColor");
		generalStyles.contentBodyColor = theTextProps.children('general').attr("contentBodyColor");
		
		generalStyles.bodyColor = theTextProps.children('general').attr("bodyColor");
		generalStyles.btnColorUp = theTextProps.children('general').attr("btnColorUp");
		generalStyles.btnColorOver = theTextProps.children('general').attr("btnColorOver");
		generalStyles.btnColorDown = theTextProps.children('general').attr("btnColorDown");
		
		contentStylessize = contentStyles.size;
		buttonStylessize = buttonStyles.size;
		headerStylessize = headerStyles.size;
		instStylessize = instStyles.size;
		
/*
<button themeLabel="0" style="AeroArrow" txtRotationPos="0" a="1" b="0" c="0" d="1" tx="127.5" ty="100" arrowHead="38" arrowTail="31" fillColorRequired="false" fillColor="0xffffcc" borderColorRequired="false" borderColor="0xff9933" order="1">'
myData += '<text visible="true" width="170" height="20" a="1" b="0" c="0" d="1" tx="42" ty="138">Button Label 4</text>'
myData += '<buttonContent visible="true" picAlign="right" 

*/
		var that = this;
		//headerActive, arrowColor, headerColor, contentBodyColor, bodyColor, btnColorUp, btnColorDown, btnColorOver, 
		//loop through each button node
		theButtons.children('button').each(function(index) {
			textArray.push(cleanIt(jQuery( this ).children('text').text()));	
			buttonArray.push(cleanIt(jQuery( this ).children('buttonContent').text()));	
			imageIDArray.push(that.grabAssetId(jQuery( this ).children('image')));	//grab image id
			soundIDArray.push(that.grabAssetId(jQuery( this ).children('sound')));	//grab sound id		
			buttonRowArray.push(jQuery( this ).children('brow').text());	
			buttonColumnArray.push(jQuery( this ).children('bcolumn').text());	
			picAlignArray.push(jQuery( this ).children('buttonContent').attr("picAlign"));			
		});
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
	
	doUpdate: function() {
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
			leftPos = parseInt(buttonXArray[index] - 50); //100 is the offset to even it out
		//	button_elem = document.getElementById('tabs_container');
		  //	button_elem.innerHTML += "<li><a style='width: " + tabWidthPercentage + "px' href='#tab" + index + "' id='" + index + "'>" + textArray[index] + "</a></li>";			
			//textArray[index]
			//button_elem.innerHTML += "<div id='" + index + "' class='timelineNode' style='position:absolute; left: " + leftPos + "px'> </div>";			
			//add content first 
			button_elem = document.getElementById('textBox');
		
			//check if image exists
			if (imageArray[index] == "-1") { 
				button_elem.innerHTML += "<div id='tab" + index + "' class='tab_content' style='display: none;'><div class='title'>" + textArray[index] + "</div><p>" + buttonArray[index] + "</p></div>";				
		   } else {  
				button_elem.innerHTML += "<div id='tab" + index + "' class='tab_content' style='height: 100px; display: none;'><p><img width='150' align='" + picAlignArray[index] + "' height='100' src='" + imageArray[index] + "'/>" + buttonArray[index] + "</div> ";
			
		   }
 		 });	
		changeTheme("themes/circlematrixTheme" + currentTheme + ".css", "themes/headerTheme" + currentTheme + ".css" );
		setupCustomStyles();
		setupStyle("#intTitle", headerStyles)
		setupStyle("#intInstructions", instStyles)
		setupStyle(".tab_content p", contentStyles)
		setupStyle(".title", buttonStyles)
		createKineticStage();	
		firstLoad = true;
		resizeInteraction(width,height);
		initPyramid(); //setup the click handlers
		//addClickHandlers();
		setTimeout(function(){
			firstLoad = false;
			resizeInteraction(width,height);
		},100);		
	}
};


circlematrix_use = function (){
	return circlematrixUse1;
}
		
function updateSizeNPositionOnResizeComplete(){
	firstLoad = false;
	resizeInteraction(width,height);
}