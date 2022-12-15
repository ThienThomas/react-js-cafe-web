/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Images } from '../../assets/image';
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
  return visible ? (
    <div className={styles.container} onClick={onClose}>
      <div className={styles.formContainer} onClick={(event) => event.stopPropagation()}>
        <Image src={Images.imgLoginBanner} height={'100%'} width={'100%'} />
        <p className="text-sm mt-3 text-center">Đăng nhập và chọn món ưa thích của bạn</p>
        <form className={styles.form}>
          <input placeholder="Email" className={styles.input} name="email" type="text" />
          <input placeholder="Mật khẩu" className={styles.input} name="password" type="password" />
          {!isLogin && (
            <input
              placeholder="Nhập lại mật khẩu"
              className={styles.input}
              name="repeatPassword"
              type="password"
            />
          )}
          <button className={styles.button} type="button">
            Đăng nhập
          </button>
          <p className="text-sm text-center my-2">
            Chưa có tài khoản ?
            <span className="text-clrOrange">
              <a onClick={() => setIsLogin((prevState) => !prevState)}>Đăng ký ngay!</a>
            </span>
          </p>
        </form>
      </div>
    </div>
  ) : (
    <></>
  );
};
