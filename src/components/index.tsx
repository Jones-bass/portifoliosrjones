import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import ProjectCards, { RepositoryItemPropos } from './projects/ProjectCards'

export default function PageProjects() {
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
      <h2 className="font-bold mb-2 text-xl sm:text-2xl md:text-3xl text-zinc-200">
        PROJETOS
      </h2>
      <div className="flex flex-col pe-4 h-auto max-h-[134vw] overflow-y-scroll custom-scrollbar">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div>
            {repositories.map((item) => (
              <ProjectCards repository={item} key={item.name} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
