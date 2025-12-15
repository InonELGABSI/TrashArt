import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TalkWithUsPage } from './pages/talkWithUs/TalkWithUsPage'
import { ReportsPage } from './pages/reports/ReportsPage'
import { HomePage } from './pages/home/HomePage'
import { DIYPage } from './pages/diy/DIYPage'
import { AboutPage } from './pages/about/AboutPage'
import { CommunityPage } from './pages/community/CommunityPage'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/talk-with-us" element={<TalkWithUsPage />} />
      <Route path="/DIYPage" element={<DIYPage />} />
      <Route path="/AboutPage" element={<AboutPage />} />
      <Route path="/CommunityPage" element={<CommunityPage />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
