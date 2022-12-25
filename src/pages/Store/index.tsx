import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import hcm1 from '../../assets/images/hcm1.jpeg';
import hcm11 from '../../assets/images/hcm11.jpeg';
import hcm111 from '../../assets/images/hcm111.jpeg';
import { city, loadProvinces } from '../../constant/temp-data';

import { BiIcons } from '../../assets/icons';
import hcm2 from '../../assets/images/hcm2.jpeg';

const Store = () => {
  let [dataProvinces, setDataProvinces] = useState([]);

  useEffect(() => {
    loadProvinces().then((item) => setDataProvinces(item));
  }, []);

  return (
    <>
      <div className="bg-bgStore p-[10px_20px] h-[205px] flex items-center justify-center">
        <p className="text-white text-3xl font-semibold">
          Hệ thống 154 cửa hàng The Coffee House toàn quốc
        </p>
      </div>
      <div className="md:max-w-[1200px] p-[20px_10px] m-auto flex">
        <div className="flex flex-col flex-3 border-r-2 border-solid border-[#00000026] pr-7">
          <p className="font-semibold mb-3">Theo khu vực</p>
          {city.map((item) => (
            <div className="flex mb-5" key={item.count}>
              <p className="text-sm mr-1">{item.name}</p>
              <p className="text-sm">({item.count})</p>
            </div>
          ))}
        </div>
        <div className="flex-1 px-8">
          <p className="text-[20px] font-semibold mb-5">
            Khám phá 72 cửa hàng của chúng tôi ở Tp Hồ Chí Minh
          </p>
          <select className="w-[280px] h-[40px] p-[7px_10px] border border-solid border-[#00000026] rounded-xl mb-7">
            {dataProvinces.map((p: any) => (
              <option key={p.codename} value={p.code}>
                {p.name}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-[80px]">
            <div className="md:max-w-[430px]">
              <Carousel
                // onClickItem={true}
                showStatus={false}
                className="w-[426px] h-[230px] rounded-lg"
                infiniteLoop={true}
                showArrows={false}
                autoFocus={true}
                showThumbs={false}>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm1} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm11} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm111} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm2} />
                </div>
              </Carousel>
              <p className="text-xl font-semibold my-2">HCM The Grace Tower</p>
              <div className="w-full h-8 flex items-center justify-center py-2 bg-[#FFF7E6] text-[#B3DDCA] hover:bg-white hover:text-[#D46B08] hover:border border-solid hover:border-[#D46B08] rounded-md">
                Xem bản đồ
              </div>
              <div className="flex my-2 items-center gap-3 border-b border-solid border-slate-300 pb-3">
                <p className="text-[18px] font-semibold">Chia sẻ trên: </p>
                <BiIcons.BiLink size={20} />
                <BiIcons.BiMessage size={20} />
              </div>
              <p className="text-sm mb-2">
                71 Hoàng Văn Thái, Tân Phú, Quận 7, Thành Phố Hồ Chí Minh
              </p>
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
            <div className="md:max-w-[430px]">
              <Carousel
                showStatus={false}
                className="w-[426px] h-[230px] rounded-lg"
                infiniteLoop={true}
                showArrows={false}
                autoFocus={true}
                showThumbs={false}>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm1} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm11} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm111} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm2} />
                </div>
              </Carousel>
              <p className="text-xl font-semibold my-2">HCM The Grace Tower</p>
              <div className="w-full h-8 flex items-center justify-center py-2 bg-[#FFF7E6] text-[#B3DDCA] hover:bg-white hover:text-[#D46B08] hover:border border-solid hover:border-[#D46B08] rounded-md">
                Xem bản đồ
              </div>
              <div className="flex my-2 items-center gap-3 border-b border-solid border-slate-300 pb-3">
                <p className="text-[18px] font-semibold">Chia sẻ trên: </p>
                <BiIcons.BiLink size={20} />
                <BiIcons.BiMessage size={20} />
              </div>
              <p className="text-sm mb-2">
                71 Hoàng Văn Thái, Tân Phú, Quận 7, Thành Phố Hồ Chí Minh
              </p>
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
            <div className="md:max-w-[430px]">
              <Carousel
                showStatus={false}
                className="w-[426px] h-[230px] rounded-lg"
                infiniteLoop={true}
                showArrows={false}
                autoFocus={true}
                showThumbs={false}>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm1} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm11} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm111} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm2} />
                </div>
              </Carousel>
              <p className="text-xl font-semibold my-2">HCM The Grace Tower</p>
              <div className="w-full h-8 flex items-center justify-center py-2 bg-[#FFF7E6] text-[#B3DDCA] hover:bg-white hover:text-[#D46B08] hover:border border-solid hover:border-[#D46B08] rounded-md">
                Xem bản đồ
              </div>
              <div className="flex my-2 items-center gap-3 border-b border-solid border-slate-300 pb-3">
                <p className="text-[18px] font-semibold">Chia sẻ trên: </p>
                <BiIcons.BiLink size={20} />
                <BiIcons.BiMessage size={20} />
              </div>
              <p className="text-sm mb-2">
                71 Hoàng Văn Thái, Tân Phú, Quận 7, Thành Phố Hồ Chí Minh
              </p>
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
            <div className="md:max-w-[430px]">
              <Carousel
                showStatus={false}
                className="w-[426px] h-[230px] rounded-lg"
                infiniteLoop={true}
                showArrows={false}
                autoFocus={true}
                showThumbs={false}>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm1} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm11} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm111} />
                </div>
                <div className="w-[426px] h-[230px]">
                  <img src={hcm2} />
                </div>
              </Carousel>
              <p className="text-xl font-semibold my-2">HCM The Grace Tower</p>
              <div className="w-full h-8 flex items-center justify-center py-2 bg-[#FFF7E6] text-[#B3DDCA] hover:bg-white hover:text-[#D46B08] hover:border border-solid hover:border-[#D46B08] rounded-md">
                Xem bản đồ
              </div>
              <div className="flex my-2 items-center gap-3 border-b border-solid border-slate-300 pb-3">
                <p className="text-[18px] font-semibold">Chia sẻ trên: </p>
                <BiIcons.BiLink size={20} />
                <BiIcons.BiMessage size={20} />
              </div>
              <p className="text-sm mb-2">
                71 Hoàng Văn Thái, Tân Phú, Quận 7, Thành Phố Hồ Chí Minh
              </p>
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
          </div>

          <div className="flex items-center justify-center w-[282px] h-[40px] font-semibold border border-solid border-slate-300 rounded-xl cursor-pointer my-8 mx-auto">
            Xem Thêm
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
