import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerEdit from '../components/CustomerEdit';
import AppFrame from '../components/AppFrame';

class NewCustomerContainer extends Component {

    handleSubmit = () => {

    }

    handleOnSubmitSuccess = () => {

    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit onSubmit={this.handleSubmit}
            onSubmitSucces={this.handleOnSubmitSuccess}
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

};

export default withRouter(connect(null, null)(NewCustomerContainer));