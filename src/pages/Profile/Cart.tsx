import { useState } from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiIcons, RiIcons } from '../../assets/icons';

const Cart = () => {
  const [qty, setQty] = useState<number>(1);
  const increaseQuantity = () => {
    setQty(qty + 1);
  };
  const decreaseQuantity = () => {
    setQty(qty - 1);
  };
  const { isLoggedIn } = useSelector((state: any) => {
    return {
      isLoggedIn: state.auth.isLoggedIn
    };
  });
  return isLoggedIn ? (
    <div className="flex w-full">
      <Sidebar>
        <Menu>
          <SubMenu label="Hồ Sơ">
            <MenuItem>
              <Link className="flex items-center gap-2" to="/profile">
                <BiIcons.BiUser />
                Thông tin
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="flex items-center gap-2 " to="/change-password">
                <BiIcons.BiLockAlt />
                Thay đổi mật khẩu
              </Link>
            </MenuItem>
          </SubMenu>
          <MenuItem>
            <Link className="flex items-center gap-2 text-[#FA8A2A]" to="/cart">
              Giỏ Hàng
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
      <div className="p-[20px_50px] w-full bg-[#efefef]">
        <p className="text-bold text-xl mb-7">Danh sách đơn hàng</p>
        <div className="flex gap-8">
          <div className="flex flex-col flex-[3] w-full">
            <div className="shadow-lg p-[20px_20px_25px] w-full h-[60px] bg-white rounded-xl border grid grid-cols-[458px_220px_170px_20px] mb-8">
              <span>Sản phẩm</span>
              <span>Đơn giá</span>
              <span>Số lượng</span>
              <span className="cursor-pointer">
                <RiIcons.RiDeleteBin6Fill size={25} />
              </span>
            </div>
            <div className="shadow-lg p-[20px_20px_25px] w-full bg-white rounded-xl border flex">
              <div className="w-[428px] flex">
                <img src="" alt="" className="w-[80px] h-[80px] mr-2" />
                <p className="text-sm text-[#242424]">Tên sản phẩm</p>
              </div>
              <div className="w-[231px]">Giá sản phẩm</div>
              <div className="w-[190px]">
                <div className="flex items-center">
                  <button
                    onClick={decreaseQuantity}
                    className="border-y border-l border-solid w-7 h-7">
                    -
                  </button>
                  <input
                    type="number"
                    value={qty}
                    readOnly
                    className="w-[50px] border-solid border outline-none h-7 text-center"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="border-y border-r border-solid w-7 h-7">
                    +
                  </button>
                </div>
              </div>
              <div className="w-[50px]">
                <span className="cursor-pointer">
                  <RiIcons.RiDeleteBin6Fill size={20} />
                </span>
              </div>
            </div>
          </div>
          <div className="grid flex-[1] w-full gap-6">
            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[#808089] text-[17px]">Giao tới</p>
                <p className="text-blue-500">Thay đổi</p>
              </div>
              <div className="flex items-center mb-3">
                <p className="font-bold pr-3 border-r-2 border-solid border-slate-300">
                  Võ Minh Tuấn
                </p>
                <p className="font-bold ml-3">0349958009</p>
              </div>
              <div className="flex items-center">
                <p className="text-[#00AA56] bg-[#EFFEF4] p-[0_6px] border border-solid border-transparent font-black text-sm rounded-3xl">
                  Nhà
                </p>
                <p className="ml-2 text-sm text-[#727274]">Nhà giàu nhất Quy Nhơn</p>
              </div>
            </div>
            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex items-center justify-between mb-6">
                <div className="font-bold text-sm">Khuyến Mãi</div>
                <div className="flex items-center gap-1">
                  <p className="text-[#808089] text-sm ">Có thể chọn 2</p>
                  <BiIcons.BiHelpCircle size={20} color={'#808089'} />
                </div>
              </div>
              <div className="flex items-center">
                <RiIcons.RiCoupon3Line size={20} color={'#0D74E4'} />
                <p className="text-[#0D74E4] text-sm ml-1">Chọn hoặc nhập mã Khuyến Mãi</p>
              </div>
            </div>

            <div className="shadow-lg p-[10px_15px_25px] w-full bg-white rounded-xl border">
              <div className="flex justify-between items-center">
                <div>Tổng tiền</div>
                <div className="text-[#fa8c16] text-2xl flex">
                  <div>99.000</div>
                  <div className="ml-1">đ</div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer text-white bg-[#fa8c16] p-[6px_24px] flex items-center rounded-lg justify-center font-extrabold text-lg">
              <Link to="/order">Đặt Hàng</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="h-screen px-28 mt-2">
      <h1 className="text-2xl">Vui lòng đăng nhập để tiếp tục</h1>
    </div>
  );
};

export default Cart;
