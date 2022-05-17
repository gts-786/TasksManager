import { useSelector } from "react-redux";
import AddTaskForm from "../components/Tasks/AddTaskForm";
import UrgentTasksList from "../components/Tasks/UrgentTasks/UrgentTasksList/UrgentTasksList";

//Компонент - страница/вкладка/категория срочных задач
function UrgentTasks() {
  const tasks = useSelector((state) => state.Tasks.urgentTasks)

  return (
    <div className="app">
      <UrgentTasksList tasks={tasks}/>
      <AddTaskForm />
    </div>
  );
}

export default UrgentTasks;