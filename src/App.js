import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import {
  WelcomePage,
  Rules,
  ResultsPage,
  BattlePage,
  PlacingPage,
  WinnerPage,
} from './pages';
import { Footer } from './components';
import NotFound from './pages/404';
function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/winner/:winnerName" element={<WinnerPage />} />
        <Route path="/placing" element={<PlacingPage />} />
        <Route path="/battle" element={<BattlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;
