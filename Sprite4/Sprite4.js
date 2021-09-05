/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite4/costumes/costume1.svg", {
        x: 57,
        y: 30
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.direction = this.radToScratch(
      Math.atan2(
        this.sprites["Sprite8"].y - this.y,
        this.sprites["Sprite8"].x - this.x
      )
    );
    this.createClone();
    while (true) {
      yield* this.wait(6.5);
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    this.visible = true;
    while (
      !(
        this.touching(this.sprites["Sprite8"].andClones()) ||
        this.touching(this.sprites["Sprite2"].andClones())
      )
    ) {
      this.move(0.1);
      yield;
    }
    this.deleteThisClone();
  }

  *whenIReceiveMessage1() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.deleteThisClone();
  }
}
