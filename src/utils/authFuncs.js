import axios from 'axios';
import { showSimpleAlert } from '../shared/plugins/alerts';
import { messages } from './messages';

export const loginPost = async (email, password) => {
	const dataJson = {
		username: email,
		password,
	};

	try {
		const data = await axios.post(
			'http://localhost:8080/api/auth/login',
			dataJson
		);

		return data.data.data;
	} catch (error) {
		const { data } = error.response;

		if (data.message === messages.login.errorCrendentials) {
			showSimpleAlert('Error', data.message, 'error');
		}

		if (data.message === messages.login.errorServer) {
			showSimpleAlert('Error', data.message, 'error');
		}

		return null;
	}
};

export const renewToken = async (dispatch) => {
	const token = localStorage.getItem('token') || '';

	if (token) {
		try {
			const resp = await axios.get(
				'http://localhost:8080/api/auth/renew',
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			console.log(resp);

			if (resp.data?.data.length > 0) {
				localStorage.setItem('token', resp.data.data);

				dispatch({
					type: 'LOGIN',
				});
			} else {
				localStorage.removeItem('token');
				dispatch({
					type: 'LOGOUT',
				});
			}
		} catch (error) {
			console.log(error);
			localStorage.removeItem('token');
			dispatch({
				type: 'LOGOUT',
			});
		}
	} else {
		dispatch({
			type: 'LOGOUT',
		});
	}
};
