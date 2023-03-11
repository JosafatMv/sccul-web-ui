import { MdSearch } from 'react-icons/md';
import styles from '../../assets/css/components/CustomTable/GlobalFilter.module.css';

export const GlobalFilter = ({
	filter,
	setFilter,
	placeholder = 'Buscar...',
}) => {
	return (
		<div className={styles.searchBarContainer}>
			<input
				type='text'
				className={styles.searchBarInput}
				placeholder={placeholder}
				name='searchText'
				onChange={(e) => setFilter(e.target.value)}
				value={filter || ''}
			/>
			<MdSearch className={styles.searchBarIcon} />
		</div>
	);
};
