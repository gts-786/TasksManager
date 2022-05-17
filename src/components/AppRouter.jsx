import { Route, Routes } from "react-router-dom";
import FinishedTasks from "../pages/FinishedTasks";
import ImportantTasks from "../pages/ImportantTasks";
import UrgentTasks from "../pages/UrgentTasks";
import UsualTasks from "../pages/UsualTasks";

//Компонент для маршрутизации и перходов по категориям задач без обновления страниц в браузере
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/importantTasks" element={<ImportantTasks />} />
      <Route path="/urgentTasks" element={<UrgentTasks />} />
      <Route path="/usualTasks" element={<UsualTasks />} />
      <Route path="/finishedTasks" element={<FinishedTasks />} />
      <Route path="/" element={<div></div>} />
      <Route path="*" element={<div></div>} />
    </Routes>
  );
};
export default AppRouter;