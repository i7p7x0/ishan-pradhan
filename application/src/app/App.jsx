import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { navigationIndicatorReducer } from "../stores/navigationIndicator/reducers/NavigationIndicator";
import { Provider } from "react-redux";
//CUSTOM COMPONENTS
import Home from "../pages/home/page/Home";
//STYLE
import "../app/style/app.css";
import Header from "../layout/header/Header";
import About from "../pages/about/page/About";
import Contact from "../pages/contact/Contact";
import Resume from "../pages/resume/Resume";

const App = () => {
  const rootReducer = combineReducers({
    navigationIndicator: navigationIndicatorReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
