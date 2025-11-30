"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface ThreeDViewerProps {
  modelUrl: string
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)

  return scene ? <primitive object={scene} /> : null
}

export default function ThreeDViewer({ modelUrl }: ThreeDViewerProps) {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="w-full h-full">
      {error ? (
        <div className="w-full h-full flex items-center justify-center bg-muted border-2 border-border rounded-2xl">
          <Alert className="w-3/4 border-border bg-background">
            <AlertDescription className="text-center">
              <p className="font-mono font-bold mb-2">Model file not found</p>
              <p className="text-sm text-muted-foreground">Add your GLB file to: {modelUrl}</p>
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        <Canvas
          camera={{ position: [0, 2, 5], fov: 50 }}
          style={{ width: "100%", height: "100%" }}
          onError={() => setError("Failed to load model")}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, 3, -5]} intensity={0.4} />

          <Model url={modelUrl} />

          <OrbitControls autoRotate autoRotateSpeed={2} enableDamping dampingFactor={0.05} />
        </Canvas>
      )}
    </div>
  )
}
