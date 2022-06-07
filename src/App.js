import GridWrapper from "./components/GridWrapper";
import {
	Route,
	BrowserRouter as Router,
	Routes,
	Navigate,
} from "react-router-dom";
import { WelcomePage } from "./pages";
import { Footer } from "./components";
function App() {
	return (
		<>
			<Routes>
				<Route path='/welcome' element={<WelcomePage />} />
				<Route path='/' element={<Navigate to='/welcome' replace />} />
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
