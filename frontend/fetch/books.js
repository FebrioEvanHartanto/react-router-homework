import instance from "../lib/axios";

export const createBook = async (formData) => {
  try {
    const response = await instance.post("/books", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    return response.data;

  } catch (error) {
      console.error("Error encountered when trying to add a book:", error);
       throw error;
  }
};

export const getBooks = async () => {
  try {
    const response = await instance({
      method:"GET",
      url:"/books"
    });
    
    //Response -> Data -> Books
    const data = response.data.books;
    
    return data;
  } catch (error) {
      console.error("Cannot find books!", error)
  }
}

export const getBookById = async (id) => {

  const response = await instance({
    method:"GET",
    url:`/books/${id}`
  })

  const {data} = response.data;
  
  return data;
}

export const editBook = async (id, updatedBook) => {
  try {
    const response = await instance({
      method: "PUT",
      url: `/books/${id}`,
      data: updatedBook,
    });
    return response.data;

  } catch (error) {
      console.error(`Encountered error editing book with ID ${id}:`, error);
        throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await instance({
      method: "DELETE",
      url: `/books/${id}`,
    });
    return response.data;
  } catch (error) {
      console.error(`Encountered error deleting book with ID ${id}:`);
        throw error;
  }
};

