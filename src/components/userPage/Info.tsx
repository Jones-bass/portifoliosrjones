'use client'
import { LinkSocial } from './LinkSocial'

interface SocialProps {
  UserName: string
  Estudent: string
  description: string
}

export function Info({ UserName, Estudent, description }: SocialProps) {
  return (
    <div className="text-center p-5 sm:p-10">
      <>
        <h2 className="font-bold text-center justify-center flex items-center gap-3 text-4xl sm:text-5xl before:w-0.5 before:h-8 before:bg-violet-500 before:flex">
          {UserName}
        </h2>

        <h3 className="text-xl sm:text-2xl py-2 md:text-3xl flex justify-center gap-3 before:w-0.5 before:h-8 before:bg-violet-500 before:flex">
          {Estudent}
        </h3>

        <p className="text-sm leading-6 sm:text-md py-5 sm:leading-8 text-gray-500 md:text-lg max-w-xl mx-auto">
          {description}
        </p>
      </>

      <LinkSocial />
    </div>
  )
}
