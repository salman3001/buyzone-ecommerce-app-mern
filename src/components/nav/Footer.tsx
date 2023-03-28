import { EmailOutlined, GitHub, LinkedIn } from '@mui/icons-material';
import { Container, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';

export const Footer = () => {
	return (
		<Container
			maxWidth={false}
			component="footer"
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				justifyContent: ['start', 'space-between'],
				py: 2,
				gap: [1, 0],
				bgcolor: 'primary.dark',
				color: 'primary.contrastText',
				'& a': {
					color: 'primary.contrastText',
				},
			}}
		>
			<Typography>Copyrights @2022 @Salman</Typography>
			<Stack
				direction="row"
				gap={2}
				sx={{
					'> a': {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 1,
					},
				}}
			>
				<Link href="mailto:Ssalman.k3001@gmail.com">
					<EmailOutlined /> Email
				</Link>
				<Link href="https://github.com/salman3001/" target="_blank">
					<GitHub /> GitHub
				</Link>
				<Link href="#Linked In" target="_blank">
					<LinkedIn /> Linked In
				</Link>
			</Stack>
		</Container>
	);
};
