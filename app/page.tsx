"use client";
import { ReactComponentElement, ReactNode, useState } from "react";
import LangToggle from "./components/reusable/LangToggle";
import styles from "./app.module.css";
import { TechStack } from "./components/app/TechStack";
import AboutMe from "./components/app/AboutMe";
import Image from "next/image";
import MyWorks from "./components/app/MyWorks";
import Footer from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("eng");
  const currentFont = language === "eng" ? "poppins" : "prompt";

  return (
    <main
      className={`bg-[#080716] flex flex-col h-full w-full overflow-y-hidden overflow-x-hidden font-${currentFont} scroll-smooth`}
    >
      <div className="lg:px-24 px-3 py-10 w-full h-full">
        <NavBar>
          <Logo />
          <LangToggle setValue={setLanguage} value={language} />
        </NavBar>
        <Hero language={language} />
        <TechStack language={language} />
        <AboutMe language={language} />
        <MyWorks language={language} />
      </div>
      <Footer />
    </main>
  );
}

const NavBar: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <nav className="flex flex-row justify-between items-center text-white ">{children}</nav>
  );
};

const Logo = () => {
  return (
    <div className="relative">
      <h1 className="lg:text-3xl text-xl font-semibold">Sanfet Coder</h1>
      <span className="bg-red-300 w-[10px] h-[10px] absolute rounded-full right-0 lg:bottom-3 bottom-1/2 translate-x-4"></span>
    </div>
  );
};

const Hero: React.FC<{
  language: string;
}> = ({ language }) => {
  const navigateToFastwork = () => {
    window.location.assign("https://fastwork.co/user/sanfet");
  };

  return (
    <div className="flex lg:flex-row flex-col text-white lg:mt-[7rem] mt-20">
      <Image
        width={500}
        height={500}
        className={`w-[200px] rounded-full p-2 bg-red-400 h-1/2 bg-contain lg:hidden block mx-auto `}
        src="/main/img-profile.jpeg"
        alt=""
      />
      <div className="flex flex-col justify-center lg:w-2/3 w-full my-10 lg:my-0">
        {language === "eng" ? (
          <h1 className="lg:text-4xl text-2xl text-center lg:text-left">
          Hi there <span className={styles.blogTitleEmoji}>👋</span>, I am{" "}
            <span className="text-red-400 font-semibold">
              Sanphet Songjindasak
            </span>
          </h1>
        ) : (
          <h1 className="lg:text-4xl text-2xl text-center lg:text-left font-prompt">
            สวัสดีครับ <span className={styles.blogTitleEmoji}>👋</span>, ผมชื่อ{" "}
            <span className="text-red-400 font-semibold font-prompt">
              สรรเพชญ สงค์จินดาศักดิ์
            </span>
          </h1>
        )}
        <h1
          className={`underline decoration-red-400 decoration-5 text-4xl mt-5 lg:block hidden ${styles.typingContainer}`}
        >
          Full-stack developer
        </h1>
        <h1
          className={`underline decoration-red-400 decoration-5 text-2xl mt-5 lg:hidden block mx-auto ${styles.typingContainerMobile}`}
        >
          Full-stack developer
        </h1>
        <div className="flex flex-row gap-x-10 mt-10">
          <button
            onClick={navigateToFastwork}
            className="btn bg-red-400 border-none text-white text-lg w-[10rem] lg:h-[4rem] h-[3.5rem] rounded-full hover:scale-110 hover:bg-red-400 transition-all"
          >
            {language === "eng" ? "Hire me" : "ว่าจ้าง"}
          </button>
          <a
            href="#myWork"
            className="btn bg-gray-200 text-black rounded-full w-[10rem] lg:h-[4rem] h-[3.5rem] text-lg hover:scale-110 transition-all"
          >
            {language === "eng" ? "My works" : "ผลงาน"}
          </a>
        </div>
      </div>
      <Image
        width={300}
        height={300}
        className={`w-1/3 rounded-full p-2 bg-red-400 h-1/2 bg-contain lg:block hidden ${styles.animationFloating}`}
        src="/main/img-profile.jpeg"
        alt=""
      />
    </div>
  );
};
