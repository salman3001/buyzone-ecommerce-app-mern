import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../Utils/baseUrl';
export const ProductCard: React.FunctionComponent<Omit<Iproduct, 'description' | 'category' | 'inStock'>> = ({
	name,
	price,
	images,
	_id,
}) => {
	const navigate = useNavigate();

	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				src={baseUrl + images[0]}
				sx={{
					objectFit: 'contain',
					cursor: 'pointer',
				}}
				onClick={() => {
					navigate(`/products/${_id}`);
				}}
			/>
			<CardContent>
				<Typography
					onClick={() => {
						navigate(`/products/${_id}`);
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
				<Button variant="contained" size="small">
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
};
