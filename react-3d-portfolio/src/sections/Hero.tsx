/// <reference types="@react-three/fiber" />
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="relative h-full w-full bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 6.5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh scale={1.55}>
            <torusKnotGeometry args={[1.4, 0.5, 160, 80]} />
            <meshStandardMaterial color="#14b8a6" wireframe />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-lg"
        >
          Vishesh Saluja
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl max-w-xl text-white h-[32px]"
        >
          <Typewriter
            words={[
              "Software Developer",
              "ML Enthusiast",
              "Full-Stack Engineer",
              "Open Source Contributor",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
