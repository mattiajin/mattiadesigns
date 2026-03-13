// [UPDATED] Back to top button — appears after scrolling 300px
import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { lang } = useLang()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={lang === 'zh' ? '回到顶部' : 'Back to top'}
    >
      ↑
    </button>
  )
}
