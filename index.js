const App = function _App() {
  return `
        <h3>This is something that has nothing to do with that counter thing</h3>
        <div id="counter">${_App.state.count}</div>
        <button id="increment">increment</button>
    `;
};

App.state = {
  count: 1,
  increment: () => {
    App.state.count++;
    render();
  },
};

function render() {
  document.getElementById("app").innerHTML = App();
  document
    .getElementById("increment")
    .addEventListener("click", App.state.increment);
}

render();
