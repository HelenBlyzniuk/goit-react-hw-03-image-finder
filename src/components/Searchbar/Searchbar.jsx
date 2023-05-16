import { Component } from 'react';

export class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(e.target.input.value);
  };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="input"
          />
        </form>
      </header>
    );
  }
}
