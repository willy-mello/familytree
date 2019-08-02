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
    { x: 0, y: gr, z: 0 },
    { x: 0, y: -gr, z: 0 },
    { x: 0, y: cp, z: cp },
    { x: 0, y: cp, z: -cp },
    { x: 0, y: -cp, z: cp },
    { x: 0, y: -cp, z: -cp }
  ];
  return (
    <Entity
      class="clickable"
      geometry={{ primitive: "sphere", radius: gr / 8 }}
      material={{ color: colors, opacity: 1 }}
      position={positions[idx]}
      animation={{
        property: "rotation",
        dur: 12000,
        repeat: "indefinite",
        to: "0 360 0",
        // easing: "linear",
        loop: true
      }}
      rotation={{ x: 0, y: 0, z: 0 }}
      text={{ value: kid.name }}
      events={{
        click: props.onClick
      }}
    >
      {kid.spawningPool !== null
        ? kid.spawningPool.spawn.map((elem, idx) => {
            return (
              <ChildPlanet
                onClick={() => console.log("cliecked on child of child")}
                kid={elem}
                gr={gr / 4}
                cp={Math.sqrt(Math.pow(gr, 2) / 2)}
                idx={idx}
              />
            );
          })
        : null}
      <Entity text={{ value: kid.name }} />
    </Entity>
  );
}

export default ChildPlanet;
