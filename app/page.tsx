import {Home as HomeIcon, Search, BookHeadphones, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <BookHeadphones />
              Your Library
            </a>
          </nav>

          <nav className="mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix de Treino </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix de Jogos </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix de Rock </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Eminem </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Deftones </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-8">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="https://www.youtube.com/watch?v=JAmt6zN9vOk&list=PLn5wg5YK7Mlp3j8-CMyrSsq8QXul-FcXH" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/deftones-gore.jpg" width={80} height={80} alt="Deftones-Gore album cover" />
              <strong>Gore</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=kBFYjIuFKO4&list=PLQeroY7XkiFE_RbmlqM6yUknKoEhY3TYI" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/the-marshall-mathers-lp-eminem.jpg" width={80} height={80} alt="Eminem-The Marshall Mathers LP album cover" />
              <strong>Marshall Mathers</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=rmleuQP5owA&list=PLo2VF3ux4qcZ6b7vL7SVhBEK_NAbKzsoD" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/black-sabbath-paranoid.jpg" width={80} height={80} alt="Black Sabbath-Paranoid album cover" />
              <strong>Paranoid</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=JAmt6zN9vOk&list=PLn5wg5YK7Mlp3j8-CMyrSsq8QXul-FcXH" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/deftones-gore.jpg" width={80} height={80} alt="Deftones-Gore album cover" />
              <strong>Gore</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=kBFYjIuFKO4&list=PLQeroY7XkiFE_RbmlqM6yUknKoEhY3TYI" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/the-marshall-mathers-lp-eminem.jpg" width={80} height={80} alt="Eminem-The Marshall Mathers LP album cover" />
              <strong>Marshall Mathers</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
            <a href="https://www.youtube.com/watch?v=rmleuQP5owA&list=PLo2VF3ux4qcZ6b7vL7SVhBEK_NAbKzsoD" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/black-sabbath-paranoid.jpg" width={80} height={80} alt="Black Sabbath-Paranoid album cover" />
              <strong>Paranoid</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="bg-black"/>
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-8">Made For You</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/deftones-gore.jpg" className="w-full" width={80} height={80} alt="Deftones-Gore album cover" />
            <strong className="font-semibold">Daily Mix</strong>
            <span className="text-sm text-zinc-400">Deftones, Eminem, Black Sabbath and more</span>
            </a>
            
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/the-marshall-mathers-lp-eminem.jpg" className="w-full" width={80} height={80} alt="Eminem-The Marshall Mathers LP album cover" />
            <strong className="font-semibold">Daily Mix</strong>
            <span className="text-sm text-zinc-400">Deftones, Eminem, Black Sabbath and more</span>
            </a>
            
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/black-sabbath-paranoid.jpg" className="w-full" width={80} height={80} alt="Black Sabbath-Paranoid album cover" />
            <strong className="font-semibold">Daily Mix</strong>
            <span className="text-sm text-zinc-400">Deftones, Eminem, Black Sabbath and more</span>
            </a>
            
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/deftones-gore.jpg" className="w-full" width={80} height={80} alt="Deftones-Gore album cover" />
            <strong className="font-semibold">Daily Mix</strong>
            <span className="text-sm text-zinc-400">Deftones, Eminem, Black Sabbath and more</span>
            </a>
            
            <a href="#" className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src="/the-marshall-mathers-lp-eminem.jpg" className="w-full" width={80} height={80} alt="Eminem-The Marshall Mathers LP album cover" />
            <strong className="font-semibold">Daily Mix</strong>
            <span className="text-sm text-zinc-400">Deftones, Eminem, Black Sabbath and more</span>
            
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
       <div className="flex items-center gap-3">
        <Image src="/deftones-gore.jpg" width={56} height={56} alt="Deftones-Gore album cover" />
          <div className="flex flex-col">
            <strong className="font-normal">Phantom Bride</strong>
            <span className="text-xs text-zinc-400">Deftones</span>
          </div>
        </div>
       
       <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200 hover:text-green-500"/>
            <SkipBack fill="white" size={20} className="text-zinc-200 hover:text-green-500 hover:fill-green-500" />
            
            <button className="w-10 h-10 flex items-center justify-center pl-0.5 rounded-full bg-white text-black">
                <Play fill="bg-black"/>
            </button>

            <SkipForward fill="white" size={20} className="text-zinc-200 hover:text-green-500 hover:fill-green-500" />
            <Repeat size={20} className="text-zinc-200 hover:text-green-500"/>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0:43</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">4:23</span>
          </div>
       </div>
       <div>

       </div>
      </footer>
    </div>
  )
}
