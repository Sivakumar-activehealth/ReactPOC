import React, {Component} from 'react';
import Update from 'react-addons-update'; 
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ListBox from 'react-listbox';
import DualListBox from 'react-dual-listbox';
import RadioButtonGroup from 'react-radio-button';
import CheckBoxList from 'react-checkbox-list';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import '../../style.css';
import {AdverseEventoptions,radioOptions,CordinationOptions} from "../../shared/constants";
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';
const collapseUpText="glyphicon glyphicon-menu-up";

class Sessional extends Component {  
    constructor (props) {           
      super(props);
        this.state={
            collapseGlyph: collapseUpText,
            MeModel:this.props.meModel,
            selectedValue: undefined,
            showModal: false,
            adverseSelect:[]
        }
        this.onContinueclick = this.onContinueclick.bind(this);
        this.onChangeMeModel=this.onChangeMeModel.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    openModal () { console.log('msg'); this.setState({showModal: true}); }

    closeModal () { this.setState({showModal: false}); }

    onChangeMeModel(columname,idx,data)
    {
    
      var objForUpdate = { MeModel: {  SessionalModel : {}  } };
      if(columname!="AdverseEvent" & columname!="CoordinationCare"){
      objForUpdate.MeModel.SessionalModel[idx] = { $set : { [columname] : data.target.value } };
      }else{
          objForUpdate.MeModel.SessionalModel[idx] = { $set : { [columname] : data } };
      }
    
      var newData = Update(this.state, objForUpdate );
      this.setState( newData );
    }
    onContinueclick(){
        this.props.onchange('Sessional',this.state.MeModel);
    }
    handleSelection(value) {  
      this.setState({selectedValue: value});
    }
    onChange(selected) {
		this.setState({ adverseSelect:selected });
	}
 
    render() {
       
      return(<div>
       <div className="panel panel-default">
               <div className="panel-heading">
                  <h3 className="panel-title">Sessional</h3>
               </div>
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1">
                    <Form>
                     <FormGroup>
                            <ControlLabel> Outpatient Display Priority:</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"  bsSize="small"
                                defaultValue={this.state.MeModel.SessionalModel[0].DemographicCategory!=null?this.state.MeModel.ClinicalModel[0].ClinicalType:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.DemographicCategory,'DemographicCategory',0)} >
                                <option value="All ages">All ages</option>
                                <option value="Age>=18">Age>=18</option>
                            </FormControl>
                      </FormGroup><br/>
                       <FormGroup>
                                <ControlLabel> Lab Requirements:</ControlLabel>
                                <FormControl componentClass="select" placeholder="select"  bsSize="small"
                                    defaultValue={this.state.MeModel.SessionalModel[1].LabRequirements!=null?this.state.MeModel.ClinicalModel[1].LabRequirements:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.LabRequirements,'LabRequirements',1)} >
                                    <option value="Lab Related">Lab Related</option>
                                    <option value="Lab Required">Lab Required</option>
                                    <option value="None">None</option>
                                </FormControl>
                      </FormGroup><br/>
                      <Form inline>  
                          
                        <div className="panel panel-default" >
                            <div className="panel-heading">
                                <h3 className="panel-title">Condition</h3>
                            </div>
                            <div className="panel-body">
                                <div>
                                     <a href="#"  onClick={this.openModal.bind(this)}><i className="material-icons">create</i><ControlLabel>Add New Condition</ControlLabel></a>
                                </div>
                            </div>
                         </div>
                         
                         <br/>
                      </Form>  
                     
                    <div className="static-modal">
                    <Modal show={this.state.showModal} onHide={this.close}>
                      <Modal.Body>
                            <Form>
                                <FormGroup controlId="formAppendableMessage">
                                    <ControlLabel> Add New Condition </ControlLabel>
                                    <FormControl componentClass="select" placeholder="select"
                                     defaultValue={this.state.MeModel.SessionalModel[2].Conditions!=null?this.state.MeModel.ClinicalModel[2].Conditions:'' } onChange={this.onChangeMeModel.bind(this.state.MeModel.Conditions,'Conditions',2)} >
                                        <option value="Anemia">Anemia</option>
                                        <option value="Active_Cancer">Active Cancer</option>
                                    </FormControl>
                                </FormGroup>
                               
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModal.bind(this)}>Ok</Button>
                            <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
                        </Modal.Footer>
                    </Modal>
                </div>  
               </Form>
                 </div> 
                  <div className="col-md-3 col-md-offset-1">
                     <Form>
                        <FormGroup >
                            <ControlLabel> Adverse Event:</ControlLabel>
                            {/*<ListBox options={AdverseEventoptions}  style={{height:'50%'}}
                              selected={this.state.adverseSelect}  onChange={(selected) => {
                              //this.onChange.bind(selected) }}/>*/}
                              
                              <DualListBox style={{height:'90%'}}  options={AdverseEventoptions} selected={this.state.adverseSelect} 
                                onChange={(selected) => {
                                  this.setState({adverseSelect:selected});
                                }}  />

                         </FormGroup><br/>
                        <FormGroup>
                            <ControlLabel> Display Data Table:</ControlLabel>
                             <div className="radio">
                            <RadioButtonGroup listOfItems={radioOptions}   id='tgl-default' class="btn btn-primary btn-sm active"
                               defaultValue={this.state.MeModel.SessionalModel[4].DisplayDataTable!=null?this.state.MeModel.ClinicalModel[4].DisplayDataTable:'' } selectedItemCallback={(value) => this.handleSelection(value)} />
                            </div>
                         </FormGroup>
                        <FormGroup>
                            <CheckBoxList ref="chkboxList" defaultData={CordinationOptions}  defaultValue={this.state.MeModel.SessionalModel[5].CoordinationCare!=null?this.state.MeModel.ClinicalModel[5].CoordinationCare:'' }
                            onChange={this.onChangeMeModel.bind(this.state.MeModel.CoordinationCare,'CoordinationCare',5)} />
                         </FormGroup>
                      </Form>   
                 </div>  
                </div>    
                  
      </div>  
         
      </div>);
    }
}
export default Sessional;