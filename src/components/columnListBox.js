import React from 'react';
import DualListBox from 'react-dual-listbox';
import '../style.css';
import 'react-dual-listbox/lib/react-dual-listbox.css';

const options = [
				{ label: 'PersonID', value: 'PERSONID' },
				{ label: 'FirstName', value: 'FIRSTNM' },
				{ label: 'LastName', value: 'LASTNM' },
				{ label: 'EmailAddress', value: 'EMAILADDRESS' },
				{ label: 'LastmodifiedDate', value: 'RECORDINSERTDT' }
			];

var MEoptions = [
                    { label: 'ID', value: 'id' },
                    { label: 'NAME', value: 'name' },
                    { label: 'SEVERITYLEVELCODE', value: 'severitylevelcode' },
                    { label: 'APPLICABILITYTYPECODE', value: 'applicabilitytypecode' },
                    { label: 'CHRONICBEHAVIOR', value: 'chronicbehavior' },
                    { label: 'IMPACTABLE', value: 'impactable' },
                    { label: 'CLINICALREVIEWCRITERIA', value: 'clinicalreviewcriteria' }
               ];
class ColumnListBox extends React.Component {
	constructor() {
		super();

		this.state = { selected: [] };

		this.onChange = this.onChange.bind(this);
	}

	onChange(selected) {
		this.setState({ selected });
        this.props.onChange(selected)
	}

	render() {
		const { selected } = this.state;
		return(<div >
		{this.props.pageName=='person' &&
        	<DualListBox options={options} selected={selected} onChange={this.onChange} />
		}
		{this.props.pageName=='MEsearch' &&
	    	<div style={{width:'100%'}}>
        			<DualListBox options={MEoptions} selected={selected} onChange={this.onChange} />
			</div>
		}
		</div>) ;
}
}export default ColumnListBox;
