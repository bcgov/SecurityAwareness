var _canvasColor='#FFFFFF';

/*pyramid color*/
var _pyramidColor='#015169';
var _circleColor='#FFF';
var _pyramidOverColor='#2bb2c7';
var _pyramidDownColor='#077f98';

/*switch for when an area is active*/
var _active=-1;
var grad,grad1,grad2,grad3
var theobj;
var numarray = new Array();

/*---------------------------------------------------------------------------------------init */
function overContent(btnID2, newgrad) {
	var tester = layer.getChildren();
	layernum = numarray[btnID2]*4 + 1;

	oldobj = tester[layernum]
	oldobj.setFill(newgrad);
	layer.draw();
	
}


function showContent(obj, btnID) {
	
	if (String(btnID).length == 2) {
		btnID = Number(btnID.substr(0,1));
	}			 
	
	//check if old button clicked
	var tester = layer.getChildren();
	//var layernum = btnClicked*4 + 1;
	if (btnClicked != -1) {
		var layernum = numarray[btnClicked]*4 + 1;
		theobj = tester[layernum]
		 theobj.setFill(grad);
		 layer.draw();
	}
	
	_active=btnID;		  
	btnClicked = btnID
	layernum = numarray[btnID]*4 + 1;
	theobj = tester[layernum]//btnID*4 + 1]
	theobj.setFill(grad2);
	layer.draw();
	//alert(btnID);
	$(".tab_content").hide(); //hide all
	var selected_tab = $(".tab_content").eq(btnID); //$(this).find("tab"+btnClicked);//.attr("href");
	$(selected_tab).fadeIn(function() {
		pauseSound();
			if (soundArray[btnClicked] != "-1") {
				setTimeout("play_sound(soundArray[btnClicked])",50);
			}		
   });	
}

var stage;
var layer;
/*declare new stage*/
function createKineticStage(){
	
	if(isPresenter){
		stage = new Kinetic.Stage({
			container: "pyramidHolder",
			width: 700,
			height: 700
		});
	}else{
		stage = new Kinetic.Stage({
			container: "pyramidHolder",
			width: 450,
			height: 450
		});
	}

	/*declare ne wlayer to draw on*/
	layer = new Kinetic.Layer();
}
	
