import { useState, useEffect } from "react";
import { getBooks } from "../fetch/books";
import BookCard from "../components/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
    console.log(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookDelete = (deletedBookId) => {
    // Filter out the deleted book from the current books state
    setBooks(books.filter((book) => book.id !== deletedBookId));
  };

  return (
    <>
      <div className="grid grid-cols-3 ml-10 mt-20">
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookCard
              key={index}
              id={book.id}
              title={book.title}
              author={book.author}
              publisher={book.publisher}
              year={book.year}
              pages={book.pages}
              coverImage={book.image}
              onBookDelete={handleBookDelete}
            />
          ))
        ) : (
          <h1 className="text-center font-bold text-3xl">
            There are no books yet! Please add a book first!
          </h1>
        )}
      </div>
    </>
  );
};

export default Home;
