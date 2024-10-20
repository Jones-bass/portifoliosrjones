/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client'

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

import Link from 'next/link'
import Events from '../event/Events'

import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiMap,
  BiLogoAngular,
  BiLogoDocker,
  BiLogoJava,
} from 'react-icons/bi'
import Skills, { Skill } from '../skills'
import Background from '../Background'

const skillsData: Skill[] = [
  { name: 'React', icon: BiLogoReact },
  { name: 'Angular', icon: BiLogoAngular },
  { name: 'JavaScript', icon: BiLogoJavascript },
  { name: 'TypeScript', icon: BiLogoTypescript },
  { name: 'Python', icon: BiLogoPython },
  { name: 'TailwindCSS', icon: BiLogoTailwindCss },
  { name: 'Docker', icon: BiLogoDocker },
  { name: 'NodeJS', icon: BiLogoNodejs },
  { name: 'Java', icon: BiLogoJava },
]

interface Habilidades {
  habil: string
}

interface Education {
  titleEducation: string
  institution: string
  period: string
}

interface propsBio {
  name: string
  titleDEV: string
  nameGit: string
  nameLinkedin: string
  city: string
  email: string
  phone: string
  description: string
  education: Education[]
  habilidades: Habilidades[]
}

export default function BioCard({
  name,
  nameGit,
  nameLinkedin,
  titleDEV,
  city,
  email,
  phone,
  description,
  education,
  habilidades,
}: propsBio) {
  return (
    <>
      <Background />
      <aside className="w-full sm:w-1/1 flex flex-col gap-8 px-4 py-8 bg-slate-900 text-zinc-300 ">
        <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm relative z-10">
          <div className="grid gap-12 py-4">
            <div className="grid gap-x-3 gap-y-3 text-center">
              <img
                src="https://github.com/jones-bass.png"
                className="w-36 h-36 rounded-full justify-self-center"
              />

              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {name}
              </h1>
              <h3>{titleDEV}</h3>
            </div>
            <div className="grid gap-2 text-gray-500">
              <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
                <Link
                  href="https://www.google.com/maps/place/Tobias+Barreto,+SE,+49300-000/@-11.191912,-38.0119742,15z/data=!4m15!1m8!3m7!1s0x711b295871e7c03:0x9c50c93853519401!2sTobias+Barreto,+SE,+49300-000!3b1!8m2!3d-11.1851883!4d-38.0005207!16s%2Fg%2F11bxfxz2h3!3m5!1s0x711b295871e7c03:0x9c50c93853519401!8m2!3d-11.1851883!4d-38.0005207!16s%2Fg%2F11bxfxz2h3?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-center items-center gap-2"
                >
                  <BiMap className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500" />
                  <p className="text-sm sm:text-lg"> {city}</p>
                </Link>
              </span>
              <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
                <Link
                  href="mailto:jonesbass.tb@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-center items-center gap-2"
                >
                  <AiOutlineMail aria-label="Jones Souza Email" />
                  <p className="text-sm sm:text-lg"> {email}</p>
                </Link>
              </span>
              <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
                <Link
                  href="https://wa.me/5579999591921"
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-center items-center gap-2"
                >
                  <AiOutlineWhatsApp aria-label="Jones Souza Whatsapp" />
                  <p className="text-sm sm:text-lg"> {phone}</p>
                </Link>
              </span>
            </div>
          </div>
        </section>

        <section className="py-4 items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm">
          <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
            REDES SOCIAIS
          </h2>
          <div className="grid gap-2 text-gray-500">
            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="https://github.com/Jones-bass"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <AiOutlineGithub
                  height="thin"
                  aria-label="Jones Souza Github"
                />
                <p className="text-sm sm:text-lg"> {nameGit}</p>
              </Link>
            </span>
            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="https://www.linkedin.com/in/jonessouza/"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <AiOutlineLinkedin aria-label="Jones Souza Linkedin" />
                <p className="text-sm sm:text-lg"> {nameLinkedin}</p>
              </Link>
            </span>

            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="https://www.instagram.com/jonesbass_/"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <AiOutlineInstagram aria-label="Jones Souza Instagram" />
                <p className="text-sm sm:text-lg"> jonesbass_</p>
              </Link>
            </span>
          </div>
        </section>

        <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
          <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
            BIO
          </h2>
          <p className="text-justify mb-2 sm:text-lg  md:text-1xl text-gray-500">
            {description}
          </p>
        </section>

        <section className="items-center gap-4 rounded-lg border border-zinc-300 px-5 py-6 shadow-sm">
          <h2 className="font-bold mb-4 text-xl sm:text-2xl md:text-3xl">
            FORMAÇÃO
          </h2>

          {education.map((item) => (
            <div className="mb-6" key={item.institution}>
              <h3 className="font-bold mb-1 text-lg sm:text-xl md:text-2xl">
                {item.titleEducation}
              </h3>
              <span className="block text-base sm:text-lg md:text-xl text-gray-500">
                {item.institution}
              </span>
              <span className="block text-sm sm:text-base md:text-lg text-gray-700">
                {item.period}
              </span>
            </div>
          ))}
        </section>

        <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
          <h2 className="font-bold mb-2 text-xl sm:text-2xl md:text-3xl">
            HABILIDADES ADCIONAIS
          </h2>

          {habilidades.map((index) => (
            <div key={index.habil}>
              <h3 className="text-xl sm:text-1xl block sm:text-lg md:text-xl text-gray-500">
                {index.habil}
              </h3>
            </div>
          ))}
        </section>

        <Events title="Eventos" />
        <Skills
          titleHabilidades="Minhas Habilidades"
          habilidades={skillsData}
        />
      </aside>
    </>
  )
}
