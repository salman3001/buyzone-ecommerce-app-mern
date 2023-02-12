import React, { useEffect, type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useIsLoggedinQuery } from '../../redux/api/userApi';
import { type RootState } from '../../redux/store';

const IsAuth: FunctionComponent<{ Component: () => JSX.Element; redirect?: string }> = ({ Component, redirect }) => {
	const { user } = useSelector((state: RootState) => state.user);
	const { isError, refetch } = useIsLoggedinQuery();
	useEffect(() => {
		void refetch();
	}, []);
	return <>{user != null && !isError ? <Component /> : <Navigate to="/user/logout" />}</>;
};

export default IsAuth;
