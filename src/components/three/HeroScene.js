"use client";
import {useEffect,useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Sparkles,Environment,Lightformer} from "@react-three/drei";
import FloatingObject from "./FloatingObject";
export default function HeroScene(){
 const [small,setSmall]=useState(false);
 useEffect(()=>{setSmall(window.innerWidth<768)},[]);
 return(<Canvas dpr={small?1:[1,1.75]} camera={{position:[0,0,6.8],fov:42}} gl={{antialias:!small,alpha:true,powerPreference:"high-performance"}}>
  <ambientLight intensity={.35}/><Environment resolution={256}>
  <Lightformer form="rect" intensity={4} position={[0,4,3]} scale={[8,3,1]}/>
  <Lightformer form="rect" intensity={2} color="#2ee59d" position={[-5,0,2]} scale={[2,6,1]}/>
  <Lightformer form="rect" intensity={3} position={[5,-1,-2]} scale={[2,6,1]}/>
</Environment><directionalLight position={[4,4,5]} intensity={2.2}/>
  <pointLight position={[-4,-2,3]} intensity={30} color="#2ee59d"/><pointLight position={[3,-3,-2]} intensity={18} color="#ffffff"/>
  <FloatingObject/><Sparkles count={small?14:40} scale={[8,6,4]} size={2} speed={.25} color="#2ee59d" opacity={.6}/>
 </Canvas>);
}
