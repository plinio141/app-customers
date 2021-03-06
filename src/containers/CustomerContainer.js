import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import { getCustomerByDni } from '../selectors/customers';
import { fetchCustomers } from './../actions/fetchCustomers'
import { updateCustomer } from './../actions/updateCustomers'

class CustomerContainer extends Component {

    componentDidMount() {
        if(!this.props.customer){
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        const { id } = values;
        return this.props.updateCustomer(id, values).then( r => {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        }).catch(e => {
            throw new SubmissionError(e);
        });
    }

    handleOnBack = () =>{
        this.props.history.goBack();
    }

    handleSubmitSuccess = () =>{
        this.props.history.goBack();
    }

    renderBody = () => (
        <Route path="/customer/:dni/edit" children={
            ({ match }) => {
                const CustomerControl = match ? CustomerEdit : CustomerData;
                return <CustomerControl 
                    {...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess = {this.handleSubmitSuccess}
                    onBack={this.handleOnBack}
                />
            }
        } />
    )
    //<p>Datos del Cliente "{this.props.customer.name}"</p>
    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});

export default withRouter(connect(mapStateToProps,{
    fetchCustomers,
    updateCustomer
})(CustomerContainer));