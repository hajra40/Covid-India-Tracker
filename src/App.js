import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './India';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch , Route } from 'react-router'
import Worldwide from './Worldwide';
import NotFound from './NotFound';
import FetchError from './FetchError';
import Connect from './Components/Connect';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={India} />
          <Route path="/world" exact component={Worldwide} />
          <Route path="/error" exact component={FetchError} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
