import React, {Component} from 'react';

import TodoCard from './todocard';

class TodoContainer extends Component {
  constructor() {
    super()
  }

  render() {

    let todoCards = Object.keys(this.props.todos).map((k) => {
      return (
        <TodoCard
          key={k}
          id={k}
          todo={this.props.todos[k]}
          todoStamp={this.props.todoStamps[k]}
          todoEdit={(id) => this.props.todoEdit(id)}
          todoEditInputChecker={(e) => {this.props.todoEditInputChecker(e)}}
          todoUpdate={(id) => this.props.todoUpdate(id)}
          todoRemove={(id) => this.props.todoRemove(id)}
          editError={this.props.editError}
        />
      );
    });

    return (
      <>
      {todoCards}
      </>
    );
  }
}

export default TodoContainer;
