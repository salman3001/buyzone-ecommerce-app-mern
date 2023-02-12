import React, { useEffect, type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useIsLoggedinQuery } from '../../redux/api/userApi';
import { type RootState } from '../../redux/store';

const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { user } = useSelector((state: RootState) => state.user);
	const { isError, refetch, isLoading } = useIsLoggedinQuery();
	useEffect(() => {
		void refetch();
	}, []);
	return <>{user?.isAdmin && !isError ? <Component /> : <Navigate to="/user/logout" />}</>;
};

export default IsAdmin;
