import { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { PrimaryButton } from '../../shared/PrimaryButton';

export const TableParticipants = ({ data }) => {
	//TODO: Cambiar el lastname por si tiene encuesta o no
	//TODO: En el name poner el nombre completo (name, surname y lastname)

	const handleShowSurvey = (id) => {
		console.log(id);
	};

	const columns = useMemo(
		() => [
			{
				Header: '#',
				accessor: 'id',
			},
			{
				Header: 'Nombre',
				accessor: 'name',
			},
			{
				Header: 'Correo Electrónico',
				accessor: 'email',
			},
			{
				Header: 'Teléfono',
				accessor: 'phoneNumber',
			},
			{
				Header: 'Encuesta',
				accessor: 'hasSurvey',
				Cell: ({ value }) =>
					value.hasSurvey ? (
						<Button
							variant='primary'
							onClick={() => handleShowSurvey(value.id)}
						>
							Ver respuestas
						</Button>
					) : (
						<Button variant='outline-secondary' disabled>
							No ha contestado la encuesta
						</Button>
					),
			},
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: 0, pageSize: 10 },
		},
		useSortBy,
		usePagination
	);

	return (
		<div>
			<Table
				striped
				hover
				responsive
				{...getTableProps()}
				className='text-center'
			>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
									className={
										column.isSorted
											? column.isSortedDesc
												? 'desc'
												: 'asc'
											: ''
									}
								>
									{column.render('Header')}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>
											{cell.render('Cell')}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</Table>

			<div className='d-flex align-items-center mb-5'>
				<PrimaryButton
					onClick={() => previousPage()}
					disabled={!canPreviousPage}
					text='Anterior'
					className='w-auto px-4 me-2 mb-0'
				/>
				<PrimaryButton
					onClick={() => nextPage()}
					disabled={!canNextPage}
					text='Siguiente'
					className='w-auto px-4 me-2 mb-0'
				/>
				<span className='me-2'>
					Página{' '}
					<strong>
						{pageIndex + 1} de {pageOptions.length}
					</strong>{' '}
				</span>
				<Form.Select
					value={pageSize}
					style={{ width: 'auto' }}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}
				>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Mostrar {pageSize} resultados
						</option>
					))}
				</Form.Select>
			</div>
		</div>
	);
};
