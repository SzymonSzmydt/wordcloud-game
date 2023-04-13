import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import QuizBoard from "./pages/QuizBoard";
import Summary from "./pages/Summary";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />}>
      <Route path='login' element={<Login />} />
      <Route path='quizboard' element={<QuizBoard />} />
      <Route path='summary' element={<Summary />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <RouterProvider router={router} />
);
