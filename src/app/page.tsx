import { UserSection } from '@/components/userPage/UserSection'

export default function Home() {
  return (
    <div className="bg-slate-900 text-zinc-300">
      <div
        className='absolute inset-x-0 -top-80 -z-60 transform-gpu overflow-hidden blur-3xl sm:-top-10'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[20deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(80%-50rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
              'polygon(74.1% 84.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 18.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 97.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 84.1%)',
          }}
        />
      </div>
      <div className="relative z-10">
        <UserSection />
      </div>
    </div>
  )
}
