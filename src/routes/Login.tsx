import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import * as yup from 'yup';

export const Login = () => {
	return (
		<Container component={Paper} maxWidth="xs" elevation={3}>
			<Box
				component="form"
				sx={{
					display: 'flex',
					flexDirection: 'column',
					pt: 8,
					minHeight: '50vh',
					mt: 10,
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
			</Box>
		</Container>
	);
};
