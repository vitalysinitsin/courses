import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import { useState, useCallback } from "react";
import { searchImagesBy } from "./api";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = useCallback(
    async (query) => {
      const images = await searchImagesBy(query);

      if (images) {
        setImages(images?.results);
      }
    },
    [setImages]
  );

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
