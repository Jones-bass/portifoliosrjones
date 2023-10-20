'use client'

import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Events() {
  return (
    <section className="p-2">
      <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl">
        Eventos
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="py-2">
          <h3 className="text-xl sm:text-1xl  md:text-2xl">nlw-IA</h3>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/nlw-IA"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">Repositório</span>
            </Link>
          </span>
        </div>

        <div className="py-2">
          <h3 className="text-xl sm:text-1xl  md:text-2xl">SpacetimeNlw-</h3>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/SpacetimeNlw-"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">Repositório</span>
            </Link>
          </span>
        </div>

        <div className="py-2">
          <h3 className="text-xl sm:text-1xl  md:text-2xl">letmeask-app</h3>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/letmeask-app"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">Repositório</span>
            </Link>
          </span>
        </div>

        <div className="py-2">
          <h3 className="text-xl sm:text-1xl  md:text-2xl">
            nlwcoparocketseat
          </h3>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/nlwcoparocketseat"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">Repositório</span>
            </Link>
          </span>
        </div>

        <div className="py-2">
          <h3 className="text-xl sm:text-1xl  md:text-2xl">heatdowhile</h3>

          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href="https://github.com/Jones-bass/heatdowhile"
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <GithubLogo weight="thin" aria-label="Jones Souza Github" />

              <span className="text-sm sm:text-lg">Repositório</span>
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
