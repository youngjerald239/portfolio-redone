import React, { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

const STORAGE_KEY = 'theme-preference'

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch (_) {}
  // Fallback to prefers-color-scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'
  }
  return 'dark'
}

export default function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (_) {}
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      aria-pressed={theme === 'light'}
      onClick={toggle}
      className={`theme-toggle ${className}`}
    >
      {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
    </button>
  )
}
