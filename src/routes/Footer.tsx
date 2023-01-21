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
				<Link href="mailto:Ssalman.k3001@gmail.com">Email</Link>
				<Link href="https://github.com/salman3001/" target='_blank' >GitHub</Link>
				<Link href="#Linked In" target='_blank'>Linked In</Link>
			</Stack>
		</Container>
	);
};
