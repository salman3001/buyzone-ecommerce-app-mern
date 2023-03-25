import { Routes, Route } from 'react-router-dom';
import { Product } from './components/products/Product';
import { Cart } from './components/cart/Cart';
import { Profile } from './components/routes/Profile';
import ShippingScreen from './components/shipping/ShippingScreen';
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
import Logout from './components/routes/Logout';
import IsAuth from './components/auth/IsAuth';
import IsAdmin from './components/auth/isAdmin';
import Order from './components/orders/Order';
import GetRefreshToken from './components/routes/GetRefreshToken';
import { AddReview } from './components/reviews/AddReview';

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
				<Route path="addreview" element={<Layout sideBar={false} />}>
					<Route path=":productId" element={<IsAuth Component={AddReview} />} />
				</Route>
				<Route path="admin" element={<Layout sideBar={true} sideBarContent={AdminMenu} />}>
					<Route path="dashboard" element={<IsAdmin Component={Dashboard} />}>
						<Route path="" element={'welcome admin'} />
						<Route path="AddNewProduct" element={<AddNewProduct />} />
						<Route path="Products" element={<Products />} />
						<Route path="orders" element={<Orders />} />
					</Route>
				</Route>
				<Route path="user" element={<Layout sideBar={false} />}>
					<Route path="cart" element={<Cart />} />
					<Route path="profile" element={<IsAuth Component={Profile} redirect="/user/profile" />} />
					<Route path="signup" element={<Signup />} />
					<Route path="login" element={<Login />} />
					<Route path="logout" element={<Logout />} />
					<Route path="getrefreshtoken" element={<GetRefreshToken />} />
				</Route>
				<Route path="user/orders" element={<Layout sideBar={true} sideBarContent={MyOrderCategories} />}>
					<Route path="" element={<IsAuth Component={Orders} redirect="/user/orders" />} />
					<Route path=":id" element={<IsAuth Component={Order} />} />
				</Route>
				<Route path="shippingscreen" element={<Layout sideBar={false} />}>
					<Route path="" element={<IsAuth Component={ShippingScreen} redirect="/shippingscreen" />}></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
