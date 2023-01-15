import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import { Profile } from './components/Profile';
import { ShippingScreen } from './components/ShippingScreen';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/shippingscreen" element={<ShippingScreen />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
