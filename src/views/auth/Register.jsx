import { FaEnvelope, FaFileUpload, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputFormBlock from "../../components/InputFormBlock";
import PrimaryButton from "../../components/PrimaryButton";
import { useState } from "react";

const Register = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm px-6 py-12 md:bg-white rounded-lg md:shadow-md">
        <h2 className="mb-4 md:mb-10 text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        <form className="space-y-4" autoComplete="off" noValidate>
          <InputFormBlock
            icon={<FaUser />}
            name="name"
            placeholder="Full Name"
            type="tetx"
            value={""}
            onChange={() => {}}
          />

          <InputFormBlock
            icon={<FaEnvelope />}
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

          <InputFormBlock
            icon={<FaLock />}
            name="password_confirmation"
            placeholder="*******"
            type="password"
            value={""}
            onChange={() => {}}
          />

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload a profile foto
            </label>
            <div className="flex items-center border rounded-md px-4 py-2">
              <FaFileUpload className="text-gray-400 mr-2" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full"
              />
            </div>
            {selectedFile && (
              <p className="text-sm text-gray-500 mt-2">
                Selected File: {selectedFile.name}
              </p>
            )}
            {preview && (
              <div className="flex items-center justify-center w-full my-2 p-1">
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className=" max-w-[100%] max-h-64 rounded object-cover object-center"
                  />
                )}
              </div>
            )}
          </div>
          <PrimaryButton
            label="register"
            type="button"
            onClick={handleRegister}
          />
        </form>
        <p className="text-center mt-4 text-gray-600 text-xs">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-500 cursor-pointer hover:text-blue-900 px-2 font-semibold transition-colors duration-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
