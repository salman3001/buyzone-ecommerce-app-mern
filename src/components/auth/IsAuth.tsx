import { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import cookie from 'js-cookie'

const IsAuth: FunctionComponent<{ Component: () => JSX.Element; redirect?: string }> = ({ Component, redirect }) => {
	const { user } = useSelector((state: RootState) => state.user)
	const isLoggedInCookie = cookie.get("IS_LOGGED_IN")
	console.log(isLoggedInCookie);

	return <>{isLoggedInCookie && user != null ? <Component /> : < Navigate to={`/user/getrefreshtoken?redirect=${redirect}`} />}</>;

};

export default IsAuth;
