(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"oliTEST5_atlas_1", frames: [[0,0,1620,1358],[1622,0,800,806]]}
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



(lib.cerberus_high_inv = function() {
	this.initialize(ss["oliTEST5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Oliver_expressions_concerned_talk = function() {
	this.initialize(ss["oliTEST5_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ALqAAQAAEMjaC+QjbC9k1AAQk0AAjai9Qjbi+AAkMQAAkLDbi+QDai9E0AAQE1AADbC9QDaC+AAELg");
	this.shape.setTransform(74.6,64.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8B8B8B","#EFECFF"],[0,0.976],-1.1,-34.8,0.8,26.7).s().p("AoOHJQjbi9AAkMQAAkLDbi9QDai+E0AAQE1AADbC+QDaC9AAELQAAEMjaC9QjbC+k1AAQk0AAjai+g");
	this.shape_1.setTransform(74.6,64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9933").s().p("AoOHJQjbi9AAkMQAAkLDbi9QDai+E0AAQE1AADbC+QDaC9AAELQAAEMjaC9QjbC+k1AAQk0AAjai+g");
	this.shape_2.setTransform(74.6,64.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AoOHJQjbi9AAkMQAAkLDbi9QDai+E0AAQE1AADbC+QDaC9AAELQAAEMjaC9QjbC+k1AAQk0AAjai+g");
	this.shape_3.setTransform(74.6,64.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,151.2,131.4);
p.frameBounds = [rect, rect, rect, rect];


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AD+AAQAABphKBLQhLBKhpAAQhoAAhLhKQhKhLAAhpQAAhoBKhLQBLhKBoAAQBpAABLBKQBKBLAABog");
	this.shape.setTransform(25.4,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyC0QhLhLAAhpQAAhoBLhKQBKhLBoAAQBpAABLBLQBKBKAABoQAABphKBLQhLBKhpAAQhoAAhKhKg");
	this.shape_1.setTransform(25.4,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, rect = new cjs.Rectangle(-1,-1,52.8,52.8), [rect]);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cerberus_high_inv();
	this.instance.setTransform(0,0,0.2492,0.2492);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, rect = new cjs.Rectangle(0,0,403.7,338.4), [rect]);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol5();
	this.instance.setTransform(201.8,169.2,1,1,0,0,0,201.8,169.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-2,411,346);
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-2,-3,411,348), new cjs.Rectangle(-2,-4,411,350), new cjs.Rectangle(-2,-5,411,352), new cjs.Rectangle(-2,-6,411,354), rect=new cjs.Rectangle(-2,-7,411,356), rect, new cjs.Rectangle(-4,-16,419,378), new cjs.Rectangle(-2,-8,411,358), new cjs.Rectangle(-2,-7,411,356), new cjs.Rectangle(-2,-6,411,354), new cjs.Rectangle(-2,-5,411,352), new cjs.Rectangle(-2,-4,411,350), rect=new cjs.Rectangle(-2,-3,411,348), rect, rect=new cjs.Rectangle(-2,-2,411,346), rect, new cjs.Rectangle(0,0,403.7,338.4)];


// stage content:
(lib.oliTEST = function(mode,startPosition,loop,reversed) {
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
	// timeline functions:
	this.frame_0 = function() {
		////////////////////////////////////////////////////////////////////////////////
		// BAYER 8×8 ORDERED DITHER (32 COLORS), LESS CHUNKY (retroWidth=512)
		////////////////////////////////////////////////////////////////////////////////
		
		// Reference the main timeline
		var mainTimeline = this;
		
		// Remove Animate's default Ticker so we fully control rendering
		createjs.Ticker.removeAllEventListeners("tick");
		createjs.Ticker.framerate = 30;
		createjs.Ticker.on("tick", handleMasterTick);
		
		// Reference the stage
		var stage = this.stage;
		
		// [A] Less chunky => bigger retroWidth (e.g. 512)
		var retroWidth = 512; 
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
		    var scaled = offset * (255 / 63) * 0.5; // tweak *0.5 up/down for more/less dithering
		
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(614,275.4,1,1,0,0,0,74.6,64.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

	// Layer_4
	this.instance_1 = new lib.Oliver_expressions_concerned_talk();
	this.instance_1.setTransform(-146,19,0.8402,0.8402);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

	// Layer_3
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(127.9,377.5,1,1,0,0,0,25.4,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:514.55,y:381},26).wait(1));

	// Layer_2
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(327.8,237.2,1,1,0,0,0,201.8,169.2);
	this.instance_3.filters = [new cjs.BlurFilter(4, 17, 3)];
	this.instance_3.cache(-4,-4,415,350);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:177.2},11).to({y:237.2},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(254,342.5,835.6,677.2);
p.frameBounds = [rect, rect, rect, rect, rect, new cjs.Rectangle(254,339.3,835.6,680.4), new cjs.Rectangle(254,333.8,835.6,685.9), new cjs.Rectangle(254,328.3,835.6,691.4), new cjs.Rectangle(254,322.9,835.6,696.8), new cjs.Rectangle(254,317.4,835.6,702.3), new cjs.Rectangle(254,312,835.6,707.7), new cjs.Rectangle(254,285.5,835.6,734.2), new cjs.Rectangle(254,310.5,835.6,709.2), new cjs.Rectangle(254,314.5,835.6,705.2), new cjs.Rectangle(254,318.5,835.6,701.2), new cjs.Rectangle(254,322.5,835.6,697.2), new cjs.Rectangle(254,326.5,835.6,693.2), new cjs.Rectangle(254,330.5,835.6,689.2), new cjs.Rectangle(254,334.5,835.6,685.2), new cjs.Rectangle(254,338.5,835.6,681.2), rect=new cjs.Rectangle(254,342.5,835.6,677.2), rect, rect, rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: 'AA7EF674FD3F4E65AA08A1F0429652EC',
	width: 800,
	height: 647,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/html3/images/oliTEST5_atlas_1.png
", id:"oliTEST5_atlas_1"}
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
an.compositions['AA7EF674FD3F4E65AA08A1F0429652EC'] = {
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
