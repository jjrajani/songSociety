import { store } from '../../../redux_store';

export var toggleTitleEditListner = e => {
    const clickedWorkspaceTitle =
        e.target.attributes.class.value
            .split(' ')
            .indexOf('workspace_title') !== -1;

    clickedWorkspaceTitle
        ? store.dispatch({ type: 'EDIT_TITLE_ON', payload: true })
        : store.dispatch({ type: 'EDIT_TITLE_OFF', payload: false });
};
