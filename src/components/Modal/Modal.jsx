import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {};

  handleClick = e => {
    this.props.handleModalClick();
  };
  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div
        className="overlay"
        style={{ width: '800px', height: '800px' }}
        onClick={this.handleClick}
      >
        <div className="modal">
          <img src={largeImageURL} alt={tags} width="500" />
        </div>
      </div>,
      modalRoot
    );
  }
}
