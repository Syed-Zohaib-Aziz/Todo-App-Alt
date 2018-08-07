import React, { Component } from 'react';
import { Input, Button } from 'antd';
import todoAction from '../../actions/todoActions'
import TodoList from './todoList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
    }
  }
  setTodo = () => {
    const { input } = this.state;
    if (input) {
      const alreadyExist = this.props.data.filter(value => value.text === input);
      if (alreadyExist.length === 0)
        todoAction.todoAddAction(this.state.input);
      this.setState({
        input: null,
      })
    }
  }
  setTodoState = (e) => {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <span>
          <Input placeholder='input Todo' onChange={this.setTodoState}
            value={this.state.input}
            style={{ width: "20%" }}
          />
          <Button type='primary' onClick={this.setTodo} style={{ marginLeft: 5 }}>
            Add
        </Button>
        </span>
        <span>
          <TodoList
            data={this.props.data}
            removeTodo={todoAction.todoRemoveAction}
            markTodoAsCompleted={todoAction.todoMarkAsCompletedAction}
          />
        </span>
      </div>
    );
  }
}

export default Todo;
