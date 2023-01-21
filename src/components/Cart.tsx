import { Button, Grid, Paper, Table, TableCell, TableContainer, TableRow } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

let cartData = ['item1', 'item2']

export const Cart = () => {
	return (
		<Grid container>
			<Grid xs={12} sm={7} p={4}>
				{cartData.map((item, index) => <CartItem key={index}>{item}</CartItem>)}
			</Grid>
			<Grid xs={12} sm={5} p={4}>
				<TableContainer component={Paper}>
					<Table>
						<TableRow>
							<TableCell>
								Total Items
							</TableCell>
							<TableCell>
								4
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>
								Total Price
							</TableCell>
							<TableCell>
								400$
							</TableCell>
						</TableRow>
					</Table>
				</TableContainer>
				<Button component={Link} to="/shippingscreen" variant="contained" fullWidth sx={{ my: 2 }}>Place Order</Button>
			</Grid>
		</Grid>
	)
};

const CartItem: React.FunctionComponent<{ children: React.ReactNode, key: number }> = (prop) => {
	return (
		<div key={prop.key}>
			{prop.children}
		</div>
	)
}
