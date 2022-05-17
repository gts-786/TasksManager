import UrgentTask from "../UrgentTask/UrgentTask";
import classes from "../../StyleTasks/TasksList.module.css";

//создание и экспорт компонента "список срочных задач"
const UrgentTasksList = ({ tasks }) => {
  return (
    <div>   
      {tasks.length !== 0 ? (//Тернарный оператор для отображения отсутствия задач, если список пуст
        <>
        <h1 className={classes.taskListFont}>Срочные задачи</h1>
          <div className={[classes.taskList, classes.header].join(' ')}>
            <div className={classes.task}>Наименование задачи</div>
            <div>Срок выполнения</div>
            <div>Готово</div>
            <div>Удалить</div>
          </div>
          <div className={classes.taskList}>
            <UrgentTask tasks={tasks} />{/* Применение импортированного компонента  "Срочная задача"*/}
          </div>
        </>
      ) : (
        <h2 className={classes.taskListFont}>Срочных задач нет</h2>
      )}
    </div>
  );
};
export default UrgentTasksList;
