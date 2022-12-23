import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import Detail from './pages/Details/Detail';
import Order from './pages/Order/Order';
import { useStartUp } from './hooks/start-up.hook';
import Coupon from './pages/Coupon';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';

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
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/coupon" element={<Coupon />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
