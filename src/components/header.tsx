import { FileDown, GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'

export function Header() {
  return (
    <nav className="py-8 sm:py-12 mb-10 md:mb-28 flex justify-between items-center">
      <span className="text-xl sm:text-2xl text-violet-500 hover:text-black hover:dark:text-violet-400 font-bold">
        {'<'}
        <strong className="text-black text-2xl dark:text-white hover:text-violet-500 cursor-pointer font-normal">
          Portfolio {''}
        </strong>
        {'/>'}
      </span>

      <ul className="flex items-center gap-4">
        <li>
          <a href="https://github.com/Jones-bass">
            <GithubIcon className="cursor-pointer text-xl sm:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonessouza/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon className="cursor-pointer text-xl sm:text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jonesbass_/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="cursor-pointer text-xl sm:text-2xl" />
          </a>
        </li>

        <li className="text-white hover:text-violet-700">
          <a className="bg-violet-500 px-4 sm:px-4 py-2 rounded-md ml-4 sm:ml-8 flex items-center gap-4 hover:border hover:border-dashed hover:border-violet-500 hover:bg-white hover:text-violet-700 shadow-lg border">
            <FileDown size={20} />
            Currículo
          </a>
        </li>
      </ul>
    </nav>
  )
}
