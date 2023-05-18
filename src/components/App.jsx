import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    image: '',
    page: 1,
  };
  onSubmit = value => {
    console.log(value);
    this.setState({ image: value });
    console.log(this.state);
  };
  handlePage = number => {
    const newPage = this.state.page + number;
    this.setState({ page: newPage });
  };
  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imageName={this.state.image} page={this.state.page} />
        {/* <ToastContainer
          autoClose="3000"
          style={{ width: '100px', fontSize: '15px', display: 'flex' }}
        /> */}
      </div>
    );
  }
}
