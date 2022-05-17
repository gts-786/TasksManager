import { Link } from "react-router-dom";

//Компонент навигации в зависимости от выбранной категории задач
const Navbar = () => {
  return (
    <div className="app">
      <h1>Список моих задач</h1>
      <div className="app__navbar">
        <Link to="importantTasks" className="app__navlink">Важные задачи</Link>|
        <Link to="urgentTasks" className="app__navlink">Срочные задачи</Link>|
        <Link to="usualTasks" className="app__navlink">Обычные задачи</Link>|
        <Link to="finishedTasks" className="app__navlink">Завершённые задачи</Link>
      </div>
    </div>
  );
};
export default Navbar;