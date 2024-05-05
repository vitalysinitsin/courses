import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImages = () => {
    return images.map((image) => <ImageShow key={image.id} image={image} />);
  };

  return <div className="image-list">{renderImages()}</div>;
}

export default ImageList;
