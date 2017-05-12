import React, {Component} from 'react';
import DualListBox from 'react-dual-listbox';
import ListBox from 'react-listbox';
import AddnewMonitoredEvent from './addnewMonitoredEvent';
import {MEModel} from "../../shared/constants";
import 'react-listbox/dist/react-listbox.css';
import '../../style.css';
class MEContent extends Component {  
    constructor (props) {           
      super(props);
    }

  componentWillMount() {
     
   }

   componentDidMount() {
      
   }

   componentWillReceiveProps(newProps) {    
     //alert(44);
   }
 render() {
 
    return (<div><div>{this.props.mepage}</div>
        { this.props.mepage == 1 &&
            <AddnewMonitoredEvent meModel={MEModel } />
        }
     </div>);
    }
}
   export default  MEContent