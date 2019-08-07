import React, { useState } from "react";
import ReactDOM from "react-dom";

import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import ChildPlanet from "./ChildPlanet";

import Loki from "./FamilyNode";

function Tree() {
  const [pool, setPool] = useState(Loki.spawningPool);
  console.log(pool, "pool in Tree");

  const gr = 2;
  const cp = Math.sqrt(Math.pow(gr, 2) / 2);
  const tr = 0.01;
  const _handleClickY = () => {
    if (pool.y.birthPool !== null) {
      setPool(pool.y.birthPool);
    }
  };
  const _handleChildClick = child => {
    console.log("clicked childclick");
    if (child.spawningPool !== null) {
      setPool(child.spawningPool);
    }
  };
  return (
    <Scene
    // environment={{
    //   preset: "starry",
    //   seed: 2,
    //   lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
    //   fog: 0,
    //   ground: "canyon",
    //   groundYScale: 6.31,
    //   groundTexture: "walkernoise",
    //   groundColor: "#8a7f8a",
    //   grid: "none"
    // }}
    >
      <Entity
        geometry={{ primitive: "sphere", radius: gr }}
        material={{ color: "lightblue", opacity: 0 }}
        position={{ x: 0, y: 0, z: -gr }}
        animation={{
          property: "rotation",
          to: "360 0 0",
          loop: true,
          dur: 20000,
          easing: "linear"
        }}
        rotation={{ x: 0, y: 0, z: 0 }}
      >
        {pool.spawn.length > 0
          ? pool.spawn.map((elem, idx) => {
              return (
                <ChildPlanet
                  onClick={() => _handleChildClick(elem)}
                  kid={elem}
                  gr={gr}
                  cp={cp}
                  idx={idx}
                />
              );
            })
          : null}
        //green block
        {/* <Entity
          geometry={{ primitive: "sphere", radius: gr / 8 }}
          material={{ color: "green", opacity: 1 }}
          // position={{ x: cp, y: cp, z: -gr }}
          position={{ x: 0, y: 0, z: -gr }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "0 360 0",
            // easing: "linear",
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        //red block
        <Entity
          geometry={{ primitive: "sphere", radius: gr / 8 }}
          material={{ color: "red", opacity: 1 }}
          
          position={{ x: 0, y: 0, z: gr }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "360 360 360",
            
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        //yellow block
        <Entity
          geometry={{ primitive: "sphere", radius: gr / 8 }}
          material={{ color: "yellow", opacity: 1 }}
          
          position={{ x: 0, y: cp, z: cp }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "360 0 0",
           
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
        /> */}
      </Entity>
      <Entity
        //transparent circle for parent rotation
        geometry={{ primitive: "sphere", radius: 0 }}
        material={{ color: "lightblue", opacity: 0 }}
        position={{ x: 0, y: 0, z: -gr }}
        animation={{
          property: "rotation",
          to: "0 360 0",
          loop: true,
          dur: 10000,
          easing: "linear"
        }}
        rotation={{ x: 0, y: 0, z: 0 }}
      >
        <Entity
          //dad circle
          class="clickable"
          geometry={{ primitive: "sphere", radius: gr / 4 }}
          material={{ opacity: 1, src: pool.y.imageUrl }}
          position={{ x: 0.1 + gr / 4, y: 0, z: 0 }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "0 360 0",
            easing: "linear",
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
          events={{
            click: _handleClickY
          }}
        />
        <Entity
          //mom cicle
          geometry={{ primitive: "sphere", radius: gr / 4 }}
          material={{ opacity: 1, src: pool.x.imageUrl }}
          position={{ x: -(0.1 + gr / 4), y: 0, z: 0 }}
        />
      </Entity>
      {/* <Entity
        geometry={{ primitive: "torus", radius: tr + gr, radiusTubular: tr }}
        material={{ color: "red", opacity: 1 }}
        position={{ x: 0, y: 0, z: -gr }}
      /> */}
      // look controls
      {/* <Entity primitive="a-camera" look-controls>
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: false }}
          material={{ color: "white", shader: "flat", opacity: 0.75 }}
          geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
        />
      </Entity> */}
      <Entity light={{ type: "point" }} position={{ x: 0, y: 8, z: 2 }} />
      <Entity light={{ type: "point" }} position={{ x: 0, y: -8, z: 2 }} />
      {/* <Entity gltf-model={{ src: "virtualcity.gltf" }} /> */}
      <Entity
        text={{ value: "children of " + pool.x.name + " and " + pool.y.name }}
      />
      <Entity
        primitive="a-camera"
        // look-controls
        position={{ x: -1, y: 1, z: 2 }}
      >
        <Entity
          primitive="a-cursor"
          cursor={{ fuse: false }}
          material={{ color: "white", shader: "flat", opacity: 0.75 }}
          geometry={{ radiusInner: 0.005, radiusOuter: 0.007 }}
          event-set__1={{
            _event: "mouseenter",
            scale: { x: 1.4, y: 1.4, z: 1.4 }
          }}
          event-set__1={{
            _event: "mouseleave",
            scale: { x: 1, y: 1, z: 1 }
          }}
          raycaster="objects: .clickable"
        />
      </Entity>
      <a-sky src={require("../img/space.png")} />
    </Scene>
  );
}

export default Tree;
