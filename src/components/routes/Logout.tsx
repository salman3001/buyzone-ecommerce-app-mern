import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../redux/api/userApi';
import { removeUser } from '../../redux/userSlice';

const Logout = () => {
	const [logout] = useLogoutMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = async () => {
		const res = await logout(null).unwrap();
		Boolean(res) && dispatch(removeUser());
		navigate('/user/login');
	};
	useEffect(() => {
		void logoutHandler();
	}, []);

	return <p>Loging out ....</p>;
};

export default Logout;
