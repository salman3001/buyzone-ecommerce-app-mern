import { Alert, Box, Button, Container, Paper, Rating, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as yup from 'yup';
import { useAddReviewMutation } from '../../redux/api/reviewsApi';
import { type RootState, type AppDispatch } from '../../redux/store';

const formScheme = yup.object().shape({
	reviewMessage: yup.string().required('this fiels is required').max(100, 'maximum limit reached'),
});

export const AddReview = () => {
	const [Review, { isError, isLoading, error }] = useAddReviewMutation();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const params = useParams<{ productId: string }>();
	const redirect = searchParams.get('redirect');
	const { user } = useSelector((state: RootState) => state.user);
	const [ratingValue, setRatingValue] = useState(1);

	const formik = useFormik({
		initialValues: {
			reviewMessage: '',
		},
		validationSchema: formScheme,
		onSubmit: async (value) => {
			const data: IReview = {
				productId: params.productId,
				userId: user?.id,
				userName: user?.name,
				totalStars: ratingValue,
				...value,
			};

			const response = await Review(data).unwrap();
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
				{isError && <Alert severity="error">{`${error.data.message || 'something went wrong'}`}</Alert>}
				<Typography variant="h5" fontWeight="bold" alignSelf="center" py={2}>
					Post A Review
				</Typography>

				<TextField
					multiline
					name="reviewMessage"
					id="reviewMessage"
					label="Message"
					type="text"
					value={formik.values.reviewMessage}
					onChange={formik.handleChange}
					error={formik.touched.reviewMessage && Boolean(formik.errors.reviewMessage)}
					helperText={
						formik.touched.reviewMessage && Boolean(formik.errors.reviewMessage) && formik.errors.reviewMessage
					}
				/>
				<Rating
					value={ratingValue}
					onChange={(e, newvalue) => {
						setRatingValue(newvalue);
					}}
				/>
				<Button variant="contained" type="submit" sx={{ mt: 4 }} disabled={isLoading}>
					Post Review
				</Button>
			</Box>
		</Container>
	);
};
