import { Typography, Toolbar, AppBar, Stack, IconButton, Badge, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ProfileMenu } from './ProfileMenu';

export const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
					}}
				>
					<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
						BuyZone
					</Typography>
					<Stack direction="row" spacing={3}>
						<Badge
							badgeContent={4}
							color="warning"
							sx={{
								'& .MuiBadge-badge': { top: 10 },
							}}
						>
							<IconButton>
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
