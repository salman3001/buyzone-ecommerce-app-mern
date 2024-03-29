import { Box, Button, Divider, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { type FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGetProductQuery } from '../../redux/api/productsApi';
import { addToCart, reduceCartItem, removeFromCart } from '../../redux/cartslice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface ICartItem {
	id: string;
	key: number;
	qty: number;
	price: number;
}
const CartItemCard: FunctionComponent<ICartItem> = ({ id, qty, price }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { data: item, isLoading, isFetching, isError } = useGetProductQuery(id);
	return (
		<>
			<Box key={id} p={2}>
				{isLoading || isFetching ? (
					<Typography>Loading..</Typography>
				) : isError ? (
					<Typography>Error Loading Cart Item..</Typography>
				) : (
					<Stack direction={['column', 'column', 'row']} gap={2}>
						<Box
							sx={{
								width: '100px',
								height: '100px',
								objectFit: 'contain',
							}}
						>
							<img
								src={import.meta.env.VITE_BASE_URL + item?.images[0]}
								alt="image"
								style={{
									cursor: 'pointer',
									height: '100%',
									width: '100%',
									objectFit: 'contain',
								}}
							/>
						</Box>

						<Stack width="100%" sx={{}}>
							<Typography
								sx={{
									height: 50,
									overflow: 'hidden',
									cursor: 'pointer',
								}}
								onClick={() => {
									navigate(`/product/${id}`);
								}}
							>
								{item?.name}
							</Typography>
							<Stack direction="row" justifyContent="end" alignItems="center" gap={2}>
								<Typography sx={{ px: 2, color: 'green' }}>{item != null && item.inStock} in stock</Typography>
								Qty
								<Button
									variant="contained"
									sx={{
										p: 0.1,
									}}
									onClick={() => {
										dispatch(reduceCartItem({ id }));
									}}
								>
									-
								</Button>
								{qty}
								<Button
									variant="contained"
									sx={{
										p: 0.1,
									}}
									onClick={() => {
										dispatch(addToCart({ id: id, inStock: Number(item?.inStock), price }));
									}}
								>
									+
								</Button>
								<Button
									variant="contained"
									sx={{
										p: 0.1,
									}}
									onClick={() => {
										dispatch(removeFromCart({ id }));
									}}
								>
									<DeleteOutlineIcon />
								</Button>
							</Stack>
						</Stack>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 'bold',
								p: 2,
							}}
						>
							{`${price}$`}
						</Typography>
					</Stack>
				)}
			</Box>
			<Divider />
		</>
	);
};

export default CartItemCard;
