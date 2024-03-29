import { Typography, Toolbar, AppBar, Stack, IconButton, Badge, Box, useTheme } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ProfileMenu } from './ProfileMenu';
import { SearchField } from './SearchField';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { SearchField2 } from './SearchField2';

export const Navbar = () => {
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<AppBar position="static" elevation={0}>
			<Toolbar>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Typography
						variant="h5"
						component={Link}
						to="/"
						sx={{
							fontWeight: 'bold',
							textDecoration: 'none',
							':visited': {
								color: 'white',
							},
							border: '2px white',
						}}
					>
						BuyZone
					</Typography>

					<SearchField />

					<Stack direction="row" spacing={3}>
						<Badge
							badgeContent={cart.items.length}
							color="warning"
							sx={{
								'& .MuiBadge-badge': { top: 10 },
							}}
						>
							<IconButton LinkComponent={Link} to="/user/cart">
								<ShoppingCartOutlinedIcon />
							</IconButton>
						</Badge>
						<ProfileMenu />
					</Stack>
				</Box>
			</Toolbar>
			<Stack justifyContent="Center" p={[1, 0]} alignItems={'center'}>
				<SearchField2 />
			</Stack>
		</AppBar>
	);
};
