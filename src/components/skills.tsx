'use client'

import { IconType } from 'react-icons'

export interface Skill {
  name: string
  icon: IconType
}

interface SkillsProps {
  titleHabilidades: string
  habilidades: Skill[]
}

export default function Skills({
  habilidades,
  titleHabilidades,
}: SkillsProps) {
  return (
    <section className="rounded-lg border border-zinc-700 px-3 py-4 shadow-sm">
      <h2 className="font-semibold tracking-wide mb-4 text-lg sm:text-xl">
        {titleHabilidades}
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {habilidades.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
          >
            <skill.icon
              className="text-base sm:text-lg"
              aria-label={skill.name}
            />
            <span className="text-sm tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
