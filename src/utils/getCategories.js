import { showSimpleAlert } from '../shared/plugins/alerts';
import instance from '../shared/plugins/axios';

export const getCategories = async () => {
	try {
		const { data } = await instance.get('/categories/');
		return data;
	} catch (error) {
		showSimpleAlert('Error', 'Error al cargar las categorias', 'error');
	}
};
