import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("accessToken") !== null;

  return (
    <nav className="bg-teal-500 w-full h-28 flex items-center justify-between px-6">
      <a
        href="/"
        className="text-white text-3xl font-bold hover:text-gray-600 hover:cursor-pointer"
      >
        My Bookstore
      </a>
      {isAuthenticated ? (
        <div className="flex gap-x-4">
          <Link to="/create">
            <Button colorScheme="telegram">Create Book</Button>
          </Link>
          <Link to="/home">
            <Button colorScheme="telegram">View Books</Button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <Button colorScheme="telegram">Login</Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
