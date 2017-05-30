import React, {Component} from 'react';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import DualListBox from 'react-dual-listbox';
import ListBox from 'react-listbox';
import AddnewMonitoredEvent from './addnewMonitoredEvent';
import ProviderDisplay from './providerDisplay';
import Clinical from './clinicalOperation';
import Sessional from './sessional';
import Summary from './summary';
import Content from './meContent';
import {MEModel} from "../../shared/constants";
import 'react-listbox/dist/react-listbox.css';
import '../../style.css';
class MESearchLeftMenu extends Component {  
    constructor (props) {           
      super(props);
       this.state = {
            mepage:1,
            showModal:false,
            isMax:false
      }
      this.onClickLeft =this.onClickLeft.bind(this);
      this.onClickNext =this.onClickNext.bind(this);
      this.onClickBack =this.onClickBack.bind(this);
    }
    
    onClickLeft(value,e){
        var nextpage =this.state.mepage+1;
        //if(nextpage ==value){
         this.setState({mepage:value});
        //}
    }
    onClickNext(){
        var currentpage=this.state.mepage;
        if(this.state.mepage < 5){
             this.setState({mepage:this.state.mepage + 1});
        }
    }
    onClickBack(){
        var currentpage=this.state.mepage;
       
        if(this.state.mepage < 6){
             this.setState({mepage:this.state.mepage - 1});
        }
    }
    openModal () { console.log('msg'); this.setState({showModal: true}); }

    closeModal () { this.setState({showModal: false}); }
render() {
    return (<div>
        <div className="left-panel"><br/><br/>
        <div className={this.state.mepage>0?'btn-primary':'btn-default'} style={{width:'80%'}}  value={1} onClick={ this.onClickLeft.bind(this,1) }>Add New Monitored Event</div><br/>
        <div className={this.state.mepage>1?'btn-primary':'btn-default'} style={{width:'80%'}}  value={2} onClick={ this.onClickLeft.bind(this,2) }>Provider Display Property</div><br/>
        <div className={this.state.mepage>2?'btn-primary':'btn-default'}  style={{width:'80%'}}  value={3} onClick={ this.onClickLeft.bind(this,3) }>Clinical Operation</div><br/>
        <div className={this.state.mepage>3?'btn-primary':'btn-default'}  style={{width:'80%'}}  value={4} onClick={ this.onClickLeft.bind(this,4) }>Sessional</div><br/>
        <div className={this.state.mepage>4?'btn-primary':'btn-default'} style={{width:'80%'}}  value={5} onClick={ this.onClickLeft.bind(this,5) }>Summary</div><br/>
        
        </div> {''}
        <div className="right-panel">
            {this.state.mepage}
         {this.state.mepage == 1 &&
             <AddnewMonitoredEvent meModel={MEModel } />
         }
         {this.state.mepage == 2 &&
             <ProviderDisplay meModel={MEModel } />
         }
         {this.state.mepage == 3 &&
             <Clinical meModel={MEModel } />
         }
         {this.state.mepage == 4 &&
             <Sessional meModel={MEModel } />
         }
         {this.state.mepage == 5 &&
             <Summary meModel={MEModel } />
         }
        <div>
          {this.state.mepage!=5 &&
            <input type="button" value="Next" onClick={this.onClickNext.bind()} className="btn btn-next btn-primary btn-lg pull-right"/>
          }
           {this.state.mepage==5 &&
            <input type="button" value="Save" onClick={ this.openModal.bind(this) } className="btn btn-next btn-primary btn-lg pull-right"/>
          }
            {this.state.mepage!=1 &&
                <input type="button" value="Back" onClick={this.onClickBack.bind()} className="btn btn-next btn-primary btn-lg"/>
            }
        </div>
     </div>
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
                            <Button onClick={this.closeModal.bind(this)}>Cancel</Button>
                            <Button bsStyle="primary" onClick={this.closeModal.bind(this)}>Ok</Button>
                        </Modal.Footer>
                    </Modal>
                </div> 
           </div>
   </div> );
}
}
export default  MESearchLeftMenu