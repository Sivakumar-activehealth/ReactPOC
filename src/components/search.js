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
import * as personActions from "../actions/personActions";
import * as meActions from "../actions/meActions";
import personStore from "../stores/personStore";
import Searchfilter from "../components/searchme/searchFilter";
import meStore from "../stores/meStore";
import {MEModel} from "../shared/constants";
import  MetableRow from "./meTableRow"
import ExportExcel from "./export";
import "../careengine.css"
const collapseUpText="glyphicon glyphicon-menu-up";
const collapseDownText="glyphicon glyphicon-menu-down";
const exportCollapseDownText="glyphicon glyphicon-menu-down";
const sortedTextAscending = "glyphicon glyphicon-sort-by-alphabet";
const sortedTextDescending = "glyphicon glyphicon-sort-by-alphabet-alt";
const sortableText="glyphicon glyphicon-sort";

class MESearch extends Component {  
    constructor (props) {           
      super(props);
      let returnValues=meStore.getMEdetails();
      this.state={
        open: false,
        isgridShow:false,
        isLoad:false,
        searchName:null,
        searchtype:'1',
        alertVisible: false,
        collapseVisible: true,
        collapseGlyph: collapseUpText,
        codesortableGlyph: sortableText,
        exportCollapseVisible:false,
        exportCollapseGlyph: collapseUpText,
        textsortableGlyph: sortableText,
        groupingsortableGlyph:sortableText,
        classificationsortableGlyph:sortableText,
        specializationsortableGlyph:sortableText,
        activePage: 1,
        pageLimit:5,
        meData: returnValues,
        sortColumn:"code",
        dataCount:returnValues.length,
        totalCount:returnValues.totalCountField,
        dataUrl: 'http://localhost:3001/monitored-events?offset=1&limit=10&type=json',
        text:"",
        code:"",
        grouping:"",
        classification:"",
        specialization:"",
        apiUrl:"",
        onSortParams:""
      };
      console.log(this.state.dataUrl);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      // this.searchResults=this.searchResults.bind(this);
      // this.onTypechange=this.onTypechange.bind(this);
      // this.storeDataHandler=this.storeDataHandler.bind(this);
    }
    componentWillMount() {  
       meStore.on("change", this.storeDataHandler.bind(this));
    }
    componentWillUnmount() { 
       meStore.removeListener("change", this.storeDataHandler);
    }
    storeDataHandler() {
          let returnValues = meStore.getMEdetails();
          if(returnValues.dataField !=undefined){
          this.setState({
                meData: returnValues.dataField,
                dataCount: returnValues.pageCountField,
                totalCount: returnValues.totalCountField,
              });
        }
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
      let callableUrl=this.state.dataUrl;
      console.log(callableUrl);
      this.setState({apiUrl: callableUrl,onSortParams: callParams});
      meActions.getMeSearch(callableUrl);
    }   
    openModal () { console.log('msg'); this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

     handleSelect(eventKey) {
      console.log(eventKey);      
      this.setState({
        activePage: eventKey
      });
      this.searchResults(eventKey);
    }
    onAddnewMonitoredEvent(value,e){
      if(value=='1'){
      window.location = '/mesearch/';
      }else{
        window.location = '/addmonitored/';
      }
    }
    onTypechange(e){
      this.setState({searchtype:e.target.value});
    }
    exportCollapseChange(e){
      this.setState({ 
        exportCollapseVisible: !this.state.exportCollapseVisible,
        exportCollapseGlyph: this.state.exportCollapseVisible?exportCollapseDownText: collapseUpText });
   }
  render() {
    let tooltip = <Tooltip id="tooltip">Collapse/Hide search results pane!</Tooltip>;
    let exporttooltip = <Tooltip id="tooltip">Collapse/Hide export results pane!</Tooltip>;
    var rows=[];
    if(this.state.meData.length> 0){
      var data=this.state.meData;
        data.map((medata,id)=>{
        rows.push(<tr key={medata.id} className={medata.id}>
                <td style={{width:'3%' }}>{medata.id}</td>
                <td style={{width:'5%' }}>{medata.name}</td>
                <td style={{width:'5%' }}>{medata.severitylevelcode}</td>
                <td style={{width:'7%' }}>{medata.applicabilitytypecode}</td>
                <td style={{width:'5%' }}>{medata.chronicbehavior}</td>
                <td style={{width:'6%' }}>{medata.impactable}</td>
              </tr>);
          });
        }
    return (<div style={{width:'98%'}}> 
      <h1>Search Monitored Events</h1>
       <div><Button onClick={this.onAddnewMonitoredEvent.bind(this,'1')} value="0" bsStyle="primary"> Add New Monitored Event  </Button> </div><br/>
        <div>
            <Form inline>
              <FormGroup controlId="formInlineTxt">
                 <FormControl componentClass="select" placeholder="select"  bsSize="small" onChange={this.onTypechange.bind('1')} >
                      <option value="1">ID</option>
                      <option value="2">Name</option>
                  </FormControl> {'  '}
                  <FormControl type="text" defaultValue={this.state.searchName} onBlur={(value)=>this.setState({searchName:value.target.value})} placeholder="Search" bsSize="small"/>  
                  {' '}
                  <Button  value="0" bsStyle="primary" onClick={this.searchResults.bind(this)} >
                    Search 
                  </Button>
              </FormGroup>
           </Form>
        </div>
      <Searchfilter /> 

      <br/>
      
             <div className="two-column-container">
                <div className="glyphButton">            
                    {/*<OverlayTrigger placement="bottom" overlay={exporttooltip}>
                      <Button onClick={this.exportCollapseChange.bind(this)}> 
                        <Glyphicon glyph={this.state.exportCollapseGlyph} />
                      </Button>
                    </OverlayTrigger>*/}
                     <a href="#" onClick={this.exportCollapseChange.bind(this)}>Show/Hide Custom export </a>
                     <br/>
                  </div> <br/>
                  <Collapse in={this.state.exportCollapseVisible}>
                      <div>  <br/>
                          <ExportExcel pageName='MEsearch' />
                      </div>
                  </Collapse>
             </div>
            <br/>
      {this.state.isgridShow &&
         <div id="table-container">
         <Table striped bordered condensed hover className="table">
            <thead className="thead">
              <tr style={{height:'5%'}} >
                <th style={{width:'3%' }}>ID <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.codesortableGlyph} value="id"/></Button></th>
                <th style={{width:'5%' }}>Name <Button bsStyle="link" onClick={this.sortOnClick.bind(this)}><Glyphicon glyph={this.state.textsortableGlyph} value="NAME"/></Button></th>
                <th style={{width:'5%' }}>Severity <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="SEVERITYLEVELCODE"><Glyphicon glyph={this.state.groupingsortableGlyph} id="Title"/></Button></th>                
                <th style={{width:'7%' }}>Applicability <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="APPLICABILITYTYPECODE"><Glyphicon glyph={this.state.classificationsortableGlyph} id="status"/></Button></th>
                <th style={{width:'5%' }}>Chronic <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="CHRONICBEHAVIOR"><Glyphicon glyph={this.state.specializationsortableGlyph} id="Sev"/></Button></th>
                <th style={{width:'6%' }}>Impactable <Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="IMPACTABLE"><Glyphicon glyph={this.state.specializationsortableGlyph} id="METype"/></Button></th>
                {/*<th style={{width:'8%' }}>Clinical Review<Button bsStyle="link" onClick={this.sortOnClick.bind(this)} value="CLINICALREVIEWCRITERIA"><Glyphicon glyph={this.state.specializationsortableGlyph} id="ProdReady"/></Button></th>*/}
              </tr>
            </thead>
            <tbody>
              {rows}
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
              </tfoot>
              : null}
        </Table>
            <Alert bsStyle="success"> Api call: <br/> <p><strong>{this.state.apiUrl}</strong></p></Alert>
        </div>
        }
           
      {!this.state.isgridShow &&
       <div >
               <div className="container_header">
                  <h3 className="panel-title">Results </h3>
               </div>
              <div className="two-column-container_V2"  >
                  <div className="col-md-3 col-md-offset-0"  style={{width:'50%'}} >Use Search to populate 'Suppliers' area </div>
              </div>
        </div>
      }<br/><br/>
      <div style={{height:'auto'}}></div>
        </div>);
  }
}

export default MESearch;