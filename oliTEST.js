/*******************************************************
 * VERSION 6
 * Animate Preload Hook
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if (!comp) {
    console.error("No composition found!");
    return;
  }
  const lib = comp.getLibrary();

  // If Animate had a preloader, we can push extra items to its manifest
  if (lib.properties.manifest) {
    lib.properties.manifest.push(
      {
        src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png",
        id: "cerberus"
      },
      {
        src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png",
        id: "oliver"
      }
    );
  }

  const loader = new createjs.LoadQueue(false);
  loader.setCrossOrigin("anonymous");
  loader.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
      comp.getImages()[evt.item.id] = evt.result;
    }
  });
  
  loader.addEventListener("complete", () => {
    // Standard Animate init
    const exportRoot = new lib.oliTEST();
    const stage = new lib.Stage(document.getElementById("canvas"));
    stage.addChild(exportRoot);

    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);

    AdobeAn.makeResponsive(false, 'both', false, 1, [
      document.getElementById("canvas"),
      document.getElementById("animation_container"),
      document.getElementById("dom_overlay_container")
    ]);
    AdobeAn.compositionLoaded(lib.properties.id);
  });

  loader.loadManifest(lib.properties.manifest || []);
});
