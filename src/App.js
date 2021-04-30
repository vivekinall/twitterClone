import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword  from './components/ForgotPassword';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/SignUp" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/forgot-password" component={ForgotPassword}></Route>
            </Switch>
          </AuthProvider>
        </Router>
        {/* <SignUp /> */}
      </div>
    </Container>
  );
}

export default App;
