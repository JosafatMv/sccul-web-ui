import '../assets/css/components/PrimaryButton.css';

export const PrimaryButton = ({ text, onClick, className, type, disabled }) => {
	return (
		<button
			className={`${className} primary-btn`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{text}
		</button>
	);
};
