import './App.css';
import React, {Component} from 'react';
import Groceries from './components/Groceries'
import GroceriesList from './components/GroceriesList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: [],
    }
  }

  getList=(list) => {      //Pass down to function below
    this.setState({groceries:[...this.state.groceries,list]})
  }


  render() {

    return (
      <div className="App">

        <Groceries getList={this.getList}/>
        <GroceriesList getGroceries={this.state.groceries} /> 
        
      </div>

    );

  }
}

export default App;

