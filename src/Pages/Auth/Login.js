import { useContext } from 'react';
import { AuthContext } from '../../context/auth/authContext';

import { Link } from 'react-router-dom';

import { Form as FormBt } from 'react-bootstrap';

import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { TextInput } from '../../components/Form/TextInput';

import styles from '../../assets/css/Pages/Login.module.css';
import img from '../../assets/img/Hands-Phone-1.png';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useState } from 'react';

export const Login = () => {
	const { login } = useContext(AuthContext);

	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleOnSubmit = (values, resetForm) => {
		login(values.email, values.password);
	};

	const objectSchema = yup.object({
		email: yup
			.string()
			.email('El email debe ser válido')
			.required('El email es requerido'),
		password: yup.string().required('La contraseña es requerida'),
	});
	return (
		<>
			<div className='container mt-5'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<h1 className={`${styles.title} mb-4`}>
							Iniciar sesión
						</h1>
						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							onSubmit={(values, { resetForm }) => {
								handleOnSubmit(values, resetForm);
							}}
							validationSchema={objectSchema}
						>
							{({ errors, values, touched }) => (
								<Form className={`${styles.loginContainer}`}>
									<FormBt.Group className='mb-3'>
										<TextInput
											label='Correo electrónico'
											name='email'
											placeholder='ejem@gmail.com'
											isInvalid={
												!!errors.email && touched.email
											}
										/>
									</FormBt.Group>

									<FormBt.Group className='mb-4'>
										<TextInput
											autoComplete='off'
											label='Contraseña'
											name='password'
											placeholder='*****'
											type={
												showPassword
													? 'text'
													: 'password'
											}
											isInvalid={
												!!errors.password &&
												touched.password
											}
											icon={
												showPassword
													? IoMdEye
													: IoMdEyeOff
											}
											onIconClick={toggleShowPassword}
										/>

										<Link
											className={
												styles.loginForgotPassword
											}
										>
											¿Olvidaste tu contraseña?
										</Link>
									</FormBt.Group>

									<div className='text-center'>
										<PrimaryButton
											text='Iniciar sesión'
											type='submit'
											disabled={
												!values.email ||
												!values.password ||
												!!errors.email ||
												!!errors.password
											}
										/>
									</div>
								</Form>
							)}
						</Formik>
					</div>

					<div className='col-6 d-none d-md-block'>
						<div className={styles.imgContainer}>
							<img
								className={styles.imgLogin}
								src={img}
								alt='Login img'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
