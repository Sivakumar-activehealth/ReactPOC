import React, { Component } from 'react';
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
import * as personActions from "../actions/personActions";
import personStore from "../stores/personStore";
import ExportExcel from "./export";
const collapseUpText="glyphicon glyphicon-menu-up";
const collapseDownText="glyphicon glyphicon-menu-down";
const exportCollapseDownText="glyphicon glyphicon-menu-down";
const sortedTextAscending = "glyphicon glyphicon-sort-by-alphabet";
const sortedTextDescending = "glyphicon glyphicon-sort-by-alphabet-alt";
const sortableText="glyphicon glyphicon-sort";

class Persons extends Component {  
    constructor (props) {           
      super(props);
      let returnValues=personStore.getPersons();
      this.state={
        open: false,
        isgridShow:false,
        alertVisible: false,
        collapseVisible: true,
        exportCollapseVisible:false,
        collapseGlyph: collapseUpText,
        exportCollapseGlyph: collapseUpText,
        codesortableGlyph: sortableText,
        textsortableGlyph: sortableText,
        groupingsortableGlyph:sortableText,
        classificationsortableGlyph:sortableText,
        specializationsortableGlyph:sortableText,
        activePage: 1,
        pageLimit:5,
        personData: returnValues.dataField,
        sortColumn:"code",
        dataCount:returnValues.pageCountField,
        totalCount:returnValues.totalCountField,
        dataUrl:'http://localhost:3001/persons/?type=json', //this.props.Source,
        text:"",
        code:"",
        grouping:"",
        classification:"",
        specialization:"",
        apiUrl:"",
        onSortParams:"",
      };
      //const personUrl= this.props.Source;
      console.log(this.state.dataUrl);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      console.log(this.state.codeSortColDesc);      
    }
    componentWillMount() {
      personStore.on("change", this.storeDataHandler.bind(this));
      this.setState({dataUrl:'http://localhost:3001/persons/?type=json',activePage:1,pageLimit:20});
    }

    componentWillUnmount() {
      personStore.removeListener("change", this.storeDataHandler);
      this.setState({dataUrl:'http://localhost:3001/persons/?type=json'});
    }
    
