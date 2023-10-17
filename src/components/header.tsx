import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react'
import { File } from '@phosphor-icons/react/dist/ssr/File'
import Link from 'next/link'

export function Header() {
  return (
    <nav className="py-8 sm:py-12 mb-10 p-5 sm:p-10 flex justify-between items-center">
      <span className="text-xl sm:text-2xl text-violet-500 hover:text-white font-bold">
        {'<'}
        <strong className="text-white text-sm md:text-base lg:text-lg hover:text-violet-500 cursor-pointer font-normal">
          Portfolio {''}
        </strong>
        {'/>'}
      </span>

      <ul className="flex items-center gap-2 md:gap-4">
        <li>
          <Link
            href="https://github.com/Jones-bass"
            target="_blank"
            aria-label="Jones Souza Github"
            rel="noreferrer"
          >
            <GithubLogo
              weight="thin"
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/jonessouza/"
            target="_blank"
            aria-label="Jones Souza Likedin"
            rel="noreferrer"
          >
            <LinkedinLogo
              weight="thin"
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/jonesbass_/"
            target="_blank"
            aria-label="Jones Souza Instagram"
            rel="noreferrer"
          >
            <InstagramLogo
              weight="thin"
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
            />
          </Link>
        </li>

        <li className="text-white hover:text-violet-700">
          <Link
            href="/resume"
            className="bg-violet-500 px-4 sm:px-4 py-2 rounded-md sm:ml-8 flex items-center gap-2 md:gap-4 hover:border hover:border-dashed hover:border-violet-500 hover:bg-white hover:text-violet-700 shadow-lg border"
          >
            <File size={20} />
            Currículo
          </Link>
        </li>
      </ul>
    </nav>
  )
}
