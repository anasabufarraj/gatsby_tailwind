//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

import React from 'react'

const Index = () => {
  return (
    <div className={'container mx-auto'}>
      <h1 className={'mb-2 text-5xl'}>Hello! Tailwind CSS</h1>
      <h3 className={'text-3xl text-slate-500'}   >
        Gatsby 5 Project
      </h3>

      {/* peer names */}
      <hr className={'my-3 opacity-30'}/>
      <form className={'py-5'} action={'post'}>
        <fieldset>
          <legend>Published status</legend>

          <input id={'draft'} className={'peer/draft me-2'} type={'radio'} name={'status'} checked readOnly/>
          <label htmlFor={'draft'} className={'peer-checked/draft:text-sky-500 mr-2 cursor-pointer'}>
            Draft
          </label>

          <input id={'published'} className={'peer/published me-2'} type={'radio'} name={'status'}/>
          <label htmlFor={'published'} className={'peer-checked/published:text-sky-500 cursor-pointer'}>
            Published
          </label>

          <p className={'text-slate-500/90 mt-2 hidden peer-checked/draft:block'}>Drafts are only visible to
            administrators.</p>
          <p className={'text-slate-500/90 mt-2 hidden peer-checked/published:block'}>Your post will be publicly visible
            on your site.</p>
        </fieldset>
      </form>

      {/* list markers */}
      <hr className={'my-3 opacity-30'}/>
      <div>
        <ul className={'marker:text-sky-400 list-inside list-decimal space-y-1'}>
          <li>One cup chopped Porcine mushrooms</li>
          <li>Half cup of olive oil</li>
          <li className={'marker:text-rose-400'}>Three lites of celery</li>
        </ul>
      </div>

      {/* dialog */}
      {/*  DOC: It is recommended to use .show() method to render dialogs, rather than the 'open' attribute. */}
      {/*<dialog className={'absolute top-0 z-50 h-full w-full open:bg-slate-900/50 open:supports-[backdrop-filter]:backdrop-blur-sm'} open={true}>*/}
      {/*  <div className={'mx-auto mt-10 h-96 w-96 rounded-xl bg-white p-5 shadow-xl'}>*/}
      {/*    <form method={'dialog'}>*/}
      {/*      /!* DOC: buttons can only close the dialog if method="dialog" is set *!/*/}
      {/*      <legend>Hello HTML5 Dialog!</legend>*/}
      {/*      <button className={'absolute right-5 top-4 text-slate-500'}>Close</button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</dialog>*/}

      {/* reduce motion */}
      <hr className={'my-3 opacity-30'}/>
      {/*<div className={'motion-safe:animate-spin'}>x</div>*/}

      {/* increase contrast */}
      <p className={'text-slate-400 mt-2 text-sm opacity-40 contrast-more:opacity-100'}>We need to steal your
        identity.</p>

      {/* aria states */}
      <hr className={'my-3 opacity-30'}/>
      <div aria-checked={true} className={'aria-checked:bg-sky-500 p-2'}>
        ARIA
      </div>

      {/* data attributes (custom attribute) */}
      <hr className={'my-3 opacity-30'}/>
      <ul className={'space-y-1'}>
        <li data-padding={'large'} className={'bg-sky-500 data-[padding=large]:p-4 data-[padding=normal]:p-2'}>
          Padding Size
        </li>
        <li data-background={true} className={'data-[background=true]:bg-sky-500'}>
          Padding True/False
        </li>
      </ul>

      {/* arbitrary CSS properties */}
      <hr className={'my-3 opacity-30'}/>
      <p className={'text-[color:coral] hover:text-[color:skyblue]'}>Arbitrary CSS Properties</p>
      <p className={'my-1 p-2 text-[color:coral] [border:1px_solid_coral] [opacity:0.5]'}>
        This is like inline styles, but with the benefit that you can use modifiers.
      </p>

      {/* DOC: by default Tailwind converts underscore to whitespace, if you want to keep it, use one of the following */}
      <p className={`after:content-['hello\\_world']`}>Method 1...</p>
      <p className={String.raw`after:content-['hello\_world']`}>Method 2...</p>

      {/* end */}
    </div>
  )
}

export const Head = () => (
  <React.Fragment>
    <html className={'dark scroll-smooth select-none'} dir={'ltr'} lang={'en'}/>
    <title>Hello Gatsby</title>
    <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
    <meta name={'description'} content={'Hello World'}/>
    <link rel={'apple-touch-icon'} href={'/images/icon.png'}/>
  </React.Fragment>
)

export default Index
