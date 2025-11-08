import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'

const Skills: FC = () => {
  return (
    <div className="section skills container">
      <h2>{content.skills.title}</h2>
      <div className="skills-grid">
  {data.skills.map((s) => (
          <div key={s.name} className="skill">
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
