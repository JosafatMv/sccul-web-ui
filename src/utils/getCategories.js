import instance from '../shared/plugins/axios';

export const getCategories = async () => {
	const { data } = await instance.get('/categories/');
	return data;
};
