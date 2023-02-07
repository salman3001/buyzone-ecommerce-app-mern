import { Box } from '@mui/material';
import MuiLink from '../nav/MuiLink';

const sampleCategories = ['Mobiles', 'Tablets', 'Laptops', 'Desktops', 'Smart Tvs', 'Accesories'];

export const Categories = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				py: 2,
			}}
		>
			<MuiLink
				to="/"
				style={{
					fontSize: '1.5em',
				}}
				label="All Products"
			/>
			{sampleCategories.map((category, index) => (
				<MuiLink key={index} to={`/?category=${category}`} label={category} />
			))}
		</Box>
	);
};
