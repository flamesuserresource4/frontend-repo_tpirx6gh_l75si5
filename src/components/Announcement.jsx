import { Link } from 'react-router-dom'

function Announcement() {
  return (
    <div className="bg-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-center text-sm">
        <span className="hidden sm:inline">Baru!</span> Dukungan evaluasi kohesi otomatis untuk format DOCX & PDF.
        <Link to="/register" className="ml-2 underline font-semibold">Coba gratis</Link>
      </div>
    </div>
  )
}

export default Announcement
