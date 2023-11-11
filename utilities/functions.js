//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

const handleDarkMode = (dark, setDark, setIcon) => {
  if (dark === 'dark') {
    setDark('')
    setIcon('🌚')
  } else {
    setDark('dark')
    setIcon('🌞')
  }
}

export { handleDarkMode }
