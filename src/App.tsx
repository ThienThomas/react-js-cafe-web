import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './component/Authentication/ForgotPassword.page';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import { useStartUp } from './hooks/start-up.hook';
import Coupon from './pages/Coupon/Coupon.page';
import ProductDetail from './pages/Details/Detail';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import Order from './pages/Order/Order';
import Store from './pages/Store';

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
        <Route path="/order" element={<Order />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/store" element={<Store />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
