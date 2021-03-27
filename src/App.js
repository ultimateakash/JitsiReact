import './App.css';
import './assets/css/all.min.css';
import './assets/css/fontawesome.min.css';
import { Route, Switch } from 'react-router-dom';
import JitsiComponent from './jitsi/jitsi.component';
import ThankYouComponent from './thank-you/thank-you.component';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route component={ThankYouComponent} path="/thank-you" />
            <Route component={JitsiComponent} path="/" exact />
        </Switch>
    </div>
  );
}

export default App;
