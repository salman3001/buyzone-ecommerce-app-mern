import { Box, Divider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface ILayout {
	sideBarContent?: () => JSX.Element;
	sideBar: boolean;
}

const Layout = ({ sideBar, sideBarContent }: ILayout) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				width: '100%',
				minHeight: '100vh',
			}}
		>
			<Navbar />
			<Box
				sx={{
					display: 'flex',
					flexDirection: ['column', 'row'],
					bgcolor: 'background.paper',
					width: '100%',
					flexGrow: 1,
				}}
			>
				{sideBar && <Sidebar Content={sideBarContent} />}
				<Divider orientation="vertical" flexItem />
				<Outlet />
			</Box>
			<Footer />
		</div>
	);
};

export default Layout;
