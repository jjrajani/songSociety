import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { SurveyForm, SurveyFormReview } from './components';

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview
                    onCancel={() => this.setState({ showFormReview: false })}
                />
            );
        }
        return (
            <SurveyForm
                onSurveySubmit={() =>
                    this.setState({
                        showFormReview: true
                    })}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

/*
  Add reduxForm here so that if this component ever dismounts the fields will be dumped.
  we alos use redux form on the formNew component that we disable destroyOnUnmount so that
  the fields are not destryoed if the form is unmounted, only if this entire page is unmounted
*/
export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
