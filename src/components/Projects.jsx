import React, { useState } from 'react'
import { GitHub } from '@mui/icons-material'
import LaunchIcon from '@mui/icons-material/Launch'
import Laptop from '../img/laptop.png'
import Restaurant from '../img/restaurantnearme.png'
import ChatApp from '../img/chatapp.png'
import SmartHome from '../img/smarthome.jpeg'

const projects=[
  {
    "name":"ChatApp",
    "img":ChatApp,
    "gitlink":"https://github.com/HoussamNaasse/tictao-vercel",
    "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae soluta, quam veritatis perferendis impedit aut, quas fuga reprehenderit facilis maiores. Commodi culpa quaerat molestiae, officiis iure sunt quasi vitae, aperiam unde placeat deleniti? Facilis, in minima! Magnam, blanditiis ipsum quae accusantium corrupti molestiae harum nostrum laborum adipisci rem totam.",
    "techs":"React Scss Firebase",
    "isDemo":false
  },
  {
    "name":"Smart Home",
    "img":SmartHome,
    "gitlink":"https://github.com/HoussamNaasse/Gmachine",
    "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae soluta, quam veritatis perferendis impedit aut, quas fuga reprehenderit facilis maiores. Commodi culpa quaerat molestiae, officiis iure sunt quasi vitae, aperiam unde placeat deleniti? Facilis, in minima! Magnam, blanditiis ipsum quae accusantium corrupti molestiae harum nostrum laborum adipisci rem totam.",
    "techs":"C# .Net MySql",
    "isDemo":false
  },
  {
    "name":"RestaurantNearMe",
    "img":Restaurant,
    "gitlink":"https://github.com/HoussamNaasse/Gmachine",
    "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae soluta, quam veritatis perferendis impedit aut, quas fuga reprehenderit facilis maiores. Commodi culpa quaerat molestiae, officiis iure sunt quasi vitae, aperiam unde placeat deleniti? Facilis, in minima! Magnam, blanditiis ipsum quae accusantium corrupti molestiae harum nostrum laborum adipisci rem totam.",
    "techs":"Django BeautifullSoup MySql React Scss",
    "isDemo":false
  },
]




const Projects = () => {
  const [project,setProject]=useState(projects[0])


  const ProjectDetails=()=>{
    return(
      <>
        <div className="laptop">
          <img src={Laptop} alt="" />
          <div className="screen">
            <img src={project.img} alt="" />
          </div>
        </div>
        <div className="projectDetail">
          <div className="title">
            {project.name}
          </div>
          <div className="desc">
            {project.desc}
          </div>
          <div className="techs">
            {project.techs}
          </div>
          <div className="links">
            <div className="link">
              <a href={project.gitlink} target="_blank">Code</a>
              <GitHub className='icon' />
            </div>
            {project.isDemo ?<div className="link">
              Live Demo
              <LaunchIcon className='icon' />
            </div> : ""}
          </div>
        </div>
      </>
    )
  }



  return (
    <section className='Projects' id='Projects'>
      <div className="Content">
          <div className="left">
            <ul>
              {projects.map((project)=>(
                <li key={project.gitlink} onClick={()=>setProject(project)}>
                  {project.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <ProjectDetails />
          </div>
        </div>
    </section>
  )
}

export default Projects
