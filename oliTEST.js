/*******************************************************
 * VERSION 2
 * Single Script Approach: Animate + images
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  if (!window.AdobeAn) {
    console.error("Adobe Animate library not loaded.");
    return;
  }
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if (!comp) {
    console.error("Composition not found.");
    return;
  }

  const lib = comp.getLibrary();
  const canvas = document.getElementById("canvas");
  const exportRoot = new lib.oliTEST();
  const stage = new lib.Stage(canvas);

  stage.enableMouseOver();
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);

  stage.addChild(exportRoot);

  AdobeAn.makeResponsive(false, 'both', false, 1, [
    canvas,
    document.getElementById("animation_container"),
    document.getElementById("dom_overlay_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);

  // Load images with createjs
  const queue = new createjs.LoadQueue(true);
  queue.setCrossOrigin("anonymous");

  queue.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
      console.log("✅ Loaded:", evt.item.src);
    }
  });

  queue.addEventListener("complete", () => {
    const cerberus = new createjs.Bitmap(queue.getResult("cerberus"));
    cerberus.x = 50; cerberus.y = 50;
    stage.addChild(cerberus);

    const oliver = new createjs.Bitmap(queue.getResult("oliver"));
    oliver.x = 300; oliver.y = 100;
    stage.addChild(oliver);

    stage.update();
  });

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
});
