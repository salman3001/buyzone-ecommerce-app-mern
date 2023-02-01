import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useGetProductsQuery } from '../redux/api/productsApi';

const Products = () => {
	const [searchParams] = useSearchParams();

	const category = searchParams.get('category');
	const search = searchParams.get('search');
	const priceStart = searchParams.get('priceStart');
	const inStock = searchParams.get('inStock');
	const pageLimit = searchParams.get('pageLimit');
	const pageSkip = searchParams.get('pageSkip');
	const sortPrice = searchParams.get('sortPrice');
	const sortDate = searchParams.get('sortDate');

	const queryString: Partial<IProductQueryString> = {};

	if (category != null) queryString.category = category;
	if (search != null) queryString.search = search;
	if (priceStart != null) queryString.priceStart = priceStart;
	if (inStock != null) queryString.inStock = inStock;
	if (pageLimit != null) queryString.pageLimit = pageLimit;
	if (pageSkip != null) queryString.pageSkip = pageSkip;
	if (sortPrice != null) queryString.sortPrice = sortPrice;
	if (sortDate != null) queryString.sortDate = sortDate;

	const { data: products, isLoading, isFetching, isError } = useGetProductsQuery(queryString);

	return (
		<Box sx={{ width: '100%' }}>
			{isLoading || isFetching ? (
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100%',
					}}
				>
					<CircularProgress />
				</Box>
			) : isError ? (
				<Alert severity="error">Error loading Products</Alert>
			) : (
				<Grid
					container
					gap={4}
					sx={{
						placeContent: 'center',
					}}
				>
					{products?.map((product) => (
						<Grid key={product._id} padding={2}>
							<ProductCard
								name={product.name}
								price={product.price}
								images={product.images}
								_id={product._id}
								inStock={Number(product.inStock)}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
};

export default Products;
