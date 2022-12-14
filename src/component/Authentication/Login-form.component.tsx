/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { EGender, IUserRegisterParams } from '../../api/auth';
import { Images } from '../../assets/image';
import useUserSlice from '../../hooks/useUserSlice';
import { actions } from '../../store';
import Input from '../Common/Input';
import Message from '../Common/Message';
import Image from '../Image.component';

const styles = {
  container: 'h-screen w-full bg-clrLightGrey z-60 absolute top-0 left-0',
  formContainer: 'bg-clrWhite opacity-100 w-1/4 rounded-md mx-auto mt-10',
  form: 'px-3 pb-3',
  input:
    'w-full focus:outline-none transition-all duration-750 focus:border-clrOrange border p-2 rounded-lg mt-2 text-sm',
  button: 'mt-2 bg-clrOrange p-2 rounded-lg w-full font-bold text-clrWhite'
};

interface Form {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
  name: string;
  gender: string;
  birth: string;
  address: string;
}

export const LoginForm = (props: { visible: boolean; onClose: any }) => {
  const { visible, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const loginUser = (data: any) => {
    dispatch(actions.auth.login(data));
  };
  const registerUser = (data: Form) => {
    dispatch(actions.auth.register(data));
  };

  const handleSubmitForm = (data: Form) => {
    isLogin ? loginUser({ username: data.username, password: data.password }) : registerUser(data);
  };
  useEffect(() => {
    if (!visible) {
      setIsLogin(true);
    }
  }, [visible]);

  useEffect(() => {}, [isLogin]);

  useEffect(() => {}, []);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    clearErrors
  } = useForm<Form>();

  // const { errorLogin, errorRegister } = useUserSlice();

  // const isErrors = errorLogin || errorRegister;

  const clearAllErrors = () => Object.entries(errors).forEach(([k]) => clearErrors(k as any));

  return visible ? (
    <div className=" w-full bg-clrLightGrey z-60 fixed inset-0" onClick={onClose}>
      <div className={"absolute top-1/2  left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center"} onClick={(event) => event.stopPropagation()}>
        <div className=" lg:w-1/2 bg-white ">
            <Image src={Images.imgLoginBanner} height={'100%'} width={'100%'} />
            <p className="text-sm mt-3 text-center">????ng nh???p v?? ch???n m??n ??a th??ch c???a b???n</p>
            <form className={'w-full pl-10 pr-6 py-10 '} onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="overflow-y-auto  max-h-[500px] scroll pt-5">
                <Input
                  register={{
                    ...register('username', {
                      required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng',
                      maxLength: {
                        value: 15,
                        message: 'Username kh??ng qu?? 15 k?? t???'
                      }
                    })
                  }}
                  label="username"
                  errors={errors?.username?.message}
                />
                {isLogin ? (
                  <Input
                    register={{
                      ...register('password', {
                        required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                      })
                    }}
                    type="password"
                    label={'password'}
                    errors={errors?.password?.message}
                  />
                ) : (
                  <Input
                    register={{
                      ...register('password', {
                        required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng',
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/,
                          message:
                            'M???t kh???u c?? ??t nh???t 6 k?? t???, ??t nh???t m???t ch??? s???, ??t nh???t m???t k?? t??? ?????c bi???t v?? ??t nh???t m???t k?? t??? vi???t hoa'
                        },
                        maxLength: {
                          value: 20,
                          message: 'Password kh??ng qu?? 20 k?? t???'
                        }
                      })
                    }}
                    type="password"
                    label={'password'}
                    errors={errors?.password?.message}
                  />
                )}

                {!isLogin && (
                  <>
                    <Input
                      register={{
                        ...register('confirmPassword', {
                          validate: (value: any) => value === watch('password') || 'Password kh??ng h???p l???'
                        })
                      }}
                      type="password"
                      label="Nh???p l???i m???t kh???u"
                      errors={errors?.confirmPassword?.message}
                    />
                    <Input
                      register={{
                        ...register('phone', {
                          required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng',
                          pattern: {
                            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                            message: 'H??y nh???p ????ng ?????nh d???ng s??? ??i???n tho???i'
                          }
                        })
                      }}
                      label="phone"
                      errors={errors?.phone?.message}
                    />

                    <Input
                      type="email"
                      register={{
                        ...register('email', {
                          required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: '?????nh d???ng email kh??ng ch??nh x??c'
                          }
                        })
                      }}
                      label="Email"
                      errors={errors?.email?.message}
                    />

                    <Input
                      register={{
                        ...register('address', {
                          required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                        })
                      }}
                      label="?????a ch???"
                      errors={errors?.address?.message}
                    />

                    <Input
                      register={{
                        ...register('name', {
                          required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng',
                          minLength: {
                            value: 6,
                            message: 'Tr?????ng n??y t???i thi???u 6 k?? t???'
                          }
                        })
                      }}
                      label="H??? v?? T??n"
                      errors={errors?.name?.message}
                    />

                    <Input
                      type="date"
                      register={{
                        ...register('birth', {
                          required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                        })
                      }}
                      label="Ng??y Sinh"
                      errors={errors?.birth?.message}
                    />

                    <div className="mb-10">
                      <label className="capitalize peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ">
                        {'gender'}
                      </label>
                      <div className="flex items-center gap-4">
                        <input
                          value={'FEMALE'}
                          id={'FEMALE'}
                          defaultChecked={true}
                          type={'radio'}
                          {...register('gender', {
                            required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                          })}
                          placeholder=" "
                        />
                        <label htmlFor={'FEMALE'} className="cursor-pointer">
                          {'N???'}
                        </label>
                      </div>
                      <div className="flex items-center gap-4">
                        <input
                          value={'MALE'}
                          id={'MALE'}
                          type={'radio'}
                          {...register('gender', {
                            required: 'Tr?????ng n??y kh??ng ???????c ????? tr???ng'
                          })}
                          placeholder=" "
                        />
                        <label htmlFor="MALE" className="cursor-pointer">
                          {'Nam'}
                        </label>
                      </div>
                      <Message message={errors?.gender?.message} />
                    </div>
                  </>
                )}
              </div>

              {/* {isErrors && (
                <div className="">
                  <Message message={`L???i: ${isErrors}`} />
                </div>
              )} */}

              <button className={styles.button} type="submit">
                {isLogin ? '????ng Nh???p' : '????ng k??'}
              </button>
              <p className="text-sm text-center my-2">
                {isLogin ? 'Ch??a c?? t??i kho???n ? ' : '???? c?? t??i kho???n ? '}
                <span className="text-clrOrange">
                  <button
                    type="button"
                    onClick={() => {
                      setIsLogin((pre) => !pre), clearAllErrors();
                    }}>
                    {isLogin ? '????ng k?? ngay!' : '????ng nh???p'}
                  </button>
                </span>
              </p>
              <span className="text-clrOrange text-sm">
                <Link to="/forgot" className="text-center w-full" onClick={onClose}>
                  Qu??n m???t kh???u ?
                </Link>
              </span>
            </form>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
