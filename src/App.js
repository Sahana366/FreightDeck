import "./App.scss";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Trucks from "./components/Trucks/Trucks";
import Container2 from "./components/Container2/Container2";
import TruckTable from "./components/TruckTable/TruckTable";
import Container from "./components/Container/Container";
import TrackAndTrace from "./components/TrackAndTrace/TrackAndTrace";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <NavBar/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/shipment-overview" />}
          />
          <Route default path="/shipment-overview">
            <Trucks/>
            <Container2/>
            <TruckTable/>
            <Container/>
          </Route>
          <Route path="/track">
            <TrackAndTrace/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
