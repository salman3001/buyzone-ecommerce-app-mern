import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../../redux/userSlice';

const Logout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(removeUser());
		navigate('/user/login');
	}, []);

	return <p>Loging out...</p>;
};

export default Logout;
