'use client'

import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi'

export default function Skills() {
  return (
    <section className="p-2 mt-8">
      <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl">
        Habilidades e Conhecimentos
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoReact weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> React</p>
        </span>

        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoNodejs weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> NodeJS</p>
        </span>

        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoJavascript weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> Javascript</p>
        </span>

        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoTypescript weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> Typescrispt</p>
        </span>

        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoPython weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> Phyton</p>
        </span>

        <span className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300">
          <BiLogoTailwindCss weight="thin" aria-label="Jones Souza Instagram" />
          <p className="text-sm sm:text-lg"> TailwindCss</p>
        </span>
      </div>
    </section>
  )
}
