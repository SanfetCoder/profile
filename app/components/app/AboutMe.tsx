import React from 'react'

const age = new Date().getFullYear() - 2001;

const AboutMe = () => {
  return (
    <section className='flex flex-row mt-16 w-1/2'>
      <Code />
    </section>
  )
}

const Code = () => {
  return (
      <div className="mockup-code">
      <pre data-prefix="1" className='text-success'><code><span className='text-blue-300'>class</span>{` Sanphet {`}</code></pre> 
      <pre data-prefix="2" className='text-warning'><code>{`  constructor(hobby, age, sports){`}</code></pre> 
      <pre data-prefix="3"><code><span className='text-blue-300'>{`    this`}</span>{`.hobby = ['coding'];`}</code></pre>
      <pre data-prefix="4"><code><span className='text-blue-300'>{`    this`}</span>{`.age = {age};`}</code></pre>
      <pre data-prefix="5"><code><span className='text-blue-300'>{`    this`}</span>{`.sports = ['armwrestling','playing the guitar'];`}</code></pre>
      <pre data-prefix="6" className='text-warning'><code>{`  }`}</code></pre> 
      <pre data-prefix="7" className='text-warning'><code>{`  `}</code></pre> 
      <pre data-prefix="8" className='text-success'><code>{`  speak(){`}</code></pre> 
      <pre data-prefix="9"><code>{`    console.log('English')`}</code></pre> 
      <pre data-prefix="10"><code>{`    console.log('Thai')`}</code></pre> 
      <pre data-prefix="11"><code>{`    console.log('Spanish')`}</code></pre> 
      <pre data-prefix="12"><code>{`    console.log('Chinese')`}</code></pre> 
      <pre data-prefix="13" className='text-success'><code>{`  }`}</code></pre> 
      <pre data-prefix="14" className='text-success'><code>{`}`}</code></pre>
    </div>
  )
}

export default AboutMe