import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, handleImageClick }) => {
  const handleClick = ({ largeImageURL, tags }) => {
    handleImageClick({ largeImageURL, tags });
  };

  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li className={css.galleryItem} key={id}>
          <img
            className={css.galleryItemImage}
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
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

// export const ImageGallery = () => {
//   return (
//     <ul className="gallery" style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {this.props.children}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   children: PropTypes.element.isRequired,
// };
