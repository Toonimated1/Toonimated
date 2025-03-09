// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Check that AdobeAn is available
  if (!window.AdobeAn || !AdobeAn.getComposition) {
    console.error("Adobe Animate library not loaded or missing AdobeAn namespace.");
    return;
  }

  // Grab the composition
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if (!comp) {
    console.error("Composition not found.");
    return;
  }

  // Setup the Animate library and stage
  const lib = comp.getLibrary();
  const exportRoot = new lib.oliTEST();
  const canvas = document.getElementById("canvas");
  const stage = new lib.Stage(canvas);

  // Make it responsive
  AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, 
    document.getElementById("animation_container"), 
    document.getElementById("dom_overlay_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);

  stage.addChild(exportRoot);

  // CreateJS ticker for Animate
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);

  // ---------------------------------------------
  // Now do our image loading with a single queue
  // so we can add them to the SAME stage
  // ---------------------------------------------
  const loader = new createjs.LoadQueue(true);
  loader.setCrossOrigin("anonymous");

  loader.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
      console.log("✅ Loaded:", evt.item.src);
    }
  });

  loader.addEventListener("error", (evt) => {
    console.error("❌ Failed to load:", evt.data.src);
  });

  loader.addEventListener("complete", () => {
    console.log("✅ All assets finished loading.");

    // Add bitmaps to the Animate stage
    const bmp1 = new createjs.Bitmap(loader.getResult("cerberus"));
    bmp1.x = 50; bmp1.y = 50;
    stage.addChild(bmp1);

    const bmp2 = new createjs.Bitmap(loader.getResult("oliver"));
    bmp2.x = 300; bmp2.y = 100;
    stage.addChild(bmp2);

    // Force an update if needed
    stage.update();
  });

  loader.loadManifest([
    { id: "cerberus", src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png" },
    { id: "oliver",   src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png" }
  ]);
});
