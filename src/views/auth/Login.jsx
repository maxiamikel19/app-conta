import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputFormBlock from "../../components/InputFormBlock";
import PrimaryButton from "../../components/PrimaryButton";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm px-6 py-12 md:bg-white rounded-lg md:shadow-md">
        <h2 className="mb-4 md:mb-10 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>
        <form autoComplete="off" noValidate>
          <InputFormBlock
            icon={<FaUser />}
            name="email"
            placeholder="Email"
            type="email"
            value={""}
            onChange={() => {}}
          />

          <InputFormBlock
            icon={<FaLock />}
            name="password"
            placeholder="*******"
            type="password"
            value={""}
            onChange={() => {}}
          />

          <PrimaryButton label="log in" type="button" onClick={handleLogin} />
        </form>

        <p className="mt-4 text-xs text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 cursor-pointer hover:text-gray-500 px-2 font-semibold transition-colors duration-500"
          >
            Register here
          </Link>
        </p>

        <p className="mt-2 text-xs text-center text-gray-600">
          <Link
            to=""
            className=" text-blue-500 text-xs cursor-pointer hover:text-blue-900 px-2 transition-colors duration-500"
          >
            Forgot your password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
