import FinishedTask from "../FinishedTask/FinishedTask";
import classes from "../../StyleTasks/TasksList.module.css";

//создание и экспорт компонента "список завершённых задач"
const FinishedTasksList = ({ tasks }) => {
  return (
    <div> 
      {tasks.length !== 0 ? (//Тернарный оператор для отображения отсутствия задач, если список пуст
        <>
        <h1 className={classes.taskListFont}>Список завершённых задач</h1>
          <div className={[classes.taskList, classes.header, classes.finished].join(' ')}>
            <div className={classes.task}>Наименование задачи</div>
            <div>Дата и время выполнения</div>
            <div>Удалить</div>
          </div>
          <div className={classes.taskList}>
            <FinishedTask tasks={tasks} />{/* Применение импортированного компонента  "Завершённая задача"*/}
          </div>
        </>
      ) : (
        <h2 className={classes.taskListFont}>Завершённых задач нет</h2>
      )}
    </div>
  );
};
export default FinishedTasksList;
