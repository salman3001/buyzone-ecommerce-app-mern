import axios from 'axios';
import React, { useEffect, useState, type FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { type RootState } from '../../redux/store';
import { baseUrl } from '../../Utils/baseUrl';

const IsAdmin: FunctionComponent<{ Component: () => JSX.Element }> = ({ Component }) => {
	const { user } = useSelector((state: RootState) => state.user)
	const [isError, setError] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const abort = new AbortController()
	useEffect(() => {
		axios.get(baseUrl + 'api/buzone/auth/isadmin', { signal: abort.signal }).then(() => {
			setIsLoading(false)
		}).catch((err) => {
			setIsLoading(false)
			setError(true)
		})

		return () => {
			abort.abort()
		}


	})

	return <>{isLoading ? "Authenticating..." : user?.isAdmin && !isError ? <Component /> : < Navigate to="/user/logout" />}</>;
};

export default IsAdmin;
