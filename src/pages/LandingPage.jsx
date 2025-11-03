import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Percepat Evaluasi Skripsi dengan Analisis Kohesi Otomatis
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Nilai kohesi dan kelogisan dokumen skripsi Anda dalam hitungan detik. Dapatkan umpan balik terstruktur, rekomendasi perbaikan, serta dukungan dashboard untuk dosen dan mahasiswa.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                Mulai Login
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-md border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
              >
                Daftar Akun
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-indigo-100 via-white to-sky-100 border border-gray-200 shadow-sm flex items-center justify-center">
              <svg
                className="h-24 w-24 text-indigo-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Ilustrasi analisis dokumen"
              >
                <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ title, desc }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm h-full">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  )
}

function Features() {
  const items = [
    {
      title: 'Pengecekan Kohesi Otomatis',
      desc: 'Analisis otomatis terhadap keterkaitan antarbagian dan alur logis dokumen skripsi.'
    },
    {
      title: 'Umpan Balik Terstruktur',
      desc: 'Saran perbaikan berdasarkan indikator yang jelas, memudahkan revisi yang terarah.'
    },
    {
      title: 'Riwayat Evaluasi',
      desc: 'Pantau perkembangan kualitas dokumen dari waktu ke waktu dalam satu tempat.'
    },
    {
      title: 'Dashboard Dosen & Mahasiswa',
      desc: 'Akses terpisah untuk memonitor, memberi catatan, dan mengelola progres bimbingan.'
    },
    {
      title: 'Pengaturan Aturan Kohesi',
      desc: 'Sesuaikan bobot dan kriteria penilaian agar sejalan dengan pedoman kampus.'
    },
    {
      title: 'Keamanan Data',
      desc: 'Dokumen Anda ditangani secara aman dengan kontrol akses yang ketat.'
    },
  ]

  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Fitur Utama</h2>
          <p className="mt-2 text-gray-600">Semua yang Anda butuhkan untuk evaluasi skripsi yang cepat dan akurat.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <FeatureItem key={it.title} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { title: 'Unggah Dokumen', desc: 'Masukkan file skripsi (DOCX atau PDF) ke sistem.' },
    { title: 'Sistem Menilai', desc: 'Analisis otomatis menilai kohesi, struktur, dan alur logika.' },
    { title: 'Skor & Saran', desc: 'Dapatkan skor menyeluruh beserta rekomendasi perbaikan.' },
  ]

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Cara Kerja</h2>
          <p className="mt-2 text-gray-600">Tiga langkah sederhana untuk memulai.</p>
        </div>

        <ol className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
          {steps.map((s, idx) => (
            <li key={s.title} className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <span className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-indigo-600 text-white text-sm font-bold grid place-items-center">
                {idx + 1}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Dipercaya Lingkungan Kampus</h2>
            <p className="mt-2 text-gray-600">Dirancang untuk kebutuhan akademik dengan fokus pada kualitas dan akurasi.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-50 text-green-700 px-3 py-1 text-sm border border-green-200">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden />
              Digunakan di lingkungan kampus
            </div>
          </div>
          <div className="grid gap-4">
            <figure className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <blockquote className="text-gray-700 italic">“Sangat membantu mempercepat proses review naskah dan memberikan saran yang jelas.”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">— Dosen Pembimbing</figcaption>
            </figure>
            <figure className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <blockquote className="text-gray-700 italic">“Saya bisa melihat progres revisi dengan lebih terstruktur dan terukur.”</blockquote>
              <figcaption className="mt-3 text-sm text-gray-500">— Mahasiswa</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Siap Mencoba?</h2>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Masuk untuk mulai mengevaluasi dokumen Anda, atau daftar untuk membuat akun baru.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="inline-flex items-center justify-center rounded-md border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            Daftar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  useEffect(() => {
    document.title = 'Analisis Skripsi Kampus — Landing'
  }, [])

  return (
    <main className="relative">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </main>
  )
}
