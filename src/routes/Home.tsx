import { Box, Divider } from '@mui/material';
import { Categories } from '../components/Categories';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				bgcolor: 'background.paper',
				minHeight: 'inherit',
			}}
		>
			<Sidebar Content={Categories} />
			<Divider orientation="vertical" flexItem />
			<Box>hello</Box>
		</Box>
	);
};
