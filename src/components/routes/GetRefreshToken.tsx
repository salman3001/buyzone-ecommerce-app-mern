import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useSearchParams } from 'react-router-dom';
import { useGetRefreshTokenQuery } from '../../redux/api/authApi';
import { RootState } from '../../redux/store';

const GetRefreshToken = () => {
	const { isLoading, isError, refetch, data } = useGetRefreshTokenQuery(null);
	const { user } = useSelector((state: RootState) => state.user);
	const [params] = useSearchParams();
	const redirect = params.get('redirect');

	useEffect(() => {
		refetch();
	}, []);

	return (
		<>
			{isLoading ? (
				'Authorizing'
			) : isError ? (
				<Navigate to="/user/logout" />
			) : data?.message === 'success' && user != null ? (
				<Navigate to={'/'} />
			) : (
				<Navigate to="/user/logout" />
			)}
		</>
	);
};

export default GetRefreshToken;
