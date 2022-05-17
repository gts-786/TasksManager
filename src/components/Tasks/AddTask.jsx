import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/reducers/TasksSlice";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

//Компонент - добавление задачи
const AddTask = ({setModal}) => {
  const [task, setTask] = useState({body: '', date: ''});
  const dispatch = useDispatch()

  const createTask = () => {//функция создания задачи и обновления формы после добавления
    dispatch(addTask({id: Date.now(), body: task.body, date: task.date}))
    setTask({body: '', date: ''})
    setModal()
  }

  return (
    <div>
      <MyInput
        placeholder="Введите задачу"
        value={task.body}
        onChange={(e) => setTask({ ...task, body: e.target.value })}
      />
      <MyInput
        placeholder="Введите срок выполнения задачи (необязательно)"
        value={task.date}
        onChange={(e) => setTask({ ...task, date: e.target.value })}
      />
      <MyButton onClick={createTask}>Добавить задачу</MyButton>
    </div>
  );
};
export default AddTask;