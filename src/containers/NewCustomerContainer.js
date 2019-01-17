import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';
import CustomerEdit from '../components/CustomerEdit';
import AppFrame from '../components/AppFrame';
import { insertCustomer } from './../actions/insertCustomer'


class NewCustomerContainer extends Component {

    handleSubmit = values => {
        return this.props.insertCustomer(values).then( r => {
            if(r.error){
                throw new SubmissionError(r.payload);
            }
        }).catch(e => {
            throw new SubmissionError(e);
        });
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
            onSubmitSuccess={this.handleOnSubmitSuccess}
            onBack={this.handleOnBack}
            ></CustomerEdit>
    }
    render() {
        return (
            <div>
                <AppFrame header={`Crear cliente`}
                    body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer : PropTypes.func.isRequired,
};

export default withRouter(connect(null, { insertCustomer })(NewCustomerContainer));