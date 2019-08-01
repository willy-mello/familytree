import React from "react";
import ReactDOM from "react-dom";

import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import "./App.css";

function App() {
  const gr = 8;
  const cp = Math.sqrt(Math.pow(gr, 2) / 2);
  const tr = 0.01;
  return (
    <Scene
      environment={{
        preset: "starry",
        seed: 2,
        lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
        fog: 0,
        ground: "canyon",
        groundYScale: 6.31,
        groundTexture: "walkernoise",
        groundColor: "#8a7f8a",
        grid: "none"
      }}
    >
      <Entity
        geometry={{ primitive: "sphere", radius: gr }}
        material={{ color: "lightblue", opacity: 0 }}
        position={{ x: 0, y: 0, z: -gr }}
        animation={{
          property: "rotation",
          to: "360 0 0",
          loop: true,
          dur: 10000
        }}
        rotation={{ x: 0, y: 0, z: 0 }}
      >
        //green block
        <Entity
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
          // position={{ x: cp, y: cp, z: -gr }}
          position={{ x: 0, y: 0, z: gr }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "360 360 360",
            // easing: "linear",
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        //yellow block
        <Entity
          geometry={{ primitive: "sphere", radius: gr / 8 }}
          material={{ color: "yellow", opacity: 1 }}
          // position={{ x: cp, y: cp, z: -gr }}
          position={{ x: 0, y: cp, z: cp }}
          animation={{
            property: "rotation",
            dur: 12000,
            repeat: "indefinite",
            to: "360 0 0",
            // easing: "linear",
            loop: true
          }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
      </Entity>
      <Entity
        geometry={{ primitive: "sphere", radius: gr / 4 }}
        material={{ color: "blue", opacity: 1 }}
        position={{ x: -gr / 4, y: 0, z: -gr }}
      />
      <Entity
        geometry={{ primitive: "sphere", radius: gr / 4 }}
        material={{ color: "pink", opacity: 1 }}
        position={{ x: gr / 4, y: 0, z: -gr }}
      />

      <Entity
        geometry={{ primitive: "torus", radius: tr + gr, radiusTubular: tr }}
        material={{ color: "red", opacity: 1 }}
        position={{ x: 0, y: 0, z: -gr }}
      />
      {/* <a-box
        rotation="0 0 0"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      >
        <a-box position="5 0 0" />
      </a-box> */}
      <Entity camera position={{ x: 0, y: cp, 0: gr }} />
      {/* <Entity
          primitive="a-animation"
          attribute="color"
          to="green"
          from="#EF2D5E"
          dur="2000"
          repeat="indefinite"
          direction="alternate"
        /> */}

      {/* <Entity particle-system={{ preset: "snow" }} /> */}
      <Entity light={{ type: "point" }} />
      {/* <Entity gltf-model={{ src: "virtualcity.gltf" }} /> */}
      <Entity text={{ value: "Hello, WebVR!" }} />
      <a-sky src={require("./img/space.png")} />
    </Scene>
    // <a-scene>
    //   <a-entity hello-world="event: anEvent; message: Howdy there" />
    //   <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
    //   <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E">
    //     <a-animation
    //       attribute="color"
    //       to="green"
    //       from="#EF2D5E"
    //       dur="2000"
    //       repeat="indefinite"
    //       direction="alternate"
    //     />
    //   </a-sphere>
    //   <a-cylinder
    //     position="1 0.75 -3"
    //     radius="0.5"
    //     height="1.5"
    //     color="#FFC65D"
    //   >
    //     <a-animation
    //       attribute="color"
    //       to="green"
    //       from="#FFC65D"
    //       dur="2000"
    //       repeat="indefinite"
    //       direction="alternate"
    //     />
    //   </a-cylinder>
    //   <a-plane
    //     position="0 0 -4"
    //     rotation="-90 0 0"
    //     width="4"
    //     height="4"
    //     color="#7BC8A4"
    //   />
    //   <a-dodecahedron color="#FF926B" radius="5" position="0 -1 -30" />
    //   <a-sky src={require("./img/landscape.jpg")} />
    // </a-scene>
  );
}

export default App;
