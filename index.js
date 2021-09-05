import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: -16.7409418984483,
    y: -85.44807173240508,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite4: new Sprite4({
    x: 237.9999871571867,
    y: -77.99999101426943,
    direction: -65.53752133923987,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite5: new Sprite5({
    x: 225.15792345693907,
    y: 154.18879311374286,
    direction: -119.82021285680369,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite6: new Sprite6({
    x: -214.23829809870273,
    y: 163.09139194975614,
    direction: 121.64076023475349,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite7: new Sprite7({
    x: -246.1999794538901,
    y: -85.12368959157001,
    direction: 65.75638096594565,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite8: new Sprite8({
    x: 5.000001970926796,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
