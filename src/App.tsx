import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer.component';
import Header from './component/Header/Header.component';
import DefaultLayout from './component/Layout/DefaultLayout';
import { useStartUp } from './hooks/start-up.hook';
import Coupon from './pages/Coupon/Coupon.page';
import ProductDetail from './pages/Details/Detail';
import Forgot from './pages/Forgot/Forgot';
import { Home } from './pages/Home';
import ListStore from './pages/ListStore';
import { Menu } from './pages/Menu';
import Order from './pages/Order/Order';
import ChangePass from './pages/UserInfo/ChangePass';
import Info from './pages/UserInfo/Info';
import UserInfo from './pages/UserInfo/UserInfo';

function App() {
  useStartUp();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route path="/menu">
          <Route
            path=":category"
            element={
              <DefaultLayout>
                <Menu />
              </DefaultLayout>
            }
          />
          <Route
            path=""
            element={
              <DefaultLayout>
                <Menu />
              </DefaultLayout>
            }
          />
        </Route>
        <Route path="/product">
          <Route
            path=":product"
            element={
              <DefaultLayout>
                <ProductDetail />
              </DefaultLayout>
            }
          />
        </Route>
        <Route
          path="/order"
          element={
            <DefaultLayout>
              <Order />
            </DefaultLayout>
          }></Route>
        <Route
          path="/coupon"
          element={
            <DefaultLayout>
              <Coupon />
            </DefaultLayout>
          }></Route>
        <Route
          path="/list-store"
          element={
            <DefaultLayout>
              <ListStore />
            </DefaultLayout>
          }></Route>
        <Route
          path="/forgot"
          element={
            <DefaultLayout>
              <Forgot />
            </DefaultLayout>
          }></Route>

        <Route path="/user-info" element={<DefaultLayout><UserInfo /></DefaultLayout>}>
          <Route index element={<Info />} />
          <Route path="change-password" element={<ChangePass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
