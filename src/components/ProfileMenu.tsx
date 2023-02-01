import { Avatar, MenuItem, Menu, Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stringAvatar } from '../Utils/stringAvatar';
import { type RootState } from '../redux/store';
import { removeUser } from '../redux/userSlice';
import { useLogoutMutation } from '../redux/api/userApi';

export const ProfileMenu = () => {
	const { user } = useSelector((state: RootState) => state.user);
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	const open = Boolean(anchor);
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
					<RouterLink to="/user/profile">My Profile</RouterLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<RouterLink to="user/myorders">My Orders</RouterLink>
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
	const [logout, { isLoading }] = useLogoutMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Link
			onClick={async () => {
				try {
					const res = await logout(null).unwrap();
					Boolean(res) && dispatch(removeUser());
					navigate('/');
				} catch (err) {
					alert('server error loging  out');
				}
			}}
		>
			Logout
		</Link>
	);
};
