import { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import cookie from 'js-cookie';
import { useIsAdminQuery } from '../../redux/api/authApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { token, user } = useSelector((state: RootState) => state.user);

	return (
		<>
			{user === null || token === null ? (
				<Navigate to="/user/logout" />
			) : token.exp * 1000 <= Date.now() ? (
				<Navigate to="/user/logout" />
			) : user.isAdmin === null ? (
				'Please login as admin'
			) : (
				<Component />
			)}
		</>
	);
};

export default IsAdmin;
