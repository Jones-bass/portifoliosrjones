'use client'

import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

interface ProjectCardsProps {
  nameRepor: string
  content: string
  urlRepor: string
  yearRepor: string
}
export default function ProjectCards({
  nameRepor,
  content,
  urlRepor,
  yearRepor,
}: ProjectCardsProps) {
  return (
    <section>
      <div className="flex mt-2">
        <div className="mt-2 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="px-4 grid">
          <h3 className="font-bold text-xl sm:text-1xl  md:text-2xl">
            {nameRepor}
          </h3>
          <span>{content}</span>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href={urlRepor}
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>{yearRepor}</span>
              </p>
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
