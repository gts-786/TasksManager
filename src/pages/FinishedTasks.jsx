import { useSelector } from "react-redux";
import FinishedTasksList from "../components/Tasks/FinishedTasks/FinishedTasksList/FinishedTasksList";

//Компонент - страница/вкладка/категория завершённых задач
function FinishedTasks() {
  const tasks = useSelector((state) => state.Tasks.finishedTasks)

  return (
    <div className="app">
      <FinishedTasksList tasks={tasks}/>
    </div>
  );
}

export default FinishedTasks;