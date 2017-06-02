import React from 'react';



class MEtableRow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
        var dd=this.props.medata;
		return(
          <tr>
               <td style={{width:'5%' }}></td>
               <td style={{width:'5%' }}></td>
               <td style={{width:'6%' }}>4</td>
               <td style={{width:'5%' }}>5</td>
               <td style={{width:'6%' }}>6</td>
               <td style={{width:'7%' }}>7</td>
            
            </tr>
        ) 
        
}
}export default MEtableRow;
