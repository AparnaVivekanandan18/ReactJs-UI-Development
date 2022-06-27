import './App.css';
import PracticeProgram from "./practice/PracticeProgram"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="AppCss">
      <Router>
        <Switch>
          <Route path = "/practice">
            <PracticeProgram />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
