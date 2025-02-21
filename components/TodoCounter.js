class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);

    this._completed = todos.filter((todo) => todo.completed).length;
    this._total = todos.length;
    this._updatedText();
  }

  updateCompleted = (increment) => {
    this._completed += increment ? 1 : -1;

    this._updatedText();
  };

  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;

    this._updatedText();
  };

  _updatedText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
