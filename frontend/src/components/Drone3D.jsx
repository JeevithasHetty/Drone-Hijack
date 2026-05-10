import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import { useRef } from "react"

function DroneModel({ anomaly }) {

    const droneRef = useRef()

    useFrame(() => {

        if (!droneRef.current) return

        droneRef.current.rotation.y += 0.01

        droneRef.current.position.y =

            Math.sin(Date.now() * 0.002) * 0.2

        // ATTACK EFFECT

        if (anomaly) {

            droneRef.current.rotation.z =

                Math.sin(Date.now() * 0.02) * 0.3

            droneRef.current.position.x =

                Math.sin(Date.now() * 0.01) * 0.3

        } else {

            droneRef.current.rotation.z = 0

            droneRef.current.position.x = 0
        }
    })

    return (

        <group ref={droneRef}>

            {/* BODY */}

            <mesh>

                <boxGeometry args={[2, 0.4, 1]} />

                <meshStandardMaterial

                    color={anomaly ? "red" : "cyan"}

                    emissive={anomaly ? "red" : "cyan"}

                    emissiveIntensity={2}

                />

            </mesh>

            {/* ARMS */}

            <mesh position={[1.5, 0, 0]}>

                <boxGeometry args={[1, 0.1, 0.1]} />

                <meshStandardMaterial color="white" />

            </mesh>

            <mesh position={[-1.5, 0, 0]}>

                <boxGeometry args={[1, 0.1, 0.1]} />

                <meshStandardMaterial color="white" />

            </mesh>

            {/* ROTORS */}

            <mesh position={[2, 0, 0]}>

                <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />

                <meshStandardMaterial color="orange" />

            </mesh>

            <mesh position={[-2, 0, 0]}>

                <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />

                <meshStandardMaterial color="orange" />

            </mesh>

        </group>
    )
}

function Drone3D({ anomaly }) {

    return (

        <div className="bg-slate-900 rounded-2xl p-4 shadow-lg h-[500px]">

            <h2 className="text-3xl text-cyan-400 mb-4">

                Digital Twin Drone

            </h2>

            <Canvas camera={{ position: [0, 2, 6] }}>

                <ambientLight intensity={1} />

                <directionalLight position={[5, 5, 5]} />

                <DroneModel anomaly={anomaly} />

                <OrbitControls />

            </Canvas>

        </div>
    )
}

export default Drone3D