import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'

const Hero: FC = () => {
  return (
    <div className="section hero container">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">{data.name}</h1>
          <p className="hero-subtitle">{data.title}</p>
          <p className="hero-summary">{data.summary}</p>
          <div className="hero-ctas">
            {/* Use the download attribute so clicking downloads the resume from the public assets folder */}
            <a className="btn primary" href={data.resume} download="Dheeraj_Duggempudi_Resume.pdf">{content.hero.ctaResume}</a>
            <a className="btn ghost" href="#projects">{content.hero.ctaProjects}</a>
          </div>
        </div>

        <div className="hero-image" aria-hidden>
          <div className="avatar">
            <img 
              // src="/assets/dhee-profile.jpg" 
              alt="Dheeraj Duggempudi" 
              className="avatar-img"
              width="120"
              height="120"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
