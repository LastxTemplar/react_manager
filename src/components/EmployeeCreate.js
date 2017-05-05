import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Name"
						placeholder="Jane"
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
						value={this.props.name}
					/>
				</CardSection>

				<CardSection>
					<Input 
						label="Phone"
						placeholder="555-123-123"
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
						value={this.props.phone}
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>
						Create
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
