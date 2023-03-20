import { Avatar, MenuItem, Menu, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { stringAvatar } from '../../Utils/stringAvatar';
import { type RootState } from '../../redux/store';
// import { removeUser } from '../../redux/userSlice';
// import { useLogoutQuery} from '../../redux/api/authApi';
import MuiLink from './MuiLink';

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
					<MuiLink to="/user/profile" label="My Profile" />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<MuiLink to="/user/orders" label="My Orders" />
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<MuiLink to="/admin/dashboard/" label="Admin Dashboard" />
				</MenuItem>
				<MenuItem onClick={handleClose}>{user ? <Logout /> : <Login />}</MenuItem>
			</Menu>
		</>
	);
};

const Login = () => <MuiLink to="/user/login" label="login" />;
const Logout = () => {
	return <MuiLink to="/user/logout" label="Logout" />;
};
