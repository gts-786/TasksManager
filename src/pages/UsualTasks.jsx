import { useSelector } from "react-redux";
import AddTaskForm from "../components/Tasks/AddTaskForm";
import UsualTasksList from "../components/Tasks/UsualTasks/UsualTasksList/UsualTasksList";

//Компонент - страница/вкладка/категория обычных задач
function UsualTasks() {
  const tasks = useSelector((state) => state.Tasks.usualTasks)

  return (
    <div className="app">
      <UsualTasksList tasks={tasks}/>
      <AddTaskForm />
    </div>
  );
}

export default UsualTasks;