import React, { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';

const IsAuth: FunctionComponent<{ Component: () => JSX.Element; redirect?: string }> = ({ Component, redirect }) => {
	const { user } = useSelector((state: RootState) => state.user);
	return <>{user != null ? <Component /> : <Navigate to="/user/logout" />}</>;
};

export default IsAuth;
