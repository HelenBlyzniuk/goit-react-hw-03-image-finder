import { Component } from 'react';

export class Button extends Component {
  handleClick = e => {
    console.log(e);
    e = 1;
    this.props.HandlePage(e);
  };
  render() {
    return (
      <button type="button" className="loadMore" onClick={this.handleClick}>
        Load More
      </button>
    );
  }
}
