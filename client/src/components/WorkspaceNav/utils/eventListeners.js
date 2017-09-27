import { store } from '../../../redux_store';

export var toggleTitleEditListner = e => {
    const clickedWorkspaceTitle =
        e.target.attributes.class.value
            .split(' ')
            .indexOf('workspace_title') !== -1;

    const clickedWindow =
        e.target.attributes.class.value.split(' ').indexOf('title_input') ===
        -1;

    if (clickedWorkspaceTitle) {
        store.dispatch({ type: 'EDIT_TITLE_ON', payload: true });
    } else if (clickedWindow) {
        store.dispatch({ type: 'EDIT_TITLE_OFF', payload: false });
    }
};
