import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import React, { useState } from 'react';

interface ISidebar {
	Content: () => JSX.Element;
}

export const Sidebar: React.FunctionComponent<ISidebar> = ({ Content }) => {
	const [state, setState] = useState(false);
	const clickHandler = () => {
		setState((state) => (state ? false : true));
		s;
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
			{state && <Content />}
		</Box>
	);
};
