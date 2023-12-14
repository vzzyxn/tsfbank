import React, { Fragment } from 'react'; 
import Home from './components/Home.js'; 
import Navbar from './components/Navbar.js'; 
import Customers from './components/Customers.js';  
import Firebase from './firebase.js';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';

function App() {
	return (    
<Router> 
	<Navbar />
	<Routes>
		<Route path="/" element={<Home/>} />  
		<Route path="/customers" element={<Customers />} /> 
	</Routes> 
</Router> 
	);
}

export default App;
