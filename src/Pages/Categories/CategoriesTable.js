import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import { Table, Button, Form } from 'react-bootstrap';
import { MdEdit, MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

const COLUMNS = [
	{
		Header: '#',
		accessor: 'id',
		sortType: 'basic',
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
		Cell: ({ row }) => (
			<Button
				variant='primary'
				disabled={row.original.status === 'inactive'}
			>
				<MdEdit />
			</Button>
		),
	},
	{
		Header: 'Estado',
		accessor: 'status',
		Cell: ({ row }) => (
			<Button variant={row.original.status ? 'success' : 'danger'}>
				{row.original.status ? 'Activo' : 'Inactivo'}
			</Button>
		),
	},
];

export const CategoriesTable = ({ dataTable }) => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => dataTable, [dataTable]);

	const tableInstance = useTable(
		{ columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
		useSortBy,
		usePagination
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
	} = tableInstance;

	return (
		<>
			<Table
				striped
				hover
				responsive
				{...getTableProps()}
				className='text-center align-middle'
			>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(
										column.getSortByToggleProps()
									)}
								>
									{column.render('Header')}
									<span>
										{column.isSorted ? (
											column.isSortedDesc ? (
												<MdArrowDownward color='000' />
											) : (
												<MdArrowUpward color='000' />
											)
										) : (
											''
										)}
									</span>
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
		</>
	);
};
