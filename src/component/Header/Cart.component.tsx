import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FeatherIcons } from '../../assets/icons';
import { BottomAccountOptions } from '../Authentication/Bottom-account-options.component';
import { LoginForm } from '../Authentication/Login-form.component';
import Button from '../Button.component';
const style = {
  container: 'flex my-auto',
  iconWrapper: 'p-1 rounded-full border-clrOrange border-2 mx-1'
};
const Cart = () => {
  const [bottomAccountOptionVisible, setBottomAccountOptionVisible] = useState(false);
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const { isLoggedIn } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  });
  const onMouseLeave = () => {
    setBottomAccountOptionVisible(false);
  };
  const onMouseEnter = () => {
    setBottomAccountOptionVisible(true);
  };

  return (
    <>
      <div className={style.container}>
        <Button className={style.iconWrapper}>
          <FeatherIcons.FiShoppingBag color={'#FC8621'} size={25} />
        </Button>
        <Button
          className={style.iconWrapper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <FeatherIcons.FiUser color={'#FC8621'} size={25} />
        </Button>
        <BottomAccountOptions
          visible={bottomAccountOptionVisible}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          setLoginFormVisible={setLoginFormVisible}
        />
      </div>
      {!isLoggedIn && (
        <LoginForm visible={loginFormVisible} onClose={() => setLoginFormVisible(false)} />
      )}
    </>
  );
};

export default Cart;
