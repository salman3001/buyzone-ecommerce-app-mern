import { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import cookie from 'js-cookie';
import { useIsAdminQuery } from '../../redux/api/authApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Alert } from '@mui/material';

const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { token, user } = useSelector((state: RootState) => state.user);
	console.log(user);

	return (
		<>
			{user === null || token === null ? (
				<Navigate to="/user/logout" />
			) : token.exp * 1000 <= Date.now() ? (
				<Navigate to="/user/logout" />
			) : user.isAdmin === false ? (
				<Alert severity="warning">Please login as admin</Alert>
			) : (
				<Component />
			)}
		</>
	);
};

export default IsAdmin;
