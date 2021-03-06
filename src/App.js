import React from "react";
import "./styles/App.scss";
import Navbar from "./components/elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContact  from "./components/contacts/EditContact";
import detail from './components/elements/detail'
// import favor from './components/elements/favor'
import signup from './components/elements/signup'



function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={signup} />
                <Route exact path="/signup" component={signup} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/detail" component={detail}/>
                {/* <Route exact path="/favor" component={favor} /> */}
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
         
         
        </div>
      </Router>
    </Provider>
  );
}

export default App;
