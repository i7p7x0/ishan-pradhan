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
import UserCardStatic from "../components/userCard/UserCardStatic";

const App = () => {
  const rootReducer = combineReducers({
    navigationIndicator: navigationIndicatorReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <div className="app-child app-header">
            <Header />
          </div>
          <div className="app-child app-bridge">
            <UserCardStatic />
          </div>
          <div className="app-child app-body">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/home" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/resume" exact element={<Resume />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
