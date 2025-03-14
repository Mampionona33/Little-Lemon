import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MainLayout from "../pages/Layout/MainLayout/MainLayout";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  ),
  {
    future: {
      unstable_middleware: true,
    },
  }
);

export default appRouter;
