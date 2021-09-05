/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 251.305575,
        y: 190.343765
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

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
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.visible = false;
  }
}
