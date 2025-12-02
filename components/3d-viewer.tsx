"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useState } from "react"

interface ThreeDViewerProps {
  modelUrl: string
}

function Model({ url }: { url: string }) {
  const [error, setError] = useState<string | null>(null)

  const gltf = useGLTF(url, undefined, (error) => {
    console.error("[v0] Model loading error:", error)
    setError(`Failed to load model: ${error.message}`)
  })

  if (error) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    )
  }

  if (!gltf || !gltf.scene) {
    return null
  }

  return <primitive object={gltf.scene} />
}

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  const cleanPath = modelUrl.replace(/%20/g, " ")

  return (
    <div className="w-full h-full relative bg-white">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        onCreated={(state) => {
          state.gl.setClearColor("#ffffff")
          state.gl.shadowMap.enabled = true
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 3, -5]} intensity={0.5} />

        <Model url={cleanPath} />

        <OrbitControls
          autoRotate
          autoRotateSpeed={2}
          enableDamping
          dampingFactor={0.05}
          minDistance={2}
          maxDistance={20}
        />
      </Canvas>
    </div>
  )
}

// Preload the model to avoid loading delays
useGLTF.preload("/models/isometric room.glb")
