import React, { useState } from "react";
import ReactDOM from "react-dom";

import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";

function ChildPlanet(props) {
  const kid = props.kid;
  console.log(kid, "kid");
  const colors = kid.gender === "male" ? "blue" : "pink";
  const gr = props.gr;
  const cp = props.cp;
  const idx = props.idx;
  const positions = [
    { x: 0, y: 0, z: -gr },
    { x: 0, y: 0, z: gr },
    { x: 0, y: cp, z: cp }
  ];
  return (
    <Entity
      geometry={{ primitive: "sphere", radius: gr / 8 }}
      material={{ color: colors, opacity: 1 }}
      position={positions[idx]}
      animation={{
        property: "rotation",
        dur: 12000,
        repeat: "indefinite",
        to: "0 0 0",
        // easing: "linear",
        loop: true
      }}
      rotation={{ x: 0, y: 0, z: 0 }}
    >
      <Entity text={{ value: kid.name }} />
    </Entity>
  );
}

export default ChildPlanet;
