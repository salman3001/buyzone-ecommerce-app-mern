import React from 'react';
import { useGetReviewsQuery } from '../../redux/api/reviewsApi';
import ReviewCard from './ReviewCard';

interface IReview {
	id: string;
}
const Reviews = ({ id }: IReview) => {
	const { data: Reviews, isLoading, isFetching, isError } = useGetReviewsQuery(id);
	return (
		<div>
			{' '}
			{isLoading || isFetching
				? 'Loading...'
				: isError
				? 'No Reviews yet'
				: Reviews !== null
				? Reviews?.map((review) => (
						<ReviewCard
							reviewMessage={review.reviewMessage}
							totalStars={review.totalStars}
							userName={review.userName}
							userId={review.userId}
							reviewId={review._id}
							createdAt={Date.parse(review.createdAt)}
						/>
				  ))
				: 'No Reviews yet'}
		</div>
	);
};

export default Reviews;
