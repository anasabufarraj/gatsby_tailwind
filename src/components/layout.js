//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

import React, {useState, useEffect} from 'react'

const Layout = ({children}) => {
  const [dark, setDark] = useState(false)
  const [icon, setIcon] = useState('🌚')

  useEffect(() => {
    const browser = typeof window !== 'undefined'
    const isDark = browser && window.matchMedia('(prefers-color-scheme: dark)').matches

    setDark(isDark)
    setIcon(isDark ? '🌞' : '🌚')
  }, [])

  const toggleDarkMode = () => {
    setDark((mode) => !mode)
    setIcon((icon) => (icon === '🌚' ? '🌞' : '🌚'))
  }

  return (
    <div className={`${dark ? 'dark:bg-slate-900 dark:text-slate-100' : ''} min-h-screen px-6 py-8 duration-300`}>
      <button className={'absolute right-5 text-2xl active:opacity-90'}
              onClick={() => toggleDarkMode(dark, setDark, setIcon)}>
        {icon}
      </button>
      {children}
      <small className={'absolute bottom-5 opacity-40'}>© Copyright 2023</small>
    </div>
  )
}

export default Layout
