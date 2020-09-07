import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Corey/todos/'


class TodoService {
  async getTodos() {
    let res = await api.get(url);
    let todoList = res.data.data;
    ProxyState.todos = todoList.map(t => new Todo(t))
  }

  async addTodo(title) {
    let todo = new Todo({ description: title })
    let res = await api.post(url, todo);
  }

  async setDone(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    if (todo.completed) {
      todo.completed = false
    } else {
      todo.completed = true
    }
    let res = await api.put(url + todoId, todo);
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    let res = await api.delete(url + todoId, todo)
  }
}

const todoService = new TodoService();
export default todoService;