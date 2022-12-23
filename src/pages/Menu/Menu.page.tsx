/* eslint-disable no-unused-vars */
import { orderBy } from 'lodash';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { GameIcons } from '../../assets/icons';
import { temp_productions } from '../../constant/temp-data';
import { Product, ProductMenu } from '../../constant/type';
import Productions from '../Home/Production.component';
const styles = {
  container: 'container px-10 m-auto py-5 flex flex-row min-h-screen',
  leftIndicator: 'p-4 w-[15%]',
  rightBanner: 'p-4 w-[85%]'
};

export const indicatorNameTranslate: any = {
  [ProductMenu.ALL]: 'Tất cả',
  [ProductMenu.COFFEE]: 'Cà phê',
  [ProductMenu.CLOUDFEE]: 'CloudFee',
  [ProductMenu.CLOUDTEA]: 'CloudTee',
  [ProductMenu.HITEA]: 'HiTea',
  [ProductMenu.HOMECOFFEE]: 'HomeCoffee',
  [ProductMenu.MILKTEA]: 'MilkTea',
  [ProductMenu.SNACK]: 'Snack'
};

const Menu = () => {
  let { category } = useParams();
  const productList = useSelector((state: any) => state.product.productList);
  console.log(productList);
  const [indicatorIndex, setIndicatorIndex] = useState<ProductMenu | any>(
    category?.toUpperCase() ?? ProductMenu.ALL
  );

  console.log(category?.toUpperCase());

  const tempData =
    indicatorIndex === ProductMenu.ALL
      ? orderBy(temp_productions, [(item) => item.type])
      : temp_productions.filter((item: Product) => item.type === indicatorIndex);

  useEffect(() => {
    setIndicatorIndex(category?.toUpperCase() ?? ProductMenu.ALL);
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.leftIndicator}>
        <div className="sticky top-20">
          {Object.keys(indicatorNameTranslate).map((item: any, index: number) => (
            <IndicatorItem
              title={indicatorNameTranslate[item]}
              key={index}
              onClick={() => setIndicatorIndex(item)}
              isSelected={indicatorIndex === item}
              param={item.toLowerCase()}
            />
          ))}
        </div>
      </div>
      <div className={styles.rightBanner}>
        <Productions data={tempData} />
      </div>
    </div>
  );
};

const IndicatorItem = (props: {
  title: string;
  onClick?: any;
  isSelected?: boolean;
  param: string;
}) => {
  const { title, onClick, isSelected, param } = props;
  return (
    <Link to={`/menu/${param}`} className="flex flex-row  items-center py-2">
      <div className="w-1/6 h-full">
        {isSelected && <GameIcons.GiCoffeeBeans className="mx-auto" size={12} fill={'#FC8621'} />}
      </div>
      <div
        className={`block transition-all duration-300 ${
          isSelected ? 'text-clrOrange text-md font-bold' : 'text-sm'
        }`}>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default Menu;
