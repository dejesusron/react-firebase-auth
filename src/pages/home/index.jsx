import { useUserAuth } from "../../context/user-auth-context/index";
import { useState, useEffect } from "react";

const index = () => {
  const [firstName, setFirstName] = useState("");
  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setFirstName(user.displayName);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 pt-20">
        <div className="border border-[#333] max-w-md mx-auto p-6 grid gap-y-2">
          <h2 className="text-xl font-semibold text-[#333]">
            Hello Welcome {firstName && firstName.split(" ")[0]}! <br />{" "}
            {user && user.email}
          </h2>
          <button
            onClick={handleLogout}
            className="border border-[#333] bg-[#333] text-[#fff] px-6 py-1 w-max"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
