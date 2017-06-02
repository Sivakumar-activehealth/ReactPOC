import React, { Component } from 'react';
import Update from 'react-addons-update'; 
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Table from 'react-bootstrap/lib/Table';
import Collapse from 'react-bootstrap/lib/Collapse';
import Pagination from 'react-bootstrap/lib/Pagination';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Alert from 'react-bootstrap/lib/Alert';
import Label from 'react-bootstrap/lib/Label';
import * as meActions from "../../actions/meActions";
import meStore from "../../stores/meStore";
import {MeGridData} from "../../shared/constants";
const collapseUpText="glyphicon glyphicon-menu-up";
const collapseDownText="glyphicon glyphicon-menu-down";
const sortedTextAscending = "glyphicon glyphicon-sort-by-alphabet";
const sortedTextDescending = "glyphicon glyphicon-sort-by-alphabet-alt";
const sortableText="glyphicon glyphicon-sort";
var $ = require ('jquery');
class MeGridTable extends Component {  
    constructor (props) {           
      super(props);
      let returnValues=meStore.getMEdetails();
      this.state={
        searchName:this.props.searchName,
        searchtype:this.props.searchtype,
        activePage: 1,
        pageLimit:5,
        personData: returnValues,
       
        dataCount:MeGridData.length,
        totalCount:100,
        dataUrl: 'http://localhost:3001/monitored-events?offset=1&limit=5&type=json',
      };

      console.log(this.state.dataUrl);
      console.log(this.state.codeSortColDesc);      
    }
 
     componentWillMount() { 
    
     }
    componentWillUnmount() {
    }

    handleSelect(eventKey) {
      console.log(eventKey);      
      // this.setState({
      //   activePage: eventKey
      // });
      //this.searchResults(eventKey);
    }
    onClcikHandler(e){
        window.location = '/persons/';
    }
    render() {
    return(<div id="table-container">

         <Table striped bordered condensed hover>
            <thead>
              <tr style={{height:'5%'}} >
                {/*<th id="hashcol"/>*/}
                <th style={{width:'2%' }}>ID <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.codesortableGlyph} id="ID"/></Button></th>
                <th style={{width:'5%' }}>NAME <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.textsortableGlyph} id="NAME"/></Button></th>
                <th style={{width:'5%' }}>SEVERITY <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="SEVERITYLEVELCODE"><Glyphicon glyph={this.state.groupingsortableGlyph} id="SEVERITYLEVELCODE"/></Button></th>                
                <th style={{width:'6%' }}>APPLICABILITY <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="APPLICABILITYTYPECODE"><Glyphicon glyph={this.state.classificationsortableGlyph} id="APPLICABILITYTYPECODE"/></Button></th>
                <th style={{width:'4%' }}>CHRONIC <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="CHRONICBEHAVIOR"><Glyphicon glyph={this.state.specializationsortableGlyph} id="CHRONICBEHAVIOR"/></Button></th>
                <th style={{width:'5%' }}>IMPACTABLE <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="IMPACTABLE"><Glyphicon glyph={this.state.specializationsortableGlyph} id="IMPACTABLE"/></Button></th>
                <th style={{width:'7%' }}>CLINICALREVIEW<Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="CLINICALREVIEWCRITERIA"><Glyphicon glyph={this.state.specializationsortableGlyph} id="CLINICALREVIEWCRITERIA"/></Button></th>
              </tr>
            </thead>
            <tbody>
                {/*{ this.state.personData &&
                  this.state.personData.map((person, idx) =>                 
                    <tr key={idx} style={{height:'2%' }} >
                     <td style={{width:'4%' }}>{person.id}</td>
                      <td style={{width:'5%' }}>{person.NAME}</td>
                      <td style={{width:'10%' }}>{person.SEVERITYLEVELCODE}</td>
                      <td style={{width:'5%' }}>{person.APPLICABILITYTYPECODE}</td>
                      <td style={{width:'4%' }}>{person.CHRONICBEHAVIOR}</td>
                      <td style={{width:'6%' }}>{person.TIMPACTABLE}</td>
                      <td style={{width:'7%' }}>{person.CLINICALREVIEWCRITERIA}</td>
                    </tr>
                  )}*/}
                
          </tbody>
          {this.state.dataCount >= 1 ?
              <tfoot>
                    <tr>
                        <td colSpan="8">
                          <div>
                            <Pagination bsSize="small" prev next first last ellipsis boundaryLinks items={this.state.totalCount>5?Math.ceil(this.state.totalCount/5):0} maxButtons={5} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)}/>
                          </div>
                        </td>                          
                    </tr>                                        
              </tfoot>: null}
        </Table>
            <Alert bsStyle="success"> Api call: <br/> <p><strong>{this.state.apiUrl}</strong></p></Alert>
        </div>);
    }
}
export default MeGridTable;