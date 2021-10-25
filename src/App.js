import React ,{Component} from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';


class App extends Component{
  constructor(){
    super();
      this.state={
      monster:[] ,
      searchField:[]
      };
      
      
    };
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json())
      .then(users=> this.setState({monster:users}))
    }
  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }

  render(){
    
    const {monster,searchField} = this.state;
    const filteredMonsters= monster.filter(monster=>
      monster.name.includes(searchField))
    return (
      <div className="App">
        <h1> MONSTERS ROLODEX </h1>
        <SearchBox
        placeholder='Search Monsters'
        handleChange={this.handleChange}
        />
        <CardList monster={filteredMonsters}/>
        
        
      </div>
    );
  }
}

export default App;
