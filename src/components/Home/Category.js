import styles from '../../assets/css/components/Home/Category.module.css';

export const Category = ({ text, className }) => {
	return <div className={`${styles.categoryBox} ${className}`}>{text}</div>;
};
