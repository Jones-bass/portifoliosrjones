'use client'

import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface RepositoryItemPropos {
  name: string
  language: string
  html_url: string
  created_at: string
}

interface RepositoryProps {
  repository: RepositoryItemPropos
}

export default function ProjectCards({ repository }: RepositoryProps) {
  const formattedDate = format(new Date(repository.created_at), 'MMMM yyyy', {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
    locale: ptBR,
  })

  return (
    <section>
      <div className="flex mt-2">
        <div className="mt-2 pr-3">
          <span className="absolute inline-block w-4 h-4 bg-slate-300 rounded-full"></span>
          <span className="block w-1 h-[115%] bg-slate-300 transform translate-x-1.5"></span>
        </div>
        <div className="flex-1 px-4">
          <h3 className="font-bold text-xl sm:text-2xl mb-1">
            {repository.name}
          </h3>
          <div className="flex items-center mb-2">
            <h4 className="text-md mr-2">Linguagem: {repository.language}</h4>
            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
          <span className="flex cursor-pointer text-xl sm:text-2xl hover:text-violet-500">
            <Link
              href={repository.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex text-center items-center gap-2"
            >
              <AiOutlineGithub size={20} aria-label="Jones Souza Github" />
              <p className="text-lg">
                <span>{repository.name}</span>
              </p>
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
