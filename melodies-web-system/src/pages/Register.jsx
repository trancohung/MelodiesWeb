import React, { useState } from "react";
import logo from "../assets/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { message } from "antd";
import { registerValidation } from "../utils/validations/registerValidate.js";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = registerValidation(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setIsLoading(false);
      return;
    }
    try {
      const { username, email, password } = form;
      const response = await register(username, email, password);

      if (response.success) {
        message.success("Register successful!");
        navigate("/login");
      } else {
        message.error(response.message || "Registration failed.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#412C3A] min-h-screen flex flex-col justify-center items-center gap-16 p-8">
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="logo" className="w-32 h-32 object-cover" />
        <h1 className="text-white text-5xl font-bold">Melodies</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl text-white space-y-4"
      >
        <h2 className="text-3xl mb-6 text-center font-bold">
          Create an account
        </h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
        />
        {errors.username && <p className="text-red-400">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
        />
        {errors.email && <p className="text-red-400">{errors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
        />
        {errors.password && <p className="text-red-400">{errors.password}</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
        />
        {errors.password && <p className="text-red-400">{errors.password}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#EE10B0] hover:bg-[#C00E90] text-white font-bold py-4 rounded-lg"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>

        <p className="text-center text-white mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#EE10B0] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
