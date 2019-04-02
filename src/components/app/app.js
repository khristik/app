import React, {Component} from 'react';

import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

import './app.css';
import UserGreeting from "../user-greeting/user-greeting";

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#11cb5f' }, // Purple and green play nicely together.
    secondary: { main: purple[500] }, // This is just green.A700 as hex.
  },
});

export default class App extends Component {

  maxId = 100;

  state = {
    // items: [cd
    //   {id: 1, cdcdlabel: 'Learn React', done: false},
    //   {id: 2, label: 'Learn Angular', done: false},
    //   {id: 3, label: 'Learn Vue', done: false}
    // ],
    items: [],
    isShow: false,
    user: '',
  };

  getUserName(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case 'title' : {
        this.setState({user: itemValue});
      }
    }
  }

  onItemAdded = (label) => {
    this.setState((state) => {
      const item = this.createItem(label);
      return {items: [...state.items, item]};
    })
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((item, index) => item.id === id);
    const oldItem = arr[idx];
    const value = !oldItem[propName];

    const item = {...arr[idx], [propName]: value};
    return [
      ...arr.slice(0, idx),
      item,
      ...arr.slice(idx + 1)
    ];
  };

  onToggleDone = (id) => {
    this.setState((state) => {
      const items = this.toggleProperty(state.items, id, 'done');
      return {items};
    });
  };

  onDelete = (id) => {
    this.setState((state) => {
      const idx = state.items.findIndex((item) => item.id === id);
      const items = [
        ...state.items.slice(0, idx),
        ...state.items.slice(idx + 1)
      ];
      return {items};
    });
  };

  createItem(label) {
    return {
      id: ++this.maxId,
      label,
      important: false,
      done: false
    };
  }

  submit = () => {
    localStorage.setItem('user', JSON.stringify(this.state.user));
    let user = JSON.parse(localStorage.getItem('user'));
    this.setState({
      user: user,
    });
    this.setState(state => ({isShow: !state.isShow}));
  };

  render() {
    // const items = this.state.items;
    // const user = this.user;
    const {items, user} = this.state;

    return (
      <div className="todo-app">
        <input type="text" name="title" onChange={(item) => this.getUserName(item, 'title')}/>

        <MuiThemeProvider theme={theme}>
          <Button onClick={() => this.submit()} isShow={!this.state.isShow} variant="contained" color="primary">
            Submit
          </Button>
        </MuiThemeProvider>

        {this.state.isShow && (
          <React.Fragment>
            <div className="">
              <UserGreeting user={this.state.user} onUserSet={this.submit}/>
            </div>
            <ItemAddForm onItemAdded={this.onItemAdded}/>
            <TodoList
              items={items}
              onToggleDone={this.onToggleDone}
              onDelete={this.onDelete}/>
          </React.Fragment>
        )}
      </div>
    );
  };
}
