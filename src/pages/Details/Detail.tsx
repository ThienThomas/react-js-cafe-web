/* eslint-disable no-unused-vars */

import { find } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BiIcons } from '../../assets/icons';
import { productSize, productTopping } from '../../constant/type';
import { ProductGroupType, ProductType } from '../../store/product.slice';
import Productions from '../Home/Production.component';
import Option from './Detail.component';
const CurrencyFormat = require('react-currency-format');
const styles = {
  container: 'container px-10 m-auto py-5 min-h-screen font-sans'
};

const ProductDetail = () => {
  let { product } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [machiato, setMachiato] = useState('');
  const [expresso, setExpresso] = useState('');
  const [caffe, setCaffee] = useState('');
  const [whiteBubble, setWhiteBubble] = useState('');
  const [blackBubble, setBlackBubble] = useState('');
  const [selectedTopping, setSelectedTopping] = useState<any>([]);
  const { productList, productGroup } = useSelector((state: any) => {
    return {
      productList: state.product.productList,
      productGroup: state.product.productGroup
    };
  });
  const productData: ProductType = find(
    productList,
    (item: ProductType) => item.parsedName === product
  );
  const productGroupId: ProductGroupType = find(
    productGroup,
    (item: ProductGroupType) => item.id === productData.productGroup.id
  );
  const relevants = productList.slice(0, 4);

  const addToppingList = (item: any) => {
    setSelectedTopping((prevState: any) => [...prevState, item]);
  };
  const removeToppingList = (item: any) => {
    let toppingList = selectedTopping;
    toppingList = toppingList.filter((e: any) => e.id !== item.id);
    setSelectedTopping(toppingList);
  };
  useEffect(() => {
    console.log(selectedTopping);
  }, [selectedTopping]);
  return (
    <div className={styles.container}>
      <div className="flex">
        <Link to="/menu" className="font-bold">
          Menu
        </Link>
        <div className="mx-1">/</div>
        <Link to={`/menu/${productGroupId.parsedName}`} className="font-bold">
          {productGroupId.name}
        </Link>
        <div className="mx-1">/</div>
        <Link to={`/product/${product}`} className="">
          {productData.name}
        </Link>
      </div>
      <div className="flex mt-[35px]">
        <div className="flex-1">
          <img src={productData.imgUrl} alt="Hình Sản Phẩm" className="w-[570px] h-[570px]" />
        </div>
        <div className="flex-1 pl-8">
          <div className="text-[26px] mb-4">{productData.name}</div>
          <div className="text-[26px] mb-[18px] text-[#E57905] font-semibold flex">
            <CurrencyFormat
              value={productData.price}
              thousandSeparator={true}
              displayType={'text'}
              suffix={' VND'}
            />
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
              {productSize.map((item) => (
                <Option
                  sizeImg={25}
                  text={item.name}
                  price={item.value}
                  key={item.id}
                  onClick={() => setSelectedSize(item.name)}
                  isSelected={item.name === selectedSize}
                  showIcon={true}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="mb-3">Topping</div>
            <div className="flex gap-4 flex-wrap">
              <Option
                text={productTopping[0].name}
                price={productTopping[0].value}
                key={productTopping[0].id}
                isSelected={productTopping[0].name === machiato}
                onClick={() => {
                  if (machiato === '') {
                    setMachiato(productTopping[0].name);
                    addToppingList(productTopping[0]);
                  } else {
                    setMachiato('');
                    removeToppingList(productTopping[0]);
                  }
                }}
              />
              <Option
                text={productTopping[1].name}
                price={productTopping[1].value}
                key={productTopping[1].id}
                isSelected={productTopping[1].name === expresso}
                onClick={() => {
                  if (expresso === '') {
                    setExpresso(productTopping[1].name);
                    addToppingList(productTopping[1]);
                  } else {
                    setExpresso('');
                    removeToppingList(productTopping[1]);
                  }
                }}
              />
              <Option
                text={productTopping[2].name}
                price={productTopping[2].value}
                key={productTopping[2].id}
                isSelected={productTopping[2].name === caffe}
                onClick={() => {
                  if (caffe === '') {
                    setCaffee(productTopping[2].name);
                    addToppingList(productTopping[2]);
                  } else {
                    setCaffee('');
                    removeToppingList(productTopping[2]);
                  }
                }}
              />
              <Option
                text={productTopping[3].name}
                price={productTopping[3].value}
                key={productTopping[3].id}
                isSelected={productTopping[3].name === whiteBubble}
                onClick={() => {
                  if (whiteBubble === '') {
                    setWhiteBubble(productTopping[3].name);
                    addToppingList(productTopping[3]);
                  } else {
                    setWhiteBubble('');
                    removeToppingList(productTopping[3]);
                  }
                }}
              />

              <Option
                text={productTopping[4].name}
                price={productTopping[4].value}
                key={productTopping[4].id}
                isSelected={productTopping[4].name === blackBubble}
                onClick={() => {
                  if (blackBubble === '') {
                    setBlackBubble(productTopping[4].name);
                    addToppingList(productTopping[4]);
                  } else {
                    setBlackBubble('');
                    removeToppingList(productTopping[4]);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[45px] border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Mô tả sản phẩm</div>
        <p>{productData.description}</p>
      </div>

      <div className="border-t border-t-solid border-[#eee] py-[38px]">
        <div className="font-semibold text-lg mb-2">Sản phẩm liên quan</div>
        <Productions data={relevants} />
      </div>
    </div>
  );
};

export default ProductDetail;
