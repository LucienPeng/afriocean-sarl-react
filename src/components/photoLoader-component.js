const PhotoLoaderComponent = (source) => {
  return (
    <div>
      <img src={source.photo.url} className="d-block w-100" alt="..." />
    </div>
  );
};

export default PhotoLoaderComponent;
