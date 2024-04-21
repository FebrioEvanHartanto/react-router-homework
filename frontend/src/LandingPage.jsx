import BookshelfImage from "../images/bookshelves.jpg";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BookshelfImage})` }}
      className="flex items-center justify-center relative bg-cover bg-center h-full w-full"
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <h1 className="z-10 text-3xl font-bold text-gray-100">
        Welcome to My Bookstore
      </h1>
    </div>
  );
};

export default LandingPage;
