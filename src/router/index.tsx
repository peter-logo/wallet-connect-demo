import { HomePage } from "@/pages";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
