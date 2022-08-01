import {
	Route,
	BrowserRouter as Router,
	Routes,
	Navigate,
} from "react-router-dom";
import {
	WelcomePage,
	Rules,
	ResultsPage,
	BattlePage,
	PlacingPage,
} from "./pages";
import { Footer } from "./components";
function App() {
	return (
		<>
			<Routes>
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path='/' element={<Navigate to='/welcome' replace />} />
				<Route path='/rules' element={<Rules />} />
				<Route path='/result' element={<ResultsPage />} />
				<Route path='/placing' element={<PlacingPage />} />
				<Route path='/battle' element={<BattlePage />} />
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
