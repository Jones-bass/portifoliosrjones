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

export default function Skills({ habilidades, titleHabilidades }: SkillsProps) {
  return (
    <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 py-4 shadow-sm">
      <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl">
        {titleHabilidades}
      </h2>

      <div className="grid md:grid-cols-3 gap-4 py-2">
        {habilidades.map((skill, index) => (
          <span
            key={index}
            className="flex text-center items-center gap-2 cursor-pointer text-xl sm:text-2xl hover:text-slate-300"
          >
            <skill.icon height="thin" aria-label={skill.name} />
            <p className="text-sm sm:text-lg">{skill.name}</p>
          </span>
        ))}
      </div>
    </section>
  )
}
