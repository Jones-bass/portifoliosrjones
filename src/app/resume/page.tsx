/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client'

import { Envelope, MapPin, WhatsappLogo } from '@phosphor-icons/react'

export default function Resume() {
  return (
    <div className="max-w-5xl w-full mx-auto px-6 lg:px-0">
      <div className="grid grid-cols-2 bg-container-color shadow-md">
        <div className="bg-slate-200">
          <section className="relative">
            <div className="grid gap-y-12 py-2">
              <div className="grid gap-x-3 gap-y-3 text-center">
                <img
                  src="https://github.com/jones-bass.png"
                  className="w-36 h-36 rounded-full justify-self-center"
                />

                <h1>Jones Souza</h1>
                <h3>DEV JR | FRONT-END | BACK-END</h3>
              </div>

              <div className="grid gap-2 ">
                <span className="flex justify-center items-center">
                  <MapPin
                    weight="thin"
                    className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
                  />
                  Tobias Barreto, SE
                </span>
                <span className="flex justify-center items-center">
                  <Envelope
                    weight="thin"
                    className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
                  />
                  jonesbass.tb@gmail.com
                </span>
                <span className="flex justify-center items-center">
                  <WhatsappLogo
                    weight="thin"
                    className="cursor-pointer text-xl sm:text-2xl hover:text-violet-500"
                  />
                  79 9 9959-1921
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
