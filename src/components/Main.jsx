import React from 'react'
import Navbar from './Navbar'
import Me from '../img/me.jpeg'
import { LinkedIn,GitHub } from '@mui/icons-material'
import RoomIcon from '@mui/icons-material/Room';
import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Main = () => {
  return (
    <section className='Main' id='Main'>
      <Navbar/>
      <div className="Content">
        <div className="left">
            <div className="introduction">
                Hi, i'm <span>Adil Chbaly</span>,a passionate Full Stack Developer based in Marrakech.<RoomIcon className='Marker'/>
            </div>
            <div className="followme">
                Follow Me : 
                <div className="socials">
                    <LinkedIn className='social' />
                    <GitHub className='social' />
                </div>
            </div>
        </div>
        <div className="right">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3,2,1]} />
                <Sphere args={[1,100,200]} scale={2.4} >
                    <MeshDistortMaterial
                    color="#F4C430"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    />
                </Sphere>
            </Canvas>
            <img src={Me} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Main