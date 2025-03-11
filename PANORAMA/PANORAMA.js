(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
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
	this.instance.setTransform(-1567,-2062,4.3643,4.3646);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-750,-987.1,2.0891,2.0892);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Panorama, rect = new cjs.Rectangle(-1567,-2062,3133.6,4124.5), [rect]);


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
		// References from the Animate/CreateJS context
		const panorama = this.Panorama;
		var mainTimeline = this;
		var stage = this.stage;
		var canvas = stage.canvas;
		
		// ----- Panorama Panning Setup -----
		// Scaled panorama bounds
		const boundsWidth = 4000;
		const boundsHeight = 5270;
		const minX = canvas.width - boundsWidth;
		const minY = canvas.height - boundsHeight;
		const maxX = 0;
		const maxY = 0;
		
		let dragging = false;
		let startX = 0, startY = 0, offsetX = 0, offsetY = 0;
		let targetX = (canvas.width - boundsWidth) / 2;
		let targetY = (canvas.height - boundsHeight) / 2;
		
		// Center the panorama initially
		panorama.x = targetX;
		panorama.y = targetY;
		
		const getEventCoordinates = (e) => {
		    if (e.touches && e.touches.length) {
		        const touch = e.touches[0] || e.changedTouches[0];
		        return { x: touch.clientX, y: touch.clientY };
		    } else {
		        return { x: e.stageX || e.clientX, y: e.stageY || e.clientY };
		    }
		};
		
		const startDrag = (e) => {
		    dragging = true;
		    const { x, y } = getEventCoordinates(e);
		    startX = x;
		    startY = y;
		    offsetX = panorama.x;
		    offsetY = panorama.y;
		    if(e.preventDefault) e.preventDefault(); // Prevent page scrolling on mobile
		};
		
		const moveDrag = (e) => {
		    if (dragging) {
		        const { x, y } = getEventCoordinates(e);
		        targetX = offsetX + (x - startX);
		        targetY = offsetY + (y - startY);
		        // Clamp within bounds
		        targetX = Math.max(minX, Math.min(maxX, targetX));
		        targetY = Math.max(minY, Math.min(maxY, targetY));
		    }
		};
		
		const stopDrag = () => {
		    dragging = false;
		};
		
		// CreateJS event model for mouse and touch (drag mode)
		panorama.on("mousedown", startDrag);
		stage.on("stagemousemove", moveDrag);
		stage.on("stagemouseup", stopDrag);
		
		panorama.on("pressdown", startDrag);
		stage.on("pressmove", moveDrag);
		stage.on("pressup", stopDrag);
		
		// ----- Hover Panning (Desktop) -----
		// When not dragging, update target based on mouse position relative to canvas
		canvas.addEventListener('mousemove', function(e) {
		    if (!dragging) {
		        const rect = canvas.getBoundingClientRect();
		        const mouseX = e.clientX - rect.left;
		        const mouseY = e.clientY - rect.top;
		        const relativeX = mouseX / canvas.width;
		        const relativeY = mouseY / canvas.height;
		        // Map relative position to allowed panorama range
		        targetX = minX + (maxX - minX) * relativeX;
		        targetY = minY + (maxY - minY) * relativeY;
		    }
		});
		
		// ----- Additional Mobile Touch Support -----
		// In addition to CreateJS events, add native touch listeners (with passive:false) to help mobile responsiveness.
		if ('ontouchstart' in window) {
		    canvas.addEventListener('touchstart', startDrag, { passive: false });
		    canvas.addEventListener('touchmove', moveDrag, { passive: false });
		    canvas.addEventListener('touchend', stopDrag, { passive: false });
		    canvas.addEventListener('touchcancel', stopDrag, { passive: false });
		}
		
		// ----- Retro Dithering Setup -----
		// Remove Animate's default Ticker and set our own framerate
		createjs.Ticker.removeAllEventListeners("tick");
		createjs.Ticker.framerate = 30;
		
		// [A] Retro settings: fixed retro width and proportional height
		var retroWidth = 384;
		var retroHeight = Math.floor(canvas.height * (retroWidth / canvas.width));
		
		// Create an offscreen canvas at retro resolution
		var offCanvas = document.createElement("canvas");
		offCanvas.width = retroWidth;
		offCanvas.height = retroHeight;
		var offCtx = offCanvas.getContext("2d");
		
		// [B] Create a 32-color palette (2 bits for R, 1 bit for G, 2 bits for B)
		var palette32 = [];
		for (var rBits = 0; rBits < 4; rBits++) {
		  for (var gBits = 0; gBits < 2; gBits++) {
		    for (var bBits = 0; bBits < 4; bBits++) {
		      var rVal = Math.round((rBits / 3) * 255);
		      var gVal = Math.round((gBits / 1) * 255);
		      var bVal = Math.round((bBits / 3) * 255);
		      palette32.push([rVal, gVal, bVal]);
		    }
		  }
		}
		
		function findClosestPaletteColor(r, g, b) {
		  var bestDist = Infinity;
		  var bestColor = [0, 0, 0];
		  for (var i = 0; i < palette32.length; i++) {
		    var pr = palette32[i][0], pg = palette32[i][1], pb = palette32[i][2];
		    var dr = r - pr, dg = g - pg, db = b - pb;
		    var dist = dr * dr + dg * dg + db * db;
		    if (dist < bestDist) {
		      bestDist = dist;
		      bestColor = palette32[i];
		    }
		  }
		  return bestColor;
		}
		
		// [C] 8×8 Bayer matrix (values 0 to 63)
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
		
		// Utility: clamp a value between mn and mx
		function clamp(v, mn, mx) {
		  return (v < mn) ? mn : (v > mx ? mx : v);
		}
		
		function applyBayer8x8_32color() {
		  var mainCtx = canvas.getContext("2d");
		  // 1) Draw stage content to the offscreen retro canvas
		  offCtx.imageSmoothingEnabled = false;
		  offCtx.clearRect(0, 0, retroWidth, retroHeight);
		  offCtx.drawImage(canvas, 0, 0, retroWidth, retroHeight);
		
		  // 2) Dither the pixel data
		  var imageData = offCtx.getImageData(0, 0, retroWidth, retroHeight);
		  var data = imageData.data;
		  for (var i = 0; i < data.length; i += 4) {
		    var r = data[i], g = data[i + 1], b = data[i + 2];
		    var index = i / 4;
		    var x = index % retroWidth;
		    var y = Math.floor(index / retroWidth);
		    var threshold = bayer8x8[y % 8][x % 8];
		    var offset = threshold - 31.5;
		    var scaled = offset * (255 / 63) * 0.5; // Adjust dithering strength
		    var r2 = clamp(r + scaled, 0, 255);
		    var g2 = clamp(g + scaled, 0, 255);
		    var b2 = clamp(b + scaled, 0, 255);
		    var newColor = findClosestPaletteColor(r2, g2, b2);
		    data[i] = newColor[0];
		    data[i + 1] = newColor[1];
		    data[i + 2] = newColor[2];
		  }
		  offCtx.putImageData(imageData, 0, 0);
		
		  // 3) Scale the dithered image back to the main canvas
		  mainCtx.imageSmoothingEnabled = false;
		  mainCtx.clearRect(0, 0, canvas.width, canvas.height);
		  mainCtx.drawImage(offCanvas, 0, 0, canvas.width, canvas.height);
		}
		
		// ----- Master Ticker -----
		// This function combines timeline advancement, panorama smoothing, stage updating, and dithering.
		function handleMasterTick(evt) {
		  // Smoothly move the panorama toward the target
		  panorama.x += (targetX - panorama.x) * 0.15;
		  panorama.y += (targetY - panorama.y) * 0.15;
		  
		  // Advance the timeline and update the stage
		  mainTimeline.play();
		  stage.update();
		  
		  // Apply the dithering effect on the updated canvas
		  requestAnimationFrame(applyBayer8x8_32color);
		}
		
		// Start the master tick
		createjs.Ticker.on("tick", handleMasterTick);
		
		// ----- Window Resize Handler -----
		// Update canvas size, recenter the panorama, and adjust offscreen canvas height
		window.addEventListener("resize", () => {
		    canvas.width = window.innerWidth;
		    canvas.height = window.innerHeight;
		    
		    targetX = (canvas.width - boundsWidth) / 2;
		    targetY = (canvas.height - boundsHeight) / 2;
		    panorama.x = targetX;
		    panorama.y = targetY;
		    
		    // Recalculate retro height and update offscreen canvas size
		    retroHeight = Math.floor(canvas.height * (retroWidth / canvas.width));
		    offCanvas.height = retroHeight;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.Panorama = new lib.Panorama();
	this.Panorama.name = "Panorama";
	this.Panorama.setTransform(0,0,1.2764,1.2764,0,0,0,-1567,-2062);

	this.timeline.addTween(cjs.Tween.get(this.Panorama).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(300.1,300.1,3999.8,5264.7);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'A4F77EEAA0D94EEAA4F9260768CBD6CE',
	width: 600,
	height: 600,
	fps: 30,
	color: "#000000",
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