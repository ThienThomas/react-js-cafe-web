import { FeatherIcons } from '../../assets/icons';
import Button from '../Button.component';
const style = {
  container: 'flex my-auto',
  iconWrapper: 'p-1 rounded-full border-clrOrange border-2 mx-1'
};
const Cart = () => {
  return (
    <div className={style.container}>
      <Button className={style.iconWrapper}>
        <FeatherIcons.FiShoppingBag color={'#FC8621'} size={25} />
      </Button>
      <Button className={style.iconWrapper}>
        <FeatherIcons.FiUser color={'#FC8621'} size={25} />
      </Button>
    </div>
  );
};

export default Cart;
