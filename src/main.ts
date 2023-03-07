const todoContainer = document.getElementById("todos") as HTMLUListElement;
const messageInput = document.getElementById("message") as HTMLInputElement;
const addTodoButton = document.getElementById("add-todo") as HTMLButtonElement;
const message = document.getElementById("msg") as HTMLElement;
// アプリケーションの状態を表す型
type State = { todos: string[] };

// アプリケーションの状態
const state : string[] = [];
const state2 : number[] = [];
const state3 : number[] = [];
// アプリケーションの状態を UI に反映させる関数
function render() {
  // 一旦全ての内容を削除
  todoContainer.innerHTML = "";
  for (const todo of state) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todo;
    li.appendChild(span);
    todoContainer.appendChild(li);
  }
}
function standard() {
  const n = state2.length;
  const a: number = (state2.reduce((sum, element) => sum + element, 0) / n)**2;
  const b: number = state3.reduce((sum, element) => sum + element, 0) / n;
  const std = Math.sqrt((n/(n-1))*(b-a));
  message.innerText = `実験標準偏差は、${std}です。`
}
// 状態を変化させる関数
function addTodo(todo: string) {
  state.push(todo);
  state2.push(parseFloat(todo));
  state3.push(parseFloat(todo)**2);
  render();
  standard();
}

addTodoButton.onclick = () => {
  addTodo(messageInput.value);
};
