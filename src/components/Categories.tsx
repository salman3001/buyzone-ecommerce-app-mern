import { Box } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const sampleCategories = ['Mobiles', 'Tablets', 'Laptops', 'Desktops', 'Smart Tvs', 'Accesories'];

export const Categories = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				py: 2,
			}}
		>
			<NavLink
				to="/"
				style={{
					fontSize: '1.5em',
				}}
			>
				All Products
			</NavLink>
			{sampleCategories.map((category, index) => (
				<NavLink
					key={index}
					to={`/?category=${category}`}
					style={{
						fontSize: '1.5em',
						textDecoration: 'none',
						padding: '.2rem',
						color: 'black',
					}}
				>
					{category}
				</NavLink>
			))}
		</Box>
	);
};
