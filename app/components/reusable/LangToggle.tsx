import { transform } from 'next/dist/build/swc';
import React from 'react'

const LangToggle : React.FC<{
  value : string,
  setValue : (value : string) => void
}>
 = ({value, setValue}) => {

  const handleToggle = () => {
    if (value === 'th') setValue('eng');
    if (value === 'eng') setValue('th');
  }

  return (
    <button onClick={handleToggle} className=" relative border-solid lg:border-[3px] border-[2px] border-red-400 w-[6rem] lg:h-[3rem] h-[2.8rem] rounded-full">
      <div className='flex flex-row items-center justify-between px-1.5'>
        {value === 'eng' && <p className='w-1/2 absolute'>{value}</p>}
        <span
         style={{transform : `translateX(${value === 'eng' ? '45' : '0'}px)`}}
         className={`flex justify-center items-center ${value === 'eng' ? 'bg-[url("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png")]' : 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png")]'} bg-cover w-[2rem] h-[2rem] rounded-full transition-all`}></span>
        {value === 'th' && <p className='w-1/2 absolute right-0'>{value}</p>}
      </div>
    </button>
  )
}

export default LangToggle