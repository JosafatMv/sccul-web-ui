//import axios as instance
import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:8080/api',
});

const requestHandler = (request) => {
	request.headers['Accept'] = 'application/json';
	request.headers['Content-Type'] = 'application/json';

	// const session = JSON.parse(localStorage.getItem('user')) || null;
	// if (session?.logged) {
	// 	request.headers['Authorization'] = `Bearer ${session.token}`;
	// }

	const session = localStorage.getItem('token') || null;
	if (session) {
		request.headers['Authorization'] = `Bearer ${session}`;
	}
	return request;
};

const errorResponseHandler = (error) => {
	return Promise.reject({ ...error });
};

const successRespondeHandler = (response) => {
	return Promise.resolve(response.data);
};

instance.interceptors.request.use(
	(request) => requestHandler(request),
	(error) => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(request) => successRespondeHandler(request),
	(error) => errorResponseHandler(error)
);

export default instance;
