import { Link as MuiNativeLink } from '@mui/material';
import { type FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const MuiLink: FunctionComponent<{ to: string; label: string }> = ({ to, label }) => {
	return (
		<MuiNativeLink component={Link} to={to}>
			{label}
		</MuiNativeLink>
	);
};

export default MuiLink;
