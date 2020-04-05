import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";
import "./styles.css";

export default function App() {
  let [mode, cycleMode] = useCycle("off", "on");

  return (
    <div className="App">
      <p>Click on toogle to move left-right</p>

      <Frame
        width={120}
        height={60}
        borderRadius={30}
        center
        onTap={function handleTap() {
          console.log("tapped");
          // knobX = 60 // won't work in React!
          cycleMode();
        }}
        background="#999"
        animate={mode}
        variants={{
          off: { background: "#999" },
          on: { background: "orange" }
        }}
      >
        <Frame
          size={60}
          borderRadius={30}
          backgroundColor="green"
          variants={{
            off: { x: 0, scale: 1 },
            on: { x: 60, scale: 1.2 }
          }}
          transition={{ duration: 0.2 }}
          background="white"
          shadow="0 1px 5px rgba(0,0,0,0.5)"
        />
      </Frame>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
