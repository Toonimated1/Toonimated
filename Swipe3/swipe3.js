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

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(149.95,137.4,1,1,0,0,0,0,4.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(25, 0, -100, -143))];
	this.instance.cache(-142,-129,283,258);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(149.95,150);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-2, 0, -100, -172))];
	this.instance_1.cache(-152,-152,304,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockGrey, new cjs.Rectangle(0,0,303,304), null);


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

	// Layer_2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(149.95,137.4,1,1,0,0,0,0,4.7);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-100, 0, -100, -143))];
	this.instance.cache(-142,-129,283,258);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(149.95,150);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-83, 0, -100, -172))];
	this.instance_1.cache(-152,-152,304,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BlockBlack, new cjs.Rectangle(0,0,303,304), null);


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
		/* Global game configuration and variables */
		var playableRows = 4, playableCols = 4;
		var gridMargin = 1; // Border margin (cells) around the playable area
		var boardRows = playableRows + 2; // e.g., 4+2 = 6
		var boardCols = playableCols + 2; // e.g., 4+2 = 6
		var cellSize = 300;   // Each cell is 300x300 pixels (logical size)
		var scoreOffset = 100; // Vertical offset (space for the score)
		
		var stage, scoreText;
		var gameBoard = [];   // 2D array for the logical board state
		var score = 0;        // Current score
		var animating = false; // Disable input during animations
		
		// Variables for swipe detection
		var touchStartX, touchStartY, touchEndX, touchEndY;
		
		// Global reference to the chessboard container (for reanimating the board)
		var chessboardContainer = null;
		
		// Global container for mobile controls (if any)
		var mobileControlsContainer = null;
		
		/* Helper functions to check board state in the playable area */
		
		// Returns true if every playable cell (indices gridMargin to gridMargin+playableRows-1) is filled.
		function boardIsFull() {
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            if (gameBoard[i][j] == null) return false;
		        }
		    }
		    return true;
		}
		
		// Returns true if any horizontal or vertical contiguous group of ≥ 3 blocks exists.
		function possibleMatchExists() {
		    // Check rows in playable area.
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        var count = 1;
		        for (var j = gridMargin + 1; j < gridMargin + playableCols; j++) {
		            if (gameBoard[i][j] && gameBoard[i][j-1] && gameBoard[i][j].color === gameBoard[i][j-1].color) {
		                count++;
		                if (count >= 3) return true;
		            } else {
		                count = 1;
		            }
		        }
		    }
		    // Check columns in playable area.
		    for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		        var count = 1;
		        for (var i = gridMargin + 1; i < gridMargin + playableRows; i++) {
		            if (gameBoard[i][j] && gameBoard[i-1][j] && gameBoard[i][j].color === gameBoard[i-1][j].color) {
		                count++;
		                if (count >= 3) return true;
		            } else {
		                count = 1;
		            }
		        }
		    }
		    return false;
		}
		
		/* Function to get a new block symbol from the library based on the color. */
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
		
		/* resizeCanvas: Adjust the canvas resolution for high DPI displays and scale board. */
		function resizeCanvas() {
		    var canvas = document.getElementById("canvas");
		    var dpr = window.devicePixelRatio || 1;
		    var logicalWidth = boardCols * cellSize;
		    var logicalHeight = boardRows * cellSize + scoreOffset;
		    var scaleFactor = Math.min(window.innerWidth / logicalWidth, window.innerHeight / logicalHeight);
		    
		    canvas.width = logicalWidth * dpr * scaleFactor;
		    canvas.height = logicalHeight * dpr * scaleFactor;
		    canvas.style.width = (logicalWidth * scaleFactor) + "px";
		    canvas.style.height = (logicalHeight * scaleFactor) + "px";
		    
		    if (stage) {
		        stage.scaleX = stage.scaleY = dpr * scaleFactor;
		        stage.update();
		    }
		}
		
		/* animateBoardLightUp: Animates a staggered "light up" (white flash) effect on each playable square.
		   Once all squares have completed their animation, the provided callback is invoked.
		*/
		function animateBoardLightUp(callback) {
		    var total = playableRows * playableCols;
		    var completed = 0;
		    // Loop over the playable grid.
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            var x = j * cellSize;
		            var y = i * cellSize + scoreOffset;
		            // Create a new overlay for the effect.
		            var overlay = new createjs.Shape();
		            overlay.graphics.beginFill("white").drawRect(0, 0, cellSize, cellSize);
		            overlay.x = x;
		            overlay.y = y;
		            overlay.alpha = 0;
		            // Add the overlay on top of the chessboard.
		            chessboardContainer.addChild(overlay);
		            // Stagger based on row and column.
		            var delay = ((i - gridMargin) * playableCols + (j - gridMargin)) * 50;
		            createjs.Tween.get(overlay)
		                .wait(delay)
		                .to({alpha: 1}, 150, createjs.Ease.quadOut)
		                .to({alpha: 0}, 150, createjs.Ease.quadOut)
		                .call(function() {
		                    chessboardContainer.removeChild(this);
		                    completed++;
		                    if (completed === total) {
		                        callback();
		                    }
		                }.bind(overlay));
		        }
		    }
		}
		
		/* init: Sets up stage, board, background, score text, events, etc.
		   Also, after drawing the board, plays the staggered light–up animation, then adds the first block.
		   If on mobile, additional hover controls for swiping are added.
		*/
		function init() {
		    stage = new createjs.Stage("canvas");
		    
		    resizeCanvas();
		    window.addEventListener("resize", resizeCanvas);
		    
		    // Create the logical board (6x6 grid)
		    for (var i = 0; i < boardRows; i++) {
		        gameBoard[i] = [];
		        for (var j = 0; j < boardCols; j++) {
		            gameBoard[i][j] = null;
		        }
		    }
		    
		    // Create score text.
		    scoreText = new createjs.Text("SCORE: 0", "bold 96px Arial", "#000000");
		    scoreText.textAlign = "center";
		    scoreText.x = (boardCols * cellSize) / 2;
		    scoreText.y = 20;
		    stage.addChild(scoreText);
		    
		    drawBoardBackground();
		    drawChessboard();
		    
		    stage.on("stagemousedown", handleMouseDown);
		    stage.on("stagemouseup", handleMouseUp);
		    
		    // Add mobile hover controls if on a small screen.
		    if (window.innerWidth < 768) {
		        addMobileControls();
		    }
		    
		    // When the game boots up, play the board light–up animation,
		    // then add the first block once the animation is finished.
		    animateBoardLightUp(function() {
		        addRandomBlockAnimated();
		    });
		    
		    createjs.Ticker.framerate = 30;
		    createjs.Ticker.addEventListener("tick", function(evt) {
		        stage.update();
		    });
		}
		
		/* addMobileControls: Adds arrow buttons on mobile devices for swipe controls. */
		function addMobileControls() {
		    mobileControlsContainer = new createjs.Container();
		    
		    // Define positions for the four arrows.
		    var centerX = (boardCols * cellSize) / 2;
		    var centerY = scoreOffset + (playableRows * cellSize) / 2;
		    var offset = cellSize * playableCols / 2 - 50;
		    
		    // Create arrow text objects.
		    var leftArrow = new createjs.Text("←", "bold 96px Arial", "rgba(0,0,0,0.5)");
		    leftArrow.x = centerX - offset;
		    leftArrow.y = centerY - 48;
		    leftArrow.cursor = "pointer";
		    leftArrow.addEventListener("click", function() { swipeLeftAnimated(); });
		    
		    var rightArrow = new createjs.Text("→", "bold 96px Arial", "rgba(0,0,0,0.5)");
		    rightArrow.x = centerX + offset - 50;
		    rightArrow.y = centerY - 48;
		    rightArrow.cursor = "pointer";
		    rightArrow.addEventListener("click", function() { swipeRightAnimated(); });
		    
		    var upArrow = new createjs.Text("↑", "bold 96px Arial", "rgba(0,0,0,0.5)");
		    upArrow.x = centerX - 48;
		    upArrow.y = centerY - offset;
		    upArrow.cursor = "pointer";
		    upArrow.addEventListener("click", function() { swipeUpAnimated(); });
		    
		    var downArrow = new createjs.Text("↓", "bold 96px Arial", "rgba(0,0,0,0.5)");
		    downArrow.x = centerX - 48;
		    downArrow.y = centerY + offset - 50;
		    downArrow.cursor = "pointer";
		    downArrow.addEventListener("click", function() { swipeDownAnimated(); });
		    
		    mobileControlsContainer.addChild(leftArrow, rightArrow, upArrow, downArrow);
		    stage.addChild(mobileControlsContainer);
		}
		
		/* drawBoardBackground: Draws a beveled background behind the playable area. */
		function drawBoardBackground() {
		    var bg = new createjs.Shape();
		    var x = gridMargin * cellSize;
		    var y = gridMargin * cellSize + scoreOffset;
		    var width = playableCols * cellSize;
		    var height = playableRows * cellSize;
		    var cornerRadius = 30;
		    bg.graphics.beginFill("#f5f5f5").drawRoundRect(0, 0, width, height, cornerRadius);
		    bg.x = x;
		    bg.y = y;
		    stage.addChildAt(bg, 0);
		}
		
		/* drawChessboard: Draws the chessboard pattern for the playable area and applies a mask.
		   Also “lights up” each square from top-left to bottom-right with a staggered white flash.
		*/
		function drawChessboard() {
		    var boardContainer = new createjs.Container();
		    // Save to global variable for later light–up animations.
		    chessboardContainer = boardContainer;
		    
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            var square = new createjs.Shape();
		            var isEven = ((i + j) % 2 === 0);
		            var fillColor = isEven ? "#e0e0e0" : "#f5f5f5";
		            square.graphics.beginFill(fillColor).drawRect(0, 0, cellSize, cellSize);
		            square.x = j * cellSize;
		            square.y = i * cellSize + scoreOffset;
		            boardContainer.addChild(square);
		            
		            // Create an overlay for the initial "light up" effect.
		            var overlay = new createjs.Shape();
		            overlay.graphics.beginFill("white").drawRect(0, 0, cellSize, cellSize);
		            overlay.x = square.x;
		            overlay.y = square.y;
		            overlay.alpha = 0;
		            boardContainer.addChild(overlay);
		            
		            // Staggered delay based on row and column (top-left to bottom-right).
		            var delay = ((i - gridMargin) * playableCols + (j - gridMargin)) * 50;
		            createjs.Tween.get(overlay)
		                .wait(delay)
		                .to({alpha: 1}, 150, createjs.Ease.quadOut)
		                .to({alpha: 0}, 150, createjs.Ease.quadOut);
		        }
		    }
		    var maskShape = new createjs.Shape();
		    var maskX = gridMargin * cellSize;
		    var maskY = gridMargin * cellSize + scoreOffset;
		    var maskWidth = playableCols * cellSize;
		    var maskHeight = playableRows * cellSize;
		    var cornerRadius = 30;
		    maskShape.graphics.beginFill("black").drawRoundRect(0, 0, maskWidth, maskHeight, cornerRadius);
		    maskShape.x = maskX;
		    maskShape.y = maskY;
		    boardContainer.mask = maskShape;
		    
		    stage.addChildAt(boardContainer, 1);
		}
		
		/* Swipe detection event handlers. */
		function handleMouseDown(evt) {
		    touchStartX = evt.stageX;
		    touchStartY = evt.stageY;
		}
		
		function handleMouseUp(evt) {
		    if (animating) return;
		    
		    // If the board is full and no moves remain, wait a moment so the final piece is visible,
		    // then trigger game over sequence (which includes a board light–up effect before a new piece appears).
		    if (boardIsFull() && !possibleMatchExists()) {
		        setTimeout(handleGameOver, 300);
		        return;
		    }
		    
		    touchEndX = evt.stageX;
		    touchEndY = evt.stageY;
		    
		    var dx = touchEndX - touchStartX;
		    var dy = touchEndY - touchStartY;
		    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
		    
		    if (Math.abs(dx) > Math.abs(dy)) {
		        if (dx > 0) swipeRightAnimated();
		        else swipeLeftAnimated();
		    } else {
		        if (dy > 0) swipeDownAnimated();
		        else swipeUpAnimated();
		    }
		}
		
		/* computeSlide: Processes a line (array) of blocks and returns mapping info. */
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
		    var changed = false;
		    var i = 0;
		    while (i < filtered.length) {
		        var j = i + 1;
		        while (j < filtered.length && filtered[j].block.color === filtered[i].block.color) {
		            j++;
		        }
		        var groupLength = j - i;
		        if (groupLength >= 3) {
		            changed = true;
		            var reward = 0;
		            if (score <= 500) reward = (groupLength === 3 ? 100 : 500);
		            else if (score <= 5000) reward = 1000;
		            else if (score <= 10000) reward = 5000;
		            else reward = 5000;
		            scoreInc += reward;
		            for (var k = i; k < j; k++) {
		                mapping.push({ origIndex: filtered[k].origIndex, finalIndex: pointer, vanish: true, block: filtered[k].block });
		            }
		        } else {
		            for (var k = i; k < j; k++) {
		                if (filtered[k].origIndex !== pointer) changed = true;
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
		    return { mapping: mapping, newLine: newLine, scoreIncrement: scoreInc, changed: changed };
		}
		
		/* animateRowSwipe: Animate a single row swipe (left/right) on the playable area. */
		function animateRowSwipe(rowIndex, direction, onLineComplete) {
		    var row = gameBoard[rowIndex];
		    var playableRow = row.slice(gridMargin, gridMargin + playableCols);
		    var isReversed = (direction === "right");
		    var arr = playableRow.slice();
		    if (isReversed) arr.reverse();
		    
		    var result = computeSlide(arr);
		    score += result.scoreIncrement;
		    if (!result.changed) {
		        onLineComplete(false);
		        return;
		    }
		    result.mapping.forEach(function(map) {
		        var block = map.block;
		        var origCol = isReversed ? ((playableCols - 1 - map.origIndex) + gridMargin) : (map.origIndex + gridMargin);
		        var finalCol = isReversed ? ((playableCols - 1 - map.finalIndex) + gridMargin) : (map.finalIndex + gridMargin);
		        var newX = finalCol * cellSize + cellSize / 2;
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
		    var newPlayableRow = isReversed ? result.newLine.slice().reverse() : result.newLine;
		    for (var j = 0; j < playableCols; j++) {
		        row[j + gridMargin] = newPlayableRow[j];
		    }
		    onLineComplete(true);
		}
		
		/* animateColumnSwipe: Animate a single column swipe (up/down) on the playable area. */
		function animateColumnSwipe(colIndex, direction, onLineComplete) {
		    var column = [];
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        column.push(gameBoard[i][colIndex]);
		    }
		    var isReversed = (direction === "down");
		    var arr = column.slice();
		    if (isReversed) arr.reverse();
		    
		    var result = computeSlide(arr);
		    score += result.scoreIncrement;
		    if (!result.changed) {
		        onLineComplete(false);
		        return;
		    }
		    result.mapping.forEach(function(map) {
		        var block = map.block;
		        var origRow = isReversed ? ((playableRows - 1 - map.origIndex) + gridMargin) : (map.origIndex + gridMargin);
		        var finalRow = isReversed ? ((playableRows - 1 - map.finalIndex) + gridMargin) : (map.finalIndex + gridMargin);
		        var newY = finalRow * cellSize + scoreOffset + cellSize / 2;
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
		    for (var i = 0; i < playableRows; i++) {
		        gameBoard[i + gridMargin][colIndex] = newColumn[i];
		    }
		    onLineComplete(true);
		}
		
		/* animateHorizontalSwipe: Animate a horizontal swipe with a 10ms stagger per row. */
		function animateHorizontalSwipe(direction, onComplete) {
		    var completed = 0;
		    var moveOccurred = false;
		    var playableRowIndices = [];
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        playableRowIndices.push(i);
		    }
		    playableRowIndices.forEach(function(rowIndex, idx) {
		         setTimeout(function(){
		             animateRowSwipe(rowIndex, direction, function(rowMoved) {
		                  if (rowMoved) moveOccurred = true;
		                  completed++;
		                  if (completed === playableRowIndices.length) {
		                      if (!moveOccurred) {
		                          // Only one shake here.
		                          animateJelloEffect(direction, function() {
		                              onComplete(false);
		                          });
		                      } else {
		                          onComplete(true);
		                      }
		                  }
		             });
		         }, idx * 10);
		    });
		}
		
		/* animateVerticalSwipe: Animate a vertical swipe with a 10ms stagger per column. */
		function animateVerticalSwipe(direction, onComplete) {
		    var completed = 0;
		    var moveOccurred = false;
		    var playableColIndices = [];
		    for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		        playableColIndices.push(j);
		    }
		    playableColIndices.forEach(function(colIndex, idx) {
		         setTimeout(function(){
		             animateColumnSwipe(colIndex, direction, function(colMoved) {
		                  if (colMoved) moveOccurred = true;
		                  completed++;
		                  if (completed === playableColIndices.length) {
		                      if (!moveOccurred) {
		                          // Only one shake here.
		                          animateJelloEffect(direction, function() {
		                              onComplete(false);
		                          });
		                      } else {
		                          onComplete(true);
		                      }
		                  }
		             });
		         }, idx * 10);
		    });
		}
		
		/* animateJelloEffect: Applies a staggered "jello" effect on every block in the playable area. */
		function animateJelloEffect(direction, callback) {
		    var property = (direction === "left" || direction === "right") ? "x" : "y";
		    var baseOffset = (direction === "left" || direction === "up") ? -5 : 5;
		    
		    var blocks = [];
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            if (gameBoard[i][j] != null) {
		                blocks.push({ block: gameBoard[i][j], i: i, j: j });
		            }
		        }
		    }
		    var animationsCompleted = 0;
		    var totalBlocks = blocks.length;
		    if (totalBlocks === 0) { callback(); return; }
		    
		    blocks.forEach(function(item) {
		        var block = item.block;
		        var instance = block.instance;
		        var delay = ((item.i - gridMargin) * playableCols + (item.j - gridMargin)) * 20;
		        var origVal = instance[property];
		        // Several shake iterations with increased randomness.
		        createjs.Tween.get(instance)
		            .wait(delay)
		            .to({ [property]: origVal + baseOffset * 0.75 }, 100, createjs.Ease.quadOut)
		            .to({ [property]: origVal - baseOffset * 0.75 }, 100, createjs.Ease.quadOut)
		            .to({ [property]: origVal + baseOffset * 1.0 }, 100, createjs.Ease.quadOut)
		            .to({ [property]: origVal - baseOffset * 1.0 }, 100, createjs.Ease.quadOut)
		            .to({ [property]: origVal + baseOffset * 1.25 }, 100, createjs.Ease.quadOut)
		            .to({ [property]: origVal }, 100, createjs.Ease.elasticOut)
		            .call(function() {
		                animationsCompleted++;
		                if (animationsCompleted === totalBlocks) {
		                    callback();
		                }
		            });
		    });
		}
		
		/* animateScore: Animates the score from oldScore to newScore over 1 second. */
		function animateScore(oldScore, newScore) {
		    var obj = { value: oldScore };
		    createjs.Tween.get(obj)
		      .to({ value: newScore }, 1000, createjs.Ease.quadOut)
		      .addEventListener("change", function() {
		          scoreText.text = "SCORE: " + Math.floor(obj.value);
		      });
		}
		
		/* showBonusText: Displays bonus points text centered just below the score. */
		function showBonusText(points) {
		    var bonusText = new createjs.Text("(+" + points + ")", "bold 48px Arial", "#808080");
		    bonusText.alpha = 0;
		    bonusText.textAlign = "center";
		    bonusText.x = (boardCols * cellSize) / 2;
		    bonusText.y = scoreText.y + scoreText.getMeasuredHeight() + 10;
		    stage.addChild(bonusText);
		    
		    createjs.Tween.get(bonusText)
		      .to({ alpha: 1, y: bonusText.y - 20 }, 500, createjs.Ease.quadOut)
		      .wait(1000)
		      .to({ alpha: 0 }, 100)
		      .call(function() {
		          stage.removeChild(bonusText);
		      });
		}
		
		/* isGameOver: Returns true if the playable area is full and no contiguous group of ≥3 exists. */
		function isGameOver() {
		    if (!boardIsFull()) return false;
		    if (possibleMatchExists()) return false;
		    return true;
		}
		
		/* handleGameOver: Animates all blocks with several rapid shakes before scaling down and fading out.
		   Then, after a 2-second delay, the board lights up with a staggered effect.
		   Once the light-up effect is finished, the final new block appears.
		*/
		function handleGameOver() {
		    animating = true;
		    var blocks = [];
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            if (gameBoard[i][j] != null) {
		                blocks.push(gameBoard[i][j]);
		            }
		        }
		    }
		    
		    blocks.forEach(function(block) {
		        var instance = block.instance;
		        var originalX = instance.x;
		        var originalY = instance.y;
		        // Detach from any container/mask.
		        stage.addChild(instance);
		        var offset = 10; // Maximum shake offset
		        createjs.Tween.get(instance)
		          // Four rapid shakes in alternating directions.
		          .to({ x: originalX + (Math.random() * offset - offset/2), y: originalY + (Math.random() * offset - offset/2) }, 40, createjs.Ease.quadOut)
		          .to({ x: originalX + (Math.random() * offset - offset/2), y: originalY + (Math.random() * offset - offset/2) }, 40, createjs.Ease.quadOut)
		          .to({ x: originalX + (Math.random() * offset - offset/2), y: originalY + (Math.random() * offset - offset/2) }, 40, createjs.Ease.quadOut)
		          .to({ x: originalX + (Math.random() * offset - offset/2), y: originalY + (Math.random() * offset - offset/2) }, 40, createjs.Ease.quadOut)
		          .to({ x: originalX, y: originalY }, 40, createjs.Ease.elasticOut)
		          // Then scale down while fading out.
		          .to({ scaleX: 0, scaleY: 0, alpha: 0 }, 150, createjs.Ease.quadOut)
		          .call(function() {
		              stage.removeChild(instance);
		          });
		    });
		    
		    // Clear the logical playable board.
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            gameBoard[i][j] = null;
		        }
		    }
		    
		    var oldScore = score;
		    score = 0;
		    animateScore(oldScore, 0);
		    
		    // After 2 seconds, trigger the board light-up effect.
		    setTimeout(function() {
		        animateBoardLightUp(function() {
		            // Once light-up is complete, add the new block.
		            addRandomBlockAnimated();
		            animating = false;
		        });
		    }, 2000);
		}
		
		/* addRandomBlockAnimated: Adds a new block into a random empty playable cell.
		   If no empty cell exists, do nothing (letting the player swipe to trigger game over).
		*/
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
		    for (var i = gridMargin; i < gridMargin + playableRows; i++) {
		        for (var j = gridMargin; j < gridMargin + playableCols; j++) {
		            if (gameBoard[i][j] == null) {
		                emptyCells.push({ i: i, j: j });
		            }
		        }
		    }
		    
		    // When the board is full, do not add a new block.
		    if (emptyCells.length === 0) {
		         return;
		    }
		    
		    var index = Math.floor(Math.random() * emptyCells.length);
		    var cell = emptyCells[index];
		    var newColor = allowedColors[Math.floor(Math.random() * allowedColors.length)];
		    
		    var instance = getBlockSymbol(newColor);
		    instance.regX = cellSize / 2;
		    instance.regY = cellSize / 2;
		    var targetX = cell.j * cellSize + cellSize / 2;
		    var targetY = cell.i * cellSize + scoreOffset + cellSize / 2;
		    instance.x = targetX;
		    instance.y = targetY;
		    instance.scaleX = 0.75;
		    instance.scaleY = 0.75;
		    instance.alpha = 0;
		    stage.addChild(instance);
		    
		    var newBlock = { color: newColor, instance: instance, row: cell.i, col: cell.j };
		    gameBoard[cell.i][cell.j] = newBlock;
		    
		    createjs.Tween.get(instance).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 200, createjs.Ease.quadOut);
		}
		
		/* Swipe functions: trigger swipe, add a block (if moved), animate score/bonus,
		   and if no blocks move (jiggle) then check for game over.
		*/
		function swipeLeftAnimated() {
		    if (animating) return;
		    animating = true;
		    var oldScore = score;
		    animateHorizontalSwipe("left", function(moved) {
		        if (moved) {
		            setTimeout(function() {
		                addRandomBlockAnimated();
		                animateScore(oldScore, score);
		                if (score - oldScore > 0) showBonusText(score - oldScore);
		                if (boardIsFull() && !possibleMatchExists()) {
		                    handleGameOver();
		                } else {
		                    animating = false;
		                }
		            }, 300);
		        } else {
		            if (boardIsFull() && !possibleMatchExists()) {
		                handleGameOver();
		            } else {
		                animating = false;
		            }
		        }
		    });
		}
		
		function swipeRightAnimated() {
		    if (animating) return;
		    animating = true;
		    var oldScore = score;
		    animateHorizontalSwipe("right", function(moved) {
		        if (moved) {
		            setTimeout(function() {
		                addRandomBlockAnimated();
		                animateScore(oldScore, score);
		                if (score - oldScore > 0) showBonusText(score - oldScore);
		                if (boardIsFull() && !possibleMatchExists()) {
		                    handleGameOver();
		                } else {
		                    animating = false;
		                }
		            }, 300);
		        } else {
		            if (boardIsFull() && !possibleMatchExists()) {
		                handleGameOver();
		            } else {
		                animating = false;
		            }
		        }
		    });
		}
		
		function swipeUpAnimated() {
		    if (animating) return;
		    animating = true;
		    var oldScore = score;
		    animateVerticalSwipe("up", function(moved) {
		        if (moved) {
		            setTimeout(function() {
		                addRandomBlockAnimated();
		                animateScore(oldScore, score);
		                if (score - oldScore > 0) showBonusText(score - oldScore);
		                if (boardIsFull() && !possibleMatchExists()) {
		                    handleGameOver();
		                } else {
		                    animating = false;
		                }
		            }, 300);
		        } else {
		            if (boardIsFull() && !possibleMatchExists()) {
		                handleGameOver();
		            } else {
		                animating = false;
		            }
		        }
		    });
		}
		
		function swipeDownAnimated() {
		    if (animating) return;
		    animating = true;
		    var oldScore = score;
		    animateVerticalSwipe("down", function(moved) {
		        if (moved) {
		            setTimeout(function() {
		                addRandomBlockAnimated();
		                animateScore(oldScore, score);
		                if (score - oldScore > 0) showBonusText(score - oldScore);
		                if (boardIsFull() && !possibleMatchExists()) {
		                    handleGameOver();
		                } else {
		                    animating = false;
		                }
		            }, 300);
		        } else {
		            if (boardIsFull() && !possibleMatchExists()) {
		                handleGameOver();
		            } else {
		                animating = false;
		            }
		        }
		    });
		}
		
		/* Start the game. */
		init();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BlockBlue
	this.BlockBlack = new lib.BlockBlack();
	this.BlockBlack.name = "BlockBlack";
	this.BlockBlack.setTransform(-354.75,1183.1,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockGrey = new lib.BlockGrey();
	this.BlockGrey.name = "BlockGrey";
	this.BlockGrey.setTransform(-354.75,869.15,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockYellow = new lib.BlockYellow();
	this.BlockYellow.name = "BlockYellow";
	this.BlockYellow.setTransform(-354.75,577.3,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockRed = new lib.BlockRed();
	this.BlockRed.name = "BlockRed";
	this.BlockRed.setTransform(-354.75,294.9,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.BlockBlue = new lib.BlockBlue();
	this.BlockBlue.name = "BlockBlue";
	this.BlockBlue.setTransform(-354.75,-0.1,0.8521,0.8521,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.BlockBlue},{t:this.BlockRed},{t:this.BlockYellow},{t:this.BlockGrey},{t:this.BlockBlack}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(645.2,1000,-741,442.20000000000005);
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