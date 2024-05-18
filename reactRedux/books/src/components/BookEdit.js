import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);
  const { updateBookById } = useBooksContext();

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    updateBookById(book.id, newTitle);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={newTitle} onChange={handleChange} />
      <button className="button is=primary">Save</button>
    </form>
  );
}

export default BookEdit;
