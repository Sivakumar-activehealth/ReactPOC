import React, { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import 'react-datasheet/lib/react-datasheet.css';

class ModelPopup extends Component {  
    constructor (props) {           
      super(props);
       this.state = {
       showModal: this.props.showModal,
    }
   
  }
  openModal () { console.log('msg'); this.setState({showModal: true}); }

  closeModal () { this.setState({showModal: false}); }

    render () {
    return (<div>
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
    )
  }
}
export default ModelPopup;