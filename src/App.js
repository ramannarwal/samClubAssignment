import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleShowMore = this.handleShowMore.bind(this)
    
    this.state = {
      items: ['1', '2', '3', '4', '5', '6', '7', '8','9', '10'],
      showItems: 5
    }
  }
  
  handleShowMore() {
    this.setState({
      showItems: 
        this.state.showItems = this.state.items.length
    })
  }
  
  render() {
    const items = this.state.items.slice(0, this.state.showItems).map(
      (item) => <div>{item}</div>
    )
    
    return (
      <div>
        {items}
        <button onClick={this.handleShowMore}>
          Show more!
        </button>
      </div>
    )
  }
}
  
export default App;
