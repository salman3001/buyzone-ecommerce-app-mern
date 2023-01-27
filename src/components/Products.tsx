import { Box, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';

const Products = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const search = searchParams.get('search');
	const outOfStock = searchParams.get('outOfStock');
	return (
		<Box>
			<Grid container gap={2}>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
				<Grid xs={12} sm={3} md={2} >
					<ProductCard />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Products;
