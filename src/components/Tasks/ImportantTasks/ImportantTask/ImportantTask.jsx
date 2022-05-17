import { useDispatch } from "react-redux";
//Импорт из Slice ActionCreators для диспатча в событии по нажатию на кнопку
import { removeTask, successFinishedTask } from "../../../../redux/reducers/TasksSlice";
import MyButton from "../../../UI/MyButton/MyButton";
import classes from "../../StyleTasks/Task.module.css";

//Компонент - важная задача для экспорта в лист важных задач
const ImportantTask = (props) => {
  const dispatch = useDispatch()
  
  return (
    <div className={classes.border}>
      {props.tasks.map((task, index) => (
        <div key={task.id} className={classes.content}>
          <div className={classes.task}>
            {index + 1}. {task.body}
          </div>
          <div>{task.date}</div>
          <div className={classes.myBtn}>
            <MyButton onClick={()=>{dispatch(successFinishedTask(task.id))}}>v</MyButton>
          </div>
          <div className={classes.myBtn}>
            <MyButton onClick={()=>{dispatch(removeTask(task.id))}}>X</MyButton>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ImportantTask;