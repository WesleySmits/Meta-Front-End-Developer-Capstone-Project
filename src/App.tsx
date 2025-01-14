import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import ReservePage from './pages/ReservePage';
import NotFoundPage from './pages/404Page';
import Header from './components/layout/Header';
import { useCallback, useState } from 'react';
import SidePanel from './components/base/side-panel/SidePanel';
import MobileNavigation from './components/navigation/MobileNavigation';

function App() {
    const [isPanelOpen, setPanelOpen] = useState(false);

    const handlePanelClose = useCallback(() => {
        setPanelOpen(false);
    }, []);

    return (
        <HelmetProvider>
            <Router>
                <Header isMobileMenuOpen={isPanelOpen} setMobileMenuOpen={setPanelOpen} />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/reserve" element={<ReservePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>

                <footer>
                    <p>&copy; 2025 Little Lemon</p>
                </footer>

                <SidePanel isOpen={isPanelOpen} onClose={handlePanelClose}>
                    <MobileNavigation />
                </SidePanel>
            </Router>
        </HelmetProvider>
    );
}

export default App;
