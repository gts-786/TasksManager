import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyModal from "../UI/MyModal/MyModal";
import AddTask from "./AddTask";

//Компонент - форма для добавления задачи
//Включает модальное окно с инпутами и кнопку для вызова модального окна
const AddTaskForm = () => {
  const [modal, setModal] = useState(false); 

  return (
    <div>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Добавить задачу
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <AddTask setModal={()=>setModal()}/>
      </MyModal>
    </div>
  );
};
export default AddTaskForm;