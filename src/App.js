//Router imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//MUI imports
import Container from '@mui/material/Container';

//Pages imports
import Home from "./Pages/Home";

//Assets imports
import bg from "./Assets/bg.svg"

export default function App() {
  return (
    <Router>
      <Container maxWidth="false"
      sx={{backgroundImage: `url(${bg})`, minHeight: "100vh", backgroundPosition: "center", backgroundRepeat:"no-repeat",
            backgroundSize:"cover", backgroundAttachment:"fixed"}}>

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        
      </Container>
    </Router>
  );
}