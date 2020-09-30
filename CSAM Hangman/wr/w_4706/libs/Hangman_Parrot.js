(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.addbutton = function() {
	this.spriteSheet = ss["Hangman_Parrot_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.adddeactive = function() {
	this.spriteSheet = ss["Hangman_Parrot_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.deactivatebutton = function() {
	this.spriteSheet = ss["Hangman_Parrot_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.removebutton = function() {
	this.spriteSheet = ss["Hangman_Parrot_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.thumbnail = function() {
	this.spriteSheet = ss["Hangman_Parrot_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wing1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006633").ss(1,1,1).p("AI4qyIGGAoQAUA5haAmIAMANIAXAYQANBLhsAIQErBHC8ClQgGAqhBgNAH9g2QAAAAABABIgCgCIABABQh7gZhThqAGQB5IgHgDQAAABABABQADAAADABIBIAiQCYArAJhkQgdhAhfhYAH+g1IDEBkALSihIACACIE3BcIAIACQBcAFAShBQglg9hXgcQjFgDizhiAQShBQAAAAABAAALDAvQCbAfApg8QgmhliNhMATbiqIjXgtIABABALJilQiCgOiCh0AI9qyQmOhlmVBdIgOAAQkNAniOCkQg6BAg2AuQiyCWiAgsABxA/QBOB4BYA3IAYAAADGFIQBxAZgrhzIALAAAwykYQhLBfg0BlQjBF0CJG+QFCAoExh+ABeF3QACgBADgBIADADQBFAlAZhWQh4hJg/iNAhpB7QA4CvCPBNAp1KIQHuhuhMlgQBzD2C+g5ADpgZQA+B1BjAcAEvDuQCLAYgwiO");
	this.shape.setTransform(131.5,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AACABIgEgBIAFABIgBAAg");
	this.shape_1.setTransform(235.5,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#004F00"],[0,1],-77.6,16.9,0,-77.6,16.9,190.1).s().p("Aw5E/QA0hlBMhfIAAABQCBAsCxiWQA2gsA7hAQCOikEMgnIAPAAQGVhdGNBlIgFAAIGGAoQAVA5hbAmIAMANIgHAGQsxgzmVBdIgPAAQiYAWg+ApQg/AogLAaQgMAZi0CgQiABxiJAAQg3AAg5gTg");
	this.shape_2.setTransform(119.5,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00B700").s().p("AlBGHIAYgBIABABgAEjl/IAHgHIAYAZg");
	this.shape_3.setTransform(191.7,59.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#004F00"],[0,1],-119.6,43.9,0,-119.6,43.9,261.7).s().p("AzpJ/QiJm9DBl0QDEBAC1ifQC0ifALgaQAMgaA+gpQA/gqCYgVIAOAAQGVhdMyAzIAeASQANBKhsAJQErBHC8ClQgGAphBgNIgBABIjXgtIABABQBXAbAlA+QgSBAhcgEIgIgDIk3hbIgCgCIACACQCNBMAmBnQgpA7ibgeIgBAAIjEhnIgCgBIABABQh7gZhThqQBTBqB7AZQBfBaAdA+QgJBkiYgsIhIghIgHgDIABABQhjgag+h2QA+B2BjAaQAwCPiLgZIgYABQhYg3hOh2QBOB2BYA3IgLAAQArByhxgYIgCgCQh4hJg/iMQA/CMB4BJQgZBXhFgmIgDgCIgFABQiPhNg4iuQA4CuCPBNQi+A6hzj3QBMFgnuBuIgBABQjnBfjxAAQhNAAhOgKgALJkDQiCgPiChzQCCBzCCAPgAQFk0QjFgDizhiQCzBiDFADgABeEYIAAAAgAH9iUIAAAAg");
	this.shape_4.setTransform(131.5,83.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,265.1,150.8);


(lib.wing = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006633").ss(1,1,1).p("AI4qyIGGAoQAUA5haAmIAMANIAXAYQANBLhsAIQErBHC8ClQgGAqhBgNAH+g1QgBgBAAAAQBfBYAdBAQgJBkiYgrIhIgiIgHgDQAAABABABQAAABABACQAuCLiKgYIAAAAAH+g1IgCgCIABABQh7gZhThqAGQB5QgDgBgDAAQhjgcg+h1ALCAvIjEhkAQThBQgBAAAAAAALUifQCNBMAmBlQgpA8ibgfALUifIgCgCAQThBIgIgCIk3hcATbiqIjXgtIABABQjFgDizhiALJilQiCgOiCh0AQFjWQBXAcAlA9QgSBBhcgFAwxkXQCAAsCyiWQA2guA6hAQCOikENgnIAOAAQGVhdGOBlAEvDuIgYAAIgLAAQArBzhxgZAEXDuQhYg3hOh4Ap2KIQkxB+lCgoQiJm+DBl0QA0hlBLhfABeF3QACgBADgBIADADQBEAlAahVQAAgBAAAAQh4hJg/iNABeF3Qi+A5hzj2QBMFgnuBuABeF3QiPhNg4iv");
	this.shape.setTransform(131.5,74.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AACABIgEgBIAFABIgBAAg");
	this.shape_1.setTransform(235.5,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00B700").s().p("AlBGHIAYgBIABABgAEjl/IAHgHIAYAZg");
	this.shape_2.setTransform(191.7,59.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#00FF00","#004F00"],[0,1],-77.6,16.9,0,-77.6,16.9,190.1).s().p("Aw5E/QA0hlBMhfIAAABQCBAsCxiWQA2gsA7hAQCOikEMgnIAPAAQGVhdGNBlIgFAAIGGAoQAVA5hbAmIAMANIgHAGQsxgzmVBdIgPAAQiYAWg+ApQg/AogLAaQgMAZi0CgQiABxiJAAQg3AAg5gTg");
	this.shape_3.setTransform(119.5,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#004F00"],[0,1],-119.6,43.9,0,-119.6,43.9,261.7).s().p("AzpJ/QiJm9DBl0QDEBAC1ifQC0ifALgaQAMgaA+gpQA/gqCYgVIAOAAQGVhdMyAzIAeASQANBKhsAJQErBHC8ClQgGAphBgNIgBABIjXgtIABABQBXAbAlA+QgSBAhcgEIgIgDIk3hbIgCgCIACACQCNBMAmBnQgpA7ibgeIgBAAIjEhnIgCgBIABABQBfBaAdA+QgJBkiYgsIhIghIgHgDIABABIABAEQAuCKiKgYIAAAAIgYABQhYg3hOh2QBOB2BYA3IgLAAQArByhxgYIgCgCQh4hJg/iMQA/CMB4BJIAAABQgaBWhEgmIgDgCIgFABQiPhNg4iuQA4CuCPBNQi+A6hzj3QBMFgnuBuIgBABQjnBfjxAAQhNAAhOgKgAGKAZQhjgag+h2QA+B2BjAagAH9iUQh7gZhThqQBTBqB7AZgALJkDQiCgPiChzQCCBzCCAPgAQFk0QjFgDizhiQCzBiDFADgABeEYIAAAAg");
	this.shape_4.setTransform(131.5,83.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,265.1,150.8);


(lib.Symbol37 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ACxCpIlhAAIAAlRIFhAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(2,1,1).p("AACBZIADgGIAAAAQAHgPAEgFQAHgCADgKIA0hbIAAgFIANgWQADgBASgRIgCAAQgIAEANgHQgCABAAABQgBAAAAABAACBZIgCAEAhrhXIgHAAAACBZQgCgBAAgIIgNgRIAAgHIheiPABxhcIjcAF");
	this.shape_1.setTransform(0,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8A5E00").s().p("AiwCpIAAlRIFhAAIAAFRgAAABpIABgEIADgFIABgBQAGgOAFgGQAGgCAEgKIAzhaIAAgGIANgVIAVgSIACgCIABgCIgCgEIjcAGIgGAAIAGAAIBeCPIAAAGIANARQABAIABABg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C89833").s().p("Ag5BQIAIADIgBAAIgDAGQgDgBgBgIgAA6hYIgBACIgCABIgCAAIgDABIAIgEg");
	this.shape_3.setTransform(5.6,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996600").s().p("AgEBVIgMgRIAAgHIhfiPIDdgFIABAEQgMAHAIgEIACAAIgVASIgOAWIAAAFIgzBbQgDAKgHACQgEAFgHAPg");
	this.shape_4.setTransform(0.3,0.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-17.9,37.5,35.8);


(lib.Symbol36 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("EgsHgXaMBYPAAAMAAAAu1MhYPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2A84F").s().p("EgsHAXbMAAAgu1MBYPAAAMAAAAu1g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283.4,-150.9,567,302);


(lib.Symbol35 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Select Questions ", "38px 'Forte'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.setTransform(-2,-22.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.9,-22.8,279.9,45.6);


(lib.Symbol33 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Frequently misspelled words", "25px 'Arial'", "#663300");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.setTransform(-63.9,-15.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("Egj7gCuMBH3AAAIAAFdMhH3AAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89833").s().p("Egj7ACuIAAlbMBH3AAAIAAFbg");

	this.addChild(this.shape_1,this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-231,-18.5,462,37);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("EguKgOPMBcVAAAIAAcfMhcVAAAg");
	this.shape.setTransform(295.5,91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2A84F").s().p("EguKAOQIAA8fMBcVAAAIAAcfg");
	this.shape_1.setTransform(295.5,91.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,593.1,184.5);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("AmHAAIMPAA");
	this.shape.setTransform(45.3,47.2);

	this.txt = new cjs.Text("Time", "13px 'Tahoma'", "#663300");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 15;
	this.txt.lineWidth = 91;
	this.txt.setTransform(43.9,23);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996600").ss(2,1,1).p("AFGlFQCHCIAAC9QAAC/iHCHQiICHi+AAQi9AAiIiHQiHiHAAi/QAAi9CHiIQCIiHC9AAQC+AACICHg");
	this.shape_1.setTransform(46.2,46.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2A84F").s().p("AlFFGQiHiHAAi/QAAi9CHiIQCIiHC9AAQC+AACICHQCHCIAAC9QAAC/iHCHQiICHi+AAQi9AAiIiHg");
	this.shape_2.setTransform(46.2,46.2);

	this.addChild(this.shape_2,this.shape_1,this.txt,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,94.9,94.3);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("AAPUmQg+A/gWiOMAAAgnMQAyhfAwAnQAOAMAPAXQAGAJAGAMMAAAAnMQgfA3gYAYgAAFt/QAAAMgFAJQgDAJgGAAQgFAAgFgJQgFgJAAgMQAAgNAFgJQAFgIAFAAQAGAAADAIQAFAJAAANgAALk3QgBAYgCAoQgDBiAACLQAACJADBiQACA1ADAYQACAVACAAQAFAAADhiQAFhiAAiJQAAiLgFhiQgDhigFAAQgDAAgDAigAAFQQQAAASgFAMQgBANgFAAQgFAAgEgNQgEgMAAgSQAAgRAEgNQAEgMAFAAQAFAAABAMQAFANAAARg");
	this.shape.setTransform(7,133.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3C1E00").s().p("Ag/TXMAAAgnMQAyhfAvAnQAPAMAOAXIgvgiIABP1IgDBAQgEBiAACLQAACJAEBiQACA1ADAYIABP4QgTATgNAAQgjAAgQhigAgJPyQgDANAAARQAAASADAMQAEANAFAAQADAAAEgNQADgMAAgSQAAgRgDgNQgEgMgDAAQgFAAgEAMgAgNuVQgEAJgBANQABAMAEAJQAEAJAHAAQADAAAFgJQAFgJgBgMQABgNgFgJQgFgIgDAAQgHAAgEAIg");
	this.shape_1.setTransform(6.4,133.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("AgHEyQABAUACAAQAEAAADhiQAEhiAAiJQAAiLgEhiQgDhigEAAQgDAAgCAiQACgiADAAQAEAAADBiQAEBiAACLQAACJgEBiQgDBigEAAQgCAAgBgUQgDgZgDg1QgDhiAAiJQAAiLADhiIAEhAIgCv0IAuAhIAMAVMAAAAnMQgfA3gWAZgAgmQxQgDgMAAgRQAAgSADgNQAFgMAEAAQAGAAADAMQAEANAAASQAAARgEAMQgDANgGAAQgEAAgFgNgAgqtnQgEgIAAgNQAAgMAEgKQAFgIAGAAQAGAAAEAIQAFAKAAAMQAAANgFAIQgEAJgGAAQgGAAgFgJg");
	this.shape_2.setTransform(9.3,133.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,16,269.6);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("AEGAAQCJiSClhNQCZhICxgNQACAAABAAQADAAADAAAL7FfQA5A4BTgqAL7FfIABgDIAvjNAJ9GUQAqA7A1g8IAfg0AH5maQA7BGgEBtAEGAAIAAAAQgpArgmAyIAAABQggApgeAtIADAAQgBABAAABQhABIgjBYQgBACgBABQAAABAAABQgiBdgFBtQABBKBkgMQElgYBzhjQADgEAEgDIgFAKQACgDACgDQAbgrAQgrQAEgLADgKQAIgaAFgbQAHgqgEgpAEGAAIAAjtABaFzQAvhHAzg/IABgBQAAgBABAAQAAgBABAAQAjgrAmgoQAugwAygqQArAZAEBMAAzC2IAFAAIBBgCAAzC2QACgBADgBQAFgLAEgMQAnhkgOhlAhNCzQBBAbA/gYAoKEbQA5ACA5gYQAYgZATghQAfg1ARg9QAPgQAJARIgCCaQCBgCBXhBQABgBABgBQBJjhgbjnAHuHrQgCAdAxgOQAJgDALgEQALgFAOgGQARgXAOgYQALgSAJgSIAAgBQAxhlgBhuAFoA9QCTh8CzhNAEICXQBTBWg1CgAm9iMQANC4hEC7QgKAagMAaAhPpkQkpCTgBABQl/DjhyF4QgRA5gLA9QAAABAAABQAIA/BWgJQADAAACAAIEZgeADNnSQsCCejwHXAOHjUQhyAchnAsQBIAcAQBm");
	this.shape.setTransform(90.4,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EF451").s().p("AgRIlQAFhtAhhdIABgCIACgDQAihYBBhIIABgCIgDAAQAegtAfgpIAAgBQAngyApgrIAAAAQCIiSCmhNQCZhICxgNIADAAIAGBgQhyAchnAsQBIAcAQBmQgQhmhIgcQBngsBygcIAAJBQhTAqg5g4IABgDIAvjNIgvDNIgBADIgfA0Qg1A8gqg7QAwhjAAhrIAAgFIAAAFQAABrgwBjIAAABIgUAkQgPAYgRAXIgZALIgUAHQgxAOADgdIAFgKIgHAHQhzBjkmAYQgOACgMAAQhKAAAAhAgAIwFFQgEAbgIAaIgIAVQgPArgbArIgEAGIAEgGQAbgrAPgrIAIgVQAIgaAEgbQAFgcAAgcIgBgbIABAbQAAAcgFAcgAEmGNQAUg+AAgyQAAhRgzg1QAvgwAygqQgyAqgvAwQAzA1AABRQAAAygUA+gAC+DqIAAABIgBABIgBABQgzA/gvBHQAvhHAzg/IABgBIABgBIAAgBQAkgrAlgoQglAogkArgAGXCiQgEhMgrgZQArAZAEBMgAFoA9QCTh8CzhNQizBNiTB8gAuFEDIgBgCQALg9ASg5QBxl4F/jjIEqiUIEcCSIK6AAIAACeIgGAAIgDAAQixANiZBIQimBNiICSIAAjtIAADtIAAAAQgpArgnAyIAAABQgfApgeAtIhBACIAAgCIgFACQg/AYhCgbIgBgCIACgCQA1imAAimQAAg+gIg+QAIA+AAA+QAACmg1CmIgCACQhXBBiBACIABiaQgJgRgOAQQgRA9gfA1QgUAhgYAZQg4AYg4gCIAUg0QA6idAAicQAAgdgCgdQACAdAAAdQAACcg6CdIgUA0IkaAeIgFAAIgUACQhDAAgGg4gABBCdIgJAXIAJgXQAdhKAAhMQgBgYgDgbQADAbABAYQAABMgdBKgAsmCjQDxnXMCieQsCCejxHXgAIwjnIAAgLQAAhmg3hCQA3BCAABmIAAALgAEGAAgAOHjUg");
	this.shape_1.setTransform(90.4,46.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-15.6,182.7,124.6);


(lib.Start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(2,1,1).p("AFblbQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiRiQQiPiQAAjLQAAjKCPiRQCRiPDKAAQDLAACQCPgAGhmgQCtCtAADzQAAD0itCtQitCtj0AAQjzAAititQititAAj0QAAjzCtitQCtitDzAAQD0AACtCtg");
	this.shape.setTransform(59,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89833").s().p("AlaFbQiQiQAAjLQAAjKCQiRQCQiPDKAAQDLAACQCPQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiQiQg");
	this.shape_1.setTransform(59,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B88B30").s().p("AmgGgQisisgBj0QABjzCsitQCtitDzAAQD0AACtCtQCtCtgBDzQABD0itCsQitCuj0AAQjzAAitiugAlalbQiQCRAADKQAADLCQCQQCQCQDKAAQDLAACQiQQCQiQAAjLQAAjKiQiRQiQiPjLAAQjKAAiQCPg");
	this.shape_2.setTransform(59,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,120,120);


(lib.smile = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AByBbQAfhHA7hRQAugrAdhBAh+BEQBVgnAnBAQAwg9A3AvIANAMADkipQAdgNAZAGQAUAGASASAjVg6QgFgFgEgEQglgjgkgxQAWgZAqgDAkniXQgUAXgEApAh+BEQAHASAJATQBnCBBZhdQASgXAOgbAjVg6QA6A5AdBFAABATQhsAPhqhcADMg9QhNBFh6AL");
	this.shape.setTransform(32,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah5A1QgdhGg6g5QBqBdBrgQIAEAAQB7gJBNhHQg8BSgeBGIgOgMQg3gugxA9QglhBhVAog");
	this.shape_1.setTransform(31.5,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AhogKIgPglQBUgnAlBAQAyg9A3AvIANAMQgOAZgSAXQgmAngoAAQg2AAg8hJg");
	this.shape_2.setTransform(31.4,29.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,66,38.1);


(lib.sad3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag3gDQASgcAagEIAeABQAUAJAJATIAJANAg7gEQgCAKAAAMQASASATgQQAXgfAeAeQARAPAQgQQAAgGAAgGQgFgwgmglQgQgIgOALQgoAfgIApgAgrBTQAtg1AvA1");
	this.shape.setTransform(6.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("Ag9AWQAAgMACgKIAEAAQASgbAagEIAeABQAUAJAJATIAJANIAFgBIAAAMQgQAQgRgPQgegegXAfQgJAIgJAAQgJAAgKgKg");
	this.shape_1.setTransform(6.2,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvAeQgJgTgUgJIgegBQgaAEgSAcIgEgBQAIgnAogfQAOgLAQAIQAmAlAFAwIgFABg");
	this.shape_2.setTransform(6.3,4.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,14.5,18.8);


(lib.sad02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhUAGQhAAKg6gsAhUAGQANgDAOgDAB7BKQAAANgCAOQhCBlhIhTQgCgSgEgPQgPg/gugRAB7BKQgngNgmAXIAAAAIgJAbAgRBVQAegNAhAMIAAAAAioitQCIhWB2BaAg3AAQA/gbBBAXQAwAZACA1ADLAeQAaCui7AM");
	this.shape.setTransform(20.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhDAFQgCgQgDgPIAFAAQAhgOAgAMIABABIgJAbIAJgbIAAgBQAkgXAmANQAAANgCAPQgkA1gkAAQggAAgigmg");
	this.shape_1.setTransform(25.7,33);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhngbQANgDAOgEIACgBQBBgbA/AXQAwAbACAzQgngNgmAXIAAAAQgfgMggANIgGABQgPg9gugRg");
	this.shape_2.setTransform(22.6,25.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,43.4,45.4);


(lib.sad01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AigAzQA2AoA3hCQAzgkA6AkQAZAcAdAPQAiACAPgcAh9AKQB2iaCRCWQiJhhh+Blg");
	this.shape.setTransform(16.1,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACEAjQiHhhiABlQB2iaCRCWg");
	this.shape_1.setTransform(16.7,3.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,34.3,15.7);


(lib.QuestionNum = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("AmHAAIMPAA");
	this.shape.setTransform(39.3,34.2);

	// Layer 4
	this.progressT = new cjs.Text("9/10", "20px 'Tahoma'", "#663300");
	this.progressT.name = "progressT";
	this.progressT.textAlign = "center";
	this.progressT.lineHeight = 22;
	this.progressT.lineWidth = 69;
	this.progressT.setTransform(36.2,36.7);

	this.txt = new cjs.Text("Question", "13px 'Tahoma'", "#663300");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 15;
	this.txt.lineWidth = 90;
	this.txt.setTransform(36.4,10.8);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#996600").ss(2,1,1).p("AlFFGQiHiHAAi/QAAi9CHiIQCIiHC9AAQC+AACICHQCHCIAAC9QAAC/iHCHQiICHi+AAQi9AAiIiHg");
	this.shape_1.setTransform(38.2,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D2A84F").s().p("AlFFFQiHiHAAi+QAAi9CHiIQCIiHC9AAQC+AACICHQCHCIAAC9QAAC+iHCHQiICIi+AAQi9AAiIiIg");
	this.shape_2.setTransform(38.2,38.2);

	this.addChild(this.shape_2,this.shape_1,this.txt,this.progressT,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9,-9,94.4,94.3);


(lib.hitarea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000033").ss(1,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.retryButton = function() {
	this.initialize();

	// Layer 2
	this.txt = new cjs.Text("Retry", "20px 'Tahoma'", "#663300");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 22;
	this.txt.lineWidth = 102;
	this.txt.setTransform(57,42.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(2,1,1).p("AFblbQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiRiQQiPiQAAjLQAAjKCPiRQCRiPDKAAQDLAACQCPg");
	this.shape.setTransform(59,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89833").s().p("AlbFbQiPiQAAjLQAAjKCPiRQCRiPDKAAQDLAACQCPQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiRiQg");
	this.shape_1.setTransform(59,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(2,1,1).p("AGhmgQCtCtAADzQAAD0itCtQitCtj0AAQjzAAititQititAAj0QAAjzCtitQCtitDzAAQD0AACtCtg");
	this.shape_2.setTransform(59,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B88B30").s().p("AmgGgQitisAAj0QAAjzCtitQCtitDzAAQD0AACsCtQCuCtAADzQAAD0iuCsQisCuj0AAQjzAAitiugAlblbQiPCRAADKQAADLCPCQQCRCQDKAAQDLAACQiQQCQiQAAjLQAAjKiQiRQiQiPjLAAQjKAAiRCPg");
	this.shape_3.setTransform(59,59);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,120,120);


(lib.replayButton = function() {
	this.initialize();

	// Layer 2
	this.txt = new cjs.Text("Replay", "20px 'Tahoma'", "#663300");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 22;
	this.txt.lineWidth = 103;
	this.txt.setTransform(57,42);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(2,1,1).p("AFblbQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiRiQQiPiQAAjLQAAjKCPiRQCRiPDKAAQDLAACQCPg");
	this.shape.setTransform(59,59);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89833").s().p("AlbFbQiPiQAAjLQAAjKCPiRQCRiPDKAAQDLAACQCPQCQCRAADKQAADLiQCQQiQCQjLAAQjKAAiRiQg");
	this.shape_1.setTransform(59,59);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#663300").ss(2,1,1).p("AGhmgQCtCtAADzQAAD0itCtQitCtj0AAQjzAAititQititAAj0QAAjzCtitQCtitDzAAQD0AACtCtg");
	this.shape_2.setTransform(59,59);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B88B30").s().p("AmgGgQitisAAj0QAAjzCtitQCtitDzAAQD0AACsCtQCuCtAADzQAAD0iuCsQisCuj0AAQjzAAitiugAlblbQiPCRAADKQAADLCPCQQCRCQDKAAQDLAACQiQQCQiQAAjLQAAjKiQiRQiQiPjLAAQjKAAiRCPg");
	this.shape_3.setTransform(59,59);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,120,120);


(lib.removeoff = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.deactivatebutton();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.remove = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.removebutton();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.AddDeactive = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.adddeactive();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.Add = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.addbutton();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,17);


(lib.Categorytext = function() {
	this.initialize();

	// Layer 2
	this.categoryText = new cjs.Text("Category Here", "20px 'Tahoma'", "#663300");
	this.categoryText.name = "categoryText";
	this.categoryText.textAlign = "center";
	this.categoryText.lineHeight = 22;
	this.categoryText.lineWidth = 453;
	this.categoryText.setTransform(228,3.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("Egj7gCuMBH3AAAIAAFdMhH3AAAg");
	this.shape.setTransform(230,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C89833").s().p("Egj7ACuIAAlbMBH3AAAIAAFbg");
	this.shape_1.setTransform(230,17.5);

	this.addChild(this.shape_1,this.shape,this.categoryText);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,462,37);


(lib.cagepart2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("AEejdQAKgIAJgGQAFgEAHgGQACgCAGgHQALgLAVgYgAC9iPQAPACAMAHQARALgGACQgGABgUAGQgUAGgQARQgRARgRgKQgGgEgEgDQgIgIAAgKQAAgOASgLQARgKAZAAQAIAAAIABIBhhOAFlkhQghgiiIBtIpbGsQBLguBfATAmaDgQBLCVCviVIACgBIJAm1QgEiAhZBYAknD5QgOAAgLgFQgKgFAAgHQAAgHAKgGQALgFAOAAQAPAAAKAFQAKAGAAAHQAAAHgKAFQgKAFgPAAgAmhDXIACgBAB5hbIluEWQAmAIAqAT");
	this.shape.setTransform(41.8,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABzAAIAKAAAhyAAIgKAA");
	this.shape_1.setTransform(72.2,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("Al8DgIgGgJIABgBIJbmsQCJhtAgAiIhHBEIhhBOIgPgBQgZAAgSAKQgRALAAAOQAAAKAIAIIlvEWQAnAIAqATIAGAJIgCABQhXBKg+AAQg/AAgmhKgAkhDbQgKAGAAAHQAAAHAKAFQAKAFAPAAQAOAAAKgFQALgFAAgHQAAgHgLgGQgKgFgOAAQgPAAgKAFgAmBDWIAFgDIABgBIABAAQAygdA6AAIABAAIAAAAQAXAAAZAFIAEABIAAAAIACAAIgCAAIAAAAIgEgBQgZgFgXAAIAAAAIgBAAQg6AAgyAdIgBAAIgBABIgFADg");
	this.shape_2.setTransform(38.8,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AlrEIQgKgFAAgHQAAgHAKgFQAKgFAPAAQAOAAAKAFQALAFAAAHQAAAHgLAFQgKAGgOAAQgPAAgKgGgAjQDrQgqgTgngIIFvkXIAJAHIABABIAAAAIABAAIAAABQAGACAFAAIAAAAIABAAQAKAAAKgJIAAAAIAAgBQAQgSAUgFIAbgIQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgDgNgIQgMgHgPgCQAPACAMAHQANAIAAADQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgbAIQgUAFgQASIAAABIAAAAQgKAJgKAAIgBAAIAAAAQgFAAgGgCIAAgBIgBAAIAAAAIgBgBIgJgHQgIgIAAgJQAAgPARgKQASgKAZAAIAPABIBhhPIAUgNIALgKIAJgJIgJAJIgLAKIgUANIBHhDIgfAjQBYhYAECAIpAG0g");
	this.shape_3.setTransform(46.2,27.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.7,61.8);


(lib.cagepart1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AfiAAQgFgIgbgHQghgJguAAQgvAAghAJQgVAGgIAIQgEABAAAFQAAAMAhAIQAhAKAvAAQAuAAAhgKQAhgIAAgMQAAgDgBgCgAesAAQAAAFgPAFQgQAFgVAAQgWAAgPgFQgQgFAAgFQAAgEAQgFQAPgFAWAAQAVAAAQAFQAPAFAAAEgACKgeQg2gEhBAAQgVAAgWABQgCAAgCAAIgoABQg6ACgvAGQhRALAAANQAAAOBRAKQBQALBwAAQByAABRgLQBQgKAAgOQAAgNhQgLQgjgEgpgCgADhgBQAAAFgvAFQgvAGhCAAQhBAAgvgGQgugFAAgFQAAgHAugGQAvgFBBAAQBCAAAvAFQAvAGAAAHgA+qACQgCgCgDgCQgJgHgMAAQgNAAgJAHQgEACgCACQgCAFAAAFQAAAJAIAHQAJAHANAAQAMAAAJgHQAJgHAAgJQAAgGgEgEg");
	this.shape.setTransform(214.5,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(1,1,1).p("EghWgBUIhjBHIBjBiMBDKAAAIBGgdIgkhIIgihEgEgirgAOIgEAA");
	this.shape_1.setTransform(223.5,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330000").s().p("AiSAYQhQgKAAgOQAAgNBQgLQAvgGA7gCIAogBIABAAIAugBQBBAAA2AEQApACAiAEQBRALAAANQAAAOhRAKQhQAKhyAAQhwAAhRgKgAgTgNQgvAFAAAHQAAAFAvAFQAtAFBCABQBDgBAugFQAvgFAAgFQAAgHgvgFQgugGhDAAQhCAAgtAGgA++AcQgJgHAAgJQAAgFADgEQACgDAEgCQAJgGAMgBQANABAIAGIAGADQADAFAAAGQAAAJgJAHQgIAGgNAAQgMAAgJgGgAduAKQgPgEAAgGQAAgEAPgFQAQgFAVABQAWgBAPAFQAQAFAAAEQAAAGgQAEQgPAEgWABQgVgBgQgEg");
	this.shape_2.setTransform(211.7,6.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC6600").s().p("AbUAoQghgIAAgMQAAgFAEgDI58gbQg2gEg/AAIguABIgDAAIgoABI9mAhIgFgFQgJgGgNgBQgMABgJAGQgEADgCAEIhxACIBVhFMBDKAAAIAiBDIgEACIkKgFQgFgKgbgFQghgJgvAAQguAAghAJQgWAEgHAIQAHgIAWgEQAhgJAuAAQAvAAAhAJQAbAFAFAKIABAFQAAAMghAIQghAKgvgBQguABghgKgAcEAEQgQAFAAAFQAAAHAQAEQAPAEAWABQAVgBAQgEQAPgEAAgHQAAgFgPgFQgQgEgVAAQgWAAgPAEgAh+AYQgugFAAgHQAAgHAugFQAvgEBDAAQBAAAAuAEQAwAFgBAHQABAHgwAFQguAFhAABQhDgBgvgFg");
	this.shape_3.setTransform(222.4,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#663300").s().p("EghWABVIhjhhIBjhIIhVBHIBxgCQgCAEAAAFQAAAHAIAHQAJAGANAAQAMAAAJgGQAJgHAAgHQAAgGgEgFIdmgjQg6ACgvAGQhRALAAAOQAAAPBRAIQBQAKByAAQBwAABRgKQBQgIAAgPQAAgOhQgLQgjgEgpgCIZ8AdQgEADAAAFQAAAMAhAGQAhAKAvgBQAuABAhgKQAhgGAAgMIgBgFIEKAFIAEgCIAkBHIhGAdgEgirgANIgEAAg");
	this.shape_4.setTransform(223.5,8.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,449,19);


(lib.bodyonly = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("AgyiAIgjDxQg6BFg2hHQgEgFAEgIIBJjsAB2iUIBSDOQgTBwhghEIgujqAAfiCIAaDlQgvBdg/hQIAKjw");
	this.shape.setTransform(51,156.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#663300").ss(1,1,1).p("Ag1CIQBEiIhhiKQBhBkACBzQAIhaAphIQgpBmA5BzAg0CLIgBgDAghCIIgUAA");
	this.shape_1.setTransform(44.2,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006600").ss(1.4,1,1).p("Al1EJQgKg4gfg1QgDgFgDgEQhAhtAAiEQAAgSABgRQAMizCBiBQBrhrCMgaQAJgCAKgCQAlgFAnAAQAUAAAUABQCvANCACAQCBCBAMCzQABARAAASQAACJhFBwIgDAGQgdAvgQBEAFvEXQgDAZgCAOQgBAOgCAOQgCAKgCAKQgaBihrA9QglAUgnAOQgCAAgCABQgtAKghAGQgEAAgEABQggAEgTgBQgCAAgBAAQgJAAgLAAQgDAAgEAAQgngDgkgIQgTgEgTgGQgpgNglgVQhrg9gahiQgFgWgShK");
	this.shape_2.setTransform(48.5,85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#00E732","#007703"],[0,1],-1.4,8.2,5.5,-13.8).s().p("AhHBrQgEgFAEgIIBHjsQAkAIAmACIgjDxQgdAigaAAQgcAAgbgkg");
	this.shape_3.setTransform(38.4,156.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00E732","#007703"],[0,1],2.2,8.2,-2.6,-14.4).s().p("AgiBxIgtjqQAhgGAugKIBQDNQgMBGgqAAQgZAAgjgZg");
	this.shape_4.setTransform(63,155);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00CC33").s().p("AgiBqQBpg8AahgIAFgUIADgdIAFgmIAAgCIAAADIAAAFIgBADIABgCIgDAfIgDAdIgEAUQgaBghpA8QglAVgpANQAngNAkgVg");
	this.shape_5.setTransform(74.2,127);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00E732","#007703"],[0,1],-0.3,7.7,0.9,-15.3).s().p("Ag2BnIAKjwIAWABIACAAQAUABAegEIAZDlQgZAygeAAQgYAAgeglg");
	this.shape_6.setTransform(51.1,157);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#663300","#000000"],[0,1],-1,0,0,-1,0,5.7).s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNgAAOgBQAEAEgBAJIAQgHQgBgHgEgIgAAAgTQAIAFADAGIABACIAOgIIgBgCQgFgJgIgGg");
	this.shape_7.setTransform(56.6,77);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#663300","#000000"],[0,1],-1.9,0,0,-1.9,0,8.8).s().p("AgsAsQgSgSgBgaQABgZASgTQATgTAZABQAagBASATQAUATAAAZQAAAagUASQgSAUgagBQgZABgTgUgAgegeQgMANAAARQAAARAMANQANANARAAQARAAANgNQANgNAAgRQAAgRgNgNQgNgNgRAAQgRAAgNANg");
	this.shape_8.setTransform(56.7,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#663300","#000000"],[0,1],-1,0,0,-1,0,5.7).s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNgAAOACQAEAGgBAJIAQgHQgBgJgEgGgAAAgOQAIAFADAGIABACIAOgIIgBgCQgFgJgIgGg");
	this.shape_9.setTransform(39.4,77);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#663300","#000000"],[0,1],-1.5,0,0,-1.5,0,8.4).s().p("AgsAsQgTgSAAgaQAAgZATgTQATgTAZABQAagBASATQAUATgBAZQABAagUASQgSAUgagBQgZABgTgUgAgegeQgNANAAARQAAARANANQANANARAAQARAAANgNQANgNAAgRQAAgRgNgNQgNgNgRAAQgRAAgNANg");
	this.shape_10.setTransform(39.5,77.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9999").s().p("AhRiJQBgBlACByQAJhaAphHQgpBmA4ByQgTgBgUAAQgoAAgkAFIgUABQBDiJhfiKg");
	this.shape_11.setTransform(44.2,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAfDZQgSgZgNgcQgMAcgRAZQhABYhZAAQhYAAhAhYQg+hYgBh8QAAgXAEgYIgCABQAKjACIg8QCngwBRCyIABAEIAFgIQBNitCfAvQB0A1AdCVQAMAuAAAyQgBB8g+BYQhABYhYAAQhZAAg/hYgAAjghQgSATgBAYQABAbASASQATATAaAAQAbAAASgTQAUgSAAgbQAAgYgUgTQgSgTgbAAQgaAAgTATgAiHghQgTATAAAYQAAAbATASQATATAaAAQAbAAASgTQAUgSgBgbQABgYgUgTQgSgTgbAAQgaAAgTATgAhLAMIAOgIQADAHACAJIgQAHQABgIgEgHgABfAHIAOgHQADAGABAJIgPAHQABgIgEgHgAhOAGQgEgGgHgDIAMgMQAIAFAFAJIABABIgOAIIgBgCgABcABQgDgFgIgEIAMgMQAIAFAFAJIABACIgOAHIgBgCg");
	this.shape_12.setTransform(48.6,76);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#00FA3A","#007000"],[0.09,1],0,0,0,0,0,58.6).s().p("AAEJEIgCAAIgUAAIgHAAQgmgDgkgIQgUgEgTgGQgngOgkgUQhrg9gahiIgXhgIgDAAIgCgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIAAgEQgJg4ggg1IgGgJQhAhtAAiEIABgjQAMizCCiBQBqhrCMgaIATgEQAmgFAmAAQAUAAATABQCwANB/CAQCCCBAMCzIABAjQAACJhFBwIgDAGQgdAvgQBEIAAgDIABAAIgBAAIgBACIgCAAIACAEIgFAnIgDAcIgFAUQgaBihqA9QgkAUgoAOIgDABQguAKghAGIgIABQgaADgRAAIgJAAgAAfB9QA/BYBZAAQBZAAA/hYQA/hXAAh6QAAg1gLguQgeiUhzg2QifgvhNCtIgGAJIAAgEQhRiyioAvQiHA8gKDAIABgBQgDAYAAAaQAAB6A/BXQA/BYBZAAQBZAAA/hYQASgZALgcQANAcASAZg");
	this.shape_13.setTransform(48.5,85.1);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,99,173.1);


(lib.Bird = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1).p("AGSCHQimh/jggEQBNiwChAwQCJA/AQDCAmQCHQCth/DpgEQhQiwinAwQiPA/gSDC");
	this.shape.setTransform(-0.8,-26);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#80FFFF","#004AAF"],[0,1],-22.6,2.5,8.4,-3.4).s().p("AjLCFQARjCCQg/QClgwBRCwQjoAEiuB/g");
	this.shape_1.setTransform(-20.6,-26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#80FFFF","#004AAF"],[0,1],21.7,2.5,-7.9,-3.4).s().p("AjCAEQBNiwCfAwQCJA/AQDCIgBACQimh/jegEg");
	this.shape_2.setTransform(20,-26);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(1,1,1).p("AgBBVIBciKQhbg9haA5g");
	this.shape_3.setTransform(0.1,27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("Ahag5QBag5BaA9IhbCKg");
	this.shape_4.setTransform(0.1,27.5);

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhXAJIAOgIQAEAHABAJIgQAHQABgIgEgHgABTAEIAOgGQAEAFABAJIgQAHQABgIgEgHgAhaADQgDgFgIgFIAMgLQAIAFAFAJIABACIgOAHIgBgCgABQAAQgDgHgIgEIAMgMQAIAFAFAJIABACIgOAHIgBAAg");
	this.shape_5.setTransform(1.2,-8.8);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#663300","#000000"],[0,1],-1,0,0,-1,0,5.7).s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg");
	this.shape_6.setTransform(8.1,-8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#663300","#000000"],[0,1],-1,0,0,-1,0,5.7).s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAAMAMQANANAAARQAAASgNAMQgMANgSAAQgRAAgNgNg");
	this.shape_7.setTransform(-9.1,-8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#663300","#000000"],[0,1],-1.9,0,0,-1.9,0,8.8).s().p("AgsAsQgSgSgBgaQABgZASgTQATgTAZAAQAaAAATATQATATAAAZQAAAagTASQgTAUgagBQgZABgTgUgAgegeQgMANAAARQAAARAMANQANANARAAQASAAAMgNQANgNAAgRQAAgRgNgNQgMgNgSAAQgRAAgNANg");
	this.shape_8.setTransform(8.2,-8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#663300","#000000"],[0,1],-1.5,0,0,-1.5,0,8.4).s().p("AgsAsQgSgSgBgaQABgZASgTQATgTAZAAQAaAAASATQAUATAAAZQAAAagUASQgSAUgagBQgZABgTgUgAgegeQgMANAAARQAAARAMANQANANARAAQARAAANgNQANgNAAgRQAAgRgNgNQgNgNgRAAQgRAAgNANg");
	this.shape_9.setTransform(-9,-8);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeDTQgSgZgMgcQgLAcgTAZQg/BYhZAAQhYAAhAhYQg+hYgBh7QABh7A+hYQBAhXBYAAQBZAAA/BXQATAaALAUQAMgUASgaQA/hXBaAAQBYAABABXQA+BYABB7QgBB7g+BYQhABYhYAAQhaAAg/hYg");
	this.shape_10.setTransform(0.1,-8.5);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#006600").ss(1.4,1,1).p("Al1EJQgKg4gfg1QgDgFgDgEQhAhtAAiEQAAgSABgRQAMizCBiBQCOiODIAAQDJAACOCOQCBCBAMCzQABARAAASQAACJhFBwIgDAGQgdAvgQBEAFvEXQgDAZgCAOQgBAOgCAOQgCAKgCAKQgaBihrA9QglAUgnAOQhjAYgqgDQgCAAgBAAQhKAAhCgVQgpgNglgVQhrg9gahiQgFgWgShK");
	this.shape_11.setTransform(0,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#00FA3A","#007000"],[0.09,1],0,0,0,0,0,58.6).s().p("AAFJEIgDAAQhKAAhCgVQgngOgkgUQhrg9gahiIgXhgIgDAAIgCgBQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAIAAgEQgKg4gfg1IgGgJQhAhtAAiEIABgjQAMizCCiBQCNiODIAAQDJAACNCOQCCCBAMCzIABAjQAACJhFBwIgDAGQgdAvgQBEIAAgDIAAAAIAAAAIgBABIgCABIACAEIgFAnIgDAcIgFAUQgZBihrA9QgkAUgoAOQhaAVgrAAIgIAAg");
	this.shape_12.setTransform(0,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00CC33").s().p("AgiBrQBpg9AahgIAFgUIADgcIAFgnIAAgDIAAAEIAAAFIgBADIABgCIgDAgQgBAOgCAOIgEAUQgaBghpA9QglAVgpANQAngOAkgUg");
	this.shape_13.setTransform(25.7,41.9);

	// Layer 8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#663300").ss(1,1,1).p("Ag1CFQBDiHhgiMQBhBlACByQAIhaAphHQgpBmA6BzIiIAEIABAK");
	this.shape_14.setTransform(-4.3,-70.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9999").s().p("AhSiJQBhBlACByQAIhaAphHQgpBmA6BzIiIAEQBDiJhgiKg");
	this.shape_15.setTransform(-4.3,-71.2);

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#006600").ss(1,1,1).p("ADIBmIh2kmIg5AfIA8E0QBgBEAThxgAgpiUIgMExQA/BQAvhdIgklGIg7APAgpiUIADgTIhAAAIhfE2QgEAHAEAGQA2BHA6hGgAhsjAIgIAZ");
	this.shape_16.setTransform(2.5,66.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#00E732","#007703"],[0,1],2.9,12.6,-1.9,-10).s().p("AgbCdIg7kzIA5ggIB0EnQgMBGgqAAQgZAAgjgag");
	this.shape_17.setTransform(13.8,65.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#00E732","#007703"],[0,1],-2,11.8,4.9,-10.2).s().p("AhNCQQgEgGAEgHIBdk2IBAAAIgDATIgsExQgdAjgaAAQgcAAgbgkg");
	this.shape_18.setTransform(-9.5,67.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#00E732","#007703"],[0,1],-0.3,12.5,0.9,-10.5).s().p("Ag2CXIAMkwIADgTIA6gPIAkFGQgZAxgeAAQgYAAgeglg");
	this.shape_19.setTransform(2.6,67.1);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.5,-86,99,173.1);


(lib.Symbol28 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("AAAjDIAAFpIAAAe");
	this.shape.setTransform(20.3,390.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#331A00").ss(1.5,1,1).p("Aga/xIAnBMIAHANIBmC/QAoA7A8g7IAmgzAj2+PQgEgDgDgDQASALgLgFgAkD+VQAIAEAFACQCMCCAjCiQAkCUg4AyQgSAQgdAGQgPBkB6g8QBLTDhBL1QgEAzgFAyQg9KngfEvQgCATgCATAg4aIIA/gFAD8e3IkgA7");
	this.shape_1.setTransform(26,203.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#625600").s().p("Ag3fbIAAlrIA/gFIg/AFIhCAFQAfkwA9qmIAJhmQBBr0hLzEQh6A9APhlQAdgFATgRQA3gygkiUQgjiiiMiCQALAFgSgLQAahBCoAfQgLAJAdArQB7CeAWDJQAWDKAmM4QAYH9gTLUQgMHCgdIXIB8DIIAABfIkgA8gAgO/ZQAMAXAQAFIAHANQgWgOgNgbg");
	this.shape_2.setTransform(25.9,205.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#887700").s().p("AAZbFQAdoWAMnDQATrWgYn7Qgns4gVjKQgUjJh9ieQgdgrALgIQAIgGAkgFQANAbAYAPIBkC+QAoA8A8g8IAlgyQAQTjgJTfQgFJRgJJQg");
	this.shape_3.setTransform(36.3,198.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,54,412);


(lib.Symbol27 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(1.4,1,1).p("EA8PgFMQgDAAgEABEAu4gBIIQ1CxQgHi0jYhwQAagKAYgHQDAg4CRCPQAXAWAZAiQB0ALhRiIQgBgCgDgCQiti9kiAvIgCAAQANgiARgbQBsihEFg/QAggJAigGEBDfgJ4QA/h+ibAOEBB/gLmQlHAviMDZQghj3jmiRQhAgFAOAqQABAFADAGQALAWAcAhQBZBtgHBsEAyBgGhQACABACACEA3ugIdQhXiMhdhvQjkkXk/iwQgEgCgDgCQjBhBBNB2QABACADADQABACACABQBuBPBhBbQDMC/CQDxQjkjni3hSQgXgKgXgIQhagZAkBKEAyBgGhQi5imkUANIgBAAQhjAuBiBAEAq2gHNQE1BegxEYEArUgNhQEMCvChERAFbJyQBSiMBXhvQDYkXEsitQAEgDADgCQC2hAhJB1QgBADgCACQgCACgCACQhnBNhcBaQjAC/iIDxQDXjnCthSQAVgKAWgHQBVgZgiBKAKzLuQCvimEDAOIABAAQBeAuhcA/AkOGqQEyAvCEDZQAfj3DZiRQA8gFgNAqQgBAFgDAGQgKAWgaAgQhVBtAHBsAlpIYQg7h+CSANABKNDQgMgigQgaQhjihj2hAQgegIghgGABKNDQAEAAADABANxRHIv1C0QAGi2DJhxQgYgKgXgHQiyg3iJCOQgWAWgYAiQhtALBMiHQACgDACgBQCji9EQAuIABAAAKzLuQgCACgCABARkLDQkkBeAuEYARHEuQj8CviYEREhCGgLIQE0AvCEDZQAgj3DYiRQA9gFgNAqQgCAFgCAGQgLAWgaAhQhUBtAHBsQAAAEABAFQBSiMBYhvQDXkXEtiwQADgCAEgCQC1hBhIB2QgCACgCADQgBACgCABQhoBPhbBbQjBC/iHDxQDXjnCthSQAVgKAVgIQBVgZgiBKEgsugNDQj9CviYERQCvimEEANIABAAQBdAuhcBAEhDggJaQg7h+CSAOEg/8ACHQAGi0DMhwQgYgKgXgHQi1g4iICPQgWAWgYAiQhtALBMiIQABgCADgCQCji9ESAvIABAAQgMgigQgbQhmihj2g/EgwFgAqIAMgDEgsSgGvQkjBeAuEY");
	this.shape.setTransform(435.8,127.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56B01A").s().p("ABLPUQgYgKgXgHQiyg3iJCOQgWAWgYAiQhtALBMiHIAEgEQCji9EQAuIABAAIAHABIgHgBQgMgigQgaQhjihj2hAQgegIghgGIABAAQg7h+CSANIAEADQEyAvCEDZQAfj3DZiRQA8gFgNAqIgEALQgKAWgaAgQhVBtAHBsIgBANIADgEQBSiMBXhvQDYkXEsitIAHgFQC2hAhJB1IgDAFIgEAEQhnBNhcBaQjAC/iIDxQDXjnCthSQAVgKAWgHQBVgZgiBKIgFAEQj8CviYERIgEADIAEgDQCvimEDAOIABAAQBeAuhcA/IgEAAQkkBeAuEYIADAOIv1C0QAGi2DJhxgEg8qgCdQgYgKgXgHQi1g4iICPQgWAWgYAiQhtALBMiIIAEgEQCji9ESAvIABAAQgMgigQgbQhmihj2g/IgegIIgggHIABAAIAAAAQg7h+CSAOIADACQE0AvCEDZQAgj3DYiRQA9gFgNAqIgEALQgLAWgaAhQhUBtAHBsIgBAMIACgDQBSiMBYhvQDXkXEtiwIAHgEQC1hBhIB2IgEAFIgDADQhoBPhbBbQjBC/iHDxQDXjnCthSQAVgKAVgIQBVgZgiBKIgEAFQj9CviYERQCvimEEANIABAAQBdAuhcBAIgEgBQkjBeAuEYIACAPIv3CxQAGi0DMhwgEAu4gBIIACgPQAxkYk1heIgEABQhihABjguIABAAQEUgNC5CmIAEADIgEgDQihkRkMivIgFgFQgkhKBaAZQAXAIAXAKQC3BSDkDnQiQjxjMi/QhhhbhuhPIgDgDIgEgFQhNh2DBBBIAHAEQE/CwDkEXQBdBvBXCMIADADIgBgMQAHhshZhtQgcghgLgWIgEgLQgOgqBAAFQDmCRAhD3QCMjZFHgvIAEgCQCbgOg/B+IABAAQgiAGggAJQkFA/hsChQgRAbgNAiIACAAQEigvCtC9IAEAEQBRCIh0gLQgZgigXgWQiRiPjAA4QgYAHgaAKQDYBwAHC0gEA8IgFLIAHgBIgHABg");
	this.shape_1.setTransform(435.8,127.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,873.6,257.1);


(lib.Symbol26 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336600").ss(2,1,1).p("AitqiIAADSACHkcQA2DAiGB/ABfFjQg+B7DoDFAjLBLQiAETCKEx");
	this.shape.setTransform(26.6,67.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,55.2,137);


(lib.Symbol25 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("AGnimQgYgCgUAEQgyAKggAsAGxhvIgdAGIATg8AAtBbQAAADAAADQA8BzBcgGQACAAACAAIACgBQACAAABABQASABASAAQAfgCAagKQAygTAjgvQAAh2Axh5AAasbQATgYAbgGQALgCAOABIgLAiIARgDAh+spQAIgBAIABQABAAACABQAcADAcAZQAFgQAJgMQALgQAHgIQAHgHADgBQADgBAEAEQACAEAIAHQAKAHAIAZABnsbQgcBFAABDQgTAagcALQgQAGgOABQgKAAgLgBQgBAAgBAAIgBAAQgBAAgBAAQgpADgcgnQgCgCgBgBQgFgGgDgGQgDgFgDgFQAAgEABgFQAAgBAAAAQAFhCgTg3AB5ohQgNAAgMACQgxAKggAsACCn+IgJAaIAXgFAANnpQgNgrgQgNQgSgMgFgHQgFgHgGABQgFACgMANQgNAOgUAbQgQAWgJAdQgxgtgzgGQgCgBgDAAQgOgBgPACACVmdQAIgBAIABQABAAABABQAdADAcAZQAFgQAJgMQALgQAHgIQAHgHADgBQADgBAEAEQADAEAJAHQAKAHAIAZAEwmPQARgYAcgGQAMgCANABIgKAiIAQgDACem5QA2gBAYAcAh1tFQA2gBAXAcAhpoFQgpgxhhABAjrknQgBAHAAAIQA8BzBcgGQACAAACAAIADgBQABAAABABQATABARAAQgcBcgCBXAmvj6QAPgBAOABQADAAACABQAzAGAxAsQAJgdAQgVQAUgcAMgNQADgDACgCAkVj8QgpgyhhABAmwj4QAkBpgMB/QA8ByBcgGQACAAACAAIACgBQA2AGArgQQAAgBAAAAQAAgFgBgEQgEgbgIgZAilASQAIgBAIAAQABAAABABQAOACAOAGQAMAGANALQACABACACQACgGACgGQAEgIAGgIQAEgFADgEQAHgJAEgDQAHgIAEAAQACgBADAEQADAEAKAFQAKAHAHAYAicgJQAcAAAUAHQASAFALANAiZBQQADAdgCAeQAAABAAABQgBAEAAAEQADAGADAEQADAHAFAFQABACABACQAFAHAGAFQAZAaAigCQABAAABAAIABgBQACAAAAAAQADABADAAQAJAOAHAYAF8mPQgcBFAABDQgTAagcALQgQAGgQABQgKAAgLgBQgBAAAAAAIgCAAQgBAAgBAAQgpADgdgnQgBgCgBgBQgEgGgEgGQgCgFgEgFQAAgEABgFQAAgBAAAAQAFhCgTg3AAWiHQAOgCAPABQACAAADABQAzAGAxAtQAJgdAQgWQAUgbAMgOQANgNAFgCQAFgBAGAHQAFAHARAMQASANAOArACUniQgvB3AABzQgjAvgxATQgZAKgfACAgLAgQARgZAbgFQAHgCAHAAQgFhGgVhAAAwAiIAKghQgGgBgFAAAAwAiIgBABIABAAgABAAfIgQAEAAtBbQAHgdAMgeAAmi6QBhgBApAxAkEoBQAiBjgJB3ADYGeQAGAAAGAAQABAAABABQAKABALAFQAIAEAKAIQABABABABQACgEABgEQAEgHADgFQADgEACgDQAFgGADgEQAGgGADAAQABgBADADQACADAHAFQAIAFAFASAg4DTQAHAAAHAAQARgBAQgFQAZgLAUgbQAAglAJgnABWDBQgZgCgUAEQgvAKghAsABWDCIgUA8IAegGABRJrQAcAAAUAHQASAHAMANAFJGpQAOgSAUgEQAFgBAFAAQAEAAAEAAIgHAZIAMgDAGCGpQgJAWgGAVQgGAdAAAbQgOATgUAIQgMAEgMABQgGAAgFAAQgCAAgCgBQgBAAAAAAIgCABQAAAAgBAAQgYABgTgSQgEgEgEgGQgBgBAAgBQgEgEgDgFQgBgDgCgEQAAgDAAgDQAAgBAAgBQACgWgCgVQgBgDAAgEQgDgUgGgSABIKIQAIgBAIAAQACAAABABQAOACANAGQANAGAMALQACABACACQACgGACgGQAFgIAFgIQAEgFADgEQAHgJAEgFQAHgIAEAAQACgBAEAEQADAEAJAHQAKAHAIAYADiKWQASgZAcgFQAHgCAHAAQAFAAAGABIgKAhIAAABIAQgEADfGKQAVgBAOAGQANAFAIAJAk7DhQAiBjgJB3QgBAHAAAIQA8BzBcgGQACAAACAAIACgBQACAAABABQATABARAAQAfgCAbgKQAvgTAjgvQAAh2Ayh7Ak6DgQAPgCAOABQADAAACABQAzAGAxAtQAJgdAQgWQARgYAMgNAigDdQgpgxhhABAEfKYIgBABIABAAAEvKWQgMAegHAdQgJAnAAAlQgTAbgcALQgPAFgRABQgHAAgIAAQgDAAgDgBQAAAAgBAAIgCABQgBAAgBAAQgiACgZgaQgFgFgFgHQgCgCgBgCQgFgFgDgHQgDgEgCgGQAAgEABgEQAAgBAAgBQABgegCgdQgBgFgBgEQgDgbgJgZ");
	this.shape.setTransform(43.4,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#990000").ss(1,1,1).p("AFzkvIAAgBAGehGIAAAAAGogPIABgBABeq7IAAgBACck+IgHgbAh3rKIgHgbAj8nVIANAwAmojNIANAxAieBwIgHgbAApgqIgMgwAA3B/IAAAAABXFXIgBABABMEhIABAAADbH9IgFgTAkzENIANAwABPLmIgHgb");
	this.shape_1.setTransform(44.3,74.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B90D09").s().p("ADSLyQgMgLgMgGQgOgGgOgCIgDgBIAAgBIgHgbQAcAAAUAHQASAHALANIADACQgFAIgEAIIgFAMIgEgDgAFQICQgKgIgIgEQgLgFgKgBIgCgBIAAgBIgFgTQAVgBAOAGQANAFAJAJIABACIgHAMIgCAIIgDgCgAjVExIgFgBIAAgCIgNgwQBhgBAqAxIAEADQgQAWgIAdQgxgtg0gGgAgbB8QgMgLgNgGQgOgGgOgCIgCgBIAAgBIgHgbQAcAAAUAHQASAHAMANIACACQgGAIgEAIIgEAMIgEgDgAB7g2IgGgBIAAgCIgMgwQBhgBApAxIAFADQgRAWgIAdQgxgtgzgGgAlKioIgFgBIAAgCIgNgxQBhgBAqAyIAEADQgQAVgIAdQgxgsg0gGgADqlLIgCgBIAAgBIgHgbQA2gBAYAcIACACQgJAMgFAQQgcgZgdgDgAiemxIgFgBIAAgCIgMgwQBggBAqAxIAEADQgQAWgIAdQgxgtg0gGgAgorXIgDgBIAAgBIgHgbQA0gBAXAcIADACQgJAMgFAQQgagZgcgDg");
	this.shape_2.setTransform(36.7,76);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#993300").s().p("AC4MiIgLgMIgDgEIgIgMIgFgKIABgIIAAgCQACgegDgdIgBgJQgEgbgJgZIABgBQAIgBAJAAIACABQAGARAEASIAEASQAGAigEAiIAAABIAAAGQADARAMAOQAQATAgAOIAAABIgEAAQgfAAgXgYgAjaG7IABgPQAJh3gjhjIACgBQAOgCAOABIAGABQAnBqgLBuIgBACIACAKQAMBJBkApIAAABIgJAAQhWAAg5htgAE9IMIgHgKIgCgCIgGgJIgEgHIAAgGIAAgCQACgWgCgVIgBgHQgDgUgGgSIABgBIAMAAIACABQAEAMADANIADAOQADAYgCAZIAAABIAAAFQADAMAHAKQAMAOAYAKIAAABIgDAAQgWAAgSgRgAg1CsIgLgMIgCgEIgIgMIgGgKIABgIIAAgCQACgegDgdIgBgJQgEgbgIgZIABgBQAHgBAIAAIADABQAHARAEASIADASQAFAigCAiIgBABIABAGQACARALAOQAQATAgAOIAAABIgEAAQgeAAgXgYgAB1BSIAAgGQAHgdAMgeIABgBIgBAAIgPAEIAAgBIAKgfIgMgBQgEhIgWhAIACgBQAOgCAOABIAFABQAnBqgKBsIgBACIACAKQALBJBkApIAAABIgJAAQhWAAg5htgAlPgfQAMh/glhpIACgCQAOgBAOABIAGABQAnBpgLBvIgBABQAGBOBsAsIAAACIgJAAQhWAAg5hsgAijknIABgPQAJh3gjhjIACgBQAOgCAOABIAFABQAoBqgLBuIgBACIACAKQAMBJBkApIAAABIgJAAQhWAAg5htgAD6kPIgCgDIgIgMIgGgKIABgJIAAgBQAEhCgSg3IABgBQAHgBAJABIACABQAWA7gFA+IgBABIABAGQAGAoA5AXIAAABIgFAAQgmAAgbgkgAgZqbIgCgDIgJgMIgFgKIABgJIAAgBQAEhCgSg3IABgBQAIgBAIABIACABQAWA7gFA+IgBABIABAGQAGAoA3AXIAAABIgFAAQgmAAgZgkg");
	this.shape_3.setTransform(36.1,85.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AC9NJIgFgBIgCAAIgCABIgCAAIAAgBQgggOgQgTQgMgOgDgRIAAgGIAAgBQAEgigGgiIgEgSQgEgSgGgRQAOACAOAGQAMAGAMALIAFADIAEgMQAEgIAFgIIAIgJIAKgOQAIgIADAAQADgBADAEQADAEAJAHQAKAHAIAYIABAAQASgZAbgFQACAQAAAQQgBAygRA0QgBApgdAXIADAFQgQAFgRABIgPAAgAh5I3IgDgBIgDABIgDAAIAAgBQhkgpgMhJIgCgKIABgCQALhugnhqQAzAGAxAtQAIgdARgWQARgYAMgNQAZAaAigCIACAAIABgBIABAAIAHABQAIAOAIAYIABAAQAfgsAxgKQACAdAAAdQgCBYgeBeQgCBIgwApIACAIQgbAKgeACIgJAAIgbgBgAEwIsIgDgBIgCAAIgBABIgCAAIAAgBQgYgKgMgOQgHgKgDgMIAAgFIAAgBQACgZgDgYIgDgOQgDgNgEgMQAKABAKAFQAIAEAKAIIADACIADgIIAHgMIAFgHIAIgKQAGgGACAAQAAgBABAAQABAAAAABQABAAAAAAQABABAAABQACADAHAFQAIAFAGASIAAAAQANgSAVgEIABAYQgBAkgNAmQgBAegUARIABADQgLAEgNABIgLAAgAgvDTIgHgBIgBAAIgBABIgCAAIAAgBQgigOgQgTQgLgOgCgRIgBgGIABgBQACgigFgiIgDgSQgEgSgHgRQAOACAOAGQAMAGANALIAEADIAEgMQAEgIAGgIIAGgJIAMgMQAGgIAEAAQADgBADAEQADAEAKAFQAKAHAHAYIABAAQAQgZAcgFQABAQAAAQQgBAygRA0QgBApgaAXIABAFQgPAFgRABIgOAAgADWDOIgCgBIgDABIgEAAIAAgBQhkgpgLhJIgCgKIABgCQAKhsgnhqQA0AGAxAtQAIgdAQgWQAUgbANgOQAMgNAGgCQAFgBAFAHQAFAHASAMQARANAOArIABAAQAhgsAxgKQADAdAAAdQgCBYgfBcQgCBIgyApIADAIQgbAKgfACIgIAAIgcgBgAjxBbIgDABIgDAAIAAgCQhsgsgGhOIABgBQALhvgnhpQAzAGAxAsQAIgdARgVQATgcANgNIAFgFIgBAPQA7BzBdgGIADAAIADgBIADABQgHBAgWBEQgBAUgEARQgTgHgcAAIAGAZIAAABQgIAAgHABIgBABQAIAZAEAbIgCACIACAIQgfALglAAQgNAAgPgBgAhCirIgDgBIgDABIgDAAIAAgBQhkgpgMhJIgCgKIABgCQALhugohqQA0AGAxAtQAIgdARgWQATgbANgOQANgNAFgCQAFgBAGAHQAFAHARAMQAQANAOArIABAAQAhgsAxgKQACAdAAAdQgCBYgeBeQgCBIgyApIACAIQgZAKgeACIgJAAIgbgBgAhLirIAAAAgAEEjcIgBAAIgBAAIgCAAIAAgBQg5gXgGgoIgBgGIABgBQAFg+gWg7QAdADAbAZQAFgQAKgMIASgYQAGgHAEgBQADgBADAEQADAEAKAHQAKAHAHAZIABgBQASgYAbgGQACAQAAARQgBAxgRA1QgBAogcAYIABAEQgPAGgRABIgVgBgAgPpoIgBAAIgCAAIgBAAIAAgBQg5gXgGgoIgBgGIABgBQAFg+gWg7QAdADAbAZQAGgQAJgMIASgYQAGgHAEgBQABgBADAEQADAEAJAHQALAHAHAZIABgBQASgYAbgGQACAQAAARQgBAxgRA1QgBAogdAYIACAEQgPAGgRABIgTgBg");
	this.shape_4.setTransform(42.5,84.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("ABYM7QAcgYABgoQARg1ABgxQABgRgCgQQAGgBAIAAIALAAIgKAiIAAAAIAAAAIAQgDIAAAAQgMAegHAeQgJAmAAAmQgUAagbALgAixIhQAygqAChIQAfhdAChYQAAgegDgcQAUgEAYACIAAAAIgTA8IAdgGIAAABQgwB7gBB2QgjAwgxATgAC/IhQAVgSABgdQAMgnABgkIgBgYIAKgBIAIAAIgHAZIAMgCIAAAAQgJAWgGAWQgGAcAAAbQgOAUgVAIgAiVDFQAcgYACgoQAQg1ACgxQAAgRgCgOQAGgBAIAAIALAAIgKAgIgBAAIABAAIAQgDIAAAAQgMAegHAeQgJAmAAAmQgTAagcALgACfC4QAygqAChIQAehbAChYQAAgegCgcQAUgEAYACIAAAAIgTA8IAdgGIAAABQgxB5gBB2QgiAwgyATgAkmBFIACgCIACAKIgBAAgAjYANQgMgNgSgFQAEgSAAgTQAXhEAGhBQATACARgBQgdBcgBBXIgHAKgAh6jBQAzgqABhIQAfhdAChYQAAgegDgcQAMgDANAAIAAADIgCAPIAKASIgIAZIAVgEIAEAGQgtB3AABzQgjAwgxATgACljqQAdgXABgpQARg0ABgyQAAgQgCgQQAMgDANACIgLAiIARgEIAAABQgcBFAABCQgTAbgcALgAhup2QAcgXACgpQAQg0ACgyQgBgQgBgQQAMgDANACIgLAiIARgEIAAABQgcBFAABCQgUAbgbALg");
	this.shape_5.setTransform(57.2,84.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F70400").s().p("AiYIKIABgBIgBACgAiiHTIABAAIgBABgAi4ExIABAAIgBABgAC3ChIABgBIgBACgACtBqIABAAIgBABgACCh9IABgBIgBABgAiQoJIAAgBIAAABg");
	this.shape_6.setTransform(68.3,56.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,88.8,170.3);


(lib.Symbol23 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("EA+jgNQIBDBYQBjA+AVhiEA+jgNQQgBgDgBgDEAlRgG8QJaoBKzkTIAEgCQDzhnB/gPEAq1gFaQCRgPCNg/QABAAABgBQABgBABgCQBMhegDhhQAOgoAdAcQABABABABQAiBRgPBgQB+ANB2hVQAAgBABAAQABgBABgBQAAgBAAAAEA5sgSgQCdEWhyElQgIAVgKAVQgEAIgDAIQAMgEANgEQF0AXhok0EAkAgG3QgRBQCNgIQCeAlCZgPQABgBABAAQBmi9gGi9EAkAgG3IgGgDEA1UgIMIACgEIABAAEA5+gIrQhIAUhJAHQhKAGhMgGQA8irg8iZEBBegYBQ0XBopHPiEgiHAQyQosoBp+kTIgDgCQjhhnh1gPEgscAOyQgDgXAAgYQgMgogbAcQgBABgBABQgHARgEASQiCgwiDgWQgGhhAhhbEg0OAVlIgBABQgBgBgBAAQAAgBgBAAIABAAIADABQBlAJBDg3Qgwg1gNg+QAAgCAAAAQAFgcAYATQAlA9BRAeQABAAABAAQACAAAAAAQBpgOBZgsIAAAAQBcguBJhPQBpArBtAMQAAAAABABQCOAPCRglQCCAIgPhQIAFgDEgqpAQaQgqgHgqgGQgxgHgvgGQhngLhlgGQlVgSlDA5IgDABQizAbhNAlEgscAOyQBSAiBRArQApArhSAvQgCACgBACEgp3AP7IgCAEEgtKATaQiGhOhJh2EgtTAOcQAbALAcALEg5jANeQB0gYB0gEQCSgGCRAaEg5cAKeQABgDABgDEg5cAKeIg+BYQhcA+gThiEg5jANeQgfhHAmh5Eg7fAV6QAAgDAAgCEhBdAQZQD/iJD7gyEg3DAXBQgFgEgGgDQgNgKgNgJQi2iJgYjmEg3DAXBQgJACgIACQjJCYhCjjIgCBPQgfBKgzg0Eg0SAVkQgoAggsAXQgsAYgxAOEg0SAVkQhmhTgbhzEgnPASUQhfi9AGi9Eg8JgARQSyBmIbPiEg09AFOQiAD0BCEA");
	this.shape.setTransform(419.1,153.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9EF451").s().p("Eg7fAV6IAAgFIAAAFIgCBPQgfBKgzg0IkqnGQD/iJD7gyQB0gYB0gEQh0AEh0AYQgfhHAmh5IACgGIgCAGIg+BYQhcA+gThiIAArjQSyBmIbPiQAPBQiCgIQiRAliOgPIgBgBQhaiyAAizIABgVIgBAVQAACzBaCyQhtgMhpgrIADgEQA3gfAAgeQAAgOgOgPIACgEIgCAEQhRgrhSgiQBSAiBRArQAOAPAAAOQAAAeg3AfIgDAEQhJBPhcAuIAAAAQiGhOhJh2QBJB2CGBOQhZAshpAOIgCAAIgCAAQhRgeglg9QgYgTgFAcIAAACQANA+AwA1QhDA3hlgJIgDgBIgBAAQhmhTgbhzQAbBzBmBTQgoAggsAXQgsAYgxAOIgLgHIgagTQi2iJgYjmQAYDmC2CJIAaATIgGALQhRA9g7AAQhXAAgoiIgEg7BAQWIgDABQizAbhNAlQBNglCzgbIADgBQD1grD/AAIAAAAIABAAQBRAABSAEQBlAGBnALIBgANIBUANIhUgNIhggNQhngLhlgGQhSgEhRAAIgBAAIAAAAQj/AAj1ArgEg00AEcIADACQJ+ETIsIBQosoBp+kTIgDgCQjhhnh1gPQB1APDhBngEgtTAOcIA3AWQgDgXAAgYQgMgogbAcIgCACQgHARgEASQiCgwiDgWQCDAWCCAwgEgxYANWIgBgeQAAhRAchNQgcBNAABRIABAeIgSgDIgEgBQhsgRhsAAIgBAAIAAAAIgsABIgEAAIgEAAQgWhXAAhWQAAimBUihQhUChAACmQAABWAWBXIAEAAIAEAAIAsgBIAAAAIABAAQBsAABsARIAEABIASADgEg3OAW6IAAAAgEgtKATaIAAAAgEgp5AP/IAAAAgEAl8gFvQiNAIARhQQJHviUXhoIAALlQgVBihjg+IhDhYIgCgGIACAGQBoE0l0gXIgSgIIASgqQAwh7AAh5QAAimhbihQBbChAACmQAAB5gwB7IgSAqIgHAQQhIAUhJAHQhKAGhMgGQAehVAAhQQAAhSgehNQAeBNAABSQAABQgeBVIgBAAIgCAEQh2BVh+gNQAPhggihRIgCgCQgdgcgOAoQADBhhMBeIgCADIgCABQiNA/iRAPQBhiyAAizIgBgVIABAVQAACzhhCyIgCABQgtAEguAAQhtAAhvgagEA5igTSIgEACQqzETpaIBQJaoBKzkTIAEgCQDzhnB/gPQh/APjzBng");
	this.shape_1.setTransform(419.1,153.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,840.2,309.8);


(lib.Symbol22 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AB4AxQASAXAPgZIAJhjQgBgBAAAAQgYgbgXAcIAEBKIACAYABMAjQAQAVANgWIAIhWIgBAAQgVgXgUAXIAEBBIABAUAAmAPQAMAPAKgQIAGhBIgBAAQgQgSgPASIADAzIABANAgIAWQgOAQgNgRIgHhAQAAgBABAAQATgRATASIgDAwIgCAQAg3ArQgTAUgRgWIgKhVQABgBABAAQAZgXAZAYIgEBAIgCAVAhtA4QgWAYgTgaIgLhjQABAAAAgBQAegaAdAbIgGBLIgCAY");
	this.shape.setTransform(16.3,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B08826").s().p("AiggbQAegaAdAbIgGBLQgQhAglgMgAByghQAXgcAYAaQgfAMgMBAgAhjgaQAZgXAZAXIgEBBQgOg3gggKgABHghQAUgXAVAXQgbAJgLA4gAgqgZQAUgRATASIgEAwQgKgqgZgHgAAiggQAPgSAQASQgVAHgIApg");
	this.shape_1.setTransform(16.3,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996600").s().p("AiWAwIgLhjIABgBQAmALAPBAIgCAYIAAADQgKALgKAAQgLAAgKgNgAB4AqIAAgCIgCgYQANhAAegMIABABIgJBjQgIANgJAAQgIAAgIgLgAhbAjIgKhWIACAAQAgAJAOA4IgCAUIAAACQgJAKgJAAQgJAAgJgLgABMAdIAAgCIgBgVQALg3AagKIABABIgIBVQgHAMgHAAQgHAAgIgKgAgjAPIgHhBIABAAQAZAHAKArIgCAOIAAACQgHAHgGAAQgHAAgHgIgAAmAIIAAgBIgBgOQAIgsAUgHIABABIgGBAQgFAJgGAAQgFAAgGgIg");
	this.shape_2.setTransform(16.3,7.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,34.6,15.6);


(lib.Symbol14 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("Ai8jCQACgXANgZQA6hdAqhpQAVBrgcBwQgTBCgnAeAEWFeQgTgZAAgdQAAgFABgFQACgXANgZQA6hcAqhqQAVBsgcBwQgTBCgnAdAC/EFQgTgZAAgdQAAgFAAgFQACgXANgZQA7hcAphoQAWBqgcBwQgTBCgoAdABhC3QgTgZAAgdQAAgFABgFQACgXANgZQA6haAqhqQAVBsgcBuQgTBCgnAdAAKBEQgRgZAAgdQAAgFAAgFQACgVALgZQA7hcAphqQAWBsgcBwQgTBAgoAdAiqiDQgTgZAAgcQAAgFABgFAjAi4IgMAAQgrACgug4Qg5hAghhOAh1gvQhIARhRgVQhPgUgVhAQBgAPBpgFQAAAAABAAQAGgBAHAAIARABIAAAAQA4AhggAtAhSgfQgTgZAAgcQAAgFABgFQACgXANgZQA6hdAohpQAVBrgcBwQgRBCgnAeAgdAzQhIARhRgVQhPgUgVg+QBgAPBpgFQAAAAABAAQAGgBAHAAIARABIAAAAQA2AfgeAtAA/CYQhHAQhRgVQhPgTgUhBQBfAQBngGQABAAABAAQAGAAAGgBIARACIABAAQA3AhggAsAgFEFQhMgUgUg/QBgAQBngGQAAAAABAAQAGAAAHgBIARACIAAAAQA4AhggAsACSEMQhQABhJgNQABADABACAFLGyQhIAQhRgVQhMgTgWg8QgBgCgBgDQBLAMBRAAQAWgBAXgBQAAAAABAAQAGAAAHgBIARACIAAAAQA4AhggAsAD0FZQhJAQhRgVQhMgSgTg9ACWELQgCAAgCABQAXAAAWgCQABAAABAAQAGAAAGgBIARACIABAAQA3AhggAsAl/l+IAAgBQBDgBA7A9QA1A8AQBF");
	this.shape.setTransform(22.5,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("ACyGtQhMgTgWg8IgCgFQBLAMBRAAIAtgCIgBgFQgTgZAAgdIABgKQACgXANgZQA6hcAqhqQAVBsgcBwQgTBCgnAdIAAABIgRgCIgNABIgBAAIABAAIANgBIARACIAAAAQA4AhggAsIgDABQggAHghAAQgrAAgtgMgABaFUQhMgSgTg9IgCgFIAHACIACAAQBCAKBGAAIAAAAIAAAAIAIAAIgIAAIAAAAIAAAAQhGAAhCgKIgCAAIgHgCIACAFQhMgUgUg/QBgAQBngGIABAAIANgBIARACIgRgCIgNABIgBAAIgBgFQgTgZAAgdIABgKQACgXANgZQA6haAqhqQAVBsgcBuQgTBCgnAdIAAABIAAAAQA4AhggAsIgDABIgEABIAtgCIACAAIAMgBIARACIgRgCIgMABIgCAAIAAgFQgTgZAAgdIAAgKQACgXANgZQA7hcAphoQAWBqgcBwQgTBCgoAdIAAABIABAAQA3AhggAsIgCABQggAHgiAAQgqAAgugMgAhZCTQhPgTgUhBQBfAQBngGIACAAIAMgBIARACIgRgCIgMABIgCAAIAAgFQgRgZAAgdIAAgKQACgVALgZQA7hcAphqQAWBsgcBwQgTBAgoAdIAAABIABAAQA3AhggAsIgCABQggAHggAAQgqAAgugMgAi2AvQhPgUgVg+QBgAPBpgFIABAAIANgBIARABIgRgBIgNABIgBAAIgBgGQgTgZAAgcIABgKQACgXANgZQA6hdAohpQAVBrgcBwQgRBCgnAeIAAAAIAAAAQA2AfgeAtIgDAAQggAIghAAQgrAAgtgMgAkOgzQhPgUgVhAQBgAPBpgFIgBgGQgTgZAAgcIABgKQACgXANgZQA6hdAqhpQAVBrgcBwQgTBCgnAeIAAAAIgRgBIgNABIgBAAIABAAIANgBIARABIAAAAQA4AhggAtIgDAAQggAIghAAQgrAAgtgMgAkljuQg5hAghhOIAAgCIAAgBQBDgBA7A9QA1A8AQBFIgBAKIgDAAIgMAAIgDAAQgqAAgsg2g");
	this.shape_1.setTransform(22.5,24.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-21,79,90.4);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FFFF").s().p("EgkCAQaQgVAOgaAAQghAAgYgXQgIgIgFgJQgSALgWAAQghAAgYgYQgXgXAAgiQAAggAXgYQAYgXAhgBQAQABAOAFIAAAAQAAggAWgVQATgUAagCQgHgQAAgTQAAgjAZgZQAZgaAjAAQAjAAAZAaIAGAGIAFgGQAQgPAXgBQAXABAQAPQAQARAAAWQAAAXgQARIgIAGIADACIACgCQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQgjAAgdgPIgKAMQgsArg+AAQgvABgkgZgAhMg+QgwgwAAhFQAAhEAwgxQAxgwBCABQAqAAAjASQgCgMAAgMQAAg7ArgrQAqgrA8AAQA8AAArArQAoAoACA4QAYgJAaAAQA+AAAsAsQAsAtAAA9QAAA/gsAsQgsArg+ABQgpAAghgUQgdAUglAAQgRAAgPgFIgKANQgWAVgfAAQgfAAgWgVIgIgJIgCACQgwAwhFAAQhCAAgxgwgAU+hbQgOgOgJgRQgHANgMALQghAjgwAAQgYAAgVgJQgUgJgQgRIgHgHQgtApg+ABQhCgBgvguQgvgvAAhDQAAgrAUgiQgUgbAAgkQAAgtAgggQAhghAtAAQAuAAAgAhIAMANQATgFAVAAIAUABQAJgQAOgNQANgNAOgJQAigVApABQA8AAArAqIAJAKQAYgNAdAAQAyABAjAiQAjAkAAAyIgBASQARgJATABQAjAAAZAZQAZAYAAAjQAAAkgZAZQgZAZgjAAIgGAAQgGAogfAgQgmAlg2ABQg2gBgmglgEAj5gLgQgVgVgLgZQgnAcg0AAQhCAAgvguQgvgvAAhDQAAhCAvgvQAvguBCAAQBDAAAuAuQAcAcAMAjQAggTAoAAQA8AAArAqQAqAqAAA9QAAA7gqArQgrArg8AAQg8AAgqgrg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254.4,-107.5,509,215);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(2,1,1).p("ACxgdIAAABQgaD6lCiVQgCgBgDgBQDwlTBxDvg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006600").ss(1,1,1).p("AgHgNIgCAEQgmAKgmATQgbAOgcATAAzgWQgNgxg0AHAAzgWQgfAEgdAJQAGApgxAiACNgcQgTABgTACQgaAAgaAD");
	this.shape_1.setTransform(2.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EF451").s().p("AiwBjQDwlTBxDvIgNAAQgTABgTAAQgaAAgbADQgLgpgqAAIgBAAIAAAAIgLABIgBAAIABAAIALgBIAAAAIABAAQAqAAALApQgfAEgeAJQgkAMgmATQg2AWg2AgIgGgCgAAMAQIACgEg");
	this.shape_2.setTransform(0,-2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74E30F").s().p("AitAYQA2geA3gWQAmgTAkgMQAegJAfgEQAagDAbAAQASgCAUgBIAMAAIAAAAQgQCdiGAAQhNAAh4g3gAgfAQQApgdAAglIAAgJIAAAJQAAAlgpAdgAh4ADQAcgRAcgOQgcAOgcARg");
	this.shape_3.setTransform(0.3,4.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-13.9,37.4,27.8);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#336600").ss(1.4,1,1).p("AFElHQAqgqA7AAQApAAAgATQAtglA7AAQAWAAAUAFQAmgKAqAAQBeAABIA0QANgSARgRQBEhFBiAAQBQAAA9AuQACAAADAAQBSAAA6A6QAFAFAFAGQANAAALADQAdgJAfAAQAEAAAFAAQAngiA2AAQA7AAAqAqQAEADADAEQBQhIBvAAQBeAABIA0QAMgSARgRQBFhFBiAAQBiAABEBFQAjAjASAqQAggfAsAAQANAAAMADQAcgJAfAAQBRAAA5A5QA6A6AABQQAABRg6A6QgJAHgJAHQAQANAPAPQBPBPAABwQAABwhPBPQhPBPhwAAQhwAAhPhPQgOgPgMgPQggAMgkAAQhQAAg4g5QgPgOgLgRQgdATgkAAQgLAAgKgCQgIAbgWAWQghAhgwAAQgvAAgighQgVgWgIgaQgLATgQARQgtAthBAAQgZAAgXgHQgGAHgHAHQhPBPhvAAQhwAAhPhPQgDgDgCgCQgOADgQAAQglAAgegQQhAgCgwgoQgcgDgXgRQAABGgzAyQgyAzhIAAQgeAAgZgJQgDADgDACQgrAsg+AAQg+AAgsgsQgrgrgBg8QgfgLgZgZQgBgBgBgBQgCAAgBAAQgCACgCABQgWAXgbALQgEAEgEAEQgmAlg0AAQg1AAglglQgPgPgJgRQgoAng6AAQguAAghgaQgQAZgWAWQhNBOhuAAQgjAAgggIQgOACgPAAQgeAAgagJQgDADgCACQgsAsg+AAQg9AAgsgsQgsgsAAg9QAAgUAFgTQgTAFgVAAQgXAAgVgGQgIAGgJAFQgKAVgRARQglAlg1AAQg0AAgmglQgcgcgGgmQgkAWgsAAQglAAgegPQgUAwgnAnQhOBOhtAAQhuAAhNhOQhNhNAAhuQAAgOABgNQgWAEgXAAQg8AAgugfQAAAHAAAHQAABMg2A2Qg2A2hMAAQhMAAg2g2QgkgkgMguQgSAEgUAAQg3AAgognQgogoAAg4QAAgGABgFQgRAHgUAAQglAAgbgZQgagaAAgmQAAgEABgEQguARg1AAQhyAAhRhPQhQhQAAhzQAAhyBQhRQBRhRByAAQBuAABPBKQAJgSAQgPQAogpA5AAQAvAAAkAcQAIgMALgLQA4g4BQAAQBQAAA5A4QA4A5AABPQAAAjgKAdQAXgPAeAAQAQAAAPAFQAMgfAYgYQAkgkAugJQAHgHAHgHQBRhRByAAQBuAABOBKQAKgSAPgPQApgpA5AAQAvAAAkAcQAIgMALgLQA4g4BQAAQBQAAA4A4QA4A5AABPQAAAjgKAdQABAAABAAQALgWATgTQAxgxBFAAQAAAAABAAQAlgXAvAAQBCAAAvAwQAIAIAHAIQAEAAAEAAQAxAAAiAiQACACADADQAsgcA4AAQAjAAAfALQAGgJAIgHQASgTAWgMQAJgPAKgMQAvgvBBAAQBCAAAuAvQAnAnAGA2QAIgBAHAAQAGAAAGABQAHgMALgKg");
	this.shape.setTransform(165.3,-175.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6FDD00").s().p("AINH+QgrgrgBg8QgfgLgZgZIgCgCIgDAAIgEADQgWAXgbALIgIAIQgmAlg0AAQg1AAglglQgPgPgJgRQgoAng6AAQguAAghgaQgQAZgWAWQhNBOhuAAQgjAAgggIQgOACgPAAQgeAAgagJIgFAFQgsAsg+AAQg9AAgsgsQgsgsAAg9QAAgUAFgTQgTAFgVAAQgXAAgVgGIgRALQgKAVgRARQglAlg1AAQg0AAgmglQgcgcgGgmQgkAWgsAAQglAAgegPQgUAwgnAnQhOBOhtAAQhuAAhNhOQhNhNAAhuIABgbQgWAEgXAAQg8AAgugfIAAAOQAABMg2A2Qg2A2hMAAQhMAAg2g2QgkgkgMguQgSAEgUAAQg3AAgognQgogoAAg4IABgLQgRAHgUAAQglAAgbgZQgagaAAgmIABgIQguARg1AAQhyAAhRhPQhQhQAAhzQAAhyBQhRQBRhRByAAQBuAABPBKQAJgSAQgPQAogpA5AAQAvAAAkAcQAIgMALgLQA4g4BQAAQBQAAA5A4QA4A5AABPQAAAjgKAdQAXgPAeAAQAQAAAPAFQAMgfAYgYQAkgkAugJIAOgOQBRhRByAAQBuAABOBKQAKgSAPgPQApgpA5AAQAvAAAkAcQAIgMALgLQA4g4BQAAQBQAAA4A4QA4A5AABPQAAAjgKAdIACAAQALgWATgTQAxgxBFAAIABAAQAlgXAvAAQBCAAAvAwIAPAQIAIAAQAxAAAiAiIAFAFQAsgcA4AAQAjAAAfALIAOgQQASgTAWgMQAJgPAKgMQAvgvBBAAQBCAAAuAvQAnAnAGA2IAPgBIAMABQAHgMALgKQAqgqA7AAQApAAAgATQAtglA7AAQAWAAAUAFQAmgKAqAAQBeAABIA0QANgSARgRQBEhFBiAAQBQAAA9AuIAFAAQBSAAA6A6IAKALQANAAALADQAdgJAfAAIAJAAQAngiA2AAQA7AAAqAqIAHAHQBQhIBvAAQBeAABIA0QAMgSARgRQBFhFBiAAQBiAABEBFQAjAjASAqQAggfAsAAQANAAAMADQAcgJAfAAQBRAAA5A5QA6A6AABQQAABRg6A6IgSAOQAQANAPAPQBPBPAABwQAABwhPBPQhPBPhwAAQhwAAhPhPQgOgPgMgPQggAMgkAAQhQAAg4g5QgPgOgLgRQgdATgkAAQgLAAgKgCQgIAbgWAWQghAhgwAAQgvAAgighQgVgWgIgaQgLATgQARQgtAthBAAQgZAAgXgHIgNAOQhPBPhvAAQhwAAhPhPIgFgFQgOADgQAAQglAAgegQQhAgCgwgoQgcgDgXgRQAABGgzAyQgyAzhIAAQgeAAgZgJIgGAFQgrAsg+AAQg+AAgsgsgEgkxgAtIAFACIgBgHIgEAFg");
	this.shape_1.setTransform(165.3,-175.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#336600").ss(1.4,1,1).p("A3ko/QBBBCAABcQAAAngMAjQAcgRAhAAQATAAASAFQANgjAcgdQA3g3BNAAQBNAAA2A3QA3A3AABMQAAADAAACQANgVATgTQBBhBBbAAQA/AAAyAeQAHg6AsgsQA2g2BLAAQBMAAA2A2QAtAtAHA+QAJgBAIAAQBdAABBBBQAEAFADAEQAIhAAvguQA5g5BNAAQBQAAA4A5QAOAOALAPQAngnA4AAQA4AAAoAoQAEADADADQAZgGAcAAQA8AAAvAfQARgjAdgeQBEhCBfAAQBfAABDBCQAkAlARAsQAIgCAJgBQALgjAcgcQAwgwBFAAQBFAAAwAwQAEAFAEAEQBdhUB/AAQBtAABTA9QAPgVATgUQBQhQBxAAQBxAABPBQQApAoAUAxQAlgjAzAAQAPAAAOACQAggKAkAAQBeAABCBDQBCBCAABeQAABdhCBCQgLAJgLAIQATAPARARQBcBcAACBQAACBhcBcQhbBbiBAAQiBAAhchbQgQgRgOgSQglAOgqAAQhcAAhBhBQgRgRgMgTQgiAVgqAAQgMAAgMgCQgJAfgZAZQgnAng3AAQg3AAgngnQgYgYgJgfQgNAXgTATQg0A0hLAAQhKAAg1g0QgCgCgCgDQgDADgDADQgyAzhIAAQhHAAgzgzQgOgOgKgQQgEAEgDADQgLASgPAQQgvAuhCAAQhCAAgvguQgOgOgKgQQgYAKgcAAQgsAAghgYQAABRg6A5Qg7A7hSAAQgjAAgegKQgDADgDADQgyAzhIAAQhFAAgzgzQgygzAAhHQAAgXAFgVQgWAFgXAAQgjAAgegLQgKAigcAbQgqArg9AAQg9AAgrgrQggghgIgrQgpAZgzAAQgqAAgkgSQgWA4guAtQhZBah/AAQh+AAhahaQhahZAAh/QAAgQACgQQgZAGgbAAQhFAAg2glQABAIAAAJQAABYg/A+Qg9A+hZAAQhYAAg+g+QgpgqgOg1QgVAFgXAAQhBAAguguQgtguAAhBQAAgHAAgFQgTAJgYAAQgqAAgfgeQgegeAAgsQAAgFABgFQg1AUg9AAQiEAAhehbQhdhdAAiEQAAiFBdhdQBehdCEAAQB/AABbBWQAKgVASgTQAwguBBAAQA3AAApAfQAJgNANgNQBBhBBcAAQBdAABBBBg");
	this.shape_2.setTransform(174.7,-153.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53A600").s().p("AgzJNQgygyAAhHQgBgYAGgUQgWAEgYAAQgiABgfgLQgKAhgaAbQgrArg+ABQg8gBgrgrQghgggHgrQgpAYgzAAQgqAAgkgRQgWA4guAtQhZBah/AAQh+AAhahaQhZhagBh+QABgQABgQQgZAGgbAAQhFAAg1glIAAAQQAABZg+A9Qg/A/hYAAQhXAAg/g/QgqgpgOg1QgUAFgXAAQhAAAgvguQgtguAAhBIAAgNQgTAJgYAAQgqAAgfgeQgegdAAgrIABgKQg1ATg9AAQiEAAhehbQhdhdAAiEQAAiEBdheQBehdCEAAQB/AABbBWQAKgVATgTQAuguBCAAQA2AAAqAgQAJgOANgMQBBhBBdAAQBcAABBBBQBBBBAABcQAAAngMAjQAcgRAhAAQAUgBAQAGQAOgjAdgdQA2g2BNgBQBNABA2A2QA3A3AABNIAAAEQANgVATgSQBAhBBcAAQA/AAAyAdQAHg6AsgtQA1g1BMAAQBMAAA2A1QAtAuAHA+IARgBQBcAABBBCIAIAHQAIg+AvgwQA5g4BNAAQBQAAA4A4QAOAOAKAQQAogoA4AAQA4ABAoAoIAGAGQAagGAcAAQA8AAAvAfQARgjAdgdQBDhEBgAAQBeAABDBEQAlAkARAtIARgFQALgiAbgbQAxgxBEAAQBFAAAxAxIAIAIQBchTCAgBQBtABBTA8QAPgWATgTQBQhPBwAAQBxAABQBPQApAoATAxQAmgkAzAAQAPAAANAEQAhgKAkAAQBeAABBBCQBDBCAABeQAABdhDBCIgVASQASANASASQBbBcAACBQAACBhbBbQhcBciAAAQiCAAhbhcQgRgQgNgSQglAOgqAAQhcgBhBhAQgRgSgNgSQghAVgqAAQgNAAgMgCQgJAfgZAZQgmAng3AAQg4AAgngnQgYgYgIgfQgNAXgTASQg1A1hKAAQhLAAg0g1IgEgEIgGAGQgyAzhIAAQhHAAgzgzQgOgPgLgQIgHAIQgKASgQAQQguAuhCAAQhDAAguguQgOgOgKgRQgYALgcAAQgsAAghgYQgBBRg5A5Qg7A6hTABQgigBgegJIgGAFQgyAzhIAAQhFAAgzgzgAJRBJIACgDIgCAAIAAADgEggLgA0IAGABIgBgHIgFAGg");
	this.shape_3.setTransform(174.7,-153.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#336600").ss(1.4,1,1).p("AF1mdQAMgdAYgYQAwgvBFAAQACAAADAAQACg+ArgrQAugtBAAAQBAAAAtAtQAJAIAHAKQARgDASAAQBEAAAwAvQAOAOAKAQQBHhDBjAAQBlAABIBHQBIBIAABmQAAA9gbAzQAIAGAHAIQA0AzAABIQAABJg0AxQgPAPgQALQANAjAAApQAABbhBBAQhABBhbAAQg8AAgxgcQgJAfgUAbQgKAPgOANQgNANgOALQgzAkhAACQgDAAgDAAQhQAAg7g0QgFAGgGAGQgyAyhGAAQhHAAgygyQgxgyAAhGQAAgCAAgBQgngHgegcQgEgDgDgDQgEgEgEgFQgKgLgIgOQgSggAAgoQAAgaAHgWQgXgPgVgVQgNgNgLgOQgxg/AAhUQAAhhA/hGQAFgGAFgFQAzgzBCgPQAAAAAAgBQAAgkAMgdgANPHRQgDACgDADQhABBhbAAQg8AAgxgcQgOAwgnAmQg9A+hXAAQhQAAg7g0QgFAGgGAGQgyAyhGAAQhHAAgwgyQgxgyAAhGQAAgCAAgBQgngIgegbQgEgDgDgDQgEgEgEgEQgKgMgIgNQgSghAAgoQAAgaAHgWQgXgPgVgVQgNgNgLgOQADAUAAAVQAABbhABAQhBBBhbAAQgnAAghgMQgTgHgRgJQgJAcgRAZQgMARgPAQQg+A+hXAAQhQAAg6g0QgGAGgGAGQgxAyhHAAQhGAAgygyQgygyAAhGQAAgCAAgBQgrgIghghQgsgsAAg+QAAgaAIgWQgYgPgVgVQhJhJAAhnQAAhmBJhKQAzgyBCgPQAAgBAAgBQAAhFAwgxQAxgvBEAAQADAAACAAQACg+AsgrQAtgtBAAAQBAAAAuAtQAIAIAHAKQARgDASAAQBFAAAwAvQAOAOAKAQQBHhDBiAAQBmAABHBHQBIBIAABmQAAA9gaAzQADADAEADQAFgGAFgFQAzgyBCgPQAAgBAAgBQAAhFAwgxQAwgvBDAAQACAAADAAQACg+ArgrQAugtBAAAQBAAAAtAtQAJAIAHAKQANgDAOAAAjzDqQgxhAAAhVQAAheA/hH");
	this.shape_4.setTransform(-41.3,-117.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#663300").ss(1.4,1,1).p("AEKzgQACAJABAKQAAAKAAAKQAAAhgGAbQgOA8gsAhQhfBhjSBpQgtAWgyAXIiFBPADXytQgEAOgFANQgWAvg0AjQi3B6jvBcQgDABgDABQhIAYg3AuQgZAVgWAaQgBACgCACQgCAAgCABQiVAaieC3QhmB8izB4QgEj5gWkAQgBgJgBgJQAAgEAAgEQgCguAJgmQADgOAEgOQADgIADgIQBdhwBlhiAktrSQgPgEgPgCIADgCIAbAIQBKAUAnA0QB0AxByAYQAQADAQADQAFgCAFgDQAPgIAMgIQAEgDAEgDQAxgogEg6QAMA3gnBAQgEAHgFAIQDVAcDUg3QAFgBAEgBQAogKAogOQADgBAFAAQBDgOBEgJQACgBACAAQAqgHArgEQAAAAABAAQFIgnE8AoQmVgJjYAgQgDAAgDABQgHABgHABQAAAAgBAAQhvAShqAbQgxAMgvAOQgzAPgxAQQiKAvjygWQgVgCgVgCQhWgKhkgSQAKBDgLBEQgCAHgBAHQAAABAAAAQAAACgBABQgQBuA8CdQABACABABQACAIADAHQhAgZgbhIQgPgogDg4QAAgBAAgBQAAgDAAgEQgBgdACghQAAgDAAgDQADgNACgLQABgJABgIQAGhFgkgsQgjgqhKgTQhagMh9BgQgBABgBABQjJCjhsDuQg9BzhkBoIgBABIAAABQABDghRCPQA4FrAQGBIAGgFA09xPQAFAGAFAFQABACABABQAHAIAGAKQAHAIAGAIQAHAJAGAKQAGAJAGAJQAGAJAFAJQAGAJAFAJQAFAKAFAKQAFAIAFAKQAEAJAFAKQACAGADAGQABADABADQAAAAABABQAAABAAAAQAAABAAAAQgCAJgCAIQgBAKgCAKQgCAJgCAJQgBAKgCAJQgBAJgCAKQgBAFAAAEQgBAFgBAEQgBAJgCAJQgBAIgBAJQgCAIgBAJQgBAJgBAIQgCAJgBAIQgBAIgBAIQgBAIgBAJQgBAHgBAIQgBAIgBAIQgBAHgBAIQgBAPgBAPQgBAOgBAOQgBAOgBAOQgBANAAANQgBANAAANQAAAXABAYQABAWABAWQAAAUAAAVQAAATgBATQgBASgCASQgCAQgDARQgDAXgIAXQgFANgFAOQgDAHgDAGQgDAGgDAGQgDAHgDAGQgEAHgDAIQgGAQgGARQgHAUgHAUQgHAWgGAXQgEALgDANQgDAOgEANQgDAOgEAPQgDAPgEAPQgDAQgEAQQgDAQgEASQgBAIgCAJQgCAIgBAKQgCAIgCAJQgDANgCANQgFAXgEAWQgEAXgFAWQgEAXgEAWQgEAXgEAWQgEAXgDAWQgEAXgEAWQgDAXgEAWQgDAWgDAXQgCALgBALQgBAMgCAKQgBAMgCAMQgBALgBAKQgCAMgBAMQgBALgCAKQgBALgCAMQgBALgBALQgBALgBAMQgBALgBALQgBALgCAMQgBALgBALQgBALgBAMQAAALgBALQgBALgBALQgBALgBALIAAEcIA3AAIEagBICTgBAuPy2QiDBdiLBAQg0gmgvg1AzDuIQgEgDABgG");
	this.shape_5.setTransform(33.4,44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9DF64E").s().p("AlOIHQgxgxAAhHIAAgCQgsgIghgiQgrgrgBg/QAAgZAIgWQgXgPgWgVQhIhJgBhmQABhnBIhJQAzgzBCgQIAAgCQABhEAvgxQAxgvBEAAIAFAAQACg+AsgrQAtguBAAAQBBAAArAuQAJAIAGAKQARgDASAAQBFAAAwAvQAOAOAKARQBHhEBigBQBmAABIBIQBIBIAABlQAAA+gbAzIAHAGQg/BHAABeQAABUAxBBQADATAAAVQAABchABAQhABBhbgBQgnAAgigLQgTgHgRgKQgJAdgRAZQgLARgQAQQg9A+hYAAQhNAAg7g1IgLAMQgyAzhHAAQhGAAgygzg");
	this.shape_6.setTransform(-123.9,-112.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC00").s().p("ApKJnQgygyAAhHIAAgCQgngIgegbIgHgGIgHgIQgLgMgHgNQgTghAAgoQAAgaAIgWQgYgPgVgVQgNgNgLgOQgxhBAAhUQAAheA/hHIAKgLQAzgzBCgOIAAgCQAAhFAwgwQAwgxBFAAIAFAAQACg9AsgrQAtgtBAAAQBAAAAuAtQAIAJAHAJQANgDAPAAQgNAdAAAkIAAACQhCAOgzAzIgKALQg/BHAABgQAABUAyA/QAKAOANANQAVAVAXAPQgHAWAAAaQAAAoASAhQAIANAKAMIAIAHIAHAHQAeAcAnAHIAAACQAABHAxAyQAzAxBGAAQBFAAAxgxIALgNQA7A0BQAAIAGAAIgGAAQhQAAg7g0IgLANQgxAxhFAAQhGAAgzgxQgxgyAAhHIAAgCQgngHgegcIgHgHIgIgHQgKgMgIgNQgSghAAgoQAAgaAHgWQgXgPgVgVQgNgNgKgOQgyg/AAhUQAAhgA/hHIAKgLQAzgzBCgOIAAgCQAAgkANgdQAMgdAXgXQAxgxBEAAIAFAAQACg8ApgsQAugtBAAAQBAAAAuAtQAIAIAHAKQARgDASgBQBFAAAvAxQAOAOALAQQBHhFBiAAQBmAABHBIQBIBIAABmQAAA9gaAzIAPAOQAzAzAABIQAABJgzAxQgQAPgQALQANAjAAAoQAABbhBBBQhABBhbAAQg8AAgwgcQgKAfgTAbQgLAPgOANQgNANgOALQgyAkhBABIgFAGQhBBBhbAAQg8AAgxgcQgMAvgnAnQg9A9hXAAQhQAAg6g0IgMANQgxAxhHAAQhHAAgxgxg");
	this.shape_7.setTransform(16.1,-117.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8CC36").s().p("AinQ2IAAkbIACgXIACgVIABgXIACgWIACgXIADgWIACgXIACgWIACgXIADgWIADgWIADgXIACgWIADgXIADgXIADgWIAGgsIAHgtIAIgtIAHgtIAIgtIAIgtIAJgtIAJgtIAFgaIAEgSIADgSIADgPIAHghIAHghIAHgdIAHgdIAHgbIAHgaIALgtIAOgpIAMghIAHgOIAGgNIAGgMIAGgNIAKgbQAIgXADgXIAFghIADgkIABgmIAAgqIgCgrIgBgvIABgaIABgbIACgbIACgcIACgeIACgPIACgQIACgPIACgRIACgQIADgRIACgRIADgSIACgRIADgSIACgIIABgKIADgSIADgTIAEgTIADgTIAEgRQAcAdgTgUIgJgKIAAgBIgBgBQACgBAKAMQAKALAEAcQAEAcAFAEQAGAEgCAJIgBAKIgCAIIgDASIgCARIgDASIgCARIgDARIgCAQIgCARIgCAPIgCAQIgCAPIgCAeIgCAcIgCAbIgBAbIgBAaIABAvIACArIAAAqIgBAmIgDAkIgFAhQgDAXgIAXIgKAbIgGANIgGAMIgGANIgHAOIgMAhIgOApIgZBPQgSA5Bbg0QgDAogkABQgkABgFAIQgFAIgEAOIgHAhIgHAhIgBAPIgDASIgEASIgFAaIgJAtIgJAtIgIAtIgIAtIgHAtIgIAtIgHAtIgGAsIgDAWIgDAXIgDAXIgCAWIgDAXIgDAWIgDAWIgCAXIgCAWIgCAXIgDAWIgCAXIgCAWIgBAXIgCAVIgCAXIAAEbg");
	this.shape_8.setTransform(-101.7,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BCF788").s().p("AAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(121.3,-18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#73581A").s().p("AwAS4QBbl3g4l3IAAgCQAyhqhtA2QCMh7AHhmQAHhnAAgXIABgDQBkhmA9h1QBsjuBlhSQBlhSA1giQA1giBugRIAHACIAUgBQARgDAXAPQA6AVAvAsQAPAcgLAcIABADQAMAngDA2IgBARIgFAYQABADgFAbQgEAaAEAJIAFAKIABAlQAAAjAUAkQASAlAjAZIADABIAFAPQg+gZgbhIQgPgogDg4IAAgCIAAgHQgBgdACghIAAgGIAFgYIACgRQAGhFgkgsIACgFIgEgBIACAGQgjgqhKgTQhagMh9BgIgCACQjJCjhsDuQg9B1hkBmIgBABIgNAAIANABQABDghRCPQA4FrAQGBIiTABgAvBscIAAgIQgBgKABgKIgCAPQAHhFgJhDQgNgeAZgPQBrh4BuhoIAIAIIAGAGQhlBihdBxIgGAQIgHAcQgJAmACAuIAAAIIACASQAWEAAED5QCzh4Bmh8QCei3CVgaIAEgBIADgEIAKgGQAIAmhfAXQhgAXimDCQhmB8izB4QgEkDgYkJgADxoSIgqgEQhYgKhkgSIAAgGICcADQA1ABBMAPQBMAQBPgXQBRADAvgLQBfgXAygPQAxgPA8gLQA8gLAxghIAEgBQARgCAqALQAgAIAMgEIAAABIgOACIgBAAIAAAAQhvAShqAbQgxAMgvAOQgzAPgxAQQhfAgiOAAQhCAAhNgHgAiOtDIADgBQATgJAUgHQBJgcBEgiQDQhnCrilQgOA8gsAhQhfBhjUBpQgtAWgwAXIiFBPQgrgRg7AcQBAgzBDggg");
	this.shape_10.setTransform(17.7,47.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B08826").s().p("A3TPFIACgWIACgWIACgWIACgXIACgWIACgXIACgWIADgXIACgWIADgXIACgWIADgXIADgWIADgXIACgWIADgXIAHgrIAHgtIAHgtIAHgtIAIgtIAJgtIAJgtIAIgtIAFgaIAEgSIADgSIAEgRIAHgiIAHggQADgPAFgIQAFgIAlAAQAkgBACgpQhbA0ATg4IAZhOIANgoIANghIAGgPIAGgMIAGgMIAGgOIAKgbQAIgXAEgWIAFgiIADgkIABgmIgBgpIgBgrIgBgwIAAgZIABgbIACgbIACgdIADgeIACgPIABgPIACgQIACgRIADgQIACgRIADgQIACgSIADgRIADgSIABgIIACgKQABgJgFgFQgGgDgDgcQgEgcgKgMQgLgLgBAAIgDgGIgFgMIgJgTIgJgSIgKgTIgLgSIgLgTIgMgSIgNgSIgNgRIgOgSIgCgCIgJgMQARgZAIgdQARAKATAHQAvA1A0AmQCLhACDhcQAHANALAMQhuBnhrB4QgZAPANAeQAIBEgHBFIADgQQgBAKAAAKIABAIQAXEKAEECQCzh4Bnh8QCljCBggXQBggXgJgmIgJAGQAVgaAagUQA3gvBHgYIAHgBQDuhdC4h6QA0gjAVgvQAGgNADgNQAPgLANgNQANgNALgPIACATIABAVQAAAggHAbQiqCljOBnQhGAjhKAbQgTAHgUAKIgCABQhDAfhBAzQA7gcAsARIgEACQAQADAOAEQBKATAnA1QB0AwByAZIAgAFIALgEIAagRIAIgGQAxgogDg6QALA3gmBBIgKAOQDVAcDVg3IAJgCQAngKAogNIAIgCQBEgNBEgKQgyAhg8ALQg8ALgxAQQgxAOhgAYQgvALhRgDQhOAWhMgPQhMgQgzgBIidgDIAAAGQALBDgMBEIgCAPIgBABIAAACQgQBuA8CeIABACIgCgBQgjgZgUglQgUgkgBgjIAAglIgFgKQgFgIAFgbQAEgbAAgDIAEgYIACgRQACg2gLgnIgBgDQALgcgQgcQgugrg6gWQgYgOgRACIgUACIgGgCQhuARg1AhQg1AjhlBRQhlBThsDtQg+B1hjBmIgCAEQAAAWgGBnQgHBniNB7QBtg2gyBpIAAADQA5F2hcF4IAAAGIkaABgAwrCEIANAAIAAAAgAkCoJIADABIgBAFIgCgGgAM1p2QgrgMgQACQAqgHAqgEIABAAQFIgnE9AoQmWgJjXAgIgGABIAAgBQgEACgGAAQgNAAgVgFgAzfuIIAAgBIAJAKIAIAIIgRgRg");
	this.shape_11.setTransform(36.2,44.6);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186.4,-232.3,636.6,402.8);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(1.4,1,1).p("AbbrjQAHAtAGAsQAGAxAFAxQBLL8kDLNIhfndIgFgXEAibgJrIACgUEA1WAM+IgEAnEAqZADRIACgKEAixANvQCUj6hSj6IAAAAIAEgeEAixANvIAAAoEArNAOcIADgOQBGtOENrGQkhQTFGHiQD0mXgCn3IAcNdEArNAONQh+kiBKmaEAnsgA5QBoHghFHcICKqyAWbOrIAIg9IA5mqAc1OXIAAAKAc1OXQDNlkhwlkQB8E/gbGJQDWsCgusAQBnLshRLuAQLFdIgDAUQBaGBjPGBQAasFjNsrQC4MqkTMGAS/MzIgFAjAS/MzQAmj6hOj6ASVE/QAvFohfFoAJ7RzQALmwhjmKQBKHUjOFcQims7AyrmIiLXJIgFA6ACgQRQAdm0iQluAApDvQBwHCjtHCIABAUAhURzQgRqmhmqjQBbKykZKhQAPkJibkJQB9EEj1EEQAGoShroSIABgKAWjNuQBAp/iOp+EA6VAE3IigtXQBcK7j7KjAVRmPQBpJgj7JiAbzooQBcLfgaLgEg5sARLQCgvmjIvAQEpO9gbQHQEUpthMq5QCkKXhoKZQF4szAXuoQAFOAhUNlQFZpFiUppIADgUA1TAPIgKgiA+DRfQCFlfhdmFIAAgKA4HRLIAAAUA7WNNQgCBsABBuIgDAlIABAJA7WNNQAIBrgJBvA9RF7QBoDhATDxQALseChrgAubSRIAAAKA+DRfIAAAKEgohAR9IABAKEgohAR9QEAk7g3ljQB7FPgXFPQFmx5iVyeQCySRgSRoAubSRQAmtciptaQBQNQjlNSQgTpViNoZA4HRLQE6oOiGouA4lqxQiiN9DAN/Egp6gAxQDEJDhrJrAryBPQBbI1kEIN");
	this.shape.setTransform(29.4,-15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006600").ss(1.4,1,1).p("EAzJACrIADAMEAx8gCQQBaBrgNDQQDIl4ghl6EAgZgDMIADgoAeQiaQCKFOg8FPIACATEg10gE2QEmEtBkHcQBJl9jXl9QEkFDBpIkIADAI");
	this.shape_1.setTransform(-60.7,36.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AE00").s().p("AAAhrQAGBqgGBuQgBhtABhrg");
	this.shape_2.setTransform(-145.7,79.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EF451").s().p("Eg/GASsIAAvtQElEsBkHeQBJl9jWl+QEjFEBpIkIAEgCQCgvmjIvAQEpO9gbQHQEUpthMq5QCkKXhoKZQF4s0AXunQAFOAhUNlQFZpFiUpqIADABQDEJDhrJrQEAk8g3liQB7FPgXFPQFmx3iVyhQCySSgSRoQCFlghdmFIAKABQBoDgATDyQgCBsABBuIgDAkIABAKIgBgKIADgkQAJhvgIhrQALsfChrgIAFABQiiN9DAN/QE6oOiGosQCNIWATJWQDltShQtQQCpNagmNcIAAAKIAAgKQEEoOhbo0QBrISgGISQD1kEh9kEQCbEJgPEJQEXqihbqyQBmKkARKmQDvnChwnDIAEABQCQFugdG0ICL3KQgyLnCmM7QDOldhKnUQBjGLgLGwIAKAAQETsGi4sqQDNMqgaMGQDPmBhamCIADABQCKFQg8FPIACATIgCgTIAMgBQBflogvloIACAAQBOD6gmD6IgFAjIAFgjQD7pjhppgIAEABQCOJ9hAKAIA5mrIBfHeQEDrOhLr7QBcLegaLhQDNlkhwlkQB8E+gbGKQDWsCgusAQBnLshRLuIAAAoIAAgoQCUj6hSj6IAEAAQBaBrgNDSIADAMIgDgMQDJl6ghl3QBoHfhFHdICKqzQhKGaB+EjIADAAQBGtNENrHQkhQUFGHiQD0mXgCn3IAcNdIgEAnIAEgnQD7qjhcq7ICgNWIgFOUgADdRwIgBgUgEgjuARwIgBgKgA5RRSIAAgKgAzVRIIAAgUgEg06AQ+IgEgIgAHNQ0IAFg6gAbNOUIAIg9gEAhnAOKIAAgKgEAv/AOFIADgPg");
	this.shape_3.setTransform(-1.2,-13.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-406.2,-134.6,810,241.7);


(lib.leaf = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("AC0GNQA2gDArgKQCmgoBvg4QAPgIANgIQAAAAABgBQBTg0AMhKQANhXAAgTQgBgGAAgGQgBgUgEgRQgBgFgBgEQgUhMg9gvQgFgDgFgEQgLgIgNgHQhhg1iugDQgDAAgEAAACnmHQBFAQAyA/QAWARgUBLQABAAABAAQgBAAgBABQh5AghpAoQAsAGA3AMQACABACAAAIrDGQhoj8kfhKQgBAAgBAAQgBAAAAAAAiCg8QAxAHApARQDGBOAUEhQAAAAAAABQACAfAAAiQhcAGh5gNQAGghADgRQAXj0iThOQgegQgkgIAIrDGIAAABIAAAAQANAgALAkAIrDGQAAAAAAABAhal9QBkA4AUBZQAAABAAAAQAKAugMA3AiCg8QgVALgVAMAlYBHIAAAAQA+gtBBglQAWgOAXgMQgTgrgcgdIgBAAQhNhQiUARQCTikDQgtQB0gZCJAMAA+iTQgRAGgRAHQhQAhhOApAopgVQBagOBFA2QABABABABQAZAVAWAeQAAgBABAAQAOASAJASQAAAAABABQAuBXgRCOQgCgCgCAPQivgWivA5QgEACgTAKQgUAKgCgoAopgVQAxhVA7hCAqTFmQACgCADgDQABgCACgBQCPigCjh2AqyFtQAAgCAAgCQA1juBUiQAqNFgIACgCAghGGQhbgKhsgTQgfgHgegDQgBgBgBAA");
	this.shape.setTransform(69.1,39.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7CF013").s().p("AAAAAIAAAAIABAAg");
	this.shape_1.setTransform(85.5,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56B01A").s().p("Ag1FbIAJgyIDKgIQACAfAAAiQgbACgeAAQhHAAhVgJgACeEhIAAgBQDbgVCfhvIAAAAQANAgALAkQgLgkgNggIAAgBQBshYgxjPIABAAIgBgBQABgWgMgRIgBgFQA9AvATBMIACAJQAEATACAUIAAAMQABARgNBXQgMBKhUA0IgBABIgbAQQhvA4inAoQgrAKg2ADQAAgigCgfgAj8E+QgegHgegDIACgOIEKADIgJAyQhagKhtgTgAmggSIACAAIADgCQAYAUAXAdQikB2iOCgQBuiyCQiTgAgsEpgAmbgUICsiEIABAAQAcAdATArIgtAaQhCAng9ArIAAAAIgBABQgXgdgYgUgAmbgUIAAAAgAi/hQIAAAAgAjuiYQCDhPB2gwIAAABID/hNQAXARgUBLIAAABQh5AghpAoIgiANQAGgeAAgbQAAgXgEgVQAEAVAAAXQAAAbgGAeQhRAhhNApIgqAXQgTgrgcgdg");
	this.shape_2.setTransform(71.1,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#75CD14").s().p("Ap3EcIgCACIgBABIADgDgAp3EcQCPigCjh2IABgBIAAAAQA+grBBgnIAtgaIAqgXQAxAHApARQgpgRgxgHQBOgpBQghIAigNQAsAGA3AMQg3gMgsgGQBpgoB5ggIACgBIAHAAQCuADBhA1QANAHALAIQAHAGAFAGQAMARgCAWIABABIgBAAQjqhwjbBQIAAABIACAAIABAAIgPAAIi9BcIhsA4QgegQgkgKQAkAKAeAQIisBYIgBgBQgJgSgOgSQAOASAJASQipBmijCPg");
	this.shape_3.setTransform(67.1,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9EF451").s().p("AqTFvIAAgCIAAgEQA0juBUiQIAEAAQAQgDAQAAIAAAAIAAAAQBCAAA1AnIABACIABABIACABIADACIgDACIgCAAQiQCVhvCyIgCADIgFAFIAFgFIABgBQCjiPCphmIAAABQAiBAAABdQAAAigEAmIAAAAIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIgBAGIAAAAIgBAEIgBADIABgDIABgEIAAAAIABgGIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAQAEgmAAgiQAAhdgihAICshaIBsg2IC9hcIAPAAQEgBKBoD8Qhoj8kghKIABAAIgEgBIAEABIgCAAIgCAAIAAgBQDbhQDrBwQAxDPhsBYIgBABIABgBIAAABIgBAAQieBvjbAVQgUkhjGhOQDGBOAUEhIAAABIjMAIQAEgiAAgeQAAi/h+hDQB+BDAAC/QAAAegEAiIkIgDIgCAOIgDgBQivgWivA5IgXAMQgDACgDAAQgOAAgBgggAlsATIgCgBIgBgBIgBgCQg1gnhCAAIAAAAIAAAAQgQAAgQADIgEAAQAxhVA8hCQCSikDRgtQBzgZCKAMIAEADQBFAQAxA/Ij/BNIgBgBQgThZhkg4QBkA4ATBZQh1AwiEBPIAAAAIgDgDQg/g/hsAAIAAAAIgBAAQgXAAgZADIgCAAIACAAQAZgDAXAAIABAAIAAAAQBsAAA/A/IADADIisCCIgDgCgAJviVIAKAHIABAFQgFgGgGgGgAE/jcIABAAIgBABg");
	this.shape_4.setTransform(66.1,39.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,140.3,81.9);


(lib.BackgroundBox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("EgsHgXaMBYPAAAMAAAAu1MhYPAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2A84F").s().p("EgsHAXbMAAAgu1MBYPAAAMAAAAu1g");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-283.4,-150.9,567,302);


(lib.sadParrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* this.stop();*/
	}
	this.frame_1 = function() {
		/* this.stop();*/
	}
	this.frame_2 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// sad1
	this.instance = new lib.sad01();
	this.instance.setTransform(3.4,34.3,1,1,0,0,0,16.1,6.8);

	this.instance_1 = new lib.bodyonly();
	this.instance_1.setTransform(3.5,0.5,1,1,0,0,0,48.5,85.5);

	this.instance_2 = new lib.wing();
	this.instance_2.setTransform(46.1,-43.7,0.442,0.425,88.8,0,0,7.2,7.3);

	this.instance_3 = new lib.wing();
	this.instance_3.setTransform(-47.5,-44.1,0.442,0.442,0,-93.5,86.5,7.4,7.3);

	this.instance_4 = new lib.sad02();
	this.instance_4.setTransform(5.3,34.3,0.63,0.63,0,0,0,20.7,21.7);

	this.instance_5 = new lib.sad3();
	this.instance_5.setTransform(2.1,36.9,1,1,0,0,0,6.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regY:7.3,skewX:-93.5,skewY:86.5,x:-47.5,y:-44.1,regX:7.4}},{t:this.instance_2,p:{regY:7.3,rotation:88.8,x:46.1,y:-43.7,regX:7.2}},{t:this.instance_1,p:{x:3.5,y:0.5}},{t:this.instance}]}).to({state:[{t:this.instance_3,p:{regY:7.2,skewX:-81.2,skewY:98.8,x:-47.1,y:-45,regX:7.4}},{t:this.instance_2,p:{regY:7.2,rotation:75.3,x:46.6,y:-44.7,regX:7.2}},{t:this.instance_1,p:{x:3.6,y:0.5}},{t:this.instance_4}]},1).to({state:[{t:this.instance_3,p:{regY:7.3,skewX:40.6,skewY:-139.4,x:10.5,y:-20.1,regX:7.3}},{t:this.instance_2,p:{regY:7.3,rotation:-46.3,x:-1.7,y:-23.2,regX:7.3}},{t:this.instance_1,p:{x:3.2,y:0.6}},{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-85.5,103.8,172.1);


(lib.LeavesReveal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
		//MovieClip(parent).mainText.play();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(1));

	// Left Leaf
	this.instance = new lib.Symbol1();
	this.instance.setTransform(237.9,228.4,5.17,5.206,0,-85.1,94.9,90.3,54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:180.8,regY:-12.9,skewX:-140.7,skewY:39.3,x:-294,y:1071.9},30).wait(1));

	// Right Leaf
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(548,414.7,5.877,5.877,61,0,0,90.3,54);
	this.instance_1.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 56.12, 97.6, 0, 0)];
	this.instance_1.cache(-3,-18,187,129);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({regX:143,regY:25.6,rotation:134.2,x:1158.2,y:955.3},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.9,-270.2,1323.2,1307.5);


(lib.InitialChoose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* starttxt.mouseEnabled = false;*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.starttxt = new cjs.Text("Start", "20px 'Tahoma'", "#663300");
	this.starttxt.name = "starttxt";
	this.starttxt.textAlign = "center";
	this.starttxt.lineHeight = 22;
	this.starttxt.lineWidth = 111;
	this.starttxt.setTransform(280.5,198);

	this.startPlaying = new lib.Start();
	this.startPlaying.setTransform(282.5,212.1,1,1,0,0,0,59,59);
	new cjs.ButtonHelper(this.startPlaying, 0, 1, 2, false, new lib.Start(), 3);

	this.txt = new cjs.Text("Select Questions", "30px 'Tahoma'", "#663300");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 32;
	this.txt.lineWidth = 526;
	this.txt.setTransform(280.5,31.3);

	this.instance = new lib.BackgroundBox();
	this.instance.setTransform(282.5,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt},{t:this.startPlaying},{t:this.starttxt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,567,302);


(lib.Happy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 9
	this.instance = new lib.smile();
	this.instance.setTransform(1.7,35.9,0.751,0.751,0,0,0,31.9,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	// Layer 1
	this.instance_1 = new lib.bodyonly();
	this.instance_1.setTransform(0.5,0,1,1,0,0,0,48.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35));

	// Layer 7
	this.instance_2 = new lib.wing1();
	this.instance_2.setTransform(-19.3,-12.8,0.249,0.543,0,-129.9,50.1,0.8,76.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.7,regY:76.2,scaleX:0.54,skewX:-9.9,skewY:170.1},6).to({regX:0.6,regY:76.3,skewX:10.3,skewY:190.3,y:-12.7},5).to({regX:0.5,regY:76.2,skewX:-12.4,skewY:167.6,y:-12.8},4).to({regX:0.7,skewX:7.6,skewY:187.6,x:-19.4},4).wait(9).to({skewX:7.6},0).to({regX:0.6,scaleX:0.29,skewX:-133.4,skewY:46.6,x:-19.3,y:-12.7},6).wait(1));

	// Layer 6
	this.instance_3 = new lib.wing1();
	this.instance_3.setTransform(27.6,-13.8,0.283,0.501,131.7,0,0,2.1,74.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:2.4,regY:74.3,scaleX:0.54,scaleY:0.54,rotation:7.5,x:27.7},6).to({rotation:-13},5).to({regY:74.4,rotation:10.5,y:-13.7},4).to({regY:74.3,rotation:-11,y:-13.8},4).wait(9).to({regY:74.2,scaleX:0.31,rotation:132.3},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-86,107.6,172.1);


(lib.EditAreaOptions = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Add Category", "13px 'Adobe Clean'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.setTransform(-316.9,-24.8);

	this.text_1 = new cjs.Text("Add Answers", "13px 'Adobe Clean'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.setTransform(13.1,-24.8);

	this.removeBtn = new lib.remove();
	this.removeBtn.setTransform(352,-12.7,1,1,0,0,0,8,8.5);

	this.removeBtnDis = new lib.removeoff();
	this.removeBtnDis.setTransform(351.4,-12.6,1,1,0,0,0,8,8.5);

	this.instance = new lib.remove();
	this.instance.setTransform(351.4,-12.6,1,1,0,0,0,8,8.5);

	this.addBtn = new lib.Add();
	this.addBtn.setTransform(351.4,14.4,1,1,0,0,0,8,8.5);

	this.addBtn_1 = new lib.AddDeactive();
	this.addBtn_1.setTransform(351.4,14.4,1,1,0,0,0,8,8.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CBCBCB").ss(1,1,1).p("EA0ggE/IE6AAIAAJ/Ik6AAMht5AAAIAAp/g");
	this.shape.setTransform(0.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2F2F2").s().p("Eg28AFAIAAp/MBt5AAAIAAJ/g");
	this.shape_1.setTransform(-15.2,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CACAC8").s().p("AicFAIAAp/IE5AAIAAJ/g");
	this.shape_2.setTransform(352.3,0.5);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.addBtn_1,this.addBtn,this.instance,this.removeBtnDis,this.removeBtn,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-930.3,-61.5,1986.4,84.4);


(lib.cagefront = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.cagepart1();
	this.instance.setTransform(191.1,260.4,1,1,0,0,0,223.5,8.5);

	// Layer 3
	this.instance_1 = new lib.cagepart1();
	this.instance_1.setTransform(191.1,30.4,1,1,0,0,0,223.5,8.5);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("AgHWgQA3gbAqhhMAAAgqAQg6hIgpgGQgygHgeBVMAAAAsCQAsANAmgTg");
	this.shape.setTransform(371.5,146);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(1,1,1).p("AgR1qQAHgUAKAAQAKAAAIAZQAIAZAAAjQAAAjgIAZQgIAZgKAAQgJAAgHgRQgBgEgCgEQgIgZAAgjQAAgjAIgZQABgCABgDgAAE1CQADAAACAHQACAIAAAKQAAAKgCAIQgCAHgDAAQgDAAgBgHQgCgIAAgKQAAgKACgIQABgHADAAgAgIh4QACgBATiXQAViXADB1QADB0gHCPQgHCMgJAsQgKAtgLAAQgBAAgBAAQgMgDgJgqQgKgsAAg/QAAg9AKgtQAIgmALgGgAgEgHQACAMAAAUQAAATgCAOQgCAOgDAAQgDAAgDgOQgCgOAAgTQAAgUACgMQADgOADAAQADAAACAOgAAATXQAAABAAABQAGAcAAApQAAAngGAcQAAABAAABQgFAcgJAAQgKAAgGgcQgHgdAAgoQAAgpAHgcQAGgdAKAAQAJAAAFAbgAgNURQABAJAAAOQAAANgBAKQAAAJgBAAQgBAAgBgJQgBgKAAgNQAAgOABgJQABgKABAAQABAAAAAKg");
	this.shape_1.setTransform(370.4,144.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC6600").s().p("AgIWiIgBhLQAGgcAAgnQAAgpgGgcIgBgCIgHwhIACAAQANAAAHgtQAKgsAHiMQAHiPgDh0QgEh1gVCXQgSCXgDABIgHxtQAHARAJAAQALAAAHgZQAIgZAAgjQAAgjgIgZQgHgZgLAAQgKAAgHAUIgBgoIg7BGQAdhVAzAHQAoAGA6BIMAAAAqAQgqBhg2Abg");
	this.shape_2.setTransform(371.5,145.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("Ag5WiMAAAgsCIA6hGIAAAoIgBAFQgHAZAAAjQAAAjAHAZIACAHIgCgHQgHgZAAgjQAAgjAHgZIABgFQAHgUALAAQALAAAIAZQAIAZAAAjQAAAjgIAZQgIAZgLAAQgKAAgHgSIAIRuQACgBAViXQAViXADB1QADB0gHCOQgGCNgKAsQgKAtgNAAIgCAAQgMgDgHgqQgKgtAAg/QAAg9AKgtQAHgmAKgFQgKAFgHAmQgKAtAAA9QAAA/AKAtQAHAqAMADIAHQgIABACQAGAdAAAoQAAAngGAcIAAACQgHAdgJAAQgIAAgGgdQgHgcAAgpQAAgoAHgdQAGgcAIAAQAJAAAGAaQgGgagJAAQgIAAgGAcQgHAdAAAoQAAApAHAcQAGAdAIAAQAJAAAHgdIAAgCIABBMIACAEQgXALgXAAQgQAAgSgFgAABUTIABAXQABAKABAAQABAAAAgKIABgXIgBgXIABAXIgBAXQAAAKgBAAQgBAAgBgKIgBgXIABgXQABgJABAAQABAAAAAJQAAgJgBAAQgBAAgBAJIgBAXIAAAAgAABAEQAAAUACAOQADAOADAAQADAAACgOQACgOAAgUQAAgRgCgOQACAOAAARQAAAUgCAOQgCAOgDAAQgDAAgDgOQgCgOAAgUQAAgRACgOQADgOADAAQADAAACAOQgCgOgDAAQgDAAgDAOQgCAOAAARIAAAAgAAQ09QAAAKACAHQADAIADAAQADAAACgIQACgHAAgKQAAgLgCgHQgCgHgDAAQADAAACAHQACAHAAALQAAAKgCAHQgCAIgDAAQgDAAgDgIQgCgHAAgKQAAgLACgHQADgHADAAQgDAAgDAHQgCAHAAALIAAAAg");
	this.shape_3.setTransform(368.4,146.4);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#330000").ss(1,1,1).p("AgHWgQA3gbAqhhMAAAgqAQg6hIgpgGQgygHgeBVMAAAAsCQAsANAmgTg");
	this.shape_4.setTransform(9,145.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#330000").ss(1,1,1).p("AgL1qQAHgUAIAAQAMAAAIAZQAIAZAAAjQAAAjgIAZQgIAZgMAAQgHAAgHgRQgCgEgBgEQgIgZAAgjQAAgjAIgZQABgCABgDgAAP07QACAIAAAKQAAAKgCAIQgDAHgCAAQgEAAgCgHQgCgIAAgKQAAgKACgIQACgHAEAAQACAAADAHgAgDh4QACgBABAAQANAAAJAtQAKAtAAA9QAAA/gKAsQgJAtgNAAQAAAAgBAAQgMgDgJgqQgJgsAAg/QAAg9AJgtQAIgmALgGgAgJgHQACgOADAAQADAAABAOQACAMAAAUQAAATgCAOQgBAOgDAAQgDAAgCgOQgCgOAAgTQAAgUACgMgAAFTXQAAABAAABQAHAcAAApQAAAngGAcQgBABAAABQgFAcgJAAQgJAAgHgcQgGgdAAgoQAAgpAGgcQAHgdAJAAQAJAAAFAbgAgHURQABAJAAAOQAAANgBAKQgBAJgBAAQgBAAgBgJQAAgKAAgNQAAgOAAgJQABgKABAAQABAAABAKg");
	this.shape_5.setTransform(7.3,143.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC6600").s().p("AgoWiMAAAgsCIA7hGIAAAoIgCAFQgIAZAAAjQAAAjAIAZIADAHIAIRuQgMAFgHAmQgJAtAAA9QAAA/AJAtQAIAqANADIAHQgQgGgagKAAQgJAAgHAcQgFAdAAAoQAAApAFAcQAHAdAJAAQAKAAAHgdIAAgCIABBMIABAEQgWALgXAAQgRAAgSgFg");
	this.shape_6.setTransform(4.1,145.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#663300").s().p("AgIWiIgBhLQAGgcAAgnQAAgpgGgcIgBgCIgHwhIABAAQAOAAAIgtQAJgsAAg/QAAg9gJgtQgIgtgOAAIgDABIgIxtQAHARAKAAQAKAAAHgZQAIgZAAgjQAAgjgIgZQgHgZgKAAQgLAAgHAUIAAgoIg9BGQAehVAzAHQAoAGA6BIMAAAAqAQgrBhg2AbgAgqVZQgGgdAAgoQAAgpAGgcQAHgdAJAAQAKAAAGAbIABACQAGAcAAApQAAAngGAcIAAACQgHAcgKAAQgJAAgHgcgAgcUeIABAXQABAJAAAAQACAAAAgJIABgXIgBgXIABAXIgBAXQAAAJgCAAQAAAAgBgJIgBgXIABgXQABgKAAAAQACAAAAAKQAAgKgCAAQAAAAgBAKIgBAXIAAAAgAgJVXIAAAAgAgRCsQgNgDgIgqQgKgsAAg/QAAg9AKgtQAHgmAMgGIADgBQAOAAAIAtQAJAtAAA9QAAA/gJAsQgIAtgOAAIgBAAgAgcAPQAAATACAOQADAOADAAQADAAABgOQADgOAAgTQAAgSgDgOQgBgOgDAAQgDAAgDAOQgCAOAAASIAAAAgAgRCsIAAAAgAgaAwQgCgOAAgTQAAgSACgOQADgOADAAQADAAABAOQADAOAAASQAAATgDAOQgBAOgDAAQgDAAgDgOgAgbzvIgDgIQgIgZAAgjQAAgjAIgZIACgFQAHgUALAAQAKAAAHAZQAIAZAAAjQAAAjgIAZQgHAZgKAAQgKAAgHgRgAgN0zQAAALACAHQACAHADAAQADAAADgHQAAgHAAgLQAAgKAAgIQAAAIAAAKQAAALAAAHQgDAHgDAAQgDAAgCgHQgCgHAAgLQAAgKACgIQACgHADAAQADAAADAHQgDgHgDAAQgDAAgCAHQgCAIAAAKIAAAAgAgbzvIAAAAg");
	this.shape_7.setTransform(9,144.6);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.9,-1,448,293.2);


(lib.Symbol24 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6("synched",0);
	this.instance.setTransform(208.5,48.8,0.364,0.378,0,-116.5,-132.3);

	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(203.7,37.2,0.364,0.378,0,117.8,102);

	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.setTransform(191.5,43,0.69,0.69,11.7);

	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.setTransform(114.2,13.9,0.69,0.69,-30.5);

	this.instance_4 = new lib.Symbol6("synched",0);
	this.instance_4.setTransform(60.9,207.9,0.69,0.69,-30.5);

	this.instance_5 = new lib.Symbol6("synched",0);
	this.instance_5.setTransform(60.3,59.9,0.69,0.69,-30.5);

	this.instance_6 = new lib.Symbol6("synched",0);
	this.instance_6.setTransform(56.3,29.1,0.69,0.69,-30.5);

	this.instance_7 = new lib.Symbol6("synched",0);
	this.instance_7.setTransform(17.7,228.1);

	this.instance_8 = new lib.Symbol6("synched",0);
	this.instance_8.setTransform(20.9,68.6);

	this.instance_9 = new lib.Symbol6("synched",0);
	this.instance_9.setTransform(22.3,33.2);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,2.2,217.3,239.8);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.setTransform(1240,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-700},2037).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(985.6,-107.5,509,215);


(lib.BG = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.retryButton();
	this.instance.setTransform(135.8,182.6);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Symbol37();
	this.instance_1.setTransform(353.6,73);
	this.instance_1.alpha = 0;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Symbol33();
	this.instance_2.setTransform(141.8,73.1);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.Symbol35();
	this.instance_3.setTransform(135.9,-6);
	this.instance_3.alpha = 0;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.Symbol36();
	this.instance_4.setTransform(134.3,109.6);
	this.instance_4.alpha = 0;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.Symbol14("synched",0);
	this.instance_5.setTransform(-237.4,231,1.011,1,0,0,180);

	this.instance_6 = new lib.Symbol25();
	this.instance_6.setTransform(451.5,131.6,1,1,0,0,0,43.4,84.2);

	this.instance_7 = new lib.Symbol26();
	this.instance_7.setTransform(460.2,180.1,1,1,0,0,0,26.6,67.5);

	this.instance_8 = new lib.Symbol22();
	this.instance_8.setTransform(36.2,11.1,1,1,0,0,0,16.3,6.8);

	this.instance_9 = new lib.Symbol23();
	this.instance_9.setTransform(93.6,23.4,1,1,0,0,0,419.1,153.8);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(423.5,-164.4,1,1,0,0,0,90.4,54);

	this.instance_11 = new lib.leaf();
	this.instance_11.setTransform(-220.6,374.5,0.204,0.314,0,3.1,-175.8,69.6,39.9);

	this.instance_12 = new lib.leaf();
	this.instance_12.setTransform(-286.8,276.5,0.209,0.31,0,21.2,23.9,69.3,40.1);

	this.instance_13 = new lib.leaf();
	this.instance_13.setTransform(-253,271.5,0.453,0.466,0,21.3,-156.1,69.4,40);

	this.instance_14 = new lib.leaf();
	this.instance_14.setTransform(-267.6,298.9,0.447,0.472,0,-9.8,169.9,69.3,39.9);

	this.instance_15 = new lib.leaf();
	this.instance_15.setTransform(-271.6,369.1,0.61,0.643,0,-12.1,167.3,69.3,39.8);

	this.instance_16 = new lib.leaf();
	this.instance_16.setTransform(-252.9,326.4,0.368,0.381,0,17.6,-160,69.1,40);

	this.instance_17 = new lib.leaf();
	this.instance_17.setTransform(-216.9,293.8,0.623,0.642,0,-33.9,143.5,69.1,40);

	this.instance_18 = new lib.leaf();
	this.instance_18.setTransform(-180,338.7,0.947,1,0,-7,173,69.2,40);

	this.instance_19 = new lib.leaf();
	this.instance_19.setTransform(432.5,365.2,0.215,0.314,-10.6,0,0,69.4,40);

	this.instance_20 = new lib.leaf();
	this.instance_20.setTransform(489.3,259.9,0.217,0.314,0,-29.6,150.4,69.4,40.1);

	this.instance_21 = new lib.leaf();
	this.instance_21.setTransform(453.3,259,0.472,0.472,-29.6,0,0,69.4,40);

	this.instance_22 = new lib.leaf();
	this.instance_22.setTransform(472.1,284.5,0.472,0.472,2.9,0,0,69.3,39.9);

	this.instance_23 = new lib.leaf();
	this.instance_23.setTransform(485.3,353.6,0.644,0.644,5.4,0,0,69.3,39.7);

	this.instance_24 = new lib.leaf();
	this.instance_24.setTransform(460.3,313.5,0.385,0.385,-25.8,0,0,69.2,40);

	this.instance_25 = new lib.leaf();
	this.instance_25.setTransform(418.3,285.6,0.65,0.65,28.2,0,0,69.2,40);

	this.instance_26 = new lib.leaf();
	this.instance_26.setTransform(385.3,334.6,1,1,0,0,0,69.1,40);

	this.instance_27 = new lib.Symbol28();
	this.instance_27.setTransform(486.7,163.4,1,1,0,0,0,26.1,204.8);

	this.instance_28 = new lib.Symbol4("synched",0);
	this.instance_28.setTransform(111.1,314.3,1,0.693);

	this.instance_29 = new lib.Symbol27();
	this.instance_29.setTransform(101,280.3,1,1,0,0,0,435.8,127.6);

	this.instance_30 = new lib.Symbol24();
	this.instance_30.setTransform(-165.4,79.1,1,1,0,0,0,108.4,120.5);

	this.instance_31 = new lib.Symbol5("synched",0);
	this.instance_31.setTransform(-145.7,38.6,1.506,1.506);

	this.instance_32 = new lib.Bird();
	this.instance_32.setTransform(34.3,-43.8);

	this.instance_33 = new lib.Symbol11();
	this.instance_33.setTransform(-470.7,-16.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC00").ss(5.4,1,1).p("EA4ZgDbIAyLsIAAAKEA5BgH9IE2PSEA7XgJ1IDIReEg+eAGkIAUhiICgsNEg6agC9IiVLOIgVBlEg3IgDRIiCKJ");
	this.shape.setTransform(105.8,332.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006600").ss(1.4,1,1).p("EA45gDeIAiJ2IACAkEA8pgG7IBXG8EA69gEuIBmFEEg86gELIhFFgEg7OgCJIgiClEg4SgApIgbCJ");
	this.shape_1.setTransform(105.3,344.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#336600").ss(2,1,1).p("ABXinQArBEgtBjAhrBkQAFACAEACQAxAcgdAk");
	this.shape_2.setTransform(437.2,131.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#006600").ss(2,1,1).p("EAyBgXFQAJBLAHBLIA2AAIBQAAEAy2gXPQAJBQAIBQQBBK3hRK1QgBAFgQJSQgBANAAAOQAIBDAGBCQBBK3hRK3IgzAAQAAgDAAgCQBPq1hCq0QgGhEgIhDQAAgIABgHQASpXACgKQAAgDAAgCQBPqzhCq0EAuzgRnIAyAAQACAZADAZIA1AAIBRAAEAt9gRnIA2AAQgIhQgJhQEAt9gRnQgHhLgJhLEAvlgRnQgFgygGgyEAwfgQ1QgHhQgKhQEAwDgRnIgeAAEA7OgYzIA1AAIBRAAEA6+gbJQAGAyAFAyQACAZADAZEA8DgYzQgHhQgKhQEA7zgDFIgzAAQAAgDABgCQBPq1hCq0EA6UgDFIAsAAQgBAKgBAKEA8igDFIgvAAEA7ygC7QABgFAAgFEAuzgRnQBBK3hRK1QAAACgFAfEAtuAEmQABgeABgDQAAgCAAgDQBPqyhCq1EAs7ALLQAAAFABAFQAAACABACQAAAIABAIQBTMnhPKrIAuAAEAsMAK3QACATACATQAHA4AFA4QBCK0hPK1QgBACAAADIgqAAEAsOAi7QgBAKgBAKEAtCAi7Ig0AAEAtAAjFQABgFABgFEAxwAiiIgrAAEAxwAiiQgCAKgBAKEAyiAisQAAgFABgFIAuAAEAvqgQ1QBBKvhNKsEA8DgYzQBCK3hSK3EAwSAEmQBOqshBqvEg21gfAQAJBLAHBLIA1AAQgHhQgKhQEg1wgcqIBRAAEg6EgZhIAzAAQACAZACAYIA2AAIBQAAEg4zgZhIgeAAQgGgygGgzEg65gZhIA1AAQgHhQgKhQEg65gZhQgHhLgJhLEg4XgYwQgIhQgJhQEgszgguIBQAAEgtpgguIA2AAQgIhQgJhQEgt5gjEQAGAzAGAyQACAZACAYEgtDgLAIgzAAQAAgCAAgDQBPq0hCq1EgtDgLAQgBAFAAAFEgsVgLAIguAAEguhgLAIArAAQgCAKgBAKEgszgguQBBK3hRK3Eg1/gG8Ig0AAQgBAKgBAKEg3dgG8IAqAAQAAgCABgDQBPq0hCq1Eg7HgDzQAAgDABgCQBPq1hCq0Eg6VgDpQABgFABgFIg0AAQgBAKgBAKEg6TgDzIAuAAEg2BgGyQABgFABgFIAuAAEg5agDCIgrAAEg5agDCQgCAKgBAKEg4ngDCIgzAAEg4ngDCQgBAFAAAFEg35gDCIguAAEg5NgYwQBCK1hPK0QAAADAAACEg7lAFSIBQAAEg25AE5IA1AAIBRAAEg25AE5QgHhLgJhLEg8rAC8QAJBLAHBLIA2AAQBBK3hRK3IgzAAQAAgCAAgDQBPq0hCq1Eg72ACyQAJBQAIBQEg2EAE5QgHhQgKhQEg7xgDzIAqAAEg3HAanQAAgCABgDQBPq0hCq1Eg3xAanIAqAAQgBAKgBAKEg2TAanIg0AAEg2TAanQgBAFgBAFEg1lAanIguAAEg9TAbAIArAAQgCAKgBAKEg72AbKQAAgFABgFIAuAAEg2EAE5QBCK3hRK3Eg4XgYwQBBK3hRK3Eg6EgZhQBCK3hRK3Eg1/gG8QBRq3hCq3");
	this.shape_3.setTransform(139.5,69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#80FFFF","#004AAF"],[0,1],0,-331.4,0,208.5).s().p("EA4oAvQIgip3IAiJ3IgKAAMh16AAAICVrPIiVLPIhbAAIAAjPMAAAhbQMB9vAAAMAAAAp+MAAAA0hgEA4eAvQIgyrtgEA9yAuoIjIxfgEA9KAuUIk2vTgEg53At3ICCqKgEg+3AsBICgsOgEg5gAqZIAbiLgEg+xAqOIBEligEg8iApUIAiimgEA7wApPIhmlGgEA9NAo6IhXm+gEAwvAhDIADgUIAzAAIgBAKIABgKIAuAAIguAAQBQqrhTsnIgCgQIAAgEIgCgKQgrg/ABBRIgFgmIAFAmQAGA4AFA4QBCK0hPK1IAzAFIgzAAIAAgFIAAAFIgrAAIArAAIgDAUgEA2TAgWIgCAUIACgUIA0AAIg0AAIgqAAgEA3FAggIACgKIAuAAIguAAIgCAKgEA3HAgWQBRq3hCq3IgNiFIAAgbQARpQABgFQBRq3hCq3IBRAAIhRAAQgHhQgKhQQAKBQAHBQIg1AAQBCK0hPK1IgBAFQgBAKgTJVIAAAPIAOCHQBCK0hPK1IgBAFIABgFgEg4HAZIIADgUIgrAAIArAAIgDAUgEg3SAY+IABgKIAuAAIguAAQBRq3hBq3IBQAAIhQAAQgIhQgJhQQAJBQAIBQIg2AAQBCK1hPK0IAzAFIgzAAIAAgFIAAAFIAzAAIgBAKgEgylAYvIACgUIgqAAIAqAAIgCAUgEgxxAYlIACgKIAuAAIguAAQBRq3hCq3IBRAAIhRAAQgHhQgKhQQAKBQAHBQIg1AAQBCK1hPK0IAzAFIg0AAIABgFIgBAFIA0AAIgCAKgEAx0AKNQALgNAAgNQAAgUgfgSQAfASAAAUQAAANgLANgEA0ZAHjQAYgzAAgrQAAgogVghQAVAhAAAoQAAArgYAzgEg33ADGQgHhLgJhLQAJBLAHBLgEgyVACtQgHhLgJhLQAJBLAHBLgEA0CACaIAzAAQBOqshAqvIBQAAIhQAAQgIhQgJhQQAJBQAIBQIg2AAQBCKvhNKsgEAyhgTzQBCK1hPKyIgBAFIgCAhIAwAAIAGghQBRq1hCq3Ig1AAQgHhLgJhLQAJBLAHBLgEg05gE6IADgUIgrAAIArAAIgDAUgEg0DgFOIgBAKIABgKIAuAAIguAAQBRq3hBq3IBQAAIhQAAQgIhQgJhQQAJBQAIBQIg2AAQBCK1hPK0IAAAFIAAgFIAzAFIgzAAgEg2lgFrIACgUIA0AAIgCAKIACgKIg0AAIgqAAIAqAAIgCAUgEg1BgF/IguAAgEg1vgF/QBRq3hCq3IAzAAIAEAxIgEgxIAeAAIgeAAIgMhlIAMBlIgzAAQgHhQgKhQQAKBQAHBQIg1AAQgHhLgJhLQAJBLAHBLQBCK0hPK1IgBAFIABgFgEgyRgI0IACgUIA0AAIgCAKIACgKIAuAAIguAAQBRq3hCq3IBRAAIhRAAQgHhQgKhQQAKBQAHBQIg1AAQBCK1hPK0IgBAFIgqAAIAqAAIABgFIAzAFIg0AAIgCAUgEgpVgM4IADgUIgDAUgEgpSgNMIAzAAIgBAKIABgKIAuAAIguAAQBRq3hBq3Ig2AAQBCK1hPK0IAzAFIgzAAIAAgFIAAAFIAAAAgEgpSgNMIgrAAgEA0NgTBIgEgyIAeAAIgeAAIgMhkIAMBkIgzAAQgHhQgKhQQAKBQAHBQIAzAAIAEAygEA21gW7QgHhLgJhLQAJBLAHBLgEgyBge2QgHhLgJhLQAJBLAHBLgEgoPgi6IBQAAIhQAAQgIhQgJhQQAJBQAIBQgEgpJgjrIAEAxIgEgxIgMhlIAMBlgEAwyAgvgEAwyAgvgEg3RAY0gEgyjAYbgEg2jgF/gEgxbgJIgEA0JgTzgEA0JgTzgEgxMge2g");
	this.shape_4.setTransform(110.3,83.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9EF451").s().p("EAsTAhwQBPq1hCq0QgFg4gHg4QgBhRAsA/IABAKIABAEIgJgEIAJAEIABAQQBTMnhPKrgEAx0AhXQBPq1hCq0IgOiHIABgPQASpXACgIIAAgFQBPq1hCq0IA2AAQBBK3hRK3QgBAFgQJQIgBAbIAOCFQBBK3hRK3gEg8jAZ1QBPq0hCq1IA1AAQBCK3hRK3gEg3CAZcQBPq0hCq1IA2AAQBBK3hRK3gEAtBAKTIAAAAgEAviADgQBNqshBqvIA1AAQBBKvhOKsgEAtyADgIACghIAAgFQBPqyhCq1IA2AAQBBK3hRK1IgFAhgEg5VgENQBPq0hCq1IA1AAQBCK3hRK3gEA7FgEQQBPq1hCq0IA1AAQBCK3hRK3gEg7CgE+QBPq1hCq0IA2AAQBBK3hRK3gEg2ugIHQBPq0hCq1IA2AAQBBK3hRK3gEgtxgMLQBPq0hCq1IA1AAQBCK3hRK3g");
	this.shape_5.setTransform(139.1,76.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-425.9,-310.6,1449.7,719.1);


(lib.Z = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("Z", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.Y = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("Y", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.X = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("X", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.W = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("W", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.V = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("V", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.U = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("U", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.T = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("T", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.S = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("S", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.R = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("R", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.Q = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("Q", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.P = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("P", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.O = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("O", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.N = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("N", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.M = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("M", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 24;
	this.text.setTransform(12.9,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.L = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("L", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.K = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("K", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.J = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("J", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.I = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("I", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.H = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("H", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.G = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("G", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.F = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("F", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.E = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("E", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.D = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("D", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.C = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("C", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.B = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("B", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhkCLQgnABAAgnIAAjJQAAgnAnAAIDJAAQAnAAgBAnIAADJQABAngngBg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.A = function() {
	this.initialize();

	// hit
	this.btn = new lib.hitarea();
	this.btn.setTransform(14,14,1,1,0,0,0,14,14);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.hitarea(), 3);

	// alphabet
	this.text = new cjs.Text("A", "22px 'Forte'", "#512800");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 22;
	this.text.setTransform(12,0);

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#996600").ss(2,1,1).p("ABliLIjJAAQgnAAAAAnIAADJQAAAnAnAAIDJAAQAnAAAAgnIAAjJQAAgngnAAg");
	this.shape.setTransform(14,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A47C2B").s().p("AhjCMQgoAAAAgoIAAjHQAAgoAoAAIDHAAQAoAAAAAoIAADHQAAAogoAAg");
	this.shape_1.setTransform(14,14);

	this.addChild(this.shape_1,this.shape,this.text,this.btn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,30,30);


(lib.allAlpha = function() {
	this.initialize();

	// Layer 1
	this.z1 = new lib.Z();
	this.z1.id = 25;
	this.z1.setTransform(476.5,38);

	this.y1 = new lib.Y();
	this.y1.id = 24;
	this.y1.setTransform(438.4,35.8,1,1,0,0,0,0,-2.3);

	this.x1 = new lib.X();
	this.x1.id = 23;
	this.x1.setTransform(397,38);

	this.w1 = new lib.W();
	this.w1.id = 22;
	this.w1.setTransform(357.3,38);

	this.v1 = new lib.V();
	this.v1.id = 21;
	this.v1.setTransform(317.6,38);

	this.u1 = new lib.U();
	this.u1.id = 20;
	this.u1.setTransform(277.9,38);

	this.t1 = new lib.T();
	this.t1.id = 19;
	this.t1.setTransform(238.2,38);

	this.s1 = new lib.S();
	this.s1.id = 18;
	this.s1.setTransform(198.5,38);

	this.r1 = new lib.R();
	this.r1.id = 17;
	this.r1.setTransform(158.8,38);

	this.q1 = new lib.Q();
	this.q1.id = 16;
	this.q1.setTransform(119.1,38);

	this.p1 = new lib.P();
	this.p1.id = 15;
	this.p1.setTransform(79.4,38);

	this.o1 = new lib.O();
	this.o1.id = 14;
	this.o1.setTransform(39.7,38);

	this.n1 = new lib.N();
	this.n1.id = 13;
	this.n1.setTransform(0,38);

	this.m1 = new lib.M();
	this.m1.id = 12;
	this.m1.setTransform(476.5,0);

	this.l1 = new lib.L();
	this.l1.id = 11;
	this.l1.setTransform(436.7,0);

	this.k1 = new lib.K();
	this.k1.id = 10;
	this.k1.setTransform(397,0);

	this.j1 = new lib.J();
	this.j1.id = 9;
	this.j1.setTransform(357.3,0);

	this.i1 = new lib.I();
	this.i1.id = 8;
	this.i1.setTransform(317.6,0);

	this.h1 = new lib.H();
	this.h1.id = 7;
	this.h1.setTransform(277.9,0);

	this.g1 = new lib.G();
	this.g1.id = 6;
	this.g1.setTransform(238.2,0);

	this.f1 = new lib.F();
	this.f1.id = 5;
	this.f1.setTransform(198.5,0);

	this.e1 = new lib.E();
	this.e1.id = 4;
	this.e1.setTransform(158.8,0);

	this.d1 = new lib.D();
	this.d1.id = 3;
	this.d1.setTransform(119.1,0);

	this.c1 = new lib.C();
	this.c1.id = 2;
	this.c1.setTransform(79.4,0);

	this.b1 = new lib.B();
	this.b1.id = 1;
	this.b1.setTransform(39.7,0);

	this.a1 = new lib.A();
	this.a1.id = 0;

	this.addChild(this.a1,this.b1,this.c1,this.d1,this.e1,this.f1,this.g1,this.h1,this.i1,this.j1,this.k1,this.l1,this.m1,this.n1,this.o1,this.p1,this.q1,this.r1,this.s1,this.t1,this.u1,this.v1,this.w1,this.x1,this.y1,this.z1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,506.5,68.1);


(lib.TextOptions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{endFlag:0});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// answer
	this.category = new lib.Categorytext();
	this.category.setTransform(-224,-103.6);

	this.statusText = new cjs.Text("", "12px 'Arial'");
	this.statusText.name = "statusText";
	this.statusText.textAlign = "center";
	this.statusText.lineHeight = 14;
	this.statusText.lineWidth = 476;
	this.statusText.setTransform(-4,-27.1);

	this.answerText = new cjs.Text("______________", "20px 'Tahoma'", "#522901");
	this.answerText.name = "answerText";
	this.answerText.textAlign = "center";
	this.answerText.lineHeight = 23;
	this.answerText.lineWidth = 535;
	this.answerText.setTransform(-1.5,-65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answerText},{t:this.statusText},{t:this.category}]}).wait(1));

	// text
	this.alphabets = new lib.allAlpha();
	this.alphabets.setTransform(-252.4,50.3,1,1,0,0,0,0.2,32.5);

	this.timeline.addTween(cjs.Tween.get(this.alphabets).wait(1));

	// base
	this.textBg = new lib.Symbol8();
	this.textBg.setTransform(-295.5,-85);

	this.timeline.addTween(cjs.Tween.get(this.textBg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-296.5,-104.6,593.1,203.1);


(lib.EditTimeObjects = function() {
	this.initialize();

	// options
	this.option5 = new lib.EditAreaOptions();
	this.option5.setTransform(-4.5,255.5,1,1,0,0,0,0.5,0.5);

	this.option4 = new lib.EditAreaOptions();
	this.option4.setTransform(-4.5,169.5,1,1,0,0,0,0.5,0.5);

	this.option3 = new lib.EditAreaOptions();
	this.option3.setTransform(-4.5,80.5,1,1,0,0,0,0.5,0.5);

	this.option2 = new lib.EditAreaOptions();
	this.option2.setTransform(-4.5,-8.5,1,1,0,0,0,0.5,0.5);

	this.option1 = new lib.EditAreaOptions();
	this.option1.setTransform(-4.5,-95.5,1,1,0,0,0,0.5,0.5);

	// Layer 1
	this.text = new cjs.Text("Result Variable", "15px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 125;
	this.text.setTransform(194.3,314.5);

	this.text_1 = new cjs.Text("Time In Seconds", "15px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.lineWidth = 125;
	this.text_1.setTransform(-25.7,314.5);

	this.text_2 = new cjs.Text("Maximum Attempt", "15px 'Arial'", "#333333");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 125;
	this.text_2.setTransform(-272.5,314.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EA6mAfBIAAH0Mh1LAAAIAAn0EA6mAfBMh1LAAAMAAAhF1MB1LAAAg");
	this.shape.setTransform(-6,98.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D6D6D6").s().p("Eg6kAD6IAAnzMB1KAAAIAAHzg");
	this.shape_1.setTransform(-6,322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DFDFDF").s().p("Eg6kAi7MAAAhF1MB1KAAAMAAABF1g");
	this.shape_2.setTransform(-6,73.5);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.text_2,this.text_1,this.text,this.option1,this.option2,this.option3,this.option4,this.option5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-934.8,-157,1985.4,669.5);


(lib.customhangmanparrotEditAreaActions = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("Al2l2ILtAAIAALtIrtAAg");
	this.shape.setTransform(-335.2,-254.7);

	// Layer 1
	this.text = new cjs.Text("Parrot and the Cage", "45px 'Arial'", "#996600");
	this.text.textAlign = "center";
	this.text.lineHeight = 47;
	this.text.lineWidth = 574;
	this.text.setTransform(17,-294.6);

	this.instance = new lib.thumbnail();
	this.instance.setTransform(-372.7,-292.1,0.063,0.084);

	this.inputOptions = new lib.EditTimeObjects();
	this.inputOptions.setTransform(6.4,-60);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(2,1,1).p("Eg+eAu4MAAAhdvMB89AAAMAAABdvg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Eg+eAu3MAAAhdtMB89AAAMAAABdtg");

	this.addChild(this.shape_2,this.shape_1,this.inputOptions,this.instance,this.text,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-928.4,-301,1985.4,753);


(lib.cageback = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cagepart2();
	this.instance.setTransform(328.6,41.2,1,0.765,0,0,0,42.3,29.9);

	this.instance_1 = new lib.cagepart2();
	this.instance_1.setTransform(266.6,43.5,1,0.765,0,0,0,42.3,29.8);

	this.instance_2 = new lib.cagepart2();
	this.instance_2.setTransform(209.6,41.2,1,0.765,0,0,0,42.3,29.9);

	this.instance_3 = new lib.cagepart2();
	this.instance_3.setTransform(157.2,40.4,1,0.765,0,0,0,42.3,29.9);

	this.instance_4 = new lib.cagepart2();
	this.instance_4.setTransform(100.3,41.2,1,0.765,0,0,0,42.3,29.9);

	this.instance_5 = new lib.cagepart2();
	this.instance_5.setTransform(406.3,41.2,1,0.765,0,0,0,42.3,29.9);

	this.instance_6 = new lib.cagepart2();
	this.instance_6.setTransform(52.3,40.4,1,0.765,0,0,0,42.3,29.9);

	this.instance_7 = new lib.cagefront();
	this.instance_7.setTransform(56.1,145.2,1,1,0,0,0,9,145.2);

	this.instance_8 = new lib.cagepart2();
	this.instance_8.setTransform(311.7,290.5,1,1,0,0,0,42.3,29.9);

	this.instance_9 = new lib.cagepart2();
	this.instance_9.setTransform(228.9,295.5,1,1,0,0,0,42.3,29.9);

	this.instance_10 = new lib.cagepart2();
	this.instance_10.setTransform(152.3,295.5,1,1,0,0,0,42.3,29.9);

	this.instance_11 = new lib.cagepart2();
	this.instance_11.setTransform(83.3,293.5,1,1,0,0,0,42.3,29.9);

	this.instance_12 = new lib.cagepart2();
	this.instance_12.setTransform(396.3,282.6,1,1,0,0,0,42.3,29.9);

	this.instance_13 = new lib.cagepart2();
	this.instance_13.setTransform(42.3,281.6,1,1,0,0,0,42.3,29.9);

	this.addChild(this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,462.6,326.4);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* happyParrot.visible = false;
		sadBird.visible = false;
		this.stop();*/
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2).call(this.frame_3).wait(2).call(this.frame_5).wait(2).call(this.frame_7).wait(2).call(this.frame_9).wait(2).call(this.frame_11).wait(2).call(this.frame_13).wait(2));

	// Layer 11
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(261.5,-12.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(2));

	// Layer 10
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(203.4,-12.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(4));

	// Layer 9
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(145.4,-12.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(6));

	// Layer 5
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(87.5,-12.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(8));

	// Layer 4
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(29.5,-12.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(10));

	// Layer 3
	this.instance_5 = new lib.Symbol2("synched",0);
	this.instance_5.setTransform(-28.4,-12.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).wait(12));

	// cage back
	this.instance_6 = new lib.cagefront();
	this.instance_6.setTransform(-67.6,-27.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(14));

	// sad
	this.sadP = new lib.sadParrot();
	this.sadP.setTransform(119.6,112,1,1,0,0,0,0.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.sadP).wait(15));

	// parrots
	this.happyP = new lib.Happy();
	this.happyP.setTransform(123.3,112,1,1,0,0,0,2.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.happyP).wait(15));

	// bird
	this.instance_7 = new lib.Symbol22();
	this.instance_7.setTransform(123.4,168,1,1,0,0,0,16.3,6.8);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.Bird();
	this.instance_8.setTransform(122.1,113.5,1,1,0,0,0,0,0.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{alpha:0}},{t:this.instance_7,p:{alpha:0}}]}).to({state:[{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}}]},1).wait(14));

	// cage back
	this.cageB = new lib.cageback();
	this.cageB.setTransform(-61.6,-67.4);
	this.cageB._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cageB).wait(1).to({_off:false},0).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.7,26,109.5,173.5);


// stage content:



(lib.Hangman_Parrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Cage
	this.caged = new lib.Symbol19();
	this.caged.setTransform(330.5,173.6,1,1,0,0,0,128.4,115.6);

	this.timeline.addTween(cjs.Tween.get(this.caged).wait(2));

	// choosecategory
	this.initialC = new lib.InitialChoose();
	this.initialC.setTransform(118,152.1,1,1,0,0,0,0.4,2);

	this.timeline.addTween(cjs.Tween.get(this.initialC).wait(2));

	// k (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+jAu3MAAAhdtMB9HAAAMAAABdtg");
	mask.setTransform(400.5,300);

	// Revealer
	this.revealStage = new lib.LeavesReveal();
	this.revealStage.setTransform(424.4,382.2,1,1,0,0,0,500.7,383.5);

	this.revealStage.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.revealStage).wait(2));

	// Text
	this.replayButton = new lib.replayButton();
	this.replayButton.setTransform(623.1,348.2,0.661,0.661);

	this.timeDisplay = new cjs.Text("", "25px 'Tahoma'", "#6E3F0B");
	this.timeDisplay.name = "timeDisplay";
	this.timeDisplay.textAlign = "center";
	this.timeDisplay.lineHeight = 27;
	this.timeDisplay.lineWidth = 62;
	this.timeDisplay.setTransform(696,68.4);

	this.timebg = new lib.Symbol3();
	this.timebg.setTransform(697.9,66.3,1,1,0,0,0,46.1,46.1);

	this.questionNum = new lib.QuestionNum();
	this.questionNum.setTransform(71.3,66.3,1,1,0,0,0,38.1,38.1);

	this.retryButton = new lib.retryButton();
	this.retryButton.setTransform(623.1,348.2,0.661,0.661);

	this.mainText = new lib.TextOptions();
	this.mainText.setTransform(410,439.3,1,1,0,0,0,0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mainText},{t:this.retryButton},{t:this.questionNum},{t:this.timebg},{t:this.timeDisplay},{t:this.replayButton}]}).wait(2));

	// Layer 9
	this.showtime = new cjs.Text("", "20px 'Tahoma'");
	this.showtime.name = "showtime";
	this.showtime.textAlign = "center";
	this.showtime.lineHeight = 22;
	this.showtime.lineWidth = 353;
	this.showtime.setTransform(398,309.3);

	this.timeline.addTween(cjs.Tween.get(this.showtime).wait(2));

	// k (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg+jAu3MAAAhdtMB9HAAAMAAABdtg");
	mask_1.setTransform(400.5,300);

	// MainItems
	this.mainBackground = new lib.BG();
	this.mainBackground.setTransform(34.1,213.6,1,1,0,0,0,-255.6,-0.3);

	this.mainBackground.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.mainBackground).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528,-602.4,2444.8,2214.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;