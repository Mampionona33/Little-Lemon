import "./App.css";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/Router";
import "material-symbols";

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
