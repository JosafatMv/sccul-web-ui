import '../assets/css/components/PrimaryButton.css';

export const PrimaryButton = ({ text, onClick, className, type }) => {
	return (
		<button
			className={`${className} primary-btn`}
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
};
