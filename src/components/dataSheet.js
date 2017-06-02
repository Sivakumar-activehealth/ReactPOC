import React, { Component } from 'react';
import ReactDataSheet from 'react-datasheet';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
//import 'react-datasheet/lib/react-datasheet.css';
import '../style.css';
class Datasheet extends Component {  
    constructor (props) {           
      super(props);
       this.state = {
       showModal: false,
       grid: [
          //  [{value: 'add item',bsStyle:'default',component: ( 
          //   <a className='add-button' href='#' onClick={this.onAdditemClick.bind(this)}  ><span style={{background:'#e63946'}}> add item </span> </a>
          //  )}
          //  ],
        [
          { value: '',  readOnly: true}, 
          {value: 'ID', readOnly: true}, 
          {value: 'ME Title', readOnly: true}, 
          {value: 'Provider Title(Eng)', readOnly: true}, 
          {value: 'Provider Title (Spa)', readOnly: true},
          {value: 'ME Type', readOnly: true},
          {value: 'MDC', readOnly: true},
          {value: 'Severity', readOnly: true},
          {value: 'Category', readOnly: true},
          {value: 'Lab Required', readOnly: true},
          {value: 'Impacted Title', readOnly: true}
        ],
        [{readOnly: true, value: 1}, { value:  100}, {value: 'title 1'}, {value: 'test 1'}, {value: 'aetna 1'},
         { value:  'Achieve condition target',  component: ( 
          <select onChange={this.onChange} style={{width:'150px'}}>
            <option value="Achieve condition target">Achieve condition target</option>
            <option value="Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
            <option value="Alternative Medicine Intraction">Alternative Medicine Intraction</option>
          </select> )},
          { value:  'Burns',  component: ( 
          <select onChange={this.onChange}>
           <option value="Burns">Burns</option>
            <option value="Eye">Eye</option>
            <option value="HIV">HIV</option>
            <option value="Trauma">Trauma</option>
          </select> )},
           { value:  '2',  component: ( 
          <select onChange={this.onChange} style={{width:'80px'}}>
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> )},
           { value:  'All ages',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">All ages</option>
            <option value="2">Age >=18</option>
            <option value="3">Pediatric Age 1 - 17</option>
          </select> )},
           { value:  'Lab Required',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">Lab Required</option>
            <option value="2">Lab Related</option>
            <option value="3">None</option>
          </select> )}, {value: 'Manager'}
     
      ],
        [{readOnly: true, value: 2}, {value: 101}, {value: 'title 2'}, {value: 'test 2'}, {value: 'aetna 2'}, { value:  'Add/Intensify Medical therapy',  component: ( 
          <select onChange={this.onChange} style={{width:'150px'}}>
            <option value="Achieve condition target">Achieve condition target</option>
            <option value="Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
            <option value="Alternative Medicine Intraction">Alternative Medicine Intraction</option>
          </select>)} ,
          { value:  'Eye',  component: ( 
          <select onChange={this.onChange}>
           <option value="Burns">Burns</option>
            <option value="Eye">Eye</option>
            <option value="HIV">HIV</option>
            <option value="Trauma">Trauma</option>
          </select> )},
           { value:  '2',  component: ( 
          <select onChange={this.onChange} style={{width:'80px'}}>
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> )},
           { value:  'Age >=18',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">All ages</option>
            <option value="2">Age >=18</option>
            <option value="3">Pediatric Age 1 - 17</option>
          </select> )},
           { value:  'Lab Related',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">Lab Required</option>
            <option value="2">Lab Related</option>
            <option value="3">None</option>
          </select> )}, {value: 'Manager 2'}
          ],
        [{readOnly: true, value: 3}, {value: 102}, {value:'title 3'}, {value: 'test 3'}, {value: 'aetna 3'}, { value:  'Achieve condition target',  component: ( 
          <select onChange={this.onChange} style={{width:'150px'}}>
            <option value="Achieve condition target">Achieve condition target</option>
            <option value="Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
            <option value="Alternative Medicine Intraction">Alternative Medicine Intraction</option>
          </select> ) },
          { value:  'HIV',  component: ( 
          <select onChange={this.onChange}>
           <option value="Burns">Burns</option>
            <option value="Eye">Eye</option>
            <option value="HIV">HIV</option>
            <option value="Trauma">Trauma</option>
          </select> )},
           { value:  '3',  component: ( 
          <select onChange={this.onChange} style={{width:'80px'}}>
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> )},
           { value:  'Age >=18',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">All ages</option>
            <option value="2">Age >=18</option>
            <option value="3">Pediatric Age 1 - 17</option>
          </select> )},
           { value:  'None',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">Lab Required</option>
            <option value="2">Lab Related</option>
            <option value="3">None</option>
          </select> )}, {value: 'Manager 3'}
          ],
        [{readOnly: true, value: 4}, {value: 103}, {value: 'title 4'}, {value: 'test 4'}, {value: 'aetna 4'}, { value:  'Alternative Medicine Intraction',  component: ( 
          <select onChange={this.onChange} style={{width:'150px'}}>
             <option value="Achieve condition target">Achieve condition target</option>
            <option value="Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
            <option value="Alternative Medicine Intraction">Alternative Medicine Intraction</option>
          </select>  ) },
          { value:  'Trauma',  component: ( 
          <select  onChange={this.onChange}>
             <option value="Burns">Burns</option>
            <option value="Eye">Eye</option>
            <option value="HIV">HIV</option>
            <option value="Trauma">Trauma</option>
          </select> )},
           { value:  '4',  component: ( 
          <select onChange={this.onChange} style={{width:'80px'}}>
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> )},
           { value:  'Pediatric Age 1 - 17',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">All ages</option>
            <option value="2">Age >=18</option>
            <option value="3">Pediatric Age 1 - 17</option>
          </select> )},
           { value:  'Lab Related',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">Lab Required</option>
            <option value="2">Lab Related</option>
            <option value="3">None</option>
          </select> )}, {value: 'Manager 4'}
          ]
      ]
    }
    this.onContinueclick=this.onContinueclick.bind(this);
    this.onComponentChange =this.onComponentChange.bind(this);
    this.onAdditemClick = this.onAdditemClick.bind(this);
  }
  openModal () { console.log('msg'); this.setState({showModal: true}); }

  closeModal () { this.setState({showModal: false}); }

  onAdditemClick(){
    var item=this.state.grid;
    var arr= [{readOnly: true, value: this.state.grid.length}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, 
     { value:  '',  component: ( 
          <select onChange={this.onChange}  style={{width:'100px'}}>
             <option value="Achieve condition target">Achieve condition target</option>
            <option value="Add/Intensify Medical therapy">Add/Intensify Medical therapy</option>
            <option value="Alternative Medicine Intraction">Alternative Medicine Intraction</option>
          </select>
      ) },
          { value:  '',  component: ( 
          <select  onChange={this.onChange}>
             <option value="Burns">Burns</option>
            <option value="Eye">Eye</option>
            <option value="HIV">HIV</option>
            <option value="Trauma">Trauma</option>
          </select> )},
           { value:  '',  component: ( 
          <select onChange={this.onChange} style={{width:'80px'}}>
           <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> )},
           { value:  '',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">All ages</option>
            <option value="2">Age >=18</option>
            <option value="3">Pediatric Age 1 - 17</option>
          </select> )},
           { value:  '',  component: ( 
          <select onChange={this.onChange} style={{width:'100px'}}>
           <option value="1">Lab Required</option>
            <option value="2">Lab Related</option>
            <option value="3">None</option>
          </select> )}, {value: ''}];
    item.push(arr);
    this.setState({grid:item})
  }
   onContinueclick(){
      var data=this.state.grid;
    }
   onComponentChange(colI, rowJ, value,e){
     this.setState({
            grid: this.state.grid.map((col) => 
              col.map((rowCell) => {
                (rowCell == 7) ? ({value: value}) : rowCell
               }
              )
            )
          })
   }
    render () {
    return (<div>
      <div className="two-column-container">
       <a style={{background:'#e63946',color:'#fff'}} href='#' onClick={this.onAdditemClick.bind(this)}  >add item</a>
      <ReactDataSheet 
        data={this.state.grid}
        valueRenderer={(cell) => cell.value}
        onChange={(cell, colI, rowJ, value) => {
          this.setState({
            grid: this.state.grid.map((col) => 
              col.map((rowCell) => 
                (rowCell == cell) ? ({value: value}) : rowCell
              )
            )
          })
        } 
        }/><br/>
        <input type="button" value="save" className="btn btn-primary" onClick={this.openModal.bind(this)}  />
              <div className="static-modal">
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
        </div>
    )
  }
}
export default Datasheet;