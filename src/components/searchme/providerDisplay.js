import React, {Component} from 'react';
import Update from 'react-addons-update'; 
import Dropdown from 'react-drop-down';
import Button  from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import CheckBoxList from 'react-checkbox-list';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
import {MeOptions,MeChronic,EpisodeOptions} from "../../shared/constants";
import  "./../../layout.css";
const collapseUpText="glyphicon glyphicon-menu-up";
class ProviderDisplay extends Component {  
    constructor (props) {   
      super(props);
        this.state={
             MeModel:this.props.meModel,
             collapseGlyph: collapseUpText,
             isloaded:false
        }
        this.onContinueclick = this.onContinueclick.bind(this);
        this.onChangeMeModel = this.onChangeMeModel.bind(this);
    }
   

   componentWillReceiveProps(newProps) {    
    //  if(!this.state.isloaded){
   }

    onChangeMeModel(columname,idx,data)
    {
      var objForUpdate = { MeModel: {  ProviderModel : {}  } };
      if(columname!="MeOptions" & columname !="MechronicBehavior"){
         objForUpdate.MeModel.ProviderModel[idx] = { $set : { [columname] : data.target.value } };
      }else{
          objForUpdate.MeModel.ProviderModel[idx] = { $set : { [columname] : data } };
      }
      var newData = Update(this.state, objForUpdate );
      this.setState(newData);
    }
    onContinueclick(){
         this.props.onchange('ProviderDisplay',this.state.MeModel);
         //window.location = '/clinicalOperation/';
    }
    render() {
      return(<div>
      <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Provider Display Property</h3>
                </div>
    <div className="panel-body">
            <Form><div className="col-md-4 col-md-offset-1"  >
                <FormGroup>
                        <ControlLabel> Outpatient Display Priority:</ControlLabel>
                        
                        <FormControl componentClass="select" placeholder="select"  bsSize="small" style={{width:'65%'}}
                             defaultValue={this.state.MeModel.ProviderModel[0].MeOutPatientPriority!=null?this.state.MeModel.ProviderModel[0].MeOutPatientPriority:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.MeOutPatientPriority,'MeOutPatientPriority',0)} >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                        </FormControl>
                </FormGroup>
                {/*<hr/>*/}
               
                <FormGroup>
                     <ControlLabel> Chronic Behavior:</ControlLabel>
                     <div>
                        <CheckBoxList ref="chkboxList" defaultData={MeChronic} onChange={this.onChangeMeModel.bind(this.state.MeModel.MechronicBehavior,'MechronicBehavior',2) }/>
                     </div>
                </FormGroup>
                
                <Form inline>
                    <div>
                        <FormGroup>
                         <ControlLabel >Episode Separation Timeframe:</ControlLabel><br/>
                         <FormControl type="text" placeholder="" bsSize="small" style={{width:'35%'}}
                            value={this.state.MeModel.ProviderModel[3].EpisodeSeperation!=null?this.state.MeModel.ProviderModel[3].EpisodeSeperation:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.EpisodeSeperation,'EpisodeSeperation',3)}/>
                            {' '}
                             <FormControl componentClass="select" placeholder="select"  bsSize="small" style={{width:'50%'}}
                                 defaultValue={this.state.MeModel.ProviderModel[4].EpisodeSeperationtime!=null?this.state.MeModel.ProviderModel[4].EpisodeSeperationtime:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.EpisodeSeperationtime,'EpisodeSeperationtime',4)} >
                                    <option value="1">Days</option>
                                    <option value="2">Months</option>
                             </FormControl>
                      </FormGroup>
                     </div>
                </Form> 
                       
                  <Form inline>
                    <div>
                        <FormGroup>
                         <ControlLabel >Data Lag Protection:</ControlLabel><br/>
                         <FormControl type="text" placeholder="" bsSize="small" style={{width:'35%'}}
                            value={this.state.MeModel.ProviderModel[5].DataLagProtection!=null?this.state.MeModel.ProviderModel[5].DataLagProtection:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.DataLagProtection,'DataLagProtection',5)}/>
                            {' '}
                             <FormControl componentClass="select" placeholder="select"  bsSize="small" style={{width:'50%'}}
                                  defaultValue={this.state.MeModel.ProviderModel[6].DataLagProtectionTime!=null?this.state.MeModel.ProviderModel[6].DataLagProtectionTime:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.DataLagProtectionTime,'DataLagProtectionTime',6)} >
                                    <option value="1">Days</option>
                                    <option value="2">Months</option>
                             </FormControl>
                      </FormGroup>
                     </div>
                </Form> 
             <br/>
           
        </div>
         </Form>  
        <div className="col-md-3 col-md-offset-1">
           <Form>
                <FormGroup>
                     <ControlLabel> ME Options:</ControlLabel>
                     <CheckBoxList ref="chkboxList" defaultData={MeOptions} onChange={this.onChangeMeModel.bind(this.state.MeModel.MeOptions,'MeOptions',1) }/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel> Therapeutic Class:</ControlLabel>
                      <FormControl componentClass="select" placeholder="select"  bsSize="small"
                             defaultValue={this.state.MeModel.ProviderModel[7].TherapeuticClass!=null?this.state.MeModel.ProviderModel[7].TherapeuticClass.split('^')[7]:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.TherapeuticClass,'TherapeuticClass',7)} >
                              <option value="1^Beta Blockers">Beta Blockers</option>
                              <option value="2^Calcium Channel Blockers">Calcium Channel Blockers</option>
                              <option value="3^Diabeties">Diabeties</option>
                              <option value="4^Libid">Libid</option>
                        </FormControl>
                </FormGroup>   
                <FormGroup>
                    <ControlLabel> Therapeutic Sub Class:</ControlLabel>
                      <FormControl componentClass="select" placeholder="select"  bsSize="small" disabled={!this.state.MeModel.ProviderModel[7].TherapeuticClass}
                             defaultValue={this.state.MeModel.ProviderModel[8].TherapeuticSubClass!=null?this.state.MeModel.ProviderModel[8].TherapeuticSubClass.split('^')[8]:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.TherapeuticSubClass,'TherapeuticSubClass',8)} >
                              <option value="1^Statin">Statin</option>
                              <option value="2^Inhaled">Inhaled</option>
                      </FormControl>
                </FormGroup>  
           </Form>
        </div>
           
      </div>
    </div>
  <div> 
          {/*<input type="button" value="Back" className="btn btn-default" />  {}
          <input type="button" value="Continue" className="btn btn-default" onClick={this.onContinueclick.bind()}  /> <br/>*/}
          
</div>
</div>);
    }
}
export default ProviderDisplay;