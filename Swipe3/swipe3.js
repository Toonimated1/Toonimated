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
	this.shape.graphics.lf(["#00CBFF","#6CD6FF"],[0,1],0,-32.4,0,104.3).s().p("AtST3QjhAAihiSQigiSAAjOIAA4JQAAjOCgiSQChiSDhAAIakAAQDjAACgCSQCgCSAADOIAAYJQAADOigCSQigCSjjAAg");
	this.shape.setTransform(0,136.5,1,1,0,0,0,0,136.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-139.7,-127,279.4,254.1), null);


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
	this.shape.graphics.lf(["#006AFF","#00B9FF"],[0,1],0,-38.6,0,125.8).s().p("AuQXcQjzAAisisQisisAAjzIAA8hQAAjzCsisQCsisDzAAIchAAQDzAACsCsQCsCsAADzIAAchQAADzisCsQisCsjzAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150,-150,300,300), null);


(lib.BlockGrey = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#666666").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockGrey, new cjs.Rectangle(0,0,300,300), null);


(lib.BlockBlack = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockBlack, new cjs.Rectangle(0,0,300,300), null);


(lib.BlockYellow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(149.95,137.4,1,1,0,0,0,0,4.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 0, 0, -143))];
	this.instance.cache(-142,-129,283,258);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(149.95,150);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(32, 0, 0, -172))];
	this.instance_1.cache(-152,-152,304,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockYellow, new cjs.Rectangle(0,0,303,304), null);


(lib.BlockRed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(149.95,137.4,1,1,0,0,0,0,4.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-43, 0, 0, 171))];
	this.instance.cache(-142,-129,283,258);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(149.95,150);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-89, 0, 0, 168))];
	this.instance_1.cache(-152,-152,304,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockRed, new cjs.Rectangle(0,0,303,304), null);


