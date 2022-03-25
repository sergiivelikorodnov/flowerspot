import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerAction } from '../../store/apiActions';
import {
  setIsModalActive,
  setIsRegisterModalActive,
} from '../../store/commonSlice/commonSlice';
import { AuthDataRegisterType } from '../../types/auth-data';
import { motion, AnimatePresence } from 'framer-motion';
import {useForm, SubmitHandler } from 'react-hook-form';

function Register(): JSX.Element {
  const dispatch = useDispatch();
  const {
    register,
    formState:{
      errors,
      isValid,
    },
    handleSubmit,
  } = useForm<AuthDataRegisterType>({
    mode: 'onChange'
  });

  const handleClose = () => {
    dispatch(setIsModalActive(false));
    dispatch(setIsRegisterModalActive(false));
  };

  const onSubmit:SubmitHandler<AuthDataRegisterType> = (authData) => {
    console.log(authData);
    dispatch(registerAction(authData));

  };


  const backDrop = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2>Create an Account</h2>
          <form
            className="contact-form"
            action="#"
            method="post"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-line">
              <div className="input-wrap">
                <label htmlFor="formName">First Name
                </label>
                <input
                  className="form-input"
                  id="formName"
                  type="text"
                  placeholder="Michael"
                  {...register('firstName',{
                    required : 'Enter First Name',
                    minLength:{
                      value: 4,
                      message: 'Minimum 4 symbols'
                    },
                  })}
                />
                <div className='form-alert'>
                  {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
                </div>
              </div>
              <div className="input-wrap">
                <label htmlFor="formLastName">Last Name</label>
                <input
                  className="form-input"
                  id="formLastName"
                  type="text"
                  placeholder="Berry"
                  {...register('lastName',{
                    required : 'Enter Last Name',
                    minLength:{
                      value: 4,
                      message: 'Minimum 4 symbols'
                    },
                  })}
                />
                <div className='form-alert'>
                  {errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}
                </div>
              </div>
            </div>
            <div className="input-wrap">
              <label htmlFor="formBirth">Date of Birth</label>
              <input
                className="form-input"
                id="formBirth"
                type="date"
                defaultValue="1980-05-20"
                min="1900-01-01"
                max="2023-12-31"
                {...register('dateOfBirth',{
                  required : 'Enter Date of Birth',
                })}
              />
              <div className='form-alert'>
                  {errors?.dateOfBirth && <p>{errors?.dateOfBirth?.message || 'Error!'}</p>}
                </div>
            </div>
            <div className="input-wrap">
              <label htmlFor="formEmail">Email Address</label>
              <input
                className="form-input"
                id="formEmail"
                type="email"
                defaultValue=""
                placeholder="michael.berry@gmail.com"
                {...register('email',{
                  required : 'Enter Valid Email',
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                })}
              />
              <div className='form-alert'>
                  {errors?.email && <p>{errors?.email?.message || 'Enter Valid Email'}</p>}
                </div>
            </div>
            <div className="input-wrap">
              <label htmlFor="formPassword">Password</label>
              <input
                className="form-input"
                id="formPassword"
                type="password"
                defaultValue=""
                placeholder="************"
                {...register('password',{
                  required : 'Enter Password',
                  minLength:{
                    value: 6,
                    message: 'Minimum 6 symbols'
                  },
                })}
              />
              <div className='form-alert'>
                  {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
                </div>
            </div>
            <button className={!isValid ? "button-disabled button2": "button2"} type="submit">
              Create Account
            </button>
          </form>
          <Link to="/" className="cancel" onClick={handleClose}>
            I don’t want to register
          </Link>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Register;
