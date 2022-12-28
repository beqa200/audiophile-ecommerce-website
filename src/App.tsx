import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages";
import { GlobalStyles, BlackScreen } from "./styled-components";
import { Helmet } from "react-helmet";
import { Footer } from "./components";
import Category from "./pages/Category";
import ScrollToTop from "./ScrollOnTop";
import { createContext, useState } from "react";

export const MyContext = createContext<ContextProps | null>(null);
function App() {
  const [menu, setMenu] = useState<Boolean>(false);
  return (
    <MyContext.Provider value={{ menu, setMenu }}>
      <GlobalStyles menu={menu} />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />

        {menu && <BlackScreen />}

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":category" element={<Category />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
