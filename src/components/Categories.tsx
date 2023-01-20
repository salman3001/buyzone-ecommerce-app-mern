import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const sampleCategories = ['Phones', 'Tablets', 'Laptops', 'Desktops', 'Smart Tvs']

export const Categories = () => {
	return (
		<Box sx={{
			display: "flex",
			flexDirection: 'column',
			gap: 1,
			py: 2
		}}>
			<NavLink to="/">All Categories</NavLink>
			{sampleCategories.map((category => (
				<NavLink to={`/?category=${category}`}>{category}</NavLink>
			)))}
		</Box>
	);
};
