"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"

interface ThreeDViewerProps {
  modelUrl: string
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (scene) {
      setIsLoaded(true)
    }
  }, [scene])

  return isLoaded ? <primitive object={scene} /> : null
}

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, 3, -5]} intensity={0.4} />

      <Model url={modelUrl} />

      <OrbitControls autoRotate autoRotateSpeed={2} enableDamping dampingFactor={0.05} />
    </Canvas>
  )
}
