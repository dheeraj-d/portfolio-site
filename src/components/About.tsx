import type { FC } from 'react'
import { content } from '../config/content'

const About: FC = () => {
  return (
    <div className="section about container">
      <h2>{content.about.title}</h2>
      <div className="about-grid">
        <div className="about-text">
          {content.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about-stats">
          {content.about.stats.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
