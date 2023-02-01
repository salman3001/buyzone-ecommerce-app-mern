import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { type CSSObject } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { type KeyboardEventHandler } from 'react';

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
	const [, setParams] = useSearchParams();

	const searchHandler = (e: KeyboardEventHandler<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setParams({
				search: e.currentTarget.value,
			});
		}
	};
	return (
		<Search>
			<SearchIconWrapper
				onClick={(e) => {
					setParams({
						search: e.currentTarget.value,
					});
				}}
			>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase placeholder="Search…" onKeyDown={searchHandler} inputProps={{ 'aria-label': 'search' }} />
		</Search>
	);
};
