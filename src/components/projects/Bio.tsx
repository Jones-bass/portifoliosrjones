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

import { BiMap } from 'react-icons/bi'

import Link from 'next/link'
import Events from '../event/Events'
import Skills from './skills'

export default function Bio() {
  return (
    <aside className="w-full sm:w-1/1 flex flex-col gap-8 px-5 py-8 bg-slate-900 text-slate-100">
      <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <div className="grid gap-12 py-4">
          <div className="grid gap-x-3 gap-y-3 text-center">
            <img
              src="https://github.com/jones-bass.png"
              className="w-36 h-36 rounded-full justify-self-center"
            />

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Jones Souza
            </h1>
            <h3>DEV JR | FRONT-END | BACK-END</h3>
          </div>
          <div className="grid gap-2">
            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="https://www.google.com/maps/place/Tobias+Barreto,+SE,+49300-000/@-11.191912,-38.0119742,15z/data=!4m15!1m8!3m7!1s0x711b295871e7c03:0x9c50c93853519401!2sTobias+Barreto,+SE,+49300-000!3b1!8m2!3d-11.1851883!4d-38.0005207!16s%2Fg%2F11bxfxz2h3!3m5!1s0x711b295871e7c03:0x9c50c93853519401!8m2!3d-11.1851883!4d-38.0005207!16s%2Fg%2F11bxfxz2h3?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <BiMap className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500" />
                <p className="text-sm sm:text-lg"> Tobias Barreto, SE</p>
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
                <p className="text-sm sm:text-lg"> jonesbass.tb@gmail.com</p>
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
                <p className="text-sm sm:text-lg"> 79 9 9959-1921</p>
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="py-4 items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm">
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
          REDES SOCIAIS
        </h2>
        <div className="grid gap-2 ">
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub height="thin" aria-label="Jones Souza Github" />
              <p className="text-sm sm:text-lg"> jones-bass</p>
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
              <p className="text-sm sm:text-lg"> jonessouza</p>
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
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">BIO</h2>
        <p className="text-justify mb-2 sm:text-lg  md:text-1xl">
          Cursando Análise e Desenvolvimento de Sistemas pela Faculdade Estacio,
          certificados pela Rocketseat, Origamid e a Digital Innovation One, RL
          System, alguns bootcamp de especialização. Buscando uma experiência de
          estágio, junior. Meu foco é em Front-End mas me não deixo de estudar
          Back-End.
        </p>
      </section>

      <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
          FORMAÇÃO
        </h2>

        <div className="grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            Análise e Desenvolvimento de Sistemas
          </h3>
          <span>Faculdade Estacio</span>
          <span>2023 - Cursando</span>
        </div>

        <div className="grid">
          <h3 className="font-bold mt-4 text-xl sm:text-1xl  md:text-2xl">
            Desenvolvimento Front - End e Back - End
          </h3>
          <span>Rocketseat</span>
          <span>2021 - 2023 - Cursando</span>
        </div>
      </section>

      <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
          HABILIDADES ADCIONAIS
        </h2>

        <div className="grid">
          <h3 className="text-xl sm:text-1xl">✔ Adobe Photoshop</h3>
          <h3 className="text-xl sm:text-1xl">✔ Adobe Premiere</h3>
          <h3 className="text-xl sm:text-1xl">✔ Adobe After Effect</h3>
          <h3 className="text-xl sm:text-1xl">✔ Corel Draw</h3>
        </div>
      </section>
      <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
        <Events />
      </section>
      <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
        <Skills />
      </section>
    </aside>
  )
}
