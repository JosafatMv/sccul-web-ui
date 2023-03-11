import { Button } from 'react-bootstrap';
import { MdEdit } from 'react-icons/md';

export const getColumns = (handleEditCategory, handleOnChangeStatus) => {
	return [
		{
			Header: '#',
			accessor: 'id',
			Cell: ({ row }) => <div>{row.index + 1}</div>,
		},
		{
			Header: 'Nombre',
			accessor: 'name',
			sortType: 'basic',
		},
		{
			Header: 'Editar',
			accessor: 'edit',
			disableSortBy: true,
			Cell: ({ row }) => (
				<Button
					variant='primary'
					disabled={row.original.status === 'inactive'}
					onClick={() => handleEditCategory(row.original)}
				>
					<MdEdit />
				</Button>
			),
		},
		{
			Header: 'Estado',
			accessor: 'status',
			Cell: ({ row }) => (
				<Button
					variant={row.original.status ? 'success' : 'danger'}
					onClick={() =>
						handleOnChangeStatus(
							row.original.id,
							row.original.status
						)
					}
				>
					{row.original.status ? 'Activo' : 'Inactivo'}
				</Button>
			),
		},
	];
};
