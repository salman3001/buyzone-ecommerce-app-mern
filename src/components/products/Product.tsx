import { Box, Grid, Stack, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ProductImagesGallery from './ProductImageGallery';
import { useGetProductQuery } from '../../redux/api/productsApi';
import { addToCart } from '../../redux/cartslice';

export const Product = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const param = useParams<{ id: string }>();
	const { id } = param;

	const { data: product, isLoading, isFetching, isError } = useGetProductQuery(id);
	return (
		<Box
			sx={{
				width: '100%',
			}}
		>
			{isLoading || isFetching ? (
				'Loading...'
			) : isError ? (
				'There is error in loading product'
			) : product !== null ? (
				<Grid container gap={4} padding={4}>
					<Grid item xs={12} md={6}>
						<ProductImagesGallery images={product?.images} />
					</Grid>
					<Grid item xs={12} md={5}>
						<Stack gap={2}>
							<Typography
								fontWeight="bold"
								sx={{
									fontSize: ['2em', '3em'],
								}}
							>
								{product?.name}
							</Typography>

							<Button
								size="large"
								variant="contained"
								onClick={() => {
									dispatch(
										addToCart({
											id: product?._id,
											inStock: Number(product?.inStock),
										})
									);
								}}
							>
								Add To Cart
							</Button>
							<Button
								color="info"
								size="large"
								variant="contained"
								onClick={() => {
									dispatch(
										addToCart({
											id: product?._id,
											inStock: Number(product?.inStock),
											price: Number(product.price),
										})
									);
									navigate('/user/cart');
								}}
							>
								Buy Now
							</Button>
							<Typography variant="h6">{product?.description}</Typography>
						</Stack>
					</Grid>
					<Grid item xs={12}>
						Reviews
					</Grid>
				</Grid>
			) : (
				'Nothing here'
			)}
		</Box>
	);
};
