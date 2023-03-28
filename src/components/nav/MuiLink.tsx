import { Link as MuiNativeLink } from '@mui/material';
import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const MuiLink: FunctionComponent<{ to: string; label: string }> = ({ to, label }) => {
	return (
		<MuiNativeLink
			component={Link}
			to={to}
			sx={{
				color: 'black',
				textDecoration: 'none',
				'&:hover': {
					color: 'primary.main',
					textDecoration: 'underline',
				},
			}}
		>
			{label}
		</MuiNativeLink>
	);
};

export default MuiLink;
