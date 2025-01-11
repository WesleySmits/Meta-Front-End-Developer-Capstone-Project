import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ReservePage from './pages/ReservePage';
import NotFoundPage from './pages/404Page';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reserve" element={<ReservePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
