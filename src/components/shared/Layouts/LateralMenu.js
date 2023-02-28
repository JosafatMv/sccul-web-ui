import { Link } from 'react-router-dom';

import {
	Sidebar,
	Menu,
	MenuItem,
	sidebarClasses,
	ProSidebarProvider,
} from 'react-pro-sidebar';

import {
	MdAccountCircle,
	MdAssignmentTurnedIn,
	MdBook,
	MdCategory,
	MdHome,
} from 'react-icons/md';

import { SidebarHeader } from './SidebarHeader';

export const LateralMenu = () => {
	const menuItemStyles = {
		button: ({ level, active, disabled }) => {
			// only apply styles on first level elements of the tree
			if (level === 0)
				return {
					color: active ? '#002E60' : '#000',
					backgroundColor: active
						? 'rgba(0, 148, 117, 0.15);'
						: undefined,
					'&:hover': {
						backgroundColor: 'rgba(0, 148, 117, 0.15);',
					},
				};
		},
		root: {
			fontSize: '1.2rem',
		},
	};

	return (
		<>
			<ProSidebarProvider>
				<Sidebar
					rootStyles={{
						[`.${sidebarClasses.container}`]: {
							backgroundColor: 'white',
							height: '100vh',
						},
					}}
				>
					<SidebarHeader />

					<Menu
						className='align-items-center'
						menuItemStyles={menuItemStyles}
					>
						<MenuItem icon={<MdHome />} component={<Link to='/' />}>
							Inicio
						</MenuItem>
						<MenuItem icon={<MdBook />}>Cursos</MenuItem>
						<MenuItem icon={<MdCategory />}>Categorías</MenuItem>
						<MenuItem icon={<MdAssignmentTurnedIn />}>
							Encuestas
						</MenuItem>

						<hr className='mt-5 mx-4' />

						<MenuItem icon={<MdAccountCircle />}>
							Mi perfil
						</MenuItem>
					</Menu>
				</Sidebar>
			</ProSidebarProvider>
		</>
	);
};
