import { createSlice } from "@reduxjs/toolkit";

//Создаём новый Slice, который содержит в себе дефолтные состояния, необходимые редюсеры
export const TasksSlice = createSlice({
  name: "Tasks",
  initialState: {//Инициализируем дефолтные состояния: 4 массива по назначению со списками задач 
    importantTasks: [
      { id: 1, body: "Позвонить отцу", date: "сегодня" },
      { id: 2, body: "Пробежка", date: "12:00" },
      { id: 3, body: "Завершить проект", date: "20.05.2022" },
    ],
    usualTasks: [{ id: 1, body: "Купить хлеб", date: "Сегодня" },],
    urgentTasks: [],
    finishedTasks: [],
  },

  reducers: {
    //редюсер добавления задачи в зависимости от выбранной категории (условие по URL)
    addTask: (state, action) => {
      const { id, body, date } = action.payload;
      if (window.location.pathname==="/importantTasks"){state.importantTasks.push(action.payload);}
      if (window.location.pathname==="/urgentTasks"){state.urgentTasks.push(action.payload);}
      if (window.location.pathname==="/usualTasks"){state.usualTasks.push(action.payload);} 
    },
    //редюсер перемещения успешно выполненной задачи в завершенные в зависимости от выбранной категории (условие по URL)
    //Использованы методы массивов: findIndex, push и splice для перемещения
    //Также реализован механизм добавление даты и времени выполнения задачи
    successFinishedTask: (state, action) => {
      let successTasks;
      if (window.location.pathname==="/importantTasks"){successTasks=state.importantTasks}
      if (window.location.pathname==="/urgentTasks"){successTasks=state.urgentTasks}
      if (window.location.pathname==="/usualTasks"){successTasks=state.usualTasks}
      const index = successTasks.findIndex((task) => task.id === action.payload);
      successTasks[index].date = new Date().toLocaleString().slice(0, -3);
      state.finishedTasks.push(successTasks[index]);
      successTasks.splice(index, 1);
    }, 
    //редюсер удаления задачи в зависимости от выбранной категории (условие по URL)
    removeTask: (state, action) => {
      let removeTasks;
      if (window.location.pathname==="/importantTasks"){removeTasks=state.importantTasks}
      if (window.location.pathname==="/urgentTasks"){removeTasks=state.urgentTasks}
      if (window.location.pathname==="/usualTasks"){removeTasks=state.usualTasks}
      if (window.location.pathname==="/finishedTasks"){removeTasks=state.finishedTasks}
      const index = removeTasks.findIndex((task) => task.id === action.payload);
      removeTasks.splice(index, 1);
    },
  },
});
//Экспорт ActionCreators, генерируемые Slice для каждого редюсера
export const { addTask, successFinishedTask, removeTask} = TasksSlice.actions;
//Экспорт редюсера
export default TasksSlice.reducer;