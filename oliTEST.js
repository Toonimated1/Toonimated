/*******************************************************
 * BARE-MINIMUM CREATEJS LOADER
 *******************************************************/
(function() {
  // 1) Create the LoadQueue
  const loader = new createjs.LoadQueue(false);
  // 2) Allow cross-domain images
  loader.setCrossOrigin("anonymous");

  // 3) Listen for loaded images
  const images = {}; // will hold the loaded Image objects
  loader.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
      console.log("✅ Loaded:", evt.item.src);
      images[evt.item.id] = evt.result;
    }
  });

  // 4) Listen for load errors
  loader.addEventListener("error", (evt) => {
    console.error("❌ Failed to load:", evt.data.src);
  });

  // 5) When all done, draw them onto the canvas
  loader.addEventListener("complete", () => {
    console.log("✅ All assets finished loading.");

    // Grab your <canvas> element from the HTML
    const canvas = document.getElementById("canvas");

    // Create a stage
    const stage = new createjs.Stage(canvas);

    // Create a bitmap for the first image if it exists
    if (images["cerberus"]) {
      const bmp1 = new createjs.Bitmap(images["cerberus"]);
      bmp1.x = 50;
      bmp1.y = 50;
      stage.addChild(bmp1);
    }

    // Create a bitmap for the second image if it exists
    if (images["oliver"]) {
      const bmp2 = new createjs.Bitmap(images["oliver"]);
      bmp2.x = 300;
      bmp2.y = 100;
      stage.addChild(bmp2);
    }

    // Update the stage to render
    stage.update();
  });

  // 6) Finally, load the two images from the CDN
  loader.loadManifest([
    { id: "cerberus", src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png" },
    { id: "oliver", src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png" }
  ]);
})();
