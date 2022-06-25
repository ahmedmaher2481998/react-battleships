import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
//redux
import { storeConfig } from "./store/";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = storeConfig();

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
