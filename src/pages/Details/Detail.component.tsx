import { useState } from 'react';
import { BiIcons } from '../../assets/icons';

const Option = (props: { sizeImg?: number; text: string; price: number; icon?: string }) => {
  const [active, setActive] = useState(false);
  const handleOption = () => {
    setActive(!active);
  };

  return (
    <button
      onClick={handleOption}
      className={
        active
          ? 'bg-[#E57905] flex items-center rounded-md border border-solid border-[#E57905] p-[10px_15px] gap-1 text-white'
          : 'bg-white flex items-center rounded-md border border-solid border-slate-300 p-[10px_15px] gap-1 '
      }>
      <BiIcons.BiCoffee size={props.sizeImg} className={props.icon} />
      <p>{props.text}</p>
      <p>+ {props.price} đ</p>
    </button>
  );
};

export default Option;
