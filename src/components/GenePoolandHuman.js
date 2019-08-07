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
    this.imageUrl =
      "https://www.wallpaperup.com/uploads/wallpapers/2014/01/14/227249/e0ae6e6675d0eae1559c948141358316-700.jpg";
  }
  //may need static functions
  procreate(mate, name, gender) {
    if (this.spawningPool === null) {
      if (this.gender === "male") {
        this.spawningPool = new GenePool(mate, this);
        if (mate !== null) {
          mate.spawningPool = this.spawningPool;
        }
      } else {
        this.spawningPool = new GenePool(this, mate);
        if (mate !== null) {
          mate.spawningPool = this.spawningPool;
        }
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
  addImage(str) {
    this.imageUrl = str;
  }
  addParents(momName, dadName) {
    if (this.birthPool === null) {
      const dad = new Human(dadName, "male");
      const mom = new Human(momName, "female");
      const pool = new GenePool(mom, dad);
      pool.spawn = [this];
      this.birthPool = pool;
      return { mom, dad };
    }
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
