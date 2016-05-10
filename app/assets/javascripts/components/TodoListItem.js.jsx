const TodoListItem = React.createClass({
  getInitialState: function () {
    return {
      completed: this.props.completed
    }
  },

  handleCheckboxChange: function (e) {
    $clicked = $(e.currentTarget);
    var checked = $clicked.prop("checked");
    this.setState({
      completed: checked
    });  
    $.ajax({
      url: '/todos/' + this.props.id,
      type: 'patch',
      data: {completed: checked}
    }).done(function (resp) {
      this.props.updateList();
    }.bind(this));
  },

  completedClassName: function () {
    return this.state.completed ? "completed" : "";
  },

  render: function () {
    return (
        <div className={"list-group-item " + this.completedClassName()} >
          <div className="checkbox">
            <label>
              <input 
                type="checkbox" 
                defaultChecked={this.state.completed} 
                onChange={this.handleCheckboxChange}
                /> 
              {this.props.text}
            </label>
          </div>
        </div>
      )
  }
})