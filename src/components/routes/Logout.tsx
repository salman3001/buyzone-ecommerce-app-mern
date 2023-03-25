import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { useLogoutQuery } from '../../redux/api/authApi';
import { removeUser } from '../../redux/userSlice';

const Logout = () => {

	const dispatch = useDispatch();

	const { isError, isLoading, refetch, isSuccess } = useLogoutQuery(null)
	const [params] = useSearchParams()

	useEffect(() => {
		refetch();
		return () => {
			dispatch(removeUser())
		}

	}, [])



	return <p>{isLoading ? "Loging out" : isError ? "Error Logging out! Something went wrong" : <Navigate to={`/user/login?redirect=${params.get('redirect')}`} />}</p>;
};

export default Logout;
