import { Button } from 'react-bootstrap';
import { MdEdit } from 'react-icons/md';
import { Category } from '../components/shared/Category';
import { CourseName } from '../Pages/Courses/CourseName';
import { calcDiscount } from './calcDiscount';

export const getCourseColumns = (handleEditCourse, handleOnChangeStatus) => [
	{
		Header: '#',
		accessor: 'id',
		Cell: ({ row }) => <div>{row.index + 1}</div>,
	},
	{
		Header: 'Nombre',
		accessor: 'name',
		sortType: 'basic',
		align: 'start',
		Cell: ({ row }) => (
			<div className='text-start'>
				<CourseName
					imgSrc={row.original.image}
					title={row.original.name}
				/>
			</div>
		),
	},
	{
		Header: 'Descripción',
		accessor: 'description',
		sortType: 'basic',
	},
	{
		Header: 'Secciones',
		accessor: 'sections.length',
		sortType: 'basic',
	},
	{
		Header: () => (
			<div>
				<div>Precio</div>
				<span className='text-danger' style={{ fontSize: '12px' }}>
					(Descuento)
				</span>
			</div>
		),
		accessor: 'price',
		sortType: 'basic',
		Cell: ({ row }) => (
			<>
				{row.original.discount > 0 ? (
					<span className='text-danger'>
						$
						{calcDiscount(
							row.original.price,
							row.original.discount
						)}{' '}
						MX
					</span>
				) : (
					<span>${row.original.price} MX</span>
				)}
			</>
		),
	},
	{
		Header: 'Categoría',
		accessor: 'category.name',
		sortType: 'basic',
		Cell: ({ row }) => (
			<Category className='p-1' text={row.original.category.name} />
		),
	},
	{
		Header: 'Editar',
		accessor: 'edit',
		disableSortBy: true,
		Cell: ({ row }) => (
			<Button
				variant='primary'
				disabled={row.original.status === 0}
				onClick={() => console.log('handleEditCourse')}
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
				onClick={() => console.log('handleOnChangeStatus')}
			>
				{row.original.status ? 'Activo' : 'Inactivo'}
			</Button>
		),
	},
];
