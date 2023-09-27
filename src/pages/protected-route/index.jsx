import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../context/user-auth-context/index";

const index = ({ children }) => {
  let { user } = useUserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default index;
