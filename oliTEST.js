lib.properties = {
    id: 'AA7EF674FD3F4E65AA08A1F0429652EC',
    width: 800,
    height: 647,
    fps: 30,
    color: "#000000",
    opacity: 1.00,
    manifest: [
        {src:"https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png", id:"cerberus_high_inv"},
        {src:"https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png", id:"Oliver_expressions_concerned_talk"}
    ],
    preloads: []
};

// Define img[] to store the loaded images
const img = {};

// Load the assets
const loader = new createjs.LoadQueue(false);
loader.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
        img[evt.item.id] = evt.result;
    }
});

loader.addEventListener("complete", (evt) => {
    const lib = AdobeAn.getComposition(lib.properties.id).getLibrary();
    const ss = AdobeAn.getComposition(lib.properties.id).getSpriteSheet();
    const queue = evt.target;

    // Register spritesheets (check if metadata exists)
    const ssMetadata = lib.ssMetadata || [];
    console.log("ssMetadata:", ssMetadata);

    for (let i = 0; i < ssMetadata.length; i++) {
        if (queue.getResult(ssMetadata[i].name)) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet({
                images: [queue.getResult(ssMetadata[i].name)],
                frames: ssMetadata[i].frames
            });
        }
    }

    // Create and display the animation
    const exportRoot = new lib.oliTEST();
    const stage = new lib.Stage(canvas);

    stage.enableMouseOver();

    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);

    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
});

// Load manifest
loader.loadManifest(lib.properties.manifest);
