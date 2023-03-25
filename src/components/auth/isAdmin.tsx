import { type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import cookie from 'js-cookie'


const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { user } = useSelector((state: RootState) => state.user)
	const isLoggedInCookie = cookie.get("IS_LOGGED_IN")

	return <>{isLoggedInCookie && user?.isAdmin == true ? <Component /> : user != null ? 'Please Login as admin' : < Navigate to={`/user/getrefreshtoken`} />}</>;
};

export default IsAdmin;
