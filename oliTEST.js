/*******************************************************
 * VERSION 8
 * Spritesheet Approach (Requires re-export from Animate)
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  // The composition ID must match the one used in your re-exported file
  const comp = AdobeAn.getComposition("YOUR_COMPOSITION_ID_HERE");
  if (!comp) {
    console.error("Composition not found!");
    return;
  }
  const lib = comp.getLibrary();
  const exportRoot = new lib.MyExportedRoot(); // your root symbol
  const stage = new lib.Stage(document.getElementById("canvas"));

  stage.addChild(exportRoot);
  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);

  AdobeAn.makeResponsive(false, 'both', false, 1, [
    document.getElementById("canvas"),
    document.getElementById("animation_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
});
