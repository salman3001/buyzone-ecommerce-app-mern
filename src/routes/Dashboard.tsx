import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				bgcolor: 'background.paper',
				minHeight: 'inherit',
				width: '100%',
			}}
		>
			<Outlet />
		</Box>
	);
};

export default Dashboard;
