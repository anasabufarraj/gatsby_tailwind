//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

import React from 'react'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <div className={'container'}>
      <h1 className={'mb-2 text-5xl'}>Page not found</h1>
      <p className={'text-slate-500'}>
        <Link to={'/'} className={'cursor-pointer duration-300 hover:text-rose-500/75'}>
          Go Home
        </Link>
      </p>
    </div>
  )
}

export default Index

export const Head = () => (
  <React.Fragment>
    <html className={'scroll-smooth'} lang={'en'} />
    <title>Page not found</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name={'description'} content={'Hello World'} />
    <link rel={'apple-touch-icon'} href={'/images/icon.png'} />
  </React.Fragment>
)
