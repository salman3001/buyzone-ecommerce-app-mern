import { Alert, Box, CircularProgress, Grid } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import SortBy from './SortBy';
import ProductPagination from './Pagination';
import { useEffect, useState } from 'react';

const Products = () => {
	const [totalPageCount, SetTotalPageCount] = useState<number>(1);
	const [Page, SetPage] = useState<number>(1);
	const location = useLocation();
	let ItemsPerPage = 10;

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
		SetPage(1);
	}, [location]);

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
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
					<Box sx={{ px: '20px' }}>
						<SortBy />
					</Box>
					<Box
						gap={1}
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: 2,
							justifyContent: 'space-around',
						}}
					>
						{products?.map((product, index) => {
							const pageStart = (Page - 1) * ItemsPerPage;
							const pageEnd = pageStart + (ItemsPerPage - 1);

							if (index >= pageStart && index <= pageEnd) {
								return (
									<ProductCard
										name={product.name}
										price={product.price}
										images={product.images}
										_id={product._id}
										inStock={Number(product.inStock)}
									/>
								);
							}
						})}
					</Box>

					<ProductPagination page={Page} SetPage={SetPage} count={totalPageCount} />
				</Box>
			)}
		</Box>
	);
};

export default Products;
