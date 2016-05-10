const NewTodoForm = React.createClass({

  handleAddButtonClick: function (e) {
    e.preventDefault();
    var $form = $('#add-todo-form');
    var data = $form.serialize();
    $.ajax({
      url: '/todos',
      type: 'post',
      data: data
    }).done(function (resp) {
      if (resp.result == 'success') {
        this.props.getTodoListItems();
        $form[0].reset();
      } else {
        $('#add-todo-form .errors').text(resp.errors);
      }
    }.bind(this));
  },

  render: function () {
    return (
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Add a Todo Item:</h3>
          </div>
          <div className="panel-body">
            <form id="add-todo-form">
              <div className="form-group">
                <label htmlFor="todo[text]">Text:</label>
                <input type="text" className="form-control" name="todo[text]" placeholder="e.g. 'Buy groceries'" />
              </div>
              <div className="errors">
              </div>
              <button onClick={this.handleAddButtonClick} className="btn btn-info">Add</button>
            </form>
          </div>
        </div>
      );
  }
})