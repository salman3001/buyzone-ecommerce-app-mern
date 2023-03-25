import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { createSearchParams, useNavigate } from 'react-router-dom';

const SortBy = () => {
	const navigate = useNavigate();
	const handleChange = (e: SelectChangeEvent) => {
		navigate({
			pathname: '/',
			search: createSearchParams({
				sortPrice: e.target.value,
			}).toString(),
		});
	};

	return (
		<FormControl fullWidth sx={{ m: 2 }}>
			<label id="demo-simple-select-label" style={{ padding: '10px' }}>
				Sort By
			</label>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				label="Sort"
				placeholder="SortBy"
				onChange={handleChange}
			>
				<MenuItem value={'-1'}>Price High to Low</MenuItem>
				<MenuItem value={'1'}>Price Low to High</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SortBy;
