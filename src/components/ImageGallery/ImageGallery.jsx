import PropTypes from 'prop-types';

export const ImageGallery = ({ images, handleImageClick }) => {
  const handleClick = ({ largeImageURL, tags }) => {
    handleImageClick({ largeImageURL, tags });
  };

  return (
    <ul className="gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className="gallery-item" key={id}>
          <img
            src={webformatURL}
            alt={tags}
            width="300"
            onClick={() => handleClick({ largeImageURL, tags })}
          />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