    openModal () { console.log('msg'); this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    openSearchScreen(){
      this.openModal();
    }
    searchResults(e){
      let offset;   
      console.log(typeof e);
      if(e !== undefined){
        if(typeof e !== 'object'){
          console.log('inside page offset');
          offset = (e-1)*this.state.pageLimit;
        }     
        else{
          offset = 0;
        }
      }
      console.log('page offset '+ offset);
      let serverParams="?";      
      console.log('inside results click');
      this.getServerData(serverParams,offset,this.state.pageLimit,this.state.sortColumn);
      this.setState({isgridShow:true});
    }
    getServerData(params,offset,limit,sortCol){
      let callParams = params;
      let serverParams = params.concat("offset="+offset+"&limit="+limit+"&sort="+sortCol);
      //let callableUrl=this.state.dataUrl+"/Persons/"+serverParams;
      let callableUrl=this.state.dataUrl;
      console.log(callableUrl);
      this.setState({apiUrl: callableUrl,onSortParams: callParams});
      personActions.getPersons(callableUrl);
    }    
    handleAlertDismiss(){
      this.setState({alertVisible: false});
    }
    collapseChange(e){
      this.setState({ 
        collapseVisible: !this.state.collapseVisible,
        collapseGlyph: this.state.collapseVisible?collapseDownText: collapseUpText });
    }
    exportCollapseChange(e){
      this.setState({ 
        exportCollapseVisible: !this.state.exportCollapseVisible,
        exportCollapseGlyph: this.state.exportCollapseVisible?exportCollapseDownText: collapseUpText });
    }
    handleSelect(eventKey) {
      console.log(eventKey);      
      this.setState({
        activePage: eventKey
      });
      this.searchResults(eventKey);
    }
    sortOnClick(eventKey){
      let sortCol = eventKey.target.id;
      let sortDirection = "";
      switch (eventKey.target.id){
        case 'code':
          sortDirection =  this.state.codesortableGlyph === sortedTextAscending? "-":"";
          this.setState({
            codesortableGlyph: this.state.codesortableGlyph === sortedTextAscending? sortedTextDescending: sortedTextAscending,
            textsortableGlyph: sortableText,
            groupingsortableGlyph: sortableText,
            classificationsortableGlyph: sortableText,
            specializationsortableGlyph: sortableText
          });
        break;
        case 'text':
        sortDirection =  this.state.textsortableGlyph === sortedTextAscending? "-":"";
          this.setState({
            codesortableGlyph: sortableText,
            textsortableGlyph: this.state.textsortableGlyph === sortedTextAscending? sortedTextDescending: sortedTextAscending,
            groupingsortableGlyph: sortableText,
            classificationsortableGlyph: sortableText,
            specializationsortableGlyph: sortableText            
          });            
          break;
        case 'grouping':
        sortDirection =  this.state.groupingsortableGlyph === sortedTextAscending? "-":"";
          this.setState({
            codesortableGlyph: sortableText,
            textsortableGlyph: sortableText,
            groupingsortableGlyph: this.state.groupingsortableGlyph === sortedTextAscending? sortedTextDescending: sortedTextAscending,
            classificationsortableGlyph: sortableText,
            specializationsortableGlyph: sortableText            
          });        
        break;
        case 'classification':
        sortDirection =  this.state.classificationsortableGlyph === sortedTextAscending? "-":"";
          this.setState({
            codesortableGlyph: sortableText,
            textsortableGlyph: sortableText,
            groupingsortableGlyph: sortableText,
            classificationsortableGlyph: this.state.classificationsortableGlyph === sortedTextAscending? sortedTextDescending: sortedTextAscending,
            specializationsortableGlyph: sortableText            
          });        
        break;
        case 'specialization':
        sortDirection =  this.state.specializationsortableGlyph === sortedTextAscending? "-":"";
          this.setState({
            codesortableGlyph: sortableText,
            textsortableGlyph: sortableText,
            groupingsortableGlyph: sortableText,
            classificationsortableGlyph: sortableText,
            specializationsortableGlyph: this.state.specializationsortableGlyph === sortedTextAscending? sortedTextDescending: sortedTextAscending            
          });        
        break;        
      }
      sortCol = sortDirection+sortCol;
      this.getServerData(this.state.onSortParams,0,this.state.pageLimit,sortCol);
    }
    storeDataHandler() {
      let returnValues = personStore.getPersons();
      this.setState({
            personData: returnValues.dataField,
            dataCount: returnValues.pageCountField,
            totalCount: returnValues.totalCountField
          });
    }
  render() {
    let tooltip = <Tooltip id="tooltip">Collapse/Hide search results pane!</Tooltip>;
    let exporttooltip = <Tooltip id="tooltip">Collapse/Hide export results pane!</Tooltip>;
    return (
      <div>
          <div className="glyphButton">            
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <Button onClick={this.collapseChange.bind(this)}> 
                <Glyphicon glyph={this.state.collapseGlyph} />
              </Button>
            </OverlayTrigger>
          </div>  
        <div>
        <Collapse in={this.state.collapseVisible}>
          <div>        
              <Form inline>
                <FormGroup controlId="formInlineText">
                  <ControlLabel>First Name</ControlLabel>
                  {' '}
                  <FormControl type="text" placeholder="Just a Text to showcase the possibility of a filter" bsSize="small"/>
                  <ControlLabel>Last Name</ControlLabel>
                  {' '}
                  <FormControl type="text" placeholder="Just another Text" bsSize="small"/>                  
                  {' '}
                </FormGroup> {' '}
                <FormGroup controlId="formInlineButton">
                  <Button onClick={this.searchResults.bind(this)} value="0" bsStyle="primary">
                    Search Results
                  </Button>
                </FormGroup>
                {' '}
              </Form>
            </div>
          </Collapse>  
          <br/>         
        </div>
        <div><br/>
         <div className="glyphButton">            
            <OverlayTrigger placement="bottom" overlay={exporttooltip}>
              <Button onClick={this.exportCollapseChange.bind(this)}> 
                <Glyphicon glyph={this.state.exportCollapseGlyph} />
              </Button>
            </OverlayTrigger>
          </div> <br/>
          <Collapse in={this.state.exportCollapseVisible}>
              <div>  <br/>
                   <ExportExcel pageName='person'/>
              </div>
          </Collapse>
        </div>
      <br/> <br/>
      {this.state.isgridShow &&
        <div id="table-container">
         <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th id="hashcol" style={{width:'2%' }}/>
                <th style={{width:'5%' }}>Person Id <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.codesortableGlyph} id="PERSONID"/></Button></th>
                <th style={{width:'5%' }}>First Name <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.textsortableGlyph} id="FIRSTNM"/></Button></th>
                <th style={{width:'5%' }}>Last Name <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="LASTNM"><Glyphicon glyph={this.state.groupingsortableGlyph} id="LASTNM"/></Button></th>                
                <th style={{width:'7%' }}>Email Address <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="EMAILADDRESS"><Glyphicon glyph={this.state.classificationsortableGlyph} id="EMAILADDRESS"/></Button></th>
                <th style={{width:'5%' }}>Last Modified <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="RECORDINSERTDT"><Glyphicon glyph={this.state.specializationsortableGlyph} id="RECORDINSERTDT"/></Button></th>
              </tr>
            </thead>
            <tbody>
                { this.state.personData &&
                  this.state.personData.map((person, idx) =>                   
                    <tr key={idx} style={{height:'15%' }}>
                      <td id="hashcol" style={{width:'2%' }}>{idx+1}</td>
                      <td style={{width:'5%' }}>{person.PERSONID}</td>
                      <td style={{width:'5%' }}>{person.FIRSTNM}</td>
                      <td style={{width:'5%' }}>{person.LASTNM}</td>
                      <td style={{width:'7%' }}>{person.EMAILADDRESS}</td>
                      <td style={{width:'5%' }}>{person.RECORDINSERTDT}</td>
                    </tr>
                  )
                }
          </tbody>
          {this.state.dataCount >= 1 ?
              <tfoot>
                    <tr>
                        <td colSpan="8">
                          <div>
                            {/*<Pagination bsSize="small" prev next first last ellipsis boundaryLinks items={this.state.totalCount>5?Math.ceil(this.state.totalCount/5):0} maxButtons={5} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)}/>*/}
                              <Pagination bsSize="small" prev next first last ellipsis boundaryLinks items={this.state.totalCount>5?Math.ceil(this.state.totalCount/10):0} maxButtons={5} activePage={this.state.activePage} onSelect={this.handleSelect.bind(this)}/>
                          </div>
                        </td>                          
                    </tr>                                        
              </tfoot>: null}
        </Table>
            <Alert bsStyle="success"> Api call: <br/> <p><strong>{this.state.apiUrl}</strong></p></Alert>
        </div>
      }
      {!this.state.isgridShow &&
       <div className="panel panel-default" style={{width:'80%'}} >
               <div className="panel-heading">
                  <h3 className="panel-title">Results </h3>
               </div>
               <div className="panel-body">
     
        <div className="col-md-3 col-md-offset-0" style={{width:'60%'}} >Use Search to populate 'Persons' details </div>
        </div>
         </div>
      }
      </div>);
  }
}

export default Persons; // Don’t forget to use export default!