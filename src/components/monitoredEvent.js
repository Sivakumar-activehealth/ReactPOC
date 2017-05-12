'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stepper from './index.js';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import AddnewMonitoredEvent from './searchme/addnewMonitoredEvent';
import ProviderDisplay from './searchme/providerDisplay';
import ClinicalOperation from './searchme/clinicalOperation';
import Sessional from './searchme/sessional';
import Summary from './searchme/summary';
import {MEModel} from "../shared/constants";
class MonitoredEvent extends Component {
  constructor() {
    super();
    this.state = {
      showModal:false,
      meModel:MEModel,
      steps: [{
        title: 'Step1',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
          this.onClickNext1(0);
          console.log('onClick', 1)
        }
      }, {
        title: 'Step2',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
           this.onClickNext1(1);
          console.log('onClick', 2)
        }
      }, {
        title: 'Step3',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
            this.onClickNext1(2);
          console.log('onClick', 3)
        }
      }, {
        title: 'Step4',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
            this.onClickNext1(3);
          console.log('onClick', 4)
        }
      },{
        title: 'Step5',
        href: '#',
        onClick: (e) => {
          e.preventDefault()
            this.onClickNext1(4);
          console.log('onClick', 5)
        }
      }],
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
  }

    openModal () {
      this.setState({showModal: true}); 
    }

    closeModal () { this.setState({showModal: false}); }

 onClickNext1(e) {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: e,
    });
  }
  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
      showModal: false
    });
  }
  onClickBack() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep - 1,
    });
  }
  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = { background: '#E0E0E0', width: 150, padding: 16, textAlign: 'center', margin: '0 auto', marginTop: 28 };

    return (
      <div>
        <Stepper steps={ steps } activeStep={ currentStep } /><br/>
        {this.state.currentStep==0 &&
        <div > <AddnewMonitoredEvent meModel={this.state.meModel } /></div>
        }
        {this.state.currentStep==1 &&
        <ProviderDisplay  meModel={this.state.meModel }  />
        }
        {this.state.currentStep==2 &&
        <ClinicalOperation  meModel={this.state.meModel } />
        }
        {this.state.currentStep==3 &&
        <Sessional meModel={this.state.meModel} />
        }
        {this.state.currentStep==4 &&
        <Summary />
        }
         {this.state.currentStep > 0 &&
             <div  className="btn btn-prev btn-primary btn-lg pull-left"  onClick={ this.onClickBack }>Back</div>
         }
         {this.state.currentStep <=3 &&
             <div  className="btn btn-next btn-primary btn-lg pull-right"  onClick={ this.onClickNext }>Next</div>
         }
        {this.state.currentStep==4 &&
            <div  className="btn btn-next btn-primary btn-lg pull-right"   onClick={this.openModal.bind(this)} >Save</div>
        }
        <div className="static-modal" >
                          <Modal show={this.state.showModal} onHide={this.close}>
                              <Modal.Body>
                                  <Form>
                                      <FormGroup>
                                          <ControlLabel>Are you sure want to save data..</ControlLabel>
                                      </FormGroup>
                                  </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                  <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
                                  <Button bsStyle="primary" onClick={this.closeModal.bind(this)}>Ok</Button>
                              </Modal.Footer>
                          </Modal>
                </div> 
      </div>
    );
  }
};

export default MonitoredEvent;
