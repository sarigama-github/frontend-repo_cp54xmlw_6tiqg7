import { useEffect, useState, useMemo } from 'react'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Catalog({ search }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const filtered = useMemo(() => {
    if (!search) return products
    const q = search.toLowerCase()
    return products.filter(p => [p.title, p.description, p.category].join(' ').toLowerCase().includes(q))
  }, [products, search])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError('')
      try {
        let res = await fetch(`${API_URL}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        let data = await res.json()
        if (!data || data.length === 0) {
          const seedRes = await fetch(`${API_URL}/api/products/seed`, { method: 'POST' })
          data = await seedRes.json()
        }
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Featured fragrances</h2>
            <p className="text-slate-600">Minimal, modern, wearable.</p>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-2xl bg-slate-100 animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div className="mt-8 p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {filtered.map((p) => (
              <article key={p.id} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-slate-400">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 line-clamp-1">{p.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold text-slate-900">${'{'}p.price.toFixed(2){'}'}</span>
                    <button className="text-sm px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Add</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
