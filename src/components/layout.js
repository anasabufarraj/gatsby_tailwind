//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

import React, { useState } from 'react'
import { handleDarkMode } from '../../utilities/functions'

const Layout = ({ children }) => {
  const isDark = typeof window !== 'undefined' || window.matchMedia('(prefers-color-scheme: dark)').matches

  const [dark, setDark] = useState(isDark ? 'dark' : '')
  const [icon, setIcon] = useState(isDark ? '🌞' : '🌚')

  return (
    <div className={`${dark ? 'dark:bg-slate-900 dark:text-slate-100' : ''} min-h-screen px-6 py-8 duration-300`}>
      <button className={'absolute right-5 text-2xl duration-300 active:opacity-90'} onClick={() => handleDarkMode(dark, setDark, setIcon)}>
        {icon}
      </button>
      {children}
      <small className={'absolute bottom-5 opacity-40'}>© Copyright 2023</small>
    </div>
  )
}

export default Layout
