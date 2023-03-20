import axios from 'axios';
import React, { useEffect, useState, type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useIsLogedInQuery } from '../../redux/api/authApi';
import { type RootState } from '../../redux/store';
import { baseUrl } from '../../Utils/baseUrl';

const IsAuth: FunctionComponent<{ Component: () => JSX.Element; redirect?: string }> = ({ Component, redirect }) => {
	const { user } = useSelector((state: RootState) => state.user)
	const [isError, setError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const abort = new AbortController()
	useEffect(() => {
		axios.get(baseUrl + 'api/buyzone/auth/isloggedin', { signal: abort.signal }).then(() => {
			setIsLoading(false)
		}).catch((err) => {
			setIsLoading(false)
			setError(true)
		})

		return () => {
			abort.abort()
		}

	}, [])

	return <>{isLoading ? "Authenticating..." : user != null && !isError ? <Component /> : < Navigate to="/user/logout" />}</>;
};

export default IsAuth;
