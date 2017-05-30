import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App';
import './index.css';
import Main from './components/main';
import Home from './components/home';
import Persons from './components/persons';
import Message from './components/appendableMessages';
import Search from './components/search';
//import AddNewMonitoredSeacrh from './components/searchme/meAddSearch';
import AddNewMonitoredSeacrh from './components/searchme/meLeftNav';
import ProviderDisplay from './components/searchme/providerDisplay';
import AddNewMonitored from './components/searchme/addnewMonitoredEvent';
import Stepper from './components/monitoredEvent';
import Datasheet from './components/dataSheet';
import Export from './components/export';
//import Test from './components/test';
import WizardStepper from './components/examples/example';
let messages = { name: " Adminsuite UI App", greeting: " Hello User!", modalState: true};
injectTapEventPlugin();

ReactDOM.render((
   <Router history = {browserHistory}>
         <Route path = "/" component = {Main}>
         <Route path = "home" component = {Home} />
         <Route path = "persons" component = {Persons} />
         <Route path = "messages" component = {Message} />
         <Route path = "search"  component = {Search} />
         <Route path = "addmonitored" component = {AddNewMonitoredSeacrh} />
         <Route path = "providerdisplay" component = {ProviderDisplay}  />
         <Route path ="mesearch" component={Stepper} />
         <Route path ="datasheet" component={Datasheet} />
         <Route path ="export" component={Export} />
         <Route path ="wizardstep" component={WizardStepper} />
         {/*<Route path ="test" component={Test} />*/}
      </Route>
   </Router>
	
), document.getElementById('root'))

