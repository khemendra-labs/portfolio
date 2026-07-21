'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float } from '@react-three/drei'
import { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'

function Particles({ count = 2000 }) {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02

      const time = state.clock.elapsedTime
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        const x = positions[i3]
        const y = positions[i3 + 1]
        
        positions[i3 + 1] = y + Math.sin(time + x) * 0.002
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

function NetworkGrid() {
  const gridRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.z = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={gridRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[15, 15, 20, 20]} />
          <meshBasicMaterial
            color="#00ff88"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.5, 0]}>
          <planeGeometry args={[15, 15, 15, 15]} />
          <meshBasicMaterial
            color="#00cc66"
            wireframe
            transparent
            opacity={0.05}
          />
        </mesh>
      </group>
    </Float>
  )
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(time * 0.5) * 3
      orb1Ref.current.position.y = Math.cos(time * 0.3) * 2
      orb1Ref.current.position.z = Math.sin(time * 0.4) * 2
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(time * 0.4) * 4
      orb2Ref.current.position.y = Math.sin(time * 0.5) * 3
      orb2Ref.current.position.z = Math.cos(time * 0.3) * 2
    }
  })

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#00ff88" transparent opacity={0.3} />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color="#00cc66" transparent opacity={0.2} />
      </mesh>
    </>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <Particles count={3000} />
      <NetworkGrid />
      <FloatingOrbs />
    </>
  )
}

export default function ThreeBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
