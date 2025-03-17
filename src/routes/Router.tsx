import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import MainLayout from "../pages/Layout/MainLayout/MainLayout";
import Booking from "../pages/Booking/Booking";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Route>
  ),
  {
    future: {
      unstable_middleware: true,
    },
  }
);

export default appRouter;
