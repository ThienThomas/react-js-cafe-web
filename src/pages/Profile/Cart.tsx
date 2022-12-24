import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { BiIcons, RiIcons } from '../../assets/icons';
const Cart = () => {
  return (
    <div className="flex w-full">
      <Sidebar>
        <Menu>
          <MenuItem>
            <Link className="flex items-center gap-2" to="/profile">
              <BiIcons.BiUser />
              Thông tin
            </Link>
          </MenuItem>
          <MenuItem>
            <Link className="flex items-center gap-2 text-[#FA8A2A]" to="/user-list-order">
              <RiIcons.RiShoppingBag3Line />
              Giỏ Hàng
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="p-[20px_100px] w-full bg-[#efefef]">
        <p className="text-bold text-xl mb-7">Danh sách đơn hàng</p>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Cart;
