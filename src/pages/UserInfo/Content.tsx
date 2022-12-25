import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Content = () => {

   const heading =  useLocation()?.state || useLocation().pathname

  return (
    <div>
      <div className=" py-10">
        <div >
            <h1 className="text-2xl">{heading}</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
