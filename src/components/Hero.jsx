import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] grid place-items-center overflow-hidden bg-[#EDE9FE]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none max-w-3xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-slate-700 border border-slate-200">
          <span className="size-2 rounded-full bg-fuchsia-500" />
          New: The Fragrance of Creativity
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
          Minimalist scents for modern minds
        </h1>
        <p className="mt-4 text-slate-600 text-lg">
          A curated collection of clean, glassy accords with iridescent edges. Elevate your everyday with effortless clarity.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#catalog" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
            Shop Collection
          </a>
          <a href="#about" className="pointer-events-auto inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white">
            Learn More
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#EDE9FE] via-[#EDE9FE]/60 to-transparent" />
    </section>
  )
}
