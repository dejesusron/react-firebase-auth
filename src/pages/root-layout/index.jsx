import { Outlet } from "react-router-dom";
import Header from "../../components/header/index";

const index = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default index;
