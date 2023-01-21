import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

const formSchema = yup.object().shape({
	productName: yup
		.string()
		.min(2, 'minimum two charectors required')
		.max(20, 'maximum 20 charectors allowed')
		.required('This field is required'),
	price: yup.number().required('This field is required'),
	inStock: yup.number().required('This field is required'),
	files: yup.array().min(1, 'upload atleast one item').required('This field is required'),
});

export const AddNewProduct = () => {
	const formik = useFormik({
		initialValues: {
			productName: '',
			price: '',
			inStock: '',
			files: '',
		},
		validationSchema: formSchema,
		onSubmit: (values) => {
			console.log(values);
			alert(values);
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
				<Typography variant="h5" fontWeight="bold" alignSelf="center" py={2}>
					Add a new product
				</Typography>

				<TextField
					name="productName"
					id="productNamel"
					label="Product title"
					value={formik.values.productName}
					onChange={formik.handleChange}
					error={formik.touched.productName && Boolean(formik.errors.productName)}
					helperText={formik.touched.productName && formik.errors.productName}
				/>
				<TextField
					name="price"
					id="price"
					label="Sell Price"
					value={formik.values.price}
					onChange={formik.handleChange}
					error={formik.touched.price && Boolean(formik.errors.price)}
					helperText={formik.touched.price && formik.errors.price}
				/>
				<TextField
					name="inStock"
					id="inStock"
					label="Total Stock Count"
					value={formik.values.inStock}
					onChange={formik.handleChange}
					error={formik.touched.inStock && Boolean(formik.errors.inStock)}
					helperText={formik.touched.inStock && formik.errors.inStock}
				/>
				<Button
					component="label"
					color={formik.touched.files && Boolean(formik.errors.files) ? 'error' : 'primary'}
					variant="contained"
				>
					Upload Images
					<input
						hidden={true}
						name="files"
						id="files"
						type="file"
						accept="images/png"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							let files = e.currentTarget.files;
							formik.setFieldValue('files', [...(files as any)]);
						}}
						multiple
						// error={formik.touched.files && Boolean(formik.errors.files)}
					/>
				</Button>

				<Button variant="contained" type="submit" sx={{ mt: 4 }}>
					Add Product
				</Button>
			</Box>
		</Container>
	);
};
