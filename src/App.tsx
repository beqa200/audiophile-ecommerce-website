import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import GlobalStyles from "./styled-components/GlobalStyle";
import { Helmet } from "react-helmet";
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
    </>
  );
}

export default App;
