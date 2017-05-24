import React, { Component } from 'react';
import MulitSelect from 'react-select';
import Button  from 'react-bootstrap/lib/Button';
import Modal  from 'react-bootstrap/lib/Modal';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import '../multiselect.css'

    const FLAVOURS = [
      { label: 'PersonID', value: 'PERSONID' },
      { label: 'FirstName', value: 'FIRSTNM' },
      { label: 'LastName', value: 'LASTNM' },
      { label: 'EmailAddress', value: 'EMAILADDRESS' },
      { label: 'LastmodifiedDate', value: 'RECORDINSERTDT' }
    ];

    var colours = [{
      name: "Red",
      hex: "#F21B1B"
    }, {
      name: "Blue",
      hex: "#1B66F2"
    }, {
      name: "Green",
      hex: "#07BA16"
    }];

class Test extends Component {  
    constructor (props) {           
      super(props);
      this.state=this.getInitialState();
      this.handleSelectChange=this.handleSelectChange.bind(this);
      this.onChangeColor=this.onChangeColor.bind(this);
    }
	getInitialState () {
		return {
			options: FLAVOURS,
			selectColumn: [],
            titleName:'',
            headColor:'Red'
		};
	}
	handleSelectChange (value) {
		this.setState({ selectColumn:value });
	}
    onChangeColor(e){
        alert(e.target.value);
        this.setState({headColor:e.target.value});
    }
  exportResults(e){
      debugger
      window.location.href="http://localhost:3001/persons/?type=excel&title=" +this.state.titleName +"&selectColumn="+this.state.selectColumn +"&headColor="+this.state.headColor+"";
    //   debugger
    //    var specifications = {
    
    //     PERSONID: { // <- the key should match the actual data key 
    //         displayName: 'PersonID', // <- Here you specify the column header 
    //         headerStyle: "" // <- Header style 
    //     },
    //     FIRSTNM: {
    //         displayName: 'FisrtName',
    //         headerStyle: '',
          
    //         width: 150 
    //     },
    //     LASTNM: {
    //         displayName: 'LastName',
    //         headerStyle: 'styles.headerDark',
            
    //         width: 150 
    //     },
    //     EMAILADDRESS: {
    //         displayName: 'Email',
    //         headerStyle: 'styles.headerDark',
    //         width: 220 
    //     } ,
    //     RECORDINSERTDT: {
    //         displayName: 'ModifyDate',
    //         headerStyle: 'styles.headerDark',
    //         width: 120 
    //     }
    //  }

    // var value=this.state.selectColumn.split(',');
    // var option=this.state.options;

    //  var filter=option.filter(function(e){
    //  return this.indexOf(e.value)<0;},value);

    //  const col = Object.assign({}, specifications);
   
    //     filter.forEach(function(val){

    //         delete col[val.value];
    //     });

    //  var ss=col;
       
       return false;
    }
	render () {

		return (
			<div className="section">
        <Form>
          <FormGroup>
             
              <h3 className="create-react-class">{this.props.label}</h3>
              <FormControl type="text" defaultValue={this.state.titleName} onBlur={(value)=>this.setState({titleName:value.target.value})} placeholder="Title"  style={{width:'20%' }} bsSize="small"/>  <br/> <br/>
              <MulitSelect multi simpleValue value={this.state.selectColumn} style={{width:'20%' }} placeholder="Select your favourite(s)" options={this.state.options} onChange={this.handleSelectChange.bind(this)} /> <br/> 
              <FormControl componentClass="select" onChange={this.onChangeColor.bind(this)} style={{width:'20%' }}   placeholder="select"  bsSize="small" > 
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Grey">Grey</option>
              </FormControl> <br/>
              <Button value="0" text="Export" bsStyle="primary" onClick={this.exportResults.bind(this)} >Export</Button>
          </FormGroup>
      </Form>     
			</div>
		);
	}
//});
}
export default Test;
