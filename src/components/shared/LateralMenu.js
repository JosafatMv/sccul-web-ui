import React from 'react';
import {
	Sidebar,
	Menu,
	MenuItem,
	sidebarClasses,
	ProSidebarProvider,
} from 'react-pro-sidebar';
import styles from '../../assets/css/components/LateralMenu.module.css';

export const LateralMenu = () => {
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
					<Menu
						className='align-items-center'
						menuItemStyles={{
							button: ({ level, active, disabled }) => {
								// only apply styles on first level elements of the tree
								if (level === 0)
									return {
										color: active ? '#F3F1F1' : '#002E60',
										backgroundColor: active
											? '#004a4a'
											: undefined,
									};
							},
						}}
					>
						<MenuItem
							style={{
								textAlign: 'center',
								marginTop: '10px',
								marginBottom: '10px',
							}}
						>
							<img
								height='50px'
								src='https://ichef.bbci.co.uk/news/640/cpsprodpb/14EC6/production/_124820758_pug1.jpg'
								alt=''
							/>
						</MenuItem>
						<MenuItem>Inicio</MenuItem>
						<MenuItem>Cursos</MenuItem>
						<MenuItem>Categorías</MenuItem>
						<MenuItem>Encuestas</MenuItem>
					</Menu>
				</Sidebar>
			</ProSidebarProvider>
		</>
	);
};
