/*************************************************************************
 * 1) DEFINE A MINIMAL STUB FOR THE COMPOSITION (if it’s not present)
 *************************************************************************/
if (!window.AdobeAn) window.AdobeAn = {};
if (!AdobeAn.compositions) AdobeAn.compositions = {};
if (!AdobeAn.compositions['AA7EF674FD3F4E65AA08A1F0429652EC']) {
    AdobeAn.compositions['AA7EF674FD3F4E65AA08A1F0429652EC'] = {
        getLibrary: function() {
            // If you have real Animate “lib” code, remove this stub and let
            // the actual Animate scripts define it. 
            return {
                ssMetadata: [] // Add sprite-sheet metadata if you have any
            };
        },
        getSpriteSheet: function() {
            // Animate normally defines sprite sheets too
            return {};
        }
    };
}

/*************************************************************************
 * 2) SET UP THE PROPERTIES OBJECT (instead of reusing “lib”)
 *************************************************************************/
const libProps = {
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

/*************************************************************************
 * 3) CREATE A LOADQUEUE AND LOAD THE IMAGES
 *************************************************************************/
const img = {}; // Will store loaded images
const loader = new createjs.LoadQueue(false);
loader.setCrossOrigin("anonymous"); // ensures cross-domain images load fine

loader.addEventListener("fileload", evt => {
    if (evt.item.type === "image") {
        console.log("✅ Loaded:", evt.item.src);
        img[evt.item.id] = evt.result;
    }
});

loader.addEventListener("error", evt => {
    console.error("❌ Failed to load:", evt.data.src);
});

loader.addEventListener("complete", () => {
    console.log("✅ All assets loaded successfully.");

    // Get references from AdobeAn’s composition
    const comp = AdobeAn.getComposition(libProps.id);
    const compLib = comp.getLibrary();
    const ss = comp.getSpriteSheet();

    // If Animate published any sprite sheet metadata, register it:
    const ssMetadata = compLib.ssMetadata || [];
    console.log("ssMetadata:", ssMetadata);
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

    // Grab references to your existing HTML elements
    const canvas = document.getElementById("canvas");
    const anim_container = document.getElementById("anim_container");
    const dom_overlay_container = document.getElementById("dom_overlay_container");

    // Create a Stage for the Canvas
    const stage = new createjs.Stage(canvas);

    // Example: Add the cerberus image
    if (img["cerberus_high_inv"]) {
        const bmp = new createjs.Bitmap(img["cerberus_high_inv"]);
        bmp.x = 100;
        bmp.y = 100;
        stage.addChild(bmp);
        stage.update(); // draw it right now
        console.log("✅ cerberus image added to stage");
    } else {
        console.error("❌ Could not find cerberus_high_inv in loaded images");
    }

    // Example: Add the Oliver expression image
    if (img["Oliver_expressions_concerned_talk"]) {
        const bmp2 = new createjs.Bitmap(img["Oliver_expressions_concerned_talk"]);
        bmp2.x = 300;
        bmp2.y = 150;
        stage.addChild(bmp2);
        stage.update(); // draw it right now
        console.log("✅ Oliver image added to stage");
    } else {
        console.error("❌ Could not find Oliver_expressions_concerned_talk in loaded images");
    }

    // Set up tick so it can animate
    createjs.Ticker.framerate = libProps.fps;
    createjs.Ticker.addEventListener("tick", stage);

    // If you’re using the Animate responsive code:
    AdobeAn.makeResponsive(false, 'both', false, 1, [
        canvas, anim_container, dom_overlay_container
    ]);

    // Let Animate know the composition is fully loaded
    AdobeAn.compositionLoaded(libProps.id);
});

// Finally, start loading the manifest
loader.loadManifest(libProps.manifest);
