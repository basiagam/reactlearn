import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import ListItem from './ListItem';

class App extends Component {
  constructor() {
    super();
    this.state ={
      newTodo: '',
      editing: false,
      editingIndex: null,
      notification: null,
      todos: []
    };

    this.URI = 'https://5b9243994c818e001456e8e9.mockapi.io';

    //This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.alert = this.alert.bind(this);
  }

  async componentDidMount(){
    const response = await axios.get(`${this.URI}/todos`);
    
    this.setState({
      todos: response.data
    });
  }

  handleChange(event){
    this.setState({
        newTodo:event.target.value
    });
  }

  //generowanie id tablicy +1, jeśli tablica mniejsza niz 1 to zwroc 1
  generateTodoId(){
    const lastTodo = this.state.todos[this.state.todos.length - 1];

    if(lastTodo){
      return lastTodo.id +1;
    }
    return 1
  }

  addTodo(){
    console.log(this.state.todos);
    const newTodo = {
        id: this.generateTodoId(),
        name: this.state.newTodo   
    };

    //kopiujemy todos ze state do zmiennej i dodajemy nowy todo
    const todos = this.state.todos;
    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo: ''
    });

  }

  alert(notification)
  {
    this.setState({
      notification
    });

    setTimeout (() => {
      this.setState({
        notification:null
      });
    },2000)
  }

  deleteTodo(index){
    const todos = this.state.todos;
    delete todos[index];

    this.setState({todos});
    this.alert('Todo deleted successfully');    
  }

  editTodo(index){
    const todo = this.state.todos[index];

    this.setState({
      editing: true,
      newTodo: todo.name,
      editingIndex: index
    });
  }

  updateTodo(){
    const todo = this.state.todos[this.state.editingIndex];
    todo.name = this.state.newTodo;

    const todos = this.state.todos;
    todos[this.state.editingIndex] = todo;

    this.setState({
      todos,
      editing: false,
      editingIndex: null, 
      newTodo: ''});

      this.alert('Todo updated successfully');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD React</h1>
        </header>
        <div className="container">
          
          {
            this.state.notification &&
            <div className="alert mt-3 alert-success">
              <p className="text-center">{this.state.notification}</p>
            </div>
          }

          <input 
          type="text"
          name="todo" 
          className="my-4 form-control"
          placeholder="Add a new todo"
          onChange={this.handleChange}
          value={this.state.newTodo}
          />

          <button 
          onClick={this.state.editing ? this.updateTodo : this.addTodo}
          className="btn-success mb-3 form-control"
          disabled={this.state.newTodo.length <5}>
          {this.state.editing ? 'Update todo' : 'Add todo'}
          </button>
          {
            !this.state.editing &&
            <ul className="list-group">
            {this.state.todos.map((item,index) =>{
               return <ListItem
                key={item.id}
                item={item}
                editTodo={() => {this.editTodo(index);}}
                deleteTodo={() => {this.deleteTodo(index);}}
                />; 
            })}
          </ul>
          }
        </div>
      </div> 
    );
  }
}

export default App;
