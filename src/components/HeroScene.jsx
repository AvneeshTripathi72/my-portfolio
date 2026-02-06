import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, TorusKnot, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Animated wireframe sphere
const WireframeSphere = () => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
    }
  })

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial 
        color="#00ff7f" 
        wireframe 
        transparent 
        opacity={0.4}
      />
    </mesh>
  )
}

// Floating particles
const Particles = ({ count = 100 }) => {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  const pointsRef = useRef()

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#ff4d88" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Glowing torus knot
const GlowingTorusKnot = () => {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={0.8} position={[3, 1, -2]}>
        <torusKnotGeometry args={[0.5, 0.15, 100, 16]} />
        <MeshDistortMaterial
          color="#ff4d88"
          transparent
          opacity={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

// Floating abstract geometry
const FloatingGeometry = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={[-3, -1, -2]} scale={0.6}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial 
          color="#00ff7f" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Main 3D Scene component
const HeroScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#00ff7f" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff4d88" />
        
        <WireframeSphere />
        <Particles count={80} />
        <GlowingTorusKnot />
        <FloatingGeometry />
        
        {/* Subtle camera movement on mouse */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default HeroScene
