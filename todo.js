class Todo {
  constructor(title, description, dueDate, priority, notes = '') {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }

  changePriority(newPriority) {
    this.priority = newPriority;
  }

  // Other methods...
}

export { Todo };
