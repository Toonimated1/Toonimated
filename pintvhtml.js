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

	// timeline functions:
	this.frame_9 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArbrbIW3AAIAAW3I23AAg");
	this.shape.setTransform(73.225,73.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_1.setTransform(73.225,73.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00445B").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_2.setTransform(73.225,73.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00554F").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_3.setTransform(73.225,73.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006644").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_4.setTransform(73.225,73.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007739").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_5.setTransform(73.225,73.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00882D").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_6.setTransform(73.225,73.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009922").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_7.setTransform(73.225,73.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AA17").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_8.setTransform(73.225,73.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00BB0B").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_9.setTransform(73.225,73.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00CC00").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_10.setTransform(73.225,73.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,148.5,148.5);


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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArbrbIW3AAIAAW3I23AAg");
	this.shape.setTransform(73.225,73.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_1.setTransform(73.225,73.225);

	this.instance = new lib.Symbol3();
	this.instance.setTransform(73.2,73.2,1,1,0,0,0,73.2,73.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_2.setTransform(73.225,73.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,148.5,148.5);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(319.2,238.25,1,1,0,0,0,73.2,73.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,110);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:45.2673,x:319.15,y:238.2},0).wait(1).to({rotation:90.6432,x:319.2,y:238.25},0).wait(1).to({rotation:134.2337},0).wait(1).to({rotation:174.485,x:319.15},0).wait(1).to({rotation:210.4527,x:319.2},0).wait(1).to({rotation:241.7921,x:319.15},0).wait(1).to({rotation:268.5842,x:319.2,y:238.2},0).wait(1).to({rotation:291.1454,x:319.15,y:238.25},0).wait(1).to({rotation:309.887},0).wait(1).to({rotation:325.234,x:319.2},0).wait(1).to({rotation:337.5849,x:319.15,y:238.2},0).wait(1).to({rotation:347.2961},0).wait(1).to({rotation:354.6784,x:319.2,y:238.25},0).wait(1).to({rotation:360},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(333.5,172.6,299,380);
// library properties:
lib.properties = {
	id: 'AA7EF674FD3F4E65AA08A1F0429652EC',
	width: 640,
	height: 480,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
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