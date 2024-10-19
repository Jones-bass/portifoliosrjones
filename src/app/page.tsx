import Background from '@/components/Background'
import { UserSection } from '@/components/userPage/UserSection'

export default function Home() {
  return (
    <div className="bg-slate-900 text-zinc-300">
      <Background />

      <div className="relative z-10">
        <UserSection />
      </div>
    </div>
  )
}
