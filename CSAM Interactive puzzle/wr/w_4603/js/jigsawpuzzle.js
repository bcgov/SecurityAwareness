var Timer;
var TotalSeconds;
var timecheck;
var gameStatus;

function CreateTimer(TimerID, Time) {
    Timer = self.document.getElementById(TimerID);
    TotalSeconds = Time;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}

function Tick() {
    if (TotalSeconds <= 0) {
		if (this.canvas) {
			this.canvas.style.cursor='default';
			try{
				this.canvas.removeEventListener("mousedown", handleMouseDown);
				this.canvas.removeEventListener("mouseup", handleMouseUp);
				this.canvas.removeEventListener("mousemove", handleMouseMove);
				this.canvas.removeEventListener("touchstart", touchStart,false);
				this.canvas.removeEventListener("touchmove", touchMove, false);
				this.canvas.removeEventListener("touchend", touchEnd, false);
			}catch(er){
			}
		}
		JigsawPuzzle.setJigFailure();
        return;
    }else if(gameStatus == "GameOver"){
		if (this.canvas) {
				this.canvas.style.cursor='default';
				try{
					this.canvas.removeEventListener("mousedown", handleMouseDown);
					this.canvas.removeEventListener("mouseup", handleMouseUp);
					this.canvas.removeEventListener("mousemove", handleMouseMove);
					this.canvas.removeEventListener("touchstart", touchStart,false);
					this.canvas.removeEventListener("touchmove", touchMove, false);
					this.canvas.removeEventListener("touchend", touchEnd, false);
				}catch(er){
				}
			}
			return;
	}
    TotalSeconds -= 1;
    UpdateTimer()
    window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
    //Timer.innerHTML = TotalSeconds;
	entertimemin = TotalSeconds
	
	var minutehand = String(Math.floor(TotalSeconds / 60));
	var sechand = String(TotalSeconds % 60);
	if (Number(minutehand) < 10) {
		minutehand="0"+String(minutehand);
	}
	if (Number(sechand) < 10) {
		sechand="0"+String(sechand);
	}
	exportRoot.ge_mc.entertimemin.text = ""
	exportRoot.ge_mc.entertimesec.text = ""	
	exportRoot.ge_mc.entertimemin.text = minutehand
	exportRoot.ge_mc.entertimesec.text = sechand
}

// score
var showscore;
function UpdateScore(myscore) {
    //exportRoot.ge_mc.enterscore.text = myscore;
}

function ShowScore(myscore) {
    UpdateScore(myscore);

}

