import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Details, Category, Home } from "./pages";
import { GlobalStyles, BlackScreen } from "./styled-components";
import { Helmet } from "react-helmet";
import { Footer, Header } from "./components";
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
          <Route path=":category/:product" element={<Details />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
