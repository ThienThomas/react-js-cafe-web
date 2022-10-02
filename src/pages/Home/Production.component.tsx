import Card from '../../component/Card.component';
import Image from '../../component/Image.component';
import ProductionNameWithPrice from '../../component/ProductionNameWithPrice.component';
import { temp_productions } from '../../constant/temp-data';
const style = {
  container: 'grid grid-cols-4 items-center',
  img: 'rounded-lg m-auto shadow-xl',
  card: 'w-fit h-fit rounded-lg mb-8',
  imgHeight: '90%',
  imgWidth: '90%'
};

const Productions = () => {
  const tempData = temp_productions.concat(temp_productions);
  return (
    <div className={style.container}>
      {tempData.map((item: any, index: number) => {
        return (
          <Card className={style.card} key={index}>
            <>
              <Image
                src={item.imgUrl}
                height={style.imgHeight}
                width={style.imgWidth}
                className={style.img}
              />
              <ProductionNameWithPrice name={item.title} price={item.price} />
            </>
          </Card>
        );
      })}
    </div>
  );
};

export default Productions;
