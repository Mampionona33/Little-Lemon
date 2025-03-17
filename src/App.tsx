import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/Router";
import "material-symbols";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
