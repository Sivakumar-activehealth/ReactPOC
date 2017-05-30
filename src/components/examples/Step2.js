'use strict';

import React, { Component } from 'react';

export default class Step2 extends Component {
  constructor(props) {
    super(props);
     this.state = {
       personAddress: props.getStore().personAddress,
    };
    this._validateOnDemand = true; 
    this.validationCheck = this.validationCheck.bind(this);
    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

isValidated() {
    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator
    let isDataValid = false;

    // if full validation passes then save to store and pass as valid
    if (Object.keys(validateNewInput).every((k) => { return validateNewInput[k] === true })) {
        if (this.props.getStore().personAddress != userInput.personAddress) { // only update store of something changed
          this.props.updateStore({
            ...userInput,
            savedToCloud: false // use this to notify step4 that some changes took place and prompt the user to save again
          });  // Update store here (this is just an example, in reality you will do it via redux or flux)
        }

        isDataValid = true;
    }
    else {
        // if anything fails then update the UI validation state but NOT the UI Data State
        this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
    }

    return isDataValid;
  }

  validationCheck() {
    if (!this._validateOnDemand)
      return;

    const userInput = this._grabUserInput(); // grab user entered vals
    const validateNewInput = this._validateData(userInput); // run the new input against the validator

    this.setState(Object.assign(userInput, validateNewInput, this._validationErrors(validateNewInput)));
  }

   _validateData(data) {
    return  {
      PersonAddressVal: (data.personAddress != '') // required: anything besides N/A
    }
  }

  _validationErrors(val) {
    const errMsgs = {
      personNameValMsg: val.PersonAddressVal ? '' : 'A addres is required'
    }
    return errMsgs;
  }

  _grabUserInput() {
    return {
      personAddress: this.refs.personAddress.value,
    };
  }

  render() {
     
    let notValidClasses = {};

    if (this.state.personAddress === undefined || this.state.personAddress ) {
        notValidClasses.personCls = 'no-error col-md-8';
    }
    else {
       notValidClasses.personCls = 'has-error col-md-8';
       notValidClasses.personValGrpCls = 'val-err-tooltip';
    }
    return (
      <div className="step step1">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1 style={{textAlign:'center'}}>Step 2: Welcome to person detail 2</h1>
              </label>
              <div className="row"  style={{textAlign:'left'}}>
                <div className="col-md-12">
                  <div className="col-md-6">
                   {this.props.personName}
                
              <div className="form-group col-md-12 content form-block-holder">
                <label className="control-label col-md-4">
                  Person Address
                </label>
                <div className={notValidClasses.personCls}>
                  <input
                    ref="personAddress"
                    autoComplete="off"
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    required
                    defaultValue={this.state.personAddress}
                    onBlur={this.validationCheck} />
                  <div className={notValidClasses.personValGrpCls}>{this.state.personNameValMsg}</div>
                </div>
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
