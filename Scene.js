// Example Scene.js

class ExternalScene extends window.BaseScene {
  constructor() {
    super({
      player: {
       // The x/y coordinates on your Map where you want the player to appear
        spawn: {
          x: 210,
          y: 280,
        },
      },
    });
  }
}
