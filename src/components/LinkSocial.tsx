'use client'
import Link from 'next/link'

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

export function LinkSocial() {
  return (
    <div className="text-5xl flex justify-center gap-7 sm:gap-14 py-4 text-gray-600 md:text-6xl">
      <Link href="https://github.com/Jones-bass" target="_blank">
        <AiOutlineGithub
          aria-label="Jones souza github"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link href="https://www.linkedin.com/in/jonessouza/" target="_blank">
        <AiOutlineLinkedin
          aria-label="Jones Souza linkedin"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link href="https://www.instagram.com/jonesbass_/" target="_blank">
        <AiOutlineInstagram
          aria-label="Jones Souza Instagram"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link href="https://wa.me/5579999591921" target="_blank">
        <AiOutlineWhatsApp
          weight="light"
          aria-label="Jones Souza Whatsapp"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link
        href="mailto:jonesbass.tb@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineMail
          weight="light"
          aria-label="Jones Souza Email"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>
    </div>
  )
}
