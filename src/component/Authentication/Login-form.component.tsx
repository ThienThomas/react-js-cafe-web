/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EGender, IUserRegisterParams } from '../../api/auth';
import { Images } from '../../assets/image';
import { actions } from '../../store';
import Image from '../Image.component';

const styles = {
  container: 'h-screen w-full bg-clrLightGrey z-60 absolute top-0 left-0',
  formContainer: 'bg-clrWhite opacity-100 w-1/4 rounded-md mx-auto mt-10',
  form: 'px-3 pb-3',
  input:
    'w-full focus:outline-none transition-all duration-750 focus:border-clrOrange border p-2 rounded-lg mt-2 text-sm',
  button: 'mt-2 bg-clrOrange p-2 rounded-lg w-full font-bold text-clrWhite'
};

export const LoginForm = (props: { visible: boolean; onClose: any }) => {
  const { visible, onClose } = props;
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<EGender>(EGender.MALE);
  const [birth, setBirth] = useState('');
  const dispatch = useDispatch();
  const onUsernameChange = (event: any) => {
    setUserName(event.target.value);
  };
  const onPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };
  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const onChangeRepeatPassword = (event: any) => {
    setRepeatPassword(event.target.value);
  };
  const onChangePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const onChangeFullName = (event: any) => {
    setName(event.target.value);
  };
  const onChangeGender = (event: any) => {
    setGender(event.target.value);
  };
  const onChangeBirth = (event: any) => {
    setBirth(event.target.value);
  };
  const loginUser = () => {
    dispatch(actions.auth.login({ username: username, password: password }));
  };
  const registerUser = () => {
    password === repeatPassword &&
      dispatch(
        actions.auth.register({
          name,
          username,
          password,
          email,
          phone,
          gender,
          birth,
          avatar: 'none'
        } as IUserRegisterParams)
      );
    // console.log({ name, username, password, email, phone, gender, birth, avatar: 'none' });
  };

  const handleSubmitForm = (event: any) => {
    event && event.preventDefault();
    isLogin ? loginUser() : registerUser();
  };
  useEffect(() => {
    if (!visible) {
      setIsLogin(true);
    }
  }, [visible]);

  useEffect(() => {
    setPassword('');
    setUserName('');
  }, [isLogin]);

  useEffect(() => {
    setPassword('');
    setUserName('');
  }, []);

  return visible ? (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.formContainer} onClick={(event) => event.stopPropagation()}>
        <Image src={Images.imgLoginBanner} height={'100%'} width={'100%'} />
        <p className="text-sm mt-3 text-center">Đăng nhập và chọn món ưa thích của bạn</p>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <input
            placeholder="Tên đăng nhập"
            className={styles.input}
            name="text"
            value={username}
            type="text"
            onChange={onUsernameChange}
          />
          <input
            placeholder="Mật khẩu"
            className={styles.input}
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          {!isLogin && (
            <input
              placeholder="Nhập lại mật khẩu"
              className={styles.input}
              name="repeatPassword"
              type="password"
              value={repeatPassword}
              onChange={onChangeRepeatPassword}
            />
          )}
          {!isLogin && (
            <input
              placeholder="Số điện thoại"
              className={styles.input}
              name="phone"
              type="tel"
              value={phone}
              onChange={onChangePhone}
            />
          )}
          {!isLogin && (
            <input
              placeholder="Email"
              className={styles.input}
              name="email"
              type="email"
              value={email}
              onChange={onChangeEmail}
            />
          )}
          {!isLogin && (
            <input
              placeholder="Họ và Tên"
              className={styles.input}
              name="fullname"
              type="text"
              value={name}
              onChange={onChangeFullName}
            />
          )}
          {!isLogin && (
            <input
              placeholder="Ngày sinh"
              className={styles.input}
              name="birth"
              type="date"
              value={birth}
              onChange={onChangeBirth}
            />
          )}
          {!isLogin && (
            <div className="mt-2 flex items-between">
              <div className="inline">
                <input
                  id="male"
                  name="gender"
                  type="radio"
                  value={EGender.MALE}
                  className={'mr-1'}
                  checked={gender === EGender.MALE}
                  onChange={onChangeGender}
                />
                <label htmlFor="male">Nam</label>
              </div>
              <div className="inline ml-2">
                <input
                  id="female"
                  name="gender"
                  type="radio"
                  value={EGender.FEMALE}
                  className={'mr-1'}
                  checked={gender === EGender.FEMALE}
                  onChange={onChangeGender}
                />
                <label htmlFor="male">Nữ</label>
              </div>
            </div>
          )}
          <button className={styles.button} type="submit">
            {isLogin ? "Đăng Nhập" : "Đăng ký"}
          </button>
          <p className="text-sm text-center my-2">
            {isLogin ? 'Chưa có tài khoản ? ' : 'Đã có tài khoản ? '}
            <span className="text-clrOrange">
              <button onClick={() => setIsLogin((prevState) => !prevState)}>
                {isLogin ? 'Đăng ký ngay!' : 'Đăng nhập'}
              </button>
            </span>
          </p>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
};
