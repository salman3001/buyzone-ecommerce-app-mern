import React, { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';

const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { user } = useSelector((state: RootState) => state.user);
	return <>{user?.isAdmin ?? false ? <Component /> : <Navigate to="/user/logout" />}</>;
};

export default IsAdmin;
