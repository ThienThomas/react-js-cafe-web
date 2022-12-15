import { useState } from 'react';
import { FeatherIcons } from '../../assets/icons';
import { LoginForm } from '../Authentication/Login-form.component';
import Button from '../Button.component';
const style = {
  container: 'flex my-auto',
  iconWrapper: 'p-1 rounded-full border-clrOrange border-2 mx-1'
};
const Cart = () => {
  // const { accessToken } = useSelector((state: any) => {
  //   return {
  //     accessToken: state.auth.accessToken
  //   };
  // });
  // Logger(accessToken, LogType.DEBUG, 'Cart');
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  return (
    <>
      <div className={style.container}>
        <Button className={style.iconWrapper}>
          <FeatherIcons.FiShoppingBag color={'#FC8621'} size={25} />
        </Button>
        <Button className={style.iconWrapper} onClick={() => setLoginFormVisible(true)}>
          <FeatherIcons.FiUser color={'#FC8621'} size={25} />
        </Button>
      </div>
      <LoginForm visible={loginFormVisible} onClose={() => setLoginFormVisible(false)} />
    </>
  );
};

export default Cart;
