import React from "react";
import ReactDOM from "react-dom";

import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import "./App.css";
import Loki from "./components/FamilyNode";
import Tree from "./components/Tree";

function App() {
  console.log("loki", Loki.spawningPool.getSpawn());
  const gr = 2;
  const cp = Math.sqrt(Math.pow(gr, 2) / 2);
  const tr = 0.01;
  return (
    <Tree />
    // <Scene
    // // environment={{
    // //   preset: "starry",
    // //   seed: 2,
    // //   lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
    // //   fog: 0,
    // //   ground: "canyon",
    // //   groundYScale: 6.31,
    // //   groundTexture: "walkernoise",
    // //   groundColor: "#8a7f8a",
    // //   grid: "none"
    // // }}
    // >
    //   <Entity
    //     geometry={{ primitive: "sphere", radius: gr }}
    //     material={{ color: "lightblue", opacity: 0 }}
    //     position={{ x: 0, y: 0, z: -gr }}
    //     animation={{
    //       property: "rotation",
    //       to: "360 0 0",
    //       loop: true,
    //       dur: 5000,
    //       easing: "linear"
    //     }}
    //     rotation={{ x: 0, y: 0, z: 0 }}
    //   >
    //     //green block
    //     <Entity
    //       geometry={{ primitive: "sphere", radius: gr / 8 }}
    //       material={{ color: "green", opacity: 1 }}
    //       // position={{ x: cp, y: cp, z: -gr }}
    //       position={{ x: 0, y: 0, z: -gr }}
    //       animation={{
    //         property: "rotation",
    //         dur: 12000,
    //         repeat: "indefinite",
    //         to: "0 360 0",
    //         // easing: "linear",
    //         loop: true
    //       }}
    //       rotation={{ x: 0, y: 0, z: 0 }}
    //     />
    //     //red block
    //     <Entity
    //       geometry={{ primitive: "sphere", radius: gr / 8 }}
    //       material={{ color: "red", opacity: 1 }}
    //       // position={{ x: cp, y: cp, z: -gr }}
    //       position={{ x: 0, y: 0, z: gr }}
    //       animation={{
    //         property: "rotation",
    //         dur: 12000,
    //         repeat: "indefinite",
    //         to: "360 360 360",
    //         // easing: "linear",
    //         loop: true
    //       }}
    //       rotation={{ x: 0, y: 0, z: 0 }}
    //     />
    //     //yellow block
    //     <Entity
    //       geometry={{ primitive: "sphere", radius: gr / 8 }}
    //       material={{ color: "yellow", opacity: 1 }}
    //       // position={{ x: cp, y: cp, z: -gr }}
    //       position={{ x: 0, y: cp, z: cp }}
    //       animation={{
    //         property: "rotation",
    //         dur: 12000,
    //         repeat: "indefinite",
    //         to: "360 0 0",
    //         // easing: "linear",
    //         loop: true
    //       }}
    //       rotation={{ x: 0, y: 0, z: 0 }}
    //     />
    //   </Entity>
    //   <Entity
    //     //transparent circle for parent rotation
    //     geometry={{ primitive: "sphere", radius: 0 }}
    //     material={{ color: "lightblue", opacity: 0 }}
    //     position={{ x: 0, y: 0, z: -gr }}
    //     animation={{
    //       property: "rotation",
    //       to: "0 360 0",
    //       loop: true,
    //       dur: 10000,
    //       easing: "linear"
    //     }}
    //     rotation={{ x: 0, y: 0, z: 0 }}
    //   >
    //     <Entity
    //       //dad circle
    //       geometry={{ primitive: "sphere", radius: gr / 4 }}
    //       material={{ color: "blue", opacity: 1 }}
    //       position={{ x: 0.1 + gr / 4, y: 0, z: 0 }}
    //       animation={{
    //         property: "rotation",
    //         dur: 12000,
    //         repeat: "indefinite",
    //         to: "0 360 0",
    //         easing: "linear",
    //         loop: true
    //       }}
    //       rotation={{ x: 0, y: 0, z: 0 }}
    //     />
    //     <Entity
    //       //mom cicle
    //       geometry={{ primitive: "sphere", radius: gr / 4 }}
    //       material={{ color: "hotpink", opacity: 1 }}
    //       position={{ x: -(0.1 + gr / 4), y: 0, z: 0 }}
    //     />
    //   </Entity>
    //   {/* <Entity
    //     geometry={{ primitive: "torus", radius: tr + gr, radiusTubular: tr }}
    //     material={{ color: "red", opacity: 1 }}
    //     position={{ x: 0, y: 0, z: -gr }}
    //   /> */}
    //   // look controls
    //   {/* <Entity primitive="a-camera" look-controls>
    //     <Entity
    //       primitive="a-cursor"
    //       cursor={{ fuse: false }}
    //       material={{ color: "white", shader: "flat", opacity: 0.75 }}
    //       geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
    //     />
    //   </Entity> */}
    //   <Entity light={{ type: "point" }} />
    //   {/* <Entity gltf-model={{ src: "virtualcity.gltf" }} /> */}
    //   <Entity text={{ value: "YEEEEHAWWWWWW" }} />
    //   <a-sky src={require("./img/space.png")} />
    // </Scene>
  );
}

export default App;
