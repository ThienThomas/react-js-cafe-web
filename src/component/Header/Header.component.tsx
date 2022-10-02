import Cart from './Cart.component';
import Logo from './Logo.component';
import NavigationBar from './NavigationBar.component';

// Styling:
const customStyle = {
  header: 'bg-clrWhite w-full h-auto py-4 border-b-2 sticky top-0 z-50',
  container: 'container px-10 m-auto h-full flex justify-between'
};

const Header = () => {
  return (
    <header className={customStyle.header}>
      <nav className={customStyle.container}>
        <Logo />
        <NavigationBar />
        <Cart />
      </nav>
    </header>
  );
};
export default Header;
