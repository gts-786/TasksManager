import ImportantTask from "../ImportantTask/ImportantTask";
import classes from "../../StyleTasks/TasksList.module.css";

//создание и экспорт компонента "список важных задач"
const ImportantTasksList = ({ tasks }) => {
  return (
    <div>   
      {tasks.length !== 0 ? (//Тернарный оператор для отображения отсутствия задач, если список пуст
        <>
        <h1 className={classes.taskListFont}>Важные задачи</h1>
          <div className={[classes.taskList, classes.header].join(' ')}>
            <div className={classes.task}>Наименование задачи</div>
            <div>Срок выполнения</div>
            <div>Готово</div>
            <div>Удалить</div>
          </div>
          <div className={classes.taskList}>
            <ImportantTask tasks={tasks} />{/* Применение импортированного компонента  "Важная задача"*/}
          </div>
        </>
      ) : (
        <h2 className={classes.taskListFont}>Важных задач нет</h2>
      )}
    </div>
  );
};
export default ImportantTasksList;
