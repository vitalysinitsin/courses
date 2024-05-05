import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookShow from "./components/BookShow";
import BookList from "./components/BookList";
import { generateRandomNumber } from "./helpers/numbers";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: generateRandomNumber(4), title }]);
  };

  const updateBookById = (id, title) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title } : book
    );

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);

    setBooks(updatedBooks);
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
