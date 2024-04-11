import React, { ReactNode } from 'react'

const Card : React.FC<{
  children : ReactNode
}> = ({children}) => {
  return (
    <div className='flex flex-col items-center bg-white lg:w-1/3 w-5/6 min-h-[300px] lg:min-h-[400px] px-10 py-8 rounded-3xl'>
      {children}
    </div>
  )
}

export default Card