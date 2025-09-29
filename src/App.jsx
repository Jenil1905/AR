import { useState } from 'react'
import './App.css'

function App() {

  return (
     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <model-viewer
        src="/ring_gold_with_diamond.glb"
        alt="Gold Ring"
        ar
        ar-modes="scene-viewer quick-look webxr"
        camera-controls
        auto-rotate
        style={{ width: "400px", height: "400px" }}
      >
      </model-viewer>
    </div>
  )
}

export default App
