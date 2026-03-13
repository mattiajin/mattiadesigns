// [UPDATED] Footer reads from content.json, dynamic year, social links, bilingual
import { useLang, t } from '../context/LangContext'
import content from '../content.json'

const footerLabels = {
  connect: { en: 'Connect', zh: '联系方式' },
  work:    { en: 'Work',    zh: '作品' },
  about:   { en: 'About',   zh: '关于' },
  resume:  { en: 'Resume',  zh: '简历' },
}

export default function Footer() {
  const { lang } = useLang()
  // [UPDATED] Dynamic copyright year
  const year = new Date().getFullYear()
  // [UPDATED] Only enabled social platforms
  const socials = content.social.filter(s => s.enabled)
  // [UPDATED] Email obfuscated — assembled in JS, not in HTML
  const handleEmail = () => {
    const e = content.person.email
    window.location.href = `mailto:${e}`
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            {/* [UPDATED] Dynamic year */}
            <p className="footer__copy">© {year} Mattia Jin — mattiadesigns</p>
            <ul className="footer__site-links">
              <li><a href="/#work">{t(footerLabels.work, lang)}</a></li>
              <li><a href="/about">{t(footerLabels.about, lang)}</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">{t(footerLabels.resume, lang)}</a></li>
              {/* [UPDATED] Email assembled in JS — not raw in HTML */}
              <li><button onClick={handleEmail} style={{background:'none',border:'none',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--color-ink-mid)',padding:0,transition:'color 0.15s ease'}} onMouseOver={e=>e.target.style.color='var(--color-ink-black)'} onMouseOut={e=>e.target.style.color='var(--color-ink-mid)'}>Email</button></li>
            </ul>
          </div>
          {socials.length > 0 && (
            <div className="footer__right">
              <p className="footer__social-label">{t(footerLabels.connect, lang)}</p>
              <ul className="footer__social-links">
                {socials.map(s => (
                  <li key={s.platform}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">{s.platform}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
