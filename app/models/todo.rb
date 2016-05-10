class Todo < ActiveRecord::Base

  def self.all_by_completed_then_created
    Todo.where(completed: false).order(created_at: :desc) + Todo.where(completed: true).order(created_at: :desc) 
  end
end
