export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <div className="size-6 rounded-md bg-gradient-to-tr from-indigo-400 via-violet-400 to-fuchsia-400" />
            Aether
          </div>
          <p className="mt-3">Modern, minimalist fragrances crafted for creative minds.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Support</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-slate-900">Shipping</a></li>
            <li><a href="#" className="hover:text-slate-900">Returns</a></li>
            <li><a href="#" className="hover:text-slate-900">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:text-slate-900">About</a></li>
            <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            <li><a href="#" className="hover:text-slate-900">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-slate-200">© {new Date().getFullYear()} Aether Studio</div>
    </footer>
  )
}
