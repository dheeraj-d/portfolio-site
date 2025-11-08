import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'

const Experience: FC = () => {
  return (
    <div className="section experience container">
  <h2>{content.experience.title}</h2>
      <div className="experience-list">
  {data.experience.map((e) => (
          <div key={e.id} className="experience-item">
            <div className="exp-left">
              <strong>{e.role}</strong>
              <div className="muted">{e.company}</div>
            </div>
            <div className="exp-right">
              <div className="muted">{e.date}</div>
              <ul>
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
