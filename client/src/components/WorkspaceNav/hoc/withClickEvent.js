import { toggleTitleEditListner } from '../utils/eventListeners';

import React, { Component } from 'react';
// This component is to handle the toggle of the title_input
// in the WorkspaceNav component
function withClickEvent(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            window.addEventListener('click', toggleTitleEditListner);
        }
        componentDidUpdate() {
            if (this.props.workspace.editTitleMode === true) {
                document.getElementById('title_input').focus();
            }
        }
        componentWillUnmount() {
            window.removeEventListener('click', toggleTitleEditListner);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}

export default withClickEvent;
