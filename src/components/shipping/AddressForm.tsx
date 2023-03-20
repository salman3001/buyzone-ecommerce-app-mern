/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';

import { useFormik } from 'formik';

import * as yup from 'yup';
import { Container } from '@mui/system';
import { useDispatch } from 'react-redux';
import { saveAddress } from '../../redux/orderSlice';
import { type Dispatch, type FunctionComponent } from 'react';

const validationSchema = yup.object().shape({
	building: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	street: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	city: yup.string().required('This Field is required').min(2, 'Minimum charectors 2 required'),
	mobile: yup.string().required('This field is required').min(10, 'Not a valid number').max(10, 'not a valid number'),
	pin: yup.string().required('this field is required').min(2, 'Please enter a valid code').max(10, 'Code invalid'),
	addressLine: yup.string().max(40, 'only 40 charectors allowed here'),
	country: yup.string().required(),
});

export const AddressForm: FunctionComponent<{ setActiveStep: Dispatch<React.SetStateAction<number>> }> = (prop) => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			building: '',
			street: '',
			city: '',
			mobile: 0,
			pin: 0,
			addressLine: '',
			country: 'UAE',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log('calleed');

			dispatch(saveAddress(values));
			prop.setActiveStep(1);
		},
	});

	return (
		<Container
			component={Paper}
			maxWidth="sm"
			elevation={4}
			sx={{
				my: 8,
			}}
		>
			<Box
				component="form"
				onSubmit={formik.handleSubmit}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 2,
					mt: 8,
					py: 4,

					'& 	.MuiButton-root': {
						mt: 2,
					},
				}}
			>
				<Typography variant="h5" textAlign={'center'} padding={2}>
					Shipping Address
				</Typography>
				<Stack direction={'row'} gap={2}>
					<TextField
						fullWidth
						id="building"
						name="building"
						label="Building"
						value={formik.values.building}
						onChange={formik.handleChange}
						error={formik.touched.building && Boolean(formik.errors.building)}
						helperText={formik.touched.building && formik.errors.building}
					/>
					<TextField
						fullWidth
						id="street"
						name="street"
						label="Street"
						value={formik.values.street}
						onChange={formik.handleChange}
						error={formik.touched.street && Boolean(formik.errors.street)}
						helperText={formik.touched.street && formik.errors.street}
					/>
				</Stack>
				<Stack direction={'row'} gap={2}>
					<TextField
						fullWidth
						id="city"
						name="city"
						label="City"
						value={formik.values.city}
						onChange={formik.handleChange}
						error={formik.touched.city && Boolean(formik.errors.city)}
						helperText={formik.touched.city && formik.errors.city}
					/>
					<TextField
						fullWidth
						id="mobile"
						name="mobile"
						type="number"
						label="Mobile No."
						value={formik.values.mobile}
						onChange={formik.handleChange}
						error={formik.touched.city && Boolean(formik.errors.mobile)}
						helperText={formik.touched.city && formik.errors.mobile}
					/>
				</Stack>
				<Stack direction={'row'} gap={2}>
					<TextField
						fullWidth
						id="pin"
						name="pin"
						label="Pin Code"
						value={formik.values.pin}
						onChange={formik.handleChange}
						error={formik.touched.pin && Boolean(formik.errors.pin)}
						helperText={formik.touched.pin && formik.errors.pin}
					/>
					<TextField
						fullWidth
						id="country"
						name="country"
						label="Country"
						value={formik.values.country}
						onChange={formik.handleChange}
						error={formik.touched.country && Boolean(formik.errors.country)}
						helperText={formik.touched.country && formik.errors.country}
						disabled
					/>
				</Stack>
				<TextField
					fullWidth
					id="addressLine"
					name="addressLine"
					label="Address line"
					value={formik.values.addressLine}
					onChange={formik.handleChange}
					error={formik.touched.addressLine && Boolean(formik.errors.addressLine)}
					helperText={formik.touched.addressLine && formik.errors.addressLine}
				/>

				<Button color="primary" variant="contained" type="submit" fullWidth>
					Next
				</Button>
			</Box>
		</Container>
	);
};
