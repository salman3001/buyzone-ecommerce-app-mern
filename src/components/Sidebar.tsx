import { Box, IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useState } from 'react';

interface ISidebar {
	Content: () => JSX.Element;
}

export const Sidebar: React.FunctionComponent<ISidebar> = ({ Content }) => {
	const [state, setState] = useState(false);
	const clickHandler = () => {
		setState((state) => (state ? false : true));
	};
	return (
		<Box
			component="nav"
			sx={{
				maxWidth: ['100%', '200px'],
				minWidth: ['100%', '200px'],
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
			<Box
				sx={{
					display: [state ? 'block' : 'none', 'block'],
					padding: 2,
				}}
			>
				<Content />
			</Box>
		</Box>
	);
};
