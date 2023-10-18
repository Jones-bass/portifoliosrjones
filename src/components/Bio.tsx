/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client'

import {
  Envelope,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  WhatsappLogo,
} from '@phosphor-icons/react'

import Link from 'next/link'

export default function Bio() {
  return (
    <div className="bg-slate-900 text-slate-100">
      <section className="relative">
        <div className="grid gap-12 py-4 px-4">
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
                <MapPin
                  weight="thin"
                  className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
                />
                <p className="text-lg"> Tobias Barreto, SE</p>
              </Link>
            </span>
            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="mailto:jonesbass.tb@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <Envelope weight="thin" aria-label="Jones Souza Email" />
                <p className="text-lg"> jonesbass.tb@gmail.com</p>
              </Link>
            </span>
            <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
              <Link
                href="https://wa.me/5579999591921"
                target="_blank"
                rel="noreferrer"
                className="flex text-center items-center gap-2"
              >
                <WhatsappLogo weight="thin" aria-label="Jones Souza Whatsapp" />
                <p className="text-lg"> 79 9 9959-1921</p>
              </Link>
            </span>
          </div>
        </div>
      </section>

      <section className="py-4 px-4">
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
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />
              <p className="text-lg"> jones-bass</p>
            </Link>
          </span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://www.linkedin.com/in/jonessouza/"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <LinkedinLogo weight="thin" aria-label="Jones Souza Linkedin" />
              <p className="text-lg"> jonessouza</p>
            </Link>
          </span>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://www.instagram.com/jonesbass_/"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <InstagramLogo weight="thin" aria-label="Jones Souza Instagram" />
              <p className="text-lg"> jonesbass_</p>
            </Link>
          </span>
        </div>
      </section>

      <section className="py-4 px-4">
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">BIO</h2>
        <p className="text-justify">
          Cursando Análise e Desenvolvimento de Sistemas pela Faculdade Estacio,
          certificados pela Rocketseat, Origamid e a Digital Innovation One, RL
          System, alguns bootcamp de especialização. Buscando uma experiência de
          estágio, junior. Meu foco é em Front-End mas me não deixo de estudar
          Back-End.
        </p>
      </section>

      <section className="py-4 px-4">
        <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
          FORMAÇÃO
        </h2>

        <div className="flex mt-1">
          <div className="mt-1 pr-3">
            <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
            <span className="block w-1 h-[110%] bg-slate-300 transform translate-x-1.5"></span>
          </div>

          <div className="px-4 grid">
            <h3 className="font-bold mb-4 text-xl sm:text-1xl  md:text-2xl">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <span>Faculdade Estacio</span>
            <span>2023 - Cursando</span>
          </div>
        </div>

        <div className="flex mt-1">
          <div className="mt-1.5 pr-3">
            <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
            <span className="block w-1 h-[110%] bg-slate-300 transform translate-x-1.5"></span>
          </div>

          <div className="px-4 grid">
            <h3 className="font-bold mb-4 text-xl sm:text-1xl  md:text-2xl">
              Desenvolvimento Front - End e Back - End
            </h3>
            <span>Rocketseat</span>
            <span>2021 - 2023 - Cursando</span>
          </div>
        </div>
      </section>
    </div>
  )
}
