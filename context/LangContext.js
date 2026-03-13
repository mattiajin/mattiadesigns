// [UPDATED] New file — language context for bilingual support
import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('en')

  // [UPDATED] Restore language preference from localStorage
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('md-lang') : null
    if (saved === 'en' || saved === 'zh') setLangState(saved)
  }, [])

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('md-lang', l)
    // [UPDATED] Update html lang attribute for SEO/accessibility
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en'
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

// Helper hook
export function useLang() {
  return useContext(LangContext)
}

// Helper: get the right string from a {en, zh} object
export function t(obj, lang) {
  if (!obj) return ''
  if (typeof obj === 'string') return obj
  return obj[lang] || obj['en'] || ''
}
