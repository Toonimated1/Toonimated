/*******************************************************
 * VERSION 4
 * Inline Everything
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  // Animate composition
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if (!comp) return console.error("Composition not found.");

  const lib = comp.getLibrary();
  const exportRoot = new lib.oliTEST();
  const stage = new lib.Stage(document.getElementById("canvas"));
  
  stage.addChild(exportRoot);
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.on("tick", stage);

  AdobeAn.makeResponsive(false, 'both', false, 1, [
    document.getElementById("canvas"),
    document.getElementById("animation_container"),
    document.getElementById("dom_overlay_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);

  // Load images
  const queue = new createjs.LoadQueue();
  queue.setCrossOrigin("anonymous");
  queue.on("complete", handleComplete, this);
  queue.loadManifest([
    {
      id: "cerberus",
      src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png"
    },
    {
      id: "oliver",
      src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png"
    }
  ]);

  function handleComplete() {
    const bmp1 = new createjs.Bitmap(queue.getResult("cerberus"));
    bmp1.x = 50;  bmp1.y = 50;
    stage.addChild(bmp1);

    const bmp2 = new createjs.Bitmap(queue.getResult("oliver"));
    bmp2.x = 300; bmp2.y = 100;
    stage.addChild(bmp2);

    stage.update();
  }
});
