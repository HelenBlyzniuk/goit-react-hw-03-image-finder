import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    searchName: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchName.trim() === '') {
      alert('Input your search goal');

      return;
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  handleInput = e => {
    this.setState({
      searchName: e.currentTarget.value.toLowerCase(),
    });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleInput}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="input"
            value={this.state.searchName}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
