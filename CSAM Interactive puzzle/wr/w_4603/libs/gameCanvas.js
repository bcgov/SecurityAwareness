if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.changedforHTML = function() {

	this.initialize();

	// gameelements
	this.ge_mc = new lib.ge();
	this.ge_mc.setTransform(420.6,161.2,1.002,1,0,0,0,419.9,159.2);

	this.addChild(this.ge_mc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0.7,-2.7,640.3,481.7);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.text = new createjs.Text(ID_Reset, "13px Tahoma", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 41;
	this.text.setTransform(47,4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.text}]}).wait(4));

	// Layer 1
	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AmpCEINTAAQA1AAAAg1IAAidQAAg1g1AAItTAAQg1AAAAA1IAACdQAAA1A1AAIAAAA").cp();
	this.shape_2.setTransform(47.9,13.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC","#F3F3F3"],[0,0.808,1],45.3,3.4,45.3,-18.4).s().p("AAaAaQgzAAAAgzIAzAz").cp();
	this.shape_3.setTransform(2.6,23.8);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#EEEEEE","#CCCCCC","#F3F3F3"],[0,0.808,1],0,9.5,0,-10.1).s().p("AmpCEIg1g1IAAidIA1g1INTAAIA1A1IAACdQAAA1g1AAItTAA").cp();
	this.shape_4.setTransform(47.9,13.2);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC","#F3F3F3"],[0,0.808,1],-47.8,10.6,47.9,10.6).s().p("AGqgZQA1AAAAAzIg1gzAneAaQAAgzA1AAIg1Az").cp();
	this.shape_5.setTransform(47.9,2.6);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("AmpCEINTAAQA1AAAAg1IAAidAGqiDQA1AAAAA1AnehOIAACdAmpCEQg1AAAAg1AmpiDQg1AAAAA1AGqiDItTAA");
	this.shape_6.setTransform(47.9,13.2);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.lf(["#EEEEEE","#7CD8FA","#F3F3F3"],[0,0.808,1],0,9.5,0,-10.1).s().p("AmpiDINTAAIA1A1IAACdQAAA1g1AAItTAAIg1g1IAAidIA1g1").cp();
	this.shape_7.setTransform(47.9,13.2);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#EEEEEE","#99FFFF","#F3F3F3"],[0,0.808,1],45.3,3.4,45.3,-18.4).s().p("AAaAaQgzAAAAgzIAzAz").cp();
	this.shape_8.setTransform(2.6,23.8);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#EEEEEE","#99FFFF","#F3F3F3"],[0,0.808,1],-47.8,10.6,47.9,10.6).s().p("AGqgZQA1AAAAAzIg1gzAneAaQAAgzA1AAIg1Az").cp();
	this.shape_9.setTransform(47.9,2.6);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AmpCEINTAAQA1AAAAg1IAAidQAAg1g1AAItTAAQg1AAAAA1IAACdAmpCEQg1AAAAg1");
	this.shape_10.setTransform(47.9,13.2);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","#CCCCCC","#F3F3F3"],[0,0.808,1],-47.8,10.6,47.9,10.6).s().p("AmpgZIg1AzQAAgzA1AAIAAAAAGqgZQA1AAAAAzIg1gz").cp();
	this.shape_11.setTransform(47.9,2.6);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#EEEEEE","#CCCCCC","#F3F3F3"],[0,0.808,1],0,9.5,0,-10.1).s().p("AmpiDINTAAIA1A1IAACdQAAA1g1AAItTAAIg1g1IAAidIA1g1").cp();
	this.shape_12.setTransform(47.9,13.2);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_4},{t:this.shape_3},{t:this.shape_10}]},1).to({state:[{t:this.shape_5},{t:this.shape_12},{t:this.shape_3},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,95.8,27.1);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.titletext = new createjs.Text("", "40px Tahoma");
	this.titletext.textAlign = "left";
	this.titletext.lineHeight = 52;
	this.titletext.setTransform(-220,-31.8);

	this.addChild(this.titletext);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,-31.8,10.2,76.9);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 2
	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0)").s().p("Eg+dgxCMB87AAAMAAABiFMh87AAAMAAAhiF").cp();
	this.shape_13.setTransform(0.4,-5.8,1,0.956);

	// Layer 1 (mask)
	var mask = new createjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+jgu2MB9HAAAMAAABdtMh9HAAAMAAAhdt").cp();

	this.addChild(this.shape_13);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-399.5,-305.9,800,600);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_14.setTransform(40,11);

	this.addChild(this.shape_14);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,80,22);


