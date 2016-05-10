class TodosController < ApplicationController

  def index
    render json: Todo.all_by_completed_then_created
  end

  def update_completed
    todo = Todo.find_by(id: params[:id])
    if todo
      todo.update_attributes(todo_completed_params)
      render json: {result: 'success'}
    else
      render json: {result: 'failure'}
    end
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: {result: 'success'}
    else
      render json: {result: 'failure', errors: todo.errors.full_messages.join(', ')}
    end
  end


  private

  def todo_completed_params
    params.permit(:completed, :id)
  end

  def todo_params
    params.require(:todo).permit(:text)
  end

end