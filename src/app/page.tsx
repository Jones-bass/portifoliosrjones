import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <Header />
      <h1 className="font-bold text-5xl flex items-center gap-3 before:w-0.5 before:h-8 before:bg-sky-500 before:flex">
        Jones Souza
      </h1>
    </div>
  )
}
