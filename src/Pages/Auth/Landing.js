import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../../components/PrimaryButton';

import logo from '../../assets/img/logo.png';
import loginImg from '../../assets/img/login-img.png';

import '../../assets/css/Pages/Landing.css';

export const Landing = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		navigate('/login');
	};

	return (
		<>
			<div className='landing-logo-container'>
				<img src={logo} alt='logo' />
				<h1>Aprende sin límites a tu tiempo y espacio.</h1>
			</div>

			<div className='login-img-container'>
				<img src={loginImg} alt='Login img' />
			</div>

			<div className='login-actions-container'>
				<PrimaryButton
					text={'Iniciar sesión'}
					onClick={handleOnClick}
				></PrimaryButton>
			</div>
		</>
	);
};
