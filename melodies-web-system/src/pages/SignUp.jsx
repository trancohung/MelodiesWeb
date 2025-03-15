import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import logo from "../assets/logo-no-background.png";
import { useNavigate } from "react-router";

const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const users = getUsers();
    const userExists = users.some((user) => user.username === values.username);

    if (userExists) {
      alert("Username already exists!");
    } else {
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
      console.log("Register successful: ", values);
      navigate("/login");
    }
  };
  return (
    <div className="bg-[#412C3A] min-h-screen flex flex-col justify-center items-center gap-16 p-8">
      <div className="flex flex-col items-center gap-4">
        <img src={logo} alt="logo" className="w-32 h-32 object-cover" />
        <h1 className="text-white text-5xl font-bold">Melodies</h1>
      </div>

      <Form
        name="signup"
        initialValues={{ remember: true }}
        className="w-full max-w-xl"
        onFinish={onFinish}
      >
        <h2 className="text-white text-3xl mb-6 text-center font-bold">
          Create an account
        </h2>

        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            placeholder="Name"
            size="large"
            style={{
              backgroundColor: "#612C4F",
              padding: "1rem",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              outline: "none",
            }}
            className="!placeholder-[#FFFFFF99]"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            size="large"
            style={{
              backgroundColor: "#612C4F",
              padding: "1rem",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              outline: "none",
            }}
            className="!placeholder-[#FFFFFF99]"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            size="large"
            style={{
              backgroundColor: "#612C4F",
              padding: "1rem",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              outline: "none",
            }}
            className="[&>input::placeholder]:!text-[#FFFFFF99] [&_.anticon]:!text-[#FFFFFF] [&_.anticon:hover]:!text-[#EE10B0]"
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            size="large"
            style={{
              backgroundColor: "#EE10B0",
              border: "none",
              outline: "none",
              padding: "2rem",
            }}
            className="hover:!bg-[#C00E90]"
          >
            Sign Up
          </Button>
          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <a
              onClick={() => navigate("/login")}
              style={{
                color: "#EE10B0",
              }}
              className="hover:!underline"
            >
              Login
            </a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
