const icon = require("../assets/todo-50.png");
function Header() {
  return (
    <h1 className="header">
      <img src={icon} alt={icon} /> <span>Todo App</span>
    </h1>
  );
}

export default Header;
