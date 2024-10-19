import Link from 'next/link'

import { useRouter } from "next/navigation";
import { useState } from 'react'

import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { File } from '@phosphor-icons/react/dist/ssr/File'
import { ReloadIcon } from '@radix-ui/react-icons'
import { BsGithub } from 'react-icons/bs'

export function Header() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    try {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        router.push("/resume");
      }, 1000);

    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <nav className="py-8 sm:py-12 mb-10 p-5 sm:p-10 flex justify-between items-center">
      <span className="text-xl sm:text-2xl text-violet-500 hover:text-zinc-300 font-bold">
        {'<'}
        <strong className="text-zinc-300 text-sm md:text-base lg:text-lg hover:text-violet-500 cursor-pointer font-normal">
          Portifolio {''}
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
            <BsGithub
              size={20}
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
            <AiFillLinkedin className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/jonesbass_/"
            target="_blank"
            aria-label="Jones Souza Instagram"
            rel="noreferrer"
          >
            <AiFillInstagram
              size={25}
              className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
            />
          </Link>
        </li>

        <li className="text-zinc-300 hover:text-violet-700">
          <button className="bg-violet-500 px-4 sm:px-4 py-2 rounded-md sm:ml-8 flex items-center gap-2 md:gap-4 hover:border hover:border-dashed hover:border-violet-500 hover:bg-zinc-300 hover:text-violet-700 shadow-lg border" onClick={onSubmit}>
            {loading ? (
              <div className="flex items-center">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Loading
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <File size={20} />
                Currículo
              </div>
            )}
          </button>
        </li>
      </ul>
    </nav>
  )
}
