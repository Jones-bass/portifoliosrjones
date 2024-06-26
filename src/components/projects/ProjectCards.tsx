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
  description: string
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
      <div className="flex mt-4">
        <div className="flex-1">
          <div className="flex-1 px-4 py-1 bg-slate-800 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl sm:text-2xl mb-1 text-zinc-200">
              {repository.name}
            </h3>
            <span className="text-gray-300">{repository.description}</span>

            <div className="flex items-center mb-1">
              <h4 className="text-md mr-2 text-gray-300">
                Linguagem: {repository.language}
              </h4>
              <span className="text-sm text-gray-500">{formattedDate}</span>
            </div>
            <span className="mb-2 flex cursor-pointer text-xl sm:text-2xl text-gray-400 hover:text-violet-500">
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
      </div>
    </section>
  )
}
