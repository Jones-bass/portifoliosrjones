import Link from 'next/link'
import { AiOutlineGithub } from 'react-icons/ai'

interface EventInfoProps {
  urlRepor: string
  nameRepor: string
  repor: string
}

export function EventCard({ nameRepor, urlRepor, repor }: EventInfoProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="py-2">
        <h3 className="text-xl sm:text-1xl  md:text-2xl">{nameRepor}</h3>

        <span className="flex text-center itens-center cursor-pointer text-xl sm:text-2xl text-gray-700 hover:text-violet-500">
          <Link
            href={urlRepor}
            target="_blank"
            rel="noreferrer"
            className="flex text-center items-center gap-1"
          >
            <AiOutlineGithub size={20} aria-label="Jones Souza Github" />

            <span className="text-sm sm:text-lg text-gray-700 hover:text-violet-500">
              {repor}
            </span>
          </Link>
        </span>
      </div>
    </div>
  )
}
