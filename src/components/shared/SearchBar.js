import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useMemo } from 'react';
import { getCoursesByName } from '../../utils/getCoursesByName';
import styles from '../../assets/css/components/shared/SearchBar.module.css';

export const SearchBar = ({ history, courses, setCoursesFiltered }) => {
	// const location = useLocation();
	// const navigation = useNavigate();
	const [searchText, setSearchText] = useState('');

	// const { q = '' } = queryString.parse(location.search);

	// const [formValues, handleInputChange] = useForm({
	// 	searchText: q,
	// });
	// const { searchText } = formValues;

	const coursesFiltered = useMemo(
		() => getCoursesByName(searchText, courses),
		[searchText, courses]
	);

	const handleInputChange = (e) => {
		// navigation(`?q=${e.target.value}`);
		setSearchText(e.target.value);
		setCoursesFiltered(coursesFiltered);
	};

	// useEffect(() => {
	// 	setCoursesFiltered(coursesFiltered);
	// }, [coursesFiltered, setCoursesFiltered]);

	// const handleSearch = (e) => {
	// 	e.preventDefault();
	// 	navigation(`?q=${searchText}`);
	// };
	return (
		<form className={styles.searchBarContainer}>
			<input
				type='text'
				className={styles.searchBarInput}
				placeholder='Buscar curso...'
				name='searchText'
				onChange={handleInputChange}
			/>
			<MdSearch className={styles.searchBarIcon} />
		</form>
	);
};
