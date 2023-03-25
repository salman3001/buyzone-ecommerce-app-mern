import { Divider, Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

interface IReviewCard {
	userName: string;
	totalStars: number;
	reviewMessage: string;
}

const ReviewCard = ({ userName, totalStars, reviewMessage }: IReviewCard) => {
	return (
		<Stack paddingY={4}>
			<Typography fontWeight={'bold'}>{userName}</Typography>
			<Rating defaultValue={totalStars} readOnly size="medium" />
			<Typography paddingY={2}>{reviewMessage}</Typography>
			<Divider />
		</Stack>
	);
};

export default ReviewCard;
