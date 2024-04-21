import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { createBook } from "../fetch/books.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [pages, setPages] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publisher", publisher);
    formData.append("year", year);
    formData.append("pages", pages);
    formData.append("image", imageUrl);

    try {
      if (!imageUrl) {
        Swal.fire({
          icon: "error",
          title: "Image Missing",
          text: "Please upload an image first.",
        });
        return;
      }

      const response = await createBook(formData);
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Book Created!",
        text: "Book created successfully!",
      });
      navigate("/home");
    } catch (error) {
      console.error("Error creating book:", error);
      Swal.fire({
        icon: "error",
        title: "Failed To Create Book!",
        text: "Failed to create book.",
      });
    }
  };

  return (
    <div className="mx-auto max-w-lg bg-gray-200 mt-20 px-4 rounded-xl py-10 pb-16">
      <div className="flex flex-col space-y-6 mb-6">
        <h1 className="font-bold text-2xl mb-6">Create a book</h1>
        <input
          type="text"
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter author..."
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter publisher..."
          onChange={(e) => setPublisher(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter year..."
          onChange={(e) => setYear(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter number of pages..."
          onChange={(e) => setPages(e.target.value)}
          className="p-2 rounded-lg"
        />
        <input
          type="file"
          placeholder="Enter author..."
          onChange={(e) => setImageUrl(e.target.files[0])}
          className="p-2 rounded-lg"
        />
        <Button onClick={handleSubmit} colorScheme="telegram">
          Create Book
        </Button>
      </div>
    </div>
  );
};

export default Create;
