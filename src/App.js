import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.compnents';
import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [
        { id: 1, name: "Satish" }, { id: 2, name: "Satish" },
        { id: 3, name: "Satish" }, { id: 4, name: "Satish" }
      ],
      searchValue: ''
    }

    this.filterMonster = (e) => { console.log(e); }

  }
  // mounting: react put comp. on the page, render first time on the view 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  // lexical scoping, arrow function will bind the class function with this scope
  // else for normal js function we need to specify 
  // this.handleFilter = this.handleFilter.bind(this); in the contructor 

  handleFilter = (e) => this.setState({ searchValue: e.target.value })

  render() {

    const { monsters, searchValue } = this.state;
    const filterMonsters = monsters.filter(m => m.name.toLowerCase().includes(searchValue.toLowerCase()))

    return (

      <div className="App">
        <h1> Monster Rolodex</h1>

        <SearchBox
          placeholder="search monster"
          handleChange={this.handleFilter}
        ></SearchBox>

        <CardList monsters={filterMonsters}></CardList>
      </div >
    );
  }

}



export default App;