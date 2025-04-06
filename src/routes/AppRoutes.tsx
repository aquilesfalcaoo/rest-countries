import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Countries } from "../features/countries";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
