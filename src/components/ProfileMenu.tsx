import { Avatar, MenuItem, Menu, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { stringAvatar } from '../Utils/stringAvatar';
import { RootState } from '../redux/store';

export const ProfileMenu = () => {
	const user = useSelector((state: RootState) => state.user);
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	let open = Boolean(anchor);
	const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnchor(e.currentTarget);
	};
	const handleClose = () => {
		setAnchor(null);
	};
	const userName = (user as any)?.userName ? (user as any).userName : null;
	return (
		<>
			<Avatar {...(userName ? stringAvatar(userName) : null)} onClick={handleOpen} />
			<Menu open={open} anchorEl={anchor} onClose={handleClose}>
				<MenuItem><RouterLink to='/profile'>My Profile</RouterLink></MenuItem>
				<MenuItem><RouterLink to='/myorders'>My Orders</RouterLink></MenuItem>
				<MenuItem >
					<Link component={RouterLink} to='/admin/dashboard/'>Admin Dashboard</Link> </MenuItem>
				<MenuItem>{user ? <Logout /> : <Login />}</MenuItem>
			</Menu>
		</>
	);
};

const Login = () => (<RouterLink to='/login'>Login</RouterLink>)
const Logout = () => (<RouterLink to='/logout'>Logout</RouterLink>)