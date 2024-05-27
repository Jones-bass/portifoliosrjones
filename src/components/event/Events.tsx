'use client'

import { useState } from 'react'
import { eventInfo } from '../../utils/eventInfo'
import { EventCard } from './EventCard'

interface props {
  title: string
}
export default function Events({ title }: props) {
  const [CardInfoEvents] = useState(eventInfo)

  return (
    <section className="items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm">
      <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {CardInfoEvents.map((item) => {
          return (
            <EventCard
              key={item.id}
              nameRepor={item.nameRepor}
              repor={item.repor}
              urlRepor={item.urlRepor}
            />
          )
        })}
      </div>
    </section>
  )
}
