import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutQuery } from '../../redux/api/authApi';
import { removeUser } from '../../redux/userSlice';
import { baseUrl } from '../../Utils/baseUrl';

const Logout = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [isError, setError] = useState<boolean>(false)
	const abort = new AbortController()
	useEffect(() => {
		axios.get(baseUrl + 'api/buyzone/auth/logout', { signal: abort.signal }).then(() => {
			dispatch(removeUser());
			navigate('/user/login');
		}).catch((err) => {
			setError(true)
		})

		return () => {
			abort.abort()
		}

	}, [])



	return <p>{isError && "Error Logging out! Something went wrong"}</p>;
};

export default Logout;
