import { useNavigate } from 'react-router-dom';
import { Form as FormBt } from 'react-bootstrap';

import { Form, Formik } from 'formik';
import * as yup from 'yup';

import { PrimaryButton } from '../../components/PrimaryButton';
import { SecondaryButton } from '../../components/SecondaryButton';
import { TextInput } from '../../components/Form/TextInput';

import styles from '../../assets/css/Pages/Login.module.css';
import img from '../../assets/img/Hands-Phone-1.png';

export const Login = () => {
	const navigate = useNavigate();

	const handleOnCancel = () => {
		navigate('/');
	};

	const handleOnSubmit = (values, resetForm) => {
		console.log(values);
		console.log(values.email);
		console.log(values.password);
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
					<div className='col-6'>
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
											autoComplete='off'
											label='Correo electrónico'
											name='email'
											placeholder='ejem@gmail.com'
											isInvalid={
												!!errors.email && touched.email
											}
										/>
									</FormBt.Group>

									<FormBt.Group className='mb-3'>
										<TextInput
											autoComplete='off'
											label='Contraseña'
											name='password'
											placeholder='*****'
											type='password'
											isInvalid={
												!!errors.password &&
												touched.password
											}
										/>
									</FormBt.Group>

									<SecondaryButton
										text='Cancelar'
										className={`${styles.loginBtn} me-3`}
										type='button'
										onClick={handleOnCancel}
									/>
									<PrimaryButton
										className={`${styles.loginBtn} me-3`}
										text='Iniciar sesión'
										type='submit'
										onClick={handleOnSubmit}
										disabled={
											!values.email ||
											!values.password ||
											!!errors.email ||
											!!errors.password
										}
									/>
								</Form>
							)}
						</Formik>
					</div>

					<div className='col-6'>
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
