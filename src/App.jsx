import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Info from './pages/Info'
import Main from './pages/Main'

import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/info" element={<Info />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
