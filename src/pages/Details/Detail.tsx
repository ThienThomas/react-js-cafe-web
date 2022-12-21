import React from 'react';

const Detail = () => {
  const styles = {
    container: 'container px-10 m-auto py-5 min-h-screen font-sans',
    leftIndicator: 'p-4 w-[15%]',
    rightBanner: 'p-4 w-[85%]'
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
          <img src="" alt="Hình Sản Phẩm" className="w-[570px] h-[570px]" />
        </div>
        <div className="flex-1 pl-8">
          <div className="text-[26px] mb-4">Tên Sản Phẩm</div>
          <div className="text-[26px] mb-[18px] text-[#E57905] font-semibold flex">
            <div>38.000</div>
            &nbsp;
            <div>đ</div>
          </div>
          <div className="bg-[#E57905] flex rounded-md items-center w-full h-[46px] justify-center py-3">
            <img src="" alt="Hình Shipper" className="w-[21px] h-[21px] mr-2" />
            <a href="" className="text-white font-semibold">
              Dat giao tan noi
            </a>
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
        <div></div>
      </div>
    </div>
  );
};

export default Detail;
