import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';

function App() {
  return (
    <div className="App">
     <Router basename={process.env.PUBLIC_URL}>
     <Navbar/>
       <div>
         <Route exact path="/" component={Home} />
         <Route exact path="/portfolio" component={Portfolio} />
         <Route exact path="/contact" component={Contact} />
         </div>
         <Footer />
     </Router>
    </div>
  );
}

export default App;
