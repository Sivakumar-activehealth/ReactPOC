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
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Alert from 'react-bootstrap/lib/Alert';
import Label from 'react-bootstrap/lib/Label';
import DatePicker from 'material-ui/DatePicker';
import DatePickers from 'react-datepicker';
import {MeStatus} from "../../shared/constants";
import MeGridTable from "./meGridTable";
import 'react-listbox/dist/react-listbox.css';
import  'react-bootstrap';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
const collapseUpText="glyphicon glyphicon-menu-up";
const collapseDownText="glyphicon glyphicon-menu-down";

class Search extends Component {  
    constructor (props) {           
      super(props);
      this.state={
        reload: false,
        collapseVisible: false,
        collapseGlyph: collapseUpText,
        activePage: 1,
        dataUrl: this.props.Source,
        fromdate: null,
        todate:null,
        searchName:null,
        searchtype:'1'
      };
      console.log(this.state.dataUrl);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.taggedForDatePickerChange=this.taggedForDatePickerChange.bind(this);
      this.taggedForDatePickerChange2=this.taggedForDatePickerChange2.bind(this);
      this.onSearchClick=this.onSearchClick.bind(this);
      this.onTypechange=this.onTypechange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      console.log(this.state.codeSortColDesc);      
    }
   
    taggedForDatePickerChange(date){
        this.setState({ fromdate: date.toISOString() });
    }
    taggedForDatePickerChange2(date){
        this.setState({ todate: date.toISOString() });
    }
    openModal () { console.log('msg'); this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    openSearchScreen(){
      this.openModal();
    }
    onTypechange(e){
      this.setState({searchtype:e.target.value});
    }
   
    collapseChange(e){
      this.setState({ 
        collapseVisible: !this.state.collapseVisible,
        collapseGlyph: this.state.collapseVisible?collapseDownText: collapseUpText });
    }
   onDateChange(e,date) {
        var date = new Date(date);
        var dateStr = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear();
        const selectDate = moment(dateStr);
        if(e==0){
           this.setState({ fromdate: selectDate });
        }else{
           this.setState({ todate: selectDate  });
        }
    }
  onAddnewMonitoredEvent(){
    window.location = '/addmonitored/';
  }
  onSearchClick(e){
   //this.props.onchange(this.state.searchName);
    this.setState({reload:true});
  }
  render() {
    let tooltip = <Tooltip id="tooltip">Collapse/Hide search results pane!</Tooltip>;
    return (
      <div>
        <div>
          <Form inline>
              <FormGroup controlId="formInlineTxt">
                 <FormControl componentClass="select" placeholder="select"  bsSize="small" onChange={this.onTypechange.bind('1')} >
                      <option value="1">ID</option>
                      <option value="2">Name</option>
                  </FormControl> {'  '}
                  <FormControl type="text" defaultValue={this.state.searchName} onBlur={(value)=>this.setState({searchName:value.target.value})} placeholder="Search" bsSize="small"/>  
                  {' '}
                  <Button  value="0" bsStyle="primary" onClick={this.onSearchClick.bind(this)} >
                    Search 
                  </Button>
              </FormGroup>
           </Form>
        </div>

          <div className="glyphButton">            
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <Button onClick={this.collapseChange.bind(this)}> 
                <Glyphicon glyph={this.state.collapseGlyph} />
              </Button>
            </OverlayTrigger>
          </div>  
       
        <div>
         <br/><br/>
        <Collapse in={this.state.collapseVisible}>
        

          <div>   
          <div className="container">        
            <div className="row">
             <div className="col-sm-1 col-md-1">  
               <ControlLabel  >Status:</ControlLabel> </div>
               <div className="col-sm-1 col-md-2">
                <FormGroup controlId="formInlineText" > 
                  <FormControl componentClass="select" placeholder="select"  bsSize="small"  > 
                              <option value="Draft">Draft</option>
                              <option value="Inactive">Inactive</option>
                              <option value="PendingInactivation">PendingInactivation</option>
                              <option value="Production">Production</option>
                              <option value="ProductionReady">ProductionReady</option>
                        </FormControl>
                  </FormGroup>
              </div>
            <div className="col-sm-1 col-md-1"><ControlLabel  >ME Type:</ControlLabel> </div>
            <div className="col-sm-1 col-md-2">
                 <FormGroup >  <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                             <option value="Achieve condition target">Achieve condition target</option>
                             <option value="Condition Screening">Condition Screening</option>
                             <option value="Vaccination">Condition Screening</option>
                    </FormControl>  </FormGroup >
            </div>
            <div className="col-sm-1 col-md-1"><ControlLabel  >Condition Clarification:</ControlLabel> </div>
            <div className="col-sm-1 col-md-2">
               <FormGroup >
               <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                             <option value="Achieve condition target">Acid-base imbalance</option>
                             <option value="Anemia">Anemia</option>
                             <option value="Ashthma">Ashthma</option>
                    </FormControl> 
                </FormGroup>
            </div>
            </div>
        </div>
        <div className="container">        
               <div className="row">
                      <div className="col-sm-1 col-md-1"><ControlLabel  >Severity:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                  <FormControl componentClass="select"  placeholder="select"  bsSize="small"  > 
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                </FormControl>
                          </FormGroup>
                        </div>

                        <div className="col-sm-1 col-md-1"><ControlLabel  >Family Type:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                 <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                                    <option value="Condition Feedback family">Condition Feedback family</option>
                                    <option value="Health state user defined family">Health state user defined family</option>
                                    <option value="Intervention feedback family">Intervention feedback family</option>
                                    <option value="Precedence family">Precedence family</option>
                                  </FormControl>
                          </FormGroup>
                        </div>

                         <div className="col-sm-1 col-md-1"><ControlLabel  >Conditions:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                  <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                                      <option value="Alcohol-Related disorder">Alcohol-Related disorder</option>
                                      <option value="Anemia">Anemia</option>
                                 </FormControl>
                             </FormGroup>
                        </div>
                 </div>
         </div>
           <div className="container">        
               <div className="row">
                      <div className="col-sm-1 col-md-1"><ControlLabel  >Family:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                  <FormControl componentClass="select"  placeholder="select"  bsSize="small"> 
                                      <option value="AAA Screening">AAA Screening</option>
                                      <option value="ACEI-ARB">ACEI-ARB</option>
                                      <option value="ASA">ASA</option>
                                </FormControl>
                          </FormGroup>
                        </div>

                        <div className="col-sm-1 col-md-1"><ControlLabel  >Developer:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                  <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                                      <option value="AHM">AHM</option>
                                      <option value="CMS">CMS</option>
                                      <option value="IHMS">IHMS</option>
                                 </FormControl>
                          </FormGroup>
                        </div>
                         <div className="col-sm-1 col-md-1"><ControlLabel  >Endorsing Body:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                  <FormControl componentClass="select"  placeholder="select"  bsSize="small"> 
                                      <option value="Ambulatory quality Alliance">Ambulatory quality Alliance</option>
                                      <option value="National quality forum">National quality forum</option>
                                  </FormControl> 
                          </FormGroup>
                        </div>
                  </div>    
            </div>      
            <div className="container">        
               <div className="row">
                        <div className="col-sm-1 col-md-1"><ControlLabel  >Provider Program:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                    <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                                        <option value="Accountable Care Organization">Accountable Care Organization</option>
                                        <option value="Bridges to Excellence">Bridges to Excellence</option>
                                        <option value="Meaningful use">Meaningful use</option>
                                   </FormControl>
                             </FormGroup>
                        </div>

                        <div className="col-sm-1 col-md-1"><ControlLabel  >Product:</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                              <FormGroup  > 
                                     <FormControl componentClass="select"  placeholder="select"  bsSize="small" > 
                                          <option value="Active Care Team">Active Care Team</option>
                                          <option value="Care Engine">Care Engine</option>
                                          <option value="Digital Coaching">Digital Coaching</option>
                                     </FormControl>
                             </FormGroup>
                        </div>
               </div> 
            </div>     
            <div className="container">        
               <div className="row">
                    <div className="col-sm-1 col-md-1"><ControlLabel  > From :</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                             <DatePickers  dateFormat="YYYY/MM/DD" selected={this.state.fromdate} placeholderText="select start date" onChange={this.onDateChange.bind(this,0)}   />
                        </div>

                        <div className="col-sm-1 col-md-1"><ControlLabel  >To :</ControlLabel> </div>
                        <div className="col-sm-1 col-md-2">
                             <DatePickers  dateFormat="YYYY/MM/DD" selected={this.state.todate} placeholderText="select to date" onChange={this.onDateChange.bind(this,1)}   />
                        </div>
               </div>
            </div>       
             <div className="container">        
               <div className="row">
                <div className="col-sm-1 col-md-1"> <Button  value="0" bsStyle="primary" >  Filter </Button> </div>  
                 </div> 
              </div>   
              
            </div>
          </Collapse>            
        </div>
      <br/>
      {this.state.searchName &&
        <MeGridTable searchName={this.state.searchName} searchType={this.state.searchtype}/>
      } 
      {!this.state.searchName &&
       <div className="panel panel-default">
               <div className="panel-heading">
                  <h3 className="panel-title">Results </h3>
               </div>
               <div className="panel-body">
     
        <div className="col-md-3 col-md-offset-0"  >Use Search to populate 'Suppliers' area </div>
        </div>
         </div>
      }
   </div>);
  }
}

export default Search;