import UsualTask from "../UsualTask/UsualTask";
import classes from "../../StyleTasks/TasksList.module.css";

//создание и экспорт компонента "список обычных задач"
const UsualTasksList = ({ tasks }) => {
  return (
    <div>   
      {tasks.length !== 0 ? (//Тернарный оператор для отображения отсутствия задач, если список пуст
        <>
        <h1 className={classes.taskListFont}>Обычные задачи</h1>
          <div className={[classes.taskList, classes.header].join(' ')}>
            <div className={classes.task}>Наименование задачи</div>
            <div>Срок выполнения</div>
            <div>Готово</div>
            <div>Удалить</div>
          </div>
          <div className={classes.taskList}>
            <UsualTask tasks={tasks} />{/* Применение импортированного компонента  "Обычная задача"*/}
          </div>
        </>
      ) : (
        <h2 className={classes.taskListFont}>Обычных задач нет</h2>
      )}
    </div>
  );
};
export default UsualTasksList;
