(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pi_atlas_1", frames: [[0,0,815,939],[817,0,248,744],[817,746,267,134]]}
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



(lib.Bitmap1 = function() {
	this.initialize(ss["pi_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Button = function() {
	this.initialize(ss["pi_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Slider = function() {
	this.initialize(ss["pi_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.pi = function(mode,startPosition,loop,reversed) {
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
		/* =============================================================================
		   FRAME 1 — LIVE DITHER (DITHERING LAST) + MASSIVE HUD (DRAG ANYWHERE)
		   + BREATHING FX + SAVE GIF / MP4(WebM fallback) + LIVE DISPLAY WIDTH SLIDER
		   + PALETTE EDITOR (click swatch → Replace / Add as New)
		   + NEW: Blur (px) + Bloom Strength sliders (applied BEFORE dithering)
		   + NEW: Upload Image (local/mobile) with Fit / Z-order / Opacity
		   • Robust stage detection (no early return if stage not ready)
		   - Paste into Frame 1 (Actions) of an HTML5 Canvas doc in Adobe Animate.
		   ============================================================================= */
		(function () {
		  // ---------------- Core params (sliders control these) ----------------
		  var ENABLE_DITHER = true;
		  var RETRO_SCALE = 0.22;        // 0.05..1
		  var DITHER_INTENSITY = 0.50;   // 0..1.5
		  var COLOR_COUNT = 32;          // 2..256
		
		  var HUE_DEG = 0;               // -180..180
		  var SAT_SCALE = 1.0;           // 0..3
		  var CONTRAST_PCT = 0;          // -100..100
		
		  // Image-space FX before dithering
		  var BLUR_RADIUS = 0;           // 0..12 px
		  var BLOOM_STRENGTH = 0.00;     // 0..1.5
		
		  // FX touched by breathing
		  var GRAIN_AMT=0, VIGNETTE_STRENGTH=0, LEAK_STRENGTH=0, LEAK_SIDE="left", LEAK_COLOR=[255,96,48];
		  var SOFTLIGHT_STRENGTH=0, ZOOMBLUR_STRENGTH=0, ZOOMBLUR_SAMPLES=12, MOIRE_STRENGTH=0, MOIRE_FREQ=6;
		
		  // LIVE display width for the stage canvas (CSS pixels; height keeps aspect)
		  var DISPLAY_WIDTH = 720;
		
		  // ---------------- Upload image state ----------------
		  var __uploadBmp = null;           // createjs.Bitmap
		  var __uploadImg = null;           // HTMLImageElement
		  var __uploadFit = "Contain";      // "Contain" | "Cover"
		  var __uploadZ = "Behind";         // "Behind" | "Front"
		  var __uploadOpacity = 1.0;        // 0..1
		  var __uploadLayer = null;         // created after stage exists
		
		  // ---------------- Stage resolver (robust) ----------------
		  var stage = null;
		  function tryGetStage() {
		    // Animate template usually places stage on window
		    if (window.stage) return window.stage;
		    if (window.exportRoot && window.exportRoot.stage) return window.exportRoot.stage;
		    // Last resort: search compositions (when multiple)
		    var AA = window.AdobeAn, comps = AA && AA.compositions;
		    if (comps) {
		      for (var id in comps) {
		        if (!comps.hasOwnProperty(id)) continue;
		        var comp = comps[id], lib = comp && comp.getLibrary && comp.getLibrary();
		        // not strictly needed; stage is global, but keep here for completeness
		      }
		    }
		    return null;
		  }
		
		  function waitForStage(cb){
		    var tries = 0, t = setInterval(function(){
		      stage = tryGetStage();
		      if (stage && stage.canvas) {
		        clearInterval(t);
		        cb();
		      } else if (++tries > 300) { // ~30s safety
		        clearInterval(t);
		        console.warn("[Dither HUD] Stage not found.");
		      }
		    }, 100);
		  }
		
		  // ---------------- Helpers ----------------
		  function clamp(v,a,b){return v<a?a:(v>b?b:v);}
		  function lerp(a,b,t){return a+(b-a)*t;}
		  function rgbToHex(r,g,b){return "#"+[r,g,b].map(x=>x.toString(16).padStart(2,"0")).join("");}
		  function hexToRgb(hex){var m=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return m?[parseInt(m[1],16),parseInt(m[2],16),parseInt(m[3],16)]:[0,0,0];}
		  function luma(r,g,b){return 0.2126*r + 0.7152*g + 0.0722*b;}
		
		  // Palette build + nearest
		  function buildPalette(n){
		    var lv=Math.max(2,(Math.cbrt(n)|0)), arr=[];
		    for(var r=0;r<lv;r++)for(var g=0;g<lv;g++)for(var b=0;b<lv;b++)
		      arr.push([Math.round(r/(lv-1)*255),Math.round(g/(lv-1)*255),Math.round(b/(lv-1)*255)]);
		    return arr.slice(0,clamp(n,2,256));
		  }
		  var PALETTE = buildPalette(COLOR_COUNT);
		  var CUSTOM_PALETTE = false;
		
		  function nearestPaletteRGB(r,g,b){
		    var best=0,bd=1/0;
		    for(var i=0;i<PALETTE.length;i++){
		      var p=PALETTE[i],dr=r-p[0],dg=g-p[1],db=b-p[2],d=dr*dr+dg*dg+db*db;
		      if(d<bd){bd=d;best=i;}
		    }
		    return PALETTE[best];
		  }
		
		  // HSL + contrast
		  function rgbToHsl(r,g,b){r/=255;g/=255;b/=255;var mx=Math.max(r,g,b),mn=Math.min(r,g,b),h=0,s=0,l=(mx+mn)/2,d=mx-mn;if(d){s=l>0.5?d/(2-mx-mn):d/(mx+mn);switch(mx){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;default:h=(r-g)/d+4;}h/=6;}return{h:h,s:s,l:l};}
		  function hslToRgb(h,s,l){function h2(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
		    var r,g,b;if(!s){r=g=b=l;}else{var q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;r=h2(p,q,h+1/3);g=h2(p,q,h);b=h2(p,q,h-1/3);}return [clamp(Math.round(r*255),0,255),clamp(Math.round(g*255),0,255),clamp(Math.round(b*255),0,255)];}
		  function adjustHueSat(r,g,b,deg,ss){var hsl=rgbToHsl(r,g,b);var h=(hsl.h+deg/360)%1;if(h<0)h+=1;var s=clamp(hsl.s*ss,0,1);var rgb=hslToRgb(h,s,hsl.l);return rgb;}
		  function adjustContrast(r,g,b,p){var f=(259*(p+255))/(255*(259-p));function c(x){return clamp(Math.round(f*(x-128)+128),0,255);}return [c(r),c(g),c(b)];}
		
		  // Simple separable box blur — OK on retro-sized buffers
		  function blurRGBA(src, w, h, radius){
		    radius |= 0; if(radius<=0) return src;
		    var out = new Uint8ClampedArray(src.length);
		    var tmp = new Uint8ClampedArray(src.length);
		    var win = radius*2+1;
		
		    // Horizontal
		    for (var y=0; y<h; y++){
		      for (var c=0; c<3; c++){
		        var sum=0;
		        for (var k=-radius; k<=radius; k++){
		          var x0=clamp(k,0,w-1);
		          sum += src[(y*w + x0)*4 + c];
		        }
		        for (var x=0; x<w; x++){
		          tmp[(y*w + x)*4 + c] = (sum / win) | 0;
		          var xAdd = clamp(x+radius+1, 0, w-1);
		          var xRem = clamp(x-radius,    0, w-1);
		          sum += src[(y*w + xAdd)*4 + c] - src[(y*w + xRem)*4 + c];
		        }
		      }
		      tmp[(y*w + (w-1))*4 + 3] = 255;
		    }
		
		    // Vertical
		    for (var x=0; x<w; x++){
		      for (var c=0; c<3; c++){
		        var sum=0;
		        for (var k=-radius; k<=radius; k++){
		          var y0=clamp(k,0,h-1);
		          sum += tmp[(y0*w + x)*4 + c];
		        }
		        for (var y=0; y<h; y++){
		          out[(y*w + x)*4 + c] = (sum / win) | 0;
		          var yAdd = clamp(y+radius+1, 0, h-1);
		          var yRem = clamp(y-radius,    0, h-1);
		          sum += tmp[(yAdd*w + x)*4 + c] - tmp[(yRem*w + x)*4 + c];
		        }
		      }
		    }
		    for (var i=3; i<out.length; i+=4) out[i]=255;
		    return out;
		  }
		
		  // Bloom: bright-pass -> blur -> add back
		  function applyBloomToData(data, w, h, strength, blurRadius){
		    if (strength<=0) return data;
		    var threshold = 200; // luma
		    var bright = new Uint8ClampedArray(data.length);
		    for (var i=0; i<data.length; i+=4){
		      var r=data[i], g=data[i+1], b=data[i+2];
		      var Y = luma(r,g,b);
		      if (Y>=threshold){
		        bright[i]=r; bright[i+1]=g; bright[i+2]=b; bright[i+3]=255;
		      } else {
		        bright[i]=bright[i+1]=bright[i+2]=0; bright[i+3]=255;
		      }
		    }
		    var blurred = blurRGBA(bright, w, h, Math.max(1, (blurRadius|0) + 6));
		    for (var j=0; j<data.length; j+=4){
		      data[j]   = clamp(data[j]   + blurred[j]   * strength, 0, 255);
		      data[j+1] = clamp(data[j+1] + blurred[j+1] * strength, 0, 255);
		      data[j+2] = clamp(data[j+2] + blurred[j+2] * strength, 0, 255);
		    }
		    return data;
		  }
		
		  // Bayer 8×8
		  var BAYER8=[[0,32,8,40,2,34,10,42],[48,16,56,24,50,18,58,26],[12,44,4,36,14,46,6,38],[60,28,52,20,62,30,54,22],[3,35,11,43,1,33,9,41],[51,19,59,27,49,17,57,25],[15,47,7,39,13,45,5,37],[63,31,55,23,61,29,53,21]];
		
		  // Work buffers
		  var off=document.createElement('canvas'), offCtx=off.getContext('2d');
		  var fx =document.createElement('canvas'),  fxCtx =fx.getContext('2d');
		
		  // ---------------- Breathing animations ----------------
		  var ACTIVE_BREATH="None";
		  var BREATH_LIST=["None","Slow Zoom","Hue Bloom","Sine Contrast","Pulse Saturation","Vignette Breath","Leak Sweep","Zoom Bloom","Grain Pulse","Moiré Drift","Warm-Cool Tide","Everything (gentle)"];
		  var breathFn=function(){};
		  function setBreath(name){
		    ACTIVE_BREATH=name; var W=Math.PI*2;
		    breathFn=(function(){
		      switch(name){
		        case "Slow Zoom":        return t=>{var a=.15,f=.08;RETRO_SCALE=clamp(RETRO_SCALE*(1-a*Math.sin(W*f*t)),.05,1);};
		        case "Hue Bloom":        return t=>{HUE_DEG=(HUE_DEG|0)+Math.sin(W*.12*t)*30;};
		        case "Sine Contrast":    return t=>{CONTRAST_PCT=(CONTRAST_PCT|0)+Math.sin(W*.25*t)*20;};
		        case "Pulse Saturation": return t=>{SAT_SCALE=clamp(SAT_SCALE+Math.sin(W*.18*t)*.5,0,3);};
		        case "Vignette Breath":  return t=>{VIGNETTE_STRENGTH=Math.sin(W*.10*t)*.35;};
		        case "Leak Sweep":       return t=>{var s=(Math.sin(W*.07*t)*.5+.5);LEAK_SIDE=s<.5?"left":"right";LEAK_STRENGTH=.4*s;};
		        case "Zoom Bloom":       return t=>{ZOOMBLUR_STRENGTH=Math.abs(Math.sin(W*.2*t))*.45;};
		        case "Grain Pulse":      return t=>{GRAIN_AMT=Math.abs(Math.sin(W*.35*t))*.45;};
		        case "Moiré Drift":      return t=>{MOIRE_STRENGTH=.45*Math.abs(Math.sin(W*.15*t));MOIRE_FREQ=5+3*Math.sin(W*.05*t);};
		        case "Warm-Cool Tide":   return t=>{HUE_DEG=Math.sin(W*.08*t)*12;SAT_SCALE=1.05+.15*Math.sin(W*.16*t+1);DITHER_INTENSITY=.5+.15*Math.sin(W*.11*t+2);};
		        case "Everything (gentle)":
		          return t=>{var s=Math.sin,w=W;HUE_DEG=s(w*.09*t)*16;SAT_SCALE=1.1+.2*s(w*.13*t+1);CONTRAST_PCT=8+10*s(w*.17*t+2);
		                     VIGNETTE_STRENGTH=.2*s(w*.07*t+1.4);LEAK_STRENGTH=.25*(s(w*.06*t)*.5+.5);
		                     ZOOMBLUR_STRENGTH=Math.abs(s(w*.21*t))*.35;GRAIN_AMT=Math.abs(s(w*.28*t))*.25;};
		        default: return function(){};
		      }
		    })();
		    if (window.__breathSelect) window.__breathSelect.value=name;
		  }
		
		  // ---------------- Core pass (DITHERING LAST) ----------------
		  function applyDither(){
		    if(!ENABLE_DITHER||!stage||!stage.canvas) return;
		    var canvas=stage.canvas;
		    var cw=canvas.width,ch=canvas.height; if(!(cw>0&&ch>0)) return;
		
		    var tSec=(createjs&&createjs.Ticker?createjs.Ticker.getTime(false)/1000:performance.now()/1000);
		    var base=snapshotBase(); breathFn(tSec);
		
		    // 1) Draw to retro-sized buffer
		    var rw=Math.max(1,(cw*RETRO_SCALE)|0), rh=Math.max(1,(ch*RETRO_SCALE)|0);
		    off.width=rw; off.height=rh; offCtx.imageSmoothingEnabled=false;
		    offCtx.clearRect(0,0,rw,rh); offCtx.drawImage(canvas,0,0,rw,rh);
		
		    // 2) PIXEL STAGE — all effects BEFORE dithering
		    var img=offCtx.getImageData(0,0,rw,rh), data=img.data;
		    var cx=rw/2, cy=rh/2, maxR=Math.sqrt(cx*cx+cy*cy);
		
		    for(var i=0;i<data.length;i+=4){
		      var idx=i>>2, x=idx%rw, y=(idx/rw)|0;
		      var r=data[i], g=data[i+1], b=data[i+2];
		
		      if(MOIRE_STRENGTH>0){
		        var mx=Math.sin((x/rw)*Math.PI*MOIRE_FREQ), my=Math.sin((y/rh)*Math.PI*MOIRE_FREQ);
		        var m=(mx*my*.5+.5),fac=lerp(1,.5+m*.5,MOIRE_STRENGTH); r*=fac; g*=fac; b*=fac;
		      }
		
		      var hs=adjustHueSat(r,g,b,HUE_DEG,SAT_SCALE); r=hs[0]; g=hs[1]; b=hs[2];
		      var ct=adjustContrast(r,g,b,CONTRAST_PCT);    r=ct[0]; g=ct[1]; b=ct[2];
		
		      if(GRAIN_AMT>0){var n=(Math.random()*2-1)*(GRAIN_AMT*32); r=clamp(r+n,0,255); g=clamp(g+n,0,255); b=clamp(b+n,0,255);}
		
		      if(VIGNETTE_STRENGTH!==0){
		        var dx=x-cx,dy=y-cy,d=Math.sqrt(dx*dx+dy*dy)/maxR;
		        var vf= VIGNETTE_STRENGTH>0 ? (1 - VIGNETTE_STRENGTH*d*d) : (1 + (-VIGNETTE_STRENGTH)*(1-d)*(1-d));
		        r*=vf; g*=vf; b*=vf;
		      }
		
		      if(LEAK_STRENGTH>0){
		        var t=(LEAK_SIDE==="left")?(1-x/rw):(x/rw);
		        var L=Math.pow(t,1.5)*LEAK_STRENGTH;
		        r=clamp(r+LEAK_COLOR[0]*0.4*L,0,255);
		        g=clamp(g+LEAK_COLOR[1]*0.4*L,0,255);
		        b=clamp(b+LEAK_COLOR[2]*0.4*L,0,255);
		      }
		
		      data[i]=r; data[i+1]=g; data[i+2]=b;
		    }
		    if (BLUR_RADIUS>0){
		      var blurred = blurRGBA(data, rw, rh, BLUR_RADIUS|0);
		      img.data.set(blurred);
		    }
		    if (BLOOM_STRENGTH>0){
		      applyBloomToData(img.data, rw, rh, clamp(BLOOM_STRENGTH,0,2), BLUR_RADIUS);
		    }
		    if(SOFTLIGHT_STRENGTH>0){
		      var s=img.data;
		      for(var j=0;j<s.length;j+=4){
		        function soft(c){var o=128,res=(c<128)?(2*o*c/255)+(c*c*(255-2*o))/(255*255):(255-2*(255-o)*(255-c)/255);return clamp(Math.round((1-SOFTLIGHT_STRENGTH)*c+SOFTLIGHT_STRENGTH*res),0,255);}
		        s[j]=soft(s[j]); s[j+1]=soft(s[j+1]); s[j+2]=soft(s[j+2]);
		      }
		    }
		    offCtx.putImageData(img,0,0);
		
		    if(ZOOMBLUR_STRENGTH>0){
		      var cx0=rw/2, cy0=rh/2, passes=Math.max(3,ZOOMBLUR_SAMPLES|0);
		      fx.width=rw; fx.height=rh; fxCtx.imageSmoothingEnabled=false; fxCtx.clearRect(0,0,rw,rh);
		      for(var sdx=0; sdx<passes; sdx++){
		        var t=sdx/(passes-1), sc=1+t*(0.4*ZOOMBLUR_STRENGTH), w=rw*sc, h=rh*sc;
		        fxCtx.globalAlpha=1/passes*(1+ZOOMBLUR_STRENGTH);
		        fxCtx.drawImage(off,0,0,rw,rh, cx0-w/2, cy0-h/2, w, h);
		      }
		      fxCtx.globalAlpha = 1 - clamp(ZOOMBLUR_STRENGTH,0,1);
		      fxCtx.drawImage(off,0,0); offCtx.clearRect(0,0,rw,rh); offCtx.drawImage(fx,0,0);
		    }
		
		    // 3) DITHERING (LAST)
		    var img2=offCtx.getImageData(0,0,rw,rh), d2=img2.data;
		    var bayerToOffset=(255/63)*DITHER_INTENSITY;
		    for (var q=0; q<d2.length; q+=4){
		      var idx=q>>2, x=idx%rw, y=(idx/rw)|0;
		      var r=d2[q], g=d2[q+1], b=d2[q+2];
		      var threshold=BAYER8[y&7][x&7], offst=(threshold-31.5)*bayerToOffset;
		      r=clamp(r+offst,0,255); g=clamp(g+offst,0,255); b=clamp(b+offst,0,255);
		      var nq=nearestPaletteRGB(r,g,b);
		      d2[q]=nq[0]; d2[q+1]=nq[1]; d2[q+2]=nq[2];
		    }
		    offCtx.putImageData(img2,0,0);
		
		    // 4) Upscale to stage
		    var mainCtx=canvas.getContext('2d');
		    mainCtx.imageSmoothingEnabled=false;
		    mainCtx.clearRect(0,0,cw,ch);
		    mainCtx.drawImage(off,0,0,cw,ch);
		
		    restoreBase(base);
		  }
		
		  function snapshotBase(){return {RETRO_SCALE,DITHER_INTENSITY,COLOR_COUNT,HUE_DEG,SAT_SCALE,CONTRAST_PCT,GRAIN_AMT,VIGNETTE_STRENGTH,LEAK_STRENGTH,LEAK_SIDE,SOFTLIGHT_STRENGTH,ZOOMBLUR_STRENGTH,ZOOMBLUR_SAMPLES,MOIRE_STRENGTH,MOIRE_FREQ,BLUR_RADIUS,BLOOM_STRENGTH};}
		  function restoreBase(b){RETRO_SCALE=b.RETRO_SCALE;DITHER_INTENSITY=b.DITHER_INTENSITY;COLOR_COUNT=b.COLOR_COUNT;HUE_DEG=b.HUE_DEG;SAT_SCALE=b.SAT_SCALE;CONTRAST_PCT=b.CONTRAST_PCT;GRAIN_AMT=b.GRAIN_AMT;VIGNETTE_STRENGTH=b.VIGNETTE_STRENGTH;LEAK_STRENGTH=b.LEAK_STRENGTH;LEAK_SIDE=b.LEAK_SIDE;SOFTLIGHT_STRENGTH=b.SOFTLIGHT_STRENGTH;ZOOMBLUR_STRENGTH=b.ZOOMBLUR_STRENGTH;ZOOMBLUR_SAMPLES=b.ZOOMBLUR_SAMPLES;MOIRE_STRENGTH=b.MOIRE_STRENGTH;MOIRE_FREQ=b.MOIRE_FREQ;BLUR_RADIUS=b.BLUR_RADIUS;BLOOM_STRENGTH=b.BLOOM_STRENGTH;}
		
		  // ---------------- LIVE display width scaler (CSS) ----------------
		  function applyDisplayWidth(px){
		    if (!stage || !stage.canvas) return;
		    px = clamp(px|0, 100, 2000);
		    var cw = stage.canvas.width, ch = stage.canvas.height;
		    var h  = Math.max(1, Math.round(px * ch / cw));
		    var c = stage.canvas;
		    c.style.width  = px + "px";
		    c.style.height = h  + "px";
		    c.style.imageRendering = "pixelated";
		    c.style.imageRendering = "-moz-crisp-edges";
		  }
		
		  // -------------------- HUD (fixed; draggable anywhere) --------------------
		  var panel, paletteGrid, colorEditorEl, colorEditorSwatchIdx=-1;
		  var ui={};
		
		  function createSliderRow(label,min,max,step,initial,fmt,onChange){
		    var row=document.createElement("div"); row.style.display="flex"; row.style.alignItems="center"; row.style.gap="40px"; row.style.margin="28px 0";
		    var labelEl=document.createElement("div"); labelEl.textContent=label; labelEl.style.minWidth="480px"; labelEl.style.fontWeight="900"; labelEl.style.fontSize="52px";
		    var slider=document.createElement("input"); slider.type="range"; slider.min=min; slider.max=max; slider.step=step; slider.value=initial; slider.style.width="900px"; slider.style.height="48px";
		    var valEl=document.createElement("div"); valEl.textContent=fmt(initial); valEl.style.minWidth="260px"; valEl.style.fontSize="52px"; valEl.style.textAlign="right";
		    slider.oninput=function(){var v=parseFloat(slider.value); valEl.textContent=fmt(v); onChange(v);};
		    row.appendChild(labelEl); row.appendChild(slider); row.appendChild(valEl);
		    return {row,set:function(v){slider.value=v;valEl.textContent=fmt(v);onChange(v);}};
		  }
		
		  function buildPaletteGrid(){
		    if (paletteGrid) paletteGrid.remove();
		    var wrap=document.createElement("div");
		    wrap.style.marginTop="28px";
		    var title=document.createElement("div");
		    title.textContent="Palette • click to Replace or Add as New";
		    title.style.fontWeight="900"; title.style.fontSize="40px"; title.style.marginBottom="12px";
		    var grid=document.createElement("div");
		    grid.style.display="grid";
		    grid.style.gridTemplateColumns="repeat(auto-fill, minmax(60px, 1fr))";
		    grid.style.gap="10px";
		    grid.style.maxHeight="280px";
		    grid.style.overflow="auto";
		    grid.style.padding="10px";
		    grid.style.background="rgba(255,255,255,0.05)";
		    grid.style.borderRadius="12px";
		
		    (PALETTE||[]).forEach(function(rgb, idx){ grid.appendChild(makeSwatch(rgb, idx)); });
		
		    // Add tile
		    var add=document.createElement("div");
		    add.style.width="60px"; add.style.height="60px"; add.style.borderRadius="10px";
		    add.style.display="flex"; add.style.alignItems="center"; add.style.justifyContent="center";
		    add.style.background="rgba(255,255,255,0.08)";
		    add.style.boxShadow="inset 0 0 0 2px rgba(255,255,255,.25)";
		    add.style.cursor="pointer"; add.style.fontSize="46px"; add.style.fontWeight="900";
		    add.textContent="+"; add.title="Add new color";
		    add.onclick=function(e){
		      e.stopPropagation();
		      openColorEditor(null, function(){}, function onAdd(hex){
		        var c=hexToRgb(hex);
		        if (PALETTE.length >= 256) { alert("Palette is at max (256)."); return; }
		        PALETTE.push([c[0],c[1],c[2]]);
		        CUSTOM_PALETTE = true;
		        COLOR_COUNT = PALETTE.length;
		        if (ui.colors) ui.colors.set(COLOR_COUNT);
		        buildPaletteGrid();
		      });
		    };
		    grid.appendChild(add);
		
		    wrap.appendChild(title);
		    wrap.appendChild(grid);
		    paletteGrid = wrap;
		    panel.appendChild(wrap);
		  }
		
		  function makeSwatch(rgb, idx){
		    var sw=document.createElement("div");
		    sw.style.width="60px"; sw.style.height="60px"; sw.style.borderRadius="10px";
		    sw.style.boxShadow="inset 0 0 0 2px rgba(255,255,255,.25)";
		    sw.style.background=rgbToHex(rgb[0],rgb[1],rgb[2]);
		    sw.style.cursor="pointer"; sw.title="Index "+idx+" (click to edit)";
		    sw.onclick=function(e){
		      e.stopPropagation();
		      colorEditorSwatchIdx = idx;
		      openColorEditor(rgbToHex(rgb[0],rgb[1],rgb[2]),
		        function onReplace(hex){
		          var c=hexToRgb(hex);
		          PALETTE[idx]=[c[0],c[1],c[2]];
		          CUSTOM_PALETTE = true;
		          sw.style.background=hex;
		        },
		        function onAdd(hex){
		          var c=hexToRgb(hex);
		          if (PALETTE.length >= 256) { alert("Palette is at max (256)."); return; }
		          PALETTE.push([c[0],c[1],c[2]]);
		          CUSTOM_PALETTE = true;
		          COLOR_COUNT = PALETTE.length;
		          if (ui.colors) ui.colors.set(COLOR_COUNT);
		          buildPaletteGrid();
		        }
		      );
		    };
		    return sw;
		  }
		
		  // ---------- Color Editor Popup ----------
		  function openColorEditor(initialHex, onReplace, onAdd){
		    closeColorEditor();
		
		    var overlay=document.createElement("div");
		    overlay.style.position="fixed"; overlay.style.left="0"; overlay.style.top="0";
		    overlay.style.width="100vw"; overlay.style.height="100vh";
		    overlay.style.background="rgba(0,0,0,0.6)";
		    overlay.style.zIndex="2147483647";
		    overlay.onclick=function(){ closeColorEditor(); };
		
		    var box=document.createElement("div");
		    box.style.position="absolute"; box.style.left="50%"; box.style.top="50%";
		    box.style.transform="translate(-50%,-50%)";
		    box.style.width="820px";
		    box.style.background="#111";
		    box.style.color="#fff";
		    box.style.borderRadius="20px";
		    box.style.boxShadow="0 20px 100px rgba(0,0,0,.7)";
		    box.style.padding="28px";
		    box.style.font="28px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";
		    box.onclick=function(e){ e.stopPropagation(); };
		
		    var title=document.createElement("div");
		    title.textContent="🎨 Color Editor";
		    title.style.fontSize="36px"; title.style.fontWeight="900"; title.style.marginBottom="18px";
		    box.appendChild(title);
		
		    var row=document.createElement("div");
		    row.style.display="flex"; row.style.alignItems="center"; row.style.gap="20px"; row.style.marginBottom="18px";
		
		    var input=document.createElement("input");
		    input.type="color";
		    input.value = initialHex || "#ffffff";
		    input.style.width="160px"; input.style.height="120px"; input.style.border="none"; input.style.background="none";
		    input.style.cursor="pointer";
		    row.appendChild(input);
		
		    var hexWrap=document.createElement("div");
		    var hexLabel=document.createElement("div"); hexLabel.textContent="HEX"; hexLabel.style.opacity=".8";
		    var hexField=document.createElement("input"); hexField.type="text"; hexField.value=input.value;
		    hexField.style.fontSize="32px"; hexField.style.padding="6px 10px"; hexField.style.width="220px";
		    hexField.oninput=function(){ var v=hexField.value.trim(); if(/^#?[0-9a-fA-F]{6}$/.test(v)){ if(v[0]!=="#") v="#"+v; input.value=v; prev.style.background=v; } };
		    hexWrap.appendChild(hexLabel); hexWrap.appendChild(hexField); row.appendChild(hexWrap);
		
		    var prev=document.createElement("div");
		    prev.style.width="160px"; prev.style.height="120px"; prev.style.borderRadius="12px"; prev.style.boxShadow="inset 0 0 0 2px rgba(255,255,255,.2)";
		    prev.style.background=input.value;
		    row.appendChild(prev);
		
		    input.oninput=function(){ hexField.value=input.value; prev.style.background=input.value; };
		
		    box.appendChild(row);
		
		    var buttons=document.createElement("div");
		    buttons.style.display="flex"; buttons.style.gap="16px"; buttons.style.marginTop="10px";
		
		    var btnReplace=bigBtn("Replace", "#1f6feb");
		    var btnAdd    =bigBtn("Add as New", "#0e8a16");
		    var btnCancel =bigBtn("Cancel", "#9b1b1b");
		
		    btnReplace.onclick=function(){ onReplace(input.value); closeColorEditor(); };
		    btnAdd.onclick=function(){ onAdd(input.value); closeColorEditor(); };
		    btnCancel.onclick=function(){ closeColorEditor(); };
		
		    buttons.appendChild(btnReplace); buttons.appendChild(btnAdd); buttons.appendChild(btnCancel);
		    box.appendChild(buttons);
		
		    overlay.appendChild(box);
		    document.body.appendChild(overlay);
		    colorEditorEl = overlay;
		
		    document.addEventListener("keydown", function onEsc(e){ if(e.key==="Escape"){ closeColorEditor(); } }, {once:true});
		  }
		  function closeColorEditor(){
		    if (colorEditorEl){ colorEditorEl.remove(); colorEditorEl=null; colorEditorSwatchIdx=-1; }
		  }
		  function bigBtn(label,bg){ var b=document.createElement("button"); b.textContent=label;
		    b.style.font="900 32px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";
		    b.style.padding="10px 18px"; b.style.borderRadius="12px"; b.style.border="none"; b.style.background=bg; b.style.color="#fff"; b.style.cursor="pointer";
		    return b;
		  }
		
		  // -------------------- HUD build --------------------
		  var panel, ui={};
		  function buildPanel(){
		    if (window.__ditherPanelExists) return;
		
		    // If stage exists, default live display width to current; else keep 720
		    try{
		      var cw = stage && stage.canvas ? (stage.canvas.clientWidth || stage.canvas.width) : 720;
		      DISPLAY_WIDTH = clamp(cw, 100, 2000);
		    }catch(_){ DISPLAY_WIDTH = 720; }
		    if (stage) applyDisplayWidth(DISPLAY_WIDTH);
		
		    panel=document.createElement("div");
		    panel.style.position="fixed"; panel.style.left="50%"; panel.style.bottom="24px"; panel.style.transform="translateX(-50%)";
		    panel.style.width="1600px"; panel.style.background="rgba(0,0,0,0.95)"; panel.style.color="#fff";
		    panel.style.font="50px/1.5 -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";
		    panel.style.padding="44px"; panel.style.borderRadius="28px"; panel.style.boxShadow="0 24px 100px rgba(0,0,0,0.85)";
		    panel.style.zIndex="2147483647"; panel.style.userSelect="none"; panel.style.pointerEvents="auto";
		
		    // Header
		    var header=document.createElement("div"); header.style.display="flex"; header.style.alignItems="center"; header.style.justifyContent="space-between"; header.style.marginBottom="36px";
		    var title=document.createElement("div"); title.textContent="🎛 BREATHING • DITHER • EXPORT • PALETTE • UPLOAD"; title.style.fontWeight="1000"; title.style.fontSize="56px"; title.style.cursor="move";
		
		    var controls=document.createElement("div"); controls.style.display="flex"; controls.style.alignItems="center"; controls.style.gap="24px";
		
		    // Breathing dropdown
		    var bLabel=document.createElement("div"); bLabel.textContent="Breathing:"; bLabel.style.fontSize="40px"; bLabel.style.fontWeight="800";
		    var bSel=document.createElement("select"); bSel.style.fontSize="44px"; bSel.style.padding="8px 16px";
		    BREATH_LIST.forEach(n=>{var o=document.createElement("option");o.value=n;o.textContent=n;bSel.appendChild(o);});
		    bSel.value=ACTIVE_BREATH; bSel.onchange=function(){ setBreath(bSel.value); };
		    window.__breathSelect=bSel;
		
		    // Export controls
		    var durLabel=document.createElement("div"); durLabel.textContent="Dur (s)"; durLabel.style.fontSize="40px";
		    var durInput=document.createElement("input"); durInput.type="number"; durInput.value="5"; durInput.min="1"; durInput.max="60"; durInput.step="1"; durInput.style.fontSize="44px"; durInput.style.width="140px";
		    var fpsLabel=document.createElement("div"); fpsLabel.textContent="FPS"; fpsLabel.style.fontSize="40px";
		    var fpsInput=document.createElement("input"); fpsInput.type="number"; fpsInput.value="24"; fpsInput.min="4"; fpsInput.max="60"; fpsInput.step="1"; fpsInput.style.fontSize="44px"; fpsInput.style.width="120px";
		
		    var saveGifBtn=document.createElement("button"); styleBtn(saveGifBtn,"Save GIF","#1f6feb");
		    var saveVidBtn=document.createElement("button"); styleBtn(saveVidBtn,"Save MP4/WebM","#0e8a16");
		
		    var prog=document.createElement("div"); prog.textContent=""; prog.style.fontSize="40px"; prog.style.minWidth="260px";
		
		    [bSel,durInput,fpsInput,saveGifBtn,saveVidBtn].forEach(el=>{
		      ["mousedown","touchstart","pointerdown","click"].forEach(evt=>el.addEventListener(evt,e=>e.stopPropagation(),{passive:false}));
		    });
		    saveGifBtn.onclick=()=>startGifSave(parseFloat(durInput.value)||5, parseInt(fpsInput.value,10)||24, DISPLAY_WIDTH|0, saveGifBtn, prog);
		    saveVidBtn.onclick=()=>startVideoSave(parseFloat(durInput.value)||5, parseInt(fpsInput.value,10)||24, DISPLAY_WIDTH|0, saveVidBtn, prog);
		
		    controls.appendChild(bLabel); controls.appendChild(bSel);
		    controls.appendChild(durLabel); controls.appendChild(durInput);
		    controls.appendChild(fpsLabel); controls.appendChild(fpsInput);
		    controls.appendChild(saveGifBtn); controls.appendChild(saveVidBtn);
		    controls.appendChild(prog);
		
		    header.appendChild(title); header.appendChild(controls);
		
		    // Body sliders
		    var body=document.createElement("div");
		    function SR(lbl,min,max,step,val,fmt,setter){var r=createSliderRow(lbl,min,max,step,val,fmt,setter); body.appendChild(r.row); return r;}
		    ui.displayW = SR("Display Width (px)", 100, 2000, 10, DISPLAY_WIDTH, v=>(v|0)+" px", v=>{DISPLAY_WIDTH=clamp(v|0,100,2000); if(stage) applyDisplayWidth(DISPLAY_WIDTH);});
		    ui.scale    = SR("Retro Scale",      0.05,1.00,0.01,RETRO_SCALE,      v=>v.toFixed(2),   v=>RETRO_SCALE=clamp(v,0.05,1));
		    ui.dither   = SR("Dither Intensity", 0.00,1.50,0.01,DITHER_INTENSITY, v=>v.toFixed(2),   v=>DITHER_INTENSITY=clamp(v,0,1.5));
		    ui.colors   = SR("Number of Colors", 2,256,1, COLOR_COUNT, v=>(v|0)+" cols", function(newVal){
		      var target = clamp((newVal|0), 2, 256);
		      COLOR_COUNT = target;
		      if (CUSTOM_PALETTE) {
		        if (PALETTE.length < target) { while (PALETTE.length < target) PALETTE.push([128,128,128]); }
		        else if (PALETTE.length > target) { PALETTE.length = target; }
		      } else {
		        PALETTE = buildPalette(target);
		      }
		      buildPaletteGrid();
		    });
		    ui.hue      = SR("Hue (degrees)",   -180,180,1,    HUE_DEG,           v=>(v|0)+"°",      v=>HUE_DEG=(v|0));
		    ui.sat      = SR("Saturation (×)",  0.00,3.00,0.01,SAT_SCALE,         v=>v.toFixed(2)+"×", v=>SAT_SCALE=clamp(v,0,3));
		    ui.contrast = SR("Contrast (%)",    -100,100,1,    CONTRAST_PCT,      v=>(v|0)+"%",      v=>CONTRAST_PCT=clamp((v|0),-100,100));
		    ui.blur     = SR("Blur (px)",        0, 12, 1,     BLUR_RADIUS,       v=>(v|0)+" px",    v=>BLUR_RADIUS = clamp(v|0,0,32));
		    ui.bloom    = SR("Bloom Strength",   0.00, 1.50, .01, BLOOM_STRENGTH, v=>v.toFixed(2),   v=>BLOOM_STRENGTH = clamp(v,0,3));
		
		    // ---------- Upload controls ----------
		    var upWrap = document.createElement("div");
		    upWrap.style.margin = "12px 0 0";
		    upWrap.style.padding = "18px";
		    upWrap.style.borderRadius = "16px";
		    upWrap.style.background = "rgba(255,255,255,0.06)";
		    upWrap.style.display = "grid";
		    upWrap.style.gridTemplateColumns = "auto auto auto 1fr";
		    upWrap.style.gap = "18px";
		
		    var fileInput = document.createElement("input");
		    fileInput.type = "file"; fileInput.accept = "image/*"; fileInput.capture = "environment"; fileInput.style.display = "none";
		    var btnUpload = document.createElement("button"); styleBtn(btnUpload, "Upload Image", "#7c3aed");
		    btnUpload.onclick=function(e){ e.stopPropagation(); fileInput.click(); };
		
		    var fitLabel=document.createElement("div"); fitLabel.textContent="Fit:"; fitLabel.style.fontSize="40px"; fitLabel.style.alignSelf="center";
		    var fitSel=document.createElement("select"); fitSel.style.fontSize="44px"; fitSel.style.padding="8px 16px";
		    ["Contain","Cover"].forEach(f=>{var o=document.createElement("option"); o.value=f; o.textContent=f; fitSel.appendChild(o);});
		    fitSel.value=__uploadFit; fitSel.onchange=function(){ __uploadFit=fitSel.value; layoutUploadBitmap(); };
		
		    var zLabel=document.createElement("div"); zLabel.textContent="Z:"; zLabel.style.fontSize="40px"; zLabel.style.alignSelf="center";
		    var zSel=document.createElement("select"); zSel.style.fontSize="44px"; zSel.style.padding="8px 16px";
		    ["Behind","Front"].forEach(z=>{var o=document.createElement("option"); o.value=z; o.textContent=z; zSel.appendChild(o);});
		    zSel.value=__uploadZ; zSel.onchange=function(){ __uploadZ=zSel.value; syncUploadZOrder(); };
		
		    var opRow = document.createElement("div"); opRow.style.display="flex"; opRow.style.alignItems="center"; opRow.style.gap="12px";
		    var opLabel = document.createElement("div"); opLabel.textContent="Opacity"; opLabel.style.fontSize="40px"; opLabel.style.minWidth="200px"; opLabel.style.fontWeight="800";
		    var opSlider = document.createElement("input"); opSlider.type="range"; opSlider.min="0"; opSlider.max="1"; opSlider.step="0.01"; opSlider.value=__uploadOpacity;
		    opSlider.style.width="600px"; opSlider.style.height="48px";
		    var opVal = document.createElement("div"); opVal.textContent=(__uploadOpacity*100|0)+"%"; opVal.style.fontSize="40px"; opVal.style.minWidth="120px"; opVal.style.textAlign="right";
		    opSlider.oninput=function(){ __uploadOpacity=parseFloat(opSlider.value)||0; opVal.textContent=(__uploadOpacity*100|0)+"%"; applyUploadOpacity(); };
		    opRow.appendChild(opLabel); opRow.appendChild(opSlider); opRow.appendChild(opVal);
		
		    var btnClear = document.createElement("button"); styleBtn(btnClear, "Remove Image", "#b91c1c");
		    btnClear.onclick=function(e){ e.stopPropagation(); clearUploadBitmap(); };
		
		    upWrap.appendChild(btnUpload);
		    upWrap.appendChild(fitLabel); upWrap.appendChild(fitSel);
		    upWrap.appendChild(zLabel);   upWrap.appendChild(zSel);
		    var spacer=document.createElement("div"); spacer.style.gridColumn="1 / -1"; spacer.style.height="6px"; upWrap.appendChild(spacer);
		    var opWrap=document.createElement("div"); opWrap.style.gridColumn="1 / span 3"; opWrap.appendChild(opRow); upWrap.appendChild(opWrap);
		    var clearWrap=document.createElement("div"); clearWrap.style.display="flex"; clearWrap.style.justifyContent="flex-end"; clearWrap.appendChild(btnClear);
		    upWrap.appendChild(clearWrap);
		
		    fileInput.onchange=function(){
		      var f=fileInput.files && fileInput.files[0]; if(!f) return;
		      var url = URL.createObjectURL(f);
		      var img = new Image();
		      img.onload=function(){
		        URL.revokeObjectURL(url);
		        __uploadImg = img;
		        setUploadBitmapFromImage(img);
		      };
		      img.onerror=function(){ alert("Failed to load image."); URL.revokeObjectURL(url); };
		      img.src = url;
		    };
		
		    body.appendChild(upWrap);
		    document.body.appendChild(fileInput);
		    // ---------- /Upload controls ----------
		
		    panel.appendChild(header);
		    panel.appendChild(body);
		
		    // Palette grid at bottom
		    buildPaletteGrid();
		
		    document.body.appendChild(panel);
		    makeDraggableFixed(panel, title);
		
		    window.__ditherPanelExists = true;
		    setBreath(ACTIVE_BREATH);
		  }
		
		  function styleBtn(btn,label,bg){
		    btn.textContent=label;
		    btn.style.font="900 44px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif";
		    btn.style.padding="8px 20px"; btn.style.borderRadius="16px"; btn.style.border="none"; btn.style.background=bg; btn.style.color="#fff"; btn.style.cursor="pointer";
		  }
		  function createSliderRow(label,min,max,step,initial,fmt,onChange){
		    var row=document.createElement("div"); row.style.display="flex"; row.style.alignItems="center"; row.style.gap="40px"; row.style.margin="28px 0";
		    var labelEl=document.createElement("div"); labelEl.textContent=label; labelEl.style.minWidth="480px"; labelEl.style.fontWeight="900"; labelEl.style.fontSize="52px";
		    var slider=document.createElement("input"); slider.type="range"; slider.min=min; slider.max=max; slider.step=step; slider.value=initial; slider.style.width="900px"; slider.style.height="48px";
		    var valEl=document.createElement("div"); valEl.textContent=fmt(initial); valEl.style.minWidth="260px"; valEl.style.fontSize="52px"; valEl.style.textAlign="right";
		    slider.oninput=function(){var v=parseFloat(slider.value); valEl.textContent=fmt(v); onChange(v);};
		    row.appendChild(labelEl); row.appendChild(slider); row.appendChild(valEl);
		    return {row,set:function(v){slider.value=v;valEl.textContent=fmt(v);onChange(v);}};
		  }
		  function makeDraggableFixed(el, handle){
		    var startX,startY,startL,startT,drag=false;
		    function down(e){ e.preventDefault(); drag=true;
		      var pt=getPt(e); startX=pt.x; startY=pt.y; var r=el.getBoundingClientRect(); startL=r.left; startT=r.top;
		      document.addEventListener("mousemove",move); document.addEventListener("mouseup",up);
		      document.addEventListener("touchmove",move,{passive:false}); document.addEventListener("touchend",up);
		    }
		    function move(e){ if(!drag)return; e.preventDefault();
		      var pt=getPt(e), dx=pt.x-startX, dy=pt.y-startY;
		      var L=clamp(startL+dx,0,Math.max(0,window.innerWidth -el.offsetWidth ));
		      var T=clamp(startT+dy,0,Math.max(0,window.innerHeight-el.offsetHeight));
		      el.style.left=L+"px"; el.style.top=T+"px"; el.style.transform=""; }
		    function up(){ drag=false;
		      document.removeEventListener("mousemove",move); document.removeEventListener("mouseup",up);
		      document.removeEventListener("touchmove",move); document.removeEventListener("touchend",up); }
		    function getPt(e){return e.touches&&e.touches[0]?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY};}
		    handle.addEventListener("mousedown",down); handle.addEventListener("touchstart",down,{passive:false});
		  }
		  function getPt(e){return e.touches&&e.touches[0]?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY};}
		
		  // -------------------- GIF Export (robust) --------------------
		  function ensureGifJs(cb){
		    if (window.GIF) return cb(makeWorkerURL());
		    var s=document.createElement("script");
		    s.src="https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js";
		    s.onload=function(){ cb(makeWorkerURL()); };
		    s.onerror=function(){ alert("Could not load gif.js"); };
		    document.head.appendChild(s);
		  }
		  function makeWorkerURL(){ var code="importScripts('https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js');"; var blob=new Blob([code],{type:"application/javascript"}); return URL.createObjectURL(blob); }
		  function stageTainted(){ try{ var ctx=stage.canvas.getContext('2d'); ctx.getImageData(0,0,1,1); return false; }catch(e){ return true; } }
		
		  function startGifSave(durationSec,fps,widthPx,btn,prog){
		    if (!stage||!stage.canvas){ alert("Stage not ready."); return; }
		    if (stageTainted()){ alert("Canvas is tainted by cross-origin content. Enable CORS or host assets same-origin."); return; }
		    durationSec=clamp(durationSec|0,1,60); fps=clamp(fps|0,4,60);
		    widthPx=clamp(widthPx|0,100,2000);
		
		    var cw=stage.canvas.width, ch=stage.canvas.height;
		    var ew=widthPx, eh=Math.max(1, Math.round(ew * ch / cw));
		
		    var exp=document.createElement("canvas"), expCtx=exp.getContext("2d");
		    exp.width=ew; exp.height=eh; expCtx.imageSmoothingEnabled=false;
		
		    ensureGifJs(function(workerURL){
		      var gif=new GIF({workers:3,quality:20,workerScript:workerURL,width:ew,height:eh,repeat:0});
		      var total=Math.max(1,(durationSec*fps)|0), delay=Math.round(1000/fps), captured=0, next=performance.now(), interval=1000/fps;
		      btn.disabled=true; prog.textContent="Recording 0/"+total;
		
		      function step(){
		        var now=performance.now();
		        if(now>=next){
		          expCtx.clearRect(0,0,ew,eh); expCtx.drawImage(stage.canvas,0,0,ew,eh);
		          gif.addFrame(exp,{copy:true,delay:delay}); captured++; prog.textContent="Recording "+captured+"/"+total; next+=interval;
		        }
		        if(captured<total){ requestAnimationFrame(step); }
		        else{
		          prog.textContent="Encoding… 0%";
		          gif.on('progress',p=>prog.textContent="Encoding… "+Math.round(p*100)+"%");
		          gif.on('finished',blob=>{
		            downloadBlob(blob,"animate_breath.gif");
		            btn.disabled=false; prog.textContent="";
		          });
		          gif.render();
		        }
		      }
		      requestAnimationFrame(step);
		    });
		  }
		
		  // -------------------- Video Export (MP4/WebM) --------------------
		  function bestVideoMime(){
		    var cands=['video/mp4;codecs="h264"','video/mp4','video/webm;codecs="vp9"','video/webm;codecs="vp8"','video/webm'];
		    for (var i=0;i<cands.length;i++){ if (window.MediaRecorder && MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(cands[i])) return cands[i]; }
		    return 'video/webm';
		  }
		  function startVideoSave(durationSec,fps,widthPx,btn,prog){
		    if (!stage||!stage.canvas){ alert("Stage not ready."); return; }
		    if (!window.MediaRecorder){ alert("MediaRecorder not supported in this browser."); return; }
		    durationSec=clamp(durationSec|0,1,120); fps=clamp(fps|0,4,60);
		    widthPx=clamp(widthPx|0,100,2000);
		
		    var mime=bestVideoMime();
		    var ext = mime.indexOf("mp4")>=0 ? "mp4" : "webm";
		
		    var cw=stage.canvas.width, ch=stage.canvas.height;
		    var ew=widthPx, eh=Math.max(1, Math.round(ew * ch / cw));
		
		    var exp=document.createElement("canvas"), expCtx=exp.getContext("2d");
		    exp.width=ew; exp.height=eh; expCtx.imageSmoothingEnabled=false;
		
		    var stream=exp.captureStream(fps);
		    var rec=new MediaRecorder(stream,{mimeType:mime});
		    var chunks=[];
		    rec.ondataavailable=e=>{ if(e.data&&e.data.size>0) chunks.push(e.data); };
		    rec.onstop=function(){
		      var blob=new Blob(chunks,{type:mime});
		      downloadBlob(blob,"animate_breath."+ext);
		      btn.disabled=false; prog.textContent="";
		      stream.getTracks().forEach(t=>t.stop());
		    };
		
		    btn.disabled=true; prog.textContent="Recording…";
		    rec.start();
		
		    var total = Math.max(1,(durationSec*fps)|0), captured=0, next=performance.now(), interval=1000/fps;
		
		    function step(){
		      var now=performance.now();
		      if(now>=next){
		        expCtx.clearRect(0,0,ew,eh);
		        expCtx.drawImage(stage.canvas,0,0,ew,eh);
		        captured++; prog.textContent="Recording "+captured+"/"+total+" ("+ext+")";
		        next+=interval;
		      }
		      if(captured<total){ requestAnimationFrame(step); }
		      else { rec.stop(); }
		    }
		    requestAnimationFrame(step);
		  }
		
		  function downloadBlob(blob, filename){
		    var a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=filename;
		    document.body.appendChild(a); a.click(); document.body.removeChild(a);
		    setTimeout(()=>URL.revokeObjectURL(a.href),4000);
		  }
		
		  // ---------- Upload image helpers ----------
		  function setUploadBitmapFromImage(imgEl){
		    if (!stage) return;
		    if (!__uploadLayer){ __uploadLayer = new createjs.Container(); stage.addChildAt(__uploadLayer, 0); }
		    if (__uploadBmp && __uploadBmp.parent) __uploadBmp.parent.removeChild(__uploadBmp);
		    __uploadBmp = new createjs.Bitmap(imgEl);
		    __uploadBmp.mouseEnabled = false;
		    __uploadBmp.alpha = __uploadOpacity;
		    __uploadLayer.removeAllChildren();
		    __uploadLayer.addChild(__uploadBmp);
		    syncUploadZOrder();
		    layoutUploadBitmap();
		    stage.update();
		  }
		
		  function layoutUploadBitmap(){
		    if (!__uploadBmp || !stage || !stage.canvas) return;
		    var cw = stage.canvas.width, ch = stage.canvas.height;
		    var iw = __uploadImg ? __uploadImg.naturalWidth : (__uploadBmp.image ? __uploadBmp.image.width : 0);
		    var ih = __uploadImg ? __uploadImg.naturalHeight: (__uploadBmp.image ? __uploadBmp.image.height: 0);
		    if(!(iw>0 && ih>0)) return;
		    var scale = (__uploadFit === "Contain") ? Math.min(cw/iw, ch/ih) : Math.max(cw/iw, ch/ih);
		    __uploadBmp.scaleX = __uploadBmp.scaleY = scale;
		    __uploadBmp.x = (cw - iw*scale)/2;
		    __uploadBmp.y = (ch - ih*scale)/2;
		  }
		  function applyUploadOpacity(){ if (__uploadBmp) __uploadBmp.alpha = clamp(__uploadOpacity, 0, 1); }
		  function syncUploadZOrder(){
		    if (!stage) return;
		    if (!__uploadLayer){ __uploadLayer = new createjs.Container(); stage.addChildAt(__uploadLayer, 0); }
		    var desiredIndex = (__uploadZ === "Behind") ? 0 : stage.numChildren;
		    var cur = stage.getChildIndex(__uploadLayer);
		    if ((__uploadZ === "Behind" && cur !== 0) ||
		        (__uploadZ === "Front" && cur !== stage.numChildren-1)){
		      stage.removeChild(__uploadLayer);
		      stage.addChildAt(__uploadLayer, clamp(desiredIndex, 0, stage.numChildren));
		    }
		  }
		  function clearUploadBitmap(){
		    if (!stage) return;
		    __uploadImg = null;
		    if (__uploadBmp && __uploadBmp.parent) __uploadBmp.parent.removeChild(__uploadBmp);
		    __uploadBmp = null;
		    if (__uploadLayer) __uploadLayer.removeAllChildren();
		    stage.update();
		  }
		
		  // -------------------- Boot --------------------
		  function safe(){ if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", buildPanel); else buildPanel(); }
		  safe();
		
		  // Wait for stage, then hook update and finalize canvas-dependent bits
		  waitForStage(function(){
		    // ensure upload layer exists
		    if (!__uploadLayer){ __uploadLayer = new createjs.Container(); stage.addChildAt(__uploadLayer, 0); }
		    // Hook stage.update once
		    if (!stage.__ditherWrapped){
		      stage.__ditherWrapped = true;
		      var _u = stage.update;
		      stage.update = function(){
		        try { syncUploadZOrder(); } catch(e){}
		        _u.apply(stage, arguments);
		        try { applyDither(); } catch(e){}
		      };
		    }
		    // Now we can apply the live display width size to the real canvas
		    applyDisplayWidth(DISPLAY_WIDTH);
		    // Re-layout upload image on resizes
		    window.addEventListener("resize", layoutUploadBitmap);
		  });
		
		})();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'F7754D7CE4FA4E888494C81FAC5FD581',
	width: 3000,
	height: 3000,
	fps: 30,
	color: "#006699",
	opacity: 1.00,
	manifest: [
		{src:"images/pi_atlas_1.png?1758160360756", id:"pi_atlas_1"}
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
an.compositions['F7754D7CE4FA4E888494C81FAC5FD581'] = {
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