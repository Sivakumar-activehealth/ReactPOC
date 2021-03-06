import React, {Component} from 'react';
import { Link } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';
import Footer from './footer';
class Main extends Component {
    render(){
        return(<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
             
            <div>
               <div id="header">

                   <div class="float-left">
                      <img  id="logoimg" width="183" height="35" />
                   </div>
               </div>
                <nav className="navbar navbar-default sf-shadow">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/persons" activeClassName="active">Persons</Link></li>
                                <li><Link to="/messages" activeClassName="active">Appendable Messages</Link></li>
                                <li><Link to="/search" activeClassName="active">ME Search</Link></li>
                                <li><Link to="/addmonitored" activeClassName="active">ME LeftNav</Link></li>
                                <li><Link to="/datasheet" activeClassName="active">DataSheet</Link></li>
                                {/*<li><Link to="/export" activeClassName="active">Export</Link></li>*/}
                                <li><Link to="/wizardstep" activeClassName="active">Wizardstep</Link></li>
                                {/*<li><Link to="/test" activeClassName="active">Test</Link></li>*/}
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <div id="footer" >©2007-2017 ActiveHealth Management Inc. All rights reserved.</div>
            </div>
            </MuiThemeProvider>
        );
    }
}

export default Main




