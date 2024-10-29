import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingDodecahedron from "./components/RotatingDodecahedron";
const App = () => {
  return (
    <Canvas className="canvas">
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
      />
      <directionalLight position={[1, 1, 1]} intensity={10} color={"0xffffff"} />
      <color attach="background" args={["#000000"]} />
      <RotatingDodecahedron />
    </Canvas>
  );
};

export default App;
