export default class Todo {
  constructor({ _id = null, completed = false, description }) {
    this.id = _id
    this.completed = completed
    this.description = description
  }


  get Template() {
    return `<p>${this.CheckSymbol} ${this.description}</p> <i class="fa fa-trash text-danger align-self-right" aria-hidden="true" onclick="app.todoController.removeTodo('${this.id}')"></i>`
  }

  get CheckSymbol() {
    if (this.completed) {
      return `<i class="fa fa-check-square" aria-hidden="true" onclick="app.todoController.setDone('${this.id}')"></i>`
    } else {
      return `<i class="fa fa-square" aria-hidden="true" onclick="app.todoController.setDone('${this.id}')"></i>`
    }
  }
}