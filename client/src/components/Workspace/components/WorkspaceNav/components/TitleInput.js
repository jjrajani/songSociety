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
            placeholder="Untitled"
            onChange={fields.input.onChange}
            autoComplete="off"
        />
    );
};

const TitleInput = ({
    workspace,
    form,
    fields,
    handleSubmit,
    submitTitleForm,
    changeTitleForm
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
                    onSubmit={handleSubmit(submitTitleForm)}
                >
                    <Field
                        type="text"
                        name="title"
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

function mapStateToProps({ workspace }) {
    return { workspace };
}

export default connect(mapStateToProps, {
    changeTitleForm: actions.workspaceActions.changeTitleForm,
    submitTitleForm: actions.workspaceActions.submitTitleForm
})(reduxForm({ form: 'workspaceTitleForm' })(withClickEvent(TitleInput)));
