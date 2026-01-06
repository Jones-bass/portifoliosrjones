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
  BiLogoPython,
  BiLogoReact,
  BiData,
  BiLogoTypescript,
  BiMap,
  BiLogoAngular,
} from 'react-icons/bi'

import Skills, { Skill } from '../skills'
import Background from '../Background'

const skillsData: Skill[] = [
  { name: 'React', icon: BiLogoReact },
  { name: 'Angular', icon: BiLogoAngular },
  { name: 'JavaScript', icon: BiLogoJavascript },
  { name: 'TypeScript', icon: BiLogoTypescript },
  { name: 'Python', icon: BiLogoPython },
  { name: 'SQL', icon: BiData },
]

interface Habilidades {
  habil: string
}

interface Education {
  titleEducation: string
  institution: string
  period: string
}

interface PropsBio {
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
}: PropsBio) {
  return (
    <>
      <Background />

      <aside className="w-full flex flex-col gap-8 px-4 py-8 bg-slate-900 text-zinc-300">
        {/* PERFIL */}
        <section className="rounded-lg border border-zinc-700 px-4 py-6 shadow-sm">
          <div className="grid gap-10">
            <div className="grid gap-3 text-center">
              <img
                src="https://github.com/jones-bass.png"
                className="w-36 h-36 rounded-full justify-self-center border border-zinc-700"
              />

              <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                {name}
              </h1>
              <h3 className="text-zinc-400 text-base sm:text-lg">
                {titleDEV}
              </h3>
            </div>

            <div className="grid gap-3 text-zinc-400">
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <BiMap className="text-lg" />
                <span className="text-sm sm:text-base">{city}</span>
              </Link>

              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <AiOutlineMail className="text-lg" />
                <span className="text-sm sm:text-base">{email}</span>
              </Link>

              <Link
                href="https://wa.me/5579999591921"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-violet-400 transition-colors"
              >
                <AiOutlineWhatsApp className="text-lg" />
                <span className="text-sm sm:text-base">{phone}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* REDES SOCIAIS */}
        <section className="rounded-lg border border-zinc-700 px-4 py-6 shadow-sm">
          <h2 className="font-semibold tracking-wide mb-4 text-lg sm:text-xl">
            REDES SOCIAIS
          </h2>

          <div className="grid gap-3 text-zinc-400">
            <Link
              href="https://github.com/Jones-bass"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <AiOutlineGithub className="text-lg" />
              <span>{nameGit}</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/jonessouza/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <AiOutlineLinkedin className="text-lg" />
              <span>{nameLinkedin}</span>
            </Link>

            <Link
              href="https://www.instagram.com/jonesbass_/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-violet-400 transition-colors"
            >
              <AiOutlineInstagram className="text-lg" />
              <span>jonesbass_</span>
            </Link>
          </div>
        </section>

        {/* BIO */}
        <section className="rounded-lg border border-zinc-700 px-3 py-4 shadow-sm">
          <h2 className="font-semibold tracking-wide mb-3 text-lg sm:text-xl">
            BIO
          </h2>
          <p className="text-zinc-400 leading-relaxed tracking-wide text-justify text-sm sm:text-base">
            {description}
          </p>
        </section>


        {/* FORMAÇÃO */}
        <section className="rounded-lg border border-zinc-700 px-3 py-4 shadow-sm">
          <h2 className="font-semibold tracking-wide mb-4 text-lg sm:text-xl">
            FORMAÇÃO
          </h2>

          {education.map((item) => (
            <div key={item.institution} className="mb-3">
              <h3 className="font-medium text-base sm:text-lg text-zinc-200 leading-snug">
                {item.titleEducation}
              </h3>
              <span className="block text-sm text-zinc-400 leading-snug">
                {item.institution}
              </span>
              <span className="block text-xs text-zinc-500 leading-snug">
                {item.period}
              </span>
            </div>
          ))}
        </section>


        <section className="rounded-lg border border-zinc-700 px-3 py-4 shadow-sm">
          <h2 className="font-semibold tracking-wide mb-3 text-lg sm:text-xl">
            HABILIDADES ADICIONAIS
          </h2>

          <div className="grid gap-1">
            {habilidades.map((item) => (
              <span
                key={item.habil}
                className="text-sm text-zinc-400 tracking-wide"
              >
                {item.habil}
              </span>
            ))}
          </div>
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
