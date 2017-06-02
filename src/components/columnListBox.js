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
                    { label: 'Name', value: 'name' },
                    { label: 'SeverityLevelCode', value: 'severitylevelcode' },
                    { label: 'ApplicabilityTypeCode', value: 'applicabilitytypecode' },
                    { label: 'ChronicBehavior', value: 'chronicbehavior' },
                    { label: 'Impactable', value: 'impactable' },
                    { label: 'ClinicalReviewCriteria', value: 'clinicalreviewcriteria' }
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
	    
        	<DualListBox options={MEoptions}  selected={selected} onChange={this.onChange} />
			
		}
		</div>) ;
}
}export default ColumnListBox;
