'use strict';

import React, { Component } from 'react';
import Promise from 'promise';

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saving: false
    };

    this.isValidated = this.isValidated.bind(this);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  // This review screen had the 'Save' button, on clicking this is called
  isValidated() {
   
    this.setState({
      saving: true
    });

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          saving: true
        });

        this.props.updateStore({savedToCloud: true});  // Update store here (this is just an example, in reality you will do it via redux or flux)

        // call resolve() to indicate that server validation or other aync method was a success.
        // ... only then will it move to the next step. reject() will indicate a fail
        resolve();
        // reject(); // or reject
      }, 5000);
    });
  }

  jumpToStep(toStep) {
    // We can explicitly move to a step (we -1 as its a zero based index)
    this.props.jumpToStep(toStep-1); // The StepZilla library injects this jumpToStep utility into each component
  }

  render() {
    const savingCls = this.state.saving ? 'saving col-md-12 show' : 'saving col-md-12 hide';

    return (
      <div className="step step5 review">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                <h1 style={{textAlign:'center'}}>Step 4: Review your Details and 'Save'</h1>
              </label>
            </div>
            <div className="form-group" >
              <div className="col-md-12 control-label">
                <div className="col-md-12 txt">
                  <div className="col-md-4">
                    Gender
                  </div>
                  <div className="col-md-4">
                    {this.props.getStore().gender}
                  </div>
                </div>
                <div className="col-md-12 txt">
                  <div className="col-md-4">
                    Email
                  </div>
                  <div className="col-md-4">
                    {this.props.getStore().email}
                  </div>
                </div>
                  <div className="col-md-12 txt">
                    <div className="col-md-4">
                    Person Name
                    </div>
                    <div className="col-md-4">
                      {this.props.getStore().personName}
                    </div>
                 </div>
                   <div className="col-md-12 txt">
                    <div className="col-md-4">
                      Address
                    </div>
                    <div className="col-md-4">
                      {this.props.getStore().personAddress}
                    </div>
                 </div>
                <div className="col-md-12 eg-jump-lnk">
                  <a href="#" onClick={() => this.jumpToStep(1)}>e.g. showing how we use the jumpToStep method helper method to jump back to step 1</a>
                </div>
                <h2 className={savingCls}>Saving to Cloud, pls wait (by the way, we are using a Promise to do this :)...</h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
