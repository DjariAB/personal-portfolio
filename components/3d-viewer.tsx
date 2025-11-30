"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useState, useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import type * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

interface ThreeDViewerProps {
  modelUrl: string
}

function Model({ url }: { url: string }) {
  const [model, setModel] = useState<THREE.Group | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()

    loader.load(
      url,
      (gltf) => {
        setModel(gltf.scene)
        setError(null)
      },
      (progress) => {
        console.log("[v0] Loading progress:", ((progress.loaded / progress.total) * 100).toFixed(2) + "%")
      },
      (err) => {
        console.error("[v0] Failed to load model:", err)
        setError(`Failed to load 3D model: ${err.message}`)
      },
    )
  }, [url])

  if (error) {
    return (
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
    )
  }

  if (!model) {
    return null
  }

  return <primitive object={model} />
}

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  const [error, setError] = useState<string | null>(null)

  const cleanPath = modelUrl.replace(/%20/g, " ")

  return (
    <div className="w-full h-full relative bg-white">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-50">
          <Alert className="max-w-md">
            <AlertDescription className="text-red-700">{error}</AlertDescription>
          </Alert>
        </div>
      )}
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        style={{ width: "100%", height: "100%" }}
        onCreated={(state) => {
          state.gl.setClearColor("#ffffff")
          state.gl.shadowMap.enabled = true
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={50} />
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
