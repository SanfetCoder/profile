import React, { FC } from "react";

const AboutMe: FC<{
  language: string;
}> = ({ language }) => {
  return (
    <section className="flex lg:flex-row flex-col mt-16 w-full justify-between">
      <ul className="flex flex-col items-start justify-center lg:w-1/2 w-full p-10 gap-y-5">
        <h1 className="text-white text-3xl font-semibold mx-auto lg:mx-0">
          {language === "eng" ? "About Me" : "เกี่ยวกับผม"}
        </h1>
        <p className="text-white text-lg text-center lg:text-left">
          {language === "eng"
            ? "I have an expertise in developing"
            : "ผมมีประสบการณ์การพัฒนา"}{" "}
          <span className="text-red-400 font-semibold">
            Web Application, Mobile Application, Web Scraper, API server
          </span>
          <span>{language === "eng" ? ", and " : "และ "}</span>
          <span>
            <span className="text-red-400 font-semibold">
              AI Machine Learning projects
            </span>{" "}
          </span>
          <span>
            {language === "eng"
              ? "for more than 3 years. Including roblox account selling website, online pharmacy, and tea shop"
              : " มามากกว่า 3 ปีครับ ไม่ว่าจะเป็นโปรเจคขายรหัสเกม Roblox ร้านยาเภสัชกรณ์ออนไลน์ ร้านขายน้ำชา"}
          </span>
        </p>
      </ul>
      <Code />
    </section>
  );
};

const Code = () => {
  return (
    <div className="mockup-code">
      <pre data-prefix="1" className="text-success">
        <code>
          <span className="text-blue-300">class</span>
          {` Sanphet {`}
        </code>
      </pre>
      <pre data-prefix="2" className="text-warning">
        <code>{`  constructor(hobby, age, sports){`}</code>
      </pre>
      <pre data-prefix="3">
        <code>
          <span className="text-blue-300">{`    this`}</span>
          {`.hobby = ['coding'];`}
        </code>
      </pre>
      <pre data-prefix="4">
        <code>
          <span className="text-blue-300">{`    this`}</span>
          {`.age = {age};`}
        </code>
      </pre>
      <pre data-prefix="5">
        <code>
          <span className="text-blue-300">{`    this`}</span>
          {`.sports = ['armwrestling','playing the guitar'];`}
        </code>
      </pre>
      <pre data-prefix="6" className="text-warning">
        <code>{`  }`}</code>
      </pre>
      <pre data-prefix="7" className="text-warning">
        <code>{`  `}</code>
      </pre>
      <pre data-prefix="8" className="text-success">
        <code>{`  speak(){`}</code>
      </pre>
      <pre data-prefix="9">
        <code>{`    console.log('English')`}</code>
      </pre>
      <pre data-prefix="10">
        <code>{`    console.log('Thai')`}</code>
      </pre>
      <pre data-prefix="11">
        <code>{`    console.log('Spanish')`}</code>
      </pre>
      <pre data-prefix="12">
        <code>{`    console.log('Chinese')`}</code>
      </pre>
      <pre data-prefix="13" className="text-success">
        <code>{`  }`}</code>
      </pre>
      <pre data-prefix="14" className="text-success">
        <code>{`}`}</code>
      </pre>
    </div>
  );
};

export default AboutMe;
