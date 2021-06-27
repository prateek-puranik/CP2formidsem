import './App.css';
import Hero from './Hero.js'
import Footer from './Footer.js'
import Radisson from "./Agra/RadissonBlue.js"
import Le from "./Agra/lemeridian.js"
import Vivanta from "./Agra/vivanta.js"
import Card from './card-ui'
import Navbar from './Navbar.js';
import PersonalInfo from './Form.js'
import { BrowserRouter as Router,Switch} from "react-router-dom";
import Jaipur from "./Jaipur/Jaipur1.js";
import Agra from "./Agra/Navbar1.js";
import AgraHotel from "./Agra/HotelAgra.js";
import Route from 'react-router-dom/Route';
import Kochi from "./Kochi/Kochi1.js";
import Ladakh from "./Ladakh/Ladakh1.js";
import NewDelhi from "./NewDelhi/NewDelhi1.js";
import Shimla from "./Shimla/Shimla1.js";
import Goa from "./Goa/Goa1.js";
import Hyderabad from "./Hyderabad/Hyderabad1.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './Home.js';

function App() {
  return (
  <div className="App">
     <Navbar/>
     <Router>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/card" component={Card}/>
        <Route exact path="/hero" component={Hero}/>
        <Route exact path="/form" component={PersonalInfo}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/navbar" component={Navbar}/>
        <Route exact path="/jaipur" component={Jaipur}/>
        <Route exact path="/agra" component={Agra}/>
        <Route exact path="/radisson" component={Radisson}/>
        <Route exact path="/lemeridian" component={Le}/>
        <Route exact path="/vivanta" component={Vivanta}/>
        <Route exact path="/agra_hotel" component={AgraHotel}/>
        <Route exact path="/kochi" component={Kochi}/>
        <Route exact path="/ladakh" component={Ladakh}/>
        <Route exact path="/newDelhi" component={NewDelhi}/>
        <Route exact path="/shimla" component={Shimla}/>
        <Route exact path="/goa" component={Goa}/>
        <Route exact path="/hyderabad" component={Hyderabad}/>
        </Switch>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
