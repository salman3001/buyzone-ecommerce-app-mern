import { DeleteOutline } from '@mui/icons-material';
import { Button, Divider, Rating, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDeleteReviewMutation } from '../../redux/api/reviewsApi';
import { RootState } from '../../redux/store';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

interface IReviewCard {
	userName: string;
	totalStars: number;
	reviewMessage: string;
	userId: string;
	reviewId: string;
	createdAt: Date;
}

const ReviewCard = ({ userName, totalStars, reviewMessage, userId, reviewId, createdAt }: IReviewCard) => {
	const { user } = useSelector((state: RootState) => state.user);
	const [deleteReview, { error }] = useDeleteReviewMutation();
	const navigate = useNavigate();
	TimeAgo.addDefaultLocale(en);
	const timeAgo = new TimeAgo('en-US');
	const handleDeleteClick = async () => {
		try {
			const consent = confirm('Are you sure! You want to delete review');
			if (consent) {
				const res = await deleteReview(reviewId).unwrap();
			} else {
				return;
			}
		} catch (error: any) {
			console.log(error.status);
			if (error.status === 401) {
				alert('Your login sesion might have expired! please login again');
				navigate('/user/getrefreshtoken');
			} else {
				alert(error.data.message || 'something went wrong');
			}
		}
	};
	return (
		<Stack paddingY={4}>
			<Stack direction={'row'} gap={4}>
				<Typography fontWeight={'bold'}>{userName}</Typography>
				{user?.id === userId && <DeleteOutline onClick={handleDeleteClick} sx={{ cursor: 'pointer' }} />}
			</Stack>
			<Rating defaultValue={totalStars} readOnly size="medium" />

			<Typography paddingY={2}>{timeAgo.format(createdAt)}</Typography>
			<Typography paddingY={2}>{reviewMessage}</Typography>
			<Divider />
		</Stack>
	);
};

export default ReviewCard;
