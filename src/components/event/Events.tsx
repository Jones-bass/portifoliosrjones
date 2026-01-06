'use client'

import { useState } from 'react'
import { eventInfo } from '../../utils/eventInfo'
import { EventCard } from './EventCard'

interface Props {
  title: string
}

export default function Events({ title }: Props) {
  const [cardInfoEvents] = useState(eventInfo)

  return (
    <section className="rounded-lg border border-zinc-700 px-3 py-4 shadow-sm">
      <h2 className="font-semibold tracking-wide mb-4 text-lg sm:text-xl">
        {title}
      </h2>

      <div className="grid gap-3 md:grid-cols-2">
        {cardInfoEvents.map((item) => (
          <EventCard
            key={item.id}
            nameRepor={item.nameRepor}
            repor={item.repor}
            urlRepor={item.urlRepor}
          />
        ))}
      </div>
    </section>
  )
}
