import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../redux/cartslice';
export const ProductCard: React.FunctionComponent<Omit<Iproduct, 'description' | 'category'>> = ({
	name,
	price,
	images,
	_id,
	inStock,
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	return (
		<Card sx={{ maxWidth: 200 }} key={_id}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				src={import.meta.env.VITE_BASE_URL + images[0]}
				sx={{
					objectFit: 'contain',
					cursor: 'pointer',
				}}
				onClick={() => {
					navigate(`/product/${_id}`);
				}}
			/>
			<CardContent>
				<Typography
					onClick={() => {
						navigate(`/product/${_id}`);
					}}
					overflow="hidden"
					height={50}
					component="div"
					sx={{ cursor: 'pointer' }}
				>
					{name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{price + '$'}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					justifyContent: 'end',
				}}
			>
				<Button
					variant="contained"
					size="small"
					onClick={() => {
						dispatch(addToCart({ id: _id, inStock, price }));
					}}
				>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};
