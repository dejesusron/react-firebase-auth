import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/user-auth-context/index";

const index = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { resetPassword } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await resetPassword(email);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-y-4 max-w-sm mx-auto border border-[#333] p-6">
          <h2 className="text-center font-semibold text-2xl">Password Reset</h2>
          {error && <p className="text-[red]">{error}</p>}

          <form className="grid gap-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="border border-[#333] p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="border border-[#333] bg-[#333] text-[#fff] py-2 px-4"
            >
              Reset Password
            </button>
          </form>
        </div>

        <div className="border border-[#333] max-w-sm mx-auto mt-5 p-4">
          <p className="text-center">
            Dont have an account?
            <Link to="/signup" className="underline text-[#0074cc]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
