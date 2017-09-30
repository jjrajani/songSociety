import React from 'react';
// HOC
import withClickEvent from '../hoc/withClickEvent';
// Tools
import { connect } from 'react-redux';
import * as actions from '../../../../../actions';
import { reduxForm } from 'redux-form';
// Components
import { Field } from 'redux-form';

const TitleInputComponent = fields => {
    return (
        <input
            {...fields}
            id="title_input"
            className="title_input"
            name="title_input"
            value={fields.input.value}
            onChange={fields.input.onChange}
            autoComplete="off"
        />
    );
};

const TitleInput = ({
    userId,
    workspace,
    form,
    fields,
    handleSubmit,
    submitTitleForm,
    changeTitleForm,
    initialValues
}) => {
    const { name } = workspace.project;
    return (
        <div>
            <div
                className={
                    workspace.editTitleMode
                        ? 'title_wrapper'
                        : 'hidden title_wrapper'
                }
            >
                <form
                    id="title_input_form"
                    onSubmit={handleSubmit(
                        submitTitleForm.bind(this, workspace, userId)
                    )}
                >
                    <Field
                        type="text"
                        name="title_input"
                        id="title_input"
                        value={name}
                        component={TitleInputComponent}
                        onChange={e => changeTitleForm(e.target.value, name)}
                    />
                </form>
            </div>
            <div
                className={
                    workspace.editTitleMode
                        ? 'hidden title_wrapper'
                        : 'title_wrapper'
                }
            >
                <p htmlFor="title_input" className="workspace_title">
                    {name}
                </p>
            </div>
        </div>
    );
};

function mapStateToProps({ profile, workspace }) {
    return {
        userId: profile.userId,
        workspace,
        initialValues: { title_input: workspace.project.name },
        enableReinitialize: true
    };
}

export default connect(mapStateToProps, {
    changeTitleForm: actions.workspaceActions.changeTitleForm,
    submitTitleForm: actions.workspaceActions.submitTitleForm
})(reduxForm({ form: 'workspaceTitleForm' })(withClickEvent(TitleInput)));