(lib.flcontainersUILoader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// avatar
	this.instance = new lib.Component_avatar();
	this.instance.setTransform(50,50,1.25,4.545,0,0,0,40,11);

	this.timeline.addTween(createjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,100,100);


// symbols:
(lib.time_txt = function() {
	this.initialize();

	// Layer 1
	this.timetext = new createjs.Text(ID_Time, "13px Tahoma");
	this.timetext.textAlign = "left";
	this.timetext.lineHeight = 17;
	this.timetext.setTransform(0,-5);

	this.addChild(this.timetext);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,42.4,13.1);


(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.447)").s("rgba(51,51,51,0.188)").ss(1,1,1).p("AGixbItDAAQgQAAgPACIiyAAIAAfjQAABXA8A9QA+A+BXAAIQUAAIAAjMQAAgDAAgDQAAgEAAgOIAA8BQAAhXg9g+Qg9g9hXAAIAAAA").cp();
	this.shape_1.setTransform(62.8,111.6);

	this.addChild(this.shape_1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,125.6,223.3);


(lib.score_txt = function() {
	this.initialize();

	// Layer 1
	this.scoretext = new createjs.Text(ID_Score, "13px Tahoma");
	this.scoretext.textAlign = "left";
	this.scoretext.lineHeight = 17;
	this.scoretext.setTransform(0,-5);

	this.addChild(this.scoretext);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,49.7,13.3);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Symbol18("synched",0);
	this.instance.setTransform(0,-6.5,1,1,0,0,0,62.8,111.6);

	// Layer 1
	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f().s("rgba(51,51,51,0.188)").ss(1,1,1).p("ApyAAITlAA");
	this.shape_3.setTransform(0,-75.7);

	this.addChild(this.shape_3,this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-62.8,-118.2,125.6,223.3);


(lib.THEME = function() {
	this.initialize();

	// Layer 2
	this.time_txt = new lib.time_txt();
	this.time_txt.setTransform(26,15.4,1,1,0,0,0,21.2,6.5);

	this.score_txt = new lib.score_txt();
	this.score_txt.setTransform(30,49.2,1,1,0,0,0,24.8,6.7);

	this.instance_1 = new lib.Tween1();
	this.instance_1.setTransform(55,97.8,0.876,0.876);

	this.addChild(this.instance_1,this.score_txt,this.time_txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-0.1,-5.8,110.2,195.7);


(lib.ge = function() {


	this.initialize();

	// Hint
	this.hint = new lib.flcontainersUILoader();
	this.hint.setTransform(558,384.6,0.974,0.849,0,0,0,50,50);

	// Layer 9
	this.reset = new lib.Symbol7();
	this.reset.setTransform(558,449.3,1,1,0,0,0,47.9,13.2);

	// Layer 1
	this.enterscore = new createjs.Text("", "13px Tahoma","#666666");
	this.enterscore.textAlign = "right";
	this.enterscore.lineHeight = 18;
	this.enterscore.lineWidth = 50;
	this.enterscore.setTransform(602,315.5,1,1);

	this.entertimemin = new createjs.Text("", "13px Tahoma","#666666");
	this.entertimemin.textAlign = "center";
	this.entertimemin.lineHeight = 18;
	this.entertimemin.lineWidth = 39;
	this.entertimemin.setTransform(570,282,1,1);
	
	this.text_1 = new createjs.Text(":", "13px Tahoma","#666666");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.setTransform(582,282,1,1);

	this.entertimesec = new createjs.Text("", "13px Tahoma","#666666");
	this.entertimesec.textAlign = "center";
	this.entertimesec.lineHeight = 18;
	this.entertimesec.lineWidth = 39;
	this.entertimesec.setTransform(596,282,1,1);

	this.nm = new lib.Symbol5();
	this.nm.setTransform(180,53,0.702,0.69);

	// Time
	this.theme = new lib.THEME();
	this.theme.setTransform(558,375,1,1,0,0,0,55,97.8);

	this.addChild(this.theme,this.nm,this.enterscore,this.reset,this.entertimemin,this.text_1,this.entertimesec);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0.7,-4.7,639.3,481.7);
