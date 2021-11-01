//Router imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//MUI imports
import Container from '@mui/material/Container';

//Pages imports
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Error from "./Pages/Error";

//Assets imports
import bg from "./Assets/bg.svg"

export default function App() {
  return (
    <Router>
      <Container maxWidth="false"
      sx={{backgroundImage: `url(${bg})`, minHeight: "100vh", backgroundPosition: "center", backgroundRepeat:"no-repeat",
            backgroundSize:"cover", backgroundAttachment:"fixed", py:2}}>

        <Switch>
          <Route exact path="/" component={Home}/>

          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>

          <Route component={Error}/>
        </Switch>
        
      </Container>
    </Router>
  );
}