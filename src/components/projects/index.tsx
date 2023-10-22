'use client'

import { useState } from 'react'
import Skills from './skills'
import { projetcInfo } from '@/utils/projetcInfo'
import ProjectCards from './ProjectCards'
import Events from '../event/Events'

export default function Projects() {
  const [CardInfoProjects] = useState(projetcInfo)

  return (
    <section className="text-slate-100 items-center gap-2 rounded-lg px-3 py-8 shadow-sm">
      <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
        PROJETOS
      </h2>

      <div>
        {CardInfoProjects.map((item) => {
          return (
            <ProjectCards
              key={item.id}
              nameRepor={item.nameRepor}
              yearRepor={item.yearRepor}
              urlRepor={item.urlRepor}
              content={item.content}
            />
          )
        })}
      </div>

      <Events />
      <Skills />
    </section>
  )
}
