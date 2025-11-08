import type { FC } from 'react'
import { content } from '../config/content'
import { data } from '../config/data'

const Footer: FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
  <div className="muted">© {new Date().getFullYear()} {data.name}</div>
        <div className="muted">{content.footer.left}</div>
      </div>
    </footer>
  )
}

export default Footer