function initPyramid(){
		var pyramidPoints = [];
		var effectPoints = [];
		var pyramid = new Array();
		circlePoints = new Array()
		textPoints = new Array();
		
		var container = new Array();
		var naming = new Array();
		
		//0112
		//0011
		for (var row=1; row < buttonRowArray.length; row++) {
			theRow = buttonRowArray[row];
			theColumn = buttonColumnArray[row]
			
			if (container[theRow] == undefined) { //make sure array doesn't already exist
				container[theRow] = new Array();
			}
			container[theRow].push(theColumn) // = [1,2];
			
		}
		
		//loop through to assigning naming
		for (var row=1; row < buttonRowArray.length; row++) {
			theRow = buttonRowArray[row];
			theColumn = buttonColumnArray[row]
			startPoint = 1;
			for (x = 1; x < theRow; x++) {
				startPoint += container[x].length;
			}
			placement = startPoint + parseInt(theColumn)
			naming[placement] = row;
			
			numarray[row] = placement;
		}
		numarray[0] = 0;
		
		
		
		
		//data
		/*
		var container = new Array();
			//temp inputs
			container[0] = [1];
			container[1] = [1];
			container[2] = [1,2,4];
			container[3] = [1];
			container[4] = [1,2];
		*/
		//colors
		
		//Dimensions
		var circleRadius = 155;
		var pwidth = 100;
		var pheight = 100;
		var originX = 175;
		var originY = 175;
			ttlBtns = container.length;
		var ttlCol;
		
		var style = 0;
		var colorOneUp;
		var colorTwoUp;
		var colorOneOver;
		var colorTwoOver;
		var colorOneDown;
		var colorTwoDown;
		var alpha;
		//var test = 11;
		//	alert("theme: " + currentTheme);
		currentTheme = parseInt(currentTheme);
			
		switch(currentTheme){
		case 1:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';			
			alpha=.75;
			break;
		case 2:
			style=3;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 3:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95;
			break;
		case 4:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 5:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 6:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			break;
		case 7:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 8:
			style=5;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 9:
			style=5;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 10:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = 'black';
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 11:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';
			alpha=.75;
			break;
		case 12:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 13:
			style=5;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 14:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';
			alpha=.75;
			break;
		case 15:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 16:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.75;
			break;
		case 17:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';
			alpha=.75;
			break;
		}
		
		switch(style){
		case 1: //horizontal
			var ctx = layer.getContext("2d");
			//grad = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad.addColorStop(.25,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
						
			//grad2 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad2 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad2.addColorStop(.25,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			//grad3 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad3 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad3.addColorStop(.25,colorOneOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;	
			break;	
		break;
		case 2: //vertical
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(-150, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(-150, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(-150, 0+(1)*pheight/ttlBtns, 400, 0+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
		case 3: //metallic
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.3,colorOneUp);
			grad.addColorStop(.4,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.3,colorOneDown);
			grad2.addColorStop(.4,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.3,colorOneOver);
			grad3.addColorStop(.4,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
		case 4: //slanted two
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.5,colorOneUp);
			grad.addColorStop(.6,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.5,colorOneDown);
			grad2.addColorStop(.6,colorTwoDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.5,colorOneOver);
			grad3.addColorStop(.6,colorTwoOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
		case 5: //metallic
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.2,colorOneUp);
			grad.addColorStop(.6,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.2,colorOneDown);
			grad2.addColorStop(.6,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.2,colorOneOver);
			grad3.addColorStop(.6,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
	}
		
		//SETUP THE TOP PORTION
		thisPoint = [{
				  x: originX,
				  y: originY
				}, {
				  x: originX+(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX-(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX,
				  y: originY
				}];
			
			thisPyramid = new Kinetic.Shape({
			  drawFunc: function() {
				var context = this.getContext();
				
				var innerRadius = 0;
				var outerRadius = circleRadius/ttlBtns;
				var startAngle = 0;
				var endAngle = 360;
				
				//grd = context.createRadialGradient(40, 40, 0, 50,50,30);
				//grd.addColorStop(.2,"red");
				//grd.addColorStop(0.5,"green");
				//grd.addColorStop(1,"blue");
				
				context.beginPath();
				context.moveTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
				
				for(var num=startAngle;num<=endAngle;num++){
					context.lineTo(originX+outerRadius*Math.cos(num*Math.PI/180),originY+outerRadius*Math.sin(num*Math.PI/180));
				}

				this.fillStroke();
			  },
			  fill: _pyramidColor,
			  stroke: "white",
			  strokeWidth: 2,
			  name:0
			});
			
			thisEffect = new Kinetic.Shape({
			  drawFunc: function() {
				var context = this.getContext();
				
				var innerRadius = 0;
				var outerRadius = circleRadius/ttlBtns;
				var startAngle = 0;
				var endAngle = 360;
				
				
				context.beginPath();
				context.moveTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
				
				for(var num=startAngle;num<=endAngle;num++){
					context.lineTo(originX+outerRadius*Math.cos(num*Math.PI/180),originY+outerRadius*Math.sin(num*Math.PI/180));
				}
				this.fillStroke();
			  },
			  fill: grad,
			  stroke: "white",
			  strokeWidth: 2,
			  name:0
			});
			
			thisEffect.setAlpha(alpha);
			
			thisEffect.on("mouseout", function() {
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad);
			   }
			});			
			
			thisEffect.on("mouseover", function() {					   
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad3);
			   }
			});
			
			thisEffect.on("mousedown touchstart", function() {
			  showContent(this, this.getName());
			});
			
			pyramidPoints[0] = thisPyramid;
			effectPoints[0] = thisEffect;
			
			/*construct circle to display number*/
			thisCircle = new Kinetic.Circle({
			  x: originX,
			  y: originY,
			  radius: circleRadius/ttlBtns*1.2/5,
			  fill: _circleColor,
			  name:00
			});
			
			thisCircle.on("mousedown touchstart", function() {		  
					showContent(this, this.getName());
			});
			thisCircle.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisCircle.on("mouseover", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
					
			circlePoints[0] = thisCircle;
			/*construct number to show inside circle*/
			thisText = new Kinetic.Text({
			  x: originX,
			  y: originY,
			  text: "1",
			  fontSize: 11,
			  fontFamily: "Arial",
			  textFill: "#111111",
			  align: "center",
			  verticalAlign: "middle",
			  name:00
			});
			
			
			thisText.on("mousedown touchstart", function() {		  
				showContent(this, this.getName());
			});
			thisText.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisText.on("mouseover", function() {
				var circNum = this.getName();

				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
					
			textPoints[0] = thisText;
			

			
			////////////////////////////////////////////////////////////////////////////////////
			
		var counter = 1;
		//calculating positions
			//Y positioning for top and bot slice
		var topSideY;
		var botSideY;
			//width of top and bottom slice total
		var topSideW;
		var botSideW;
			//top and bottom edge slice width
		var topSidePW;
		var botSidePW;
			//coordinates
		var botLeft;
		var botRight;
		var topLeft;
		var topRight;
		var midW;
		
		var midAngle;
		var midRadius;
		
		var innerNum = 0;
		
		//LOOP THROUGH OTHER LAYERS
		for (var num=1; num < (container.length); num++) {
			(function(){
			var outerNum = num;
			var ttlCols = container[outerNum].length;
			for(var ntwo=0;ntwo<ttlCols;ntwo++){
				(function(){
					var innerNum=ntwo;
					thisPoint = pyramidPoints[counter];
					thisItem = pyramid[counter];
					
						//Calculations
					topSideY = outerNum*circleRadius/ttlBtns;
					botSideY = (outerNum+1)*circleRadius/ttlBtns
						//top and bottom edge slice width
					topSidePW = 360/ttlCols;
					botSidePW = 360/ttlCols;
						//coordinates
					botLeft = botSidePW*innerNum;
					botRight = botSidePW*(innerNum+1);
					topLeft = topSidePW*innerNum;
					topRight = topSidePW*(innerNum+1);
					
					midW=-(num+.5)*pwidth/ttlBtns + (num+.5)*pwidth/ttlBtns*2/ttlCols * (innerNum+.5);

					innerRadius = topSideY;
					outerRadius = botSideY;
					startAngle = topLeft;
					endAngle = topRight;
					
					midAngle = botLeft+(botRight - botLeft)/2;
					midRadius = innerRadius + (outerRadius - innerRadius)/2;
					
					//Drawing the slice

					switch(style){
						case 1: //horizontal
							var ctx = layer.getContext("2d");
							//grad = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
							grad = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
							grad.addColorStop(.25,colorOneUp);
							grad.addColorStop(1,colorTwoUp);
							ctx.fillStyle=grad;	
						
							//grad2 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
							grad2 = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
							grad2.addColorStop(.25,colorOneDown);
							grad2.addColorStop(1,colorTwoDown);
							ctx.fillStyle=grad2;	
						
							//grad3 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
							grad3 = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
							grad3.addColorStop(.25,colorOneOver);
							grad3.addColorStop(1,colorTwoOver);
							ctx.fillStyle=grad3;	
							
							break;
						case 2: //vertical
							var ctx = layer.getContext("2d");
							grad = ctx.createLinearGradient(-150, 0+(outerNum+1)*pheight/ttlBtns, 400, 0+(outerNum+1)*pheight/ttlBtns);
							grad.addColorStop(0,colorOneUp);
							grad.addColorStop(1,colorTwoUp);
							ctx.fillStyle=grad;	
							grad2 = ctx.createLinearGradient(-150, 0+(outerNum+1)*pheight/ttlBtns, 400, 0+(outerNum+1)*pheight/ttlBtns);
							grad2.addColorStop(0,colorOneDown);
							grad2.addColorStop(1,colorTwoDown);
							ctx.fillStyle=grad2;	
							grad3 = ctx.createLinearGradient(-150, 0+(outerNum+1)*pheight/ttlBtns, 400, 0+(outerNum+1)*pheight/ttlBtns);
							grad3.addColorStop(0,colorOneOver);
							grad3.addColorStop(1,colorTwoOver);
							ctx.fillStyle=grad3;	
							break;
						case 3: //metallic
							var ctx = layer.getContext("2d");
							grad = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
							grad.addColorStop(0,colorOneUp);
							grad.addColorStop(.3,colorOneUp);
							grad.addColorStop(.4,colorTwoUp);
							ctx.fillStyle=grad;	
							grad2 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
							grad2.addColorStop(0,colorOneDown);
							grad2.addColorStop(.3,colorOneDown);
							grad2.addColorStop(.4,colorTwoDown);
							ctx.fillStyle=grad2;	
							grad3 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+160-(1)*pheight/ttlBtns);
							grad3.addColorStop(0,colorOneOver);
							grad3.addColorStop(.3,colorOneOver);
							grad3.addColorStop(.4,colorTwoOver);
							ctx.fillStyle=grad3;
							break;
						case 4: //none
							var ctx = layer.getContext("2d");
							grad = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
							grad.addColorStop(0,colorOneUp);
							grad.addColorStop(.5,colorOneUp);
							grad.addColorStop(.6,colorTwoUp);
							grad.addColorStop(1,colorTwoUp);
							ctx.fillStyle=grad;	
							grad2 = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
							grad2.addColorStop(0,colorOneDown);
							grad2.addColorStop(.5,colorOneDown);
							grad2.addColorStop(.6,colorTwoDown);
							grad2.addColorStop(1,colorTwoDown);
							ctx.fillStyle=grad2;	
							grad3 = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
							grad3.addColorStop(0,colorOneOver);
							grad3.addColorStop(.5,colorOneOver);
							grad3.addColorStop(.6,colorTwoOver);
							grad3.addColorStop(1,colorTwoOver);
							ctx.fillStyle=grad3;
							break;
						case 5: //8 and 9
							var ctx = layer.getContext("2d");
							grad = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
							grad.addColorStop(0,colorOneUp);
							grad.addColorStop(.2,colorOneUp);
							grad.addColorStop(.6,colorTwoUp);
							ctx.fillStyle=grad;	
							grad2 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
							grad2.addColorStop(0,colorOneDown);
							grad2.addColorStop(.2,colorOneDown);
							grad2.addColorStop(.6,colorTwoDown);
							ctx.fillStyle=grad2;	
							grad3 = ctx.createLinearGradient(0, originY-(1)*pheight/ttlBtns, 0, originY+180-(1)*pheight/ttlBtns);
							grad3.addColorStop(0,colorOneOver);
							grad3.addColorStop(.2,colorOneOver);
							grad3.addColorStop(.6,colorTwoOver);
							ctx.fillStyle=grad3;
							break;
						}
					
					thisPyramid = new Kinetic.Shape({
					  drawFunc: function() {
					  
						topSideY = outerNum*circleRadius/ttlBtns;
						botSideY = (outerNum+1)*circleRadius/ttlBtns
						innerRadius = topSideY;
						outerRadius = botSideY;
						
						topSidePW = 360/ttlCols;
						botSidePW = 360/ttlCols;
							//coordinates
						botLeft = botSidePW*innerNum;
						botRight = botSidePW*(innerNum+1);
						topLeft = topSidePW*innerNum;
						topRight = topSidePW*(innerNum+1);
						
						startAngle = topLeft;
						endAngle = topRight;
					
						var context = this.getContext();
						context.beginPath();
						//context.moveTo(0,0+num*10);
						//context.lineTo(100,0);
						//context.lineTo(100+ntwo*10,100);
						//context.lineTo(0,0+num*10);
						//ring code -----------------------------------------------------------------------
						context.moveTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
						for(var numm=startAngle;numm<=endAngle;numm++){
							context.lineTo(originX+outerRadius*Math.cos(numm*Math.PI/180),originY+outerRadius*Math.sin(numm*Math.PI/180));
						}
						if(startAngle==0&&endAngle==360){
							context.moveTo(originX+innerRadius*Math.cos(0*Math.PI/180),originY+innerRadius*Math.sin(0*Math.PI/180));
						}
						for(var mun=endAngle;mun>=startAngle;mun--){
							context.lineTo(originX+innerRadius*Math.cos(mun*Math.PI/180),originY+innerRadius*Math.sin(mun*Math.PI/180));
						}
						if(startAngle!=0&&endAngle!=360){
							context.lineTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
						}
						//--------------------------------------------------------------------------
						context.closePath();
						this.fillStroke();
					  },
					  fill: _pyramidColor,
					  stroke: "white",
					  strokeWidth: 2,
					  name: naming[counter]
					});
					
					thisEffect = new Kinetic.Shape({
					  drawFunc: function() {
					  
						topSideY = outerNum*circleRadius/ttlBtns;
						botSideY = (outerNum+1)*circleRadius/ttlBtns
						innerRadius = topSideY;
						outerRadius = botSideY;
						
						topSidePW = 360/ttlCols;
						botSidePW = 360/ttlCols;
							//coordinates
						botLeft = botSidePW*innerNum;
						botRight = botSidePW*(innerNum+1);
						topLeft = topSidePW*innerNum;
						topRight = topSidePW*(innerNum+1);
						
						startAngle = topLeft;
						endAngle = topRight;
					
						var context = this.getContext();
						context.beginPath();
						//context.moveTo(0,0+num*10);
						//context.lineTo(100,0);
						//context.lineTo(100+ntwo*10,100);
						//context.lineTo(0,0+num*10);
						//ring code -----------------------------------------------------------------------
						context.moveTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
						for(var numm=startAngle;numm<=endAngle;numm++){
							context.lineTo(originX+outerRadius*Math.cos(numm*Math.PI/180),originY+outerRadius*Math.sin(numm*Math.PI/180));
						}
						if(startAngle==0&&endAngle==360){
							context.moveTo(originX+innerRadius*Math.cos(0*Math.PI/180),originY+innerRadius*Math.sin(0*Math.PI/180));
						}
						for(var mun=endAngle;mun>=startAngle;mun--){
							context.lineTo(originX+innerRadius*Math.cos(mun*Math.PI/180),originY+innerRadius*Math.sin(mun*Math.PI/180));
						}
						if(startAngle!=0&&endAngle!=360){
							context.lineTo(originX+outerRadius*Math.cos(startAngle*Math.PI/180),originY+outerRadius*Math.sin(startAngle*Math.PI/180));
						}
						//--------------------------------------------------------------------------
						context.closePath();
						this.fillStroke();
					  },
					  fill: grad,
					  stroke: "white",
					  strokeWidth: 2,
					  name: naming[counter]
					});
					thisEffect.setAlpha(alpha);
					
					thisEffect.on("mouseout", function() {
					   if (_active!=this.getName()){
						 overContent(this.getName(), grad);
					   }
					});			
					
					
					thisEffect.on("mouseover", function() {
					   if (_active!=this.getName()){
						 overContent(this.getName(), grad3);
					   }
					});
					
					thisEffect.on("mousedown touchstart", function() {
						 showContent(this, this.getName());
		
					});
					
					pyramidPoints[counter] = thisPyramid;
					effectPoints[counter] = thisEffect;
					
					
					newname = String(naming[counter]) + 0;
					
					/*construct circle to display number*/
					thisCircle = new Kinetic.Circle({
					  x: originX+midRadius*Math.cos(midAngle*Math.PI/180),
					  y: originY+midRadius*Math.sin(midAngle*Math.PI/180),
					  radius: circleRadius/ttlBtns*1.2/5,
					  fill: _circleColor,
					  name: newname
					});
					
					thisCircle.on("mousedown touchstart", function() {		  
					 	showContent(this, this.getName());
					});					
					thisCircle.on("mouseout", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
						 overContent(circNum, grad);
					   }
					});			
					
					thisCircle.on("mouseover", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
						 overContent(circNum, grad3);
					   }
					});
					
					
										
										
					circlePoints[counter] = thisCircle;
					
					/*construct number to show inside circle*/
					thisText = new Kinetic.Text({
					  x: originX+midRadius*Math.cos(midAngle*Math.PI/180),
					  y: originY+midRadius*Math.sin(midAngle*Math.PI/180),
					  text: naming[counter]+1,
					  fontSize: 11,
					  fontFamily: "Arial",
			 		  textFill: "#111111",
					  align: "center",
					  verticalAlign: "middle",
					  name: newname
					  
					});
					thisText.on("mousedown touchstart", function() {		  
							showContent(this, this.getName());
						});
					
					thisText.on("mouseout", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
						 overContent(circNum, grad);
					   }
					});			
					
					thisText.on("mouseover", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
						 overContent(circNum, grad3);
					   }
					});
			
			
					textPoints[counter] = thisText;
					counter++;
				}());
			}
			}());
		}		
		
        // add the shapes to the layer
		for (num=0; num <counter; num++) {
        	layer.add(pyramidPoints[num]);
			layer.add(effectPoints[num]);
        	layer.add(circlePoints[num]);
        	layer.add(textPoints[num]);
		}
		
		//layer.add(triangle)

        // add the layer to the stage
		layer.setScale(finalScale);
        stage.add(layer);
		
		//pyramid2();
}

