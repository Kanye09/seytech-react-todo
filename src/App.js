import {Button} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Component } from 'react';
import TodoList from './TodoList';
import EditTodo from './EditTodo'

const todos = [
  // {
  //   id: 1,
  //   text: 'learn react',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 2,
  //   text: 'drink coffee',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 3,
  //   text: 'debug portal',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 4,
  //   text: 'run 1 mile',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 5,
  //   text: 'read news',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 6,
  //   text: 'take shower',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 7,
  //   text: 'do laundry',
  //   isActive: true,
  //   isDone: false
  // },
  // {
  //   id: 8,
  //   text: 'read books',
  //   isActive: true,
  //   isDone: false
  // },
]

class App extends Component {

  constructor () {
    super();
    this.state = {
      data: todos,
      inputValue: '',
      id: 1
    }
  }


  addTodo = () => {
    
    if (this.state.inputValue === '') {
      return
    } else {
      // console.log('checkout ', this.state.data)
      const exist = this.state.data.find(item => { return item.text === this.state.inputValue}) 
      if (exist) {
        return 
      }
    }

    const newData = {
      id: this.state.id,
      text: this.state.inputValue,
      isActive: true,
      isDone: false
    }
    todos.push(newData)
    this.setState({id: this.state.id+1});
  }
  getInputValue = (e) => {
    this.setState({inputValue: e.target.value})
  }


  onEdit = () =>{

  }

  delete = (id) => {
    const todo = this.state.data.filter(item => {return item.id !== id})
    this.setState({data: todo})
  }

  render(){
    return(
      <Router>
          <Switch>




            <Route exact path='/'>
              <TodoList 
                delete={this.delete} 
                addTodo={this.addTodo} 
                todos={this.state.data} 
                getInputValue={this.getInputValue}
              />
            </Route>


            <Route path='/edit/:id'>
              <EditTodo todos={this.state.data} />
            </Route>




          </Switch>       
      </Router>   
    )
  }
}


export default App;
