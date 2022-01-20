import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import HomePage from './Pages/HomePage/HomePage';
import PlayerPage from './Pages/PlayerPage/PlayerPage';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<header className="mb-5">
				<AppNavbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route
						path="/player/:name"
						element={<PlayerPage />}
					></Route>
				</Routes>
			</main>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
