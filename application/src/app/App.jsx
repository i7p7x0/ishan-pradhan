import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { navigationIndicatorReducer } from "../stores/navigationIndicator/reducers/NavigationIndicator";
import { authenticationReducer } from "../stores/authentication/reducers/Authentication";
import { Provider } from "react-redux";
import Header from "../layout/header/Header";
import Admin from "../pages/admin/pages/Admin";
import UserCardStatic from "../components/userCard/UserCardStatic";
//STYLE
import "../app/style/app.css";
import Loader from "../components/loader/Loader";
//CUSTOM COMPONENTS

const Home = React.lazy(() => import("../pages/home/page/Home"));
const About = React.lazy(() => import("../pages/about/page/About"));
const Contact = React.lazy(() => import("../pages/contact/Contact"));
const Resume = React.lazy(() => import("../pages/resume/Resume"));
const Login = React.lazy(() => import("../pages/admin/pages/Login"));

const App = () => {
  const rootReducer = combineReducers({
    navigationIndicator: navigationIndicatorReducer,
    authentication: authenticationReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
