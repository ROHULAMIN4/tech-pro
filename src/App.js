import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Facebook from "./Login/Facebook/Facebook";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/facebook">
            <Facebook></Facebook>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
