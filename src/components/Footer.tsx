import {Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export function Footer(){
    return(
        
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between fixed bottom-0 w-full">
      <div className='flex items-center gap-3 '>
        <Image src="/album.jpg" className='rounded' width={56} height={56} alt='Capa do álbum Wasting Light da banda Fighters' />
        <div className='flex flex-col'>
          <strong className='font-normal'>Rope</strong>
          <span className='text-xs text-zinc-400'>Foo Fighters</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6'>
          <Shuffle size={20} className='text-zinc-200 ' />
          <SkipBack size={20} className='text-zinc-200 ' />

          <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
            <Play />
          </button>

          <SkipForward size={20} className='text-zinc-200 ' />
          <Repeat size={20} className='text-zinc-200 ' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-r-full w-96 bg-zinc-600'>
            <div className='bg-zinc-200 w-40 h-1 rounded-full'/>
          </div>
          <span className='text-xs text-zinc-400'>2:12</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Mic2 size={20} className='text-white/40 hover:text-white/80'/>
        <LayoutList size={20} className='text-white/40 hover:text-white/80'/>
        <Laptop2 size={20} className='text-white/40 hover:text-white/80'/>
        <div className='flex items-center gap-2'>
          <Volume size={20} className='text-white/40 hover:text-white/80'/>
          <div className='h-1 rounded-r-full w-24 bg-zinc-600 flex items-center group'>
            <div className='bg-zinc-200 w-10 h-1 rounded-full cursor-pointer hover:bg-green-500'/>
            <div className='bg-zinc-200 w-2 h-2 p-1.5 rounded-full invisible group-hover:visible'/>
          </div>
        </div>
        <Maximize2 size={20} className='text-white/40 hover:text-white/80'/>
      </div>
    </footer>
    )
}