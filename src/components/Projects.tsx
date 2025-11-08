import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'
import type { Project } from '../config/data'

const ProjectCard: FC<{ p: Project }> = ({ p }) => (
  <article className="project-card">
    <div className="project-card-inner">
      <h3>{p.title}</h3>
      <p className="muted">{p.description}</p>
      <div className="tech">
        {p.tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
      <div className="project-actions">
        <a className="btn small" href={p.link}>{content.projects.viewButton}</a>
      </div>
    </div>
  </article>
)

const Projects: FC = () => {
  return (
    <div className="section projects container">
      <h2>{content.projects.title}</h2>
      <div className="projects-grid">
        {data.projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  )
}

export default Projects
