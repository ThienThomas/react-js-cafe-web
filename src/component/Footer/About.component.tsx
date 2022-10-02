import { Link } from 'react-router-dom';

const style = {
  container: 'text-clrWhite mx-auto',
  elementContainer: 'mt-8',
  heading: 'text-clrWhite'
};

const About = () => {
  return (
    <div className={style.container}>
      <h6 className={style.heading}>Giới thiệu</h6>
      <ul className={style.elementContainer}>
        <li>
          <Link to="/">
            <span className="text-sm">Về chúng tôi</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="text-sm">Sản phẩm</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="text-sm">Khuyến mãi</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="text-sm">Cửa hàng</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
