import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../context/user-auth-context/index";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-y-6 border border-[#333] p-6 max-w-md mx-auto">
          <h2 className="text-center text-[#333] font-semibold text-3xl">
            Sign Up
          </h2>
          {error && <p className="text-[red]">{error}</p>}
          <form className="grid gap-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email address"
              className="border border-[#333] p-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border border-[#333] p-3 w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={handleShowPassword}
                  className="absolute top-1/2 right-4 h-[20px] w-[20px] cursor-pointer translate-y-[-50%]"
                />
              ) : (
                <FaEye
                  onClick={handleShowPassword}
                  className="absolute top-1/2 right-4 h-[20px] w-[20px] cursor-pointer translate-y-[-50%]"
                />
              )}
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="border border-[#333] p-3 w-full"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <FaEyeSlash
                  onClick={handleShowConfirmPassword}
                  className="absolute top-1/2 right-4 h-[20px] w-[20px] cursor-pointer translate-y-[-50%]"
                />
              ) : (
                <FaEye
                  onClick={handleShowConfirmPassword}
                  className="absolute top-1/2 right-4 h-[20px] w-[20px] cursor-pointer translate-y-[-50%]"
                />
              )}
            </div>

            <button
              type="submit"
              className="border border-[#333] bg-[#333] p-3 text-[#fff]"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="border border-[#333] max-w-md mx-auto mt-5 p-4">
          <p className="text-center">
            Do you have an account?{" "}
            <Link to="/" className="underline text-[#0074cc]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
