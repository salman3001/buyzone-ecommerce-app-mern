import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createSearchParams, useNavigate } from 'react-router-dom';

interface IPagination {
	page: number;
	count: number;
	SetPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProductPagination({ page, count, SetPage }: IPagination) {
	const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
		SetPage(value);
	};
	return (
		<Stack spacing={2}>
			<Pagination
				count={count}
				page={page}
				onChange={handleChange}
				sx={{ m: 2, '&.MuiPagination-ul': { justifyContent: 'cenetr' } }}
			/>
		</Stack>
	);
}
