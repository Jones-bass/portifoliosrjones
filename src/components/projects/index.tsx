'use client'

import Events from './Events'
import ProjectsCards from './Projects'
import Skills from './skills'

export default function Projects() {
  return (
    <section className="text-slate-100 items-center gap-2 rounded-lg px-3 py-8 shadow-sm">
      <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
        PROJETOS
      </h2>

      <ProjectsCards />
      <Events />
      <Skills />
    </section>
  )
}
