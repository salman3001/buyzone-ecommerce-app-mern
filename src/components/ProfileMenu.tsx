import { Avatar, MenuItem, Menu } from '@mui/material';
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
				<MenuItem>Profile</MenuItem>
				<MenuItem>My Orders</MenuItem>
				<MenuItem>{user ? 'Logout' : 'Login'}</MenuItem>
			</Menu>
		</>
	);
};
