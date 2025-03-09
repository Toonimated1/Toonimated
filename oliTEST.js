/*******************************************************
 * VERSION 5
 * Must be served from a local/remote web server
 ******************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const comp = AdobeAn.getComposition("AA7EF674FD3F4E65AA08A1F0429652EC");
  if(!comp) {
    console.error("Missing Animate composition");
    return;
  }
  const lib = comp.getLibrary();
  const stage = new lib.Stage(document.getElementById("canvas"));
  const exportRoot = new lib.oliTEST();
  stage.addChild(exportRoot);

  createjs.Ticker.framerate = lib.properties.fps;
  createjs.Ticker.addEventListener("tick", stage);

  AdobeAn.makeResponsive(false, 'both', false, 1, [
    document.getElementById("canvas"),
    document.getElementById("animation_container"),
    document.getElementById("dom_overlay_container")
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);

  // Load images
  const loader = new createjs.LoadQueue();
  loader.setCrossOrigin("anonymous");
  loader.addEventListener("complete", () => {
    console.log("Images loaded successfully.");
    const bmpCerb = new createjs.Bitmap(loader.getResult("cerberus"));
    bmpCerb.x = 50; bmpCerb.y = 50;
    stage.addChild(bmpCerb);

    const bmpOli = new createjs.Bitmap(loader.getResult("oliver"));
    bmpOli.x = 300; bmpOli.y = 100;
    stage.addChild(bmpOli);

    stage.update();
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
