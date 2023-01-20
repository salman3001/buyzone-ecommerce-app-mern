import { Container, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export const Footer = () => {
	return (
		<Container
			maxWidth={false}
			component="footer"
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				py: 2,
				bgcolor: 'primary.dark',
				color: 'primary.contrastText',
				'& a': {
					color: 'primary.contrastText',
				},
			}}
		>
			<Typography>Copygights @Salman Khan</Typography>
			<Stack direction="row" gap={2}>
				<Link href="#email">Email</Link>
				<Link href="#Git Hub">GitHub</Link>
				<Link href="#Linked In">Linked In</Link>
			</Stack>
		</Container>
	);
};
