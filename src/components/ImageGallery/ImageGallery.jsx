import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
  };
  URL = 'https://pixabay.com/api/';
  KEY = '34953868-e619b94b5038a72e794119bd3';

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageName !== this.props.imageName) {
      fetch(
        `${this.URL}?q=${this.props.imageName}&page=1&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error('There are no images on your response')
          );
        })
        .then(photos => this.setState({ images: photos }))
        .catch(error => this.setState({ error }));
    }
  }

  render() {
    const images = this.state.images;
    const status = this.state.status;
    if (status === 'idle') {
      return <p>Enter the word to seach</p>;
    }
    if (status === 'rejected') {
      return <div>{Error}</div>;
    }
    if (status === 'resolved') {
      return (
        <ul className="gallery">
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <li className="gallery-item" id={id}>
              <img src={webformatURL} alt="" width="300" />
            </li>
          ))}
        </ul>
      );
    }
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
};
