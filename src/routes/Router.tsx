import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </>
  ),
  {
    future: {
      unstable_middleware: true,
    },
  }
);

export default appRouter;
