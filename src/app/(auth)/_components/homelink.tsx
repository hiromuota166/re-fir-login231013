import Image from "next/image";
import React from 'react'

function HomeLink() {
  return (
    <div>
      <Image
          src="/home.svg"
          alt="logo"
          width={46}
          height={46}
        />
    </div>
  )
}

export default HomeLink