import { temp_productions } from '../../constant/temp-data';
import { BiIcons } from '../../assets/icons';
import Option from './Detail.component';
import Productions from '../Order/Production.component';
const Detail = () => {
  const data = temp_productions[0];
  const styles = {
    container: 'container px-10 m-auto py-5 min-h-screen font-sans'
  };
  return (
    <div className={styles.container}>
      <div className="flex">
        <a href="" className="font-bold">
          Menu
        </a>
        <div className="mx-1">/</div>
        <a href="" className="font-bold">
          Sản Phẩm
        </a>
        <div className="mx-1">/</div>
        <a href="" className="">
          {' '}
          Sản Phẩm
        </a>
      </div>

      <div className="flex mt-[35px]">
        <div className="flex-1">
          <img src={data.imgUrl} alt="Hình Sản Phẩm" className="w-[570px] h-[570px]" />
        </div>

        <div className="flex-1 pl-8">
          <div className="text-[26px] mb-4">{data.name}</div>
          <div className="text-[26px] mb-[18px] text-[#E57905] font-semibold flex">
            <div>{data.price}</div>
            &nbsp;
            <div>đ</div>
          </div>
          <div className="bg-[#E57905] flex rounded-md items-center w-full h-[46px] justify-center py-3">
            <BiIcons.BiShoppingBag color={'#fff'} className="w-[21px] h-[21px] mr-2" />
            <a href="" className="text-white font-semibold">
              Đặt giao tận nơi
            </a>
          </div>
          <div className="mt-5">
            <div className="mb-3">Chọn size (bắt buộc)</div>
            <div className="flex gap-4">
              <Option sizeImg={20} text="Nhỏ" price={0} />
              <Option sizeImg={23} text="Vừa" price={6000} />
              <Option sizeImg={28} text="Lớn" price={10000} />
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-3">Topping</div>
            <div className="flex gap-4 flex-wrap">
              <Option text="Kem Phô Mai Macchiato" price={0} icon="hidden" />
              <Option text="Expresso" price={6000} icon="hidden" />
              <Option text="Thạch Cà Phê" price={10000} icon="hidden" />
              <Option text="Trân Châu Trắng" price={10000} icon="hidden" />
              <Option text="Trân Châu Đen" price={10000} icon="hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[45px] border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Mô tả sản phẩm</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem est dolore deserunt
          debitis optio. Aliquid praesentium totam corrupti harum, explicabo porro dolore mollitia
          iste commodi facere nam fugit laborum?
        </p>
      </div>

      <div className="border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Sản phẩm liên quan</div>
        <Productions />
      </div>
    </div>
  );
};

export default Detail;
