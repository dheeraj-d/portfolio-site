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
            {/* Replace with your image in /public or assets */}
            <svg viewBox="0 0 120 120" className="avatar-svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="56" fill="url(#g)" />
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontSize="28" fill="#fff">FL</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
