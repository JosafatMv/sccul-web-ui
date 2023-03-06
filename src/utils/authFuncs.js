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

		console.log(data);

		if (data.message === messages.login.errorCrendentials) {
			showSimpleAlert('Error', data.message, 'error');
			return null;
		}

		if (data.message === messages.login.errorServer) {
			showSimpleAlert('Error', data.message, 'error');
			return null;
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

			dispatch({
				type: 'IS_LOADING',
				payload: false,
			});
		} catch (error) {
			if (error.response.data.message === messages.renew.errorExpired) {
				showSimpleAlert('Error', 'Sesión expiarada', 'error');
			}

			if (error.response.data.message === messages.renew.errorSignature) {
				showSimpleAlert('Error', error.response.data.message, 'error');
			}

			localStorage.removeItem('token');
			dispatch({
				type: 'LOGOUT',
			});

			dispatch({
				type: 'IS_LOADING',
				payload: false,
			});
		}
	} else {
		dispatch({
			type: 'LOGOUT',
		});
	}
};
