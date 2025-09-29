import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

function FloatingTorus() {
  return (
    <mesh rotation={[0.4, 0.6, 0.2]}>
      <torusGeometry args={[1.2, 0.35, 32, 100]} />
      <meshStandardMaterial color="#38bdf8" metalness={0.3} roughness={0.25} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full h-full">
      <Canvas camera={{ position: [2.5, 2, 3.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <group position={[0, 0, 0]}>
          <FloatingTorus />
        </group>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </motion.div>
  )
}


