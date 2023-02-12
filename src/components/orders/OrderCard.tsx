import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography, Stack, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FunctionComponent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MuiLink from '../nav/MuiLink';
import moment from 'moment';

interface IOrderCard {
	id: string;
	totalItems: string;
	date: Date;
	status: string;
}
const OrderCard: FunctionComponent<IOrderCard> = (prop) => {
	const param = useParams<{ orderStatus: string }>();
	const navigate = useNavigate();

	return (
		<>
			<Stack
				sx={{
					'& .MuiTypography-root': {
						fontSize: '1em',
					},
					p: 2,
					justifyContent: 'space-evenly',
				}}
				direction={['column', 'column', 'row']}
				gap={2}
			>
				<Typography>{moment(prop.date).format('DD/MM/YY')}</Typography>
				<Typography>{prop.totalItems} items ordered</Typography>
				<Typography> {`(status- ${prop.status})`} </Typography>
				<Button
					variant="contained"
					sx={{ mb: 2 }}
					onClick={() => {
						navigate(`/user/orders/${prop.id}`);
					}}
				>
					View Detail
				</Button>
			</Stack>
			<Divider flexItem />
		</>
	);
};

export default OrderCard;
