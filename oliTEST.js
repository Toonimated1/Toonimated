/*******************************************************
 * VERSION 3
 * Two Canvas Setup: Animate in one, custom images in another
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  // 1) Animate Composition Setup
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if (!comp) return console.error("Composition not found.");
  const lib = comp.getLibrary();
  const exportRoot = new lib.oliTEST();
  const stageAnimate = new lib.Stage(document.getElementById("canvasAnimate"));

  stageAnimate.addChild(exportRoot);
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stageAnimate);

  AdobeAn.makeResponsive(false, 'both', false, 1, [
    document.getElementById("canvasAnimate"),
    document.getElementById("animate_container"),
    document.getElementById("dom_overlay_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);

  // 2) Our own CreateJS stage for images
  const canvas2 = document.getElementById("canvasImages");
  const stageImages = new createjs.Stage(canvas2);

  // 3) Load images
  const loader = new createjs.LoadQueue();
  loader.setCrossOrigin("anonymous");

  loader.addEventListener("complete", () => {
    console.log("✅ All images loaded");

    const bmp1 = new createjs.Bitmap(loader.getResult("cerberus"));
    bmp1.x = 50;  bmp1.y = 50;
    stageImages.addChild(bmp1);

    const bmp2 = new createjs.Bitmap(loader.getResult("oliver"));
    bmp2.x = 300; bmp2.y = 100;
    stageImages.addChild(bmp2);

    stageImages.update();
  });

  loader.loadManifest([
    {
      id: "cerberus",
      src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png"
    },
    {
      id: "oliver",
      src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png"
    }
  ]);
});
