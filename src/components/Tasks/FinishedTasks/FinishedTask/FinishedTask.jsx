import { useDispatch } from "react-redux";
//Импорт из Slice ActionCreators для диспатча в событии по нажатию на кнопку
import { removeTask } from "../../../../redux/reducers/TasksSlice";
import MyButton from "../../../UI/MyButton/MyButton";
import classes from "../../StyleTasks/Task.module.css";

//Компонент - завершённая задача для экспорта в лист завершенных задач
const FinishedTask = (props) => {
  const dispatch = useDispatch()
  
  return (
    <div>
      {props.tasks.map((task, index) => (
        <div key={index+1} className={[classes.content, classes.finished].join(' ')}>  
          <div className={classes.task}>
            {index + 1}. {task.body}
          </div>
          <div>{task.date}</div>
          <div className={classes.myBtn}>
            <MyButton onClick={()=>{dispatch(removeTask(task.id))}}>X</MyButton>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FinishedTask;