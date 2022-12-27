import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages";
import { GlobalStyles } from "./styled-components";
import { Helmet } from "react-helmet";
import { Footer } from "./components";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />}></Route>)
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />

      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </>
  );
}

export default App;
