// import { Component } from 'react';
// import PropTypes from 'prop-types';

// export class ImageGalleryItem extends Component {
//   handleClick = ({ largeImageURL, tags }) => {
//     this.props.handleImageClick({ largeImageURL, tags });
//   };

//   render() {
//     const { id, webformatURL, largeImageURL, tags } = this.props;
//     return (
//       <li className="gallery-item" key={id}>
//         <img
//           src={webformatURL}
//           alt={tags}
//           width="300"
//           onClick={() => this.handleClick({ largeImageURL, tags })}
//         />
//       </li>
//     );
//   }
// }

// ImageGalleryItem.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tag: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