(lib.BlockBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00CBFF","#6CD6FF"],[0,1],0,-32.4,0,104.3).s().p("AtST3QjhAAihiSQigiSAAjOIAA4JQAAjOCgiSQChiSDhAAIakAAQDjAACgCSQCgCSAADOIAAYJQAADOigCSQigCSjjAAg");
	this.shape.setTransform(149.95,269.2,1,1,0,0,0,0,136.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(149.95,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockBlue, new cjs.Rectangle(0,0,300,300), null);


// stage content:
(lib.swipe3 = function(mode,startPosition,loop,reversed) {
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
		// Global game configuration and variables
		var stage, scoreText;
		var cellSize = 300;        // Each cell is 300x300 pixels
		// The block symbols should be designed at 296x296 px to allow a 2px margin.
		var boardRows = 4, boardCols = 4;  // 4x4 grid remains unchanged
		var gameBoard = [];        // 2D array for logical board state
		var score = 0;
		var animating = false;     // flag to disable input during animations
		
		// Variables for swipe detection
		var touchStartX, touchStartY, touchEndX, touchEndY;
		
		// Function to get a new block symbol from the library based on the color.
		function getBlockSymbol(color) {
		    switch(color) {
		        case "red": return new lib.BlockRed();
		        case "yellow": return new lib.BlockYellow();
		        case "blue": return new lib.BlockBlue();
		        case "grey": return new lib.BlockGrey();
		        case "black": return new lib.BlockBlack();
		        default: return new lib.BlockRed();
		    }
		}
		
		//---------------------------------------------------------------------
		// Initialization: sets up stage, board, grid, score text, events, etc.
		//---------------------------------------------------------------------
		function init() {
		    stage = new createjs.Stage("canvas");
		    
		    // Create the logical board; each cell will hold a block object or null.
		    for (var i = 0; i < boardRows; i++) {
		        gameBoard[i] = [];
		        for (var j = 0; j < boardCols; j++) {
		            gameBoard[i][j] = null;
		        }
		    }
		    
		    // Create score text at the top.
		    scoreText = new createjs.Text("Score: 0", "24px Arial", "#000000");
		    scoreText.x = 10;
		    scoreText.y = 10;
		    stage.addChild(scoreText);
		    
		    // Draw grid lines (drawn once behind the blocks).
		    drawGrid();
		    
		    // Set up mouse/touch event listeners for swipe detection.
		    stage.on("stagemousedown", handleMouseDown);
		    stage.on("stagemouseup", handleMouseUp);
		    
		    // Set up ticker for automatic stage updates.
		    createjs.Ticker.framerate = 30;
		    createjs.Ticker.addEventListener("tick", stage);
		}
		
		//---------------------------------------------------------------------
		// Draw grid lines for visual reference (grid drawn behind blocks).
		//---------------------------------------------------------------------
		function drawGrid() {
		    var grid = new createjs.Shape();
		    grid.graphics.setStrokeStyle(1).beginStroke("#000000");
		    // Offset y=50 to leave room for score text.
		    for (var i = 0; i <= boardRows; i++) {
		        grid.graphics.moveTo(0, i * cellSize + 50).lineTo(boardCols * cellSize, i * cellSize + 50);
		    }
		    for (var j = 0; j <= boardCols; j++) {
		        grid.graphics.moveTo(j * cellSize, 50).lineTo(j * cellSize, boardRows * cellSize + 50);
		    }
		    grid.graphics.endStroke();
		    stage.addChild(grid);
		}
		
		//---------------------------------------------------------------------
		// Swipe detection event handlers.
		//---------------------------------------------------------------------
		function handleMouseDown(evt) {
		    touchStartX = evt.stageX;
		    touchStartY = evt.stageY;
		}
		
		function handleMouseUp(evt) {
		    if (animating) return; // ignore input during animation
		    
		    touchEndX = evt.stageX;
		    touchEndY = evt.stageY;
		    
		    var dx = touchEndX - touchStartX;
		    var dy = touchEndY - touchStartY;
		    
		    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) {
		        return; // not a significant swipe
		    }
		    
		    // Determine swipe direction.
		    if (Math.abs(dx) > Math.abs(dy)) {
		        if (dx > 0) {
		            swipeRightAnimated();
		        } else {
		            swipeLeftAnimated();
		        }
		    } else {
		        if (dy > 0) {
		            swipeDownAnimated();
		        } else {
		            swipeUpAnimated();
		        }
		    }
		}
		
		//---------------------------------------------------------------------
		// computeSlide:
		// Given an array (row or column) of cells, this function:
		//  1. Filters out null cells.
		//  2. Scans for contiguous groups of same-colored blocks.
		//     - If a group of 3 or 4 is found, marks them to vanish and awards points.
		//       The vanish reward depends on the current score:
		//         • Score ≤ 500: 3 => 100, 4 => 500
		//         • Score between 501 and 5000: 1000 (flat reward)
		//         • Score between 5001 and 10000: 5000 (flat reward)
		//  3. Rebuilds a new array with vanished blocks removed.
		// Returns an object with the mapping (for animation), the new line, and the score increment.
		//---------------------------------------------------------------------
		function computeSlide(line) {
		    var filtered = [];
		    for (var index = 0; index < line.length; index++) {
		        if (line[index] != null) {
		            filtered.push({ block: line[index], origIndex: index });
		        }
		    }
		    var mapping = [];
		    var pointer = 0;
		    var scoreInc = 0;
		    var i = 0;
		    while (i < filtered.length) {
		        var j = i + 1;
		        while (j < filtered.length && filtered[j].block.color === filtered[i].block.color) {
		            j++;
		        }
		        var groupLength = j - i;
		        if (groupLength >= 3) {
		            var reward = 0;
		            if (score <= 500) {
		                reward = (groupLength === 3 ? 100 : 500);
		            } else if (score <= 5000) {
		                reward = 1000;
		            } else if (score <= 10000) {
		                reward = 5000;
		            } else {
		                reward = 5000;
		            }
		            scoreInc += reward;
		            for (var k = i; k < j; k++) {
		                mapping.push({ origIndex: filtered[k].origIndex, finalIndex: pointer, vanish: true, block: filtered[k].block });
		            }
		        } else {
		            for (var k = i; k < j; k++) {
		                mapping.push({ origIndex: filtered[k].origIndex, finalIndex: pointer, vanish: false, block: filtered[k].block });
		                pointer++;
		            }
		        }
		        i = j;
		    }
		    var newLine = new Array(line.length).fill(null);
		    mapping.forEach(function(map) {
		        if (!map.vanish) {
		            newLine[map.finalIndex] = map.block;
		        }
		    });
		    return { mapping: mapping, newLine: newLine, scoreIncrement: scoreInc };
		}
		
		//---------------------------------------------------------------------
		// Animate a single row swipe (for left/right moves) using block.instance.
		//---------------------------------------------------------------------
		function animateRowSwipe(rowIndex, direction, onLineComplete) {
		    var row = gameBoard[rowIndex]; // current row array
		    var isReversed = (direction === "right");
		    var arr = row.slice();
		    if (isReversed) { arr.reverse(); }
		    
		    var result = computeSlide(arr);
		    score += result.scoreIncrement;  // update score
		    
		    result.mapping.forEach(function(map) {
		        var block = map.block;
		        var origCol = isReversed ? (boardCols - 1 - map.origIndex) : map.origIndex;
		        var finalCol = isReversed ? (boardCols - 1 - map.finalIndex) : map.finalIndex;
		        var newX = finalCol * cellSize + 2;
		        createjs.Tween.get(block.instance).to({ x: newX }, 200, createjs.Ease.quadIn).call(function() {
		            if (map.vanish) {
		                createjs.Tween.get(block.instance).to({ alpha: 0 }, 200).call(function() {
		                    stage.removeChild(block.instance);
		                });
		            } else {
		                block.col = finalCol;
		            }
		        });
		    });
		    var newRow = isReversed ? result.newLine.slice().reverse() : result.newLine;
		    gameBoard[rowIndex] = newRow;
		    setTimeout(onLineComplete, 200);
		}
		
		//---------------------------------------------------------------------
		// Animate a horizontal swipe (all rows at once).
		//---------------------------------------------------------------------
		function animateHorizontalSwipe(direction, onComplete) {
		    var completed = 0;
		    for (var rowIndex = 0; rowIndex < boardRows; rowIndex++) {
		        animateRowSwipe(rowIndex, direction, function() {
		            completed++;
		            if (completed === boardRows) {
		                onComplete();
		            }
		        });
		    }
		}
		
		//---------------------------------------------------------------------
		// Animate a single column swipe (for up/down moves) using block.instance.
		//---------------------------------------------------------------------
		function animateColumnSwipe(colIndex, direction, onLineComplete) {
		    var isReversed = (direction === "down");
		    var column = [];
		    for (var i = 0; i < boardRows; i++) {
		        column.push(gameBoard[i][colIndex]);
		    }
		    var arr = column.slice();
		    if (isReversed) { arr.reverse(); }
		    
		    var result = computeSlide(arr);
		    score += result.scoreIncrement;
		    
		    result.mapping.forEach(function(map) {
		        var block = map.block;
		        var origRow = isReversed ? (boardRows - 1 - map.origIndex) : map.origIndex;
		        var finalRow = isReversed ? (boardRows - 1 - map.finalIndex) : map.finalIndex;
		        var newY = finalRow * cellSize + 50 + 2;
		        createjs.Tween.get(block.instance).to({ y: newY }, 200, createjs.Ease.quadIn).call(function() {
		            if (map.vanish) {
		                createjs.Tween.get(block.instance).to({ alpha: 0 }, 200).call(function() {
		                    stage.removeChild(block.instance);
		                });
		            } else {
		                block.row = finalRow;
		            }
		        });
		    });
		    var newColumn = isReversed ? result.newLine.slice().reverse() : result.newLine;
		    for (var i = 0; i < boardRows; i++) {
		        gameBoard[i][colIndex] = newColumn[i];
		    }
		    setTimeout(onLineComplete, 200);
		}
		
		//---------------------------------------------------------------------
		// Animate a vertical swipe (all columns at once).
		//---------------------------------------------------------------------
		function animateVerticalSwipe(direction, onComplete) {
		    var completed = 0;
		    for (var colIndex = 0; colIndex < boardCols; colIndex++) {
		        animateColumnSwipe(colIndex, direction, function() {
		            completed++;
		            if (completed === boardCols) {
		                onComplete();
		            }
		        });
		    }
		}
		
		//---------------------------------------------------------------------
		// Functions to trigger animated swipes for each direction.
		//---------------------------------------------------------------------
		function swipeLeftAnimated() {
		    if (animating) return;
		    animating = true;
		    animateHorizontalSwipe("left", function() {
		        addRandomBlockAnimated();
		        scoreText.text = "Score: " + score;
		        animating = false;
		    });
		}
		
		function swipeRightAnimated() {
		    if (animating) return;
		    animating = true;
		    animateHorizontalSwipe("right", function() {
		        addRandomBlockAnimated();
		        scoreText.text = "Score: " + score;
		        animating = false;
		    });
		}
		
		function swipeUpAnimated() {
		    if (animating) return;
		    animating = true;
		    animateVerticalSwipe("up", function() {
		        addRandomBlockAnimated();
		        scoreText.text = "Score: " + score;
		        animating = false;
		    });
		}
		
		function swipeDownAnimated() {
		    if (animating) return;
		    animating = true;
		    animateVerticalSwipe("down", function() {
		        addRandomBlockAnimated();
		        scoreText.text = "Score: " + score;
		        animating = false;
		    });
		}
		
		//---------------------------------------------------------------------
		// After a swipe move completes, add a new block (with a fade‑in animation)
		// in a random empty cell on the board. The allowed colors depend on the score.
		//---------------------------------------------------------------------
		function addRandomBlockAnimated() {
		    var allowedColors;
		    if (score <= 500) {
		        allowedColors = ["red", "yellow", "blue"];
		    } else if (score <= 5000) {
		        allowedColors = ["red", "yellow", "blue", "grey"];
		    } else if (score <= 10000) {
		        allowedColors = ["red", "yellow", "blue", "grey", "black"];
		    } else {
		        allowedColors = ["red", "yellow", "blue", "grey", "black"];
		    }
		    
		    var emptyCells = [];
		    for (var i = 0; i < boardRows; i++) {
		        for (var j = 0; j < boardCols; j++) {
		            if (gameBoard[i][j] == null) {
		                emptyCells.push({ i: i, j: j });
		            }
		        }
		    }
		    if (emptyCells.length > 0) {
		        var index = Math.floor(Math.random() * emptyCells.length);
		        var cell = emptyCells[index];
		        var newColor = allowedColors[Math.floor(Math.random() * allowedColors.length)];
		        
		        // Create a new block using a library symbol.
		        var instance = getBlockSymbol(newColor);
		        // Position the instance with a 2px margin.
		        var targetX = cell.j * cellSize + 2;
		        var targetY = cell.i * cellSize + 50 + 2;
		        instance.x = targetX;
		        instance.y = targetY;
		        instance.alpha = 0;
		        stage.addChild(instance);
		        
		        var newBlock = { color: newColor, instance: instance, row: cell.i, col: cell.j };
		        gameBoard[cell.i][cell.j] = newBlock;
		        
		        createjs.Tween.get(instance).to({ alpha: 1 }, 300);
		    }
		}
		
		//---------------------------------------------------------------------
		// Start the game.
		//---------------------------------------------------------------------
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BlockBlue
	this.BlockBlack = new lib.BlockBlack();
	this.BlockBlack.name = "BlockBlack";
	this.BlockBlack.setTransform(340.85,1466.95,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockGrey = new lib.BlockGrey();
	this.BlockGrey.name = "BlockGrey";
	this.BlockGrey.setTransform(340.85,1153,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockYellow = new lib.BlockYellow();
	this.BlockYellow.name = "BlockYellow";
	this.BlockYellow.setTransform(340.85,861.15,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockRed = new lib.BlockRed();
	this.BlockRed.name = "BlockRed";
	this.BlockRed.setTransform(340.85,578.75,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockBlue = new lib.BlockBlue();
	this.BlockBlue.name = "BlockBlue";
	this.BlockBlue.setTransform(340.85,283.75,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BlockBlue},{t:this.BlockRed},{t:this.BlockYellow},{t:this.BlockGrey},{t:this.BlockBlack}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1340.7,1283.9,-740,438.79999999999995);
// library properties:
lib.properties = {
	id: 'CCC7978293DA4B51966DE65DAFBFF694',
	width: 2000,
	height: 2000,
	fps: 30,
	color: "#FFFFFF",
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
an.compositions['CCC7978293DA4B51966DE65DAFBFF694'] = {
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