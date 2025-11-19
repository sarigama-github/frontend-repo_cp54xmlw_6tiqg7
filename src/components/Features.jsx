export default function Features() {
  const items = [
    { title: 'Clean Formulas', text: 'Hypoallergenic, phthalate-free compositions that let the ideas shine.' },
    { title: 'Refill Ready', text: 'Reusable glass keeps the ritual light and the footprint lighter.' },
    { title: 'Studio Crafted', text: 'Small-batch blends guided by design, balance and restraint.' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Designed with intention</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">Our approach is minimalist: fewer notes, more space. Every detail serves clarity.</p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 p-6 bg-white/60">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
