import Image from "next/image";
import React from 'react'

const Header = ({name}:{name:string}) => {
  return (
    <div className="bg-green-300 flex justify-center pt-10 pb-6">
      {name}
    </div>
  )
}

export default Header