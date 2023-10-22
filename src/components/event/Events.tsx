'use client'

import { useState } from 'react'
import { eventInfo } from '../../utils/eventInfo'
import { EventCard } from './EventCard'

export default function Events() {
  const [CardInfoEvents] = useState(eventInfo)

  return (
    <section className="mt-8 p-2">
      <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl">
        Eventos
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
