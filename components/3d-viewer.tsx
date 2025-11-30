"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useEffect, useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ThreeDViewerProps {
  modelUrl: string
}

function Model({ url }: { url: string }) {
  const { scene, error } = useGLTF(url, true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (scene) {
      setIsLoaded(true)
    }
  }, [scene])

  if (error) {
    console.log("[v0] Model loading error:", error)
    return null
  }

  return isLoaded ? <primitive object={scene} /> : null
}

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  const [modelExists, setModelExists] = useState(true)

  useEffect(() => {
    const checkModel = async () => {
      try {
        const response = await fetch(modelUrl, { method: "HEAD" })
        if (!response.ok) {
          setModelExists(false)
        }
      } catch (err) {
        setModelExists(false)
      }
    }
    checkModel()
  }, [modelUrl])

  if (!modelExists) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white border-2 border-black rounded-2xl">
        <Alert className="w-3/4 border-black bg-black text-white">
          <AlertDescription className="text-center">
            <p className="font-mono font-bold mb-2">Model file not found</p>
            <p className="text-sm">Add your GLB file to: {modelUrl}</p>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

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
