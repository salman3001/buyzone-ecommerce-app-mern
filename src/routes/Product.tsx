import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import ProductImagesGallery from '../components/ProductImageGallery';
import { useGetProductQuery } from '../redux/api/productsApi';

export const Product = () => {
	const param = useParams<{ id: string }>();
	const { id } = param;
	console.log(id);

	const { data: product, isLoading, isFetching, isError } = useGetProductQuery(id);
	return (
		<Box
			sx={{
				width: '100%',
				margin: 8,
			}}
		>
			{isLoading || isFetching ? (
				'Loading...'
			) : isError ? (
				'There is error in loading product'
			) : (
				<Grid container gap={4}>
					<Grid item xs={12} md={6}>
						<ProductImagesGallery images={product?.images} />
					</Grid>
					<Grid item xs={12} md={5}>
						<Stack gap={2}>
							<Typography variant="h3" fontWeight="bold">
								{product.name}
							</Typography>
							<Button size="large" variant="contained">
								Add To Cart
							</Button>
							<Button color="info" size="large" variant="contained">
								Buy Now
							</Button>
							<Typography variant="h6">{product.description}</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						Reviews
					</Grid>
				</Grid>
			)}
		</Box>
	);
};
