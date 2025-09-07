import React, { useState } from "react";
import logo from "../assets/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { loginValidation } from "../utils/validations/loginValidation";

const LogIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    const validationErrors = loginValidation(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setIsLoading(false);
      return;
    }
    try {
      const { email, password } = form;
      const response = await login(email, password);
      if (response.success) {
        setMessage("Login successful!");
        navigate("/");
      } else {
        setMessage(response.message || "Invalid email or password");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
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
          Login to continue
        </h2>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#612C4F] placeholder-[#FFFFFF99] text-white border-none outline-none"
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {message && <p className="text-red-400 text-center">{message}</p>}

        <div className="flex justify-between items-center">
          <label className="text-[#FFFFFF99]">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
              className="mr-2"
            />
            Remember me
          </label>
          <a href="#" className="text-[#FFFFFF99] hover:text-[#EE10B0]">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#EE10B0] hover:bg-[#C00E90] text-white font-bold py-4 rounded-lg cursor-pointer"
        >
          {isLoading ? "Logging in..." : "Log in"}
        </button>

        <p className="text-center text-white mt-4">
          or{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#EE10B0] cursor-pointer hover:underline"
          >
            Register now!
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
