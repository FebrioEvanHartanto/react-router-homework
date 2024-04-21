/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { register } from "../fetch/auth";
import Swal from "sweetalert2";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      await register(name, email, password);
      Swal.fire({
        icon: "success",
        title: "Register Success",
        text: "Register Success",
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-gray-200 mt-20 px-4 rounded-xl py-10 pb-16">
      <div className="flex flex-col space-y-6">
        <h1 className="font-bold text-2xl mb-6">Register</h1>
        <input
          type="text"
          placeholder="Enter your name..."
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-lg"
        />
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
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Register;
