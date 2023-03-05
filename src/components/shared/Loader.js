import styles from '../../assets/css/components/shared/Loader.module.css';

export const Loader = () => {
	return (
		<div className={styles.loaderContainer}>
			<span className={styles.loader}></span>
		</div>
	);
};
