import { Link } from 'react-router-dom';

const twStyle = {
  list: ' mx-12 flex flex-row',
  listElement: 'text-sm text-clrBrown  min-w-[75px] text-center my-auto h-full justify-center p-4'
};

const NavigationBar = (props: { setBottomMenuVisible: any }) => {
  const { setBottomMenuVisible } = props;
  return (
    <ul className={twStyle.list}>
      <li className={twStyle.listElement}>
        <Link to="/">Cà phê</Link>
      </li>
      <li className={twStyle.listElement}>
        <Link className="w-full " to="/">
          Trà
        </Link>
      </li>
      <li
        className={twStyle.listElement}
        onMouseEnter={() => setBottomMenuVisible(true)}
        onMouseLeave={() => setBottomMenuVisible(false)}>
        <Link className="w-full " to="/menu">
          Menu
        </Link>
      </li>
      <li className={twStyle.listElement}>
        <Link to="/">Cửa hàng</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
