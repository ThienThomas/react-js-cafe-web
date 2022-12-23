import { useEffect, useState } from 'react';
import { MdIcon } from '../../assets/icons';

const Manage = (props: { ImgSrc: any; title: string; info: string; trend: number }) => {
  const [stateUpTrend, setStateUpTrend] = useState(false);
  useEffect(() => {
    if (props.trend > 0) {
      setStateUpTrend(true);
    }
  }, []);
  return (
    <div className="grid">
      <img src={props.ImgSrc} alt="" className="w-[38px] h-[38px] rounded-lg" />
      <p className="my-3 font-semibold text-[15px]">{props.title}</p>
      <p className="mb-3 font-medium text-[26px]">{props.info}</p>
      {stateUpTrend ? (
        <div className="mb-3 font-semibold text-[15px] flex text-[#71dd37] gap-1">
          <MdIcon.MdShowChart size={20} color={'#71dd37'} />
          {props.trend} %
        </div>
      ) : (
        <p className="mb-3 font-semibold text-[15px] flex text-[#ff3e1d] gap-1">
          <MdIcon.MdOutlineWaterfallChart size={20} color={'#ff3e1d'} />
          {props.trend} %
        </p>
      )}
    </div>
  );
};

export default Manage;
