'use client'
import Link from 'next/link'
import { LucideGithub, LucideInstagram, LucideLinkedin } from 'lucide-react'

export function LinkSocial() {
  return (
    <div className="text-5xl flex justify-center gap-7 sm:gap-14 py-3 text-gray-600 md:text-6xl">
      <Link href="https://github.com/Jones-bass" target="_blank">
        <LucideGithub
          aria-label="Jones souza github"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link href="https://www.linkedin.com/in/renan-fachin/" target="_blank">
        <LucideLinkedin
          aria-label="Jones Souza linkedin"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>

      <Link href="https://www.instagram.com/jonesbass_/" target="_blank">
        <LucideInstagram
          aria-label="Jones Souza Instagram"
          className="cursor-pointer hover:text-violet-800 hover:scale-150 transition-all"
        />
      </Link>
    </div>
  )
}
