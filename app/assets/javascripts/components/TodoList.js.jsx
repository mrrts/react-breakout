const TodoList = React.createClass({
  getInitialState: function () {
    return {
      todoListItems: []
    };
  },

  getTodoListItems: function () {
    $.get('/todos', function (resp) {
      console.log(resp);
      this.setState({
        todoListItems: resp
      })
    }.bind(this));
  },

  componentDidMount: function () {
    this.getTodoListItems();
  },

  updateList: function () {
    this.getTodoListItems();
  },

  todoListItems: function () {
    return this.state.todoListItems.map(function (tli, i) {
      return  <TodoListItem 
                {...tli} 
                key={tli.id}
                updateList={this.updateList}
              />
    }.bind(this));
  },

  render: function () {
    return (
        <div>
          
          <NewTodoForm getTodoListItems={this.getTodoListItems} />
          
          <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Todo List</h3>
            </div>
            <div className="panel-body">
              <div className="list-group">
                {this.todoListItems()}
              </div>
            </div>
          </div>
          
        </div>

      );
  }
})