import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./Core/Header.js"
import Home from "./Core/Home.js"
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  AOS.init({
    delay: "1000", 
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
