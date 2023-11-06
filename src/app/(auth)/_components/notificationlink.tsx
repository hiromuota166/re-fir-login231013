import Image from 'next/image'
import React from 'react'

function NotificationLink() {
  return (
    <div>
      <Image
          src="/notification.svg"
          alt="logo"
          width={46}
          height={46}
        />
    </div>
  )
}

export default NotificationLink