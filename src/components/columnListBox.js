import React from 'react';
import DualListBox from 'react-dual-listbox';

import 'react-dual-listbox/lib/react-dual-listbox.css';
import '../style.css';
const options = [
      { label: 'PersonID', value: 'PERSONID' },
      { label: 'FirstName', value: 'FIRSTNM' },
      { label: 'LastName', value: 'LASTNM' },
      { label: 'EmailAddress', value: 'EMAILADDRESS' },
      { label: 'LastmodifiedDate', value: 'RECORDINSERTDT' }
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

		return(<div style={{width:'90%'}}>
        <DualListBox options={options} selected={selected} onChange={this.onChange} /></div>) ;
	}
}

export default ColumnListBox;
