import React, {Component} from 'react';
import Update from 'react-addons-update'; 
import Button  from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import CheckBoxList from 'react-checkbox-list';
import DatePicker from 'material-ui/DatePicker';
import DatePickers from 'react-datepicker';
import RadioButtonGroup from 'react-radio-button';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import {InBoundcommunication,MeOptions,radioOptions} from "../../shared/constants";
const collapseUpText="glyphicon glyphicon-menu-up";

class ClinicalOperation extends Component {  
    constructor (props) {           
      super(props);
        this.state={
            collapseGlyph: collapseUpText,
            MeModel:this.props.meModel,
            selectedValue: undefined,
            taggedFor: null,
            startDate:null,
            endDate:null
        }
        this.onContinueclick = this.onContinueclick.bind(this);
        this.onChangeMeModel = this.onChangeMeModel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onChangeMeModel(columname,idx,data)
    {
      var objForUpdate = { MeModel: {  ClinicalModel : {}  } };
      if(columname!="InboundCommunication2"){
          objForUpdate.MeModel.ClinicalModel[idx] = { $set : { [columname] : data.target.value } };
      }else{
          objForUpdate.MeModel.ClinicalModel[idx] = { $set : { [columname] : data } };
      }
      var newData = Update(this.state, objForUpdate );
      this.setState( newData );
    }
     
    onContinueclick(){
           // window.location = '/sessional/';
        this.props.onchange('ClinicalOperation',this.state.MeModel);
    }
    handleSelection(value) {  
      this.setState({selectedValue: value});
    }
    taggedForDatePickerChange(e, date){
        this.setState({
            taggedFor: date.toISOString()
        })
    }
    handleChange(e,date) {
        var date = new Date(date);
        var dateStr = date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear();
        const selectDate = moment(dateStr);
        if(e==0){
           this.setState({ startDate: selectDate });
        }else{
           this.setState({ endDate: selectDate  });
        }
    }
    render() {
      return(<div>
        <div className="panel panel-default">
               <div className="panel-heading">
                  <h3 className="panel-title">Clinical Operation</h3>
               </div>
            <div className="two-column-container">
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1"  >
                    <Form>
                     <FormGroup>
                        <ControlLabel> Outpatient Display Priority:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select"  bsSize="small" style={{width:'80%'}}
                             defaultValue={this.state.MeModel.ClinicalModel[0].ClinicalType!=null?this.state.MeModel.ClinicalModel[0].ClinicalType.split('^')[0]:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.ClinicalType,'ClinicalType',0)} >
                              <option value="1^Automated">Automated</option>
                              <option value="2^MD Manual Review">MD Manual Review</option>
                              <option value="3^RN Manual Review">RN Manual Review</option>
                     </FormControl>
                     </FormGroup>
                     <FormGroup>
                         <ControlLabel> Inbound Communication Routing:</ControlLabel>
                          <FormControl componentClass="select" placeholder="select"  bsSize="small" style={{width:'80%'}}
                              defaultValue={this.state.MeModel.ClinicalModel[1].InboundCommunication1!=null?this.state.MeModel.ClinicalModel[1].InboundCommunication1:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.InboundCommunication1,'InboundCommunication1',1)} >
                              <option value="RN">RN</option>
                              <option value="MD">MD </option>
                        </FormControl>
                   </FormGroup>
                   <FormGroup>
                     <CheckBoxList ref="chkboxList"  defaultData={InBoundcommunication} onChange={this.onChangeMeModel.bind(this.state.MeModel.InboundCommunication2,'InboundCommunication2',2) }/>
                    </FormGroup>
                    </Form>    
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <Form>
                     <FormGroup>
                         <ControlLabel> Care Manager Impactable Title:</ControlLabel>
                         <FormControl componentClass="textarea"  defaultValue={this.state.MeModel.ClinicalModel[2].CareManager} onChange={this.onChangeMeModel.bind(this.state.MeModel.CareManager,'CareManager',3) } bsSize="large"/>
                     </FormGroup>
                     <FormGroup>
                         <div className="radio">
                            <RadioButtonGroup listOfItems={radioOptions}  bsStyle="default"  selectedItemCallback={(value) => this.handleSelection(value)} />
                         </div>
                         
                     </FormGroup>
                     </Form>
                     <Form>
                            {this.state.selectedValue=='Yes' &&
                                <div>
                                        <FormGroup>
                                                <ControlLabel style={{width:'30%'}}>Start Date</ControlLabel>
                                                {/*<DatePicker hintText="Pick a start date" defaultValue={this.state.MeModel.ClinicalModel[4].Startdate} container="inline" mode="landscape" onChange={this.onChangeMeModel.bind(this.state.MeModel.Startdate,'Startdate',4) } />*/}
                                                <DatePickers  dateFormat="YYYY/MM/DD" selected={this.state.startDate} placeholderText="select start date" onChange={this.handleChange.bind(this,0)}   />
                                        </FormGroup>
                                        <FormGroup>
                                                <ControlLabel style={{width:'30%'}}>End Date</ControlLabel>
                                                {/*<DatePicker hintText="Pick a end date" defaultValue={this.state.MeModel.ClinicalModel[5].Enddate} container="inline" mode="landscape" onChange={this.onChangeMeModel.bind(this.state.MeModel.Enddate,'Enddate',5) } />*/}
                                                <DatePickers  dateFormat="YYYY/MM/DD" selected={this.state.endDate} placeholderText="select end date" onChange={this.handleChange.bind(this,1)}   />
                                        </FormGroup>
                                </div>
                             }
                     </Form>     
                  </div>
               </div>
            </div>
        <div> 
      </div>
      </div>
    </div>);
    }
}
export default ClinicalOperation;