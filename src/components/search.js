import React, { Component } from 'react';
import Update from 'react-addons-update'; 
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Table from 'react-bootstrap/lib/Table';
import Collapse from 'react-bootstrap/lib/Collapse';
import Pagination from 'react-bootstrap/lib/Pagination';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Alert from 'react-bootstrap/lib/Alert';
import Label from 'react-bootstrap/lib/Label';
import * as personActions from "../actions/personActions";
import personStore from "../stores/personStore";
import Searchfilter from "../components/searchme/searchFilter";
import {MEModel} from "../shared/constants";
const collapseUpText="glyphicon glyphicon-menu-up";
const collapseDownText="glyphicon glyphicon-menu-down";
const sortedTextAscending = "glyphicon glyphicon-sort-by-alphabet";
const sortedTextDescending = "glyphicon glyphicon-sort-by-alphabet-alt";
const sortableText="glyphicon glyphicon-sort";

class Search extends Component {  
    constructor (props) {           
      super(props);
      this.state={
        open: false,
        searchName:null
      };
      console.log(this.state.dataUrl);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    
    openModal () { console.log('msg'); this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

  onAddnewMonitoredEvent(value,e){
    if(value=='1'){
     window.location = '/mesearch/';
    }else{
      window.location = '/addmonitored/';
    }
  }
 
  render() {
    let tooltip = <Tooltip id="tooltip">Collapse/Hide search results pane!</Tooltip>;
    return (<div>
            <div><Button onClick={this.onAddnewMonitoredEvent.bind(this,'1')} value="0" bsStyle="primary"> Add New Monitored Event  </Button> </div><br/>
            {/*<div><Button onClick={this.onAddnewMonitoredEvent.bind(this,'2')} value="0" bsStyle="primary"> Add New Monitored Event  </Button> </div><br/>*/}
            <Searchfilter  />    
        </div>);
  }
}

export default Search;