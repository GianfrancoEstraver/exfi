import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return (savedTheme === 'dark' || savedTheme === 'light') ? savedTheme : 'light'
  })
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }
  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === 'light' ? '🌙 Oscuro' : '🌞 Claro'}
    </button>
  )
}

export default ThemeToggle