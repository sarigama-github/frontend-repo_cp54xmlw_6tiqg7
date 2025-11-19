import { useState } from 'react'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden p-2 rounded-lg hover:bg-white/60" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <div className="size-7 rounded-md bg-gradient-to-tr from-indigo-400 via-violet-400 to-fuchsia-400" />
            Aether
          </a>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 bg-white/70 border border-slate-200 rounded-xl px-3 py-1.5">
          <Search size={16} className="text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search fragrances..."
            className="bg-transparent outline-none text-sm placeholder:text-slate-400 w-64"
          />
        </form>

        <div className="flex items-center gap-3">
          <button className="relative inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl hover:bg-slate-800 transition">
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Bag</span>
            <span className="absolute -top-1 -right-1 text-[10px] bg-fuchsia-500 text-white rounded-full px-1.5">0</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/70">
          <form onSubmit={submit} className="flex items-center gap-2 px-4 py-3">
            <Search size={16} className="text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances..."
              className="bg-transparent outline-none text-sm placeholder:text-slate-400 flex-1"
            />
            <button className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white">Search</button>
          </form>
        </div>
      )}
    </header>
  )
}
