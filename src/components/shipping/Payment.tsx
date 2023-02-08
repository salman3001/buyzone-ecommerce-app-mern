import { Alert, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React, { type FunctionComponent, type Dispatch, useState, type ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPayment } from '../../redux/shippingScreenSlice';

const Payment: FunctionComponent<{ setActiveStep: Dispatch<React.SetStateAction<number>> }> = ({ setActiveStep }) => {
	const dispatch = useDispatch();
	const [value, setvalue] = useState<'cod' | 'card'>('cod');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setvalue(e.target.value);
	};
	const handleSubmit = () => {
		if (value === 'cod') {
			dispatch(
				setPayment({
					mode: 'cod',
					paid: false,
				})
			);
			setActiveStep(2);
		}
	};
	return (
		<FormControl
			sx={{
				py: 2,
				gap: 2,
				minWidth: [280, 400, 500],
				maxWidth: [280, 400, 500],
			}}
		>
			<FormLabel id="demo-radio-buttons-group-label">Select a Payment Method</FormLabel>
			<RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue={'cod'} name="radio-buttons-group">
				<FormControlLabel value="cod" control={<Radio onChange={handleChange} />} label="Cash on delivery" />
				<FormControlLabel value="card" control={<Radio onChange={handleChange} />} label="Debit card" />
			</RadioGroup>
			{value === 'card' && (
				<Alert severity="error">
					Sory! This payment method is currently not availble. Please choose cash on delivery
				</Alert>
			)}
			<Button variant="contained" onClick={handleSubmit} disabled={value === 'card' && true}>
				Next
			</Button>
		</FormControl>
	);
};

export default Payment;
