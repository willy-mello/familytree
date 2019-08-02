import React from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
const chalk = require("chalk");

class Human {
  constructor(name, gender, birthPool = null) {
    this.name = name;
    this.gender = gender;
    this.birthPool = birthPool;
    //will have to change spawning pool eventually to allow for
    this.spawningPool = null;
  }
  //may need static functions
  procreate(mate, name, gender) {
    if (this.spawningPool === null) {
      if (this.gender === "male") {
        this.spawningPool = new GenePool(mate, this);
      } else {
        this.spawningPool = new GenePool(this, mate);
      }
      return this.spawningPool.newSpawn(name, gender);
    } else {
      return this.spawningPool.newSpawn(name, gender);
    }
  }
  getSiblings() {
    if (this.birthPool === null) {
      console.log("this human sprang out of the ground");
      return;
    }
    console.log(chalk.blue("siblings"), this.birthPool.getSpawn());
    return this.birthPool.getSpawn();
  }
}

class GenePool {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.spawn = [];
    // might need to bind this
    // this.newSpawn = this.newSpawn.bind(this);
  }
  newSpawn(name, gender) {
    const child = new Human(name, gender, this);
    this.spawn.push(child);
    console.log(chalk.red("spawn created"), child);
    return child;
  }
  getSpawn() {
    console.log("current spawn", this.spawn);
    return this.spawn;
  }
  getX() {
    console.log("this.x", this.x);
    return this.x;
  }
  getY() {
    console.log("this.y", this.y);
    return this.y;
  }
}
export { Human, GenePool };
