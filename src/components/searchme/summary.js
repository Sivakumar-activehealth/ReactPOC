import React, { Component } from 'react';
import CheckBoxList from 'react-checkbox-list';
import 'react-listbox/dist/react-listbox.css';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';

class Summary extends Component {  
    constructor (props) {  
      super(props);
       this.state={
        addMonitoredShow: true,
        providerdisplayshow: false,
        clinicalShow:false,
        sessionalShow:false
     }
       this.onContinueclick=this.onContinueclick.bind(this);
       this.onchkchange=this.onchkchange.bind(this);
        
    }
      onClcikHandler(e){
        window.location = '/persons/';
    }
    onContinueclick(){
        //alert(this.state.addMonitoredShow);
    }
    onchkchange(tab,e){
        if(tab=='AddNewMonitored'){
         this.setState({addMonitoredShow:e.target.checked});
        }else if(tab=='ProviderDisplay'){
          this.setState({providerdisplayshow:e.target.checked});
        }else if(tab=='clinicalOperation'){
         this.setState({clinicalShow:e.target.checked});
        }else if(tab=='Sessional'){
         this.setState({sessionalShow:e.target.checked});
        }
    }
    
    render() {
    return(<div>
         <div className="panel panel-default">
               <div className="panel-heading">
                  <h3 className="panel-title">
                      <input type="checkbox" id="chk" value={this.state.addMonitoredShow} onChange={this.onchkchange.bind(this,"AddNewMonitored")} />
                      Add New Monitored Event </h3>
               </div>
               { this.state.addMonitoredShow &&
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1">
                      <Form>
                          <FormGroup>
                                    <ControlLabel> ID  : </ControlLabel>
                                    <ControlLabel> 1234</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> ME Title  : </ControlLabel>
                                    <ControlLabel> ME Title</ControlLabel>
                          </FormGroup>
                         <FormGroup>
                                    <ControlLabel> Provider Title (English): </ControlLabel>
                                    <ControlLabel> Provider Title English</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Provider Title (Spanish): </ControlLabel>
                                    <ControlLabel> Provider Title Spanish</ControlLabel>
                          </FormGroup>
                          <FormGroup>
                                    <ControlLabel> Member Title (English): </ControlLabel>
                                    <ControlLabel> Member Title English</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Member Title (Spanish): </ControlLabel>
                                    <ControlLabel> Member Title Spanish</ControlLabel>
                          </FormGroup>

                     </Form>
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <Form>
                          <FormGroup>
                                    <ControlLabel> ME Type  : </ControlLabel>
                                    <ControlLabel> Archieve Condition</ControlLabel>
                          </FormGroup>

                          <FormGroup>
                                    <ControlLabel> Program: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                           <FormGroup>
                                    <ControlLabel> Applicable Type: </ControlLabel>
                                    <ControlLabel> Benefit Design</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Short Description: </ControlLabel>
                                    <ControlLabel> 5-Alpha Resuctase Inhabitors</ControlLabel>
                          </FormGroup>
                          <FormGroup>
                                    <ControlLabel> Severity: </ControlLabel>
                                    <ControlLabel> 1</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Member Display Priority: </ControlLabel>
                                    <ControlLabel> 1</ControlLabel>
                          </FormGroup>
                     </Form>
                  </div>  
               </div> 
               }

{/*Provider Display*/}

 <div className="panel-heading">
                  <h3 className="panel-title">
                      <input type="checkbox" id="chkpd" value={this.state.Providerdisplayshow} onChange={this.onchkchange.bind(this,"ProviderDisplay")} />
                      Provider Display </h3>
               </div>
       {this.state.providerdisplayshow &&
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1">
                      <Form>
                          <FormGroup>
                                    <ControlLabel> Outpatient Display Priority: </ControlLabel>
                                    <ControlLabel> 1</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Chronic Behavior: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                         <FormGroup>
                                    <ControlLabel> Episode Separation Timeframe: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Data Lag Protection: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                          
                       

                     </Form>
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <Form>
                          <FormGroup>
                                    <ControlLabel> ME Options: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>

                          <FormGroup>
                                    <ControlLabel> Therapeutic Class: </ControlLabel>
                                    <ControlLabel>Beta Blockers </ControlLabel>
                          </FormGroup>
                           <FormGroup>
                                    <ControlLabel> Therapeutic Sub Class </ControlLabel>
                                    <ControlLabel> Static</ControlLabel>
                          </FormGroup>
                      </Form>
                  </div>  
               </div> 
               }


{/*End of provider display*/}
{/*clinical Operation*/}

 <div className="panel-heading">
                  <h3 className="panel-title">
                      <input type="checkbox" id="chkco" value={this.state.clinicalShow} onChange={this.onchkchange.bind(this,"clinicalOperation")} />
                      Clinical operation </h3>
               </div>
                 {this.state.clinicalShow &&
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1">
                      <Form>
                          <FormGroup>
                                    <ControlLabel> Outpatient Display Priority: </ControlLabel>
                                    <ControlLabel> Automated</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel> Inbound Communication Routing: </ControlLabel>
                                    <ControlLabel> RN</ControlLabel>
                          </FormGroup>
                      </Form>
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <Form>
                          <FormGroup>
                                    <ControlLabel>Care Manager Impactable Title: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                     </Form>
                  </div>  
               </div> 
               }
{/*End of clinical Operation*/}
{/*Sessional*/}

 <div className="panel-heading">
                  <h3 className="panel-title">
                      <input type="checkbox" id="chks" value={this.state.sessionalShow} onChange={this.onchkchange.bind(this,"Sessional")} />
                      Sessional </h3>
               </div>
                  {this.state.sessionalShow &&
               <div className="panel-body">
                  <div className="col-md-4 col-md-offset-1">
                      <Form>
                          <FormGroup>
                                    <ControlLabel>Outpatient Display Priority: </ControlLabel>
                                    <ControlLabel> All ages</ControlLabel>
                          </FormGroup>

                           <FormGroup> 
                                    <ControlLabel>Lab Requirements: </ControlLabel>
                                    <ControlLabel> Lab Related</ControlLabel>
                          </FormGroup>
                         <FormGroup>
                                    <ControlLabel> Condition </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                     </Form>
                  </div>
                  <div className="col-md-3 col-md-offset-1">
                    <Form>
                          <FormGroup>
                                    <ControlLabel> Adverse Event: </ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>

                          <FormGroup>
                                    <ControlLabel> Display Data Table</ControlLabel>
                                    <ControlLabel> </ControlLabel>
                          </FormGroup>
                  </Form>
                  </div>  
               </div> 
               }

{/*End of Sessional*/}

          </div>    
    </div>);
    }
}
export default Summary;