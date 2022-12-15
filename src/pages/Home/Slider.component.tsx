import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from '../../component/Image.component';
import { tempSlider } from '../../constant/temp-data';

const Slider = () => {
  const tempSliderImg = tempSlider;
  return (
    <Carousel autoPlay infiniteLoop showStatus={false}>
      {tempSliderImg.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Image src={item.imgUrl} height={'100%'} width={'100%'} className="rounded-lg" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
