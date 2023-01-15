import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useState } from 'react';
import { Container } from '@mui/system';

export const Sidebar = () => {
	const [state, setState] = useState(false);
	const clickHandler = () => {
		setState((state) => (state ? false : true));
	};
	return (
		<Box
			component="nav"
			sx={{
				p: 3,
				maxWidth: ['100%', '200px'],
				minWidth: ['100%', '200px'],
			}}
		>
			<MenuOutlinedIcon
				onClick={clickHandler}
				sx={{
					display: ['block', 'none'],
				}}
			/>
			<List
				sx={{
					display: [state ? 'block' : 'none', 'block'],
				}}
			>
				<ListItem disablePadding>
					<ListItemText>
						<Typography variant="subtitle1" fontWeight="bold">
							Categories
						</Typography>
					</ListItemText>
				</ListItem>
				<ListItem disablePadding>
					<ListItemText>
						<Typography component="a">Categories</Typography>
					</ListItemText>
				</ListItem>
				<ListItem disablePadding>
					<ListItemText>
						<Typography component="a">Categories</Typography>
					</ListItemText>
				</ListItem>
			</List>
		</Box>
	);
};
