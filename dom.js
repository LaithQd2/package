import { Todo } from './todo.js';
import { Project } from './project.js';

const l = console.log

const todo1 = new Todo('test', 'this is a dummy', '2023/8/10', 'high', `Let's do it!`);
const project1 = new Project('test')
project1.addTodo(todo1)
const projectList = [];
  
  projectList.push(project1)
function createTodoDOM(todo) {
  
const todoContainer = document.createElement('div');
todoContainer.classList.add('todo');

const titleElement = document.createElement('h2');
titleElement.textContent = todo.title;

const dueDateElement = document.createElement('p');
dueDateElement.textContent = `Due: ${todo.dueDate}`;

const priorityElement = document.createElement('span');
priorityElement.textContent = `Priority: ${todo.priority}`;

const descriptionElement = document.createElement('p');
descriptionElement.textContent = todo.description;

// Create a button to mark the todo as complete
const completeButton = document.createElement('button');
completeButton.textContent = 'Mark Complete';
completeButton.addEventListener('click', () => {
  todo.markComplete();
  // Update the UI to reflect the completed status
  // For example, you can add a class to the todoContainer
});

// Create a button to delete the todo
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click', () => {
  // Remove the todo from the project's todos array
  // Update the UI to remove the todoContainer
});

// Append all elements to the todoContainer
todoContainer.appendChild(titleElement);
todoContainer.appendChild(dueDateElement);
todoContainer.appendChild(priorityElement);
todoContainer.appendChild(descriptionElement);
todoContainer.appendChild(completeButton);
todoContainer.appendChild(deleteButton);

return todoContainer;
  
}


function createProjectDOM(project) {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('project');
  
  const projectNameElement = document.createElement('h3');
  projectNameElement.textContent = project.name;
  
  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todos');
  for (let todo of project.todos) {
    const todoElement = createTodoDOM(todo);
    todosContainer.appendChild(todoElement);
  }
  projectContainer.appendChild(projectNameElement);
  projectContainer.appendChild(todosContainer);

  return projectContainer;
}

function renderProjects() {
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.innerHTML = '';

  projectList.forEach(project => {
    const projectElement = createProjectDOM(project);
    projectsContainer.appendChild(projectElement);
  });
}

function renderTodos(project) {
  const todosContainer = document.getElementById('todos-container');
  todosContainer.innerHTML = '';

  project.todos.forEach(todo => {
    const todoElement = createTodoDOM(todo);
    todosContainer.appendChild(todoElement);
  });
}

// Event listeners and UI interactions...
