import React from 'react'

const certif = [
  {
    "name":"Agile Dev and Scrum",
    "link":"https://www.coursera.org/account/accomplishments/verify/72GHYLRRCS72"
  },
  {
    "name":"node js express",
    "link":"https://www.coursera.org/account/accomplishments/verify/UCKAJCX59WGC"
  }
]


function Certification() {
  return (
    <section id='Certif' className='Certification'>
      <div className="Content">
        <div className="title">
          My Certifications
        </div>
        <div className="certifs">
          {certif.map((certification)=>(
            <div className="certif">{certification.name}
              <div className="preview"><a href={certification.link} target='_blank'>Preview</a></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification
