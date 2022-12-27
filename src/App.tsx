import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
    </Route>
  )
)

function App() {
  return <><RouterProvider router={router}></RouterProvider></>;
}

export default App;
