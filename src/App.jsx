import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Header } from './cmp/Header'
import { Footer } from './cmp/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Menu } from './cmp/Menu'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function onOpenMenu() {
        setIsMenuOpen(true)
    }

    function onCloseMenu() {
        setIsMenuOpen(false)
    }

    return (
        <main id="app">
            <Router>
                <Menu isOpen={isMenuOpen} onClose={onCloseMenu} />
                <Header onOpenMenu={onOpenMenu} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>

            <div style={{ display: 'none' }}>
                <img src="images/icon-facebook.svg" />
            </div>
        </main>
    )
}

export default App
