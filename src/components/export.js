import React, { Component } from 'react';
import DualListBox from 'react-dual-listbox';
import MulitSelect from 'react-select';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Column from './columnListBox';
import '../multiselect.css';

const FLAVOURS = [
      { label: 'PersonID', value: 'PERSONID' },
      { label: 'FirstName', value: 'FIRSTNM' },
      { label: 'LastName', value: 'LASTNM' },
      { label: 'EmailAddress', value: 'EMAILADDRESS' },
      { label: 'LastmodifiedDate', value: 'RECORDINSERTDT' }
    ];
class Export extends Component {  
    constructor (props) {           
      super(props);
      this.state=this.getInitialState();
      this.handleSelectChange=this.handleSelectChange.bind(this);
      this.exportResults=this.exportResults.bind(this);
      this.onChangeHeadingColor=this.onChangeHeadingColor.bind(this);
      this.onChangeTableHeaderColor=this.onChangeTableHeaderColor.bind(this);
      this.onChangeTableRowColor=this.onChangeTableRowColor.bind(this);
      this.onColumnChange=this.onColumnChange.bind(this);
    }
	getInitialState () {
		return {
			options: FLAVOURS,
			selectColumn: [],
      selected:[],
      titleName:'',
      headColor:'Red',
      tableHead:'Red',
      tableRow:'Red',
      isValid:false,
      validateMsg:''
		};
	}
	handleSelectChange (value) {
		this.setState({ selectColumn:value });
	}
  onChangeHeadingColor(e){
     this.setState({headColor:e.target.value});
  }
  onChangeTableHeaderColor(e){
     this.setState({tableHead:e.target.value});
  }
  onChangeTableRowColor(e){
     this.setState({tableRow:e.target.value});
  }
  onColumnChange(selected) {
		this.setState({ selected });
	}
  exportResults(e){
    debugger
      if( this.props.pageName == 'person' && this.state.selectColumn != undefined && this.state.titleName !=""){
        window.location.href="http://localhost:3001/persons/?type=excel&title=" +this.state.titleName +"&selectColumn="+this.state.selectColumn +"&headColor="+this.state.headColor+"&tableheader="+this.state.tableHead+"&tablerow="+this.state.tableRow+"";
      }else{
        window.location.href="http://localhost:3001/monitored-events?offset=1&limit=5&type=excel&title=" +this.state.titleName +"&selectColumn="+this.state.selectColumn +"&headColor="+this.state.headColor+"&tableheader="+this.state.tableHead+"&tablerow="+this.state.tableRow+"";
      }
    }
	render () {
    const { selected } = this.state.selected;
		return (
			<div className="export" style={{width:'80%'}}> 
          <div className="container">        
            <div className="row"> 
              <div className="col-sm-1 col-md-1"> <ControlLabel >Title</ControlLabel>  </div>
                  <div className="col-sm-1 col-md-2">
                    <FormGroup controlId="formInlineText" > 
                        <FormControl type="text" defaultValue={this.state.titleName} onChange={(value)=>this.setState({titleName:value.target.value})} placeholder="Title"  bsSize="small"/> 
                  </FormGroup>
                 </div>     
            <div className="col-sm-1 col-md-1"><ControlLabel  >Heading:</ControlLabel> </div>
            <div className="col-sm-1 col-md-2">
                <FormControl componentClass="select" onChange={this.onChangeHeadingColor.bind(this)}   placeholder="select"  bsSize="small" > 
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Grey">Grey</option>
              </FormControl> 
            </div>
             </div>
           </div>
       <div className="container">        
            <div className="row"> 
              <div className="col-sm-1 col-md-1"> <ControlLabel >Table header</ControlLabel>  </div>
                  <div className="col-sm-1 col-md-2">
                      <FormControl componentClass="select" onChange={this.onChangeTableHeaderColor.bind(this)}   placeholder="select"  bsSize="small" > 
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Grey">Grey</option>
                      </FormControl> 
                 </div>     
            <div className="col-sm-1 col-md-1"><ControlLabel  >Table Row:</ControlLabel> </div>
            <div className="col-sm-1 col-md-2">
                <FormControl componentClass="select" onChange={this.onChangeTableRowColor.bind(this)}   placeholder="select"  bsSize="small" > 
                    <option value="LightCoral">LightCoral</option>
                    <option value="SlateBlue">SlateBlue</option>
                    <option value="SlateGrey">SlateGrey</option>
                    <option value="Cyan">Cyan</option>
              </FormControl> 
            </div>
            </div>
           </div>
      <div className="container">        
            <div className="row"> 
              <div className="col-sm-1 col-md-1"><ControlLabel  >Column(s):</ControlLabel> </div>
                  <div className="col-sm-1 col-md-2"style={{width:'40%'}} >
                     <Column onChange={this.handleSelectChange} pageName={this.props.pageName} />
                 </div>     
            <div className="col-sm-1 col-md-2"><br/><br/>
              <Button value="0" text="Export" bsStyle="primary" onClick={this.exportResults.bind(this)} >Export</Button>
              {this.state.selectColumn != "" &&
                <span style={{color:'red'}}> </span>
              }
            </div>
            </div>
       </div><br/>
       <div>

      </div>
           
			</div>
		);
	}
}
export default Export;
