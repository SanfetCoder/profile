'use client';
import { useState } from "react"
import LangToggle from "./components/reusable/LangToggle";
import styles from './app.module.css';

export default function Home() {
  const [language, setLanguage] = useState('en');

  return (
    <main className="bg-[#080716] h-screen w-screen px-24 py-10">
      <NavBar>
        <Logo />
        <LangToggle setValue={setLanguage} options={['en','th']} value={language}/>
      </NavBar>
      <Hero language={language}/>
    </main>
  )
}

const NavBar = ({children}) => {
  return (
    <nav className="flex flex-row justify-between text-white ">
      {children}
    </nav>
  )
}

const Logo = () => {
  return (
    <div className="relative">
      <h1 className="text-3xl font-semibold">Sanphet</h1>
      <span className="bg-red-300 w-[10px] h-[10px] absolute rounded-full right-0 bottom-3 translate-x-4"></span>
    </div>

  )
}

const Hero = ({language}) => {
  return (
    <div className="flex flex-row text-white mt-[7rem]">
      <div className="flex flex-col justify-center w-2/3">
        {language === 'en' ?
          <h1 className="text-4xl">Hi there <span className={styles.blogTitleEmoji}>👋</span>, I am <span className="text-red-400 font-semibold">Sanphet Songjindasak</span></h1>
        :
          <h1 className="text-4xl">สวัสดีครับ <span className={styles.blogTitleEmoji}>👋</span>, ผมชื่อ <span className="text-red-400 font-semibold">สรรเพชญสงค์จินดาศักดิ์</span></h1>
        }
        <h1 className="underline decoration-red-400 decoration-5 text-4xl mt-5">Full-stack developer</h1>
        <div className="flex flex-row gap-x-10 mt-10">
          <button className="btn bg-red-400 border-none text-white text-lg w-[10rem] h-[4rem] rounded-full hover:scale-110 hover:bg-red-400 transition-all">{language === 'en' ? 'Hire me' : 'ว่าจ้าง'}</button>
          <button className="btn bg-gray-200 text-black rounded-full w-[10rem] h-[4rem] text-lg hover:scale-110 transition-all">{language === 'en' ? 'My works' : 'ผลงาน'}</button>
        </div> 
      </div>
      <img className="w-1/3 rounded-full p-2 bg-red-400 h-1/2 bg-contain" src="https://avatars.githubusercontent.com/u/118830176?v=4" alt="" />
    </div>
  )
}


