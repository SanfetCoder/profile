import React from 'react'

const LangToggle = ({value, options, setValue}) => {

  const handleToggle = () => {
    if (value === options[0]) setValue(options[1]);
    if (value === options[1]) setValue(options[0]);
  }

  return (
    <button onClick={handleToggle} className=" relative border-solid border-2 border-red-400 w-[6rem] h-[3rem] rounded-full">
      <div className='flex flex-row items-center justify-between px-1.5'>
        {value === options[0] && <p className='w-1/2 absolute'>{value}</p>}
        <span className={`flex translate-x-[${value === options[0] ? '45' : '0'}px] justify-center items-center ${value === options[0] ? 'bg-[url("https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png")]' : 'bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png")]'} bg-cover w-[2rem] h-[2rem] rounded-full transition-all`}></span>
        {value === options[1] && <p className='w-1/2 absolute right-0'>{value}</p>}
      </div>
    </button>
  )
}

export default LangToggle