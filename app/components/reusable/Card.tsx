import React, { ReactNode } from 'react'

const Card : React.FC<{
  children : ReactNode
}> = ({children}) => {
  return (
    <div className='flex flex-col items-center bg-white w-1/3 px-10 py-8 rounded-3xl'>
      {children}
    </div>
  )
}

export default Card