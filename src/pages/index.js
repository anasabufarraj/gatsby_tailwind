//------------------------------------------------------------------------------
// Copyright (c) 2023. Anas Abu Farraj.
//------------------------------------------------------------------------------

import React from 'react'

const Index = () => {
  return (
    <div className={'container mx-auto'}>
      <h1 className={'text-4xl mb-2 '}>Hello! Gatsby</h1>
      <h3 className={'text-xl text-slate-500'}>
        Using Tailwind CSS
      </h3>

      {/* DOC: Peer Names */}
      <hr className={'my-3 opacity-30'}/>
      <form className={'py-5'} action={'post'}>
        <fieldset>
          <legend>Published status</legend>

          <input id={'draft'} className={'peer/draft me-2'} type={'radio'} name={'status'} checked readOnly/>
          <label htmlFor={'draft'} className={'peer-checked/draft:text-sky-500 mr-2'}>
            Draft
          </label>

          <input id={'published'} className={'peer/published me-2'} type={'radio'} name={'status'}/>
          <label htmlFor={'published'} className={'peer-checked/published:text-sky-500'}>
            Published
          </label>

          <p className={'text-slate-500/90 mt-2 hidden peer-checked/draft:block'}>Drafts are only visible to
            administrators.</p>
          <p className={'text-slate-500/90 mt-2 hidden peer-checked/published:block'}>Your post will be publicly visible
            on your site.</p>
        </fieldset>
      </form>

      {/* DOC: List Markers */}
      <hr className={'my-3 opacity-30'}/>
      <div>
        <ul className={'marker:text-sky-400 list-inside list-decimal space-y-1'}>
          <li>One cup chopped Porcine mushrooms</li>
          <li>Half cup of olive oil</li>
          <li className={'marker:text-rose-400'}>Three lites of celery</li>
        </ul>
      </div>

      {/* DOC: Dialog */}
      {/* buttons can only close the dialog if method="dialog" is set */}
      {/* It is recommended to use a .show() method to render dialogs, rather than the 'open' attribute.*/}
      {/*<dialog*/}
      {/*  className={'absolute top-0 z-50 h-full w-full open:bg-black/60 open:supports-[backdrop-filter]:backdrop-blur-sm'}*/}
      {/*  open={true}>*/}
      {/*  <div className={'mx-auto mt-10 h-96 w-auto rounded-xl bg-white p-5 mx-24 shadow-xl'}>*/}
      {/*    <form method={'dialog'}>*/}
      {/*      <legend>Hello HTML5 Dialog!</legend>*/}
      {/*      <button className={'absolute right-5 top-4 text-slate-500'}>Close</button>*/}
      {/*    </form>*/}
      {/*  </div>*/}
      {/*</dialog>*/}

      {/* DOC: Reduce Motion */}
      {/*<div className={'motion-safe:animate-spin'}>x</div>*/}

      {/* DOC: Increase Contrast */}
      <p className={'text-slate-400 mt-2 text-sm opacity-40 contrast-more:opacity-100'}>We need to steal your
        identity.
      </p>

      {/* DOC: Aria States */}
      <hr className={'my-3 opacity-30'}/>
      <div aria-checked={true} className={'aria-checked:bg-sky-500 p-2'}>
        ARIA Checked
      </div>

      {/* DOC: Data Attributes (custom attribute) */}
      <hr className={'my-3 opacity-30'}/>
      <ul className={'space-y-1'}>
        <li data-padding={'large'} className={'bg-sky-500 data-[padding=large]:p-4 data-[padding=normal]:p-2'}>
          Padding Size
        </li>
        <li data-background={true} className={'data-[background=true]:bg-sky-500'}>
          Padding True/False
        </li>
      </ul>

      {/* DOC: Arbitrary CSS Properties */}
      <hr className={'my-3 opacity-30'}/>
      <p className={'text-[color:coral] hover:text-[color:skyblue]'}>Arbitrary CSS Properties</p>
      <p className={'my-1 p-2 text-[color:coral] [border:1px_solid_coral] [opacity:0.5]'}>
        This is like inline styles, but with the benefit that you can use modifiers.
      </p>

      {/* DOC: Escaping */}
      {/* By default, Tailwind converts underscore to whitespace, if you want to keep it, use double escaping */}
      {/* Or use the String.raw method */}
      <p className={`after:content-['Hello_World']`}>01. </p>
      <p className={`after:content-['Hello\\_World']`}>02. </p>
      <p className={String.raw`after:content-['Hello\_World']`}>03. </p>

      {/* DOC: Break-After- / Break-before- */}
      <div className="columns-2">
        <p className={'border'}>This is a paragraph of text that will be broken into two columns.</p>
        <p className={'break-after-column border border-red-500'}>This is another paragraph of text.</p>
        <p className={'border'}>This is the third paragraph of text.</p>
        <p className={'border'}>This is the fourth paragraph of text.</p>
        <p className=" border">This is the fifth paragraph of text.</p>
        <p className={'border'}>This is the sixth paragraph of text, and it will also be broken into two columns.</p>
      </div>

      {/* DOC: Box Decoration */}
      <span
        className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8">This is<br/>the default</span><br/>
      <span
        className="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-8">Hello<br/>World</span>

      {/* DOC: Contents */}
      <div className="flex gap-2">
        <div className="flex-1 bg-pink-500">01</div>
        <div className="contents">
          <div className="flex-1 bg-pink-500">02</div>
          <div className="flex-1 bg-pink-500">03</div>
        </div>
        <div className="flex-1 bg-pink-500">04</div>
      </div>

      <div className="p-4 border">
        <div className="flow-root border">
          <div className="my-4">Well, let me tell you something, funny boy. Y'know that little stamp, the one that says
            "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole
            hell of a lot.
          </div>
        </div>
        <div className="flow-root border">
          <div className="my-4">Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the
            scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink
            about old library books? Well, let me give you a hint, junior.
          </div>
        </div>
      </div>


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
