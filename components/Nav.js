import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          mattia<span>.</span>designs
        </Link>
        <ul className="nav__links">
          <li><Link href="/#work">Work</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="mailto:hello@mattiadesigns.com">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}
