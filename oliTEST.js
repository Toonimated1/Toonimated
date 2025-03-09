lib.properties = {
    id: 'AA7EF674FD3F4E65AA08A1F0429652EC',
    width: 800,
    height: 647,
    fps: 30,
    color: "#000000",
    opacity: 1.00,
    manifest: [
        {
            src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/cerberus_high_inv.png",
            id: "cerberus_high_inv"
        },
        {
            src: "https://cdn.jsdelivr.net/gh/Toonimated1/Toonimated@main/images/Oliver_expressions_concerned_talk.png",
            id: "Oliver_expressions_concerned_talk"
        }
    ],
    preloads: []
};

const img = {}; // Store loaded images

const loader = new createjs.LoadQueue(false);
loader.setCrossOrigin("anonymous"); // Force cross-origin loading

// Debug log to check if files are being requested correctly
loader.addEventListener("fileload", (evt) => {
    if (evt.item.type === "image") {
        console.log(`✅ Loaded: ${evt.item.src}`);
        console.log(`✅ Result:`, evt.result);
        img[evt.item.id] = evt.result;
    }
});

loader.addEventListener("error", (evt) => {
    console.error(`❌ Failed to load: ${evt.data.src}`);
});

loader.addEventListener("complete", () => {
    console.log("✅ All assets loaded successfully.");

    const lib = AdobeAn.getComposition(lib.properties.id).getLibrary();
    const ss = AdobeAn.getComposition(lib.properties.id).getSpriteSheet();
    const queue = loader;

    // Register spritesheets if metadata exists
    const ssMetadata = lib.ssMetadata || [];
    console.log("ssMetadata:", ssMetadata);

    for (let i = 0; i < ssMetadata.length; i++) {
        const metadata = ssMetadata[i];
        if (queue.getResult(metadata.name)) {
            ss[metadata.name] = new createjs.SpriteSheet({
                images: [queue.getResult(metadata.name)],
                frames: metadata.frames
            });
            console.log(`✅ Registered spritesheet: ${metadata.name}`);
        }
    }

    // ✅ TEST: Add image directly to the canvas
    const stage = new createjs.Stage(canvas);

    if (img["cerberus_high_inv"]) {
        const bitmap = new createjs.Bitmap(img["cerberus_high_inv"]);
        bitmap.x = 100;
        bitmap.y = 100;
        stage.addChild(bitmap);
        stage.update(); // Force redraw
        console.log("✅ Bitmap added to stage");
    } else {
        console.error("❌ Failed to create bitmap");
    }

    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);

    AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
    AdobeAn.compositionLoaded(lib.properties.id);
});

// Start loading the manifest
loader.loadManifest(lib.properties.manifest);
