import { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import {
	useGlobalFilter,
	usePagination,
	useSortBy,
	useTable,
} from 'react-table';
import { GlobalFilter } from './GlobalFilter';
import { Pagination } from './Pagination';

export const CustomTable = ({ dataTable, columns }) => {
	const data = useMemo(() => dataTable, [dataTable]);

	const tableInstance = useTable(
		{ columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
		useGlobalFilter,
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
		state: { pageIndex, pageSize, globalFilter },
		setGlobalFilter,
	} = tableInstance;

	return (
		<>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

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

			<Pagination
				previousPage={previousPage}
				canPreviousPage={canPreviousPage}
				nextPage={nextPage}
				canNextPage={canNextPage}
				pageIndex={pageIndex}
				pageOptions={pageOptions}
				pageSize={pageSize}
				setPageSize={setPageSize}
			/>
		</>
	);
};
