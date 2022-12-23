import { BiIcons } from '../../assets/icons';
import shipper from '../../assets/images/img-deliver.png';
import money from '../../assets/images/realMoney.jpeg';
import momo from '../../assets/images/momo.png';
import zalo from '../../assets/images/zalopay.png';
import shopee from '../../assets/images/shopee.png';
import bank from '../../assets/images/bank.png';
import './Order.css';

import { useState } from 'react';
import Modal from './Modal.component';
const Order = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:max-w-[1100px] px-10 m-auto min-h-screen font-sans py-3 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <BiIcons.BiFile size={50} color={'E57905'} />
          <div className="">Xác Nhận Đơn Hàng</div>
        </div>
        <div className="flex mt-8">
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="font-semibold text-lg">
                <p className="mb-3">Giao Hàng</p>
                <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
              </div>
              <div
                className="w-[120px] h-[40px] p-[7px_5px] cursor-pointer border border-solid border-[#262626] rounded-3xl text-xs flex text-center items-center justify-center
              ">
                Đổi phương thức
              </div>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="flex">
                <img src={shipper} alt="" className="w-[40px] h-[40px]" />
                <div className="grid ml-4">
                  <div className="flex justify-between items-center border-b border-solid border-zinc-300">
                    <div className="pb-3 pr-2">
                      <div className="font-semibold">145 Đường Lê Văn Lương</div>
                      <div className="text-sm">
                        145 Đường Lê Văn Lương, Tân Kiểng, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                      </div>
                    </div>
                    <div>
                      <BiIcons.BiArrowFromLeft size={20} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="py-3 pr-2">
                      <div className="font-semibold">Nhận hàng trong ngày 15 - 30 phút</div>
                      <div className="text-sm">Vào lúc: Càng sớm càng tốt</div>
                    </div>
                    <div>
                      <BiIcons.BiArrowFromLeft size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-[20px]">
              <form action="">
                <input
                  type="text"
                  placeholder="Tên người nhận"
                  className="w-full h-[44px] border border-solid border-[#ededed] p-[5px_10px] outline-blue-400 mb-3"
                />
                <input
                  type="number"
                  placeholder="Số điện thoại"
                  className="w-full h-[44px] border border-solid border-[#ededed] p-[5px_10px] outline-blue-400 mb-3"
                />
                <input
                  type="text"
                  placeholder="Thêm hướng dẫn giao hàng"
                  className="w-full h-[44px] border border-solid border-[#ededed] p-[5px_10px] outline-blue-400 mb-3"
                />
              </form>
            </div>

            <div className="mt-[20px]">
              <p className="mb-2">Phương Thức Thanh Toán</p>
              <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
              <div className="ml-7">
                <form action="">
                  <div className="border-b border-solid border-slate-300 py-3 flex items-center">
                    <input type="radio" id="real-money" name="money" />
                    <label htmlFor="real-money" className="pl-2 flex items-center">
                      <img src={money} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      Tiền Mặt
                    </label>
                  </div>
                  <div className="border-b border-solid border-slate-300 py-3 flex items-center">
                    <input type="radio" id="momo" name="money" />
                    <label htmlFor="momo" className="pl-2 flex items-center">
                      <img src={momo} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      MoMo
                    </label>
                  </div>
                  <div className="border-b border-solid border-slate-300 py-3 flex items-center">
                    <input type="radio" id="bank" name="money" />
                    <label htmlFor="bank" className="pl-2 flex items-center">
                      <img src={bank} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      Banking
                    </label>
                  </div>
                  <div className="border-b border-solid border-slate-300 py-3 flex items-center">
                    <input type="radio" id="shopee" name="money" />
                    <label htmlFor="shopee" className="pl-2 flex items-center">
                      <img src={shopee} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      ShopeePay
                    </label>
                  </div>
                  <div className="py-3 flex items-center">
                    <input type="radio" id="zalopay" name="money" />
                    <label htmlFor="zalopay" className="pl-2 flex items-center">
                      <img src={zalo} alt="" className="w-[45px] h-[40px] mr-3 ml-1" />
                      ZaloPay
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <input type="checkbox" id="rule" name="rule" />
              <label htmlFor="rule" className="ml-3">
                Đồng ý với các <span className="text-[#fa8c16]">điều khoản và điều kiện</span> mua
                hàng của The Coffee House
              </label>
            </div>
          </div>
          <div className="flex-1 pl-[80px]">
            <div className="shadow-[0px_8px_30px_#DEE6F1] rounded-t-3xl p-[15px_20px]">
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-semibold text-lg mb-3">Các món đã chọn</p>
                  <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />
                </div>
                <div
                  className="w-[88px] h-[40px] p-[7px_5px] cursor-pointer border border-solid border-[#262626] rounded-3xl text-xs flex text-center items-center justify-center
              ">
                  Thêm món
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div>
                    <BiIcons.BiEdit size={25} color={'#fa8c16'} />
                  </div>
                  <div className="grid ml-2">
                    <div className="font-semibold text-sm mb-1">2x CloudFee</div>
                    <div className="text-sm">Vừa, 2 x Vừa</div>
                    <div>Xoá</div>
                  </div>
                </div>
                <div>100.000 đ</div>
              </div>

              <div className="mt-[50px]">
                <p className="font-semibold text-lg mb-3">Tổng Cộng</p>
                <hr className="w-[52px] h-[3px] bg-[#fa8c16]" />

                <div className="flex justify-between border-b border-solid border-[#C4C4C4] mt-[30px] pb-[20px]">
                  <div>Thành tiền</div>
                  <div>110.000 đ</div>
                </div>

                <div className="flex justify-between mt-[20px]">
                  <div>Phí giao hàng</div>
                  <div>0 đ</div>
                </div>

                <div className="flex justify-between border-b border-solid border-[#C4C4C4] mt-[20px] pb-[20px]">
                  <div>Miễn phí giao hàng đơn trên 50K</div>
                  <div className="line-through">25.000 đ</div>
                </div>

                <div
                  onClick={() => setIsOpen(true)}
                  className="text-[#fa8c16] text-sm mt-2 mb-2 cursor-pointer">
                  Khuyến Mãi
                </div>
                {isOpen && <Modal setIsOpen={setIsOpen} />}
                {/* <form action="">
                  <div className="flex items-center mb-5 gap-3">
                    <input
                      type="text"
                      placeholder="Nhập mã khuyến mãi"
                      className="w-[70%] border border-solid rounded-xl p-[10px_20px] text-sm"
                    />
                    <button onSubmit={handleAddCoupon}>Thêm</button>
                  </div>
                </form> */}
              </div>
            </div>
            <div className="bg-[#fa8c16] p-[10px_20px] rounded-b-3xl shadow-[0px_8px_30px_#DEE6F1]">
              <div className="flex justify-between mt-[30px] pb-[20px]">
                <div className="grid">
                  <div className="text-sm text-white">Thành tiền</div>
                  <div className="text-sm font-semibold text-white">110.000</div>
                </div>
                <div className="w-[112px h-[48px] cursor-pointer bg-white text-[#fa8c16] p-[6px_24px] flex items-center rounded-[30px]">
                  Đặt Hàng
                </div>
              </div>
            </div>

            <div className="text-[#fa8c16] flex items-end justify-center mt-5 cursor-pointer">
              <BiIcons.BiRecycle color={'#fa8c16'} size={30} />
              Xoá đơn hàng
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Order;
