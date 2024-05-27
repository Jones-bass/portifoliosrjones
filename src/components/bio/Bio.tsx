/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

'use client'

import { bioInfo } from '../../utils/bioInfo'
import { useState } from 'react'
import BioCard from './BioCards'

export default function Bio() {
  const [info] = useState(bioInfo)

  return (
    <div>
      {info.map((info) => (
        <BioCard key={info.id} {...info} />
      ))}
    </div>
  )
}
