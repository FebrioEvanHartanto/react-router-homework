/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import { deleteBook, editBook } from "../fetch/books";
import Swal from "sweetalert2";
import { useState } from "react";

const BookCard = ({
  title: initialTitle,
  author: initialAuthor,
  publisher: initialPublisher,
  year: initialYear,
  pages: initialPages,
  id,
  onBookDelete,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [author, setAuthor] = useState(initialAuthor);
  const [publisher, setPublisher] = useState(initialPublisher);
  const [year, setYear] = useState(initialYear);
  const [pages, setPages] = useState(initialPages);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    const updatedBook = {
      title,
      author,
      publisher,
      year,
      pages,
    };

    try {
      await editBook(id, updatedBook);
      Swal.fire({
        icon: "success",
        title: "Book Updated!",
        text: "Book has been updated successfully.",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating book:", error);
      Swal.fire({
        icon: "error",
        title: "Failed To Update Book!",
        text: "Failed to update book.",
      });
    }
  };
  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      onBookDelete(id);

      Swal.fire({
        icon: "success",
        title: "Book Deleted!",
        text: "Book has been deleted successfully.",
      });
    } catch (error) {
      console.log("An Error occurred while trying to delete the book!", error);
      if (error.response && error.response.status === 404) {
        Swal.fire({
          icon: "success",
          title: "Book Deleted!",
          text: "Book has been deleted successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed To Delete Book!",
          text: "Failed to delete book.",
        });
      }
    }
  };

  return (
    <div className="max-w-md bg-gray-300 rounded-xl py-20 space-y-10 mb-20">
      {isEditing ? (
        <>
          <div className="flex flex-col space-y-3 px-5">
            <h1 className="text-lg font-bold my-5">Edit Book</h1>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 rounded-lg"
            />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-2 rounded-lg"
            />
            <input
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              className="p-2 rounded-lg"
            />
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="p-2 rounded-lg"
            />
            <input
              type="text"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              className="p-2 rounded-lg"
            />
            <Button onClick={handleSave} bgColor="green">
              Save
            </Button>
          </div>
        </>
      ) : (
        <>
          <h1>
            <span className="font-bold text-lg">Book Title : </span> {title}
          </h1>
          <h1>
            <span className="font-bold text-lg">Author : </span> {author}
          </h1>
          <h1>
            <span className="font-bold text-lg">Publisher : </span>
            {publisher}
          </h1>
          <h1>
            <span className="font-bold text-lg">Year : </span>
            {year}
          </h1>
          <h1>
            <span className="font-bold text-lg">Pages : </span>
            {pages}
          </h1>
          <div className="flex justify-between px-10">
            <Button bgColor="skyblue" w={20} onClick={handleEdit}>
              Edit
            </Button>
            <Button bgColor="red" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookCard;
