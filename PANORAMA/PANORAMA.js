(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,718,945);// helper functions:

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
	this.instance.setTransform(0,0,5.571,5.5709);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Panorama, new cjs.Rectangle(0,0,4000,5264.6), null);


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
		// Assume stage.canvas is your container element:
		const canvas = stage.canvas;
		canvas.style.touchAction = "none"; // disable default touch actions
		
		const panorama = this.Panorama;
		
		// Set the scaled image size:
		const boundsWidth = 4000;
		const boundsHeight = 5270;
		
		// Calculate draggable boundaries based on the canvas size:
		const minX = canvas.width - boundsWidth;
		const minY = canvas.height - boundsHeight;
		const maxX = 0;
		const maxY = 0;
		
		let dragging = false;
		let startX = 0, startY = 0;
		let offsetX = 0, offsetY = 0;
		let targetX = (canvas.width - boundsWidth) / 2;
		let targetY = (canvas.height - boundsHeight) / 2;
		
		// Start with the panorama centered:
		panorama.x = targetX;
		panorama.y = targetY;
		
		// Utility: get coordinates relative to the canvas
		function getCoords(e) {
		  const rect = canvas.getBoundingClientRect();
		  let x, y;
		  if (e.touches && e.touches.length) {
		    x = e.touches[0].clientX - rect.left;
		    y = e.touches[0].clientY - rect.top;
		  } else if (e.changedTouches && e.changedTouches.length) {
		    x = e.changedTouches[0].clientX - rect.left;
		    y = e.changedTouches[0].clientY - rect.top;
		  } else {
		    // Use offsetX/offsetY if available; otherwise calculate from clientX/Y
		    if (typeof e.offsetX !== "undefined") {
		      x = e.offsetX;
		      y = e.offsetY;
		    } else {
		      x = e.clientX - rect.left;
		      y = e.clientY - rect.top;
		    }
		  }
		  return { x, y };
		}
		
		function onDown(e) {
		  e.preventDefault();
		  e.stopPropagation();
		  dragging = true;
		  const { x, y } = getCoords(e);
		  startX = x;
		  startY = y;
		  offsetX = panorama.x;
		  offsetY = panorama.y;
		}
		
		function onMove(e) {
		  if (!dragging) return;
		  e.preventDefault();
		  e.stopPropagation();
		  const { x, y } = getCoords(e);
		  targetX = offsetX + (x - startX);
		  targetY = offsetY + (y - startY);
		
		  // Clamp to the allowed boundaries:
		  targetX = Math.max(minX, Math.min(maxX, targetX));
		  targetY = Math.max(minY, Math.min(maxY, targetY));
		}
		
		function onUp(e) {
		  e.preventDefault();
		  e.stopPropagation();
		  dragging = false;
		}
		
		// Bind events ONLY to the canvas element:
		canvas.addEventListener("mousedown", onDown, { passive: false });
		canvas.addEventListener("mousemove", onMove, { passive: false });
		canvas.addEventListener("mouseup", onUp, { passive: false });
		canvas.addEventListener("mouseleave", onUp, { passive: false });
		
		canvas.addEventListener("touchstart", onDown, { passive: false });
		canvas.addEventListener("touchmove", onMove, { passive: false });
		canvas.addEventListener("touchend", onUp, { passive: false });
		canvas.addEventListener("touchcancel", onUp, { passive: false });
		
		// Smoothly update the panorama's position:
		createjs.Ticker.on("tick", () => {
		  panorama.x += (targetX - panorama.x) * 0.15;
		  panorama.y += (targetY - panorama.y) * 0.15;
		  stage.update();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.Panorama = new lib.Panorama();
	this.Panorama.name = "Panorama";
	this.Panorama.setTransform(358.6,472.1,1,1,0,0,0,358.6,472.1);
	this.Panorama.filters = [new cjs.BlurFilter(4, 4, 3)];
	this.Panorama.cache(-2,-2,4004,5269);

	this.timeline.addTween(cjs.Tween.get(this.Panorama).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(394,394,3615,4880);
// library properties:
lib.properties = {
	id: 'A4F77EEAA0D94EEAA4F9260768CBD6CE',
	width: 800,
	height: 800,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"}
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