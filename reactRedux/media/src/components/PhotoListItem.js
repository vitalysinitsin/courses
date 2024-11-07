function PhotoListItem({ photo }) {
  return <img className="h-20 w-20 m-2" src={photo.url} alt="album cover" />;
}

export default PhotoListItem;
