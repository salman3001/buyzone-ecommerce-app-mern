import { Typography, Toolbar, AppBar, Stack, IconButton, Badge, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ProfileMenu } from './ProfileMenu';
import { SearchField } from './SearchField';

export const Navbar = () => {
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
						component="a"
						href="/"
						sx={{
							fontWeight: 'bold',
							textDecoration: 'none',
							':visited': {
								color: 'white',
							},
						}}
					>
						BuyZone
					</Typography>
					<SearchField />

					<Stack direction="row" spacing={3}>
						<Badge
							badgeContent={4}
							color="warning"
							sx={{
								'& .MuiBadge-badge': { top: 10 },
							}}
						>
							<IconButton href='/cart'>
								<ShoppingCartOutlinedIcon />
							</IconButton>
						</Badge>
						<ProfileMenu />
					</Stack>
				</Box>
			</Toolbar>
		</AppBar>
	);
};
