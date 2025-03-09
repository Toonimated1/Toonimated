/*******************************************************
 * VERSION 7
 * No Animate, purely CreateJS for images
 ******************************************************/
window.addEventListener("DOMContentLoaded", () => {
  // 1) Create the stage
  const stage = new createjs.Stage("myCanvas");

  // 2) Load images
  const queue = new createjs.LoadQueue();
  queue.setCrossOrigin("anonymous");
  queue.on("complete", handleComplete);
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

  function handleComplete() {
    const cerb = new createjs.Bitmap(queue.getResult("cerberus"));
    cerb.x = 50;
    cerb.y = 50;
    stage.addChild(cerb);

    const oli = new createjs.Bitmap(queue.getResult("oliver"));
    oli.x = 300;
    oli.y = 100;
    stage.addChild(oli);

    stage.update();
  }
});
