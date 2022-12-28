import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages";
import { GlobalStyles } from "./styled-components";
import { Helmet } from "react-helmet";
import { Footer } from "./components";
import Category from "./pages/Category";
import ScrollToTop from "./ScrollOnTop";

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
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
