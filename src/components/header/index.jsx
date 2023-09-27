import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const index = () => {
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password"
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <div className="shadow-md">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <h1>
          <a href="/">Logo</a>
        </h1>
        <ul className="flex gap-x-6">
          <li>
            <NavLink to={active ? "/" : "/signup"}>
              {active ? "Sign In" : "Sign Up"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
