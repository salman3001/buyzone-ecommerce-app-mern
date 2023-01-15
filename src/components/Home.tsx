import { Box, Divider } from '@mui/material';
import { Sidebar } from './Sidebar';

export const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				minHeight: '100vh',
				bgcolor: 'background.paper',
			}}
		>
			<Sidebar />
			<Divider orientation="vertical" flexItem />
			<Box>hello</Box>
		</Box>
	);
};
