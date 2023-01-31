import {
	Alert,
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
	TextareaAutosize,
	InputLabel,
} from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { FunctionComponent, useState } from 'react';
import { useAddProductMutation } from '../redux/api/productsApi';

const formSchema = yup.object().shape({
	productName: yup
		.string()
		.min(2, 'minimum two charectors required')
		.max(100, 'maximum 100 charectors allowed')
		.required('This field is required'),
	price: yup.number().required('This field is required'),
	inStock: yup.number().required('This field is required'),
	category: yup
		.string()
		.min(2, 'minimum two charectors required')
		.max(10, 'maximum 10 charectors allowed')
		.required('This field is required'),
	description: yup
		.string()
		.max(1000, `maximum 1000 charectors allowed`)
		.min(2, 'minimum two cahrectors required')
		.required('This field is required'),
	images: yup.array().required('This field is required'),
});

export const AddNewProduct: FunctionComponent = () => {
	const [addProduct, { isError, isLoading, isSuccess, data: response, error }] = useAddProductMutation();
	const [fileName, setFileName] = useState<string[] | null>(['']);

	const formik = useFormik({
		initialValues: {
			productName: '',
			price: '',
			inStock: '',
			category: '',
			description: '',
			images: '',
		},
		validationSchema: formSchema,
		onSubmit: async (values) => {
			const formData = new FormData();
			formData.append('name', values.productName);
			formData.append('price', values.price);
			formData.append('inStock', values.inStock);
			formData.append('category', values.category);
			formData.append('description', values.description);

			Object.keys(values.images).forEach((key, index) => {
				if (index < values.images.length) {
					formData.append('images', values.images[key]);
				}
			});

			await addProduct(formData).unwrap();
			isSuccess && alert(response?.message || 'product added successfully');
			formik.resetForm();
			setFileName(null);
		},
	});
	return (
		<Container component={Paper} maxWidth="xs" elevation={3} sx={{ width: '100%' }}>
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
				{isError && <Alert severity="error">{error}</Alert>}
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
					name="category"
					id="category"
					label="Category"
					value={formik.values.category}
					onChange={formik.handleChange}
					error={formik.touched.category && Boolean(formik.errors.category)}
					helperText={formik.touched.category && formik.errors.category}
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
				<InputLabel sx={{ pt: 2 }}> Describe Product</InputLabel>
				<TextareaAutosize
					name="description"
					id="description"
					minRows={4}
					value={formik.values.description}
					onChange={formik.handleChange}
				/>
				{formik.touched.description && Boolean(formik.errors.description) && (
					<Typography color="red">{formik.touched.description && formik.errors.description}</Typography>
				)}
				<Button
					component="label"
					color={formik.touched.images && Boolean(formik.errors.images) ? 'error' : 'primary'}
					variant="contained"
				>
					Upload Images
					<input
						hidden={true}
						name="images"
						id="images"
						type="file"
						accept="images/png"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							const files = e.currentTarget.files;
							void formik.setFieldValue('images', [...(files as any)]);
							setFileName(() => {
								if (files != null) {
									const newState = Object.keys(files).map((key, index) => {
										if (index < files?.length) {
											return files[key].name;
										}
									});
									return newState;
								}
							});
						}}
						multiple
						// error={formik.touched.files && Boolean(formik.errors.files)}
					/>
				</Button>
				{fileName?.map((name, index) => (
					<Typography key={index} color="black">
						{name}
					</Typography>
				))}

				<Button variant="contained" type="submit" sx={{ mt: 4 }} disabled={isLoading}>
					Add Product
				</Button>
			</Box>
		</Container>
	);
};
