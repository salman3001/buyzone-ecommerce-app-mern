import { Avatar, MenuItem, Menu, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stringAvatar } from '../Utils/stringAvatar';
import { RootState } from '../redux/store';
import { removeUser } from '../redux/userSlice';
import axios from 'axios';

export const ProfileMenu = () => {
	const { user } = useSelector((state: RootState) => state.user);
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	let open = Boolean(anchor);
	const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnchor(e.currentTarget);
	};
	const handleClose = () => {
		setAnchor(null);
	};
	const userName = (user as any)?.name ? (user as any).name : null;
	return (
		<>
			<Avatar {...(userName ? stringAvatar(userName) : null)} onClick={handleOpen} />
			<Menu open={open} anchorEl={anchor} onClose={handleClose}>
				<MenuItem onClick={handleClose}>
					<RouterLink to="/profile">My Profile</RouterLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<RouterLink to="/myorders">My Orders</RouterLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Link component={RouterLink} to="/admin/dashboard/">
						Admin Dashboard
					</Link>{' '}
				</MenuItem>
				<MenuItem onClick={handleClose}>{user ? <Logout /> : <Login />}</MenuItem>
			</Menu>
		</>
	);
};

const Login = () => <RouterLink to="/login">Login</RouterLink>;
const Logout = () => {
	const dispatch = useDispatch();

	return (
		<Link
			onClick={async () => {
				try {
					const res = await axios.get('/api/logout');
					console.log(res);

					dispatch(removeUser());
				} catch (err) {
					alert('server error loging  out');
				}
			}}
		>
			Logout
		</Link>
	);
};
