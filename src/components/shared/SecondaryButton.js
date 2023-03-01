import '../assets/css/components/SecondaryButton.css';

export const SecondaryButton = ({ text, className = '', type, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`${className} secondary-btn`}
			type={type}
		>
			{text}
		</button>
	);
};
