import React, {Component} from 'react';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Tab from 'react-bootstrap/lib/Tab';
import Row from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Col from 'react-bootstrap/lib/Col';
import Well from 'react-bootstrap/lib/Well';
import AddnewMonitoredEvent from './addnewMonitoredEvent';
import ProviderDisplay from './providerDisplay'
import ClinicalOperation from './clinicalOperation'
import Sessional from './sessional'
import Summary from './summary'
import {MEModel} from "../../shared/constants";

class MeAddSearch extends Component {  
    constructor (props) {           
      super(props);
      this.state={
          meModel:MEModel,
          addMonitoredTab:false,
          providertab:true,
          clinicalTab:true,
          sessionTab:true,
          summaryTab:true,
          tabSelect:'first',
          currentTab:'first',
          showModal:false
      }
        //this.onTabChange = this.onTabChange.bind(this);
         this.onClickNext = this.onClickNext.bind(this);
    }
   
   componentWillMount() {
  
   }
  openModal () { console.log('msg'); this.setState({showModal: true}); }

  closeModal () { this.setState({showModal: false}); }


  TabChange(tab,model){
       if(tab=='AddNewME'){
        this.setState({providertab:false,tabSelect:'second' ,meModel:model});
       }else if(tab=='ProviderDisplay'){
        this.setState({clinicalTab:false,meModel:model});
       }else if(tab=='ClinicalOperation'){
        this.setState({sessionTab:false,meModel:model});
       }else if(tab=='Sessional') {
        this.setState({summaryTab:false,meModel:model});
       }
    }
    onClickNext(value){
        if(this.state.currentTab=='first'){
          this.setState({providertab:false,currentTab:'second',tabSelect:'second'});
        }else if(value=='second'){
            this.setState({clinicalTab:false,currentTab:value});
        }else if(value=='third'){
            this.setState({sessionTab:false,currentTab:value});
        }else if(value=='fourth'){
            this.setState({summaryTab:false,currentTab:value});
        }else if(value=='fifth'){
            this.setState({currentTab:value});
        }
    }
    render() {
      return(<div>
      <Tab.Container id="left-tabs-example" defaultActiveKey={this.state.tabSelect} onSelect={this.onClickNext.bind(this)} >
                        <Row className="clearfix">
                            <Col sm={2}>
                                <Nav bsStyle="pills" stacked>
                                <NavItem eventKey="first"   >
                                    Add Monitored Event
                                </NavItem>                            
                                <NavItem eventKey="second" disabled={this.state.providertab} >
                                    Provider Display
                                </NavItem>
                                <NavItem eventKey="third" disabled={this.state.clinicalTab}>
                                    Clinical Operation
                                </NavItem>
                                <NavItem eventKey="fourth" disabled={this.state.sessionTab} >
                                    Sessional
                                </NavItem>
                                <NavItem eventKey="fifth" disabled={this.state.summaryTab}>
                                    Summary
                                </NavItem>
                                </Nav>
                            </Col>
                            <Col sm={10}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="first" >
                                    <AddnewMonitoredEvent className="App-entry" meModel={this.state.meModel } />
                                    </Tab.Pane>                            
                                    <Tab.Pane eventKey="second">
                                      <ProviderDisplay className="App-entry" meModel={this.state.meModel } />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                      <ClinicalOperation className="App-entry" meModel={this.state.meModel } />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <Sessional className="App-entry" meModel={this.state.meModel} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth">
                                       <Summary />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                    <div>
                    <div className="static-modal">
                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Modal.Body>
                            <Form>
                                <FormGroup>
                                    <ControlLabel>Are you sure to save data..</ControlLabel>
                                </FormGroup>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.closeModal.bind(this)}>Close</Button>
                            <Button bsStyle="primary" onClick={this.closeModal.bind(this)}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div> 
        </div>
                    {this.state.currentTab !='fourth' && this.state.currentTab !='fifth' &&

                     <div className="btn btn-next btn-primary btn-lg pull-right"  value={this.state.currentTab} onClick={ this.onClickNext.bind(this) }>Next</div>
                     }

                    {this.state.currentTab =='fourth' &&
                    <div className="btn btn-next btn-primary btn-lg pull-right"  value={this.state.currentTab} onClick={ this.openModal.bind(this) }>Save</div>
                     }
                     
      </div>);
    }
}
export default MeAddSearch;