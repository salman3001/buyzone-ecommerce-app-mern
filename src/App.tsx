import { Routes, Route } from 'react-router-dom';
import { Product } from './components/products/Product';
import { Cart } from './components/cart/Cart';
import { Profile } from './components/routes/Profile';
import { ShippingScreen } from './components/routes/ShippingScreen';
import { Signup } from './components/routes/Signup';
import { Login } from './components/routes/Login';
import Dashboard from './components/routes/Dashboard';
import { Orders } from './components/orders/Orders';
import Layout from './components/nav/Layout';
import { Categories } from './components/products/Categories';
import { AdminMenu } from './components/nav/AdminMenu';
import { AddNewProduct } from './components/products/AddNewProduct';
import Products from './components/products/Products';
import NotFound from './components/NotFound';
import MyOrderCategories from './components/orders/MyOrderCategories';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout sideBar={true} sideBarContent={Categories} />}>
					<Route path="" element={<Products />} />
					<Route path="products" element={<Products />} />
				</Route>
				<Route path="product" element={<Layout sideBar={false} />}>
					<Route path=":id" element={<Product />} />
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

					<Route path="shippingscreen" element={<ShippingScreen />} />
					<Route path="signup" element={<Signup />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="user/orders" element={<Layout sideBar={true} sideBarContent={MyOrderCategories} />}>
					<Route path="" element={<Orders />} />
					<Route path="pending" element={<Orders />} />
					<Route path="delivered" element={<Orders />} />
					<Route path="cancled" element={<Orders />} />
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
