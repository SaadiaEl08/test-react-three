import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
function RotatingDodecahedron() {
    const meshRef = useRef();
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
    });
    return (
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1,0]} />
        <meshLambertMaterial color="#468585" emissive="#468585" />
        <Sparkles count={200} scale={10} size={7}  speed={0.02} noise={0.002} color="yellow"/>
      </mesh>
    );
  }

export default RotatingDodecahedron;