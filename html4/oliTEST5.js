(function (cjs, an) {

var p; 
var lib = {}; 
var ss = {}; 
var img = {};
var rect; 

// ✅ Load sprite sheet correctly
var spriteSheet = new createjs.SpriteSheet({
    "images": ["https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/html4/images/oliTEST5_atlas_1.png"],
    "frames": [[0,0,1620,1358],[1622,0,800,806]]
});

// ✅ Add event listener to ensure it's ready before use
spriteSheet.addEventListener("complete", function() {
    console.log("SpriteSheet loaded successfully!");
    ss["oliTEST5_atlas_1"] = spriteSheet;
});

// ✅ Check for loading errors
spriteSheet.addEventListener("error", function(event) {
    console.error("SpriteSheet loading failed:", event);
});


(lib.AnMovieClip = function(){
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    }
    this.play = function(){
        cjs.MovieClip.prototype.play.call(this);
    }
    this.gotoAndStop = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    }
    this.stop = function(){
        cjs.MovieClip.prototype.stop.call(this);
    }
}).prototype = p = new cjs.MovieClip();


// ✅ Fix SpriteSheet initialization
(lib.cerberus_high_inv = function() {
    if (ss["oliTEST5_atlas_1"]) {
        this.initialize(ss["oliTEST5_atlas_1"]);
        this.gotoAndStop(0); // Frame 0
    } else {
        console.error("cerberus_high_inv: SpriteSheet not loaded");
    }
}).prototype = p = new cjs.Sprite();


(lib.Oliver_expressions_concerned_talk = function() {
    if (ss["oliTEST5_atlas_1"]) {
        this.initialize(ss["oliTEST5_atlas_1"]);
        this.gotoAndStop(1); // Frame 1
    } else {
        console.error("Oliver_expressions_concerned_talk: SpriteSheet not loaded");
    }
}).prototype = p = new cjs.Sprite();


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


// ✅ Ensure correct bounds and initialization
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

    this.instance = new lib.cerberus_high_inv();
    this.instance.setTransform(0,0,0.2492,0.2492);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,403.7,338.4), null);


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
    this.frame_0 = function() {
        var mainTimeline = this;
        createjs.Ticker.removeAllEventListeners("tick");
        createjs.Ticker.framerate = 30;
        createjs.Ticker.on("tick", handleMasterTick);

        function handleMasterTick(evt) {
            mainTimeline.play();
            mainTimeline.stage.update();
        }
    }

    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(27));

    this.instance = new lib.Symbol5();
    this.instance.setTransform(200,200,1,1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(27));

    this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,647);


lib.properties = {
    id: 'AA7EF674FD3F4E65AA08A1F0429652EC',
    width: 800,
    height: 647,
    fps: 30,
    color: "#000000",
    opacity: 1.00,
    manifest: [
        {src:"https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/html4/images/oliTEST5_atlas_1.png", id:"oliTEST5_atlas_1"}
    ],
    preloads: []
};


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

p.getTimelinePosition = function() { 
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; 
}


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

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
