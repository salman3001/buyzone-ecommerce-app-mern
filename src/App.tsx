import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './routes/Home';
import { Product } from './routes/Product';
import { Cart } from './components/Cart';
import { Profile } from './routes/Profile';
import { ShippingScreen } from './routes/ShippingScreen';
import { Signup } from './routes/Signup';
import { Login } from './routes/Login';
import { Footer } from './routes/Footer';
import { Container } from '@mui/material';
import { Dashboard } from './routes/Dashboard';
import { MyOrders } from './routes/MyOrders';

function App() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				minHeight: '100vh',
			}}
		>
			<Navbar />
			<Container
				component="main"
				maxWidth={false}
				sx={{
					flexGrow: 1,
				}}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/myorders" element={<MyOrders />} />
					<Route path="/shippingscreen" element={<ShippingScreen />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/admin/dashboard" element={<Dashboard />} />
					<Route path="/admin/dashboard/:menu" element={<Dashboard />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
