/* eslint-disable react/jsx-key */
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import CartItemCard from './CartItemCard';

export const Cart = () => {
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<Grid container>
			<Grid xs={12} sm={7} p={4} item>
				{cart.items.map((item, index) => (
					<CartItemCard key={index} id={item.productId} qty={item.quantity} price={item.price} />
				))}
			</Grid>
			<Grid xs={12} sm={5} p={4} item>
				<TableContainer
					component={Paper}
					sx={{
						'& 	.MuiTableCell-head': {
							fontWeight: 'bold',
						},
						'& 	.MuiTableCell-root': {
							fontSize: '1.2em',
						},
					}}
				>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell variant="head">Total Items</TableCell>
								<TableCell> {cart.items.reduce((sum, { quantity }) => sum + Number(quantity), 0)}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell variant="head">Total Price</TableCell>
								<TableCell>{cart.items.reduce((acc, { price, quantity }) => acc + price * quantity, 0)} $</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				<Button component={Link} to="/shippingscreen" variant="contained" fullWidth sx={{ my: 2 }}>
					Place Order
				</Button>
			</Grid>
		</Grid>
	);
};
