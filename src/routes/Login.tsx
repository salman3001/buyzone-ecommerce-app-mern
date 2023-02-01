import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { useLoginMutation } from '../redux/api/userApi';
import { RootState, AppDispatch } from '../redux/store';
import { setUser } from '../redux/userSlice';

const formScheme = yup.object().shape({
	email: yup.string().email('not a valid email').required('this fiels is required'),
	password: yup.string().required('this fiels is required'),
});

export const Login = () => {
	const [login, { isLoading, isError }] = useLoginMutation();
	const navigate = useNavigate();
	const [query] = useSearchParams();
	const redirect = (query as any)?.redirect;
	const { user } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		user && navigate(redirect || '/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const dispatch: AppDispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: formScheme,
		onSubmit: async (value) => {
			const user = await login(value).unwrap();
			user && dispatch(setUser(user));
			navigate(redirect || '/');
		},
	});

	return (
		<Container
			component={Paper}
			maxWidth="xs"
			elevation={3}
			sx={{
				my: 8,
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
				onSubmit={(e) => {
					e.preventDefault();
					formik.handleSubmit();
				}}
			>
				{isError && <Alert severity="error">Unbale to login! check your credential.</Alert>}
				<Typography variant="h5" fontWeight="bold" alignSelf="center" py={2}>
					Login
				</Typography>

				<TextField
					name="email"
					id="email"
					label="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && Boolean(formik.errors.email) && formik.errors.email}
				/>
				<TextField
					name="password"
					id="password"
					label="Password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && Boolean(formik.errors.password) && formik.errors.password}
				/>
				<Button variant="contained" type="submit" sx={{ mt: 4 }} disabled={isLoading}>
					Login
				</Button>
				<Stack direction="row">
					<Typography variant="body1">No account? &nbsp;</Typography>

					<Link to="/user/signup">Sign Up!</Link>
				</Stack>
			</Box>
		</Container>
	);
};
