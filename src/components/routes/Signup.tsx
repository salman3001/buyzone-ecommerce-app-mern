import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Container } from '@mui/system';
import { baseUrl } from '../../Utils/baseUrl';

const validationSchema = yup.object().shape({
	firstName: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	lastName: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	email: yup.string().email('Not a valid email').required('This Field is required'),
	password: yup
		.string()
		.min(6, 'Minimum charector should be 6')
		.max(12, 'max charectors should be 12')
		.required('This Field is required'),
});

export const Signup = () => {
	const [error, setError] = useState<{ message: string } | null>(null);
	const [success, setSuccess] = useState<{ message: string } | null>(null);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setError(null);
			setSuccess(null);
			try {
				const user = await axios.post(baseUrl + 'users', values);
				navigate('/');
			} catch (error) {
				console.log(error);
			}
		},
	});

	return (
		<Container component={Paper} maxWidth="xs" elevation={4} sx={{ my: 4 }}>
			<Box
				component="form"
				onSubmit={formik.handleSubmit}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 4,
					py: 4,
					'& 	.MuiButton-root': {
						mt: 2,
					},
				}}
			>
				<Typography variant="h5" fontWeight="bold" textAlign="center" py={2}>
					Sign Up!
				</Typography>
				{success ? <Alert sx={{ my: 2 }}>{success.message}</Alert> : null}
				{error ? (
					<Alert severity="error" sx={{ my: 2 }}>
						{error.message}
					</Alert>
				) : null}

				<TextField
					fullWidth
					id="firstName"
					name="firstName"
					label="First Name"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					helperText={formik.touched.firstName && formik.errors.firstName}
				/>
				<TextField
					fullWidth
					id="lastName"
					name="lastName"
					label="Last Name"
					value={formik.values.lastName}
					onChange={formik.handleChange}
					error={formik.touched.lastName && Boolean(formik.errors.lastName)}
					helperText={formik.touched.lastName && formik.errors.lastName}
				/>
				<TextField
					fullWidth
					id="email"
					name="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					id="password"
					name="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Button color="primary" variant="contained" fullWidth type="submit">
					Submit
				</Button>
				<Stack direction="row">
					<Typography variant="body1">Already have an account? &nbsp;</Typography>

					<Link to="/user/login">Log in!</Link>
				</Stack>
			</Box>
		</Container>
	);
};