function Puzzle(id, puzzleOptions) {
    if (myscore == undefined) {
        ShowScore("0");
    }
	if(entertime != ""){
		timecheck = parseInt(entertime) ;
	}else{
		timecheck = 1000;
	}
	
    //self.document.getElementById('hint').style.visibility = "visible";
   // self.document.getElementById('time').style.visibility = "visible";
    self.document.getElementById('hintimage').style.visibility = "visible";
    //self.document.getElementById('reset').style.visibility = "visible";
    //self.document.getElementById('timerimg').style.visibility = "visible";

    var me = this;
	if(this.canvas){
		ctx.clearRect(0, 0, me.canvas.width, me.canvas.height)
		ctx.save();
		delete this.canvas.puzzle;
		// get rid of internal objects
		delete this.canvas;
	}

    // Methods
    this.confine = function (v, l, h, d) {
        return v !== undefined ? self.Math.max(self.Math.min(v, h), l) : d;
    };
    this.create = function (puzzleOptions) {
        // use default options if none specified
        var defaultOptions = {
            view: 'full',
            cut: 'wave', //can be classic,wave,tenon,straight
            screenSize: 'h600',
            src: internalImage,
            numPieces: {
                full: 25,
                mini: 10
            },
            complexity: 1,
            showPreview: false
        };
        // validate configurable parameters
        this.config = {};
        this.config.view = (puzzleOptions && puzzleOptions.view) ? puzzleOptions.view : defaultOptions.view;
        this.config.cut = (puzzleOptions.cut !== undefined && Profile.prototype.stock[puzzleOptions.cut] !== undefined) ? puzzleOptions.cut : defaultOptions.cut;
        this.config.backgroundColor = puzzleOptions.backgroundColor ? puzzleOptions.backgroundColor : this.canvasParent.style.backgroundColor;
        this.config.showEdges = false;
        this.config.showComposite = false;
        this.config.showPreview = (puzzleOptions.showPreview !== undefined) ? puzzleOptions.showPreview : false;
        this.config.numPieces = this.confine(Irows, 4, 999, defaultOptions.numPieces[this.config.view]);
        this.config.complexity = this.confine(puzzleOptions.complexity, 0, 9, defaultOptions.complexity);
		
        this.config.screenSize = puzzleOptions.screenSize ? puzzleOptions.screenSize : defaultOptions.screenSize; 
        this.config.bedWidth = rswidth ? rswidth + movieWidth : {
            h600: 10,
            h768: 1024,
            h1024: 1024,
            h1050: 1260,
            h1200: 1440,
            h1600: 1920
        }[this.config.screenSize];
        this.config.bedHeight = rswidth ? rswidth + (movieHeight) : {
            h600: 10,
            h768: 450,
            h1024: 768,
            h1050: 945,
            h1200: 1080,
            h1600: 1440
        }[this.config.screenSize];

        this.config.bedMargin = self.Math.round(this.config.bedWidth * 0.12);
        this.config.src = puzzleOptions.src && puzzleOptions.src.length > 0 ? puzzleOptions.src : defaultOptions.src;
        if (puzzleOptions.clusters) {
            this.config.clusters = puzzleOptions.clusters;
        }
        this.minPieceSize = 40;
        this.minImageSize = this.minPieceSize * 2;
        // resize canvas according to calculated width/height
        if (!this.canvas) {
            throw "Puzzle.create(): No canvas";
        }
		
		var tempCalc =  (8.8/100)*movieHeight
        this.canvas.width = movieWidth;
        this.canvas.height = movieHeight-tempCalc;
        this.canvasParent.style.width = this.canvas.width + 'px';
        this.canvasParent.style.height = this.canvas.height + 'px';
		this.canvas.style.top = "0px";
		this.canvas.style.left = "0px";
		
        // final step: load image to be used
        this.imageSource = new Image();
        this.imageSource.onload = function () {
            me.init(me.config);
            this.onload = null;
        };
        this.imageSource.src = this.config.src;
        // clear internal state
        this.pieces = {};
        this.drawingStack = [];
        this.composites = {};
    };
    // mix pieces
    this.shuffle = function () {
        var round = self.Math.round;
        var random = self.Math.random;
        // precalculate horizontal/vertical domain/offset
        var cw = this.canvas.width;
        var ch = this.canvas.height;
        var hf = cw - this.partWidth;
        var vf = ch - this.partHeight;
        var ph2 = this.partWidth >> 1;
        var pv2 = this.partHeight >> 1;
        var part;
        for (var ipart = 0; ipart < this.drawingStack.length; ipart++) {
            part = this.drawingStack[ipart];
            if (!part.piece) {
                continue;
            }
            // composite pieces do not have standard size
            if (!part.composite) {
                part.setDisplayPos(round(random() * hf) + ph2, round(random() * vf) + pv2);
            } else {
                var partBbox = part.getDisplayBboxConst();
                var partWidth = partBbox.width();
                var partHeight = partBbox.height();
                part.setDisplayPos(round(random() * (cw - partWidth) + (partWidth / 2)),
                round(random() * (ch - partHeight) + (partHeight / 2)));
            }
        }
    };
    this.draw = function (clip) {
        var ctx = me.canvas.getContext('2d');
        ctx.save();

        // comment out to verify minimal redrawing
        //ctx.clearRect(0,0,me.canvas.width,me.canvas.height);
        // draw only what intersect with clip region
        ctx.fillStyle = '#cccccc';
        if (clip) {
            ctx.beginPath();
            clip.toCanvasPath(ctx);
            ctx.clip();
            ctx.fill();
			ctx.clearRect(0, 0, me.canvas.width, me.canvas.height)
        } else {
            //ctx.fillRect(0, 0, me.canvas.width, me.canvas.height);
			ctx.clearRect(0, 0, me.canvas.width, me.canvas.height)
        }

        // puzzle parts
        ctx.globalCompositeOperation = "source-over";
        // store locally often used properties for efficiency
        var imoved = me.imoved;
        var showedges = me.config.showEdges;
        var showComposite = me.config.showComposite;
        var stack = me.drawingStack;
        // stack drawn from bottom to top
        var nparts = stack.length;
        var part;
        for (var ipart = 0; ipart < nparts; ipart++) {
            part = stack[ipart];
        if ((!clip || part.doesIntersect(clip)) && (!part.piece || ipart == imoved || ((!showComposite || part.composite) && (!showedges || part.isEdge())))) {
                part.draw(ctx);
            }
        }
        ctx.restore();
		update = true;
    };
    // merge two puzzle pieces
    this.mergePieces = function (id, others) {
        var parts = [];
        var nOthers = others.length;
        var otherId;
        for (var iOther = 0; iOther < nOthers; iOther++) {
            otherId = others[iOther];
            parts.push(this.pieces[otherId]);
            delete this.pieces[otherId];
        }
        this.pieces[id].merge(parts);
        this.composites[id] = this.pieces[id];
    };
    this.init = function () {
        this.canvas.style.cursor = "wait";
        var round = self.Math.round;
        var ceil = self.Math.ceil;
        var sqrt = self.Math.sqrt;
        var domax = self.Math.max;
        var domin = self.Math.min;
        var opts = this.config;
        var iw = this.imageSource.width;
        var ih = this.imageSource.height;
        var cw = this.canvas.width;
        var ch = this.canvas.height;
        var imgRatio = iw / ih;
        var cnvRatio = cw / ch;
        // if image size < minImageSize, zoom in
        if (iw < this.minImageSize || ih < this.minImageSize) {
            if (imgRatio >= 1) {
                iw = this.minImageSize;
                ih = round(iw / imgRatio);
            } else {
                ih = this.minImageSize;
                iw = round(ih * imgRatio);
            }
        } else if (iw > (cw - opts.bedMargin * 2) || ih > (ch - opts.bedMargin * 2)) {
            if (iw > (cw - opts.bedMargin * 2)) {
                iw = cw - opts.bedMargin * 2;
                ih = round(iw / imgRatio);
            }
            if (ih > (ch - opts.bedMargin * 2)) {
                ih = ch - opts.bedMargin * 2;
                iw = round(ih * imgRatio);
            }
        }

        var numCols = Irows;
        var numRows = Irows;
       

        this.partWidth = round(iw / numCols); // rounded to avoid fractional pixels
        this.partHeight = round(ih / numRows); // rounded to avoid fractional pixels
        // create the image that will be used as a basis for the puzzle
        this.imageObj = self.document.createElement('canvas');
        this.imageObj.width = iw;
        this.imageObj.height = ih;
        var ctx = this.imageObj.getContext('2d');
        ctx.drawImage(this.imageSource, 0, 0, this.imageSource.width, this.imageSource.height, 0, 0, iw, ih);
        // empty drawing stack
        this.drawingStack = [];
        this.pieces = {};
        this.composites = {};
        // generate pieces
        this.cut({
            width: iw,
            height: ih,
            numRows: numRows,
            numCols: numCols
        });
        // parse clusters and merge puzzle pieces as required
        var partid;
        if (this.config.clusters) {
            var clusters = this.config.clusters;
            var nClusters = clusters.length;
            var cluster;
            for (var iCluster = 0; iCluster < nClusters; iCluster++) {
                cluster = clusters[iCluster];
                partid = cluster.shift();
                this.mergePieces(partid, cluster);
            }
            delete this.config.clusters;
        }
        // add what's left to the drawing stack
        for (partid in this.pieces) {
            if (!this.pieces.hasOwnProperty(partid)) {
                continue;
            }
            this.drawingStack.push(this.pieces[partid]);

        }
        // create preview tile

        // shuffle and show
        this.shuffle();
        this.draw();
    };
    this.cut = function (parms) {
        var rand = self.Math.random;
        var min = self.Math.min;
        var max = self.Math.max;
        var imgWidth = parms.width;
        var imgHeight = parms.height;
        var numRows = parms.numRows;
        var numCols = parms.numCols;
        var partWidth = imgWidth / numCols;
        var partHeight = imgHeight / numRows;

        var randomX = function (iPart) {
            return self.Math.round(partWidth * (iPart + 1))
        };
        var randomY = function (iPart) {
            return self.Math.round(partHeight * (iPart + 1))
        };
        var vid = 1; // unique id identifying every vertex
        var pid = 1; // unique id identifying every puzzle piece
        var sides = [];
        var top = 0;
        var right = 1;
        var bottom = 2;
        var edgeTop;
        var edgeRight;
        var edgeBottom;
        var edgeLeft;
        var piece;
        var profileStraight = new Profile(Profile.prototype.stock.straight);
        var profileRandomizer = new ProfileRandomizer(Profile.prototype.stock[this.config.cut], true);
        for (var iRow = 0; iRow < numRows; iRow++) {
            sides[iRow] = [];
            for (var iCol = 0; iCol < numCols; iCol++) {
                edgeTop = new Side(iRow === 0 ? {
                    ptA: iCol === 0 ? {
                        x: 0,
                        y: 0,
                        id: vid++
                    } : sides[iRow][iCol - 1][top].endPointConst(),
                    ptB: {
                        x: iCol == numCols - 1 ? imgWidth : randomX(iCol),
                        y: 0,
                        id: vid++
                    },
                    profileNormalized: profileStraight
                } : sides[iRow - 1][iCol][bottom].complement());
                edgeRight = new Side({
                    ptA: edgeTop.endPointConst(),
                    ptB: {
                        x: iCol == (numCols - 1) ? imgWidth : randomX(iCol),
                        y: (iRow == numRows - 1) ? imgHeight : randomY(iRow),
                        id: vid++
                    },
                    profileNormalized: iCol == (numCols - 1) ? profileStraight : profileRandomizer.randomize()
                });
                edgeBottom = new Side({
                    ptA: edgeRight.endPointConst(),
                    ptB: (iCol === 0) ? {
                        x: 0,
                        y: iRow == numRows - 1 ? imgHeight : randomY(iRow),
                        id: vid++
                    } : sides[iRow][iCol - 1][bottom].startPointConst(),
                    profileNormalized: iRow == numRows - 1 ? profileStraight : profileRandomizer.randomize()
                });
                edgeLeft = new Side(iCol === 0 ? {
                    ptA: edgeBottom.endPointConst(),
                    ptB: edgeTop.startPointConst(),
                    profileNormalized: profileStraight
                } : sides[iRow][iCol - 1][right].complement());
                sides[iRow][iCol] = [edgeTop, edgeRight, edgeBottom, edgeLeft];

                piece = new PuzzlePiece(pid++, sides[iRow][iCol], this.imageObj);
                piece.edge = (iRow === 0) || (iCol === 0) || (iRow == numRows - 1) || (iCol == numCols - 1);
                this.pieces[piece.id] = piece;
            }
        }
    };
    this.partUnderPoint = function (p) {
        var stack = this.drawingStack;
        var iPart = stack.length;
        var part;
        while (--iPart >= 0) {
            part = stack[iPart];
            if (part.pointIn(p) && !part.hidden && (!part.piece || !this.config.showEdges || part.isEdge())) {
                break;
            }
        }
        return iPart;
    };
    this.sendBack = function (ipart) {
        if (ipart >= 0) {
            var movedPart = this.drawingStack[ipart];
            this.drawingStack.splice(ipart, 1);
            this.drawingStack.unshift(movedPart);
        }
        return 0;
    };
    this.sendTop = function (ipart) {
        if (ipart >= 0 && ipart < this.drawingStack.length - 1) {
            var movedPart = this.drawingStack[ipart];
            this.drawingStack.splice(ipart, 1);
            // insert below the preview part: todo: need to revisit for more solid programming
            ipart = this.drawingStack.length;
            this.drawingStack.splice(ipart, 0, movedPart);
        }
        return ipart;
    };
    // normalize event position
    // based on Quirksmode.org's Peter-Paul Koch
    // http://www.quirksmode.org/js/events_properties.html#position
    // I think this doesn't work for IE..
	// Changed the order of the program for android and it works on all browsers
    this.normalizeEventPos = function (e) {
        if (!e) {
            e = self.event;
        }
        var pos = new Point();
		if(e.touches!=undefined){
			if(e.touches[0].pageX || e.touches[0].pageY){
				pos.x = e.touches[0].pageX;
				pos.y = e.touches[0].pageY;
			}
		}else {
			if (e.pageX || e.pageY) {
				pos.x = e.pageX;
				pos.y = e.pageY;
			} else if (e.clientX || e.clientY) {
				pos.x = e.clientX + self.document.body.scrollLeft + self.document.documentElement.scrollLeft;
				pos.y = e.clientY + self.document.body.scrollTop + self.document.documentElement.scrollTop;
			}
		}
        pos.x -= me.canvas.offsetLeft;
        pos.y -= me.canvas.offsetTop;
        return pos;
    };
    // whether the puzzle is all solved
    this.isSolved = function () {
        return me.drawingStack.length < 2;
    };
    this.partidToIndex = function (id) {
        var n = this.drawingStack.length;
        var part;
        for (var i = 0; i < n; i++) {
            part = this.drawingStack[i];
            if (part.piece && part.id == id) {
                return i;
            }
        }
        return -1;
    };
    // mark puzzle as changed
    this.markAsDirty = function () {
        this.dirty = true;
        // bleh... gadgets prevent my unload handler from being called...
        if (!gadgets.fake) {

        }
    };

    // check whether a piece snaps onto another one
    this.snapPiece = function (iTarget) {
        var stack = this.drawingStack;
        var nParts = stack.length;
        var target = stack[iTarget];
        var targetBbox = target.getDisplayBbox();
        targetBbox.inflate(5);
        for (var iPart = 0; iPart < nParts; iPart++) {
            // skip self
            if (iPart == iTarget) {
                continue;
            }
            // consider only puzzle piece (leaving other puzzle parts)
            var part = stack[iPart];
            if (!part.piece) {
                continue;
            }
            // angle must be same
            if (part.getAngleStep() != target.getAngleStep()) {
                continue;
            }
            // coarse test
            if (!targetBbox.doesIntersect(part.getDisplayBboxConst())) {
                continue;
            }
            // test if it's a match
            if (!part.snapPiece(target)) {
                continue;
            }
            // pieces fit together
            //this['puzzleSnap'+(self.Math.round(self.Math.random())+1)].play();
            // remember which pieces are clustered together, for persistence
            if (!this.composites) {
                this.composites = {};
            }
            this.composites[part.id] = part;
            delete this.composites[target.id];
            // get rid of merged piece
            this.drawingStack.splice(iTarget, 1);
            // is the puzzle solved?
            this.draw();
            // mark puzzle as modified
            this.markAsDirty();
            //myscore = myscore + 10;
            ShowScore(myscore);
			if (this.isSolved()) {
				if (this.config.numPieces >= 200) {
					//	this.puzzleClap3.play();
				} else if (this.config.numPieces >= 100) {
					//this.puzzleClap2.play();
				} else if (this.config.numPieces >= 30) {
					//this.puzzleClap1.play();
				}
				this.setJigSuccess();
			}
            return true;
        }
        return false;
    };
	
	this.setJigSuccess = function(){
		this.canvas.style.cursor='default';
		this.canvas.removeEventListener("mousedown", handleMouseDown);
		this.canvas.removeEventListener("mouseup", handleMouseUp);
		this.canvas.removeEventListener("mousemove", handleMouseMove);
		this.canvas.removeEventListener("touchstart", touchStart,false);
		this.canvas.removeEventListener("touchmove", touchMove, false);
		this.canvas.removeEventListener("touchend", touchEnd, false);
		
		var hi = self.document.getElementById('finalimage');
		hi.style.visibility = "visible";
		gameStatus = "GameOver"
		this.canvas.style.visibility = "hidden";
		finished = "success";
		exportRoot.ge_mc.enterscore.text = score;
		setsuccessmode()
	}
	
	this.setJigFailure = function(){
		this.canvas.style.cursor='default';
		this.canvas.removeEventListener("mousedown", handleMouseDown);
		this.canvas.removeEventListener("mouseup", handleMouseUp);
		this.canvas.removeEventListener("mousemove", handleMouseMove);
		this.canvas.removeEventListener("touchstart", touchStart,false);
		this.canvas.removeEventListener("touchmove", touchMove, false);
		this.canvas.removeEventListener("touchend", touchEnd, false);
		
		var hi = self.document.getElementById('finalimage');
		hi.style.visibility = "visible";
		gameStatus = "GameOver"
		this.canvas.style.visibility = "hidden";
		finished = "failuretimeout";
		setfailuremode();
	}
    // synchronize interface with current options
    this.syncUI = function () {
        var opts = this.config;
    };
    // mouse wheel handling: http://adomas.org/javascript-mouse-wheel/
    self.onmousewheel = function (e) {
        if (me.imoved < 0) {
            return true;
        }
        var d = 0;
        if (!e) {
            e = self.e;
        }
        if (e.wheelDelta) {
            d = e.wheelDelta;
            if (self.opera) {
                d = -d;
            }
        } else if (e.detail) {
            d = e.detail;
        }
        if (d) {
            var moved = me.drawingStack[me.imoved];
            if (moved.piece) {
                var drawBbox = moved.getDisplayBbox();
                moved.setAngleStep(moved.getAngleStep() + (d > 0 ? 1 : -1));
                drawBbox.union(moved.getDisplayBboxConst());
                me.draw(drawBbox);
            }
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
        return false;
    };
    /** DOMMouseScroll is for mozilla. */
    gadgets.addEventListener(self, 'DOMMouseScroll', self.onmousewheel);
    // persist and cleanup
    this.unload = function () {
        // remove event handlers
        if (this.canvas) {
            this.canvas.removeEventListener("mousedown", handleMouseDown);
			this.canvas.removeEventListener("mouseup", handleMouseUp);
			this.canvas.removeEventListener("mousemove", handleMouseMove);
			this.canvas.removeEventListener("touchstart", touchStart,false);
			this.canvas.removeEventListener("touchmove", touchMove, false);
			this.canvas.removeEventListener("touchend", touchEnd, false);
        }

        gadgets.removeEventListener(self, 'DOMMouseScroll', self.onmousewheel);
        self.onmousewheel = null;
        gadgets.removeEventListener(self, 'unload', function () {
            me.unload();
        });
        // dissociate ourself from canvas object
        delete this.canvas.puzzle;
        // get rid of internal objects
        delete this.canvas;
    };
    //
    // Ctor code
    //
    // integrate canvas tag into html page
    this.canvasParent = self.document.getElementById(id);
    if (!this.canvasParent) {
        return;
    }
    this.canvas = self.document.getElementById("puzzleCanvas");

    if (!this.canvas) {
        this.canvas = self.document.createElement("canvas");
        if (!this.canvas) {
            return;
        }
    }
    if (!this.canvas.getContext) {
        return;
    }
    this.canvas.puzzle = me;
    // if we get here, javascript and canvas tag are supported, so turn off alert
    //this.canvasParent.style.backgroundColor='#aab';
    // Properties
    // insert a brand new canvas element into the page
    this.canvasParent.innerHTML = '';
    this.canvasParent.appendChild(this.canvas);
    // default drawing stack
    this.imoved = -1; // the (drawing stack) index of the part being moved
    this.movedAnchor = new Point(); // the distance of the mouse position relative to the top-left corner of the piece being moved
    this.drawingStack = [];
    // cache references of important DOM elements
    var elems = document.querySelectorAll('[id^="puzzle"]');
    for (var iElem = 0; iElem < elems.length; iElem++) {
        var e = elems[iElem];
        this[e.id] = e;
    }
    // interface hooks


    this.puzzleCreate['createPuzzle'] = function () {
        var prefs = {
            cut: 'classic',
            screenSize: "h600",
            complexity: 1,
            numPieces: "25",
            src: internalImage
        };
        me.create(prefs);
        self.puzzleGadgetTabs.setSelectedTab(0);
        // mark puzzle as modified
        me.markAsDirty();
        me.draw();
    };



    // assign a click handler for presets

    // final steps: create the puzzle
    this.create(puzzleOptions);
    this.syncUI();
    //
    // event handlers
    //


    gadgets.addEventListener(self, 'unload', function () {
        me.unload();
    });
    this.canvas.addEventListener("mousedown", handleMouseDown);
	this.canvas.addEventListener("mouseup", handleMouseUp);
	this.canvas.addEventListener("mousemove", handleMouseMove);
	
	function handleMouseDown(e) {
        if (typeof flag == 'undefined') {
            // It has not... perform the initilization
            flag = 0;
        }

        if (flag == 0) {
            CreateTimer("timer", timecheck);
            flag = 1;
        }
        var imoved = me.imoved;
        me.imoved = -1;
        if (imoved < 0) {
            var pos = me.normalizeEventPos(e);
            var ipart = me.partUnderPoint(pos);
            if (ipart >= 0) {
                // bring on top
                me.imoved = me.sendTop(ipart);
                var moved = me.drawingStack[me.imoved];
                var dPos = moved.getDisplayPos();
                me.movedAnchor.x = pos.x - dPos.x;
                me.movedAnchor.y = pos.y - dPos.y;
                me.draw(moved.getDisplayBbox());
                this.style.cursor = "-moz-grabbing";
            }
        }
    };

    function handleMouseUp(e) {
        var imoved = me.imoved;
        me.imoved = -1;
        if (imoved >= 0) {
            // is this a piece of puzzle?
            if (me.drawingStack[imoved].piece) {
                if (!me.snapPiece(imoved)) {
                    me.config.showComposite = false; // for convenience
                }
            }
            me.draw();
            this.style.cursor = "-moz-grab";
        }
    }

    function handleMouseMove(e) {
        var pos = me.normalizeEventPos(e);
		this.style.cursor='pointer';
        if (me.imoved < 0) {
            this.style.cursor = me.partUnderPoint(pos) >= 0 ? "-moz-grab" : "auto";
        } else {
            var moved = me.drawingStack[me.imoved];
            var drawBbox = moved.getDisplayBbox();
            moved.setDisplayPos(pos.x - me.movedAnchor.x, pos.y - me.movedAnchor.y);
            drawBbox.union(moved.getDisplayBboxConst());
			var dPos = moved.getDisplayPos()
			me.movedAnchor.x = pos.x - dPos.x;
            me.movedAnchor.y = pos.y - dPos.y;
            me.draw(drawBbox);
        }
    };
	
	//Handle touch events
	this.canvas.addEventListener("touchstart", touchStart,false);
	this.canvas.addEventListener("touchmove", touchMove, false);
	this.canvas.addEventListener("touchend", touchEnd, false);

	
	function touchStart(e) {
		//e.preventDefault();
		if (typeof flag == 'undefined') {
            // It has not... perform the initilization
            flag = 0;
        }

        if (flag == 0) {
            CreateTimer("timer", timecheck);
            flag = 1;
        }
        var imoved = me.imoved;
        me.imoved = -1;
        if (imoved < 0) {
            var pos = me.normalizeEventPos(e);
            var ipart = me.partUnderPoint(pos);
            if (ipart >= 0) {
                // bring on top
                me.imoved = me.sendTop(ipart);
                //var moved = me.drawingStack[me.imoved];
                //var dPos = moved.getDisplayPos();
                //me.movedAnchor.x = pos.x - dPos.x;
                //me.movedAnchor.y = pos.y - dPos.y;
                //me.draw(moved.getDisplayBbox());
                //this.style.cursor = "-moz-grabbing";
            }
        }
	};
	
	var movedout = false;
	function touchEnd(e) {
		movedout = false;
		var imoved = me.imoved;
        me.imoved = -1;
        if (imoved >= 0) {
            // is this a piece of puzzle?
            if (me.drawingStack[imoved].piece) {
                if (!me.snapPiece(imoved)) {
                    me.config.showComposite = false; // for convenience
                }
            }
            me.draw();
            this.style.cursor = "-moz-grab";
        }
	}
	
	function touchMove(e) {
		var pos = me.normalizeEventPos(e);
		this.style.cursor='pointer';
		var curX = e.targetTouches[0].clientX;
   		var curY = e.targetTouches[0].clientY;
		
		if(!movedout){
			if (me.imoved < 0) {
				this.style.cursor = me.partUnderPoint(pos) >= 0 ? "-moz-grab" : "auto";
			} else {
					e.preventDefault();
					var moved = me.drawingStack[me.imoved];
					var drawBbox = moved.getDisplayBbox();
					moved.setDisplayPos(pos.x - me.movedAnchor.x, pos.y - me.movedAnchor.y);
					drawBbox.union(moved.getDisplayBboxConst());
				if(curX>=10 && curX<=(movieWidth-10) && curY>=10 && curY<=(movieHeight-10)){
					var dPos = moved.getDisplayPos()
					me.movedAnchor.x = pos.x - dPos.x;
					me.movedAnchor.y = pos.y - dPos.y;
					me.draw(drawBbox);
				}else{
					movedout =  true;
				}
			}
		}
	};
}