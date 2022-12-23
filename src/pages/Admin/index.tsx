import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Manage from './Manage.component';
import chart from '../../assets/images/chart-success.png';
import wallet from '../../assets/images/wallet-info.png';
import { faker } from '@faker-js/faker';
import paypal from '../../assets/images/paypal.png';
import wallet2 from '../../assets/images/wallet2.png';
import card from '../../assets/images/cc-primary.png';
import masterCard from '../../assets/images/master-card.png';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Thomas'
    }
  }
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Thomas is the best',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
};
const Admin = () => {
  return (
    <div className="font-sans">
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu>
            <MenuItem> Dashboard</MenuItem>
            <MenuItem> Product</MenuItem>
            <MenuItem> Order</MenuItem>
            <MenuItem> Store</MenuItem>
          </Menu>
        </Sidebar>
        <div className="p-[10px_30px] w-full">
          <form>
            <input
              type="text"
              className="w-full h-[52px] p-[10px_20px] shadow-lg border border-solid rounded-lg border-gray-300 outline-none"
              placeholder="Search..."
            />
          </form>
          <div className="my-5 flex gap-5">
            <div className="flex-[5] p-[10px_10px] shadow-md border border-solid rounded-lg">
              You have done <strong>72%</strong> more sales today. Check your new badge in your
              profile.
            </div>
            <div className="flex-[1] p-[20px_30px] shadow-md border border-solid rounded-lg">
              <Manage ImgSrc={chart} title="Profit" info="$12,628" trend={72.8} />
            </div>
            <div className="flex-[1] p-[20px_30px] shadow-md border border-solid rounded-lg">
              <Manage ImgSrc={wallet} title="Sales" info="$4,679" trend={-12.1} />
            </div>
          </div>
          <div className="mb-5 flex gap-5">
            <div className="flex-[5] p-[10px_10px] shadow-md border border-solid rounded-lg">
              <Line options={options} data={data} />
            </div>
            <div className="flex-[2.5] p-[20px_30px] shadow-md border border-solid rounded-lg flex flex-col">
              <p className="font-semibold text-[18px] text-[#56697F] mb-3">Transactions</p>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 items-center">
                  <img src={paypal} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Paypal</p>
                    <p className="text-[#566a7f]">Send money</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>+82</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 items-center">
                  <img src={card} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Wallet</p>
                    <p className="text-[#566a7f]">Send money</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>+82</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 items-center">
                  <img src={chart} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Transfer</p>
                    <p className="text-[#566a7f]">Refund</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>+82</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 items-center">
                  <img src={wallet} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Transfer</p>
                    <p className="text-[#566a7f]">Refund</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>-838.7</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-2 items-center">
                  <img src={masterCard} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Mastercard</p>
                    <p className="text-[#566a7f]">Ordered Food</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>-838.7</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <img src={wallet2} alt="" className="w-[38px] h-[38px]" />
                  <div className="grid">
                    <p className="text-[#a1acb8] text-xs">Wallet</p>
                    <p className="text-[#566a7f]">Ordered Food</p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <p>-838.7</p>
                  <p className="text-[#a1acb8]">USD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
