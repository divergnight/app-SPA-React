import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar/AppNavbar';
import HomePage from './Pages/HomePage/HomePage';
import PlayerPage from './Pages/PlayerPage/PlayerPage';
import PlayerAddPage from './Pages/PlayerAddPage/PlayerAddPage';
import PlayerEditPage from './Pages/PlayerEditPage/PlayerEditPage';
import Redirect from './Pages/Redirect/Redirect';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<AppNavbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/player" element={<PlayerPage />} />
				<Route path="/player/add" element={<PlayerAddPage />} />
				<Route
					path="/player/edit-:index"
					element={<PlayerEditPage />}
				/>

				<Route path="/*" element={<Redirect />} />
				<Route path="/player/*" element={<Redirect />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
