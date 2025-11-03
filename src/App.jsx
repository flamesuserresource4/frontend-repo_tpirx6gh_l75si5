import Announcement from './components/Announcement'
import BackgroundGrid from './components/BackgroundGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'

function App() {
  // Jika tersedia, Anda dapat mengganti nilai ini dari AuthContext.
  const isAuthenticated = false

  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <Announcement />

      <Header isAuthenticated={isAuthenticated} />

      <div className="relative">
        <BackgroundGrid />
        <div className="relative">
          <LandingPage />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
