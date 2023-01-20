import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const sampleCategories = ['All Products', 'Phones', 'Tablets', 'Laptops', 'Desktops', 'Smart Tvs']

export const Categories = () => {
	return (
		<Box sx={{
			display: "flex",
			flexDirection: 'column',
			gap: 1,
			py: 2
		}}>
			{sampleCategories.map(((category, index) => (
				<NavLink key={index} to={`/?category=${category}`}>{category}</NavLink>
			)))}
		</Box>
	);
};
