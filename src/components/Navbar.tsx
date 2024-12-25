import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  p-4'>
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
          <Image src='/search.png' alt='Lupa' width={14} height={14} />
          <input className='w-[200px] p-2 bg-transparent outline-none'  type="text" name="" id="" placeholder='Search...' />
      </div>

      {/* ICONS AND UDER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src='/message.png' height={20} width={20} alt={'Mensage'} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src='/announcement.png' height={20} width={20} alt={'Mensage'} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex  flex-col">
          <span className="text-xs leading-3 font-medium">Jose Vasquez</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image className="rounded-full" src='/avatar.png' alt="Avatar" height={36} width={36}/>
      </div>
    </div>
  )
}

export default Navbar
