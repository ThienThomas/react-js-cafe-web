import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const { isLoggedIn, user } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn,
      user: state.user
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
        <Link className={style.iconWrapper} to="/cart">
          <FeatherIcons.FiShoppingBag color={'#FC8621'} size={25} />
        </Link>
        <Button
          className={user.avatar ? '' : style.iconWrapper}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          {user.avatar ? (
            <img src={user.avatar} width={35} height={35} className={'rounded-full'} />
          ) : (
            <FeatherIcons.FiUser color={'#FC8621'} size={25} />
          )}
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
