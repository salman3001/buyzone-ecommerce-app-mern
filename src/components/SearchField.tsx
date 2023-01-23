import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { CSSObject } from '@emotion/react';

const Search = styled('div')(
	({ theme }): CSSObject => ({
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.8),
		color: 'black',
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.8),
		},
		marginLeft: 0,
		width: '100%',

		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: '50%',
		},
	})
);

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '100%',
			'&:focus': {
				width: '100%',
			},
		},
	},
}));

export const SearchField = () => {
	return (
		<Search>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
		</Search>
	);
};
