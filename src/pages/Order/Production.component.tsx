/* eslint-disable no-unused-vars */
import Card from '../../component/Card.component';
import Image from '../../component/Image.component';
import ProductionNameWithPrice from '../../component/ProductionNameWithPrice.component';
import { temp_productions } from '../../constant/temp-data';
import { Product } from '../../constant/type';
const style = {
  container: 'grid grid-cols-6 items-center',
  img: 'rounded-lg m-auto shadow-xl',
  card: 'w-fit h-fit rounded-lg mb-8',
  imgHeight: '75%',
  imgWidth: '75%'
};

const Productions = (props: { data?: any }) => {
  const tempData = props?.data ?? temp_productions.slice(0, 6);
  return (
    <div className={style.container}>
      {tempData.map((item: Product) => {
        return (
          <Card className={style.card} key={item.id}>
            <>
              <Image
                src={item.imgUrl}
                height={style.imgHeight}
                width={style.imgWidth}
                className={style.img}>
                <ProductionNameWithPrice name={item.name} price={item.price} />
              </Image>
            </>
          </Card>
        );
      })}
    </div>
  );
};

export default Productions;
