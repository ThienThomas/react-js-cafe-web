import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { city } from '../../constant/temp-data';

import { useState } from 'react';
import { BiIcons } from '../../assets/icons';

const ListStore = () => {
  const [data, setData] = useState(city[0]);
  const [isSelected, setIsSeleted] = useState(0);

  const handleCity = (index: number) => {
    setData(city[index]);
  };
  const handleChangeProvinces = (target: any) => {
    const value = target.target.value;
    console.log(value);
    // setData();
  };
  return (
    <>
      <div className="bg-bgStore p-[10px_20px] h-[205px] flex items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          Hệ thống ? cửa hàng The Coffee House toàn quốc
        </p>
      </div>
      <div className="md:max-w-[1200px] p-[20px_10px] m-auto flex">
        <div className="flex flex-col flex-3 border-r-2 border-solid border-[#00000026] pr-7">
          <p className="font-semibold mb-3">Theo khu vực</p>
          {city.map((item, index) => (
            <div
              className={
                isSelected === index
                  ? 'flex mb-5 cursor-pointer text-red-500'
                  : 'flex mb-5 cursor-pointer'
              }
              key={index}
              onClick={() => {
                handleCity(index);
                setIsSeleted(index);
              }}>
              <p className="text-sm mr-1">{item.name}</p>
              <p className="text-sm">({item.count})</p>
            </div>
          ))}
        </div>
        <div className="flex-1 px-8">
          <p className="text-[20px] font-semibold mb-5">
            Khám phá 72 cửa hàng của chúng tôi ở Tp Hồ Chí Minh
          </p>
          <select
            onChange={handleChangeProvinces}
            className="w-[280px] h-[40px] p-[7px_10px] border border-solid border-[#00000026] rounded-xl mb-7">
            {data.provinces.map((p: any) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-[80px]">
            {data.provinces.map((item) =>
              item.address.map((i, index) => (
                <div key={index} className="md:max-w-[430px]">
                  <img src={i.images.src} alt="" />
                  <p className="text-xl font-semibold my-2">{i.name}</p>
                  <div className="w-full h-8 flex items-center justify-center py-2 bg-[#FFF7E6] text-[#B3DDCA] hover:bg-white hover:text-[#D46B08] hover:border border-solid hover:border-[#D46B08] rounded-md">
                    {i.map}
                  </div>
                  <div className="flex my-2 items-center gap-3 border-b border-solid border-slate-300 pb-3">
                    <p className="text-[18px] font-semibold">Chia sẻ trên: </p>
                    <BiIcons.BiLink size={20} />
                    <BiIcons.BiMessage size={20} />
                  </div>
                  <p className="text-sm mb-2">{i.name}</p>
                  <p className="text-sm mb-2">7:00 - 22:00</p>
                  <div className="flex gap-3 flex-wrap">
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiCar size={20} />
                      Có chỗ đỗ xe hơi
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiHome size={20} />
                      Phục vụ tại chỗ
                    </div>
                    <div className="flex gap-2 items-center text-sm">
                      <BiIcons.BiShoppingBag size={20} />
                      Mua mang đi
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-center w-[282px] h-[40px] font-semibold border border-solid border-slate-300 rounded-xl cursor-pointer my-8 mx-auto">
            Xem Thêm
          </div>
        </div>
      </div>
    </>
  );
};

export default ListStore;
