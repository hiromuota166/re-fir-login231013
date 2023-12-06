import Image from 'next/image'
import React from 'react'

function EventLink() {
  return (
    <div>
      <Image
          src="/event.svg"
          alt="logo"
          width={46}
          height={46}
        />
    </div>
  )
}

export default EventLink