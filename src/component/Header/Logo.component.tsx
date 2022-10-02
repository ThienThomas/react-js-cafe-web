import { Link } from 'react-router-dom';

// Styling:
const styles = {
  paragraph: 'font-bold text-clrBlack text-mds justify-self-center my-auto'
};

// Component:
const Logo = () => {
  return (
    <Link to={'/'} className={styles.paragraph}>
      THE C<span className="underline ">O</span>FFEE SC<span className="underline">O</span>UT
    </Link>
  );
};
export default Logo;
