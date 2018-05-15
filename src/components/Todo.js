import React, { Component } from 'react';
import Footer from './Footer.js';
import List from './List.js';
import Header from './Header.js';
class Todo extends Component {
  constructor(props){
    super(props);
    this.state={
      term: '',items: []
    };
  }
  onChange=(event)=>{
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({term: '',items: [...this.state.items, this.state.term]
    });
  }
  removeItem = (name) =>{
   this.setState({
     items: this.state.items.filter(item =>item!== name)
   })
 }
  render() {
    return (
        <div className="wrapper">
          <Header/>
          <div className="hero mn">
          <div className="hero-content">
          </div>
          </div>
        <form onSubmit={this.onSubmit}>
        <input className="tt" 
        placeholder="What's on Your Mind..."
        value={this.state.term}
        onChange={this.onChange} />
        <input type="submit" className="ki" value= "Submit"/>
        </form>
        <List items={this.state.items} removeItem = {this.removeItem}/>
        <p></p>
        <Footer />
        </div>
    );
  }
}

export default Todo;