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
	this.instance.setTransform(0,0,5.571,5.5709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Panorama, new cjs.Rectangle(0,0,4000,5264.5), null);


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
		let targetX = (canvas.width - boundsWidth) / 2; // Center horizontally
		let targetY = (canvas.height - boundsHeight) / 2; // Center vertically
		
		// Set initial position to center
		panorama.x = targetX;
		panorama.y = targetY;
		
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

	// Layer_3
	this.instance = new lib.BLACK();
	this.instance.setTransform(420.35,1200.3,1,1,0,0,0,1295.4,1284.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.Panorama = new lib.Panorama();
	this.Panorama.name = "Panorama";
	this.Panorama.setTransform(364.8,480.25,1.0172,1.0172,0,0,0,358.6,472.1);
	this.Panorama.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.Panorama.cache(-2,-2,4004,5269);

	this.timeline.addTween(cjs.Tween.get(this.Panorama).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-475.5,315.5,4553.5,5049.5);
// library properties:
lib.properties = {
	id: 'A4F77EEAA0D94EEAA4F9260768CBD6CE',
	width: 800,
	height: 800,
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