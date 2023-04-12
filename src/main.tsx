import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./pages/Login";
import QuizBoard from "./pages/QuizBoard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='login' element={<Login />} />
      <Route path='quizboard' element={<QuizBoard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
