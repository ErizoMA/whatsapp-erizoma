import "./App.css";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [user,setUser] = useState(null)
  return (
    <div className="app">
      <div className="app__body">
        {!user ? <Login/> : 
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              {/* <Chat /> */}
            </Route>
          </Switch>
        </Router>}
      </div>
    </div>
  );
}

export default App;
