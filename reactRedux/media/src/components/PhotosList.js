import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotoListItem from "./PhotoListItem";

function PhotosList({ album }) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={4} className="h-8 w-8" />;
  } else if (error) {
    content = <div>Error fetching photos</div>;
  } else {
    content = data.map((photo) => {
      return <PhotoListItem key={photo.id} photo={photo}></PhotoListItem>;
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add photo
        </Button>
      </div>
      <div className="flex flex-row flex-wrap">{content}</div>
    </div>
  );
}

export default PhotosList;
