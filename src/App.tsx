import { Routes, Route } from 'react-router-dom';
import { Product } from './routes/Product';
import { Cart } from './components/Cart';
import { Profile } from './routes/Profile';
import { ShippingScreen } from './routes/ShippingScreen';
import { Signup } from './routes/Signup';
import { Login } from './routes/Login';
import Dashboard from './routes/Dashboard';
import { MyOrders } from './routes/MyOrders';
import { useDispatch } from 'react-redux';
import { getUser } from './redux/userSlice';
import Layout from './components/Layout';
import { Categories } from './components/Categories';
import { AdminMenu } from './components/AdminMenu';
import { AddNewProduct } from './components/AddNewProduct';
import { Orders } from './components/Orders';
import Products from './components/Products';
import NotFound from './components/NotFound';

function App() {
	const dispatch = useDispatch();
	dispatch(getUser());
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout sideBar={true} sideBarContent={Categories} />}>
					<Route path="" element={<Products />} />
					<Route path="product" element={<Products />} />
					<Route path="products/:id" element={<Product />} />
				</Route>
				<Route path="admin" element={<Layout sideBar={true} sideBarContent={AdminMenu} />}>
					<Route path="dashboard" element={<Dashboard />}>
						<Route path="" element={'welcome admin'} />
						<Route path="AddNewProduct" element={<AddNewProduct />} />
						<Route path="Products" element={<Products />} />
						<Route path="orders" element={<Orders />} />
					</Route>
				</Route>
				<Route path="user" element={<Layout sideBar={false} />}>
					<Route path="cart" element={<Cart />} />
					<Route path="profile" element={<Profile />} />
					<Route path="myorders" element={<MyOrders />} />
					<Route path="shippingscreen" element={<ShippingScreen />} />
					<Route path="signup" element={<Signup />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
