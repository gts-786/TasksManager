import { useSelector } from "react-redux";
import AddTaskForm from "../components/Tasks/AddTaskForm";
import ImportantTasksList from "../components/Tasks/ImportantTasks/ImportantTasksList/ImportantTasksList";

//Компонент - страница/вкладка/категория важных задач
function ImportantTasks() {
  const tasks = useSelector((state) => state.Tasks.importantTasks)

  return (
    <div className="app">
      <ImportantTasksList tasks={tasks}/>
      <AddTaskForm />
    </div>
  );
}

export default ImportantTasks;