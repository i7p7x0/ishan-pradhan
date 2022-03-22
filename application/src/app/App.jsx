import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { navigationIndicatorReducer } from "../stores/navigationIndicator/reducers/NavigationIndicator";
import { authenticationReducer } from "../stores/authentication/reducers/Authentication";
import { Provider } from "react-redux";
//CUSTOM COMPONENTS
import Home from "../pages/home/page/Home";

import Header from "../layout/header/Header";
import About from "../pages/about/page/About";
import Contact from "../pages/contact/Contact";
import Resume from "../pages/resume/Resume";
import UserCardStatic from "../components/userCard/UserCardStatic";

// ADMIN COMPONENTS
import Login from "../pages/admin/pages/Login";
import Admin from "../pages/admin/pages/Admin";

//STYLE
import "../app/style/app.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated);

  const rootReducer = combineReducers({
    navigationIndicator: navigationIndicatorReducer,
    authentication: authenticationReducer,
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
              <Route path="/login" exact element={<Login />} />
              <Route path="/admin" exact element={<Admin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
