import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3001/books");
    const fetchedBooks = await response.json();

    if (response.ok) {
      setBooks(fetchedBooks);
    }
  };

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

  return (
    <div className="app">
      <BookList
        books={books}
        onDelete={deleteBookById}
        onUpdate={updateBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
