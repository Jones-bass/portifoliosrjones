'use client'

import Bio from '@/components/Bio'

export default function Resume() {
  return (
    <div className="max-w-5xl w-full mx-auto px-6 lg:px-0 flex">
      <div className="grid grid-cols-2 bg-container-color shadow-md">
        <Bio />
      </div>
      <div className="bg-red-400 bg-container-color shadow-md">
        PROJETOS
        <span>Faculdade Estacio</span>
        <span>2023 - Cursando</span>
      </div>
    </div>
  )
}
