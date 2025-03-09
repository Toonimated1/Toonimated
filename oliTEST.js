function init() {
    // Grab references to the HTML elements
    const canvas = document.getElementById("canvas");
    const anim_container = document.getElementById("animation_container");
    const dom_overlay_container = document.getElementById("dom_overlay_container");

    // Setup your lib.properties object
    const lib = {};
    lib.properties = {
        id: 'AA7EF674FD3F4E65AA08A1F0429652EC', // Must match the “fake” composition ID above
        width: 800,
        height: 647,
        fps: 30,
        color: "#000000",
        opacity: 1.00,
        // The external images to load
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

    // Create an object to store the loaded images
    const img = {};

    // Create a LoadQueue
    const loader = new createjs.LoadQueue(false);
    loader.setCrossOrigin("anonymous"); // necessary for external images from another domain

    // Listen for file load success
    loader.addEventListener("fileload", (evt) => {
        if (evt.item.type === "image") {
            console.log(`✅ Loaded: ${evt.item.src}`);
            img[evt.item.id] = evt.result;
        }
    });

    // Listen for loading errors
    loader.addEventListener("error", (evt) => {
        console.error(`❌ Failed to load: ${evt.data.src}`);
    });

    // When loading completes, display them on the stage
    loader.addEventListener("complete", () => {
        console.log("✅ All assets loaded successfully.");

        // Retrieve composition references (from our stub above)
        const comp = AdobeAn.getComposition(lib.properties.id);
        const compLib = comp.getLibrary();  // normally "lib" in Animate’s auto-generated code
        const ss = comp.getSpriteSheet();   // normally "ss"

        // If there were sprite sheets in lib.ssMetadata, they'd be registered here
        const ssMetadata = compLib.ssMetadata || [];
        for (let i = 0; i < ssMetadata.length; i++) {
            const metadata = ssMetadata[i];
            if (loader.getResult(metadata.name)) {
                ss[metadata.name] = new createjs.SpriteSheet({
                    images: [loader.getResult(metadata.name)],
                    frames: metadata.frames
                });
                console.log(`✅ Registered spritesheet: ${metadata.name}`);
            }
        }

        // Create a new Stage
        const stage = new createjs.Stage(canvas);

        // Example: Add the first image to the stage if loaded
        if (img["cerberus_high_inv"]) {
            const bitmap1 = new createjs.Bitmap(img["cerberus_high_inv"]);
            bitmap1.x = 50;
            bitmap1.y = 50;
            stage.addChild(bitmap1);
        }

        // Example: Add the second image to the stage if loaded
        if (img["Oliver_expressions_concerned_talk"]) {
            const bitmap2 = new createjs.Bitmap(img["Oliver_expressions_concerned_talk"]);
            bitmap2.x = 250;
            bitmap2.y = 50;
            stage.addChild(bitmap2);
        }

        stage.update(); // Force a redraw

        // Set up the ticker
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener("tick", stage);

        // Make it "responsive" if you want; for now, no-op:
        AdobeAn.makeResponsive(false, 'both', false, 1, [canvas, anim_container, dom_overlay_container]);
        
        // Inform Animate (stub) that composition is loaded
        AdobeAn.compositionLoaded(lib.properties.id);
    });

    // Start loading
    loader.loadManifest(lib.properties.manifest);
}
