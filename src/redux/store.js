import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from "./reducers/TasksSlice";

//Создание store с помощью Redux toolkit
export default configureStore ({
    reducer: {//Передаём в store созданные reducers
        Tasks: TasksReducer,
    },
})