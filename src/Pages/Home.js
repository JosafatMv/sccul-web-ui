import { Category } from '../components/Home/Category';

import styles from '../assets/css/components/Home/Home.module.css';

export const Home = () => {
	return (
		<>
			<h2>Categorías</h2>

			<div className={`${styles.categoriesContainer} py-2`}>
				<Category text='Economia' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
				<Category text='Tecnología' className='me-4' />
			</div>
		</>
	);
};
