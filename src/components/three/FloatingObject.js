"use client";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Float} from "@react-three/drei";
export default function FloatingObject(){
 const g=useRef();
 useFrame((s,d)=>{ if(!g.current)return;
  g.current.rotation.y+=d*.18;
  g.current.rotation.x+=(s.pointer.y*.6-g.current.rotation.x)*Math.min(1,d*2);
  g.current.position.x+=(s.pointer.x*.5-g.current.position.x)*Math.min(1,d*2);});
 return(<Float speed={1.4} rotationIntensity={.3} floatIntensity={1}><group ref={g}>
  <mesh><torusKnotGeometry args={[1,.32,220,32,2,3]}/>
   <meshPhysicalMaterial color="#c9cfcb" metalness={1} roughness={.18} clearcoat={1} clearcoatRoughness={.1}/></mesh>
  <mesh scale={1.55}><icosahedronGeometry args={[1,1]}/><meshBasicMaterial color="#2ee59d" wireframe transparent opacity={.12}/></mesh>
 </group></Float>);
}
