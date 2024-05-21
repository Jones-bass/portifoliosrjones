'use client'

import { useEffect, useState } from 'react'
import ProjectCards, { RepositoryItemPropos } from './ProjectCards'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export default function Projects() {
  const [loading, setLoading] = useState(true)
  const [repositories, setRepositories] = useState<RepositoryItemPropos[]>([])

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await api.get('/users/jones-bass/repos?sort=update')

        const data: RepositoryItemPropos[] = response.data
        setRepositories(data)
      } catch (error) {
        toast.error('Failed to fetch repositories!')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  return (
    <section className="text-slate-100 items-center gap-2 rounded-lg px-3 py-8 shadow-sm">
      <h2 className="font-bold mb-2 text-xl sm:text-2xl  md:text-3xl">
        PROJETOS
      </h2>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div>
          {repositories.map((item) => (
            <ProjectCards repository={item} key={item.name} />
          ))}
        </div>
      )}
    </section>
  )
}
