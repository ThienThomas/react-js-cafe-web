import Content from './Content';
import Sidebar from './Sidebar';

const UserInfo = () => {
  return (
    <div>
      <div className="flex  relative min-h-screen ">
        <div className=" w-2/12 bg-[#ffffff] shadow-md">
          <Sidebar />
        </div>
        <div className="w-10/12 px-10 ">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
