import { Box, IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface ISidebar {
	Content: () => JSX.Element;
}

export const Sidebar: React.FunctionComponent<ISidebar> = ({ Content }) => {
	const [state, setState] = useState(false);
	const clickHandler = () => {
		setState((state) => (state ? false : true));
	};

	useEffect(() => {});
	return (
		<Box
			component="nav"
			sx={{
				maxWidth: ['100%', '150px'],
				minWidth: ['100%', '150px'],
				height: '100%',
			}}
		>
			<IconButton
				disableFocusRipple
				disableRipple
				disableTouchRipple
				onClick={clickHandler}
				sx={{
					display: ['flex', 'none'],
					gap: 1,
				}}
			>
				<MenuOutlinedIcon />
				Categories
			</IconButton>
			<ContentArea Content={Content} state={state} setState={setState} />
		</Box>
	);
};

interface IContentArea {
	Content: () => JSX.Element;
	state: boolean;
	setState: Dispatch<React.SetStateAction<boolean>>;
}

const ContentArea = ({ Content, state, setState }: IContentArea) => {
	// const ClickHandeler = () => {
	// 	setState((state) => (state ? false : true));
	// };
	// useEffect(() => {
	// 	window.addEventListener('click', ClickHandeler);

	// 	return () => {
	// 		window.removeEventListener('click', ClickHandeler);
	// 	};
	// }, []);
	return (
		<Box
			sx={{
				display: [state ? 'block' : 'none', 'block'],
				padding: 2,
			}}
		>
			<Content />
		</Box>
	);
};
