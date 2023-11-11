import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Header } from './cmp/Header'
import { Footer } from './cmp/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

function App() {
    return (
        <main id="app" className="main-layout">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    )
}

export default App
