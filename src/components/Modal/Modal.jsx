import { createPortal } from 'react-dom';
import { Component } from 'react';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {};

  handleClick = e => {
    this.props.handleModalClick();
  };

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.handleModalClick();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.handleModalClick);
  }
  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} width="500" />
        </div>
      </div>,
      modalRoot
    );
  }
}
