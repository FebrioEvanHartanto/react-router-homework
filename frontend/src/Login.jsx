/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { login } from "../fetch/auth";
import Swal from "sweetalert2";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await login({ email, password });
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "Login Success",
      });
      navigate("/home");
    } catch (error) {
      const message = error.response.data.message || error.response.data.name;
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-gray-200 mt-20 px-4 rounded-xl py-10 pb-16">
      <div className="flex flex-col space-y-6 mb-6">
        <h1 className="font-bold text-2xl mb-6">Login</h1>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded-lg"
        />

        <Button onClick={handleSubmit} colorScheme="telegram">
          Login
        </Button>
      </div>
      <span>Don't have an account yet? Register </span>
      <Link to="/register">
        <span className="underline underline-offset-4 font-semibold">Here</span>
      </Link>
    </div>
  );
};

export default Login;
