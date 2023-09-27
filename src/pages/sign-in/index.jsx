import { useState } from "react";
import { GoogleButton } from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/user-auth-context/index";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-y-6 border border-[#333] p-6 max-w-md mx-auto">
          <h2 className="text-center text-[#333] font-semibold text-3xl">
            Sign In
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

            <button
              type="submit"
              className="border border-[#333] bg-[#333] p-3 text-[#fff]"
            >
              Sign In
            </button>
            <div className="border-b border-[#333]" />
            <GoogleButton
              onClick={handleGoogleSignIn}
              style={{ width: "100%" }}
            />
            <p className="text-center">
              <Link to="/forgot-password" className="text-[#0074cc] underline">
                Forgot password?
              </Link>
            </p>
          </form>
        </div>

        <div className="border border-[#333] max-w-md mx-auto mt-5 p-4">
          <p className="text-center">
            Dont have an account?{" "}
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
