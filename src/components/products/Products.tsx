import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import SortBy from './SortBy';
import ProductPagination from './Pagination';
import { useEffect, useState } from 'react';
import { Stack } from '@mui/system';

const Products = () => {
	console.log(import.meta.env.VITE_BASE_URL);

	const [totalPageCount, SetTotalPageCount] = useState<number>(1);
	const [Page, SetPage] = useState<number>(1);
	let ItemsPerPage = 5;

	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');
	const search = searchParams.get('search');
	const priceStart = searchParams.get('priceStart');
	const inStock = searchParams.get('inStock');
	const sortPrice = searchParams.get('sortPrice');
	const sortDate = searchParams.get('sortDate');

	const queryString: Partial<IProductQueryString> = {};

	if (category != null) queryString.category = category;
	if (search != null) queryString.search = search;
	if (priceStart != null) queryString.priceStart = priceStart;
	if (inStock != null) queryString.inStock = inStock;
	if (sortPrice != null) queryString.sortPrice = sortPrice;
	if (sortDate != null) queryString.sortDate = sortDate;

	const { data: products, isLoading, isFetching, isError } = useGetProductsQuery(queryString);

	useEffect(() => {
		if (products != null) SetTotalPageCount(Math.ceil(products.length / ItemsPerPage));
	});

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
				<>
					<Grid
						container
						gap={4}
						sx={{
							placeContent: 'center',
						}}
					>
						<SortBy />
						{products?.map((product, index) => {
							const pageStart = (Page - 1) * ItemsPerPage;
							const pageEnd = pageStart + ItemsPerPage;

							if (index > pageStart && index < pageEnd) {
								return (
									<Grid key={product._id} padding={2}>
										<ProductCard
											name={product.name}
											price={product.price}
											images={product.images}
											_id={product._id}
											inStock={Number(product.inStock)}
										/>
									</Grid>
								);
							}
						})}
					</Grid>

					<ProductPagination page={Page} SetPage={SetPage} count={totalPageCount} />
				</>
			)}
		</Box>
	);
};

export default Products;
