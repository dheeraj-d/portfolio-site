import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'

const Contact: FC = () => {
  return (
    <div className="section contact container">
      <h2>{content.contact.title}</h2>
      <p>{content.contact.prompt}</p>
      <div className="contact-grid">
        <div>
          <a className="btn primary" href={`mailto:dheeraj.duggempudi@gmail.com`}>{content.contact.emailButton}</a>
        </div>
        <div className="social-links muted">
          <span className="muted">{content.contact.socialPrefix}</span> &nbsp;
          {/* <a href={data.social.github} target="_blank" rel="noreferrer">GitHub</a> */}
          <a href={data.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          {/* <a href={data.social.twitter} target="_blank" rel="noreferrer">Twitter</a> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
