import './App.css';
import Calculation from "./Calculation/Calculation";
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/calc">
                        <Calculation />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default App;