import {Home as HomeIcon, Search, BookHeadphones} from 'lucide-react'

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
          main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
