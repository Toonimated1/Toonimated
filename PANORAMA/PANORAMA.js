(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"PANORAMA_atlas_1", frames: [[0,0,718,945]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap2 = function() {
	this.initialize(ss["PANORAMA_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,20.6,0,0,20.6,580.1).s().p("Eg++BepMAAAi9SMB99AAAMAAAC9Sg");
	this.shape.setTransform(403.1,605.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,806.2,1211.5), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EjKZjIqMGUzAAAMAAAGRVMmUzAAAg");
	this.shape.setTransform(1295.375,1284.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EjKZDIrMAAAmRVMGUzAAAMAAAGRVg");
	this.shape_1.setTransform(1295.375,1284.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,2592.8,2570.7), null);


(lib.Panorama = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,5.571,5.571);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Panorama, new cjs.Rectangle(0,0,4000,5264.6), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(403.15,558.9,1.36,1.36,0,0,0,403.1,605.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.3715,scaleY:1.3715,x:403.2,y:557.45},0).wait(1).to({scaleX:1.3831,scaleY:1.3831,y:555.9},0).wait(1).to({scaleX:1.3947,scaleY:1.3947,y:554.45},0).wait(1).to({scaleX:1.4062,scaleY:1.4062,y:552.9},0).wait(1).to({scaleX:1.4178,scaleY:1.4178,x:403.25,y:551.35},0).wait(1).to({scaleX:1.4294,scaleY:1.4294,x:403.2,y:549.9},0).wait(1).to({scaleX:1.441,scaleY:1.441,y:548.4},0).wait(1).to({scaleX:1.4525,scaleY:1.4525,y:546.85},0).wait(1).to({scaleX:1.464,scaleY:1.464,y:545.35},0).wait(1).to({scaleX:1.4754,scaleY:1.4754,y:543.9},0).wait(1).to({scaleX:1.4867,scaleY:1.4867,y:542.4},0).wait(1).to({scaleX:1.498,scaleY:1.498,x:403.25,y:540.95},0).wait(1).to({scaleX:1.5092,scaleY:1.5092,x:403.2,y:539.5},0).wait(1).to({scaleX:1.5202,scaleY:1.5202,y:538.05},0).wait(1).to({scaleX:1.5312,scaleY:1.5312,y:536.65},0).wait(1).to({scaleX:1.542,scaleY:1.542,x:403.25,y:535.2},0).wait(1).to({scaleX:1.5527,scaleY:1.5527,x:403.2,y:533.8},0).wait(1).to({scaleX:1.5633,scaleY:1.5633,y:532.45},0).wait(1).to({scaleX:1.5737,scaleY:1.5737,y:531.05},0).wait(1).to({scaleX:1.584,scaleY:1.584,y:529.75},0).wait(1).to({scaleX:1.5941,scaleY:1.5941,x:403.25,y:528.4},0).wait(1).to({scaleX:1.6041,scaleY:1.6041,y:527.15},0).wait(1).to({scaleX:1.6138,scaleY:1.6138,y:525.85},0).wait(1).to({scaleX:1.6234,scaleY:1.6234,x:403.2,y:524.55},0).wait(1).to({scaleX:1.6329,scaleY:1.6329,y:523.4},0).wait(1).to({scaleX:1.6421,scaleY:1.6421,x:403.25,y:522.2},0).wait(1).to({scaleX:1.6511,scaleY:1.6511,x:403.2,y:520.95},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:403.25,y:519.85},0).wait(1).to({scaleX:1.6687,scaleY:1.6687,y:518.7},0).wait(1).to({scaleX:1.6772,scaleY:1.6772,x:403.2,y:517.55},0).wait(1).to({scaleX:1.6854,scaleY:1.6854,x:403.25,y:516.5},0).wait(1).to({scaleX:1.6935,scaleY:1.6935,x:403.2,y:515.45},0).wait(1).to({scaleX:1.7014,scaleY:1.7014,x:403.25,y:514.4},0).wait(1).to({scaleX:1.7091,scaleY:1.7091,y:513.4},0).wait(1).to({scaleX:1.7166,scaleY:1.7166,y:512.45},0).wait(1).to({scaleX:1.7239,scaleY:1.7239,y:511.45},0).wait(1).to({scaleX:1.731,scaleY:1.731,y:510.55},0).wait(1).to({scaleX:1.7379,scaleY:1.7379,y:509.65},0).wait(1).to({scaleX:1.7446,scaleY:1.7446,y:508.8},0).wait(1).to({scaleX:1.7511,scaleY:1.7511,y:507.95},0).wait(1).to({scaleX:1.7574,scaleY:1.7574,y:507.1},0).wait(1).to({scaleX:1.7635,scaleY:1.7635,y:506.3},0).wait(1).to({scaleX:1.7694,scaleY:1.7694,y:505.55},0).wait(1).to({scaleX:1.7751,scaleY:1.7751,y:504.8},0).wait(1).to({scaleX:1.7807,scaleY:1.7807,y:504.1},0).wait(1).to({scaleX:1.786,scaleY:1.786,y:503.4},0).wait(1).to({scaleX:1.7912,scaleY:1.7912,y:502.7},0).wait(1).to({scaleX:1.7962,scaleY:1.7962,y:502.1},0).wait(1).to({scaleX:1.801,scaleY:1.801,y:501.45},0).wait(1).to({scaleX:1.8056,scaleY:1.8056,y:500.85},0).wait(1).to({scaleX:1.8101,scaleY:1.8101,y:500.25},0).wait(1).to({scaleX:1.8144,scaleY:1.8144,x:403.2,y:499.7},0).wait(1).to({scaleX:1.8185,scaleY:1.8185,y:499.2},0).wait(1).to({scaleX:1.8224,scaleY:1.8224,x:403.25,y:498.65},0).wait(1).to({scaleX:1.8262,scaleY:1.8262,y:498.15},0).wait(1).to({scaleX:1.8298,scaleY:1.8298,y:497.7},0).wait(1).to({scaleX:1.8332,scaleY:1.8332,x:403.2,y:497.2},0).wait(1).to({scaleX:1.8365,scaleY:1.8365,x:403.25,y:496.8},0).wait(1).to({scaleX:1.8396,scaleY:1.8396,y:496.4},0).wait(1).to({scaleX:1.8426,scaleY:1.8426,y:496.05},0).wait(1).to({scaleX:1.8454,scaleY:1.8454,y:495.65},0).wait(1).to({scaleX:1.8481,scaleY:1.8481,y:495.3},0).wait(1).to({scaleX:1.8506,scaleY:1.8506,y:495},0).wait(1).to({scaleX:1.8529,scaleY:1.8529,y:494.65},0).wait(1).to({scaleX:1.8552,scaleY:1.8552,y:494.4},0).wait(1).to({scaleX:1.8572,scaleY:1.8572,y:494.1},0).wait(1).to({scaleX:1.8592,scaleY:1.8592,y:493.85},0).wait(1).to({scaleX:1.861,scaleY:1.861,y:493.6},0).wait(1).to({scaleX:1.8626,scaleY:1.8626,x:403.2,y:493.4},0).wait(1).to({scaleX:1.8642,scaleY:1.8642,x:403.25,y:493.2},0).wait(1).to({scaleX:1.8656,scaleY:1.8656,y:493},0).wait(1).to({scaleX:1.8668,scaleY:1.8668,y:492.85},0).wait(1).to({scaleX:1.868,scaleY:1.868,y:492.7},0).wait(1).to({scaleX:1.869,scaleY:1.869,y:492.6},0).wait(1).to({scaleX:1.8699,scaleY:1.8699,y:492.45},0).wait(1).to({scaleX:1.8707,scaleY:1.8707,y:492.35},0).wait(1).to({regY:605.6,scaleX:1.8713,scaleY:1.8713,x:403.2,y:492.05},0).to({regY:605.8,scaleX:1.36,scaleY:1.36,y:558.9},77,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.1,-641.2,1508.6999999999998,2267.1000000000004);


(lib.BLACK = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_142 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(142).call(this.frame_142).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(1295.4,1284.3,1,1,0,0,0,1295.4,1284.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},142).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2592.8,2570.7);


// stage content:
(lib.PANORAMA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		////////////////////////////////////////////////////////////////////////////////
		// BAYER 8×8 ORDERED DITHER (32 COLORS), LESS CHUNKY (retroWidth=384)
		////////////////////////////////////////////////////////////////////////////////
		
		// Reference the main timeline
		var mainTimeline = this;
		
		// Remove Animate's default Ticker so we fully control rendering
		createjs.Ticker.removeAllEventListeners("tick");
		createjs.Ticker.framerate = 30;
		createjs.Ticker.on("tick", handleMasterTick);
		
		// Reference the stage
		var stage = this.stage;
		
		// [A] Less chunky => bigger retroWidth (e.g. 384)
		var retroWidth = 384; 
		var canvas = stage.canvas;
		var retroHeight = Math.floor(canvas.height * (retroWidth / canvas.width));
		
		// Create offscreen canvas at the "retro" size
		var offCanvas = document.createElement("canvas");
		offCanvas.width = retroWidth;
		offCanvas.height = retroHeight;
		var offCtx = offCanvas.getContext("2d");
		
		// [B] 32-color palette => 2 bits for R, 1 bit for G, 2 bits for B (example)
		var palette32 = [];
		for (var rBits = 0; rBits < 4; rBits++) {     // 0..3
		  for (var gBits = 0; gBits < 2; gBits++) {   // 0..1
		    for (var bBits = 0; bBits < 4; bBits++) { // 0..3
		      var rVal = Math.round((rBits / 3) * 255);
		      var gVal = Math.round((gBits / 1) * 255);
		      var bVal = Math.round((bBits / 3) * 255);
		      palette32.push([rVal, gVal, bVal]);
		    }
		  }
		}
		
		// Find the closest color in the 32-color palette
		function findClosestPaletteColor(r, g, b) {
		  var bestDist = Infinity;
		  var bestColor = [0,0,0];
		  for (var i = 0; i < palette32.length; i++) {
		    var pr = palette32[i][0];
		    var pg = palette32[i][1];
		    var pb = palette32[i][2];
		    var dr = r - pr, dg = g - pg, db = b - pb;
		    var dist = dr*dr + dg*dg + db*db;
		    if (dist < bestDist) {
		      bestDist = dist;
		      bestColor = palette32[i];
		    }
		  }
		  return bestColor;
		}
		
		// [C] 8×8 Bayer matrix (values 0..63)
		var bayer8x8 = [
		  [  0, 32,  8, 40,  2, 34, 10, 42 ],
		  [ 48, 16, 56, 24, 50, 18, 58, 26 ],
		  [ 12, 44,  4, 36, 14, 46,  6, 38 ],
		  [ 60, 28, 52, 20, 62, 30, 54, 22 ],
		  [  3, 35, 11, 43,  1, 33,  9, 41 ],
		  [ 51, 19, 59, 27, 49, 17, 57, 25 ],
		  [ 15, 47,  7, 39, 13, 45,  5, 37 ],
		  [ 63, 31, 55, 23, 61, 29, 53, 21 ]
		];
		
		// Master tick => advance timeline, render, then dithering
		function handleMasterTick(evt) {
		  mainTimeline.play();
		  stage.update();
		  requestAnimationFrame(applyBayer8x8_32color);
		}
		
		// The dithering function
		function applyBayer8x8_32color() {
		  var mainCtx = canvas.getContext("2d");
		
		  // 1) Draw the stage content to the smaller offscreen canvas
		  offCtx.imageSmoothingEnabled = false;
		  offCtx.clearRect(0, 0, retroWidth, retroHeight);
		  offCtx.drawImage(canvas, 0, 0, retroWidth, retroHeight);
		
		  // 2) Dither the pixel data
		  var imageData = offCtx.getImageData(0, 0, retroWidth, retroHeight);
		  var data = imageData.data;
		
		  for (var i = 0; i < data.length; i += 4) {
		    var r = data[i], g = data[i+1], b = data[i+2];
		    var index = i / 4;
		    var x = index % retroWidth;
		    var y = Math.floor(index / retroWidth);
		
		    // Bayer threshold => shift pixel up/down
		    var threshold = bayer8x8[y % 8][x % 8];
		    var offset = threshold - 31.5;
		    var scaled = offset * (255 / 63) * 0.5; // Keep existing dithering strength
		
		    var r2 = clamp(r + scaled, 0, 255);
		    var g2 = clamp(g + scaled, 0, 255);
		    var b2 = clamp(b + scaled, 0, 255);
		
		    // Snap to nearest of the 32-color palette
		    var newColor = findClosestPaletteColor(r2, g2, b2);
		    data[i]   = newColor[0];
		    data[i+1] = newColor[1];
		    data[i+2] = newColor[2];
		  }
		
		  offCtx.putImageData(imageData, 0, 0);
		
		  // 3) Scale back up to the main stage
		  mainCtx.imageSmoothingEnabled = false;
		  mainCtx.clearRect(0, 0, canvas.width, canvas.height);
		  mainCtx.drawImage(offCanvas, 0, 0, canvas.width, canvas.height);
		}
		
		// Utility clamp
		function clamp(v, mn, mx) {
		  return (v < mn) ? mn : (v > mx ? mx : v);
		}
		const panorama = this.Panorama;
		
		// Set to the new scaled size
		const boundsWidth = 4000; 
		const boundsHeight = 5270;
		
		const minX = canvas.width - boundsWidth;
		const minY = canvas.height - boundsHeight;
		const maxX = 0;
		const maxY = 0;
		
		let dragging = false;
		let startX = 0;
		let startY = 0;
		let offsetX = 0;
		let offsetY = 0;
		let targetX = panorama.x;
		let targetY = panorama.y;
		
		panorama.on("mousedown", (e) => {
		    dragging = true;
		    startX = e.stageX;
		    startY = e.stageY;
		    offsetX = panorama.x;
		    offsetY = panorama.y;
		});
		
		stage.on("stagemousemove", (e) => {
		    if (dragging) {
		        targetX = offsetX + (e.stageX - startX);
		        targetY = offsetY + (e.stageY - startY);
		
		        targetX = Math.max(minX, Math.min(maxX, targetX));
		        targetY = Math.max(minY, Math.min(maxY, targetY));
		    }
		});
		
		stage.on("stagemouseup", () => {
		    dragging = false;
		});
		
		createjs.Ticker.on("tick", () => {
		    panorama.x += (targetX - panorama.x) * 0.15;
		    panorama.y += (targetY - panorama.y) * 0.15;
		    stage.update();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(403.1,597.8,1,1,0,0,0,403.1,605.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.instance_1 = new lib.BLACK();
	this.instance_1.setTransform(420.35,1200.3,1,1,0,0,0,1295.4,1284.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.Panorama = new lib.Panorama();
	this.Panorama.name = "Panorama";
	this.Panorama.setTransform(364.8,480.25,1.0172,1.0172,0,0,0,358.6,472.1);

	this.timeline.addTween(cjs.Tween.get(this.Panorama).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-475.5,327,4544.4,5028.3);
// library properties:
lib.properties = {
	id: 'A4F77EEAA0D94EEAA4F9260768CBD6CE',
	width: 800,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/PANORAMA_atlas_1.png", id:"PANORAMA_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A4F77EEAA0D94EEAA4F9260768CBD6CE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;