/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stand", "./Sprite2/costumes/stand.svg", {
        x: 21.130104999999986,
        y: 35.835939999999994
      }),
      new Costume("stand2", "./Sprite2/costumes/stand2.svg", {
        x: 21.130094999999983,
        y: 35.835939999999994
      }),
      new Costume("cry", "./Sprite2/costumes/cry.svg", { x: 25.90186, y: 32 })
    ];

    this.sounds = [
      new Sound("Yeet-Sound-Effect", "./Sprite2/sounds/Yeet-Sound-Effect.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      )
    ];
  }

  *moveInSteps(steps) {
    this.stage.vars.falling += 1;
    for (let i = 0; i < steps; i++) {
      this.stage.vars.lastValue = this.x;
      this.x += this.stage.vars.speedX / steps;
      if (this.touching(Color.rgb(60, 255, 0))) {
        this.x = this.stage.vars.lastValue;
        this.stage.vars.speedX = 0;
      }
      this.stage.vars.lastValue = this.y;
      this.y += this.stage.vars.speedY / steps;
      if (this.touching(Color.rgb(60, 255, 0))) {
        this.y = this.stage.vars.lastValue;
        if (this.stage.vars.speedY < 0) {
          this.stage.vars.falling = 0;
        }
        this.stage.vars.speedY = 0;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "stand";
    this.stage.vars.gravity = -1.2;
    this.stage.vars.jumpForce = 20;
    this.stage.vars.acceleration = 1.5;
    this.stage.vars.resistance = 0.8;
    this.stage.vars.speedY = 0;
    this.goto(0, 0);
    while (true) {
      if (this.keyPressed("up arrow")) {
        if (this.stage.vars.falling < 3) {
          this.stage.vars.speedY = this.stage.vars.jumpForce;
        }
      }
      if (this.keyPressed("left arrow")) {
        this.stage.vars.speedX += 0 - this.stage.vars.acceleration;
      }
      if (this.keyPressed("right arrow")) {
        this.stage.vars.speedX += this.stage.vars.acceleration;
      }
      if (this.keyPressed("space")) {
        if (this.stage.vars.falling < 3) {
          this.stage.vars.speedY = this.stage.vars.jumpForce;
        }
      }
      this.stage.vars.speedX =
        this.stage.vars.speedX * this.stage.vars.resistance;
      this.stage.vars.speedY += this.stage.vars.gravity;
      yield* this.moveInSteps(
        Math.abs(this.stage.vars.speedX) + Math.abs(this.stage.vars.speedY)
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.costume = "stand";
      }
      if (this.keyPressed("left arrow")) {
        this.costume = "stand2";
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        this.touching(this.sprites["Sprite4"].andClones()) ||
        this.touching(this.sprites["Sprite5"].andClones()) ||
        this.touching(this.sprites["Sprite6"].andClones()) ||
          this.touching(this.sprites["Sprite7"].andClones())
      ) {
        yield* this.playSoundUntilDone("Yeet-Sound-Effect");
      }
      yield;
    }
  }

  *whenIReceiveMessage1() {
    this.goto(84, -85);
    while (true) {
      this.costume = "cry";
      yield;
    }
  }

  *whenIReceiveMessage2() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
