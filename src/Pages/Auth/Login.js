import logo from '../../assets/img/logo.png';
import img from '../../assets/img/login.png';

import '../../assets/css/Pages/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { SecondaryButton } from '../../components/SecondaryButton';
import { PrimaryButton } from '../../components/PrimaryButton';

export const Login = () => {
	const navigate = useNavigate();

	const handleOnCancel = () => {
		navigate('/');
	};

	return (
		<>
			<div className='login-logo-container'>
				<img src={logo} alt='logo' />
				<h1>VENUS</h1>
			</div>

			<h2 className='login-title'>¡Bienvenido de nuevo a tu orbita!</h2>

			<div className='login-img-container'>
				<img src={img} alt='Login img' />
			</div>

			<div className='login-form-container'>
				<form className='px-4'>
					<div className='mb-3'>
						<label htmlFor='email' className='form-label'>
							Correo electrónico
						</label>
						<input
							className='form-control'
							type='email'
							name='email'
							id='email'
						/>
					</div>

					<div className='mb-1'>
						<label htmlFor='password' className='form-label'>
							Contraseña
						</label>
						<input
							className='form-control'
							type='password'
							name='password'
							id='password'
						/>
					</div>

					<Link className='login-forgot-password'>
						¿Olvidaste tu contraseña?
					</Link>

					<div className='d-flex mt-4'>
						<SecondaryButton
							text='Cancelar'
							className='me-3'
							type='button'
							onClick={handleOnCancel}
						/>
						<PrimaryButton
							text='Iniciar sesión'
							type='button'
						></PrimaryButton>
					</div>
				</form>
			</div>
		</>
	);
};
