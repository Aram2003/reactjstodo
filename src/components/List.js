import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="listp">{
        this.props.items.map((item, index) =>
          <li className="tpm" onClick={() => { this.props.removeItem(item) }} key={index}>{item}</li>
        )
      }
      </ul>
    );
  }
}


export default List;
