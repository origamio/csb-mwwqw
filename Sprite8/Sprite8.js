/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 80.55557250976562,
        y: -1.4062347412109375
      })
    ];

    this.sounds = [new Sound("0133", "./Sprite8/sounds/0133.mp3")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.effects.ghost = 100;
    while (true) {
      if (
        this.touching(this.sprites["Sprite4"].andClones()) ||
        this.touching(this.sprites["Sprite5"].andClones()) ||
        this.touching(this.sprites["Sprite6"].andClones()) ||
          this.touching(this.sprites["Sprite7"].andClones())
      ) {
        this.broadcast("message1");
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    while (true) {
      /* TODO: Implement stop all */ null;
      yield;
    }
  }
}
