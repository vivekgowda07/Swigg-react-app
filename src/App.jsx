import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
