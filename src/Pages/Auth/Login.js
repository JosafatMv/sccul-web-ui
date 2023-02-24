import {Link, useNavigate} from 'react-router-dom';

import * as yup from 'yup';

import {SecondaryButton} from '../../components/SecondaryButton';
import styles from '../../assets/css/Pages/Login.module.css';

import img from '../../assets/img/Hands-Phone-1.png';
import {Form, Field, Formik} from 'formik';
import {PrimaryButton} from "../../components/PrimaryButton";

export const Login = () => {
    const navigate = useNavigate();

    const handleOnCancel = () => {
        navigate('/');
    };

    const handleOnSubmit = (values) => {
        console.log(values);
    };

    const objectSchema = yup.object().shape({
        email: yup
            .string()
            .email('El email debe ser válido')
            .required('El email es requerido'),
        password: yup
            .string()
            .required('La contraseña es requerida'),
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
                            validationSchema={objectSchema}
                            onSubmit={handleOnSubmit}

                        >
                            {({errors, touched}) => (
                                <Form className={`${styles.loginContainer}`}>
                                    <label for="email">Correo electrónico</label>
                                    <span><i className="bi bi-arrow-down-up"></i></span>
                                    <Field name='email' placeholder="Correo electrónico"
                                           className={`${styles.loginField} form-control`}
                                           type='email' id="cancel"/>
                                    {errors.email && touched.email ? (
                                        <div className={`${styles.loginAlert} alert alert-danger`}>
                                            {errors.email}
                                        </div>
                                    ) : null}

                                    <label for="password">Contraseña</label>
                                    <Field name='password' placeholder="Contraseña" className={`${styles.loginField} form-control`} type="password" id="login"/>
                                    {errors.password && touched.password ? (
                                        <div className={`${styles.loginAlert} alert alert-danger`}>
                                            {errors.password}
                                        </div>
                                    ) : null}
                                    <SecondaryButton
                                        text='Cancelar'
                                        className={`${styles.loginBtn} me-3`}
                                        type='button'
                                        onClick={handleOnCancel}
                                    />
                                    <PrimaryButton
                                        className={`${styles.loginBtn} me-3`}
                                        text='Iniciar sesión'
                                        type='button'
                                        onClick={handleOnSubmit}

                                    ></PrimaryButton>
                                </Form>
                            )}

                        </Formik>
                        {/* <form className=''>
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
								<label
									htmlFor='password'
									className='form-label'
								>
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
						</form> */}

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
            {/* <div className='login-logo-container'>
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
			</div> */}
        </>
    );
};
