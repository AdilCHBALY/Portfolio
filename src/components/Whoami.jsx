import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pc from '../canvas/Pc'
import { OrbitControls, Stage } from '@react-three/drei'
import Scss from '../img/scss.svg'
import Html from '../img/html.svg'
import Reactt from '../img/react.svg'
import Js from '../img/js.svg'
import Mysql from '../img/mysql.svg'
import Nodejs from '../img/nodejs.svg'
import Spring from '../img/spring.svg'
import Mongo from '../img/mongo.svg'
import Django from '../img/django.svg'
import Express from '../img/express.svg'
import Css from '../img/css.svg'
import FireBase from '../img/firebase.svg'
import CSharp from '../img/csharp.svg'
import Docker from '../img/docker.svg'
const Whoami = () => {
  return (
    <section className='Whoami' id="whoami">
      <div className="Content">
        <div className="left">
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Pc/>
            </Stage>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="right">
          <div className="title">About Me</div>
          <div className="aboutme">As a junior Developer , I possess an impressive arsenal of skills in My Kit . I excel in designing and maintaining responsive websites that offer a smooth user experience . Me expertise lies in crafting dynamic , engaging interfaces through writing clean and optimized and utilizing cutting-edge development tools and techniques . I am also a team player who thrives in collaborating with cross-functional teams to produce outstading web applications.</div>
          <div className="techstack">
            Tech Stack <span>|</span>
            <div className="techs">
              <img src={Html} alt="" />
              <img src={Css} alt="" />
              <img src={Js} alt="" />
              <img src={Scss} alt="" />
              <img src={Reactt} alt="" />
              <img src={CSharp} alt="" />
              <img src={Django} alt="" />
              <img src={FireBase} alt="" />
              <img src={Nodejs} alt="" />
              <img src={Spring} alt="" />
              <img src={Express} alt="" />
              <img src={Mysql} alt="" />
              <img src={Mongo} alt="" />
              <img src={Docker} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whoami
