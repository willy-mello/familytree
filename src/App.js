import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "aframe";
import { Entity, Scene } from "aframe-react";
import "aframe-particle-system-component";
import "./App.css";

function App() {
  return (
    <Scene
      environment={{
        preset: "starry",
        seed: 2,
        lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
        fog: 0.8,
        ground: "canyon",
        groundYScale: 6.31,
        groundTexture: "walkernoise",
        groundColor: "#8a7f8a",
        grid: "none"
      }}
    >
      <Entity
        geometry={{ primitive: "box" }}
        material={{ color: "red" }}
        position={{ x: 0, y: 0, z: -5 }}
      >
        <Entity
          primitive="a-animation"
          attribute="color"
          to="green"
          from="#EF2D5E"
          dur="2000"
          repeat="indefinite"
          direction="alternate"
        />
      </Entity>
      <Entity particle-system={{ preset: "snow" }} />
      <Entity light={{ type: "point" }} />
      <Entity gltf-model={{ src: "virtualcity.gltf" }} />
      <Entity text={{ value: "Hello, WebVR!" }} />
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
