import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";


//TODO Create the draw function
function _drawTodos() {
  let template = `<ul>`
  ProxyState.todos.forEach(t => template += `<li class="d-flex w-100 align-items-center justify-content-between">${t.Template}</li>`)
  document.getElementById('todo-list').innerHTML = template + '</ul>'
  document.getElementById('todo-count').innerText = "Remaining To-dos: " + ProxyState.todos.length
}

export default class TodoController {
  constructor() {
    //TODO Remember to register your subscribers
    todoService.getTodos();
    ProxyState.on("todos", _drawTodos)
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
    _drawTodos()
  }
  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    let title = form.title.value
    try {
      await todoService.addTodo(title);
    } catch (error) {
      console.error(error)
    }
    this.getTodos()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId
 */
  async setDone(todoId) {
    try {
      await todoService.setDone(todoId);
    } catch (error) {
      console.error(error)
    }
    this.getTodos()
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  async removeTodo(todoId) {
    try {
      await todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
    this.getTodos()
  }
}