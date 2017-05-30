import React, {Component} from 'react';
import Dropdown from 'react-drop-down';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Update from 'react-addons-update'; 
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import {MEModel} from "../../shared/constants";
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
const collapseUpText="glyphicon glyphicon-menu-up";

class AddnewMonitoredEvent extends Component {  
    constructor (props) {           
      super(props);
        this.state={
            collapseGlyph: collapseUpText,
            MeModel:MEModel
        }
        this.onChangeMeModel = this.onChangeMeModel.bind(this);
        this.onContinueclick = this.onContinueclick.bind(this);
    }

    onChangeMeModel(columname,idx,data)
    {
      var objForUpdate = { MeModel: {  MonitoredEventModel : {}  } };
      objForUpdate.MeModel.MonitoredEventModel[idx] = { $set : { [columname] : data.target.value } };
      var newData = Update(this.state, objForUpdate );
      this.setState( newData );
    }
    onCancelclick(){
     window.location = '/search/';
    }
    onContinueclick(){
       // window.location = '/providerDisplay/';
        this.props.onchange('AddNewME',this.state.MeModel);
    }
    render() {
      return(<div className="addnew">
       <div className="panel panel-default" >
               <div className="panel-heading">
                  <h3 className="panel-title">Add New Monitored Event </h3>
               </div>
               <div className="panel-body">
     
        <div className="col-md-3 col-md-offset-1"  >
            <Form>
                <FormGroup controlId="formtext">
                  <ControlLabel>ID:</ControlLabel>{' '}
                  <FormControl type="number" value={this.state.MeModel.MonitoredEventModel[0].Id} onChange={this.onChangeMeModel.bind(this.state.MeModel.Id,'Id',0)} placeholder="ID" bsSize="small"/><br/>
                  <ControlLabel>Me Tilte:</ControlLabel>{' '}
                  <FormControl type="text" value={this.state.MeModel.MonitoredEventModel[1].MeTilte} onChange={this.onChangeMeModel.bind(this.state.MeModel.MeTilte,'MeTilte',1)} placeholder="Me Tilte" bsSize="small"/><br/><br/>
                  <ControlLabel>Provider Title (English):</ControlLabel>{' '}
                  <FormControl type="text" value={this.state.MeModel.MonitoredEventModel[2].ProviderTilteEng} onChange={this.onChangeMeModel.bind(this.state.MeModel.ProviderTilteEng,'ProviderTilteEng',2)} placeholder="Provider Tilte English" bsSize="small"/><br/><br/>
                  <ControlLabel>Provider Title (Spanish):</ControlLabel>{' '}
                  <FormControl type="text" value={this.state.MeModel.MonitoredEventModel[3].ProviderTilteSpanish} onChange={this.onChangeMeModel.bind(this.state.MeModel.ProviderTilteSpanish,'ProviderTilteSpanish',3)} placeholder="Provider Tilte Spanish" bsSize="small"/><br/><br/>
                  <ControlLabel>Member Title (English):</ControlLabel>{' '}
                  <FormControl type="text" value={this.state.MeModel.MonitoredEventModel[4].MemberTilteEng} onChange={this.onChangeMeModel.bind(this.state.MeModel.MemberTilteEng,'MemberTilteEng',4)} placeholder="Member Tilte English" bsSize="small"/><br/><br/>
                  <ControlLabel>Member Title (Spanish):</ControlLabel>{' '}
                  <FormControl type="text" value={this.state.MeModel.MonitoredEventModel[5].MemberTilteSpanish} onChange={this.onChangeMeModel.bind(this.state.MeModel.MemberTilteSpanish,'MemberTilteSpanish',5)} placeholder="Member Tilte Spanish" bsSize="small"/>
                </FormGroup>    
            </Form>   
        </div>
        <div className="col-md-3 col-md-offset-2">
            <Form>
                <FormGroup>
                        <ControlLabel> ME Type:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select"  bsSize="small"  bsStyle="success"
                        defaultValue={this.state.MeModel.MonitoredEventModel[6].MeType!=null?this.state.MeModel.MonitoredEventModel[6].MeType.split('^'[0]):'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.Metype,'Metype',6)} > 
                              <option value="1^Achieve condition target">Achieve condition target</option>
                              <option value="2^Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
                              <option value="3^Alternative Medicine Intraction">Alternative Medicine Intraction</option>
                        </FormControl>
                </FormGroup>
                <FormGroup>
                        <ControlLabel> Program:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select"  bsSize="small" disabled defaultValue={this.state.MeModel.MonitoredEventModel[7].MeProgram } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeProgram,'MeProgram',7)}  > 
                        </FormControl>
                         {/*<Dropdown  value="two" placeholder="select"   className="dropdown" 
                         options={Options} />*/}
                 
                </FormGroup>

                 <FormGroup>
                        <ControlLabel> Applicable Type:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" defaultValue="select"  bsSize="small"
                        defaultValue={this.state.MeModel.MonitoredEventModel[8].MeApplicabletype!=null?this.state.MeModel.MonitoredEventModel[8].MeApplicabletype.split('^'[0]):'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeApplicabletype,'MeApplicabletype',8)}> 
                               <option value="1^Benifit design">Benifit design</option>
                               <option value="2^Denominator">Denominator</option>
                               <option value="3^AGab in Care">AGab in Care</option>
                        </FormControl>
                </FormGroup>
                <FormGroup>
                        <ControlLabel> Short Description:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" defaultValue="select"   bsSize="small" 
                        defaultValue={this.state.MeModel.MonitoredEventModel[9].MeShortDescription!=null?this.state.MeModel.MonitoredEventModel[9].MeShortDescription.split('^')[0]:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeShortDescription,'MeShortDescription',9)}> 
                               <option value="1^5-Alpha Resuctase Inhabitors">5-Alpha Resuctase Inhabitors</option>
                               <option value="2^AAA Screening">AAA Screening</option>
                               <option value="3^Abatacept">Abatacept</option>
                        </FormControl>
                </FormGroup>
                 <FormGroup>
                        <ControlLabel> Severity:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" defaultValue="select"  bsSize="small"
                        defaultValue={this.state.MeModel.MonitoredEventModel[10].MeSeverity } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeSeverity,'MeSeverity',10)}> 
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                        </FormControl>
                </FormGroup>
                 <FormGroup>
                        <ControlLabel> Member Display Priority:</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" defaultValue="select"   bsSize="small"
                        defaultValue={this.state.MeModel.MonitoredEventModel[11].MeMemberDisplayPriority } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeMemberDisplayPriority,'MeMemberDisplayPriority',11)}> 
                               <option value="1">1</option>
                               <option value="2">2</option>
                               <option value="3">3</option>
                               <option value="4">4</option>
                        </FormControl>
                </FormGroup>
           </Form>
            </div>
      
          <div>
          <br/> <br/>
        </div>
     </div>
</div>
        {/*<input type="button" value="Cancel" className="btn btn-default" onClick={this.onCancelclick.bind()}  />  {}
        <input type="button" value="Continue" className="btn btn-default" onClick={this.onContinueclick.bind()}  />*/}
      </div>);
    }
}
export default AddnewMonitoredEvent;