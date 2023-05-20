// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class ImageGalleryItem extends Component {
//   handleClick = ({ largeImageURL, tags }) => {
//     this.props.handleImageClick({ largeImageURL, tags });
//   };

//   render() {
//     const { images } = this.props.images;
//     return (
//       <>
//         {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//           <li className="gallery-item" key={id}>
//             <img
//               src={webformatURL}
//               alt={tags}
//               width="300"
//               onClick={() => this.handleClick({ largeImageURL, tags })}
//             />
//           </li>
//         ))}
//       </>
//     );
//   }
// }

// ImageGalleryItem.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
