import { showSimpleAlert } from '../shared/plugins/alerts';
import instance from '../shared/plugins/axios';

export const changeCategoryStatus = async (id, status, loadCategories) => {
	try {
		const { data } = await instance.patch(`/categories/${id}`, {
			status: status === 1 ? 0 : 1,
		});

		if (data.error) showSimpleAlert('Error', data.message, 'error');

		loadCategories();
	} catch (error) {
		showSimpleAlert(
			'Error',
			'Error al cambiar el estado de la categoría',
			'error'
		);
	}
};
