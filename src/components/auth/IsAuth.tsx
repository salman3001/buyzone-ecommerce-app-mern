import { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';

const IsAuth: FunctionComponent<{ Component: () => JSX.Element; redirect?: string }> = ({ Component, redirect }) => {
	const { token, user } = useSelector((state: RootState) => state.user);

	return (
		<>
			{user === null || token === null ? (
				<Navigate to="/user/logout" />
			) : token.exp * 1000 <= Date.now() ? (
				<Navigate to="/user/logout" />
			) : (
				<Component />
			)}
		</>
	);
};

export default IsAuth;
