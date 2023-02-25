import '../assets/css/components/PrimaryButton.css';

export const PrimaryButton = ({
	text,
	onClick,
	className = '',
	type,
	disabled,
}) => {
	const isDisabled = () => (disabled ? 'primary-btn-disabled' : '');

	return (
		<button
			className={`${className} ${isDisabled()} primary-btn`}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{text}
		</button>
	);
};
