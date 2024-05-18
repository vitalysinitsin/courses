import { createContext } from "react";
import { useState, useCallback } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await fetch("http://localhost:3001/books");
    const fetchedBooks = await response.json();

    if (response.ok) {
      setBooks(fetchedBooks);
    }
  }, []);

  const createBook = async (title) => {
    const response = await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const newBookObject = await response.json();

    if (response.ok && Object.keys(newBookObject).length !== 0) {
      setBooks([...books, newBookObject]);
    }
  };

  const updateBookById = async (id, title) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const updatedBook = await response.json();

    if (response.ok && Object.keys(updatedBook).length !== 0) {
      const updatedBooks = books.map((book) =>
        book.id === id ? updatedBook : book
      );

      setBooks(updatedBooks);
    }
  };

  const deleteBookById = async (id) => {
    const response = await fetch(`http://localhost:3001/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const updatedBooks = books.filter((book) => book.id !== id);

      setBooks(updatedBooks);
    }
  };

  const valueToPass = {
    books,
    fetchBooks,
    createBook,
    updateBookById,
    deleteBookById,
  };

  return (
    <BooksContext.Provider value={valueToPass}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
