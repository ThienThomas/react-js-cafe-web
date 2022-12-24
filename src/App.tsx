import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import { useStartUp } from './hooks/start-up.hook';
import Coupon from './pages/Coupon/Coupon.page';
import ProductDetail from './pages/Details/Detail';
import { Home } from './pages/Home';
import ListStore from './pages/ListStore';
import { Menu } from './pages/Menu';
import Order from './pages/Order/Order';
import Profile from './pages/Profile';
import Cart from './pages/Profile/Cart';
import ChangePassword from './pages/Profile/ChangePassword';
import ResetPassword from './pages/ResetPassword';

function App() {
  useStartUp();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu">
          <Route path=":category" element={<Menu />} />
          <Route path="" element={<Menu />} />
        </Route>
        <Route path="/product">
          <Route path=":product" element={<ProductDetail />} />
        </Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/coupon" element={<Coupon />}></Route>
        <Route path="/list-store" element={<ListStore />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
