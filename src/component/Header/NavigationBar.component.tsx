import { Link } from 'react-router-dom';

const style = {
  list: 'flex my-auto mx-12',
  listElement: 'inline-block mx-3 text-sm text-clrBrown'
};
const NavigationBar = () => {
  return (
    <ul className={style.list}>
      <li className={style.listElement}>
        <Link to="/">Cà phê</Link>
      </li>
      <li className={style.listElement}>
        <Link to="/">Trà</Link>
      </li>
      <li className={style.listElement}>
        <Link to="/product">Menu</Link>
      </li>
      <li className={style.listElement}>
        <Link to="/">Cửa hàng</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
