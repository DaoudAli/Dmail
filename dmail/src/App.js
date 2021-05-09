import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import ComposeMail from "./components/ComposeMail";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen, selectIsLogged } from "./features/mailSlice";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const isLogged = useSelector(selectIsLogged);

  return (
    <Router>
      {!isLogged ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="appbody">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
            {sendMessageIsOpen && <ComposeMail />}
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
