/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 250.305575,
        y: 199.343765
      })
    ];

    this.sounds = [
      new Sound(
        "2019-12-11_-_Retro_Platforming_-_David_Fesliyan",
        "./Stage/sounds/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      )
    ];

    this.vars.myVariable = 0;
    this.vars.gravity = -1.2;
    this.vars.jumpForce = 20;
    this.vars.acceleration = 1.5;
    this.vars.resistance = 0.8;
    this.vars.speedY = 0;
    this.vars.falling = 0;
    this.vars.speedX = 0.0012439298161816279;
    this.vars.lastValue = -85.44807173240508;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone(
        "2019-12-11_-_Retro_Platforming_-_David_Fesliyan"
      );
      yield;
    }
  }

  *whenIReceiveMessage1() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
