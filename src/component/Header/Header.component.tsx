/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { indicatorNameTranslate } from '../../pages/Menu/Menu.page';
import { LoginForm } from '../Authentication/Login-form.component';
import Cart from './Cart.component';
import Logo from './Logo.component';
import NavigationBar from './NavigationBar.component';

// Styling:
const customStyle = {
  header: 'bg-clrWhite w-full h-14  border-b-2 sticky top-0 z-50 ',
  container: 'container px-10 m-auto h-full flex justify-between'
};

const Header = () => {
  const [bottomMenuVisible, setBottomMenuVisible] = useState(false);
  return (
    <header className={customStyle.header}>
      <nav className={customStyle.container}>
        <Logo />
        <NavigationBar setBottomMenuVisible={setBottomMenuVisible} />
        <Cart />
      </nav>
      <BottomMenu visible={bottomMenuVisible} setBottomMenuVisible={setBottomMenuVisible} />
    </header>
  );
};

const BottomMenu = (props: { visible: boolean; setBottomMenuVisible: any }) => {
  const { visible, setBottomMenuVisible } = props;
  const className = ` transition duration-300 w-full ${
    !visible ? 'hidden opacity-0' : ' opacity-80'
  }  absolute top-[3.4rem] bg-clrWhite mx-auto border py-5`;
  return (
    <div
      className={className}
      onMouseEnter={() => setBottomMenuVisible(true)}
      onMouseLeave={() => setBottomMenuVisible(false)}>
      <div className="container px-10 m-auto grid grid-cols-8">
        {Object.keys(indicatorNameTranslate).map((item: any, index: number) => (
          <Link
            className="text-center transition-all duration-500 hover:text-clrOrange  hover:underline hover:decoration-dashed hover:underline-offset-5"
            to={`/menu/${item.toLowerCase()}`}
            key={`${item.id}${index}`}>
            {indicatorNameTranslate[item]}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Header;
