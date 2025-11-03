function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p className="text-center sm:text-left">© {year} Analisis Skripsi Kampus. Semua hak cipta dilindungi.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Syarat Layanan</a>
          <a href="#" className="hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded">Kontak</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
