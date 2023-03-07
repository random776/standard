var todoContainer = document.getElementById("todos");
var messageInput = document.getElementById("message");
var addTodoButton = document.getElementById("add-todo");
var message = document.getElementById("msg");
// アプリケーションの状態
var state = [];
var state2 = [];
var state3 = [];
// アプリケーションの状態を UI に反映させる関数
function render() {
    // 一旦全ての内容を削除
    todoContainer.innerHTML = "";
    for (var _i = 0, state_1 = state; _i < state_1.length; _i++) {
        var todo = state_1[_i];
        var li = document.createElement("li");
        var span = document.createElement("span");
        span.textContent = todo;
        li.appendChild(span);
        todoContainer.appendChild(li);
    }
}
function standard() {
    var n = state2.length;
    var a = Math.pow((state2.reduce(function (sum, element) { return sum + element; }, 0) / n), 2);
    var b = state3.reduce(function (sum, element) { return sum + element; }, 0) / n;
    var std = Math.sqrt((n / (n - 1)) * (b - a));
    message.innerText = "\u5B9F\u9A13\u6A19\u6E96\u504F\u5DEE\u306F\u3001".concat(std, "\u3067\u3059\u3002");
}
// 状態を変化させる関数
function addTodo(todo) {
    state.push(todo);
    state2.push(parseFloat(todo));
    state3.push(Math.pow(parseFloat(todo), 2));
    render();
    standard();
}
addTodoButton.onclick = function () {
    addTodo(messageInput.value);
};
