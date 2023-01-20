import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

export const Login = () => {
	return (
		<Container component={Paper} maxWidth="xs" elevation={3}
			sx={{
				my: 8
			}}
		>
			<Box
				component="form"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					py: 4,
					minHeight: '50vh',
					gap: 2,
				}}
			>
				<Typography variant="h5" fontWeight="bold" alignSelf="center" py={2}>
					Login
				</Typography>

				<TextField name="email" id="email" label="Email" />
				<TextField name="password" id="password" label="Password" />
				<Button variant="contained" type="submit" sx={{ mt: 4 }}>
					Login
				</Button>
				<Stack direction='row'>
					<Typography variant='body1'>No account? &nbsp;</Typography>

					<Link to='/signup'>Sign Up!</Link>

				</Stack>
			</Box>
		</Container>
	);
};
