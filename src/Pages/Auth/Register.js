import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { PrimaryButton } from '../../components/PrimaryButton';
import { SecondaryButton } from '../../components/SecondaryButton';

export const Register = () => {
	return (
		<>
			<div className='login-logo-container'>
				<img src={logo} alt='logo' />
				<h1>VENUS</h1>
			</div>

			<h2 className='login-title'>¡Bienvenido de nuevo a tu orbita!</h2>

			<form className='px-4'>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Nombre(s)<span>*</span>
					</label>
					<input
						className='form-control'
						type='text'
						name='name'
						id='name'
						required
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='surname' className='form-label'>
						Apellido paterno<span>*</span>
					</label>
					<input
						className='form-control'
						type='text'
						surname='surname'
						id='surname'
						required
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='lastname' className='form-label'>
						Apellido materno
					</label>
					<input
						className='form-control'
						type='text'
						lastname='lastname'
						id='lastname'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Correo electrónico
					</label>
					<input
						className='form-control'
						type='email'
						name='email'
						id='email'
						required
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='telefono' className='form-label'>
						Teléfono
					</label>
					<input
						className='form-control'
						type='number'
						name='telefono'
						id='telefono'
						required
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
						required
					/>
				</div>

				<div className='mb-1'>
					<label htmlFor='password2' className='form-label'>
						Repita la contraseña
					</label>
					<input
						className='form-control'
						type='password'
						name='password2'
						id='password2'
						required
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
					/>
					<PrimaryButton
						text='Registrarse'
						type='button'
					></PrimaryButton>
				</div>
			</form>
		</>
	);
};
