import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { type CSSObject } from '@emotion/react';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useRef, type KeyboardEventHandler } from 'react';

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
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
	},
}));

export const SearchField = () => {
	const navigate = useNavigate(null);
	const inputRef = useRef<HTMLInputElement>()

	const searchHandler = (e: KeyboardEventHandler<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			navigate({
				pathname: '/',
				search: createSearchParams({
					search: (inputRef.current?.children[0].value)
				}).toString(),
			})
		}
	};
	return (
		<Search>
			<SearchIconWrapper
				onClick={(e) => {
					navigate({
						pathname: '/',
						search: createSearchParams({
							search: (inputRef.current?.value as string)
						}).toString(),
					})
				}}
			>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase ref={inputRef} placeholder="Search…" onKeyDown={searchHandler} inputProps={{ 'aria-label': 'search' }} />
		</Search>
	);
};
