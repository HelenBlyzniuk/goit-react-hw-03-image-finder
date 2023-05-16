import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    image: '',
  };
  onSubmit = value => {
    console.log(value);
    this.setState({ image: value });
    console.log(this.state);
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        {/* <ToastContainer
          autoClose="3000"
          style={{ width: '100px', fontSize: '15px', display: 'flex' }}
        /> */}
      </div>
    );
  }
}
